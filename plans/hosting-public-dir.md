# Hosting root: `public/`

## Status

Delivered with the hosting-exposure fix PR (2026-09-29).

## Decision

Firebase Hosting serves only the `public/` directory (`firebase.json` `"hosting.public": "public"`). The site assets (`index.html`, `app.js`, `styles.css`, `gtag-init.js`, `disney-coin.png`, `disney-dollar.jpg`) live there; everything else in the repository stays at the root or in its existing directories and is never uploaded.

## Why a new top-level directory

With the repository root as the hosting root, every file in the deploying working copy was eligible for upload, including tooling, tests, workflow files, and gitignored local agent config. An ignore list cannot be relied on to keep pace with new files. Making the hosting root a dedicated directory turns the default from "publish everything" into "publish only site assets".

`public/` is declared in `.repo-template.yml` `extra_top_level_dirs` and documented in `rules/repo_rules.md` and `.ai_context.md`. No build step is introduced: `public/` is both the source location and the deployed root.

## Related hardening

The same change adds baseline security response headers (an enforcing `Content-Security-Policy` with no inline script or inline styles, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`), moves the Google Analytics bootstrap into `public/gtag-init.js`, builds cards with DOM APIs instead of `innerHTML` templates with inline handlers, and narrows the SPA rewrite to extensionless routes. `tests/hosting-config.test.js` guards all of this.
