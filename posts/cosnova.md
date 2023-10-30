---
title: "Umang '23"
excerpt: "NAC challenges"
date: "2023-10-22"
---

NAC presents Astrophotography and Make your own Nebulae challenges.

![image info](/kshitij-logo.png)

"Cloud computing" plays a vital role in the creation of software products and services. It's also one of the most highly sought-after skills in the tech industry.

In fact, most of the projects on this site will require cloud interaction of some sort—particularly with AWS's serverless products.

## Getting Started

> To use AWS in these projects, we'll need to set up an account, the CLI, and the SDK.

### Create an account

If you don't already have an account then [sign up here](https://portal.aws.amazon.com/billing/signup#/start).

Once you are signed up, you should be able to log in to the [AWS Console](https://aws.amazon.com/console/). It might look overwhelming if you're seeing for the first time.

### Install the CLI

The AWS CLI is a command-line application that lets you interact with your AWS account from the terminal. It's available on all platforms.

If you are a proficient Python user, you can just install it with `pip`.

```bash
pip install awscli
```

Otherwise, check out the [official instructions](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html).

Once installed, you should be able to run this command from the terminal to see its version.

```bash
aws --version
```

### Create an IAM user

The CLI will access your AWS account via an "IAM user." You can create one from the **Users** page in your [IAM console](https://console.aws.amazon.com/iam).

Once the user is created, you'll need to generate access keys (passwords, essentially) for it.

* [Creating an Admin IAM User](https://docs.aws.amazon.com/IAM/latest/UserGuide/getting-started_create-admin-group.html)
* [Creating access keys for a user](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)

Your access keys should look something like this:

```
Access key ID: AKIAIOSFODNN7EXAMPLE
Secret access key: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
```


### Configure the CLI

Next you need to [configure the CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html) so that it can access your AWS account via the IAM user.

Basically, just run this command and paste in your access keys.

```bash
aws configure
```

Additionally, you'll also be asked for a [default region](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html#cli-configure-quickstart-region) and [default output format](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html#cli-configure-quickstart-format).

You may leave them empty—but generally I like to use:

```
Default region name [None]: us-east-1
Default output format [None]: json
```

### Configuration files

Once configured, the AWS CLI [saves the credentials](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html) and region/format profiles to your computer. They are typically in these locations:

```
~/.aws/credentials
~/.aws/config
```
