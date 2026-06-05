---
id: rolm
title: ROLM (Rod of Lordly Might)
---

# ROLM — Rod of Lordly Might

Aliases for the Rod of Lordly Might item — a powerful weapon that has rune-based abilities and teleportation.

> **In-game:** `library3kdb rolm`

## Aliases

| Alias | Usage | Description | Location |
|---|---|---|---|
| `rolm` | `rolm <dmgtype/wpntype>` | Switch ROLM damage type by damage type or weapon type | `common/eq/rolm.tin` |
| `setport` | `setport` | Set an anchor at your current room | `common/eq/rolm.tin` |
| `port` | `port` | Teleport to your saved anchor point | `common/eq/rolm.tin` |
| `dove` | `dove` | Stop all combat in the room | `common/eq/rolm.tin` |

## State variables

| Variable | Content |
|---|---|
| `$rolm[owl]` | Whether the owl rune is available |
| `$rolm[raven]` | Whether the raven rune is available |
| `$rolm[gremlin]` | Whether the gremlin rune is available |
| `$rolm[charges]` | Current ROLM charge count |
| `$rolm[offhand]` | The offhand weapon to re-wield after ROLM swap |

## Strategy integration

The `rolm` and `rolm1` combat strategies automate rune usage in combat:

| Strategy | What it does |
|---|---|
| `rolm` | Automatically touches owl/raven/gremlin runes in rounds 3–5 (when charges > 50) |
| `rolm1` | Like `rolm` but also temporarily wields the Rod for the owl touch, then re-wields `$rolm[offhand]` after 610 seconds |

Enable with: `strategy rolm` or `strategy rolm1`

## File location

`common/eq/rolm.tin` — part of the equipment module, loaded via `common/eq/index.tin`.
