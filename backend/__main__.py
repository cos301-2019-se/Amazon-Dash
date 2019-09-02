from backend.app import app
from backend.config import Config
from backend.lib.db import MongoClient
import bcrypt
from werkzeug.security import generate_password_hash
import sys
import os


def gen_password_hash(password):
    salt = bcrypt.gensalt().decode()
    return generate_password_hash(salt + password + salt), salt


if __name__ == "__main__":
    config = Config('setup.cfg')
    MongoClient(host=config.get_dbhost(), port=config.get_dbport(), database='amazondash')
    if len(sys.argv) > 1 and sys.argv[1] == '--test':
        if MongoClient.count('users', {'email': 'testuser@amazon-dash.herokuapp.com'}) < 1:
            password, salt = gen_password_hash('testpassword')
            access_key = os.getenv('AWS_ACCESS_KEY') or 'fake key'
            secret_key = os.getenv('AWS_SECRET_KEY') or 'fake_key'
            MongoClient.insert('users', {
                'email': 'testuser@amazon-dash.herokuapp.com',
                'password': password,
                'salt': salt,
                'access_key': access_key,
                'secret_key': secret_key,
            })
    app.run()
