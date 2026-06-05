---
id: juggernaut
title: Juggernaut
sidebar_position: 6
---

# Juggernaut

Juggernauts are a mechanical combat guild with nukes, a support mech, frenzy, airdrops, and stim healing from corpses. The script tracks mount lock rates and GXP per round automatically.

## Key capabilities

| Feature | Description |
|---|---|
| Nuke firing | `ff` fires all nukes at the current enemy in one command |
| Support mech management | Dismiss/resummon, switch between defend and assault modes |
| Auto-mech resummon | Strategy auto-dismisses and resummons support mech when HP drops below 25% |
| Mechwarrior mode | Auto-switches mech to assault fire when entering combat |
| Pre-reset actions | Strategies fire frenzy, nukes, and airdrops/frenzy donations automatically at 95% reset |
| Stim healing | `stimheal1`/`stimheal2` cycle through coffin/freezer/cooler for a corpse to heal stim |
| Smart donations | `donateSupport` reads the juggs2 online list and donates to lowest-stim players |
| GXP tracking | `jugg_report` shows average/best GXP per round and mount lock statistics |

## Support mech aliases

| Alias | Description |
|---|---|
| `su1` | Dismiss current mech, resummon in defend mode |
| `su2` | Switch mech to assault fire, defend self |
| `su3` | Switch mech to assault electric, defend self |
| `summonmech` | Summon new mech in assault fire mode |
| `sd` | Switch mech to defend mode |
| `support_defense` | Preset: armor repair + defend mode |
| `support_offense` | Preset: powerplant + assault fire mode |

## Combat aliases

| Alias | Description |
|---|---|
| `ff` | Fire all nukes (`fire $my[nukes]`) at current enemy |
| `cdef party` | Defend all party members |
| `cdef <player>` | Defend a specific player |
| `cdef show` | Show current cdefend assignments |
| `cdef clear` | Clear all cdefend assignments |
| `tj <category>` | View jugger toplists (age / bdamage / bkill / cage / damage / gxp / jkills / recruits) |

## Stim healing

| Alias | Description |
|---|---|
| `stimheal1` | Check coffin → freezer → cooler for a corpse; unwrap/deslab/uncooler + fdeener |
| `stimheal2` | Same as stimheal1, but also pauses the bot if no corpses are found |

## Donation

```
donateSupport           — donate airdrop to lowest-stim juggernauts online
donateSupport frenzy    — donate frenzy instead
```

Parses the `juggs2` list, reverses it (smallest first), filters players below 115 stim, and donates to up to 4 players with 2-second stagger delays.

## Strategies

| Strategy | Description |
|---|---|
| `frenzy` | Use frenzy at 95%+ reset |
| `nukes` | Fire nukes (`ff`) at 95%+ reset |
| `donateA` | Donate airdrops at 95%+ reset |
| `donateF` | Donate frenzy at 95%+ reset |
| `mech_resummon` | Auto-dismiss and resummon mech when mech HP < 25% |
| `mechwarrior` | Switch mech to assault fire at the start of combat (fires after mech_resummon too) |
| `enhance` | Use enhance when at max SP/stim but below max enhance HP |

## GXP and mount tracking

| Alias | Description |
|---|---|
| `jugg_report` | Print average GXP/round, best round, total GXP, mount hit/lock/crit stats |
| `reset_tracking` | Clear all GXP and mount counters |

Sample report:
```
-------- JUGG REPORT (1432 rounds) --------
--------    Average Gxp/Rnd : 4823    --------
--------       Best Gxp Rnd : 18200   --------
--------       Total Gained : 6901736 --------
--------  MOUNT REPORT  --------
--------     1350 hits (12.5% crits)  --------
--------  82 failures to lock (5.7%)  --------
```
