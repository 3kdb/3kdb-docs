---
id: mip
title: MIP Module
sidebar_position: 2
---

# MIP Module

The MIP (Mud Interface Prototype) module is the UI rendering layer. It captures MUD output, parses game state into variables, and renders split-screen panels showing HP bars, room info, chat logs, and more.

> See also: [MIP reference](../reference/mip) for all MIP-related aliases.

## Files

| File | Purpose |
|---|---|
| `modules/mip/mip.tin` | Master loader — enables/disables capture, defines `mipon`/`mipoff` |
| `modules/mip/capture.tin` | Parses raw MUD output into `$mip[]` state variables |
| `modules/mip/room.tin` | Room noun parsing, `sra` alias |
| `modules/mip/chatlog.tin` | Chat channel capture, display, and logging |
| `modules/mip/blacklist.tin` | Chat blacklist management |
| `modules/mip/stats.tin` | Stats panel display |
| `modules/mip/readme.md` | MIP-specific documentation |

## What MIP parses

MIP listens for specific MUD output patterns and writes the parsed values into `$mip[]`:

| Variable | Content |
|---|---|
| `$mip[round]` | Current combat round |
| `$mip[hp]` | Your current HP |
| `$mip[maxhp]` | Your max HP |
| `$mip[sp]` | Current spell/special points |
| `$mip[maxsp]` | Max SP |
| `$mip[xp]` | Current XP |
| `$mip[room]` | Current room name |
| `$mip[exits]` | Available exits |

The round counter (`$mip[round]`) is particularly important — the heartbeat and strategy systems use it to determine if a new combat round has started.

## Chat blacklist

Names in the blacklist are hidden from the MIP chat pane but still appear in the scrollback buffer and Discord logs.

```tintin
blacklist+ spammer    // block a name
blacklist- spammer    // unblock
blacklist             // show current list
blacklist-clear       // clear all
```

## Enabling/disabling

```tintin
mipon     // enable MIP
mipoff    // disable MIP
```

MIP is enabled by default at session start. After `.gswap`, `mipon` is called automatically as part of the reload sequence.

## Per-guild HP bar config

Each guild configures its MIP HP bar in `common/guilds/<guild>/miphp.tin`. The bar is set up by calling `setup_3kdb_hpbar` — see `library3kdb guild` for details.

Characters can further customize their HP bar in `chars/<user>/miphp.tin` (class: `player_miphp`).
