import os
from flask import Flask
from flask_cors import CORS
from backend.app.views.auth import auth
from backend.app.views.home import home
from backend.app.views.ec2 import ec2

app = Flask(__name__, instance_relative_config=True,
            static_folder='./dist/static', template_folder='./dist')
# ensure the instance folder exists
if not os.path.isdir(app.instance_path):
    os.makedirs(app.instance_path)
if os.path.exists(os.path.join(app.instance_path, 'config.py')):
    app.config.from_pyfile('config.py')
CORS(app)
app.register_blueprint(auth)
app.register_blueprint(home)
app.register_blueprint(ec2)
