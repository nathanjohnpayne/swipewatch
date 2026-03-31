# Code Modification Rules

### Credential Hygiene and Rotation
- This repo has no Firebase client config or API keys committed. Keep it that way unless a future feature genuinely needs one.
- Do not commit API keys, service-account JSON, or ADC credentials.
- If client-side keys are ever added, keep them in ignored config files and apply browser restrictions in Google Cloud.
- Deploy auth is keyless and 1Password-backed: `op-firebase-deploy` creates short-lived impersonated credentials from `op://Private/c2v6emkwppjzjjaq2bdqk3wnlm/credential`, another explicit `GOOGLE_APPLICATION_CREDENTIALS` file, or CI-provided external-account credentials.
- The 1Password-first deploy-auth model is a deliberate repository invariant. Do not switch this repo back to ADC-first, routine browser-login, `firebase login`, or long-lived deploy-key auth without explicit human approval.
- Routine deploys and `gcloud` work should not require browser login once the shared 1Password source credential exists. If that credential itself needs rotation, refresh it once and update the 1Password item. If impersonation bindings drift, rerun `op-firebase-setup swipewatch`.
- For future secrets, use `op://Private/<item>/<field>` references in committed files and resolve them into gitignored runtime files with `op inject`.

### Known Behaviors (Do Not Break)
- Cards auto-fallback to gradient if images fail to load (via `onerror` handlers)
- Partial sessions show remaining items if fewer than `SESSION_SIZE` are unshown
- `disney-dollar.jpg` exists in the project but is not referenced by any code — do not remove without confirming it is safe to delete

### Content Pool Integrity
- Do not change existing content item IDs — they are stored in `localStorage` to track shown content; changing IDs would cause users to re-see content they have already swiped
- New content items must follow the data model format exactly (see [Agent Operating Rules](operating-rules.md))
- Image label taxonomy must match `RIPCUT_GUIDE.md` and `POSTER_GUIDE.md`

### No New Dependencies
- This is intentionally a dependency-free static site. Do not introduce npm, bundlers, frameworks, or external libraries without explicit discussion and a `plans/` entry.

---
