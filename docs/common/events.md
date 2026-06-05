---
id: events
title: Events
sidebar_position: 3
---

# Events

Events in `common/events.tin` are TinTin++ `#event` handlers that respond to client-level signals — mouse input, keyboard presses, session changes, and internal state updates. They're loaded in the `common_events` class.

## Mouse Support

### Enabling the mouse

```tintin
qq
```

The `qq` alias is a toggle. Running it once enables mouse support and prints a green confirmation message. Running it again disables it and prints a red message. The state is tracked in `$mouseActive`.

### Scroll wheel behavior

| Event | Condition | Action |
|---|---|---|
| `SCROLLED MOUSE WHEEL UP` | In history mode (`%2 == -1`) | `#cursor HISTORY PREV` — scrolls history back |
| `SCROLLED MOUSE WHEEL UP` | In main buffer, above HP bar | `#buffer up 1` — scrolls the display up |
| `SCROLLED MOUSE WHEEL DOWN` | In history mode | `#cursor HISTORY NEXT` |
| `SCROLLED MOUSE WHEEL DOWN` | In main buffer | `#buffer down 1` |

The scroll area is bounded: scroll only works between `$ticker[bottom]` and `$hpbar[top]` — i.e. within the scrollable text region of the split screen.

### Map click

```
MAP SHORT-CLICKED MOUSE BUTTON ONE
```

Clicking a room on the MIP map runs `#map run <room-id>` — navigates the character to the clicked room automatically.

## Keyboard Events

### Dual input buffer (Tab key)

Pressing **Tab** calls `inputswitch`, which swaps the current input line with a hidden second buffer (`$input[buffer2]`). This gives you two independent command lines you can switch between — useful for keeping a common command ready while typing something else.

```tintin
#macro {\t} {inputswitch};
```

### Last input highlight

After you press Enter, your previous command is highlighted in the buffer so you can see what you just sent. Any keypress other than Enter clears the highlight and moves the cursor to the end.

| Event | Behavior |
|---|---|
| `HISTORY UPDATE` | Stores `%0` in `$last_input`, highlights it in the buffer |
| `PROCESSED KEYPRESS` | If a non-Enter key is pressed and `$last_input` is set, clears the highlight and resets `$last_input` |

## Error Monitoring (`.monitorErrors`)

```tintin
.monitorErrors
```

Toggles listening on the `RECEIVED ERROR` event. When active, every TinTin++ error prints:
- The tokenizer dump (raw script state)
- The call stack (`#info stack`)
- Two levels of tokenizer detail

Run this when debugging a script that's producing mysterious errors without useful output.

## Bot Debug Events (toren-specific)

When `$user == "toren"` and `$botbug` is set, two extra events fire:

- `CLASS DESTROYED bot` — logs a tokenizer dump whenever the bot class is killed
- `VARIABLE UPDATED bot` — logs every update to variables in the bot class

These are development aids for debugging the bot system and are intentionally character-gated so they don't affect other users.

## Event reference

TinTin++ events used in this file:

| Event name | When it fires |
|---|---|
| `HISTORY UPDATE` | After any command is submitted |
| `PROCESSED KEYPRESS` | After any key is pressed |
| `SCROLLED MOUSE WHEEL UP` | Mouse wheel scrolled up |
| `SCROLLED MOUSE WHEEL DOWN` | Mouse wheel scrolled down |
| `SHORT-CLICKED MOUSE BUTTON ONE` | Left mouse click (no-op here, handled at map level) |
| `MAP SHORT-CLICKED MOUSE BUTTON ONE` | Left click on the MIP map |
| `RECEIVED ERROR` | TinTin++ encounters a script error |
| `CLASS DESTROYED <name>` | A named class is killed |
| `VARIABLE UPDATED <name>` | A variable in the named class changes |
| `SESSION DEACTIVATED` | MUD connection dropped (in `3k.tin`) |
