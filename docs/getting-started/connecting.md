---
id: connecting
title: Connecting & Daily Use
sidebar_position: 3
---

# Connecting & Daily Use

## Launching a session

From the repo root:

```bash
cd ~/mud && tt++
```

Inside TinTin++:

```
#read 3k.tin
```

Press the number key for the character you want. The macro automatically:
1. Reads `chars/<name>/<name>.tin`
2. Sends the character name as the login command
3. Sends `um` to disable the number macro (so typing `1` no longer re-triggers it)

## Multi-character sessions

You can run up to four characters simultaneously from one TinTin++ instance using the four player slots in `3k.tin`. Each character gets its own session. Use TinTin++'s `#session` commands to switch between them.

## Reconnecting after disconnect

When a session drops, the `SESSION DEACTIVATED` event fires and redisplays the character selection menu. Simply press the number key again to reconnect.

## Logging out cleanly

```tintin
ld
```

`ld` is an alias that:
1. Calls `_variable_export` to write all current variable state to `chars/<user>/vars.tin`
2. Waits 1 second, then calls `#end` to close TinTin++

Always use `ld` instead of just closing the terminal — it ensures your leveling progress, toggle states, and item tracking are saved.

## Reloading scripts mid-session

If you've edited a script file and want to reload it without restarting:

```tintin
.reload
```

`.reload` kills all guild and player-specific classes, then re-reads all character files and the current guild's index. Useful during script development.

## Swapping guilds

To switch your character to a different guild mid-session (useful when testing):

```tintin
.gswap mage
```

This kills all current guild classes, sets `$guild` to the new value, reloads `common/index.tin` and the new guild's scripts, then reinitializes the screen and all systems. See [Aliases](../common/aliases#guild-utilities) for details.
