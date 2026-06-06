---
id: overview
title: Guild Overview
sidebar_position: 1
---

# Guild Overview

Every character belongs to a guild. The guild determines which combat abilities, spells, and automation scripts are loaded. 3kdb includes complete script packages for 22 guilds.

## Supported guilds

| Guild | Theme | Script coverage | Details |
|---|---|---|---|
| `adventurer` | Classic fighter | Skeleton | [→](./adventurer.md) |
| `angel` | Divine | Skeleton | [→](./angel.md) |
| `bard` | Music/magic | Full — defense, bots, reflex, song buffs, mob eval | [→](./bard.md) |
| `bladesinger` | Blade + magic | Skeleton | [→](./bladesinger.md) |
| `breed` | Hybrid | Skeleton | [→](./breed.md) |
| `changeling` | Shapeshifting | Skeleton | [→](./changeling.md) |
| `cyborg` | Mechanical | Minimal | [→](./cyborg.md) |
| `elemental` | Elemental magic | Full — damage type switching, blasts, waves, soul gems | [→](./elemental.md) |
| `eternal` | Transcendent | Cross-guild (separate docs) | — |
| `fremen` | Desert warrior | Full — corpse management, water donation, skill analysis | [→](./fremen.md) |
| `gentech` | Sci-fi/tech | Full — shields, timescan, CPC, infirmary, repair | [→](./gentech.md) |
| `jedi` | Force user | Skeleton | [→](./jedi.md) |
| `juggernaut` | Heavy mech | Full — nukes, mech, stim healing, donations, GXP tracking | [→](./juggernaut.md) |
| `knight` | Paladin | Skeleton | [→](./knight.md) |
| `knights-zorb` | Special variant | — | — |
| `mage` | Arcane | Full — defenses, summons, contingencies, MI, MC/SP management | [→](./mage.md) |
| `monk` | Martial arts | Partial — palm and pressure strategies | [→](./monk.md) |
| `necromancer` | Undead | Full — sub-forms, undead nuke, corpse runs, power study | [→](./necromancer.md) |
| `priest` | Divine healer | Full — buff maintenance, bless party, feather touch | [→](./priest.md) |
| `psicorps` | Psychic | Full — implant-driven power automation, AA, body adjustment | [→](./psicorps.md) |
| `sii` | — | Minimal — GXP reset only | [→](./sii.md) |

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
