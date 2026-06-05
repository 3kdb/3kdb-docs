---
id: crafting
title: Crafting Module
sidebar_position: 3
---

# Crafting Module

The crafting module (`modules/crafting/`) automates all profession-related crafting tasks.

> See also: [Crafting reference](../reference/crafting) for all crafting aliases.

## Files

| File | Purpose |
|---|---|
| `index.tin` | Module loader — reads all crafting sub-files |
| `crafting.tin` | Core crafting: jewel-lookup, farmer, fill-moulding |
| `blacksmith.tin` | Blacksmith forge: `forge-on`, `forge-off` |
| `blacksmith_forge.tin` | Forge sequence logic and `killforge` |
| `mining.tin` | Mining framework: `miner-on`, `miner-off`, `deposit-lookup` |
| `miner.tin` | Mine/minefor bot paths |
| `enchanter.tin` | Enchanting: `smelter-on`, gem lookup, `make-gem`, `ln` |
| `smelter.tin` | Smelter automation and presets |
| `assemble.tin` | Assembly helper and `assembler` alias |
| `farmer.tin` | Farming automation |
| `data.tin` | Crafting data tables (recipes, ratios) |

## Quick start: Mining

```tintin
miner-on          // load mining automation
mine-list         // see available deposit names
mine oredeposit   // run the deposit bot path
```

Or for jewel targeting:
```tintin
minefor sapphire  // queue jewel mining runs
```

## Quick start: Blacksmithing

```tintin
forge-on    // activate the forge
// work in-game at the forge...
forge-off   // when done
```

## Quick start: Enchanting / Gems

```tintin
smelter-on            // activate the smelter
gem-lookup help       // see gem recipe info
make-gem help         // see gem maker help
autosmelt <preset>    // run auto-smelt
```

## Quick start: Assembling

```tintin
stashlist assemble    // load assembly module and trigger auto-assemble
// or interactive mode:
assembler
```
