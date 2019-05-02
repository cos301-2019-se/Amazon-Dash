import boto3


def get_boto3_client(access_key, secret_key, service='ec2'):
    """
    A method to create a new boto3 client to communicate with AWS.

    Parameters
    ----------
    access_key : string
        the amazon AWS access key for the account.
    secret_key : sring
        the amazon AWS secret key for the access key.
    service : string
        the amazon AWS service with which to interact.

    Returns
    -------
    boto3.Client
        the client to interact with AWS with.
    """
    return boto3.client(
            service,
            aws_access_key=access_key,
            aws_secret_access_key=secret_key,
            )
