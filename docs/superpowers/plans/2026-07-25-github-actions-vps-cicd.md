# GitHub Actions VPS CI/CD Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Validate and deploy the Next.js application to its existing VPS checkout after every push to `main`.

**Architecture:** One GitHub Actions workflow runs CI and deployment as two ordered jobs. CI installs locked npm dependencies and runs lint/build; deployment uses native SSH to fast-forward the VPS checkout and rebuild the existing Docker Compose service.

**Tech Stack:** GitHub Actions, Node.js 22, npm, OpenSSH, Docker Compose

## Global Constraints

- Trigger only on pushes to `main`.
- Grant the workflow only `contents: read`.
- Serialize production deployments without cancelling an active deployment.
- Use the existing Dockerfile, Compose file, VPS checkout, and external `veyra-network`.
- Add no package or GitHub Action beyond the official checkout and Node setup actions.
- SSH uses port 22 and secrets named `VPS_HOST`, `VPS_USER`, `VPS_SSH_KEY`, `VPS_KNOWN_HOSTS`, and `VPS_DEPLOY_PATH`.
- Preserve all unrelated working-tree changes.

---

### Task 1: Add and verify the CI/CD workflow

**Files:**
- Create: `.github/workflows/deploy.yml`
- Test: `.github/workflows/deploy.yml` (configuration syntax) and existing npm validation commands

**Interfaces:**
- Consumes: GitHub push events on `main`, the five repository secrets, and the existing VPS checkout.
- Produces: A successful `portfolio` Compose service rebuild only after lint and build pass.

- [ ] **Step 1: Confirm the workflow does not exist**

Run:

```bash
test ! -e .github/workflows/deploy.yml
```

Expected: exit code 0. This is a configuration-only change, so syntax and
project build verification replace a code-level unit test.

- [ ] **Step 2: Create the minimal workflow**

Create `.github/workflows/deploy.yml` with:

```yaml
name: CI/CD

on:
  push:
    branches: [main]

permissions:
  contents: read

concurrency:
  group: production
  cancel-in-progress: false

jobs:
  ci:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v6
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run lint
      - run: npm run build

  deploy:
    needs: ci
    runs-on: ubuntu-latest
    steps:
      - name: Configure SSH
        env:
          SSH_PRIVATE_KEY: ${{ secrets.VPS_SSH_KEY }}
          SSH_KNOWN_HOSTS: ${{ secrets.VPS_KNOWN_HOSTS }}
        run: |
          install -m 700 -d ~/.ssh
          printf '%s\n' "$SSH_PRIVATE_KEY" > ~/.ssh/id_ed25519
          chmod 600 ~/.ssh/id_ed25519
          printf '%s\n' "$SSH_KNOWN_HOSTS" > ~/.ssh/known_hosts

      - name: Deploy
        env:
          VPS_HOST: ${{ secrets.VPS_HOST }}
          VPS_USER: ${{ secrets.VPS_USER }}
          VPS_DEPLOY_PATH: ${{ secrets.VPS_DEPLOY_PATH }}
        run: |
          ssh -o BatchMode=yes -o StrictHostKeyChecking=yes "$VPS_USER@$VPS_HOST" \
            "cd '$VPS_DEPLOY_PATH' && git pull --ff-only origin main && docker compose up -d --build"
```

- [ ] **Step 3: Validate YAML syntax**

Run:

```bash
ruby -e "require 'yaml'; YAML.load_file('.github/workflows/deploy.yml')"
```

Expected: exit code 0 with no output.

- [ ] **Step 4: Run the same application checks as CI**

Run:

```bash
npm run lint
npm run build
```

Expected: both commands exit 0.

- [ ] **Step 5: Inspect scope and whitespace**

Run:

```bash
git diff --check
git diff -- .github/workflows/deploy.yml
git status --short
```

Expected: no whitespace errors; the workflow is the only implementation file
added by this plan, while pre-existing unrelated changes remain unstaged.

- [ ] **Step 6: Commit only the workflow**

Run:

```bash
git add .github/workflows/deploy.yml
git commit -m "ci: deploy main to VPS"
```

Expected: one commit containing only `.github/workflows/deploy.yml`.
