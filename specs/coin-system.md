---
spec_id: coin-system
title: Coin System
---

# Coin System

## Overview

Users earn 1 coin per swipe. Coins persist in localStorage and can be spent to unlock discovery modes (25 coins each).

## Requirements

1. `loadCoinBank()` reads from `swipewatch_coin_bank` in localStorage, defaulting to 0.
2. `saveCoinBank(total)` writes the total to localStorage.
3. Each card swipe increments the coin bank by 1.
4. The coin badge in the header reflects the current total.
5. Spending 25 coins deducts from the bank and persists the new total.
6. The spend button is visible on the end screen only when coins >= 25 and the pool is not exhausted.
7. `resetCoinBank()` removes the localStorage key, resetting to 0.
