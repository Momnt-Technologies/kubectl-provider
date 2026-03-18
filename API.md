# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubectlFunction <a name="KubectlFunction" id="@momnt-technologies/kubectl-provider.KubectlFunction"></a>

#### Initializers <a name="Initializers" id="@momnt-technologies/kubectl-provider.KubectlFunction.Initializer"></a>

```typescript
import { KubectlFunction } from '@momnt-technologies/kubectl-provider'

new KubectlFunction(scope: Construct, id: string, props: KubectlFunctionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@momnt-technologies/kubectl-provider.KubectlFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@momnt-technologies/kubectl-provider.KubectlFunction.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@momnt-technologies/kubectl-provider.KubectlFunction.Initializer.parameter.props">props</a></code> | <code><a href="#@momnt-technologies/kubectl-provider.KubectlFunctionProps">KubectlFunctionProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@momnt-technologies/kubectl-provider.KubectlFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@momnt-technologies/kubectl-provider.KubectlFunction.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@momnt-technologies/kubectl-provider.KubectlFunction.Initializer.parameter.props"></a>

- *Type:* <a href="#@momnt-technologies/kubectl-provider.KubectlFunctionProps">KubectlFunctionProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@momnt-technologies/kubectl-provider.KubectlFunction.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@momnt-technologies/kubectl-provider.KubectlFunction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@momnt-technologies/kubectl-provider.KubectlFunction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@momnt-technologies/kubectl-provider.KubectlFunction.isConstruct"></a>

```typescript
import { KubectlFunction } from '@momnt-technologies/kubectl-provider'

KubectlFunction.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@momnt-technologies/kubectl-provider.KubectlFunction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@momnt-technologies/kubectl-provider.KubectlFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@momnt-technologies/kubectl-provider.KubectlFunction.property.handler">handler</a></code> | <code>aws-cdk-lib.aws_lambda.Function</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@momnt-technologies/kubectl-provider.KubectlFunction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `handler`<sup>Required</sup> <a name="handler" id="@momnt-technologies/kubectl-provider.KubectlFunction.property.handler"></a>

```typescript
public readonly handler: Function;
```

- *Type:* aws-cdk-lib.aws_lambda.Function

---


## Structs <a name="Structs" id="Structs"></a>

### KubectlFunctionProps <a name="KubectlFunctionProps" id="@momnt-technologies/kubectl-provider.KubectlFunctionProps"></a>

The properties for a KubectlFunction construct.

#### Initializer <a name="Initializer" id="@momnt-technologies/kubectl-provider.KubectlFunctionProps.Initializer"></a>

```typescript
import { KubectlFunctionProps } from '@momnt-technologies/kubectl-provider'

const kubectlFunctionProps: KubectlFunctionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@momnt-technologies/kubectl-provider.KubectlFunctionProps.property.clusterName">clusterName</a></code> | <code>string</code> | The name of the cluster to access. |
| <code><a href="#@momnt-technologies/kubectl-provider.KubectlFunctionProps.property.roleArn">roleArn</a></code> | <code>string</code> | The Role ARN that is to be assumed during the EKS authentication process to access and run commands on the cluster. |
| <code><a href="#@momnt-technologies/kubectl-provider.KubectlFunctionProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC where the Kubernetes cluster is. |
| <code><a href="#@momnt-technologies/kubectl-provider.KubectlFunctionProps.property.additionalParams">additionalParams</a></code> | <code>aws-cdk-lib.aws_lambda.FunctionOptions</code> | Additional parameters to pass to the Lambda function. |
| <code><a href="#@momnt-technologies/kubectl-provider.KubectlFunctionProps.property.kubectlLayer">kubectlLayer</a></code> | <code>aws-cdk-lib.aws_lambda.LayerVersion</code> | The KubectlLayer version to use. |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@momnt-technologies/kubectl-provider.KubectlFunctionProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The name of the cluster to access.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@momnt-technologies/kubectl-provider.KubectlFunctionProps.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The Role ARN that is to be assumed during the EKS authentication process to access and run commands on the cluster.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@momnt-technologies/kubectl-provider.KubectlFunctionProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC where the Kubernetes cluster is.

---

##### `additionalParams`<sup>Optional</sup> <a name="additionalParams" id="@momnt-technologies/kubectl-provider.KubectlFunctionProps.property.additionalParams"></a>

```typescript
public readonly additionalParams: FunctionOptions;
```

- *Type:* aws-cdk-lib.aws_lambda.FunctionOptions

Additional parameters to pass to the Lambda function.

---

##### `kubectlLayer`<sup>Optional</sup> <a name="kubectlLayer" id="@momnt-technologies/kubectl-provider.KubectlFunctionProps.property.kubectlLayer"></a>

```typescript
public readonly kubectlLayer: LayerVersion;
```

- *Type:* aws-cdk-lib.aws_lambda.LayerVersion
- *Default:* KubectlV33Layer

The KubectlLayer version to use.

---



