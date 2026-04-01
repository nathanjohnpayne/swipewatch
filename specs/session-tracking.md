---
spec_id: session-tracking
title: Session Tracking
---

# Session Tracking

## Overview

Each session presents a batch of 10 shuffled content cards. Shown content IDs are tracked in localStorage to avoid repeats.

## Requirements

1. `SESSION_SIZE` is 10.
2. `getSessionContent()` returns up to 10 items the user has not yet seen.
3. Shown content IDs are persisted to `swipewatch_shown_content` in localStorage.
4. When all content has been shown, the session draws from the full pool (reshuffled).
5. Progress bar width updates as `(currentIndex / sessionContent.length) * 100`.
6. Progress label displays "X of Y recommendations".
7. The end screen shows session stats: liked, super-liked, and disliked counts.
