---
id: mapping
title: Mapping & Navigation
---

# Mapping & Navigation

Aliases for navigating the world, editing maps, finding your position, and speedrunning routes.

> **In-game:** `library3kdb mapping`

## Speedruns & Quick Navigation

| Alias | Usage | Description | Location |
|---|---|---|---|
| `speedruns` | `speedruns` | List all available speedrun destinations | `common/map/speedruns.tin` |
| `go` | `go <destination>` | Navigate to a speedrun destination by name | `modules/map/maphelper.tin` |
| `go_back` | `go_back` | Return to the room you were in before the last `go` | `modules/map/maphelper.tin` |
| `loadmap` | `loadmap` | Load the mapper and maphelper, go to cursor vnum | `modules/map/map.tin` |
| `hidemap` | `hidemap` | Hide the vtmap split pane | `modules/map/map.tin` |
| `mapFull` | `mapFull` | Toggle fullscreen vtmap and area list | `common/draw.tin` |

## Live Mapping

| Alias | Usage | Description | Location |
|---|---|---|---|
| `mapon` | `mapon` | Start live mapping (brief off, static off) | `modules/map/mapper.tin` |
| `mapoff` | `mapoff` | Stop live mapping (brief on, static on) | `modules/map/mapper.tin` |

## Searching & Finding Rooms

| Alias | Usage | Description | Location |
|---|---|---|---|
| `mapsearch` | `mapsearch <text>` | Search map rooms by name and note text | `modules/map/mapper.tin` |
| `mapfind` | `mapfind <pattern>` | List rooms matching a pattern in name/desc/note | `modules/map/maphelper.tin` |
| `mappath` | `mappath <pattern>` | Find path to first matching room then show | `modules/map/maphelper.tin` |
| `findhere` | `findhere` | Determine your current position on the map | `modules/map/mapper.tin` |
| `findhere2` | `findhere2 <dir>` | Narrow `findhere` by walking one exit direction | `modules/map/mapper.tin` |
| `maphelp` | `maphelp` | Print the map helper quick reference | `modules/map/maphelper.tin` |

## Map Editing

| Alias | Usage | Description | Location |
|---|---|---|---|
| `mapUndo` | `mapUndo` | Undo last map edit step | `modules/map/maphelper.tin` |
| `mapbackup` | `mapbackup` | Write a dated backup copy of the map file | `modules/map/maphelper.tin` |
| `mapf` | `mapf <flag> <on/off>` | Set a map flag | `modules/map/maphelper.tin` |
| `mapvnum` | `mapvnum` | Echo current map cursor vnum into `$curvnum` | `modules/map/maphelper.tin` |
| `maplm` | `maplm <label>` | Create a landmark label for the current vnum | `modules/map/maphelper.tin` |
| `mapicons` | `mapicons` | Show unicode icon palette for map symbols | `modules/map/maphelper.tin` |
| `voidlink` | `voidlink <dir> <vnum>` | Link an exit to a vnum with a void room between | `modules/map/mapper.tin` |

## Pathing Aids

| Alias | Usage | Description | Location |
|---|---|---|---|
| `hmavoid` | `hmavoid` | Mark CoT portal exits as avoided for pathing | `modules/map/mapper.tin` |
| `hmfollow` | `hmfollow` | Clear avoid flags on CoT portal exits | `modules/map/mapper.tin` |

## Map click navigation

When mouse support is enabled (`qq`), clicking a room on the MIP map automatically runs `#map run <room-id>` to navigate there.

## Map data files

- `common/map/3k_shared.map` — shared world map used by all characters
- `common/map/speedruns.tin` — speedrun route definitions (loaded from `common/index.tin`)
- `common/data/areas.tin` — area database and reference data
