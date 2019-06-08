import unittest

from tests.test_google_verify import TestGoogleVerification
from tests.test_verify import TestVerify
from tests.test_ec2_instances import TestEc2Instances

if __name__ == '__main__':
    # Run only the tests in the specified classes

    test_classes_to_run = [TestVerify, TestEc2Instances, TestGoogleVerification]

    loader = unittest.TestLoader()

    suites_list = []
    for test_class in test_classes_to_run:
        suite = loader.loadTestsFromTestCase(test_class)
        suites_list.append(suite)

    big_suite = unittest.TestSuite(suites_list)

    runner = unittest.TextTestRunner()
    results = runner.run(big_suite)
