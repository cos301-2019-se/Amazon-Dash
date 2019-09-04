from flask import request, Response, current_app as app
from backend.lib.db import MongoClient
from datetime import datetime, timedelta
from functools import wraps
from bson.objectid import ObjectId
import jwt


def encode_jwt(user_id, secret_key, google=False):
    payload = {
        'exp': datetime.utcnow() + timedelta(days=30),
        'iat': datetime.utcnow(),
        'sub': user_id,
        'google': google,
    }
    return jwt.encode(
        payload,
        secret_key,
        algorithm='HS256',
    )


def decode_jwt(token, secret_key):
    try:
        payload = jwt.decode(token, secret_key)
        return payload['sub'], payload['google']
    except jwt.ExpiredSignatureError:
        raise Exception('Signature expired. Please login again')
    except jwt.InvalidTokenError:
        raise Exception('Invalid Token. Please login again')


def check_auth(token, secret_key):
    if not token:
        return {'result': False, 'message': 'No token provided'}
    try:
        decode_jwt(token, secret_key)
        return {'result': True}
    except Exception as ex:
        return {'result': False, 'message': str(ex)}
        return {'result': False, 'message': 'Invalid token'}


def require_auth(func):
    @wraps(func)
    def wrapper(*args, **kwargs) -> Response:
        token = request.cookies.get('auth_token')
        if token:
            try:
                user_id, google = decode_jwt(token, app.config.get('SECRET_KEY'))
            except Exception as ex:
                return Response(str(ex), status=401, mimetype='application/text')
            if google:
                user = list(MongoClient.find('google_users', {'user_id': user_id}))[0]
            else:
                user = list(MongoClient.find('users', {'_id': ObjectId(user_id)}))[0]
            return func(user, *args, **kwargs)
        else:
            return Response('Token missing', status=401, mimetype='application/text')
    return wrapper
