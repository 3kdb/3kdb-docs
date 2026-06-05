---
id: dmgtracker
title: Damage Tracker
sidebar_position: 4
---

# Damage Tracker

The damage tracker module (`modules/dmgtracker/`) records hit damage, miss rates, and summon/mount performance across combat sessions.

> See also: [Trackers reference](../reference/trackers) for all tracker aliases.

## Files

| File | Purpose |
|---|---|
| `dmgtracker.tin` | Core tracker — `dstats`, `dreset` |
| `dmgtracker_mage.tin` | Mage summon damage — `summonDmg`, `summonDmgVaf` |
| `dmgtracker_jugger.tin` | Juggernaut mount/truck/support — `truckDmg-clear`, etc. |
| `dmgtracker_psicorps.tin` | Psicorps damage tracking |
| `dmgtracker_new.tin` | Next-generation tracker variant |
| `dodgetracker.tin` | Tracks mob dodges |
| `mob_dodges.tin` | Mob dodge data |
| `data.tin` | Damage reference data |

## Requirements

The `dstats` and `summonDmgVaf` commands require the **Numbers VAF perk** on 3 Kingdoms. Without this perk, the tracker still runs but damage values will not be captured.

## Basic usage

```tintin
// After a session of combat:
dstats          // see damage report
dreset          // clear and start fresh

// Mage summon tracking:
summonDmg       // standard summon report
summonDmg-clear // clear data
spellDmg-clear  // clear spell damage separately
```

## Juggernaut tracking

```tintin
truckDmg-clear      // reset truck damage
mountDmg-clear      // reset mount damage
supportDmg-clear    // reset support mech damage
```

The juggernaut report alias `jugg_report` (in guild aliases) combines these stats with GXP and mount lock data.
