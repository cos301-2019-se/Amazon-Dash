import app
from config import Config
from db import MongoClient

if __name__ == "__main__":
    config = Config('setup.cfg')
    client = MongoClient(host=config.get_dbhost(), port=config.get_dbport(), database='amazondash')
    webapp = app.create_app(client)
    webapp.run(host='0.0.0.0')
