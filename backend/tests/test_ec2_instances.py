import json
from unittest import TestCase

from flask import Response

from app import create_app


class TestEc2Instances(TestCase):
    app = None
    endpoint = "/api/ec2_instances"

    def setUp(self) -> None:
        temp_app = create_app()
        temp_app.config['TESTING'] = True
        temp_app.config['WTF_CSRF_ENABLED'] = False
        temp_app.config['DEBUG'] = False

        self.app = temp_app.test_client()

    def tearDown(self):
        pass

    def test_missing_body(self):
        ret_value = self.app.post(self.endpoint)
        self.assertEqual(400, ret_value.status_code)
        self.assertEqual(b'Request body missing', ret_value.data)

    def test_correct_details(self):
        ret_value: Response = self.app.post(self.endpoint, data=json.dumps({"token": "value"}),
                                            content_type='application/json')
        self.assertEqual(200, ret_value.status_code)
        self.assertEqual("application/json", ret_value.content_type)
        json_value = ret_value.get_json()
        self.assertEqual(list, type(json_value))
