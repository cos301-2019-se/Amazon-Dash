import os
import uuid

from flask import Flask, request, jsonify


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
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    # a simple page that says hello
    @app.route('/apiverify', methods=['POST'])
    def verify():
        body = request.get_json()
        if body:
            body_id = body.get("id")
            body_secret = body.get("secret")

            if body_id and body_secret:
                return jsonify({"success": True, "token": uuid.uuid4()})
            return jsonify({"success": False})
        else:
            return "invalid request body missing"

    return app
