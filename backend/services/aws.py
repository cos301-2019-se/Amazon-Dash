import boto3


def get_ec2_instances(access_key, secret_key):
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
    regions = boto3.session.Session().get_available_regions('ec2')
    clients = [boto3.client(
        'ec2',
        aws_access_key_id=access_key,
        aws_secret_access_key=secret_key,
        region_name=region,
        ) for region in regions]
    instances = [client.describe_instances() for client in clients]
    instances = [j for i in clients for j in i]  # ...
    return instances
