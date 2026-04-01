---
spec_id: analytics
title: Analytics
---

# Analytics

## Overview

Google Analytics events are fired for card interactions, restarts, mode unlocks, and onboarding completion.

## Requirements

1. `trackEvent(action, label, value)` calls `gtag('event', action, ...)` when gtag is defined.
2. Events are fired for `dislike`, `like`, and `super_like` card swipes.
3. A `restart` event is fired when the user restarts the app.
4. An `unlock_mode` event is fired with the mode name when a discovery mode is selected.
5. An `onboarding` event is fired when the user completes onboarding.
6. The `trackEvent` function guards with `typeof gtag !== 'undefined'`.
