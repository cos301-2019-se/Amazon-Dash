from .base import endpoint_test_factory


class TestGoogleVerification(endpoint_test_factory('/api/google_authentication')):

    def test_missing_body(self):
        ret_value = self.app.post(self.endpoint)
        self.assertEqual(401, ret_value.status_code)
        self.assertEqual(b'Request body missing', ret_value.data)
