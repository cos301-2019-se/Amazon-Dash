import boto3
import itertools


def get_ec2_instances(access_key, secret_key, region):
    """
    A method to create a new boto3 client to communicate with AWS.

    Parameters
    ----------
    access_key : string
        the amazon AWS access key for the account.
    secret_key : string
        the amazon AWS secret key for the access key.
    region : string
        the amazon AWS region name.
    Returns
    -------
    boto3.Client
        the client to interact with AWS with.
    """
    regions = boto3.session.Session().get_available_regions('ec2')
    client = boto3.client(
            'ec2',
            aws_access_key_id=access_key,
            aws_secret_access_key=secret_key,
            region_name=region,
            )
    reservations = client.describe_instances().get("Reservations")
    instances = list(map(lambda x: x.get("Instances"), reservations))
    return list(itertools.chain.from_iterable(instances))
