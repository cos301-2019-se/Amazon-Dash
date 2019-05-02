import unittest
from tests.test_verify import TestVerify

if __name__ == '__main__':
    # Run only the tests in the specified classes

    test_classes_to_run = [TestVerify]

    loader = unittest.TestLoader()

    suites_list = []
    for test_class in test_classes_to_run:
        suite = loader.loadTestsFromTestCase(test_class)
        suites_list.append(suite)

    big_suite = unittest.TestSuite(suites_list)

    runner = unittest.TextTestRunner()
    results = runner.run(big_suite)
