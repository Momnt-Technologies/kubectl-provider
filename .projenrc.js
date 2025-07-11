const { awscdk, javascript } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Matthew Bonig',
  authorAddress: 'matthew.bonig@defiance.ai',
  cdkVersion: '2.200.0',
  defaultReleaseBranch: 'main',
  licensed: false,
  depsUpgrade: false,
  homepage: 'https://defiance.ai',
  name: '@momnt-technologies/kubectl-provider',
  repositoryUrl: 'https://github.com/momnt-technologies/kubectl-provider.git',
  description: 'A Lambda function kubectl commands against an EKS repository',
  devDeps: [
    'eslint',
    'jsii-rosetta@^5.8.0',
    'jsii-docgen@^8.0.14',
  ],
  deps: [
    '@aws-cdk/lambda-layer-kubectl-v28',
    '@aws-cdk/lambda-layer-kubectl-v30',
    '@aws-cdk/lambda-layer-kubectl-v31',
  ],
  githubOptions: { mergify: false },
  peerDeps: [
    '@aws-cdk/lambda-layer-kubectl-v28',
    '@aws-cdk/lambda-layer-kubectl-v30',
    '@aws-cdk/lambda-layer-kubectl-v31',
  ],
  gitignore: ['cdk.out/', 'cdk.context.json', '.idea/'],
  keywords: ['cdk', 'eks', 'kubectl'],
  integrationTestAutoDiscover: false,
  releaseToNpm: true,
  npmRegistryUrl: 'https://npm.pkg.github.com',
  npmAccess: javascript.NpmAccess.PUBLIC,
  jsiiVersion: '^5.8.0',
  nodeVersion: '^20',
  minNodeVersion: '20',

});
project.compileTask.exec('rm -rf lib/handlers/; mkdir lib/handlers/', { name: 'mkdir python handler' });
project.compileTask.exec('cp src/handlers/*.py lib/handlers/', { name: 'copy python handler' });


project.synth();
