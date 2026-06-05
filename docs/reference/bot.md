---
id: bot
title: Bots & Automation
---

# Bots & Automation

Aliases for controlling the leveling bot system, managing area cycles, and collecting items.

> **In-game:** `library3kdb bot`

## Bot Control

| Alias | Usage | Description | Location |
|---|---|---|---|
| `botlist` | `botlist` | Show all available bot scripts you can run | `common/bot/bots.tin` |
| `bot_report` | `bot_report` | Display progress and spoils of the current bot run | `common/bot/generic.tin` |
| `.stop` | `.stop` | Stop the bot and kill all bot classes | `common/bot/generic.tin` |
| `.pause` | `.pause` | Pause the bot at its current position | `common/bot/generic.tin` |
| `.unpause` | `.unpause` | Unpause the bot | `common/bot/generic.tin` |
| `..` | `..` | Nudge the bot to walk if it stalled unexpectedly | `common/bot/generic.tin` |
| `.resume` | `.resume` | Return to the paused room and resume the bot | `common/bot/bots.tin` |
| `3kdb` | `3kdb` | Share current bot status on the party line | `common/party.tin` |
| `playercheck` | `playercheck` | Toggle player-detection safety check (pauses bot when player detected) | `common/bot/generic.tin` |
| `autocollect` | `autocollect` | Toggle automatic item collection during leveling | `common/aliases.tin` |

## Area Cycler

The bot cycler lets you queue multiple bot areas and automatically move to the next when one completes or the mobs are depleted.

| Alias | Usage | Description | Location |
|---|---|---|---|
| `bcy` | `bcy` | Show the current bot area cycler list | `common/bot/bot_cycle.tin` |
| `bcy+` | `bcy+ <botalias>` | Add a bot to the cycler (e.g. `bcy+ smurfs`) | `common/bot/bot_cycle.tin` |
| `bcy-` | `bcy- <botalias>` | Remove a bot from the cycler | `common/bot/bot_cycle.tin` |
| `botclear` | `botclear` | Clear the entire cycler list | `common/bot/bot_cycle.tin` |
| `nextarea` | `nextarea` | Start the next area in the cycler | `common/bot/bot_cycle.tin` |
| `cycle` | `cycle` | Run one cycler step | `common/bot/bot_cycle.tin` |
| `ba-necro` | `ba-necro` | Load the preset necromancer bot area list | `common/bot/bot_cycle.tin` |

## Dragon Scale Tracking

When running the Dragon Realms bot, track which dragon colors you've already collected:

| Alias | Usage | Description | Location |
|---|---|---|---|
| `scales` | `scales` | Print collected dragon scale colors (for ignore list) | `common/bot/bots/dragonbot.tin` |
| `addscale` | `addscale <color>` | Mark a dragon color to skip after smuggling the scale | `common/bot/bots/dragonbot.tin` |

## Available Bots

Run `botlist` in-game to see the full list. There are 151+ area bots. A sample:

| Bot area category | Example scripts |
|---|---|
| Abyss | `abyss.tin` |
| Aegis | `aegis.tin`, `aegis-hard.tin` |
| Banshees | `banshees.tin`, `banshees-easy.tin` |
| Carebears | `carebears.tin`, `carebears-easy.tin` |
| Catacombs | `catacombs-easy.tin` |
| Dragon Realms | `dragonbot.tin` |
| General | `alphabet.tin`, `derthalas.tin` |

Each bot defines its own path loop, mob targets, and any guild-specific actions to run on corpses.

## How bots work

1. Run a bot script: `#read common/bot/bots/<botname>.tin` or use the alias name from `botlist`
2. The bot walks a path loop, attacking mobs it finds
3. After each kill, `corpse_trig` fires the corpse action queue
4. `playercheck` pauses the bot if a player is detected in the room
5. `bot_report` shows accumulated loot and kill counts

When the area is cleared or a stop condition is met, the cycler (if set up) automatically starts the next area.
