---
id: index
title: Command Reference
sidebar_position: 1
---

# Command Reference

All commands in this reference come directly from `common/3kdb_library.tin`, the authoritative in-game command index for this repository. Every alias listed here is searchable from inside TinTin++ without leaving the MUD.

## In-game lookup

```tintin
library3kdb                   // Browse all commands with descriptions
library3kdb1                  // Browse all commands (names only, compact)
library3kdb <category>        // Filter by category
3kdbinfo <alias>              // Full detail for one alias
```

**Example:**
```
3kdbinfo mka

===========================
Filter:  combat
Alias:   mka
Usage:   mka optional mob name
Description: fire queued actions then kill target or first room mob
Location: common/mob_kill_action.tin
===========================
```

## Categories

The library organizes every alias into one of these categories:

| Category | What it covers |
|---|---|
| [misc](misc) | General utilities, toggles, UI — things every character uses |
| [combat](combat) | Strategies, mob kill actions, combat automation |
| [corpse](corpse) | Corpse management, coffin donation, cooler handling |
| [bot](bot) | Leveling bot control, area cycler, item collection |
| [trackers](trackers) | Kill reports, damage stats, defense stats, XP tracking |
| [mapping](mapping) | Map navigation, speedruns, waypoints, map editing |
| [mip](mip) | MIP UI — the in-game display layer |
| [crafting](crafting) | Blacksmithing, mining, enchanting, farming, assembling |
| [eternal](eternal) | Eternal class powers, teleports, dungeon management |
| [rolm](rolm) | Rod of Lordly Might abilities |
| [guild](guild) | Guild-specific aliases (shown for your current guild) |
| [profession](profession) | Transmuter, reforger, golem master |
| [chaos](chaos) | Chaos realm area helpers |
| [fantasy](fantasy) | Fantasy realm quests and area helpers |
| [science](science) | Science realm (Section Z, Balangool crafts) |
| [debug](debug) | Debugging and error monitoring |

## Adding your own alias to the library

In any `.tin` file, call `.add_library`:

```tintin
.add_library {my_alias} {misc} {does something cool} {my_alias <arg>} {modules/mymodule/thing.tin};
```

Arguments: **name**, **category**, **description**, **usage**, **location**

It will appear in `library3kdb misc` and `3kdbinfo my_alias` immediately.
