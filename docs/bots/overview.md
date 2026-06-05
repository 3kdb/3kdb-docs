---
id: overview
title: Bots & Leveling
sidebar_position: 1
---

# Bots & Leveling

3kdb ships with 151+ area-specific leveling bots. Each bot walks a loop through a specific MUD area, attacks mobs, handles corpses via the corpse trigger system, and collects loot.

> See also: [Bot reference](../reference/bot) for all bot control aliases.

## How to run a bot

1. Navigate to the area (or let the bot navigate for you)
2. Run `botlist` to see available bots
3. Start the bot using its alias name
4. Monitor with `bot_report`
5. Stop with `.stop`

## Workflow example

```tintin
botlist              // see available bots
carebears            // start the carebears bot
playercheck          // ensure player detection is on
autocollect          // toggle loot collection if needed
bot_report           // check progress
.stop                // stop when done
```

## Area cycler

For long AFK sessions, queue multiple areas:

```tintin
bcy+ carebears
bcy+ banshees
bcy+ abyss
bcy          // verify the queue
cycle        // start cycling
```

The cycler automatically moves to the next area when an area is cleared or a stop condition is met.

## Available bots (sample)

| Bot | Area | Notes |
|---|---|---|
| `abyss` | Abyss | — |
| `aegis` | Aegis dungeons | Multiple difficulty variants |
| `alphabet` | Alphabet area | — |
| `banshees` | Banshees | Easy variant available |
| `carebears` | Care Bears | Easy variant available |
| `catacombs-easy` | Catacombs | — |
| `dragonbot` | Dragon Realms | Includes scale color tracking |
| `derthalas` | Derthalas | — |

Run `botlist` in-game for the complete list.

## Bot files

All bot scripts live in `common/bot/bots/`. The generic bot framework is in `common/bot/generic.tin`. The bot loader and cycler are in `common/bot/bots.tin` and `common/bot/bot_cycle.tin`.

## Safety features

- `playercheck` (`toggles[playercheck]`) — pauses the bot when another player enters the room
- `$idle_flag` — when set, suppresses most automation. Deadman module sets this on idle timeout
- The tickler strategy (`strategy tickler`) prevents killing mobs below 4% HP — useful for coffin filling

## Notes on corpse handling

Bots use the corpse trigger system (`corpsetrig`) for all post-kill handling. Before running a bot, configure your corpse queue:

```tintin
corpsetrig-all        // see available presets for your guild
corpsetrig+ absorb    // example: add absorb for necromancer
corpsetrig-on         // enable
```
