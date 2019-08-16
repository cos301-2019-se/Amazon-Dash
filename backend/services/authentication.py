from flask import request, Response
from backend.lib.db import MongoClient
from datetime import datetime
from functools import wraps
from bson.objectid import ObjectId


def check_auth(token):
    if not token:
        return {'result': False, 'message': 'No token provided'}
    tokens = list(MongoClient.find('access', {'token': token}))
    token = tokens[0] if tokens else None
    if not token:
        return {'result': False, 'message': 'Invalid token'}
    elif token['expires'] <= datetime.now():
        return {'result': False, 'message': 'Token has expired'}
    return {'result': True, 'message': 'Authenticated'}


def require_auth(func):
    @wraps(func)
    def wrapper(*args, **kwargs) -> Response:
        token = request.headers.get('authorization')
        if token:
            tokens = list(MongoClient.find('access', {'token': token}))
            token = tokens[0] if tokens and tokens[0]['expires'] > datetime.now() else None
            if token:
                user = list(MongoClient.find('users', {'_id': ObjectId(token['user_id'])}))[0]
                return func(user, *args, **kwargs)
            else:
                return Response('Invalid token', status=403, mimetype='application/text')
        else:
            return Response('Token missing', status=401, mimetype='application/text')
    return wrapper
