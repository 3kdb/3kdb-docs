---
id: library
title: Command Library (3kdb Reference)
sidebar_position: 1
---

# Command Library

`common/3kdb_library.tin` is the **central reference index** for this repository. It catalogs every major alias, where it lives, how to use it, and what it does — all queryable from inside TinTin++ without leaving the game.

:::tip This is your primary quick-reference
When you don't remember a command name, use `library3kdb` in-client to browse or search. It covers every major feature in this repository.
:::

## In-game lookup commands

### Browse all commands

```tintin
library3kdb
```

Prints every registered alias with its description. Also shows the available filter categories.

### Browse without descriptions (compact view)

```tintin
library3kdb1
```

Same as above but prints only the alias names — useful for a quick scan.

### Filter by category

```tintin
library3kdb <category>
```

Filters to only aliases in that category. Available categories:

| Category | What it covers |
|---|---|
| `eternal` | Eternal class powers and utilities |
| `rolm` | Rod of Lordly Might commands |
| `crafting` | Blacksmithing, mining, enchanting, farming |
| `mapping` | Map navigation, speedruns, waypoints |
| `chaos` | Chaos realm items and ring-making |
| `fantasy` | Fantasy realm quests and area helpers |
| `science` | Science realm (Section Z, Balangool) |
| `profession` | Transmuter, reforger, golem master |
| `guild` | Guild-specific aliases (filtered to your guild) |
| `misc` | Quality-of-life utilities, toggles, UI |
| `debug` | Debugging and error monitoring tools |
| `mip` | MIP UI controls |
| `corpse` | Corpse management system |
| `combat` | Strategy and mob kill action systems |
| `bot` | Bot control and area cycler |
| `trackers` | Kill reports, damage tracking, defense stats |

### Look up a specific alias

```tintin
3kdbinfo <alias>
```

Shows the full detail record for a single alias:

```
===========================
Filter:  misc
Alias:   ld
Usage:   'ld'
Description: go linkdead saving certain variable values
Location: common/aliases.tin
===========================
```

---

## Quick reference by category

### Eternal

| Alias | Usage | Description |
|---|---|---|
| `dupe` | `dupe <item>` | Duplicate items |
| `dc` | `dc <mob>` or `dc` | Duplicate mobs |
| `rd3` | `rd3 <dungeon>` | Reset dungeons for yourself or other players |
| `ewell` | `ewell <mob>` or `ewell` | Redirect all incoming damage to a mob until it explodes |
| `rload` | `rload <item>` | Reload unique items (cup, cooler, freezer, etc.) |
| `imm` | `imm` | Immunity to all damaging attacks for up to 90 rounds |
| `prot` | `prot on` / `prot off` | Shrinks oversized hits (stacks up to 120 rounds) |
| `fry` | `fry <mob>` or `fry` | Room or single-target damage matching mob's weakest AC |
| `refresh` | `refresh` | Refresh a previously defiled room |
| `unload` | `unload` | Completely unload a room |
| `et-res` | `et-res <player/myself>` | Resurrect another player or yourself |
| `tp1` | `tp1 <myself/party/player>` | Teleport to CoT or to another player's party |
| `tp2` | `tp2 <player>` | Teleport present party to a party member |
| `summ1` | `summ1 <party/player>` | Summon party to you or a player to CoT |
| `summ2` | `summ2 <player>` | Summon another player's party to CoT |
| `em` | `em` | Increase stats up to 50% for 1 hour |
| `hw` | `hw` | XP bonus up to 32% for 1 hour |
| `dung_reset` | `dung_reset <dungeon>` | Announce dungeon resets |

### ROLM (Rod of Lordly Might)

| Alias | Usage | Description |
|---|---|---|
| `rolm` | `rolm <dmgtype/wpntype>` | Switch ROLM damage type |
| `setport` | `setport` | Set teleport anchor to current room |
| `port` | `port` | Teleport to saved anchor |
| `dove` | `dove` | Stop all combat in room |

### Crafting & Professions

