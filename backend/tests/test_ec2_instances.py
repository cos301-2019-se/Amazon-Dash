import json
from .base import endpoint_test_factory
from flask import Response


class TestEc2Instances(endpoint_test_factory('/api/ec2_instances')):
    endpoint = "/api/ec2_instances"

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
        self.assertIs(list, type(json_value))
