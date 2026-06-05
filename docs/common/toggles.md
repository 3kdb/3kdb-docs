---
id: toggles
title: Toggles
sidebar_position: 4
---

# Toggles

Toggles are boolean flags (`0` = off, `1` = on) stored in the `$toggles[]` array. They let you enable or disable specific automation behaviors without editing scripts.

## Viewing toggle state

```tintin
toggle-list
```

Prints a formatted table of all toggles and their current on/off state. Green = on, red/dim = off.

## Changing a toggle

```tintin
toggle <name>
```

Flips the toggle. If it was on, it turns off (and vice versa). The new state is printed with a colored message.

**Example:**
```
toggle cult
> ----- cult has been turned on -----
```

```
toggle cult
> ----- cult has been turned off -----
```

## Available toggles

| Toggle name | Default | Description |
|---|---|---|
| `mission` | off | Mission/quest automation |
| `3kreport` | **on** | Enables the 3kReport system (kill reporting, loot tracking) |
| `worlddrops` | off | World drop item tracking |
| `chatlog_says` | **on** | Logs room `say` messages to the MIP chat pane |
| `cult` | off | Auto-joins Cult game when it starts. Sends `cult join` 6 seconds after seeing the join message |
| `corpse_echo` | off | Echoes corpse management actions to the screen |
| `emote_follow` | **on** | Auto-follows players who tap you on the shoulder |
| `emote_heal` | **on** | Auto-casts `hmheal` when someone does the Jesus Christ emote at you |
| `emote_eheal` | **on** | Auto-casts `(heal` (eternal heal) when someone does the Anti-Christ emote at you |
| `emote_rally` | **on** | Responds to rally emotes |
| `emote_corpse` | **on** | Runs `corpse_select` when someone says "Greetings, Comrade!" |
| `emote_dungeon_clear` | **on** | Responds to dungeon-clear emotes |
| `teleport` | **on** | Automatically pulls teleport ropes when prompted |
| `emote_aid` | **on** | *(Necromancer only)* Responds to aid request emotes |
| `go_echo` | **on** | Echoes movement direction when navigating |
| `discord_post` | off | Posts game events to Discord via the Python webhook script. Setting this also updates `$discordPost` |

## Persistence

Toggle values are initialized in `common/toggles.tin` with a 6-second delay (so character-specific `vars.tin` has time to load first). The pattern:

```tintin
#if {"${toggles[cult]}" == ""} {#var toggles[cult] 0};
```

This means: if `vars.tin` saved a value for this toggle, keep it. If this is a fresh session with no saved state, use the default.

Toggles are saved when you run `ld` (via `_variable_export`), so your preferences persist across sessions.

## Adding a toggle

To add a new toggle, follow this pattern in `common/toggles.tin`:

```tintin
#if {"${toggles[my_feature]}" == ""} {#var toggles[my_feature] 0};
```

Then reference it in your action or alias:

```tintin
#if {$toggles[my_feature]} {
    // do the thing
};
```
