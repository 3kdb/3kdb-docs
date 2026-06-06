---
id: structure
title: Guild File Structure
sidebar_position: 2
---

# Guild File Structure

Understanding the guild system means understanding two things: the **class system** that makes swapping safe, and the **tick/round loop** that drives all combat automation. Everything else in the file structure follows from those two.

---

## The class system: why every file starts with `kill`

TinTin++ stores aliases, actions, and gags as a flat list. There is no namespacing. If you load a bard alias called `pd` and then load a necromancer alias also called `pd`, you have two aliases named `pd` and neither is reliably which one you want.

The class system solves this by tagging every definition with a named group. Every guild file opens with:

```tintin
#class {guild_aliases} {kill}
#class {guild_aliases} {open}
...definitions...
#class {guild_aliases} {close}
```

- `{kill}` destroys everything currently in the `guild_aliases` class before anything new is loaded. If this is the first load, nothing is killed — but if you loaded bard five minutes ago and are now loading necromancer, all bard aliases are gone before any necromancer alias is registered.
- `{open}` makes the named class the active container — all aliases, actions, and gags defined after this line belong to it.
- `{close}` stops adding to that class.

This is what makes `.gswap` work. The swap command calls `.kill_guild_classes`, which kills every `guild_*` class, then reads the new guild's `index.tin`. All of the old guild's definitions are gone before the new ones load.

**Never skip the `kill` line.** Without it, aliases from previous guilds accumulate. You will have working definitions from three different guilds at once and they will step on each other.

---

## The tick loop: what actually drives combat

The main heartbeat is a 2-second `#ticker` defined in `common/miphp.tin`. Every 2 seconds, unconditionally, it calls:

```
_player_miphp          — update MIP display values
_player_heartbeat      — common per-player logic
_guild_heartbeat       — YOUR guild's heartbeat (every tick)
_common_heartbeat      — shared per-round housekeeping
_update_corpse_string  — recount corpses
_update_fight_status   — update combat display
_strategy_heartbeat    — round-gated strategy dispatch
_update_eternal_status — (if eternal is loaded)
_guild_miphp           — (if guild_miphp == 1)
```

Then immediately after all of those run:

```tintin
#var action_round $mip[round];
```

This line is the key to how "once per round" logic works across the whole system. `$mip[round]` is the current combat round number. `$action_round` is the round number that was current when the last tick ran.

When a new combat round begins, `$mip[round]` increments — but `$action_round` still holds the previous value. Any code that checks `$action_round < $mip[round]` is true for exactly one tick: the first tick after the round advances. After that tick, `action_round` is updated to match `mip[round]`, and the check is false again until the next round.

---

## `_guild_heartbeat` vs `_strategy_guild`: the critical difference

These two hooks look similar but have completely different timing:

| Hook | Called from | When it runs |
|---|---|---|
| `_guild_heartbeat` | The 2-second ticker directly | Every tick, regardless of combat round |
| `_strategy_guild` | `_strategy_heartbeat` | Once per round, only when `action_round < mip[round]` |

**`_guild_heartbeat`** is the right place for things that need to happen continuously — maintaining defences, watching for a proc, managing resources between rounds. It runs whether or not you are in combat, whether or not the round has advanced. The standard guard is:

```tintin
#alias {_guild_heartbeat} {
    #if !$idle_flag {
        // This runs every 2 seconds as long as the bot is active
        #if {$defs[blink] && !$my[prots][blink]} {cast blink};
    };
};
```

**`_strategy_guild`** is the right place for actions that should only happen once per round — offensive abilities, per-round resource usage, queue insertions. The `_strategy_heartbeat` in `common/strategy.tin` already handles the `action_round < mip[round]` gate before it calls your function, so inside `_strategy_guild` you only need to check the game conditions:

```tintin
#alias {_strategy_guild} {
    #if {$enemy[hp] > 0} {
        checkStrategy {fireball} {
            #if {$my[sp][current] > 200} {cast fireball};
        };
    };
};
```

If you put per-round actions in `_guild_heartbeat` without your own round gate, they fire up to 30 times per round. If you put continuous maintenance in `_strategy_guild`, it only fires once per round and will lag by up to 2 seconds.

