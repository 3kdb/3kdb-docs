---
id: deadman
title: Deadman Module
sidebar_position: 6
---

# Deadman Module

The deadman module (`modules/deadman/deadman.tin`) provides idle-detection and safety automation — it executes a preset sequence of actions if you haven't interacted in a set amount of time.

> See also: [Deadman aliases in Misc reference](../reference/misc#deadman)

## Use cases

- Automatically healing when idle
- Running a logout sequence if you fall asleep at the keyboard
- Safe mode during AFK sessions

## Aliases

| Alias | Usage | Description |
|---|---|---|
| `deadman` | `deadman help` | Show help for all deadman commands |
| `deadman-help` | `deadman-help` | Show deadman client help text |
| `deadman-list` | `deadman-list` | List all configured presets |
| `deadman+` | `deadman+ <n>` | Add a named deadman preset |
| `deadman-` | `deadman- <n>` | Remove a preset |
| `deadman-clear` | `deadman-clear` | Clear all presets |

## How it works

1. Configure one or more presets — commands to execute when idle triggers
2. Set the idle timer
3. If you don't interact within the timer window, the preset fires

The module integrates with `$idle_flag` — when the deadman triggers, it sets the idle flag which suppresses most bot and automation actions.

## Initialization

`_init_deadman` is called automatically during `.gswap` and session startup to ensure the deadman is properly armed for the current session.
