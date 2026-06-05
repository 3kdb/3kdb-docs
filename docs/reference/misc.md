---
id: misc
title: Misc — General Utilities
---

# Misc

General quality-of-life utilities, UI controls, and tools that every character uses. These are the most commonly needed aliases day-to-day.

> **In-game:** `library3kdb misc`

## Session & Connection

| Alias | Usage | Description | Location |
|---|---|---|---|
| `ld` | `ld` | Save all variables then go linkdead | `common/aliases.tin` |
| `setup_3kdb` | `setup_3kdb` | Recommended MUD prefs and first-run client setup | `common/config.tin` |

## Inventory & Items

| Alias | Usage | Description | Location |
|---|---|---|---|
| `i` | `i` | Inventory summary helper | `common/aliases.tin` |
| `exa` | `exa <thing>` | Examine and search a target | `common/aliases.tin` |
| `bagall` | `bagall <n>` | Put all loose items into bags 1 through n | `common/aliases.tin` |
| `unbagall` | `unbagall <n>` | Drop and get-from-bag all items | `common/aliases.tin` |
| `useHeal` | `useHeal` | Use best available healing (hmheal or eternal heal) | `common/aliases.tin` |
| `stashlist` | `stashlist` | View stash. Use `stashlist assemble` for auto-assembly | `common/aliases.tin` |
| `aoeon` / `aoeoff` | — | Armour of Elements on/off | `common/eq/armour_of_elements.tin` |
| `aoeimmolate` | `aoeimmolate` | Send immolate corpse once | `common/eq/armour_of_elements.tin` |
| `quest_newbie` | `quest_newbie` | Newbie quest helper | `common/quests/aliases.tin` |

## Utility Commands

| Alias | Usage | Description | Location |
|---|---|---|---|
| `th` | `th` | Show tell history | `common/aliases.tin` |
| `cwho1` | `cwho1` | List currently online clan members | `common/aliases.tin` |
| `calc` | `calc 100/5*25` | In-client calculator | `common/aliases.tin` |
| `grep` | `grep <pattern>` | Search session scrollback buffer | `common/aliases.tin` |
| `los` | `los` | Send `lineofsight` to MUD | `common/aliases.tin` |
| `gags` | `gags` | Configure spam filters | `common/gags/gags.tin` |
| `gag+` | `gag+ <group>` | Enable one gag group by name | `common/gags/gags.tin` |
| `gag-` | `gag- <group>` | Disable one gag group by name | `common/gags/gags.tin` |
| `gag-all` | `gag-all` | Enable every gag group | `common/gags/gags.tin` |
| `gag-clear` | `gag-clear` | Disable every gag group | `common/gags/gags.tin` |
| `sra` | `sra` | Examine and search room nouns using MIP | `modules/mip/room.tin` |

## UI & Display

| Alias | Usage | Description | Location |
|---|---|---|---|
| `qq` | `qq` | Toggle mouse capture for clickable UI | `common/events.tin` |
| `toggle-list` | `toggle-list` | Show all feature toggles and their state | `common/toggles.tin` |
| `init_screen` | `init_screen` | Full screen redraw and layout | `common/draw.tin` |
| `draw_all` | `draw_all` | Redraw all active display panels | `common/draw.tin` |
| `setsplit` | `setsplit` | Reapply split layout after terminal resize | `common/draw.tin` |
| `caption` | `caption` | Show data caption panel | `common/draw.tin` |
| `caption+` / `caption-` | — | Caption panel next/previous tab | `common/draw.tin` |
| `caption-help` | `caption-help` | Caption panel command help | `common/draw.tin` |
| `inputswitch` | Tab key | Switch between two input buffers | `common/events.tin` |

## Guild & Character Management

| Alias | Usage | Description | Location |
|---|---|---|---|
| `.gswap` | `.gswap <guild>` | Kill current guild and load a new one (requires gswap VAF perk) | `common/aliases.tin` |
| `dwitch` | `dwitch` | Duplicate witch, dove them, attack first witch | `common/aliases.tin` |
| `beepon` / `beepoff` | — | Enable/disable terminal bell | `common/aliases.tin` |
| `beep` | `beep` | Ring bell if beepon flag is set | `common/aliases.tin` |

## Action Queue

| Alias | Usage | Description | Location |
|---|---|---|---|
| `add_action` | `add_action {{name} {n} {action} {cmd}}` | Queue an action by name (deduplicates) | `common/aliases.tin` |
| `remove_action` | `remove_action <name>` | Remove a queued action by name | `common/aliases.tin` |
| `do_action` | `do_action` | Execute all queued actions then clear the stack | `common/aliases.tin` |

## Party

| Alias | Usage | Description | Location |
|---|---|---|---|
| `reset_standings` | `reset_standings` | Reset party standings table | `common/party.tin` |
| `3kdb` | `3kdb` | Share current bot status on party line | `common/party.tin` |

## Area-Specific Helpers

| Alias | Usage | Description | Location |
|---|---|---|---|
| `dsolve` | `dsolve <door#>` | Fallout Shelter door solver | `common/areas/falloutshelter.tin` |
| `stopdsolve` | `stopdsolve` | Stop door solver | `common/areas/falloutshelter.tin` |
| `fdkey` | `fdkey <door#>` | Send saved door combo | `common/areas/falloutshelter.tin` |
| `cove_gems` | `cove_gems` | Cove gems pickup run | `common/areas/misc_common.tin` |
| `prys_exit` | `prys_exit` | Exit Prysmyia room | `common/areas/misc_common.tin` |
| `firebat_west` / `firebat_return` | — | Walk into/out of firebat loop | `common/areas/misc_common.tin` |
| `qt_firebat_west` / `qt_firebat_return` | — | Qtrance into/out of firebat loop | `common/areas/misc_common.tin` |
| `cow_run` | `cow_run` | Gather cow herds from SW corner | `common/areas/misc_common.tin` |
| `run_uk` | `run_uk` | Undead knight book and hunt loop | `common/areas/misc_common.tin` |
| `dcup` | `dcup` | Hockey cup run (attack/dupe/dove/attack) | `common/areas/hockey.tin` |

## Deadman

| Alias | Usage | Description | Location |
|---|---|---|---|
| `deadman` | `deadman help` | Idle deadman arm/disarm and timers | `modules/deadman/deadman.tin` |
| `deadman-help` | `deadman-help` | Show deadman client help | `modules/deadman/deadman.tin` |
| `deadman-list` | `deadman-list` | List deadman presets | `modules/deadman/deadman.tin` |
| `deadman+` | `deadman+ <n>` | Add deadman named preset | `modules/deadman/deadman.tin` |
| `deadman-` | `deadman- <n>` | Remove deadman preset | `modules/deadman/deadman.tin` |
| `deadman-clear` | `deadman-clear` | Clear all deadman presets | `modules/deadman/deadman.tin` |
| `findhere` | `findhere` | Find your current map position | `modules/map/mapper.tin` |
