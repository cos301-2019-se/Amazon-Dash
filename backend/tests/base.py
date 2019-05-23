from unittest import TestCase
from config import Config
from app import create_app
from lib.db import MongoClient


def endpoint_test_factory(url):
    class EndpointTestCase(TestCase):
        endpoint = url

        def setUp(self) -> None:
            config = Config()
            db = MongoClient(host=config.get_dbhost(), port=config.get_dbport(), database='amazondashtest')
            temp_app = create_app(db)
            temp_app.config['TESTING'] = True
            temp_app.config['WTF_CSRF_ENABLED'] = False
            temp_app.config['DEBUG'] = False

            self.app = temp_app.test_client()

        def tearDown(self):
            pass
    return EndpointTestCase
