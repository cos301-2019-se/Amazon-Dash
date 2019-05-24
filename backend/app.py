import os
import uuid
import json
import bcrypt

from datetime import datetime, timedelta
from config import Config
from lib.db import MongoClient
from flask import Flask, request, Response
from services import aws
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS
from lib.util import json_serialize
from services.authentication import require_auth
from botocore.exceptions import ClientError
import requests


config = Config('setup.cfg')
client = MongoClient(host=config.get_dbhost(), port=config.get_dbport(), database='amazondash')


def create_app(test_config=None):
    ttl = 128000
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True,
                static_folder='./dist', static_url_path='')
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

    @app.route('/')
    def root():
        return app.send_static_file('index.html')

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
                users = list(client.find('users', {'email': email}))
                user = users[0] if users else None
                if user and check_password_hash(user['password'], user['salt'] + password + user['salt']):
                    user_id = str(user['_id'])
                    token = str(uuid.uuid4())

                    client.insert('access', {
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
                client.insert('users', {
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
    @require_auth
    @aws.boto3_client()
    def instances(user, client):
        """
        A method to get the AWS instances.

        Parameters
        ----------
        user : dict
            The currently authenticated user.
        client : boto3.Client
            The client authenticated with the user.
        Returns
        -------
        Response
            an http response
        """
        instances = json.dumps(aws.get_ec2_instances(client), default=json_serialize)
        return Response(instances, status=200, mimetype='application/json')

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
                json_val = json.dumps({"Nothing": "nothing"})
                return Response(json_val, status=200, mimetype='application/json')
            return Response("Token missing", status=400, mimetype='application/text')
        else:
            return Response("Request body missing", status=400, mimetype='application/text')

    @app.route('/api/google_authentication', methods=["POST"])
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

                        client.insert('users', {
                            'email': auth_email,
                            'google_token': auth_token,
                            'access_key': access_key,
                            'secret_key': secret_key,
                        })

                        client.insert('access', {
                            'user_id': auth_email,
                            'token': token,
                            'expires': datetime.now() + timedelta(seconds=ttl),
                        })
                        res = {'token': token, 'ttl': ttl}
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

    @app.route('/api/instances/<instance_id>/stop')
    @require_auth
    @aws.boto3_client()
    def stop_instance(user, client, instance_id):
        try:
            aws.stop_ec2_instance(client, instance_id)
            return Response('Success', status=200, mimetype='application/text')
        except ClientError as ex:
            message, status = aws.boto3_errors(ex)
            return Response(message, status=status, mimetype='application/text')

    @app.route('/api/instances/<instance_id>/start')
    @require_auth
    @aws.boto3_client()
    def start_instance(user, client, instance_id):
        try:
            aws.start_ec2_instance(client, instance_id)
            return Response('Success', status=200, mimetype='application/text')
        except ClientError as ex:
            message, status = aws.boto3_errors(ex)
            return Response(message, status=status, mimetype='application/text')

    @app.route('/api/instances/<instance_id>/restart')
    @require_auth
    @aws.boto3_client()
    def restart_instance(user, client, instance_id):
        try:
            aws.stop_ec2_instance(client, instance_id)
            aws.start_ec2_instance(client, instance_id)
            return Response('Success', status=200, mimetype='application/text')
        except ClientError as ex:
            message, status = aws.boto3_errors(ex)
            return Response(message, status=status, mimetype='application/text')

    return app
