import boto3
import itertools
from functools import wraps
from flask import request
from datetime import datetime, timedelta


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
    )
    return response


def restart_ec2_instance(client, instance_id):
    response = client.reboot_instances(
        InstanceIds=[instance_id],
    )
    return response


def get_ec2_instance_metrics(client, instance_id, metric='CPUUtilization'):
    response = client.get_metric_statistics(
        Namespace='AWS/EC2',
        MetricName='CPUUtilization',
        Dimensions=[
            {
                'Name': 'InstanceId',
                'Value': instance_id,
            },
        ],
        Period=300,
        Statistics=['Average'],
        StartTime=datetime.utcnow() - timedelta(hours=1),
        EndTime=datetime.now(),
        Unit='Percent',
    )
    dimensions = [{'Name': 'InstanceId', 'Value': instance_id}]
    response = client.get_metric_data(
        MetricDataQueries=[
            {
                'Id': 'cpu',
                'MetricStat': {
                    'Metric': {
                        'Namespace': 'AWS/EC2',
                        'MetricName': 'CPUUtilization',
                        'Dimensions': dimensions,
                    },
                    'Period': 300,
                    'Stat': 'Average',
                    'Unit': 'Percent',
                },
            },
            {
                'Id': 'netin',
                'MetricStat': {
                    'Metric': {
                        'Namespace': 'AWS/EC2',
                        'MetricName': 'NetworkIn',
                        'Dimensions': dimensions,
                    },
                    'Period': 300,
                    'Stat': 'Average',
                    'Unit': 'Bytes',
                },
            },
            {
                'Id': 'netout',
                'MetricStat': {
                    'Metric': {
                        'Namespace': 'AWS/EC2',
                        'MetricName': 'NetworkOut',
                        'Dimensions': dimensions,
                    },
                    'Period': 300,
                    'Stat': 'Average',
                    'Unit': 'Bytes',
                },
            },
            {
                'Id': 'netpacketin',
                'MetricStat': {
                    'Metric': {
                        'Namespace': 'AWS/EC2',
                        'MetricName': 'NetworkPacketsIn',
                        'Dimensions': dimensions,
                    },
                    'Period': 300,
                    'Stat': 'Average',
                    'Unit': 'Count',
                },
            },
        ],
        StartTime=datetime.utcnow() - timedelta(hours=1),
        EndTime=datetime.utcnow(),
    )
    return list(map(lambda met: {
        'id': met['Id'],
        'data': list(map(
            lambda time: {'timestamp': time[1].isoformat(), 'value': met['Values'][time[0]]},
            enumerate(met['Timestamps']),
        ))
    }, response['MetricDataResults']))
