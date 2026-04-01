---
spec_id: swipe-mechanics
title: Swipe Mechanics
---

# Swipe Mechanics

## Overview

Cards can be swiped left (dislike), right (like), or up (super-like/watchlist) via touch/mouse drag or action buttons.

## Requirements

1. Swiping left increments `stats.disliked` and removes the card.
2. Swiping right increments `stats.liked` and removes the card.
3. Swiping up increments `stats.superLiked` and removes the card.
4. The dislike button triggers a left swipe on the top card.
5. The like button triggers a right swipe on the top card.
6. The super button triggers an up swipe on the top card.
7. Each swipe increments `coinBankTotal` by 1 and persists it to localStorage.
8. After all session cards are swiped, the end screen is displayed.
9. The swipe threshold is 100px of drag distance.
