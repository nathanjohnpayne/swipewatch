# PR-body contract parser delivery

## Status

Approved for delivery through [Swipewatch PR #117](https://github.com/nathanjohnpayne/swipewatch/pull/117) on 2026-09-24.

## Decision

Swipewatch may carry the generated standalone PR-body contract parser from [mergepath PR #1281](https://github.com/nathanjohnpayne/mergepath/pull/1281), including the generated-artifact lint correction from [mergepath PR #1307](https://github.com/nathanjohnpayne/mergepath/pull/1307). This is an explicit, infrastructure-only exception to the repository's no-new-libraries rule.

The delivered runtime bundles pinned `mdast`, `micromark`, and supporting packages so CI can parse GitHub-flavored Markdown without installing dependencies. Their versions, package sources, declared licenses, and packaged license texts are embedded in the generated file. Swipewatch receives no package manifest, lockfile, readable parser source, rebuild tool, npm installation step, or application runtime dependency.

## Canonical source and maintenance

The readable source, pinned build inputs, rebuild command, regression suite, and dependency update process remain canonical in `nathanjohnpayne/mergepath`. Swipewatch carries only the generated runtime and its bounded callers, sourced from mergepath commit `48af12f90581dd5e67ab6d9dc54327605c019292`. Future parser changes must be built and reviewed in mergepath, then propagated here; the generated consumer file must not be edited by hand.

## Application boundary

This delivery changes repository review infrastructure only. It adds no site dependency, browser code, server function, build step, deploy step, or network request, and it does not change Swipewatch's static-site runtime behavior.
