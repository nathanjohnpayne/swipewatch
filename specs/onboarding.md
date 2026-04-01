---
spec_id: onboarding
title: Onboarding
---

# Onboarding

## Overview

First-time users see an onboarding overlay explaining swipe gestures. Completion is persisted in localStorage.

## Requirements

1. The onboarding overlay is visible by default (no `hidden` class).
2. Clicking the "Let's Go" button hides the overlay and sets `swipewatch_onboarding_completed` to `'true'` in localStorage.
3. On subsequent visits, `checkOnboarding()` reads localStorage and hides the overlay if already completed.
4. When the content pool is fully exhausted and the user restarts, onboarding is shown again (localStorage key is removed).
