# Deployment

> This guide covers deploying the existing project. For **new project setup** (create Firebase project, `firebase init`, first-time auth bootstrap), see `ai_agent_repo_template/DEPLOYMENT.md` in the sibling directory.

## Prerequisites

- [Firebase CLI](https://firebase.google.com/docs/cli) installed globally
- [Google Cloud SDK](https://cloud.google.com/sdk/docs/install) (`gcloud`) installed
- Local `gcloud` wrapper installed on PATH (see First-Time Setup below)
- `op-firebase-deploy` and `op-firebase-setup` on PATH
- Application Default Credentials (ADC) initialized via `gcloud auth application-default login`
- Permission to impersonate `firebase-deployer@swipewatch.iam.gserviceaccount.com`

## Environments

| Environment | Firebase Project | URL |
|-------------|-----------------|-----|
| Production | `swipewatch` | https://swipewatch.web.app |

There is no staging environment. All deploys go directly to production.

## Build Process

No build step required. This is a static site — source files (`index.html`, `app.js`, `styles.css`, assets) are deployed directly.

If asset versioning is updated, increment the query param version in `index.html` (for example `?v=1.6` → `?v=1.7`).

## Deployment Steps

All deploys use `op-firebase-deploy` for keyless, non-interactive service account impersonation. Never run `firebase deploy` directly.

```bash
# Full deploy (hosting + all configured services)
op-firebase-deploy

# Hosting only
op-firebase-deploy --only hosting
```

The script:
1. Auto-detects the Firebase project from `.firebaserc`
2. Reads source credentials from `GOOGLE_APPLICATION_CREDENTIALS` or `~/.config/gcloud/application_default_credentials.json`
3. Generates a temporary `impersonated_service_account` credential file for `firebase-deployer@swipewatch.iam.gserviceaccount.com`
4. Sets `GOOGLE_APPLICATION_CREDENTIALS` to that temp file and runs `firebase deploy --non-interactive`
5. Cleans up credentials on exit

No long-lived deploy key is stored locally or in 1Password. The only interactive step is refreshing local ADC if it has expired or been revoked:

```bash
gcloud auth application-default login
```

The local `gcloud` wrapper uses the same ADC source so normal `gcloud` commands work without an interactive `gcloud auth login`.

## First-Time Setup

Install the canonical helper scripts from the sibling template repo once per machine:

```bash
mkdir -p ~/.local/bin
cp ../ai_agent_repo_template/scripts/gcloud/gcloud ~/.local/bin/gcloud
cp ../ai_agent_repo_template/scripts/firebase/op-firebase-deploy ~/.local/bin/
cp ../ai_agent_repo_template/scripts/firebase/op-firebase-setup ~/.local/bin/
chmod +x ~/.local/bin/gcloud ~/.local/bin/op-firebase-deploy ~/.local/bin/op-firebase-setup
hash -r
```

Then bootstrap machine auth and project impersonation:

```bash
gcloud auth application-default login
op-firebase-setup swipewatch
```

`op-firebase-setup` is the legacy script name, but it now performs keyless setup. For this project it:
1. Enables the IAM Credentials API
2. Creates `firebase-deployer@swipewatch.iam.gserviceaccount.com` if needed
3. Grants deploy roles to that service account
4. Grants your current principal `roles/iam.serviceAccountTokenCreator` on the deployer
5. Creates or updates a dedicated `gcloud` configuration named `swipewatch`

To bypass the local wrapper for a one-off command:

```bash
GCLOUD_BYPASS_ADC_WRAPPER=1 gcloud ...
```

## Rollback Procedure

Firebase Hosting supports instant rollback via the console or CLI:

```bash
# List recent releases
firebase hosting:releases:list

# Roll back to a specific release version
firebase hosting:channel:deploy live --release-id <VERSION_ID>
```

Alternatively, use the Firebase Console → Hosting → Release History → Roll back.

## Post-Deployment Verification

1. Open https://swipewatch.web.app in an incognito window
2. Verify the onboarding screen appears on first visit
3. Swipe a few cards — confirm like/dislike/super-like animations work
4. Check the coin bank badge updates correctly
5. Open browser DevTools → Network → confirm assets load with correct `?v=` cache-bust params
6. Check Firebase Console → Analytics → confirm GA4 events are firing

## CI/CD Integration

No CI/CD pipeline is currently configured. Deploys are manual via `op-firebase-deploy`.

When a CI system is connected, add `scripts/ci/` checks to the pipeline and prefer Workload Identity Federation or another `external_account` credential as the source ADC, then let `op-firebase-deploy` impersonate the deployer service account.

## Secrets Management

- No API keys or secrets are committed to this repository. Keep it that way.
- Deploy auth uses short-lived impersonated credentials derived from local ADC or CI-provided external-account credentials.
- If a future feature requires client-side API keys, store them only in ignored config files and apply browser restrictions in Google Cloud. Never commit raw keys.
- For future secrets, use `op://Private/<item>/<field>` references in committed files and resolve them into gitignored runtime files with `op inject`.

## Auth Maintenance

If local ADC has expired, been revoked, or is missing:

```bash
gcloud auth application-default login
```

If deploy impersonation breaks because IAM bindings or `gcloud` config drifted, rerun:

```bash
op-firebase-setup swipewatch
```