| Alias | Usage | Description |
|---|---|---|
| `forge-on` | `forge-on` | Activate the blacksmith forge |
| `forge-off` | `forge-off` | Deactivate the blacksmith forge |
| `smelter-on` | `smelter-on` | Activate the enchanting smelter |
| `miner-on` | `miner-on` | Enable mining automation |
| `miner-off` | `miner-off` | Disable mining automation |
| `mine` | `mine <deposit>` | Run ore deposit bot path by name |
| `minefor` | `minefor <jewel>` | Run jewel mining queue |
| `mine-list` | `mine-list` | Show available deposit names |
| `minefor-list` | `minefor-list` | Show jewel names by ore tier |
| `jewel-lookup` | `jewel-lookup help` | Information about jewels |
| `gem-lookup` | `gem-lookup help` | Information about gem recipes |
| `make-gem` | `make-gem help` | Badger's gem maker tool |
| `ln` | `ln` | List non-trivial enchanter recipes (those giving CXP) |
| `autosmelt` | `autosmelt <preset>` | Auto-smelt preset after `smelter-on` |
| `assembler` | `assembler` | Interactive assemble helper for crafted items |
| `stashlist assemble` | `stashlist assemble` | Stashlist with auto-assemble for frags/essence/hearts |
| `fill-moulding` | `fill-moulding` | Examine moulding and unstash best quality available |
| `farmer-on` / `farmer-off` | `farmer-on` | Toggle farming automation |
| `deposit-lookup` | `deposit-lookup help` | Mining deposit information |
| `transmute_burn` | `transmute_burn` | Transmute crafting materials |
| `transmute_ug` | `transmute_ug <jewel> <quality>` | Upgrade item to next quality tier |
| `transmute_ratios` | `transmute_ratios` | Show transmuter ratios |
| `refk` / `refs` | `refk` / `refs` | Buy and reforge a knife/sword |
| `ref` | `ref <item> <ACtype>` | Reforge item to a specific AC defense type |
| `build_golem` | `build_golem <corpse>` | Start golem build sequence |
| `fill_golem` | `fill_golem` | Fill golem parts from held corpses |

### Mapping & Navigation

| Alias | Usage | Description |
|---|---|---|
| `go` | `go <speedrun>` | Navigate to a speedrun destination |
| `go_back` | `go_back` | Return to the room you came from |
| `speedruns` | `speedruns` | List all available speedrun destinations |
| `loadmap` | `loadmap` | Load mapper and navigate to cursor vnum |
| `mapon` | `mapon` | Start live mapping |
| `mapoff` | `mapoff` | Stop live mapping |
| `mapsearch` | `mapsearch <text>` | Search map rooms by name and note |
| `mapfind` | `mapfind <pattern>` | Find rooms matching a pattern |
| `mappath` | `mappath <pattern>` | Find path to matching room |
| `findhere` | `findhere` | Determine your current map position |
| `mapFull` | `mapFull` | Toggle fullscreen map view |
| `mapUndo` | `mapUndo` | Undo last map edit |
| `mapbackup` | `mapbackup` | Write dated backup map file |
| `hidemap` | `hidemap` | Hide the map split pane |
| `voidlink` | `voidlink <dir> <vnum>` | Link exit with a void between |
| `hmavoid` / `hmfollow` | — | Mark/clear CoT portal exits for pathing |
| `maplm` | `maplm <label>` | Create landmark for current vnum |
| `mapicons` | `mapicons` | Show unicode icon palette for map symbols |
| `maphelp` | `maphelp` | Quick reference for map commands |

### Miscellaneous Utilities

| Alias | Usage | Description |
|---|---|---|
| `setup_3kdb` | `setup_3kdb` | Recommended MUD prefs and first-run client setup |
| `exa` | `exa <target>` | Examine and search target |
| `th` | `th` | Show tell history |
| `cwho1` | `cwho1` | List online clan members |
| `calc` | `calc <expression>` | In-client calculator |
| `ld` | `ld` | Save state and disconnect |
| `qq` | `qq` | Toggle mouse capture |
| `toggle-list` | `toggle-list` | Show all toggles and their state |
| `grep` | `grep <pattern>` | Search session buffer |
| `bagall` / `unbagall` | `bagall <n>` | Bag/unbag all items |
| `useHeal` | `useHeal` | Use best available healing |
| `i` | `i` | Inventory summary |
| `stashlist` | `stashlist` | View stash |
| `gags` | `gags` | Configure spam filters |
| `sra` | `sra` | Examine and search room nouns using MIP |
| `.gswap` | `.gswap <guild>` | Hot-swap to a different guild |
| `inputswitch` | Tab key | Switch between two input buffers |
| `init_screen` | `init_screen` | Full screen redraw |
| `draw_all` | `draw_all` | Redraw all active display panels |
| `caption-help` | `caption-help` | Caption panel commands |
| `quest_newbie` | `quest_newbie` | Newbie quest helper |

### Debug

| Alias | Description |
|---|---|
| `debug` | TinTin debug all + send echo |
| `debugoff` | Turn off debug mode |
| `echo_on` | Echo outbound sends without full debug |
| `mipdebug` / `mipdebugoff` | Toggle MIP debug output |

