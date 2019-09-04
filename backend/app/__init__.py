import os
from flask import Flask
from flask_cors import CORS
from backend.app.views.auth import auth
from backend.app.views.home import home
from backend.app.views.ec2 import ec2
from backend.config import Config
from backend.lib.db import MongoClient
from flask_talisman import Talisman

config = Config('setup.cfg')
if config.get_dburi():
    MongoClient(uri=config.get_dburi(), database='amazondash')
else:
    MongoClient(
        host=config.get_dbhost(),
        port=config.get_dbport(),
        user=config.get_dbuser(),
        password=config.get_dbpass(),
        database='amazondash',
    )

app = Flask(__name__, instance_relative_config=True,
            static_folder='./dist/static', template_folder='./dist')
# ensure the instance folder exists
app.config.from_object('config')
if not os.path.isdir(app.instance_path):
    os.makedirs(app.instance_path)
if os.path.exists(os.path.join(app.instance_path, 'config.py')):
    app.config.from_pyfile('config.py')
CORS(app)
Talisman(app, content_security_policy={
    'default-src': [
        "'self'",
        '*.google.com',
        "'unsafe-inline'",
        "'unsafe-eval'",
    ],
    'img-src': ['*', 'data:image/png'],
})
app.register_blueprint(auth)
app.register_blueprint(home)
app.register_blueprint(ec2)
