import boto3
import itertools
from functools import wraps
from flask import request


def boto3_errors(exception):
    """
    A method to return an error message and status code based on a boto3 ClientError.

    Parameters
    ----------
    exception : botocore.exceptions.ClientError
        The exception to parse.
    Returns
    -------
    string, int
        The message and the status code.
    """
    error_code = exception.response['Error']['Code']
    if error_code == 'InvalidInstanceID.Malformed':
        message = f"Invalid instance ID."
        status = 404
    elif error_code == 'UnauthorizedOperation':
        message = f"You are not authorized to perform that action."
        status = 401
    elif error_code == "InvalidInstanceID.NotFound":
        message = f"Instance not found."
        status = 404
    else:
        message = f"Unknown error has occurred: {error_code}"
        status = 400

    return message, status


def get_client(access_key, secret_key, region='eu-west-1', service='ec2'):
    """
    A method to get a boto3 client instance.

    Parameters
    ----------
    access_key : string
        The amazon AWS access key for the account.
    secret_key : string
        The amazon AWS secret key for the access key.
    region : string
        The amazon AWS region name.
    service : string
        The amazon AWS service name

    Returns
    -------
    boto3.Client
        The client to interact with
    """
    return boto3.client(
            service,
            aws_access_key_id=access_key,
            aws_secret_access_key=secret_key,
            region_name=region
            )


def boto3_client(service='ec2'):
    """
    A wrapper function to use the boto3 client in an endpoint.

    Parameters
    ----------
    region : string
        The region name to create the client with.
    service : string
        The name of the amazon AWS service.
    Returns
    -------
    Function
        The wrapped function.
    """
    def wrapper(func):
        @wraps(func)
        def wrapped_func(user, *args, **kwargs):
            region = request.args.get('region') or 'eu-west-1'
            client = get_client(user['access_key'], user['secret_key'],
                                region=region, service=service)
            return func(user, client, *args, **kwargs)
        return wrapped_func
    return wrapper


def get_ec2_instances(client):
    """
    A method to create a new boto3 client to communicate with AWS.

    Parameters
    ----------
    client : boto3.Client
        The client to retrieve the information from.
    Returns
    -------
    list
        The list of instances.
    """
    reservations = client.describe_instances().get("Reservations")
    instances = list(map(lambda x: x.get("Instances"), reservations))
    instances = list(itertools.chain.from_iterable(instances))
    return list(map(lambda x: {
        'name': next((t['Value'] for t in x.get('Tags', []) if t.get('Key') == 'Name'), 'Unknown'),
        'id': x.get('InstanceId'),
    }, instances))


def stop_ec2_instance(client, instance_id, hibernate=False):
    """
    A method to stop an EC2 Instance.

    Parameters
    ----------
    client : boto3.Client
        the client to interact with
    Returns
    -------
    response
        I'm honestly not even sure.
    """

    response = client.stop_instances(
        InstanceIds=[instance_id],
        DryRun=True,
    )
    return response


def start_ec2_instance(client, instance_id, hibernate=False):
    """
    A method to stop an EC2 Instance.

    Parameters
    ----------
    client : boto3.Client
        the client to interact with
    Returns
    -------
    response
        I'm honestly not even sure.
    """

    response = client.start_instances(
        InstanceIds=[instance_id],
        DryRun=True,
    )
    return response
