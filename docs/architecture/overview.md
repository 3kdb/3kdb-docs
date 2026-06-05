---
id: overview
title: Architecture Overview
sidebar_position: 1
---

# Architecture Overview

3kdb is organized around four top-level concerns: **characters**, **common systems**, **modules**, and **scripts**.

## Directory layout

```
3kdb/
├── 3k.tin               # Main launcher — character selection menu
├── chars/               # Per-character configuration (41 characters)
├── common/              # Shared systems loaded by every character
│   ├── guilds/          # Guild-specific scripts (22 guilds)
│   ├── areas/           # Area-specific helpers
│   ├── bot/             # 151+ leveling bot scripts
│   ├── eq/              # Equipment-specific scripts
│   ├── gags/            # Spam filtering
│   ├── map/             # Map data and speedrun routes
│   └── quests/          # Quest aliases and helpers
├── modules/             # Optional feature modules
│   ├── mip/             # MUD Interface Prototype (UI layer)
│   ├── crafting/        # Profession crafting automation
│   ├── dmgtracker/      # Damage tracking
│   ├── map/             # Advanced mapping
│   ├── helpers/         # Utility functions
│   ├── deadman/         # Hardcore/deadman mode
│   ├── defense_tracker/ # Defense stat tracking
│   ├── worlddrops/      # World drop tracking
│   └── colors/          # Color theme library
├── scripts/             # Python helper scripts
└── logs/                # Session logs (per system user)
```

## Design philosophy

**Characters own their variation, common/ owns the baseline.**
Every character loads `common/index.tin` which brings in the full baseline — connection config, aliases, actions, events, the MIP UI, guild scripts, and all modules. Character-specific files in `chars/<name>/` then layer on top by adding extra triggers, overrides, or custom variables.

**Guild logic is self-contained.**
Each guild lives in `common/guilds/<guild>/` and provides its own actions, aliases, heartbeat, strategy, gags, and HP bar config. Characters set `#var guild <name>` before loading `common/index.tin`, which then loads the appropriate guild folder.

**Modules are opt-in.**
Modules in `modules/` are loaded by `common/index.tin` by default, but individual characters can kill a module's class to disable it. New features should be built as modules rather than added directly to `common/`.

## Class-based code management

TinTin++ uses **classes** to group and lifecycle script code. Every file in 3kdb opens and closes a named class:

```tintin
#class {guild_actions} {kill};   // Remove any previous version
#class {guild_actions} {open};   // Start adding to this class
// ... actions, aliases, etc ...
#class {guild_actions} {close};  // Seal the class
```

Killing a class removes all its triggers/aliases from memory in one operation. This is how `.reload` and `.gswap` work — they kill all guild and player classes, then re-read the files to get fresh copies.

## Key classes

| Class name | Contains |
|---|---|
| `common_config` | Connection setup, session initialization |
| `default_actions` | Global combat triggers, status tracking |
| `default_aliases` | Global command shortcuts |
| `common_toggles` | Feature toggle variables and toggle/toggle-list aliases |
| `common_events` | Mouse, keyboard, and system event handlers |
| `common_strategy` | Strategy list, `strategy` / `strategies` aliases |
| `guild_actions` | Guild-specific combat triggers |
| `guild_aliases` | Guild-specific command shortcuts |
| `guild_heartbeat` | Guild per-round logic |
| `guild_strategy` | Guild combat strategy functions |
| `player_actions` | Character-specific triggers |
| `player_aliases` | Character-specific command shortcuts |
| `player_config` | Character-specific configuration |
| `mip` | MIP UI rendering |
| `crafting` | Crafting automation |
| `dmgtracker` | Damage tracking |

## Variable naming conventions

| Pattern | Meaning |
|---|---|
| `$user` | Current character name (lowercase) |
| `$guild` | Current guild name (lowercase) |
| `$my[...]` | Character-state arrays (HP, buffs, abilities) |
| `$mip[...]` | MIP UI state (round counter, HP, etc.) |
| `$toggles[...]` | Feature toggle flags (0/1) |
| `$bot[...]` | Bot system state |
| `$enemy[...]` | Current combat target state |
| `$rolm[...]` | Rod of Lordly Might state |
| `$eternal[...]` | Eternal guild/class state |
