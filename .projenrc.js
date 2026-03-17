const { awscdk, javascript } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Matthew Bonig',
  authorAddress: 'matthew.bonig@defiance.ai',
  cdkVersion: '2.224.0',
  defaultReleaseBranch: 'main',
  licensed: false,
  depsUpgrade: false,
  homepage: 'https://defiance.ai',
  name: '@momnt-technologies/kubectl-provider',
  repositoryUrl: 'https://github.com/momnt-technologies/kubectl-provider.git',
  description: 'A Lambda function kubectl commands against an EKS repository',
  devDeps: [
    'eslint',
    'jsii-pacmak@^1.120.0',
    'jsii-rosetta@^5.9.14',
    'jsii-docgen@^10.8.0',
  ],
  deps: [
    '@aws-cdk/lambda-layer-kubectl-v33',
    '@aws-cdk/lambda-layer-kubectl-v34',
    '@aws-cdk/lambda-layer-kubectl-v35',
  ],
  githubOptions: { mergify: false },
  peerDeps: [
    '@aws-cdk/lambda-layer-kubectl-v33',
    '@aws-cdk/lambda-layer-kubectl-v34',
    '@aws-cdk/lambda-layer-kubectl-v35',
  ],
  gitignore: ['cdk.out/', 'cdk.context.json', '.idea/'],
  keywords: ['cdk', 'eks', 'kubectl'],
  integrationTestAutoDiscover: false,
  releaseToNpm: true,
  npmRegistryUrl: 'https://npm.pkg.github.com',
  npmAccess: javascript.NpmAccess.PUBLIC,
  jsiiVersion: '^5.9.14',
  nodeVersion: '^20',
  minNodeVersion: '20',

});
project.compileTask.exec('rm -rf lib/handlers/; mkdir lib/handlers/', { name: 'mkdir python handler' });
project.compileTask.exec('cp src/handlers/*.py lib/handlers/', { name: 'copy python handler' });

// Add package overrides to fix security vulnerabilities
project.package.addField('resolutions', {
  'form-data': '^4.0.4',
  'brace-expansion': '^2.0.2',
  '@babel/traverse': '^7.23.2',
  'ws': '^7.5.10',
  'braces': '^3.0.3',
  'tough-cookie': '^4.1.3',
});

project.synth();
