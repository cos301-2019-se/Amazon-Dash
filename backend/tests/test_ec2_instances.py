from unittest import TestCase
from flask import Response
from app import create_app
from config import Config
from db import MongoClient


class TestEc2Instances(TestCase):
    app = None
    endpoint = "/api/ec2_instances"

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

    def test_missing_body(self):
        ret_value: Response = self.app.post(self.endpoint)
        self.assertEqual(400, ret_value.status_code)
        self.assertEqual(b'Request body missing', ret_value.data)
