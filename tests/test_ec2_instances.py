from .base import endpoint_test_factory


class TestEc2Instances(endpoint_test_factory('/api/instances')):
    def test_missing_body(self):
        pass
        # TODO: Fix using new instance route.
        # ret_value: Response = self.app.post(self.endpoint)
        # self.assertEqual(405, ret_value.status_code)
        # self.assertEqual(b'Request body missing', ret_value.data)
