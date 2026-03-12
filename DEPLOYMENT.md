# Deployment

## Prerequisites

- [Firebase CLI](https://firebase.google.com/docs/cli) installed globally
- [1Password CLI](https://developer.1password.com/docs/cli/) (`op`) installed and signed in
- `op-firebase-deploy` script on PATH (see First-Time Setup below)
- Access to the `swipewatch` 1Password vault items: `Private/Firebase Deploy - swipewatch` and `Private/GCP ADC`

## Environments

| Environment | Firebase Project | URL |
|-------------|-----------------|-----|
| Production | `swipewatch` | https://swipewatch.web.app |

There is no staging environment. All deploys go directly to production.

## Build Process

No build step required. This is a static site — source files (`index.html`, `app.js`, `styles.css`, assets) are deployed directly.

If asset versioning is updated, increment the query param version in `index.html` (e.g., `?v=1.6` → `?v=1.7`).

## Deployment Steps

All deploys use `op-firebase-deploy` for non-interactive 1Password auth. Never run `firebase deploy` directly.

```bash
# Full deploy (hosting + all configured services)
op-firebase-deploy

# Hosting only
op-firebase-deploy --only hosting
```

The script:
1. Reads the service account key from 1Password (`Private/Firebase Deploy - swipewatch/credential`)
2. Auto-detects the Firebase project from `.firebaserc`
3. Writes the key to a temp file (`umask 077`), sets `GOOGLE_APPLICATION_CREDENTIALS`
4. Runs `firebase deploy --non-interactive`
5. Cleans up credentials on exit

The only interactive step is the 1Password biometric prompt (Touch ID). No `firebase login`, `gcloud auth login`, or browser prompts needed.

## First-Time Setup

To set up deploy credentials for a new machine:

```bash
op-firebase-setup swipewatch
```

This creates a `firebase-deployer` service account, grants deploy roles, generates a key, and stores it in 1Password as `Firebase Deploy - swipewatch`. Run once per machine or after key rotation.

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

When a CI system is connected, add `scripts/ci/` checks to the pipeline and use `op-firebase-deploy` (or equivalent service-account-based non-interactive deploy) in CI.

## Secrets Management

- No API keys or secrets are committed to this repository. Keep it that way.
- Service account credentials are stored exclusively in 1Password (`Private/Firebase Deploy - swipewatch`).
- If the deploy credential (`Private/GCP ADC`) is exposed:
  1. Run `gcloud auth application-default login --project=swipewatch`
  2. Overwrite the 1Password item: `op item edit "GCP ADC" --vault Private "credential=$(cat ~/.config/gcloud/application_default_credentials.json)"`
  3. Revoke the old Google credential in the GCP Console
- If a future feature requires client-side API keys, store them only in ignored config files and apply browser restrictions in Google Cloud. Never commit raw keys.
- For future secrets, use `op://Private/<item>/<field>` references in committed files and resolve them into gitignored runtime files with `op inject`.

## Key Rotation

The service account key does not expire. To rotate if compromised:

```bash
op-firebase-setup swipewatch
```

This generates a new key and updates 1Password automatically.
