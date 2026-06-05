---
id: corpse
title: Corpse Management
---

# Corpse Management

Aliases for managing corpses — from guild-specific corpse actions (corpsetrig) to coffin donation and cooler management.

> **In-game:** `library3kdb corpse`

## Corpse Trigger System

The corpse trigger queue (`corpsetrig`) runs a configurable sequence of actions when a corpse is detected. This is how guild-specific corpse handling (absorb, offer, bury, etc.) is automated.

| Alias | Usage | Description | Location |
|---|---|---|---|
| `corpsetrig` | `corpsetrig` | Show or edit the corpse trigger queue | `common/corpsetrig.tin` |
| `corpsetrig-help` | `corpsetrig-help` | Show full corpse trigger help | `common/corpsetrig.tin` |
| `corpse_trig` | `corpse_trig` | Manually fire all queued corpse actions | `common/corpsetrig.tin` |
| `corpsetrig-all` | `corpsetrig-all` | Show active queue and guild-filtered preset list | `common/corpsetrig.tin` |
| `corpsetrig-on` | `corpsetrig-on` | Enable corpse trigger firing | `common/corpsetrig.tin` |
| `corpsetrig-off` | `corpsetrig-off` | Disable corpse trigger firing | `common/corpsetrig.tin` |
| `corpsetrig-clear` | `corpsetrig-clear` | Clear all queued corpse actions | `common/corpsetrig.tin` |
| `corpsetrig+` | `corpsetrig+ <name>` | Add a preset or custom action to the queue | `common/corpsetrig.tin` |
| `corpsetrig-` | `corpsetrig- <name/n>` | Remove an action by name or slot number | `common/corpsetrig.tin` |
| `corpsetrig++` | `corpsetrig++ <name>` | Raise an action's priority in the queue | `common/corpsetrig.tin` |
| `corpsetrig--` | `corpsetrig-- <name>` | Lower an action's priority in the queue | `common/corpsetrig.tin` |
| `corpsetrig-kb` | `corpsetrig-kb` | Toggle killing-blow-only mode (vs all blows) | `common/corpsetrig.tin` |

## Coffin & Storage

| Alias | Usage | Description | Location |
|---|---|---|---|
| `dcoffin` | `dcoffin` | Auto-run to the morgue and donate the coffin | `modules/corpsemanager/corpsemanager.tin` |
| `dcoffin1` | `dcoffin1` | Donate coffin variant 1 | `modules/corpsemanager/corpsemanager.tin` |
| `dcoffin2` | `dcoffin2` | Donate coffin variant 2 | `modules/corpsemanager/corpsemanager.tin` |
| `check_box` | `check_box <key>` | Parse a colossal box into corpse key/count table | `modules/corpsemanager/corpsemanager.tin` |

## Corpse Selection & Handling

| Alias | Usage | Description | Location |
|---|---|---|---|
| `corpse_select` | `corpse_select` | Unwrap, deslab, or uncooler the next corpse by priority | `modules/corpsemanager/corpsemanager.tin` |
| `corpse_select_necro` | `corpse_select_necro` | Necromancer-specific corpse picker | `modules/corpsemanager/corpsemanager.tin` |
| `check_corpses` | `check_corpses` | Refresh the corpse inventory state | `modules/corpsemanager/corpsemanager.tin` |
| `cooler_rotate` | `cooler_rotate <n>` | Move corpses into the cooler (necromancer uses qtrance) | `modules/corpsemanager/corpsemanager.tin` |

## Notes

- **Corpsetrig vs MKA**: `corpsetrig` fires when a corpse is detected in the room, `mka` fires at the moment of the kill. Use `mka` for post-kill commands that don't require seeing the corpse message, and `corpsetrig` for guild-specific corpse handling.
- **Killing-blow-only mode** (`corpsetrig-kb`): When enabled, corpse actions only fire if you delivered the killing blow. Useful when grouping to avoid processing party members' kills.
- The `corpse_select` alias is called automatically when someone does the `Greetings, Comrade!` emote at you (requires `toggles[emote_corpse]`).
