---
id: aliases
title: Aliases
sidebar_position: 1
---

# Aliases

Aliases are defined in `common/aliases.tin` and are available to every character. They're loaded in the `default_aliases` class.

## Debugging

| Alias | Description |
|---|---|
| `echo_on` | Echoes every command you send to the MUD (shows the raw `%0` output before sending) |
| `debug` | Turns on full TinTin++ debug mode and enables echo |
| `debugoff` | Turns off debug mode and removes the echo event |
| `.monitorErrors` | Toggles live error monitoring — shows the call stack when a TinTin++ error fires |

## Quality of Life

| Alias | Usage | Description |
|---|---|---|
| `exa` | `exa <target>` | Sends `examine` and `search` for the target. If `explorer[updateDB]` is set, also calls `.lookAtMob` to update the mob database |
| `th` | `th` | Shortcut for `tellhist` — shows recent tells |
| `cwho1` | `cwho1` | Shortcut for `cwho -O` (character who list sorted) |
| `los` | `los` | Shortcut for `lineofsight` |
| `calc` | `calc 2+2*10` | In-client calculator using TinTin++ `#math` — prints the result locally, nothing sent to MUD |
| `grep` | `grep <pattern>` | Searches current buffer for a pattern using TinTin++ `#grep` |

## Bag Management

| Alias | Usage | Description |
|---|---|---|
| `bagall` | `bagall <count>` | Puts everything into bags 1 through `<count>`. Sets `bagsFull=1` and after 4 seconds auto-triggers `autocollect` if items remain |
| `unbagall` | `unbagall <count>` | Drops all, then gets and drops all items from each bag |

## Healing

| Alias | Description |
|---|---|
| `useHeal` | Smart healing: uses `hmheal` if you have HM heal and aren't a mage with immersion running; uses `(heal` if you have eternal heal. Safe to call without knowing which applies |

## Inventory

| Alias | Usage | Description |
|---|---|---|
| `i` | `i` or `i unkept` | Sends inventory command. Resets corpse/inventory tracking variables. Necromancers get extra handling — decanter counting and chest checks |

## Item Collector

| Alias | Description |
|---|---|
| `autocollect` | Toggles the item collector on/off. When on, automatically collects items during leveling. Displays a colored status message |

## Action Queue

These aliases power the global action queue system used by guild heartbeats and strategy scripts.

| Alias | Usage | Description |
|---|---|---|
| `add_action` | `add_action {{{name} {myAction} {action} {cast fireball}}}` | Adds a named action to the queue. Deduplicates by name — won't add the same name twice |
| `remove_action` | `remove_action {myAction}` | Removes all queue entries matching the given name |
| `do_action` | `do_action` | Executes every action in the queue in order, then clears it |

## Beep

| Alias | Description |
|---|---|
| `beep` | Rings the terminal bell if `$beepon` is 1 |
| `beepon` | Enables the bell |
| `beepoff` | Disables the bell |

## Session Management

| Alias | Description |
|---|---|
| `ld` | Saves all variables (`_variable_export`) then disconnects after 1 second |
| `stashlist` | Sends `stashlist` to MUD. Use `stashlist assemble` to dynamically load the assemble module first |

## Reputation (`.rep`)

| Alias | Usage | Description |
|---|---|---|
| `.rep` | `.rep` or `.rep <name>` | Runs `reps`. With an argument, temporarily highlights that player's name in the reputation list for 2 seconds |

## Guild Utilities {#guild-utilities}

### `.gswap` — Switch guilds mid-session

```tintin
.gswap mage
```

Performs a full guild hot-swap:
1. Validates the guild folder exists
2. Kills all guild, player, and draw classes
3. Unsets all draw variables (prevents stale UI state)
4. Sets `$guild` to the new value
5. Reloads `common/index.tin`, the new guild scripts, and all character files
6. Reinitializes the MIP UI, map, deadman mode, and screen
7. Saves state via `_variable_export`

### `.fly` / `.land` — Guild-aware flight

| Guild | Fly command | Land command |
|---|---|---|
| necromancer | `shapeshift raven` | `shapeshift` |
| mage | `cast levitate` | `deplete levitate` |
| bard | `cast wings of the phoenix; soar` | `land` |
| juggernaut | `jumpjet` | `jumpjet` |

### `.kill_guild_classes` / `.kill_player_classes`

Internal aliases used by `.reload` and `.gswap` to cleanly remove all loaded script code before reloading. Rarely called directly.

### `.reload`

```tintin
.reload
```

Kills all guild and player classes, then re-reads every file in `chars/<user>/` plus the current guild's `index.tin`. Useful after editing a character-specific script.

## Class management internals

These internal aliases are used by `.reload` and `.gswap` — documented here for completeness:

- `.kill_guild_classes` — kills: `guild_actions`, `guild_aliases`, `guild_data`, `guild_gags`, `guild_heartbeat`, `guild_hpbar`, `guild_mage_defense_tracker`, `guild_miphp`, `guild_summoner`, `guild_tickers`, `guild_vars`, `guild_strategy`, `guild_eval`
- `.kill_player_classes` — kills: `player_actions`, `player_aliases`, `player_config`, `player_heartbeat`, `player_miphp`, `player_private`, `player_status`, `player_tickers`
- `.kill_dmg_trackers` — kills: `dmgtracker`, `dmgtracker_mage`, `dmgtracker_jugger`
