---
id: structure
title: Guild File Structure
sidebar_position: 2
---

# Guild File Structure

Each guild lives in `common/guilds/<guild>/` and provides a standardized set of files. All guild code runs in named classes so it can be cleanly swapped.

## Standard files

### `index.tin`

The guild loader. Reads all other guild files in the correct order. This is the only file `common/index.tin` directly reads for a guild.

```tintin
#read common/guilds/bard/actions.tin;
#read common/guilds/bard/aliases.tin;
#read common/guilds/bard/gags.tin;
#read common/guilds/bard/heartbeat.tin;
#read common/guilds/bard/miphp.tin;
#read common/guilds/bard/strategy.tin;
#read common/guilds/bard/tickers.tin;
```

### `actions.tin` — class: `guild_actions`

Trigger patterns matching MUD output. Typical content:
- Guild ability proc notifications
- Specific mob responses that need guild action
- HP bar updates for guild-specific resources (mana, power, karma, etc.)

### `aliases.tin` — class: `guild_aliases`

Command shortcuts unique to the guild. These are what appear in `library3kdb guild`.

### `gags.tin` — class: `guild_gags`

Spam filters for guild-specific output that clutters the screen. Common examples: repeated spell fizzle messages, routine ability echoes.

### `heartbeat.tin` — class: `guild_heartbeat`

The per-round logic. Called by `_strategy_heartbeat` → `_strategy_guild` every combat round. This is where the guild decides what actions to queue — cast spells, use abilities, manage resources.

Pattern:
```tintin
#alias _strategy_guild {
    #if {$mip[round] > $action_round} {
        // Queue round-based actions
        add_action {{{name} {my_spell} {action} {cast fireball} {priority} {1}}};
    };
};
```

### `miphp.tin` — class: `guild_miphp`

Configures the MIP HP bar for the guild's resource. Some guilds have multiple resource bars (HP + mana, HP + karma, HP + power points).

### `strategy.tin` — class: `guild_strategy`

Defines `_strategy_guild_start` (first 3 rounds) and `_strategy_guild` (every round). Uses `checkStrategy` to conditionally run actions based on active strategies.

### `tickers.tin` — class: `guild_tickers`

Repeating timers. Common uses:
- Auto-cast buffs that expire
- Resource monitoring (alert when below threshold)
- Periodic status checks

## Optional files

| File | Purpose | Class |
|---|---|---|
| `eval.tin` | Evaluate guild-specific conditions | `guild_eval` |
| `hpbar.tin` | HP bar command setup | — |
| `vars.tin` | Guild-specific default variables | `guild_vars` |
| `pstats.tin` | Performance stat tracking | — |
| `data.tin` | Static data tables (spell lists, etc.) | `guild_data` |
| `summoner.tin` | Summon management (mage) | `guild_summoner` |

## Class names

| Class | Killed by `.kill_guild_classes` |
|---|---|
| `guild_actions` | Yes |
| `guild_aliases` | Yes |
| `guild_data` | Yes |
| `guild_gags` | Yes |
| `guild_heartbeat` | Yes |
| `guild_hpbar` | Yes |
| `guild_mage_defense_tracker` | Yes |
| `guild_miphp` | Yes |
| `guild_summoner` | Yes |
| `guild_tickers` | Yes |
| `guild_vars` | Yes |
| `guild_strategy` | Yes |
| `guild_eval` | Yes |

## Creating a new guild

1. Copy `common/guilds/guild template/` to `common/guilds/myguild/`
2. Fill in each file with guild-specific content
3. Register guild-specific aliases in `library3kdb` via `.add_library` calls (wrapped in `#if {"$guild" == "myguild"}`)
4. Set `#var guild myguild` in your character file and reload

The guild template folder contains placeholder aliases and comments to guide you through each file.
