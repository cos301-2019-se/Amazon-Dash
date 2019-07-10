from backend.app import app
from backend.config import Config
from backend.lib.db import MongoClient

if __name__ == "__main__":
    config = Config('setup.cfg')
    MongoClient(
        host=config.get_dbhost(),
        port=config.get_dbport(),
        user=config.get_dbuser(),
        password=config.get_dbpass(),
        database='amazondash',
    )
    app.run()
