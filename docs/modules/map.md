---
id: map
title: Map Module
sidebar_position: 5
---

# Map Module

The map module (`modules/map/`) provides advanced mapping, navigation, and map editing tools on top of TinTin++'s built-in `#map` system.

> See also: [Mapping reference](../reference/mapping) for all mapping aliases.

## Files

| File | Purpose |
|---|---|
| `map.tin` | Main loader — `loadmap`, `hidemap` |
| `mapper.tin` | Live mapper — `mapon`, `mapoff`, `mapsearch`, `findhere` |
| `maphelper.tin` | Map editing tools — `mapfind`, `mapUndo`, `maplm`, `go`, `mapicons` |
| `mapnotes.tin` | Map note management |
| `mapterrain.tin` | Terrain type definitions |

## Map data

The world map is stored in `common/map/3k_shared.map` — shared across all characters. Speedrun routes are defined in `common/map/speedruns.tin`.

## Getting started with mapping

```tintin
loadmap       // load the mapper and navigate to cursor vnum
mapon         // enable live mapping (updates map as you walk)
maphelp       // quick reference for map commands
```

## Finding a room

```tintin
mapsearch dungeon           // search by room name
mapfind graveyard           // full pattern match on name/desc/notes
mappath kobold king         // find path to matching room
```

## Mouse navigation

With mouse enabled (`qq`), clicking any room in the MIP vtmap display automatically runs `#map run <vnum>` to navigate there.

## Speedruns

Speedruns are named paths to commonly visited locations. Define them in `common/map/speedruns.tin`.

```tintin
speedruns       // list all available destinations
go wayhaven     // navigate to wayhaven
go_back         // return to previous location
```
