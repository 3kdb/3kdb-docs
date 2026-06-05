---
id: mip
title: MIP — UI Display
---

# MIP (Mud Interface Prototype)

MIP is the terminal UI layer built on top of TinTin++. It renders HP bars, room information, chat logs, and status panels as split-screen panes, all updated in real time from MUD output.

> **In-game:** `library3kdb mip`

## Basic Controls

| Alias | Usage | Description | Location |
|---|---|---|---|
| `mipon` | `mipon` | Enable MIP capture and start parsing MUD output | `modules/mip/mip.tin` |
| `mipoff` | `mipoff` | Disable MIP | `modules/mip/mip.tin` |
| `mipdebug` | `mipdebug` | Turn on MIP debug output | `modules/mip/mip.tin` |
| `mipdebugoff` | `mipdebugoff` | Turn off MIP debug output | `modules/mip/mip.tin` |

## Chat Blacklist

| Alias | Usage | Description | Location |
|---|---|---|---|
| `blacklist` | `blacklist` | Show current chat blacklist | `modules/mip/blacklist.tin` |
| `blacklist+ <name>` | `blacklist+ badguy` | Block a name from appearing in the MIP chat pane | `modules/mip/blacklist.tin` |
| `blacklist- <name>` | `blacklist- badguy` | Remove a name from the blacklist | `modules/mip/blacklist.tin` |
| `blacklist-clear` | `blacklist-clear` | Clear all blacklisted names | `modules/mip/blacklist.tin` |

## Room Interaction

| Alias | Usage | Description | Location |
|---|---|---|---|
| `sra` | `sra` | Examine and search all room nouns using MIP room data | `modules/mip/room.tin` |

## What MIP tracks

The `$mip[]` array holds the live state parsed from MUD output:

| Variable | Content |
|---|---|
| `$mip[round]` | Current combat round number |
| `$mip[hp]` | Your current HP |
| `$mip[maxhp]` | Your max HP |
| `$mip[sp]` | Current spell/special points |
| `$mip[maxsp]` | Max spell points |
| `$mip[xp]` | Current XP |
| `$mip[room]` | Current room name |
| `$mip[exits]` | Available exits |

## MIP Panes

MIP renders several screen regions:

| Pane | What it shows |
|---|---|
| HP bar | HP/SP bars with colored fill |
| Room strip | Current room name and exits |
| Chat log | All communication channels |
| Caption | Configurable status data (strategies, guild stats, etc.) |
| Map | vtmap minimap (click to navigate) |
| Ticker | Repeating timer status |

## Module files

| File | Purpose |
|---|---|
| `modules/mip/mip.tin` | Master MIP loader and core variables |
| `modules/mip/capture.tin` | Parses MUD output into `$mip[]` variables |
| `modules/mip/room.tin` | Room noun parsing and `sra` alias |
| `modules/mip/chatlog.tin` | Chat channel capture and display |
| `modules/mip/blacklist.tin` | Chat blacklist management |
| `modules/mip/stats.tin` | Stats display panel |

## Credits

The MIP foundation was built by **Balthus** with contributions from Inix and Krat.
