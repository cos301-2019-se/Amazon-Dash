from flask import request, Response, current_app as app
from backend.lib.db import MongoClient
from datetime import datetime, timedelta
from functools import wraps
from bson.objectid import ObjectId
from Crypto.Cipher import AES
from Crypto import Random
import hashlib
import base64
import jwt


BLOCK_SIZE = 16


def pad(s):
    return s + (BLOCK_SIZE - len(s) % BLOCK_SIZE) * chr(BLOCK_SIZE - len(s) % BLOCK_SIZE)


def unpad(s):
    return s[:-ord(s[len(s) - 1:])]


def encrypt_aes256(raw, password):
    private_key = hashlib.sha256(password.encode("utf-8")).digest()
    raw = pad(raw)
    iv = Random.new().read(AES.block_size)
    cipher = AES.new(private_key, AES.MODE_CBC, iv)
    return base64.b64encode(iv + cipher.encrypt(raw))


def decrypt_aes256(enc, password):
    private_key = hashlib.sha256(password.encode("utf-8")).digest()
    enc = base64.b64decode(enc)
    iv = enc[:16]
    cipher = AES.new(private_key, AES.MODE_CBC, iv)
    return unpad(cipher.decrypt(enc[16:]))


def encode_jwt(user_id, secret_key, google=False):
    exp = datetime.utcnow() + timedelta(days=30)
    payload = {
        'exp': exp,
        'iat': datetime.utcnow(),
        'sub': user_id,
        'google': google,
    }
    return jwt.encode(
        payload,
        secret_key,
        algorithm='HS256',
    ), exp


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
