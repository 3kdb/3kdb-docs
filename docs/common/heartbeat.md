---
id: heartbeat
title: Heartbeat System
sidebar_position: 6
---

# Heartbeat System

The heartbeat is a ticker that fires every 4 seconds and drives per-round automation. Understanding it is essential for customizing combat behavior.

## How it works

`common/heartbeat.tin` defines a thin wrapper ticker:

```tintin
#ticker heartbeat { heartbeat_tick } {4};
```

`heartbeat_tick` then calls the chain:

1. `_strategy_heartbeat` — strategy system evaluates active strategies
2. `_strategy_guild_heartbeat` (from guild) — guild-specific per-round logic
3. Character-level heartbeat (`chars/<user>/heartbeat.tin`)

## Round tracking

The MIP module tracks the combat round in `$mip[round]`. The heartbeat compares `$action_round` to `$mip[round]` to know if a new round has started and whether it should fire actions.

```tintin
#if {$action_round < $mip[round]} {
    // new round — run actions
    #var action_round $mip[round];
};
```

## Guild heartbeat pattern

Each guild's `heartbeat.tin` defines `_strategy_guild` and optionally `_strategy_guild_start`:

```tintin
#alias _strategy_guild_start {
    // Called for rounds 1-3 only
    // Good for: buffs, opening abilities
};

#alias _strategy_guild {
    // Called every round
    // Good for: resource management, continuous effects
};
```

## Idle flag

`$idle_flag` is set to 1 when the character should not be performing actions (e.g. AFK, paused bot, waiting for something). Most automation checks `!$idle_flag` before acting:

```tintin
#if {!$idle_flag} {
    // do the thing
};
```

## Character heartbeat customization

`chars/<user>/heartbeat.tin` (class: `player_heartbeat`) lets you add custom per-round logic without touching the guild or common files.

Example — auto-eat a buff item every 10 rounds:

```tintin
#class {player_heartbeat} {kill};
#class {player_heartbeat} {open};

#alias _player_heartbeat {
    #if {!$idle_flag && $mip[round] % 10 == 0} {
        eat pride of the kwik-e mart;
    };
};

#class {player_heartbeat} {close};
```

## Combat vs out-of-combat

The config ticker `check_combat` (in `common/config.tin`) sets `$incombat` by checking whether the round counter has changed:

```tintin
#ticker check_combat {
    #if {$mip[round] == $incombat_last_round || $mip[round] == 0} {
        #var incombat 0;
    } {
        #var incombat 1;
    };
} {4};
```

Many bot and strategy scripts gate their logic on `$incombat`.
