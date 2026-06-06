---
id: monk
title: Monk
sidebar_position: 12
---

# Monk

Monks are a martial arts guild. The 3kdb script provides two combat strategies driven by the monk's AE (attunement energy) resource.

## Strategies

| Strategy | Description |
|---|---|
| `palm` | Use `palm` on the first available round each fight when AE > 0 |
| `pressure` | Use `pressure` on the first available round each fight |

Both strategies respect the action queue — they only fire once per round (`action_round < mip[round]`) and reset their tracking flag at round 1.

## Script coverage

The monk package currently provides strategy automation only. No custom aliases beyond the base set are defined. Combat relies on the common action queue and strategy system.
