---
id: overview
title: Modules Overview
sidebar_position: 1
---

# Modules

Modules are optional feature packages in `modules/`. They're loaded by default via `common/index.tin`, but individual characters can disable them by killing the module's class.

## Available modules

| Module | Purpose | Key aliases |
|---|---|---|
| `mip/` | MUD Interface Prototype — the UI layer | `mipon`, `mipoff`, `blacklist` |
| `crafting/` | Profession crafting automation | `forge-on`, `mine`, `minefor`, `smelter-on` |
| `professions/` | Advanced crafting roles | `transmute_burn`, `ref`, `build_golem` |
| `dmgtracker/` | Damage stat tracking | `dstats`, `dreset`, `summonDmg` |
| `defense_tracker/` | Defense stat tracking | `defStats`, `defStats_reset` |
| `map/` | Advanced mapping and navigation | `mapon`, `mapfind`, `go`, `speedruns` |
| `helpers/` | Utility functions | Internal functions used by other modules |
| `colors/` | Color theme library | Internal color definitions |
| `worlddrops/` | World drop item tracking | `toggles[worlddrops]` |
| `deadman/` | Deadman/hardcore mode | `deadman`, `deadman-help` |
| `corpsemanager/` | Advanced corpse management | `corpse_select`, `dcoffin`, `cooler_rotate` |

## Disabling a module

To disable a module for a character, kill its class in `chars/<user>/config.tin`:

```tintin
#class {dmgtracker} {kill};
```

Or add a toggle to `chars/<user>/vars.tin` that gates the module's initialization.

## Loading a module on demand

Some modules can be loaded dynamically during a session:

```tintin
#read modules/crafting/assemble.tin
```

The module file kills its old class at the top before re-loading, so it's safe to read multiple times.

## Module structure

Each module follows the same pattern:

```
modules/<name>/
├── index.tin or <name>.tin   // Main file, usually the only one read by common/index.tin
├── data.tin                  // Static data tables
└── other files...            // Sub-features
```

The main file opens a class, defines all aliases/actions/events, closes the class. Most use the module name as the class name (e.g. class `crafting`, class `mip`, class `dmgtracker`).
