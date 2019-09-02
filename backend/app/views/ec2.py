from flask import Blueprint, request, Response
from backend.services.authentication import require_auth
from backend.services import aws
from backend.lib.util import json_serialize
from botocore.exceptions import ClientError
import json
from flask import Flask,jsonify
import boto3

ec2 = Blueprint('ec2', __name__)


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
@ec2.route('/api/test',methods=['GET'])
def get_test():
    cloudwatch=boto3.client('cloudwatch')
    cloudwatch.put_metric_alarm(
        Namespace="AWS/EC2",
        MetricName= "CPUUtilization",
        Dimensions=[
            {
                "Name": "InstanceId",
                "Value": "i-1234567890abcdef0"
            }
        ],
        AlarmActions=[
            "arn:aws:sns:us-west-1:123456789012:my_sns_topic"
        ],
        ComparisonOperator="GreaterThanThreshold",
        DatapointsToAlarm= 3,
        EvaluationPeriods= 4,
        Period=60,
        Statistic="Average",
        Threshold=40,
        AlarmDescription="CPU Utilization of i-1234567890abcdef0 with 40% as threshold",
        AlarmName="Instance i-1234567890abcdef0 CPU Utilization"
        )
    
    return jsonify()
