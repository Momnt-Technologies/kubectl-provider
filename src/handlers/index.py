import json
import logging
import os
import subprocess
from typing import Dict, Optional

logger = logging.getLogger()
logger.setLevel(logging.INFO)

# these are coming from the kubectl layer
os.environ['PATH'] = '/opt/kubectl:/opt/awscli:' + os.environ['PATH']

outdir = os.environ.get('TEST_OUTDIR', '/tmp')
kubeconfig = os.path.join(outdir, 'kubeconfig')

def handler(event, context):
    logger.info(json.dumps(event))

    # resource properties (all required)
    cluster_name  = os.environ.get('CLUSTER_NAME') # props['ClusterName']
    role_arn      = os.environ.get('ROLE_ARN') #props['RoleArn']

    # "log in" to the cluster
    cmd = [ 'aws', 'eks', 'update-kubeconfig',
        '--role-arn', role_arn,
        '--name', cluster_name,
        '--kubeconfig', kubeconfig
    ]
    logger.info('Running command: %s' % cmd)
    subprocess.check_call(cmd)

    if os.path.isfile(kubeconfig):
        os.chmod(kubeconfig, 0o600)

    return kubectl(event["commands"])

def parse_json(json_str: str) -> Optional[Dict]:
    try:
        return json.loads(json_str)
    except json.JSONDecodeError:
        json_objects = []

        try:
            for line in json_str.strip().split('\n'):
                try:
                    json_objects.append(json.loads(line))
                except json.JSONDecodeError as e:
                    logger.error(f"Failed to parse line: {line}, error: {e}")

        except (TypeError, AttributeError) as e:
            logger.error("Failed to parse json: %s" % e)

        return json_objects

def kubectl(commands):
    maxAttempts = 3
    retry = maxAttempts
    while retry > 0:
        try:
            cmd = ['kubectl', '--kubeconfig', kubeconfig] + commands

            logger.info('Running command: %s' % cmd)
            output = subprocess.check_output(cmd, stderr=subprocess.STDOUT)
            logger.info(f'Output: {output}')

            decoded_output = output.decode('utf-8')
            logger.info(f"Decoded output: {decoded_output}")

            if isinstance(decoded_output, str):
                parsed_json = parse_json(decoded_output)
                if isinstance(parsed_json, list):
                    for item in parsed_json:
                        logger.info(f"{item}")

                else:
                    logger.info(f"Converted json output: {parsed_json}")

            else:
                logger.info(f"Could not convert to json, different data type returned: {type(decoded_output)}")

        except subprocess.CalledProcessError as exc:
            output = exc.output
            if b'i/o timeout' in output and retry > 0:
                retry = retry - 1
                logger.info("kubectl timed out, retries left: %s" % retry)
            else:
                raise Exception(output)
        else:
            logger.info(output)
            return output

    raise Exception('Operation failed after %s attempts: %s' % maxAttempts, output)