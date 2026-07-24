# GitHub Actions VPS CI/CD Design

## Goal

Deploy the landing page to its existing VPS checkout whenever a push to `main`
passes validation.

## Workflow

Add one GitHub Actions workflow with two jobs:

1. CI checks out the repository, installs the locked npm dependencies on Node
   22, then runs lint and the production build.
2. Deploy runs only after CI succeeds. It installs the SSH key and known-hosts
   entry from GitHub secrets, connects to the VPS, updates the existing checkout
   with a fast-forward-only pull from `main`, and runs
   `docker compose up -d --build`.

Production deployments are serialized so two pushes cannot rebuild the same
Compose service concurrently. The workflow receives only `contents: read`
permission.

## Repository Secrets

- `VPS_HOST`: VPS hostname or IP address.
- `VPS_USER`: SSH account that owns the deployment checkout.
- `VPS_SSH_KEY`: Private SSH key for that account.
- `VPS_KNOWN_HOSTS`: Trusted host-key line for the VPS.
- `VPS_DEPLOY_PATH`: Absolute path to the existing repository checkout.

SSH uses the default port 22.

## Failure Behavior

Lint or build failures prevent deployment. SSH, Git, Docker build, or Compose
failures fail the deployment job. `git pull --ff-only` refuses to overwrite
divergent or locally modified server history.

## Verification

Validate the workflow syntax, run the same npm lint and build commands locally,
and inspect the final diff. The first real push to `main` verifies access to
GitHub secrets and the VPS.

## Deliberate Omissions

The workflow does not publish a registry image, manage the VPS, create the
external Docker network, or install a self-hosted runner. Those facilities
already exist or add maintenance unnecessary for this deployment.
