---
id: overview
title: Guild Overview
sidebar_position: 1
---

# Guild Overview

Every character belongs to a guild. The guild determines which combat abilities, spells, and automation scripts are loaded. 3kdb includes complete script packages for 22 guilds.

## Supported guilds

| Guild | Theme | Notable features |
|---|---|---|
| `adventurer` | Classic fighter | — |
| `angel` | Divine | — |
| `bard` | Music/magic | Rainbow of death, song buffs, reflex system |
| `bladesinger` | Blade + magic | — |
| `breed` | Hybrid | — |
| `changeling` | Shapeshifting | — |
| `cyborg` | Mechanical | Decompose corpses |
| `elemental` | Elemental magic | Damage type selection, prismatic emission |
| `eternal` | Transcendent | Cross-guild power set (separate from guild) |
| `fremen` | Desert warrior | Water donation, reclaim corpses, skill training |
| `gentech` | Sci-fi/tech | CPC management, shields, timeslide |
| `jedi` | Force user | Weapon mastery, lightsaber modes |
| `juggernaut` | Heavy mech | Nukes, mech management, mount damage tracking |
| `knight` | Paladin | Shield bashing, bury corpses |
| `knights-zorb` | Special variant | — |
| `mage` | Arcane | Summon configs, contingencies, defense tracking |
| `monk` | Martial arts | Study and eat corpses |
| `necromancer` | Undead | Preserve/absorb corpses, qtrance, chest management |
| `priest` | Divine healer | Party healing/radiance monitoring |
| `psicorps` | Psychic | Power word tracking, astral pump |
| `sii` | — | GXP tracking |

## How guild loading works

When you set `#var guild bard` and load `common/index.tin`, the guild scripts aren't loaded yet. After the common systems load, the guild's `index.tin` is read:

```tintin
#read common/guilds/bard/index.tin
```

This typically reads:

```
guilds/bard/
├── index.tin       → reads all files below
├── actions.tin     → guild-specific triggers (guild_actions class)
├── aliases.tin     → guild-specific commands (guild_aliases class)
├── gags.tin        → guild-specific spam filters (guild_gags class)
├── heartbeat.tin   → per-round guild logic (guild_heartbeat class)
├── miphp.tin       → HP bar config for this guild (guild_miphp class)
├── strategy.tin    → guild combat strategy functions (guild_strategy class)
└── tickers.tin     → repeating timers (guild_tickers class)
```

Optional files some guilds include: `eval.tin`, `hpbar.tin`, `vars.tin`, `pstats.tin`, `data.tin`

## Swapping guilds mid-session

```tintin
.gswap bard
```

See [.gswap](../common/aliases#guild-utilities) for the full swap sequence.

## Guild template

The `common/guilds/guild template/` folder contains a starter template for building a new guild. Copy it and fill in the appropriate files.
