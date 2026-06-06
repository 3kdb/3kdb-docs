---
id: priest
title: Priest
sidebar_position: 7
---

# Priest

Priests are a divine support/combat guild. The script automates buff maintenance, party healing, and faithful touch chaining.

## Key capabilities

| Feature | Description |
|---|---|
| Defense maintenance | Heartbeat auto-recasts barkskin, haste, protection, vestment, beneficence, blade barrier, bless, protection of elements, and protection of power whenever they drop |
| Party blessing | `bless_party` blesses every online party member in one command |
| Faithful touch chaining | `fftouch` chains feather touch across a list of targets automatically |
| GXP tracking | `gxp_reset` clears all round/GXP counters |

## Defense management

Each strategy toggles a buff. When the strategy is active, the heartbeat watches for the effect to drop and recasts it automatically:

| Strategy | Effect |
|---|---|
| `bark` | Barkskin |
| `haste` | Haste |
| `pro` | Protection |
| `vest` | Vestment |
| `bene` | Beneficence |
| `blade` | Blade barrier |
| `blessing` | Bless |
| `poe` | Protection of elements |
| `power` | Protection of power |
| `invin` | Invincible (tracked, not yet implemented) |

## Aliases

| Alias | Usage | Description |
|---|---|---|
| `bless_party` | `bless_party` | Run `members`, then bless every party member after a 2s delay |
| `fftouch` | `fftouch <name1> <name2> ...` | Chain faithful touch across all listed targets; automatically advances on each success or failure |
| `gxp_reset` | `gxp_reset` | Reset round GXP, total GXP, average GXP, and round counters |

## Faithful touch detail

`fftouch target1 target2 target3` sends `ftouch target1`, then waits for the MUD confirmation trigger (`You make * light as a feather!` or `* cannot be lightened any more`) before automatically sending `ftouch target2`, and so on down the list. This avoids the normal single-target limitation by chaining touches sequentially.
