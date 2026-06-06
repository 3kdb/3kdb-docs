---
id: gentech
title: Gentech
sidebar_position: 11
---

# Gentech

Gentechs are a science-fiction engineer guild. The script provides shield management, CPC transfers, infirmary healing, timeslide verification, timescan analysis, and repair routines.

## Key capabilities

| Feature | Description |
|---|---|
| Shield automation | `shields` checks and activates EDNA, Energy Field, and Life Support in one step; auto-reactivates Energy Field on collapse |
| Timescan | `timescan` clears, sets, and queries timescan then calculates estimated minutes to reset |
| Timeslide check | `check_slide` verifies HP/SP/CPC/PU gates and reports what's blocking timeslide |
| CPC transfer | `fill_cpc` runs to the CPC, transfers an item, and returns |
| Infirmary heal | `heal_up` runs to the Gentech infirmary, admits self, then auto-returns after healing |
| Clone trigger | Auto-runs `=call;=afollow on;=akill on` after successful cloning |
| Repair routine | `gt-repair` double-repairs + stabilizes + tacticals a target |

## Aliases

### Shields
| Alias | Description |
|---|---|
| `shields` | Run `gs`, then after 1s: activate EDNA if off, activate Energy Field if off, activate Life Support if off |

Energy Field collapse is also watched — if `[[ Energy Field Collapse Imminent ]]` triggers, `efield;efield` fires automatically.

### Timescan and Timeslide
| Alias | Description |
|---|---|
| `timescan` | `timescan clear` → `timescan set` → `timescan query`, then parse likelihood and estimate minutes to reset |
| `check_slide` | Check HP > 300, SP > 200, CPC > 1000, PU > 2250; report which gate fails |

### Movement and healing
| Alias | Description |
|---|---|
| `fill_cpc <item>` | Save room, go to CPC, `transfer <item>`, return to saved room |
| `heal_up` | Save room, go to gentech infirmary, `admit myself`; auto-returns when "completely healed and repaired" |

### Repair
| Alias | Description |
|---|---|
| `gt-repair` | Repair twice + stabilize + tactical (self if no arg, target if arg provided) |

## MIP bar

Gentech has a custom hpbar layout showing HP, SP, PU, coffin count, CPC, enemy, GXP, efficiency, and other fields. `setup_3kdb_hpbar` sends the full genset hpbar configuration.

## Actions (auto-triggers)

| Trigger | Action |
|---|---|
| `Your cloning was a success!` | `=call;=afollow on;=akill on` |
| `Energy Field Collapse Imminent` | `efield;efield` (reactivate) |
| Timescan likelihood output | Parse and calculate time to reset |
| Timeslide circuits overpowered | Report cooldown to say channel |
