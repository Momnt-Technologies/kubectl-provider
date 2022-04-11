import { App, Stack } from 'aws-cdk-lib';
import { Vpc } from 'aws-cdk-lib/aws-ec2';
import { KubectlFunction } from '../src';

const app = new App();
const stack = new Stack(app, 'TestingFunctionStack', { env: { account: '754664436462', region: 'us-east-1' } });
const vpc = Vpc.fromLookup(stack, 'Vpc', { vpcId: 'vpc-0c7c5d99e5c4ab76a' });
new KubectlFunction(stack, 'TestFunction', {
  vpc,
  roleArn: 'arn:aws:iam::754664436462:role/qa1-Cluster-ClusterCreationRole360249B6-2MHDR3584NLC',
  clusterName: 'qa1',
});