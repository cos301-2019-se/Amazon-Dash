from flask import Blueprint, request, Response, make_response, current_app as app, jsonify, session
from backend.lib.db import MongoClient
from werkzeug.security import check_password_hash, generate_password_hash
from datetime import datetime, timedelta
from backend.services.authentication import check_auth, encode_jwt, encrypt_aes256, decrypt_aes256
import bcrypt
import json


auth = Blueprint('auth', __name__)


@auth.route('/api/login', methods=['POST'])
def verify() -> Response:
    """
    A method to log a user in and supply them with a token to access the service

    Returns
    -------
    Response
        an http response
    """
    body = request.get_json()
    # ensure the body exists
    if body:
        email = body.get('email')
        password = body.get('password')

        # ensure the id and secret exist
        if email and password:
            users = list(MongoClient.find('users', {'email': email}))
            user = users[0] if users else None
            if user and check_password_hash(user['password'], user['salt'] + password + user['salt']):
                user_id = str(user['_id'])
                access_key = decrypt_aes256(user['access_key'], password).decode()
                secret_key = decrypt_aes256(user['secret_key'], password).decode()
                session['access_key'] = access_key
                session['secret_key'] = secret_key
                token, exp = encode_jwt(user_id, app.config.get('SECRET_KEY'))
                response = make_response(jsonify({'status': 'success', 'message': 'Successfully logged in'}))
                response.set_cookie('auth_token', token, httponly=True,
                                    secure=app.config.get('PRODUCTION', False), expires=exp)
                return response, 200
            else:
                return Response(json.dumps('Login unsucessful'),
                                status=401, mimetype='application/text')
        else:
            return Response(json.dumps({
                'message': f"Missing fields: {', '.join([x for x in ['email', 'password'] if not body.get(x)])}"
            }), status=401, mimetype='application/json')
    else:
        return Response("Request body missing", status=400, mimetype='application/text')


@auth.route('/api/register', methods=['POST'])
def register():
    """
    A method to register a user.

    Returns
    -------
    Response
        an http response
    """
    body = request.get_json()
    if body:
        email = body.get('email')
        password = body.get('password')
        access_key = body.get('access_key')
        secret_key = body.get('secret_key')

        if all((email, password, access_key, secret_key)):
            if MongoClient.count('users', {'email': email}):
                return Response("That email address already exists", status=401, mimetype="application/text")
            salt = bcrypt.gensalt().decode('utf-8')
            password_hash = generate_password_hash(salt + password + salt)
            insert_result = MongoClient.insert('users', {
                'email': email,
                'password': password_hash,
                'salt': salt,
                'access_key': encrypt_aes256(access_key, password).decode(),
                'secret_key': encrypt_aes256(secret_key, password).decode(),
            })
            user_id = str(insert_result.inserted_id)
            token, exp = encode_jwt(user_id, app.config.get('SECRET_KEY'))
            response = make_response(jsonify({'status': 'success', 'message': 'Registered successfully'}))
            response.set_cookie('auth_token', token, secure=app.config.get('PRODUCTION', False), httponly=True,
                                expires=exp)
            session['access_key'] = access_key
            session['secret_key'] = secret_key
            return response, 201
        else:
            missing_fields = ', '.join([x for x in ['email', 'password', 'access_key', 'secret_key']
                                        if not body.get(x)])
            return Response(f"Missing fields: {missing_fields}", status=401, mimetype='application/text')
    else:
        return Response("Request body missing", status=400, mimetype='application/text')


@auth.route('/api/logout')
def logout():
    del session['access_key']
    del session['secret_key']
    response = make_response()
    response.set_cookie('auth_token', '', expires=datetime.now() + timedelta(days=-1))
    return response, 204


@auth.route('/api/register/google', methods=["POST"])
def google_authentication() -> Response:
    """
    A method to authenticate with google.

    Returns
    -------
    Response
        an http response
    """

    body = request.get_json()
    if not body:
        return Response("Request body missing", status=400, mimetype='application/text')
    access_token = body.get('accessToken')
    email = body.get('email')
    user_id = body.get('userId')
    aws_access_key = body.get('accessKey')
    aws_secret_key = body.get('secretKey')
    if not all((access_token, email, user_id, aws_access_key, aws_secret_key)):
        missing_fields = ', '.join([x for x in ['access_token', 'email', 'user_id', 'aws_access_key', 'aws_secret_key']
                                    if not body.get(x)])
        return Response(f"Missing fields: {missing_fields}", status=401, mimetype='application/text')
    if MongoClient.count('google_users', {'userId': user_id}):
        MongoClient.update('google_users', {'userId': user_id}, {
            'access_token': access_token,
            'access_key': encrypt_aes256(aws_access_key, user_id).decode(),
            'secret_key': encrypt_aes256(aws_secret_key, user_id).decode(),
        })
    else:
        MongoClient.insert('google_users', {
            'email': email,
            'user_id': user_id,
            'access_token': access_token,
            'access_key': encrypt_aes256(aws_access_key, user_id),
            'secret_key': encrypt_aes256(aws_secret_key, user_id),
        })
    try:
        token, exp = login_with_google(email, user_id)
        response = make_response(jsonify({'status': 'success', 'message': 'Successfully logged in'}))
        response.set_cookie('auth_token', token, secure=app.config.get('PRODUCTION', False),
                            httponly=True, expires=exp)
    except Exception as ex:
        return Response(str(ex), status=400, mimetype='application/text')
    return response, 201


@auth.route('/api/login/google', methods=['POST'])
def google_login() -> Response:
    body = request.get_json()
    if not body:
        return Response("Request body missing", status=400, mimetype='application/text')
    email = body.get('email')
    user_id = body.get('userId')
    if not all((email, user_id)):
        missing_fields = ', '.join([x for x in ['email', 'user_id'] if not body.get(x)])
        return Response(f"Missing fields: {missing_fields}", status=401, mimetype='application/text')
    try:
        token, exp = login_with_google(email, user_id)
        response = make_response(jsonify({'status': 'success', 'message': 'Successfully logged in'}))
        response.set_cookie('auth_token', token, secure=app.config.get('PRODUCTION', False),
                            httponly=True, expires=exp)
    except Exception as ex:
        return Response(str(ex), status=400, mimetype='application/text')
    return response, 200


def login_with_google(email, user_id):
    if not MongoClient.count('google_users', {'user_id': user_id, 'email': email}):
        raise Exception('User not found, please register first')
    user = MongoClient.find('google_users', {'user_id': user_id, 'email': email})[0]
    session['access_key'] = decrypt_aes256(user['access_key'], user_id).decode()
    session['secret_key'] = decrypt_aes256(user['secret_key'], user_id).decode()
    token, exp = encode_jwt(user_id, app.config.get('SECRET_KEY'), google=True)
    return token, exp


@auth.route('/api/authenticated')
def check_authentication():
    token = request.cookies.get('auth_token')
    return json.dumps(check_auth(token, app.config.get('SECRET_KEY')))
