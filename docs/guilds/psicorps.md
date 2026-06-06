---
id: psicorps
title: Psicorps
sidebar_position: 8
---

# Psicorps

Psicorps is a psychic combat guild with an implant-driven power system. The heartbeat manages every active power automatically — defence, offence, healing, and stamina — based on a configurable implant loadout. One power is used per heartbeat tick.

## Key capabilities

| Feature | Description |
|---|---|
| Full power automation | Heartbeat tracks all active/inactive powers and recasts/toggles automatically |
| Body adjustment healing | Uses lesser/body/greater body adjustment with chain when HP drops below thresholds |
| Animal affinity management | Auto-swaps AA type based on strategy; warns if multiple AA strategies are active |
| Adapt body | Maintains adapt body to a configured damage type (`$_adapt_body`) |
| Psi/Stam budget tracking | Every tick calculates net psi and stamina burn rate and shows on screen |
| Convert/Body Fuel | Automatically tops up psi via convert (SP → psi) or body fuel (HP → psi) when psi is low |
| Sever the tie | Fires `[sever the tie` automatically when the implant is active and psi > 25% |

## Implant-based configuration

Powers are added/removed by flagging their implant slot:

```
addp <key>            — mark implant slot as active (e.g. addp Vr, addp bo)
remp <key>            — mark implant slot as inactive
remp offense          — clear all offensive implants at once
showp                 — print all active powers grouped by category
usep <power>          — override: use this power immediately on next tick
```

## Power categories (showp output)

**Defense**
`AA` (animal affinity), `ab` (adapt body), `Bf` (biofeedback), `Cp` (combat precognition), `D` (dodge), `Di` (displacement), `Eb` (energy barrier), `Ib` (inertial barrier), `IB` (improved biofeedback), `IV` (improved valor), `Vg` (vigor), `Vr` (valor), `Vv` (verve), `Iv` (improved verve), `BFuel` (body fuel)

**Offense**
`Bo` (bolt), `Tl` (talons), `CP` (combat prescience), `Cg` (conductive grasp), `E` (expertise), `Ij` (iron jaw), `Sj` (steel jaw), `pf` (psychofeedback), `Bl` (blur)

**Targeted**
`Ac2`–`Ac5` (astral construct 2–5), `bc` (biocurrent), `BC` (greater biocurrent), `Cg` (conductive grasp), `rpain` (recall pain), `ragony` (recall agony)

**Group**
`ML` (greater mindlink)

## Heartbeat decision tree

Each tick the heartbeat works through the following sequence — at most one power fires per tick (`hbp` flag):

1. Apply power override (`usep`) if set
2. Chain body adjustment / body adjustment if HP below threshold
3. Check animal affinity and swap if wrong type
4. Check adapt body (swap damage type if `$_adapt_body` changed)
5. Check and maintain all defence powers in priority order
6. Check and maintain all offence powers
7. Check and maintain targeted powers (astral constructs, biocurrent, etc.)
8. If no power was used: convert (SP → psi) if SP is full and psi is missing
9. If no power was used: body fuel (HP → psi) if HP% is safe and psi is missing
10. If no power was used: demoralize, blur, recall pain/agony/torment, burst
11. Calculate and display psi + stam burn rate for the tick

## Body adjustment thresholds

| Variable | Default | Meaning |
|---|---|---|
| `hp_heal_threshold_body_adjustment` | 0.70 | Use body adjustment when HP ≤ 70% |
| `hp_heal_threshold_chain_body_adjustment` | 0.50 | Use chain body adjustment when HP ≤ 50% |
| `hp_heal_threshold_chain_stamina_threshold` | 0.20 | Only chain if stamina ≥ 20% |

## Convert and Body Fuel thresholds

| Variable | Default | Meaning |
|---|---|---|
| `max_hp_to_spend_ratio` | 0.20 | Never spend more than 20% of max HP on body fuel |
| `bfuel_min_psi_missing` | 100 | Only use body fuel if missing ≥ 100 psi |
| `sp_to_psi_ratio` | 0.20 | Convert fires when SP is full and missing ≥ 20% of max SP as psi |
| `hp_to_psi_ratio` | 0.36 | 1 HP → 0.36 psi (used to calculate how much body fuel to use) |

## Strategies

| Strategy | Description |
|---|---|
| `bfuel` | Enable body fuel to top up psi |
| `convert` | Enable SP → psi conversion |
| `body_adj` | Enable body adjustment healing |
| `blur` | Maintain blur |
| `bear` | Animal affinity: bear (+Con) |
| `cat` | Animal affinity: cat (+Dex) |
| `owl` | Animal affinity: owl (+Wis) |
| `fox` | Animal affinity: fox (+Cha) |
| `bull` | Animal affinity: bull (+Str) |
| `eagle` | Animal affinity: eagle (+Int) |
| `rpain` | Recall pain (when GP1 > 50%, round > 3, not yet used on mob) |
| `ragony` | Recall agony (same conditions) |
| `demoralize` | Demoralize in combat |
| `burst` | Burst when GP1 > 1000 and stamina > 10% |
| `sever` | Auto-fire sever the tie when implant active and psi > 25% |

## Utility aliases

| Alias | Description |
|---|---|
| `track_regen` | Install actions to track HP/SP/GP1/GP2 change per round |
| `track_regen_reset` | Clear tracked regen stats |
| `aa_swap <affinity>` | Swap animal affinity to bear/cat/owl/fox/bull/eagle |
| `psi_donate` | Fold reality donate run |
| `refill_apump` | Navigate to astral pump and refill it |
| `start_pw_tracking` | Start power word tracking |
| `stop_pw_tracking` | Stop power word tracking |
| `reset_pw_tracking` | Reset power word tracking counters |
| `gs_powers` | After gs, add tracker entries for existing powers |

## Resource bars

Psicorps uses GP1 (psi points) and GP2 (stamina). The MIP bar shows both alongside HP and SP. `setup_3kdb_hpbar` sends the hpconfig line.
