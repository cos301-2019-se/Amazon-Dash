import json
from .base import endpoint_test_factory
from flask import Response


class TestEc2Instances(endpoint_test_factory('/api/ec2_instances')):
    endpoint = "/api/ec2_instances"

    def test_missing_body(self):
        ret_value: Response = self.app.post(self.endpoint)
        self.assertEqual(400, ret_value.status_code)
        self.assertEqual(b'Request body missing', ret_value.data)