### MIP

| Alias | Usage | Description |
|---|---|---|
| `mipon` | `mipon` | Enable MIP capture and display |
| `mipoff` | `mipoff` | Disable MIP |
| `blacklist` | `blacklist+ <name>` | Block names from MIP chat pane |

### Corpse Management

| Alias | Usage | Description |
|---|---|---|
| `corpsetrig` | `corpsetrig` | Show or edit corpse trigger queue |
| `corpsetrig-help` | `corpsetrig-help` | Corpse trigger help |
| `corpsetrig-on` / `corpsetrig-off` | — | Enable/disable corpse trigger |
| `corpsetrig+` / `corpsetrig-` | `corpsetrig+ <action>` | Add/remove action from queue |
| `corpsetrig-clear` | `corpsetrig-clear` | Clear all queued corpse actions |
| `corpsetrig-kb` | `corpsetrig-kb` | Toggle killing-blow only mode |
| `dcoffin` | `dcoffin` | Auto-run to morgue and donate coffin |
| `corpse_select` | `corpse_select` | Unwrap/deslab/uncooler next corpse by priority |
| `cooler_rotate` | `cooler_rotate <n>` | Move corpses into cooler |
| `check_corpses` | `check_corpses` | Refresh corpse inventory state |
| `check_box` | `check_box <key>` | Parse colossal box into corpse counts |

### Combat

| Alias | Usage | Description |
|---|---|---|
| `strategy` | `strategy <name>` | Toggle a combat strategy on/off |
| `strategies` | `strategies` | Show active and inactive strategies |
| `strategy-list` | `strategy-list` | List all available strategies |
| `strategy-clear` | `strategy-clear` | Clear all active strategies |
| `mka` | `mka <mob>` | Fire queued mob kill actions then attack |
| `mka-on` / `mka-off` | — | Enable/disable mob kill action system |
| `mka-all` | `mka-all` | Set up all mob kill actions |
| `mka-check` | `mka-check` | List queued mob kill actions |
| `mka-clear` | `mka-clear` | Clear all mob kill actions |
| `mka+` / `mka-` | `mka+ <action>` | Add/remove mob kill action |
| `mka-help` | `mka-help` | Mob kill action help |

### Bots & Automation

| Alias | Usage | Description |
|---|---|---|
| `botlist` | `botlist` | Show all available leveling bots |
| `bot_report` | `bot_report` | Show current bot progress and loot |
| `playercheck` | `playercheck` | Toggle player-detection safety check |
| `autocollect` | `autocollect` | Toggle automatic item collection |
| `.stop` | `.stop` | Stop and kill the current bot |
| `.pause` / `.unpause` | — | Pause/resume the bot |
| `..` | `..` | Nudge the bot to walk if it stalled |
| `bcy` | `bcy` | Show bot area cycler list |
| `bcy+` / `bcy-` | `bcy+ <bot>` | Add/remove bot from cycler |
| `nextarea` | `nextarea` | Start next area in cycler |
| `ba-necro` | `ba-necro` | Preset necro bot area list |
| `scales` / `addscale` | `addscale <color>` | Dragon scale color tracking |

### Trackers & Reports

| Alias | Usage | Description |
|---|---|---|
| `3kReport` | `3kReport` or `3kReport <n/mob>` | Kill report — all kills, filterable |
| `3kReport-clear` | `3kReport-clear` | Clear kill report data |
| `3kReport-config` | `3kReport-config` | Configure kill report options |
| `3kReport+` / `3kReport-` | `3kReport+ <filter>` | Add/remove kill report filter |
| `dstats` | `dstats` | Damage tracking report (requires Numbers perk) |
| `dreset` | `dreset` | Reset damage tracker |
| `summonDmg` | `summonDmg` | Mage summon damage report |
| `summonDmgVaf` | `summonDmgVaf` | Mage summon damage (requires Numbers perk) |
| `defStats` | `defStats` | Defense tracking report |
| `defStats_reset` | `defStats_reset` | Reset defense stats |
| `istats` | `istats` | Item tracker report |
| `istats_reset` | `istats_reset` | Reset item tracker |
| `reset_gxp` | `reset_gxp` | Reset guild XP tracker |

---

## Adding your own entries

To register an alias in the library, call `.add_library` in any loaded script:

```tintin
.add_library {my_alias} {misc} {does something cool} {my_alias <arg>} {modules/mymodule/mything.tin};
```

Arguments in order: **name**, **category**, **description**, **usage**, **location**.

It will then appear in `library3kdb misc` and be queryable via `3kdbinfo my_alias`.
