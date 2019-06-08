import os
from flask import Flask
from flask_cors import CORS
from .views.auth import auth
from .views.home import home
from .views.ec2 import ec2

app = Flask(__name__, instance_relative_config=True)
# ensure the instance folder exists
if not os.path.isdir(app.instance_path):
    os.makedirs(app.instance_path)
CORS(app)
app.register_blueprint(auth)
app.register_blueprint(home)
app.register_blueprint(ec2)
