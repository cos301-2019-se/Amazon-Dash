import json
from unittest import TestCase, main

from flask import Response

from app import create_app


# TODO write tests for verify
class TestVerify(TestCase):
    app = None
    endpoint = "/api/verify"

    def setUp(self) -> None:
        temp_app = create_app()
        temp_app.config['TESTING'] = True
        temp_app.config['WTF_CSRF_ENABLED'] = False
        temp_app.config['DEBUG'] = False

        self.app = temp_app.test_client()

    def tearDown(self):
        pass

    def test_missing_id(self):
        ret_value: Response = self.app.post(self.endpoint, data=json.dumps(dict(secret='')),
                                            content_type='application/json')
        self.assertEqual(401, ret_value.status_code)
        self.assertEqual("application/text", ret_value.content_type)
        self.assertEqual(b'Invalid id or secret', ret_value.data)

    def test_missing_secret(self):
        ret_value: Response = self.app.post(self.endpoint, data=json.dumps(dict(id='')),
                                            content_type='application/json')
        self.assertEqual(401, ret_value.status_code)
        self.assertEqual("application/text", ret_value.content_type)
        self.assertEqual(b'Invalid id or secret', ret_value.data)

    def test_missing_body(self):
        ret_value = self.app.post(self.endpoint)
        self.assertEqual(400, ret_value.status_code)
        self.assertEqual(b'Request body missing', ret_value.data)

    def test_correct_details(self):
        ret_value: Response = self.app.post(self.endpoint, data=json.dumps({"secret": "test", "id": "hello"}),
                                            content_type='application/json')
        self.assertEqual(200, ret_value.status_code)
        self.assertEqual("application/json", ret_value.content_type)
        json_value = ret_value.get_json()
        self.assertEqual(True, json_value.get("success"))
        self.assertIsNone(None, json_value.get("token"))


if __name__ == '__main__':
    main()
