---
spec_id: discovery-modes
title: Discovery Modes
---

# Discovery Modes

## Overview

Users can spend 25 coins to unlock a themed discovery mode that filters the content pool for the next session.

## Requirements

1. Four discovery modes exist: Disney Vault, Streaming Originals, Nature & Discovery, New & Trending.
2. Each mode has a `filter` function that selects matching content from the data.
3. Selecting a mode deducts 25 coins, persists the new total, and starts a new session filtered by that mode.
4. The unlock modal displays all four modes as buttons.
5. Canceling the modal returns to the end screen.
6. Cards in a discovery mode session show a mode badge.
7. The `activeMode` resets to `null` when the end screen is shown.
