from unittest import TestCase
from backend.config import Config
from backend.app import app
from backend.lib.db import MongoClient


def endpoint_test_factory(url):
    class EndpointTestCase(TestCase):
        endpoint = url

        def setUp(self) -> None:
            config = Config()
            MongoClient(host=config.get_dbhost(), port=config.get_dbport(), database='amazondashtest')
            app.config['TESTING'] = True
            app.config['WTF_CSRF_ENABLED'] = False
            app.config['DEBUG'] = False

            self.app = app.test_client()

        def tearDown(self):
            pass
    return EndpointTestCase
