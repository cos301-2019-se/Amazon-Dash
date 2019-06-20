from flask import Blueprint, request, Response
from backend.lib.db import MongoClient
from werkzeug.security import check_password_hash, generate_password_hash
from datetime import datetime, timedelta
import requests
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
                return Response(json.dumps({'message': 'Login unsuccessful'}),
                                status=403, mimetype='application/json')
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


@auth.route('/api/google_authentication', methods=["POST"])
def google_authentication() -> Response:
    """
    A method to authenticate with google.

    Returns
    -------
    Response
        an http response
    """

    check_endpoint = "https://www.googleapis.com/oauth2/v1/tokeninfo?access_token="

    body = request.get_json()

    if body:
        auth_email = body.get("email")
        auth_token = body.get("token")
        access_key = body.get("access_key")
        secret_key = body.get("secret_key")

        if all((auth_email, auth_token, access_key, secret_key)):
            try:
                r = requests.get(check_endpoint + auth_token)
                data = r.json()

                if data.get("issued_to") and data.get("issued_to") == auth_email:
                    token = str(uuid.uuid4())

                    MongoClient.insert('users', {
                        'email': auth_email,
                        'google_token': auth_token,
                        'access_key': access_key,
                        'secret_key': secret_key,
                    })

                    MongoClient.insert('access', {
                        'user_id': auth_email,
                        'token': token,
                        'expires': datetime.now() + timedelta(seconds=128000),
                    })
                    res = {'token': token, 'ttl': 128000}
                    return Response(json.dumps(res), status=200, mimetype='application/json')
            except Exception as e:
                res = {'error': e}
                return Response(json.dumps(res), status=400, mimetype='application/json')
        else:
            return Response(json.dumps({
                'message': "Missing fields: email, token, access_key, or secret_key"
            }), status=401, mimetype='application/text')
    else:
        return Response("Request body missing", status=401, mimetype='application/text')
