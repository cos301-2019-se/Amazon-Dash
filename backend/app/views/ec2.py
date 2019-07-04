from flask import Blueprint, Response
from backend.services.authentication import require_auth
from backend.services import aws
from backend.lib.util import json_serialize
from botocore.exceptions import ClientError
import json


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
