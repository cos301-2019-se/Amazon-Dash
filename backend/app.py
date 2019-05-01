import os

from flask import Flask, request


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)

    if test_config is None:
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
    @app.route('/verify', methods=['POST'])
    def verify():
        body = request.get_json()
        id = body.get("id")
        secret = body.get("secret")

        if id and secret is not None:
            print("gottem")
        return 'ID or SECRET is missing'

    return app


def run():
    create_app().run()
