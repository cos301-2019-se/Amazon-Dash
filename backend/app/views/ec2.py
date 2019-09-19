from flask import Blueprint, request, Response
from backend.services.authentication import require_auth
from backend.services import aws
from backend.lib.util import json_serialize
from backend.lib.sse import Channel
from botocore.exceptions import ClientError
from datetime import datetime, timedelta
import json
import uuid
from flask import Flask,jsonify
import boto3

ec2 = Blueprint('ec2', __name__)
channel = Channel()


@ec2.route('/api/instances', methods=['GET'])
@require_auth
@aws.boto3_client()
def instances(user, client):
    """
    A method to get the AWS instances.

    Parameters
    ----------
    user : dict
        The currently authenticated user.
    client : boto3.Client
        The client authenticated with the user.
    Returns
    -------
    Response
        an http response
    """
    instances = json.dumps(aws.get_ec2_instances(client), default=json_serialize)
    return Response(instances, status=200, mimetype='application/json')


@ec2.route('/api/instances/<instance_id>/stop')
@require_auth
@aws.boto3_client()
def stop_instance(user, client, instance_id):
    try:
        aws.stop_ec2_instance(client, instance_id)
        return Response('Success', status=200, mimetype='application/text')
    except ClientError as ex:
        message, status = aws.boto3_errors(ex)
        return Response(message, status=status, mimetype='application/text')


@ec2.route('/api/instances/<instance_id>/start')
@require_auth
@aws.boto3_client()
def start_instance(user, client, instance_id):
    try:
        aws.start_ec2_instance(client, instance_id)
        return Response('Success', status=200, mimetype='application/text')
    except ClientError as ex:
        message, status = aws.boto3_errors(ex)
        return Response(message, status=status, mimetype='application/text')


@ec2.route('/api/instances/<instance_id>/restart')
@require_auth
@aws.boto3_client()
def restart_instance(user, client, instance_id):
    try:
        aws.restart_ec2_instance(client, instance_id)
        return Response('Success', status=200, mimetype='application/text')
    except ClientError as ex:
        message, status = aws.boto3_errors(ex)
        return Response(message, status=status, mimetype='application/text')


@ec2.route('/api/create_instance', methods=['POST'])
@require_auth
@aws.boto3_client()
def create_instance(user, client):
    try:
        value = aws.create_instance(client, request.get_json())
        return Response(value, status=200, mimetype='application/json')
    except ClientError as ex:
        message, status = aws.boto3_errors(ex)
        return Response(message, status=status, mimetype='application/text')


@ec2.route('/api/instances/subscribe', methods=['GET'])
@require_auth
@aws.boto3_client(service='cloudwatch')
@aws.boto3_client(service='ec2')
def subscribe(user, ec2_client, cw_client):
    sub_id = str(uuid.uuid4())
    response = channel.subscribe(sub_id)
    aws.start_instance_polling(channel, ec2_client, cw_client, sub_id)
    return response


@ec2.route('/api/instances/<instance_id>/metrics', methods=['GET'])
@require_auth
@aws.boto3_client(service='cloudwatch')
def get_instance_metrics(user, client, instance_id):
    try:
        metrics = aws.get_ec2_instance_metrics(client, instance_id)
        return json.dumps({'instance_id': instance_id, 'metrics': metrics})
    except ClientError as ex:
        message, status = aws.boto3_errors(ex)
        return Response(message, status=status, mimetype='application/text')


@ec2.route('/api/costs', methods=['GET'])
@require_auth
@aws.boto3_client(service='ce')
def get_cost_and_usage(user, client):
    try:
        response = client.get_cost_and_usage(
            TimePeriod={
                'Start': '2019-01-01',
                'End': '2019-10-01'
            },
            Granularity='MONTHLY',
            Metrics=[
                'BlendedCost',
            ],
        )
        return Response(json.dumps(response), status=200, mimetype='applcation/json')
    except ClientError as ex:
        message, status = aws.boto3_errors(ex)
        return Response(message, status=status, mimetype='application/text')

ALARMS=[
    {
    "Namespace": "AWS/EC2",
    "MetricName": "CPUUtilization",
    "Dimensions": [
        {
            "Name": "InstanceId",
            "Value": "i-1234567890abcdef0"
        }
    ],
    "AlarmActions": [
        "arn:aws:sns:us-west-1:123456789012:my_sns_topic"
    ],
    "ComparisonOperator": "GreaterThanThreshold",
    "DatapointsToAlarm": 3,
    "EvaluationPeriods": 4,
    "Period": 60,
    "Statistic": "Average",
    "Threshold": 40,
    "AlarmDescription": "CPU Utilization of i-1234567890abcdef0 with 40% as threshold",
    "AlarmName": "Instance i-1234567890abcdef0 CPU Utilization"
}
]

@ec2.route('/api/alarms',methods=['GET'])

def get_alarms():
    return jsonify({
        'status':'success',
        'alarms':ALARMS
    })


#client=boto3.client('cloudwatch',region_name='eu-west-1')

#Creating the alarm

# Create alarm


@ec2.route('/api/create_alarm', methods=['GET'])
@require_auth
@aws.boto3_client(service='cloudwatch')
def create_alarm(user, client):
    client.put_metric_alarm(
    Namespace='AWS/EC2',
    MetricName='CPUUtilization',
    Dimensions= [
        {
            'Name':'InstanceId',
            'Value':'i-1234567890abcdef0'
        }
    ],
    ActionsEnabled=False,
    ComparisonOperator='GreaterThanThreshold',
    DatapointsToAlarm=3,
    EvaluationPeriods=4,
    Period=60,
    Statistic='Average',
    Threshold=40,
    AlarmDescription= 'CPU Utilization of i-1234567890abcdef0 with 40% as threshold',
    AlarmName='Instance i-1234567890abcdef0 CPU Utilization'
)

@ec2.route('/api/getAlarms',methods=['GET'])
@require_auth
@aws.boto3_client()
def api_getAlarms(user,client):
    data= client.list_metrics(
    Namespace='AWS/EC2',
    MetricName='CPUUtilization',
    Dimensions=[
        {
            'Name': 'InstanceId',
            'Value': 'i-1234567890abcdef0'
        },
    ],
    #NextToken=''
)
    js = json.dumps(data)
    resp = Response(js, status=200, mimetype='application/json')
    return resp

