from backend.app import app
from backend.config import Config
from backend.lib.db import MongoClient
from gevent.pywsgi import WSGIServer

if __name__ == "__main__":
    config = Config('setup.cfg')
    MongoClient(host=config.get_dbhost(), port=config.get_dbport(), database='amazondash')
    server = WSGIServer(('0.0.0.0', 5000), app)
    server.serve_forever()
