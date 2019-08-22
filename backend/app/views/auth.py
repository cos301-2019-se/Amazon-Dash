from flask import Blueprint, request, Response
from backend.lib.db import MongoClient
from werkzeug.security import check_password_hash, generate_password_hash
from datetime import datetime, timedelta
from backend.services.authentication import check_auth
import bcrypt
import json
import uuid


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
                token = str(uuid.uuid4())

                MongoClient.insert('access', {
                    'user_id': user_id,
                    'token': token,
                    'expires': datetime.now() + timedelta(seconds=128000),
                })
                res = {'token': token, 'ttl': 128000}
                return Response(json.dumps(res), status=200, mimetype='application/json')
            else:
                return Response(json.dumps('Login unsucessful'),
                                status=403, mimetype='application/text')
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
                return Response("That email address already exists", status=403, mimetype="application/text")
            salt = bcrypt.gensalt().decode('utf-8')
            password_hash = generate_password_hash(salt + password + salt)
            MongoClient.insert('users', {
                'email': email,
                'password': password_hash,
                'salt': salt,
                'access_key': access_key,
                'secret_key': secret_key,
            })
            return Response("Registered successfully", status=201, mimetype='application/text')
        else:
            missing_fields = ', '.join([x for x in ['email', 'password', 'access_key', 'secret_key']
                                        if not body.get(x)])
            return Response(f"Missing fields: {missing_fields}", status=401, mimetype='application/text')
    else:
        return Response("Request body missing", status=400, mimetype='application/text')


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
            'access_key': aws_access_key,
            'secret_key': aws_secret_key,
        })
    else:
        MongoClient.insert('google_users', {
            'email': email,
            'user_id': user_id,
            'access_token': access_token,
            'access_key': aws_access_key,
            'secret_key': aws_secret_key,
        })
    try:
        res = login_with_google(email, user_id)
    except Exception as ex:
        return Response(str(ex), status=400, mimetype='application/text')
    return Response(json.dumps(res), status=201, mimetype='application/json')


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
        res = login_with_google(email, user_id)
    except Exception as ex:
        return Response(str(ex), status=400, mimetype='application/text')
    return Response(json.dumps(res), status=200, mimetype='application/json')


def login_with_google(email, user_id):
    if not MongoClient.count('google_users', {'user_id': user_id, 'email': email}):
        raise Exception('User not found, please register first')
    token = str(uuid.uuid4())
    MongoClient.insert('access', {
        'user_id': user_id,
        'token': token,
        'google': True,
        'expires': datetime.now() + timedelta(seconds=128000),
    })
    return {'token': token, 'ttl': 128000}


@auth.route('/api/authenticated')
def check_authentication():
    token = request.headers.get('authorization')
    return json.dumps(check_auth(token))
