---
id: trackers
title: Trackers & Reports
---

# Trackers & Reports

Aliases for tracking kills, damage, defense stats, XP, and item usage over a session.

> **In-game:** `library3kdb trackers`

## Kill Reporting (3kReport)

Tracks every mob kill during your session and produces filterable reports.

| Alias | Usage | Description | Location |
|---|---|---|---|
| `3kReport` | `3kReport` or `3kReport <n>` or `3kReport <mob>` | Kill report — all kills, last N kills, or by mob name | `common/3kReport.tin` |
| `3kReport-clear` | `3kReport-clear` | Clear all kill report data | `common/3kReport.tin` |
| `3kReport-config` | `3kReport-config` | Configure kill report display options | `common/3kReport.tin` |
| `3kReport+` | `3kReport+ <filter>` | Add a kill report filter | `common/3kReport.tin` |
| `3kReport-` | `3kReport- <filter>` | Remove a kill report filter | `common/3kReport.tin` |

Enabled by default via `toggles[3kreport]`. Disable with `toggle 3kreport`.

## Damage Tracking

Requires the **Numbers VAF perk** for accurate hit data.

| Alias | Usage | Description | Location |
|---|---|---|---|
| `dstats` | `dstats` | Damage tracking report | `modules/dmgtracker/dmgtracker.tin` |
| `dreset` | `dreset` | Reset the damage tracker | `modules/dmgtracker/dmgtracker.tin` |
| `summonDmg` | `summonDmg` | Mage summon damage report | `modules/dmgtracker/dmgtracker_mage.tin` |
| `summonDmgVaf` | `summonDmgVaf` | Mage summon damage (VAF perk required) | `modules/dmgtracker/dmgtracker_mage.tin` |
| `summonDmg-clear` | `summonDmg-clear` | Clear summon damage data | `modules/dmgtracker/dmgtracker_mage.tin` |
| `spellDmg-clear` | `spellDmg-clear` | Clear spell damage tracker | `modules/dmgtracker/dmgtracker_mage.tin` |
| `truckDmg-clear` | `truckDmg-clear` | Reset Juggernaut truck damage tracking | `modules/dmgtracker/dmgtracker_jugger.tin` |
| `mountDmg-clear` | `mountDmg-clear` | Reset mount damage tracking | `modules/dmgtracker/dmgtracker_jugger.tin` |
| `supportDmg-clear` | `supportDmg-clear` | Reset support mech damage tracking | `modules/dmgtracker/dmgtracker_jugger.tin` |

## Defense Tracking

| Alias | Usage | Description | Location |
|---|---|---|---|
| `defStats` | `defStats` | Defense tracking report | `modules/defense_tracker/defense_tracker.tin` |
| `defStats_reset` | `defStats_reset` | Reset defense stats | `modules/defense_tracker/defense_tracker.tin` |

## XP Tracking

| Alias | Usage | Description | Location |
|---|---|---|---|
| `reset_gxp` | `reset_gxp` | Reset the general guild XP tracker | `common/status.tin` |

## Item Tracking

| Alias | Usage | Description | Location |
|---|---|---|---|
| `istats` | `istats` | Item tracker report — tracks all items acquired | `common/eq/item_tracker.tin` |
| `istats_reset` | `istats_reset` | Reset item tracker | `common/eq/item_tracker.tin` |

## Notes

- The damage tracker has guild-specific variants: `dmgtracker_mage.tin` for mage summon damage and `dmgtracker_jugger.tin` for juggernaut mount/truck/support data.
- `reset_gxp` is also available as `gxp_reset` within guild-specific scripts (priest, psicorps, fremen, sii each have their own version).
- Defense tracking records how often different damage types hit you and whether defenses blocked them — useful for optimizing your AC loadout.
