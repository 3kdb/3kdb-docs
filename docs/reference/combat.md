---
id: combat
title: Combat
---

# Combat

Aliases for combat strategies, mob kill actions (MKA), and combat automation.

> **In-game:** `library3kdb combat`

## Strategy System

Named combat strategies that toggle behaviors on/off mid-session. Strategies are evaluated every combat round via `_strategy_heartbeat`.

| Alias | Usage | Description | Location |
|---|---|---|---|
| `strategy` | `strategy <name>` | Toggle a named strategy on/off | `common/strategy.tin` |
| `strategies` | `strategies` | List active and inactive strategies | `common/strategy.tin` |
| `strategy-list` | `strategy-list` | Show all available strategies with descriptions | `common/strategy.tin` |
| `strategy-clear` | `strategy-clear` | Deactivate all strategies at once | `common/strategy.tin` |

### Built-in strategies

| Name | Description |
|---|---|
| `lucanus` | Automatically uses Lucanus amulet and ring in combat rounds 3–5 |
| `epowers` | Automatically uses eternal powers (Energy Well, Shred, Fry) in rounds 3–5 |
| `rolm` | Automatically touches Owl, Raven, and Gremlin runes in rounds 3–5 |
| `rolm1` | Like `rolm` but also swaps to Rod of Lordly Might for owl touch |
| `bplate` | Activates Blood Plate auto-feeding module |
| `tickler` | Stops attacking when mob HP < 4% (leaves them alive for coffin strategy) |
| `coffinRun` | Donates coffin when full after combat ends |

---

## Mob Kill Actions (MKA)

The MKA system queues a set of actions to fire immediately after killing a mob. This is separate from the corpse trigger system (see [Corpse](corpse)) — MKA fires at kill time, corpsetrig fires when you examine the corpse.

| Alias | Usage | Description | Location |
|---|---|---|---|
| `mka` | `mka <mob>` | Fire all queued MKA actions then kill the target (or first room mob) | `common/mob_kill_action.tin` |
| `mka-on` | `mka-on` | Enable MKA firing | `common/mob_kill_action.tin` |
| `mka-off` | `mka-off` | Disable MKA firing | `common/mob_kill_action.tin` |
| `mka-all` | `mka-all` | Configure all mob kill actions at once | `common/mob_kill_action.tin` |
| `mka-check` | `mka-check` | List queued MKA entries with priorities | `common/mob_kill_action.tin` |
| `mka-clear` | `mka-clear` | Remove all queued MKA entries | `common/mob_kill_action.tin` |
| `mka+` | `mka+ <action>` | Add a preset or custom action to the MKA queue | `common/mob_kill_action.tin` |
| `mka-` | `mka- <name/index>` | Remove an MKA action by name or list index | `common/mob_kill_action.tin` |
| `mka++` | `mka++ <name>` | Raise the priority of an MKA action one step | `common/mob_kill_action.tin` |
| `mka--` | `mka-- <name>` | Lower the priority of an MKA action one step | `common/mob_kill_action.tin` |
| `mka-help` | `mka-help` | Show MKA help text | `common/mob_kill_action.tin` |

### How MKA differs from corpsetrig

| Feature | MKA | Corpsetrig |
|---|---|---|
| Fires when | Kill lands | Corpse is examined |
| Use case | Loot actions, immediate post-kill actions | Guild-specific corpse handling |
| Priority control | Yes (`mka++` / `mka--`) | Yes (`corpsetrig++` / `corpsetrig--`) |
| Killing-blow only mode | No | Yes (`corpsetrig-kb`) |
