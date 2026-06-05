---
id: debug
title: Debug
---

# Debug

Aliases for debugging TinTin++ scripts and monitoring errors.

> **In-game:** `library3kdb debug`

## Aliases

| Alias | Usage | Description | Location |
|---|---|---|---|
| `debug` | `debug` | Enable TinTin++ debug all mode and outbound send echo | `common/aliases.tin` |
| `debugoff` | `debugoff` | Turn off debug mode and remove send hook | `common/aliases.tin` |
| `echo_on` | `echo_on` | Echo outbound sends without full debug mode | `common/aliases.tin` |
| `mipdebug` | `mipdebug` | Turn on MIP debug output | `modules/mip/mip.tin` |
| `mipdebugoff` | `mipdebugoff` | Turn off MIP debug output | `modules/mip/mip.tin` |
| `.monitorErrors` | `.monitorErrors` | Toggle live error monitoring (shows call stack on errors) | `common/events.tin` |

## How to debug scripts

**1. Echo what you're sending:**
```tintin
echo_on
// All commands you send now appear highlighted
```

**2. Full debug mode:**
```tintin
debug
// Every trigger, alias, and action prints a trace
debugoff  // turn off when done
```

**3. Monitor errors with context:**
```tintin
.monitorErrors
// When an error fires, prints tokenizer dump + call stack
.monitorErrors  // toggle off
```

**4. MIP-specific debug:**
```tintin
mipdebug
// Shows MIP parsing internals — useful for HP/round capture issues
mipdebugoff
```

## Variable inspection

TinTin++ built-ins for inspecting state:

```tintin
#info variables       // dump all variables
#info aliases         // dump all aliases
#info actions         // dump all actions
#var myvar            // show value of $myvar
```
