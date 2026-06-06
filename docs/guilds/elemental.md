---
id: elemental
title: Elemental
sidebar_position: 9
---

# Elemental

Elementals wield evocation magic in one of several elemental forms. The script provides one-command damage type switching, blast creation, soul gem trapping, and automatic SP recovery using the wave ability for your current form.

## Key capabilities

| Feature | Description |
|---|---|
| Damage type switching | Single aliases set both `evoke resolve` and `evoke prismatic emission` simultaneously |
| Blast automation | Create, activate, and hand blasts to the enemy in one command |
| Soul gem trapping | Strategy auto-fires `evoke trap the soul` when enemy HP < 4% |
| Pre-reset blasts | Strategy auto-gives blasts to the current enemy during the first 3 rounds at reset > 50% |
| SP recovery | Heartbeat auto-uses the wave power for your elemental form when SP < 50% |
| escore tracking | `gs` / `gs2` run `escore` / `escore2` |

## Damage type aliases

Each alias sets both resolve and prismatic emission to the same type:

| Alias | Resolve / PE type |
|---|---|
| `acid1` | Acid |
| `blunt1` | Crushing |
| `edged1` | Slashing |
| `electric1` | Shocking |
| `fire1` | Fire |
| `ice1` | Ice |
| `mind1` | Mental |
| `poison1` | Toxic |
| `rad1` | Radiation |
| `energy1` | Mental resolve / magical PE |

## Blast aliases

| Alias | Description |
|---|---|
| `blast <mob>` | `evoke create blast` → `activate blast` → `give blast to <mob>` |
| `blast2 <mob>` | Same as `blast` but with `despam` between create and activate |

## Strategies

| Strategy | Description |
|---|---|
| `soulGems` | Trap the soul when enemy HP < 4% |
| `blasts` | Give blasts to current enemy on rounds 1–3 when reset > 50% (unbriefed) |
| `briefed_blasts` | Same but with `despam` (briefed mode) |
| `soulwave` | Evoke soul wave to recover SP (Spirit / Time forms) |
| `earthtap` | Evoke earth tap to recover SP (Earth form) |
| `thefourwinds` | Evoke the four winds to recover SP (Air form) |
| `tidalwave` | Evoke tidal wave to recover SP (Water form) |
| `heatwave` | Evoke heat wave to recover SP (Fire form) |

Wave strategies fire when `$my[sp][current] < $my[sp][max] / 2` and `$my[waves] > 0`, with a 4-second cooldown after each cast.

## Utility

| Alias | Description |
|---|---|
| `gs` | Run `escore` |
| `gs2` | Run `escore2` |
