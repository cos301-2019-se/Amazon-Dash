import os
import uuid
import json

from flask import Flask, request, Response

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


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)

    if not test_config:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    if not os.path.isdir(app.instance_path):
        os.makedirs(app.instance_path)

    @app.route('/api/verify', methods=['POST'])
    def verify() -> Response:
        """
        A method to verify a user and supply them with a token to access the service

        :return: if the request does not contain a body a response is returned with status 400 and text "Request body
        missing". If the body is missing either the id or secret field a response is returned with status 401 and text
        "Invalid id or secret". If the request is valid a response containing a json object containing a success flag
        and token is returned with status 200.
        """
        body = request.get_json()
        # ensure the body exists
        if body:
            body_id = body.get("id")
            body_secret = body.get("secret")

            # ensure the id and secret exist
            if body_id and body_secret:
                json_val = json.dumps({"success": True, "token": str(uuid.uuid4())})
                return Response(json_val, status=200, mimetype='application/json')
            return Response("Invalid id or secret", status=401, mimetype='application/text')
        else:
            return Response("Request body missing", status=400, mimetype='application/text')

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

    return app
