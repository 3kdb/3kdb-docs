---
id: strategy
title: Strategy System
sidebar_position: 5
---

# Strategy System

The strategy system (`common/strategy.tin`) lets you activate or deactivate named combat behaviors at runtime without editing any scripts. Strategies are evaluated on every combat heartbeat via `_strategy_heartbeat`.

## Listing strategies

```tintin
strategy-list
```

Shows all available strategies with their names and descriptions.

```tintin
strategies
```

Shows which strategies are currently **active** and which are **inactive**.

## Toggling a strategy

```tintin
strategy <name>
```

If the strategy is inactive, activates it. If already active, deactivates it. Prints a colored confirmation.

**Example:**
```
strategy lucanus
> ---- lucanus is now an active strategy ----

strategy lucanus
> ---- lucanus is now an inactive strategy ----
```

## Clearing all strategies

```tintin
strategy-clear
```

Removes all active strategies at once.

## Built-in strategies

| Name | Applies to | Description |
|---|---|---|
| `lucanus` | all guilds | Automatically uses the Lucanus ring (`push diamond`) and amulet (`push symbol`) in combat rounds 3–5 |
| `epowers` | all guilds | Automatically uses eternal powers — Energy Well, Shred, and Fry — in rounds 3–5 of combat |
| `rolm` | all guilds | Automatically touches Owl rune and Raven/Gremlin runes (if charges > 50) in rounds 3–5 |
| `rolm1` | all guilds | Like `rolm` but also temporarily swaps to Rod of Lordly Might for the owl touch, then re-wields offhand after 610 seconds |
| `bplate` | all guilds | Activates the Blood Plate module (`eq_bloodplate`) to automatically feed the armor |
| `tickler` | all guilds (bot) | When a mob's HP drops below 4%, stops attacking to leave it alive. Used with the coffin-filling strategy. Disables for 4 seconds after triggering |
| `coffinRun` | all guilds (bot) | Donates coffin contents when full, after combat ends |

## How strategies work internally

Strategies use the `checkStrategy` alias:

```tintin
checkStrategy {lucanus} {
    #if $lucanus_ring {push diamond};
    #if $lucanus_amulet {push symbol};
};
```

`checkStrategy` takes three arguments:
1. **Strategy name** — must be in `strategyActive`
2. **Action if active** — runs if the strategy is in the active list
3. **Action if inactive** *(optional)* — runs if the strategy is NOT active

The `_strategy_heartbeat` alias is called every round during combat and dispatches to the appropriate guild's `_strategy_guild` and `_strategy_guild_start` functions, which call `checkStrategy` internally.

## Adding a custom strategy

1. Add it to the strategy list in `common/strategy.tin`:

```tintin
#list strategyList add {{{guild} {all} {name} {myfeature} {active} {0} {description} {Does my custom thing}}};
```

2. Call `checkStrategy` wherever you want it evaluated:

```tintin
checkStrategy {myfeature} {
    my_custom_command;
};
```

3. Activate it in-game:

```tintin
strategy myfeature
```
