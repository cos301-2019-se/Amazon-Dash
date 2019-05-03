import os
import uuid
import json
import bcrypt

from datetime import datetime, timedelta
from flask import Flask, request, Response
from services.aws import get_ec2_instances
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS
from bson.objectid import ObjectId

ec2_instances_mock_data: list = [
    {
        "id": 1,
        "title": "Analytics"
    },
    {
        "id": 2,
        "title": "Application Integration"
    },
    {
        "id": 3,
        "title": "AR and VR"
    }
]


def create_app(db, test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    CORS(app)

    if not test_config:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    if not os.path.isdir(app.instance_path):
        os.makedirs(app.instance_path)

    @app.route('/api/login', methods=['POST'])
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
                users = list(db.find('users', {'email': email}))
                user = users[0] if users else None
                if user and check_password_hash(user['password'], user['salt'] + password + user['salt']):
                    user_id = str(user['_id'])
                    token = str(uuid.uuid4())
                    ttl = 128000
                    db.insert('access', {
                        'user_id': user_id,
                        'token': token,
                        'expires': datetime.now() + timedelta(seconds=ttl),
                        })
                    res = {'token': token, 'ttl': ttl}
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

<<<<<<< HEAD
    @app.route('/api/register', methods=['POST'])
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
                db.insert('users', {
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

    @app.route('/api/instances', methods=['GET'])
    def instances():
        """
        A method to get the AWS instances.

        Returns
        -------
        Response
            an http response
        """
        token = request.args.get('token')
        if token:
            tokens = list(db.find('access', {'token': token}))
            token = tokens[0] if tokens and tokens[0]['expires'] > datetime.now() else None
            if token:
                user = list(db.find('users', {'_id': ObjectId(token['user_id'])}))[0]
                access_key = user['access_key']
                secret_key = user['secret_key']
                instances = json.dumps(get_ec2_instances(access_key, secret_key))
                return Response(instances, status=200, mimetype='application/json')
            else:
                return Response('Invalid token', status=403, mimetype='application/text')
        else:
            return Response('Token missing', status=401, mimetype='application/text')

=======
    @app.route('/api/ec2_instances', methods=['POST'])
    def ec2_instances() -> Response:
        """
        A method to return a list of ec2 instances given a user token
        """
        body = request.get_json()
        if body:
            body_token = body.get("token")
            # ensure the id and secret exist
            if body_token:
                json_val = json.dumps(ec2_instances_mock_data)
                return Response(json_val, status=200, mimetype='application/json')
            return Response("Token missing", status=400, mimetype='application/text')
        else:
            return Response("Request body missing", status=400, mimetype='application/text')

>>>>>>> develop
    return app
