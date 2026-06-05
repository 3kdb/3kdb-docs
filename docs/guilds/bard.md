---
id: bard
title: Bard
sidebar_position: 3
---

# Bard

Bards are a hybrid combat/support guild built around **performances** (songs) and **spells**. The bard package is one of the most fully automated guild scripts in the repo — it manages offense, defense, karma recovery, and party buffs.

## Key capabilities

| Feature | Description |
|---|---|
| Defense maintenance | Heartbeat auto-recasts blink, hardened skin, mind blank, protection spells, harmonic regeneration, amazing grace, O Muse, and empowered strikes whenever they drop |
| Combat bots | Toggle-able hammer bot and rainbow of death bot |
| Reflex system | Configurable SP/karma thresholds trigger caustic critic, dirge, martial assault, soothe automatically |
| Song buff suite | `buffup` chains son of man → memory → let it be → naked sunday → hero with proper delays |
| Mob eval system | Intercepts `evaluate` output and reports all 10 damage type resistances in a compact table |
| Water utility | `fillwater` runs to the Angel fountain and fills containers |

## Defense management

The heartbeat checks these flags each round and recasts if the effect has dropped:

| Flag | Effect |
|---|---|
| `defs[blink]` | Blink |
| `defs[hs]` | Hardened skin |
| `defs[mb]` | Mind blank |
| `defs[pe]` | Protection from evil |
| `defs[pg]` | Protection from good |
| `defs[pn]` | Protection from neutral |
| `defs[pf]` | Protection from frost |
| `defs[ph]` | Protection from heat |
| `defs[ag]` | Amazing grace (song) |
| `defs[om]` | O Muse (song) |
| `defs[hr]` | Harmonic regeneration (cast when SP available) |
| `defs[es]` | Empowered strikes (when karma > 400) |

Set a flag with its `prots_*` alias; clear all with `clear_prots`.

## Combat bots

```
ham_bot    — toggle hammer bot (strategy: hammer)
rod_bot    — toggle rainbow of death bot (strategy: rainbow)
```

When `rod_bot` is active, the heartbeat fires `perform rainbow of death` + `cast focus the rainbow` every round when SP is available.

## Reflex system

| Alias | What it does |
|---|---|
| `reflex_critic <sp>` | When SP > threshold, cast caustic critic |
| `reflex_ow <karma>` | When karma < threshold, perform dirge (uses a corpse) |
| `reflex_ma <karma>` | When karma > threshold, martial assault |
| `reflex_soothe <sp>` | When SP < threshold, perform soothe |
| `reflex_clear` | Clear all reflex actions |

## Aliases

### Offense
| Alias | Description |
|---|---|
| `rd` / `rod` | Perform rainbow of death + cast focus the rainbow |
| `vamp` | Perform vampire (lifesteal) |
| `black <target>` | Perform black (causes mob to flee) |
| `itf` | Perform into the fire (room damage), auto-ceases after 3s |
| `blades` | Set reflex to cast blade dance above `$dmg_spell_sp` |
| `fires` | Set reflex to cast fire storm above `$dmg_spell_sp` |
| `critic` | Set reflex to cast caustic critic above `$dmg_spell_sp` |
| `ebolt` | Set reflex to cast energy bolt above `$dmg_spell_sp` |
| `es` | Enable empowered strikes (flag `defs[es]`) |

### Defense
| Alias | Description |
|---|---|
| `prots_spells` | Cast all defensive spells at once |
| `prots_songs` | Toggle amazing grace + O Muse on/off |
| `prots_blink` | Cast blink, set flag |
| `prots_hs` | Cast hardened skin, set flag |
| `prots_mb` | Cast mind blank, set flag |
| `prots_pfe` | Cast protection from evil, set flag |
| `prots_pfg` | Cast protection from good, set flag |
| `prots_pfn` | Cast protection from neutral, set flag |
| `prots_pfc` | Cast protection from frost, set flag |
| `prots_pfh` | Cast protection from heat, set flag |
| `prots_hr` | Set harmonic regeneration flag |
| `prots_grace` | Perform amazing grace, set flag |
| `prots_muse` | Perform O Muse, set flag |
| `clear_prots` | Clear all defense flags |

### Support
| Alias | Description |
|---|---|
| `buffup <player>` | Chain all buff songs: son of man → memory → let it be → naked sunday → hero |
| `it <player>` | Perform invigorating tune for player |
| `pd` | Perform dirge (karma recovery from corpse) |
| `ag` | Perform amazing grace |
| `om` | Perform O Muse |
| `lotb` | Perform leader of the band |
| `fillwater` | Run to Angel fountain and fill all pitchers/glasses |

## Song data

All bard songs are tracked in `bardSongs` with voice cost, karma cost, and duration. Example entries:

| Song | Voice | Karma | Duration (rounds) |
|---|---|---|---|
| Vampire | 0.546 | 135 | 62 |
| Rainbow of Death | 0.000 | 50 | 8 |
| Hammer Smashed Face | 0.238 | 100 | 49 |
| Amazing Grace | 0.214 | 10 | 19 |
| O Muse | 0.119 | 5 | 11 |
| Invigorating Tune | 0.000 | 30 | 3 |

The full list (55+ songs) is in `common/guilds/bard/vars.tin`.

## Mob evaluation

`evaluate <mob>` triggers a formatted resistance table broadcast to party:

```
---------- dragon Evaluation ----------
Edged      3 / 10 |  Blunt    8 / 10
Fire       9 / 10 |  Ice      2 / 10
...
AC out of 10 -- E(3) B(8) F(9) I(2) A(5) Elec(4) M(6) Nrg(7) P(1) R(5)
```

## MIP bar

The heartbeat tracks karma as GP1. `setup_3kdb_hpbar` configures the MIP display. Harmonic regeneration is cast when `$my[sp][current] > $protCosts[harmonic regeneration][sp]` (268 SP).