---

## `_strategy_guild_start`: first-round openers

`_strategy_guild_start` is called by `_strategy_heartbeat` only on rounds 1–3 of a fight. This is where opening moves go — debuffs that should land early, cooldown abilities that fire once per fight, initial setup.

```tintin
#alias {_strategy_guild_start} {
    checkStrategy {slow} {cast slow};
    checkStrategy {debuff} {cast feeblemind};
};
```

Because `_strategy_heartbeat` gates on `action_round < mip[round]`, this function fires at most once per round — meaning it can be called on round 1, round 2, and round 3 if the conditions are met on all three.

---

## `_strategy_heartbeat` and the guild dispatch list

`_strategy_heartbeat` in `common/strategy.tin` does not call `_strategy_guild` dynamically. It has a hardcoded list of guild names:

```tintin
#if {"$guild" == "necromancer"} {_strategy_guild};
#if {"$guild" == "fremen"} {_strategy_guild};
#if {"$guild" == "mage"} {_strategy_guild};
// ... every other guild ...
```

**This means if you create a new guild and do not add it to this list, `_strategy_guild` will never be called.** The heartbeat will still fire, and `_guild_heartbeat` will still work, but your strategy automation will be silently skipped.

When you create a new guild, add two lines to `common/strategy.tin` — one in the `_strategy_guild_start` block and one in the `_strategy_guild` block:

```tintin
#if {"$guild" == "myguild"} {_strategy_guild_start};
...
#if {"$guild" == "myguild"} {_strategy_guild};
```

---

## `checkStrategy`: how the toggle system works

`checkStrategy` is defined in `common/strategy.tin`. Its full signature is:

```tintin
checkStrategy {name} {if-active} {if-inactive}
```

The third argument is optional. When present, it runs if the strategy is *not* active. This is used in places where you want a default behaviour that the strategy overrides:

```tintin
checkStrategy {gemino} {
    preserve gemino remains;
} {
    // If gemino strategy is off, do the standard preserve
    preserve get;
};
```

Strategies are stored in `strategyActive` (a list of currently toggled-on strategies) and `strategyList` (all registered strategies with metadata). A strategy must be registered in `strategyList` before it can be toggled. Registration happens in `strategy.tin`:

```tintin
#list strategyList add {{{guild} {myguild} {name} {fireball} {active} {0} {description} {Cast fireball}}};
#list strategyList indexate name;
```

The player runs `strategy fireball` to toggle it on/off. `strategies` shows active and inactive lists. `strategy-list` shows every registered strategy.

---

## `miphp.tin`: the `guild_miphp` contract

`common/miphp.tin`'s heartbeat ticker only calls `_guild_miphp` if `$guild_miphp == 1`. The template sets this:

```tintin
#var guild_miphp 1;
```

Without that variable set, your HP bar override never runs and the common HP bar is used instead.

`_guild_miphp` populates `$hpbar[prompt]` — the variable the drawing system reads to render the HP bar. It runs every tick so the bar always reflects current values.

The template format shows all four resource bars plus enemy health:

```tintin
#alias {_guild_miphp} {
    #list temp clear;
    #list temp add {HP:$hp/$hp_max SP:$sp/$sp_max GP1:$gp1/$gp1_max GP2:$gp2/$gp2_max E:$ehealth};
    #list temp add {H:$my[hp][graph] S:$my[sp][graph] GP1:$my[gp1][graph] GP2:$my[gp2][graph] E:$enemy[graph]};
    #var hpbar[prompt] $temp;
};
```

Trim this to only the resources your guild actually uses. For guilds with their own hpbar system (gentech uses `genset hpbar`, jedi has `hpbar.tin`), the `setup_3kdb_hpbar` alias sends the configuration command to the MUD rather than populating `hpbar[prompt]` directly.

---

## `actions.tin`: triggers that run all the time

Unlike `heartbeat.tin`, actions defined here are not called — they fire reactively whenever the MUD sends matching output. That distinction matters:

- A `#action` fires as soon as the pattern appears in the MUD stream, regardless of the heartbeat tick cadence
- It fires even when `$idle_flag` is set, because TinTin++ pattern matching doesn't check your variables

