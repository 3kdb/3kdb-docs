---
id: crafting
title: Crafting & Professions
---

# Crafting & Professions

Aliases for all crafting systems: blacksmithing, mining, enchanting, farming, assembling, and profession-specific skills.

> **In-game:** `library3kdb crafting` and `library3kdb profession`

## Blacksmithing

| Alias | Usage | Description | Location |
|---|---|---|---|
| `forge-on` | `forge-on` | Activate the blacksmith forge automation | `modules/crafting/blacksmith.tin` |
| `forge-off` | `forge-off` | Deactivate the forge | `modules/crafting/blacksmith.tin` |
| `killforge` | `killforge` | Unload the blacksmith forge class | `modules/crafting/blacksmith_forge.tin` |

## Mining

| Alias | Usage | Description | Location |
|---|---|---|---|
| `miner-on` | `miner-on` then `mine` or `minefor` | Enable mining automation | `modules/crafting/mining.tin` |
| `miner-off` | `miner-off` | Disable mining automation | `modules/crafting/mining.tin` |
| `mine` | `mine <deposit>` | Run ore deposit bot path by name | `modules/crafting/miner.tin` |
| `minefor` | `minefor <jewel>` or `minefor <jewel1,jewel2>` | Run jewel mining queue | `modules/crafting/miner.tin` |
| `mine-list` | `mine-list` | Print available deposit names (after `miner-on`) | `modules/crafting/miner.tin` |
| `minefor-list` | `minefor-list` | Print jewel names by ore tier (after `miner-on`) | `modules/crafting/miner.tin` |
| `deposit-lookup` | `deposit-lookup help` | Information about mining deposits | `modules/crafting/mining.tin` |

## Enchanting & Gems

| Alias | Usage | Description | Location |
|---|---|---|---|
| `smelter-on` | `smelter-on` | Activate the enchanting smelter | `modules/crafting/enchanter.tin` |
| `ln` | `ln` | List non-trivial moulding recipes (those giving CXP) | `modules/crafting/enchanter.tin` |
| `gem-lookup` | `gem-lookup help` | Information about gem recipes | `modules/crafting/enchanter.tin` |
| `make-gem` | `make-gem help` | Badger's gem maker tool | `modules/crafting/enchanter.tin` |
| `autosmelt` | `autosmelt <preset>` | Run auto-smelt preset after `smelter-on` | `modules/crafting/smelter.tin` |
| `jewel-lookup` | `jewel-lookup help` | Information about jewels | `modules/crafting/crafting.tin` |
| `fill-moulding` | `fill-moulding` | Examine moulding and unstash best quality available | `modules/crafting/crafting.tin` |

## Farming

| Alias | Usage | Description | Location |
|---|---|---|---|
| `farmer-on` | `farmer-on` | Start farming automation | `modules/crafting/crafting.tin` |
| `farmer-off` | `farmer-off` | Stop farming automation | `modules/crafting/crafting.tin` |

## Assembling

| Alias | Usage | Description | Location |
|---|---|---|---|
| `assembler` | `assembler` | Interactive assembly helper for crafted items | `modules/crafting/assemble.tin` |
| `stashlist assemble` | `stashlist assemble` | Stashlist with auto-assemble for frags/essence/hearts | `common/aliases.tin` |

## Professions

### Reforger

| Alias | Usage | Description | Location |
|---|---|---|---|
| `ref` | `ref <item> <ACtype>` | Reforge an item to a specific AC defense type | `modules/professions/reforger.tin` |
| `refg` | `refg <item> <ACtype>` | Reforge item on ground | `modules/professions/reforger.tin` |
| `refk` | `refk` | Buy a knife, reforge it, dispose of it | `modules/professions/reforger.tin` |
| `refs` | `refs` | Buy a sword, reforge it, dispose of it | `modules/professions/reforger.tin` |
| `refk1` / `refk2` | — | Reforger knife sequence steps 1 and 2 | `modules/professions/reforger.tin` |

### Transmuter

| Alias | Usage | Description | Location |
|---|---|---|---|
| `transmute_burn` | `transmute_burn` | Transmute crafting mats (run for more help) | `modules/professions/transmuter.tin` |
| `transmute_ug` | `transmute_ug <jewel> <quality>` | Upgrade item to next quality tier | `modules/professions/transmuter.tin` |
| `transmute_ratios` | `transmute_ratios` | Show transmuter ratios for jewels | `modules/professions/transmuter.tin` |

### Golem Master

| Alias | Usage | Description | Location |
|---|---|---|---|
| `build_golem` | `build_golem <corpse>` | Start golem build sequence for a named corpse | `modules/professions/golem_master.tin` |
| `fill_golem` | `fill_golem` | Fill golem parts from held corpses | `modules/professions/golem_master.tin` |

## Module files

| File | Purpose |
|---|---|
| `modules/crafting/index.tin` | Crafting module loader |
| `modules/crafting/crafting.tin` | Core crafting + jewel/farmer aliases |
| `modules/crafting/blacksmith.tin` | Blacksmith forge automation |
| `modules/crafting/blacksmith_forge.tin` | Forge sequence logic |
| `modules/crafting/mining.tin` | Mining automation framework |
| `modules/crafting/miner.tin` | Mine/minefor bot paths |
| `modules/crafting/enchanter.tin` | Enchanting and gem creation |
| `modules/crafting/smelter.tin` | Smelter presets |
| `modules/crafting/assemble.tin` | Item assembly helper |
| `modules/crafting/farmer.tin` | Farming automation |
| `modules/crafting/data.tin` | Crafting data tables |
| `modules/professions/reforger.tin` | Reforger profession |
| `modules/professions/transmuter.tin` | Transmuter profession |
| `modules/professions/golem_master.tin` | Golem master profession |
| `modules/professions/herbologist.tin` | Herbologist profession |
| `modules/professions/marshal.tin` | Marshal profession |
