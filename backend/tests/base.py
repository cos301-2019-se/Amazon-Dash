from unittest import TestCase
from app import create_app


def endpoint_test_factory(url):
    class EndpointTestCase(TestCase):
        endpoint = url

        def setUp(self) -> None:
            temp_app = create_app()
            temp_app.config['TESTING'] = True
            temp_app.config['WTF_CSRF_ENABLED'] = False
            temp_app.config['DEBUG'] = False

            self.app = temp_app.test_client()

        def tearDown(self):
            pass
    return EndpointTestCase