If you have an action that should not fire when the bot is paused, add a guard inside the action body:

```tintin
#action {^Your fireball hits %* for %d damage!} {
    #if !$idle_flag {
        #math stats[fireball_total] {$stats[fireball_total] + %2};
    };
};
```

Actions in the `guild_actions` class are killed and reloaded by `.gswap` exactly like aliases. This means you cannot accidentally have bard combat triggers firing while playing necromancer.

---

## `gags.tin`: why specific patterns matter

`#gag` suppresses a line of MUD output completely — it never reaches the screen or any later action. The `guild_gags` class is killed on swap, so guild-specific gags do not bleed.

The risk with gags is being too broad. Every gag pattern is matched against every line of MUD output on every tick. A pattern like:

```tintin
#gag {You cast}
```

will suppress spell announcements for every guild, not just yours, because gags in the common class survive guild swaps and gags in `guild_gags` are only killed on swap. A pattern like:

```tintin
#gag {^You begin casting Rainbow of Death.$}
```

is safe because it only matches one specific string.

Anchoring with `^` (start of line) and `$` (end of line) makes patterns faster and prevents accidental partial matches.

---

## `vars.tin`: data that loads once

`vars.tin` is not in the default `index.tin` template — you have to add it. It belongs between `aliases.tin` and `heartbeat.tin` in the load order since the heartbeat may reference variables set here.

Use `vars.tin` for:
- Threshold constants the heartbeat reads (`$karma_use_corpse_between_songs 650`)
- Cost tables the heartbeat checks (`$protCosts[harmonic regeneration][sp] 268`)
- Song/spell/power lists used by strategy logic
- Anything you might want to tune without editing heartbeat logic

Do not put aliases in `vars.tin`. They will not be in the `guild_aliases` class and will not be killed on `.gswap`.

---

## `tickers.tin`: timers that survive outside combat

`#ticker` definitions run continuously on a fixed interval, independent of the heartbeat system. They are not gated by `$mip[round]` or `$action_round`. They keep running when you are out of combat, when the bot is paused, when you are navigating between areas.

```tintin
#ticker {sp_warn} {
    #if {$my[sp][current] < 100} {
        #echo {<dcc>LOW SP WARNING<088>};
    };
} {5};
```

Because they run unconditionally, tickers should guard on `$idle_flag` and `$incombat` where appropriate. A ticker that tries to cast a spell when you are walking between rooms will spam errors.

The `guild_tickers` class is killed on `.gswap`, so tickers defined here do not survive a guild change.

---

## File load order and dependencies

The template `index.tin` reads files in this order:

```
aliases.tin   ← defines commands
actions.tin   ← defines triggers
gags.tin      ← defines suppression
heartbeat.tin ← may call aliases defined above
miphp.tin     ← reads hp/sp vars, runs every tick
tickers.tin   ← timers
```

`strategy.tin` is not in the default template — add it explicitly. It should load after `aliases.tin` because `_strategy_guild` and `_strategy_guild_start` often call guild aliases.

If you add `vars.tin`, it should load before `heartbeat.tin` and `strategy.tin`:

```tintin
#read common/guilds/$guild/aliases.tin;
#read common/guilds/$guild/vars.tin;      ← add this
#read common/guilds/$guild/actions.tin;
#read common/guilds/$guild/gags.tin;
#read common/guilds/$guild/heartbeat.tin;
#read common/guilds/$guild/strategy.tin;  ← add this
#read common/guilds/$guild/miphp.tin;
#read common/guilds/$guild/tickers.tin;
```

---

## Creating a new guild: what the system requires

Beyond writing the files, there are two things the common system needs before your guild works fully:

1. **Add to the `_strategy_heartbeat` dispatch list in `common/strategy.tin`** — both the `_strategy_guild_start` block and the `_strategy_guild` block need a line for your guild name. Without this, strategy automation is silently disabled.

2. **Set `#var guild_miphp 1` in `miphp.tin`** if you want your HP bar override to run. Without it the common HP bar is used.

Everything else — aliases, actions, gags, heartbeat — activates automatically as long as `index.tin` reads the right files and the classes are structured correctly.
