---
id: actions
title: Actions (Triggers)
sidebar_position: 2
---

# Actions (Triggers)

Actions in `common/actions.tin` are TinTin++ `#action` triggers — patterns matched against incoming MUD text that execute code automatically. These are global and fire for every character regardless of guild.

## How actions work

```tintin
#action {^pattern text %1} {
    // code to run when this line appears
} {priority};
```

- `^` anchors the match to the start of the line
- `%1`, `%2`, etc. capture wildcard segments
- `%w` matches a single word, `%*` matches anything
- Lower priority numbers fire first when multiple actions match

## Inventory & Weight

| Trigger | Effect |
|---|---|
| `%*: Too heavy.` | Sets `$inventory[encumberance]` to 100 |
| `%*: Ok.` | Clears `$inventory[encumberance]` to 0 |

Used by equipment and item management scripts to know when the character is over weight limit.

## Hockey Corpse (`.hockeyCorpse`)

The `hockey` area has fans that run onto the ice and die, dropping corpses. When this happens, every guild has a specific thing to do with the corpse:

| Guild | Action |
|---|---|
| bard | `perform dirge` (or queues it if mid-song) |
| monk | `study corpse; eat corpse` |
| cyborg | `decompose` |
| fremen | `reclaim` |
| gentech | `recharge; reclaim` |
| knight | `bury corpse` |
| juggernaut | `deener; truck deener; fdeener` |
| mage | `cast corpse blast` |
| necromancer | `preserve remains` then `absorb` (unless spark_corpse is active) |
| priest | `offer corpse` |

Triggers:
- `Out of nowhere a crazed hockey fan leaps towards the Cup.`
- `A hockey fan sprints out and dies.`

## Life/Death Tracking

| Trigger | Effect |
|---|---|
| `A dark chill enters the room...` (Death arriving) | Sets `$my[dead]` to 0 (you're alive) |
| `Demanding an audience with Death...` (being resurrected) | Sets `$my[dead]` to 0 |

## Drunk / Wine Tracking

| Trigger | Effect |
|---|---|
| `You lift the drink to your mouth, but in your stomach` | Sets `$my[drunk]` to 1 |
| `You drink the wine and feel healed.` | Sets `$my[drunk]` to 0 |

## Auto Capsule Re-use

| Trigger | Effect |
|---|---|
| `The effects of the...blue capsule fade away.` | Automatically `swallow blue capsule` (if not idle) |
| `The effects of the...orange capsule fade away.` | Automatically `swallow orange capsule` (if not idle) |

## Social Responses

### Emote: Follow (`toggles[emote_follow]`)

When a player taps you on the shoulder (`%w taps you on the shoulder.`), the script automatically follows them and assists:

```
follow <player>
cassist <player>
```

Requires `toggles[emote_follow]` to be enabled (default: on).

### Emote: Heal (`toggles[emote_heal]`)

When someone does the "Jesus Christ pose" emote at you, the script uses `hmheal` on them. If hmheal is on cooldown, tells them so.

- Near: `%w stares at you in %w Jesus Christ pose.`
- Far: `From afar, %w stares at you in %w Jesus Christ pose.`

Requires `toggles[emote_heal]` (default: on).

### Emote: Eternal Heal (`toggles[emote_eheal]`)

When someone does the "Anti-Christ pose" emote, uses `(heal` (eternal heal). If on cooldown, sends the remaining wait time via tell.

- Near: `%w stares at you in %w best Anti-Christ pose.`
- Far: `From afar, ...`

Requires `toggles[emote_eheal]` (default: on).

### Emote: Corpse Share (`toggles[emote_corpse]`)

When a player says `Greetings, Comrade!` to you, runs `corpse_select` — offers a corpse from your inventory.

Requires `toggles[emote_corpse]` (default: on).

## Skill Training

| Trigger | Effect |
|---|---|
| `To do so, type: tskill <skill>` | Automatically types `tskill <skill>` to train the skill (if not idle) |

## Beloch Life Counter

When Beloch (a boss mob) takes a hit but shakes it off, shows a visible banner:

```
-------------------------------------------------
---------        BELOCH LIFE DOWN         -------
-------------------------------------------------
```

## Auto Rope Teleport (`toggles[teleport]`)

When prompted to pull a rope for teleportation:

| Trigger | Effect |
|---|---|
| `Pull the rope, and you will be teleported to %*.` | Automatically `pull rope` |
| `Pulling the rope, will allow %* passage.` | Automatically `pull rope` |

Requires `toggles[teleport]` (default: on).

## Auto Eat Pride

| Trigger | Effect |
|---|---|
| `The last of the oil leaks from your body.` | Automatically `eat pride` (refreshes Pride of the Kwik-e Mart buff) |

## Cult Auto-Join (`toggles[cult]`)

| Trigger | Effect |
|---|---|
| `Gargoyle <cgame>: The remaining roles were:` | After 6 seconds, `cult join` |
| `Gargoyle <cgame>: The remaining roles: none!` | After 6 seconds, `cult join` |

Requires `toggles[cult]` (default: off).

## Equipment Tracking

### Mortiis Mask

| Trigger | Effect |
|---|---|
| `Head: The mask of Gemino Mortis` | Sets `$equipped[mask]` to 1 |
| `You fit the mask on and your eyes glow dimly green.` | Sets `$equipped[mask]` to 1 |
| `Your eyes darken as you remove the mask.` | Sets `$equipped[mask]` to 0 |
| Eye flash trigger | Sets `$mask[active]` to 1 |

### Room Darkness

| Trigger | Effect |
|---|---|
| `It turns dark.` | Sets `$room_darkness` to 1 |
| `You can see again.` | Sets `$room_darkness` to 0 |

### Knight Shield Recovery

| Trigger | Effect |
|---|---|
| `There is no reason to 'bash' here.` | If not mid-song: remove shield, give/keep/wear the knight shield |

## Following Tracking

| Trigger | Effect |
|---|---|
| `%1 begins to follow %2.` | If following yourself, sets `$following` to `%2` |
| `You stop following %1` | Clears `$following` variable |
| `%1 leaves %2.` | If `%1` matches `$following`, updates the map position via `#map move` |
