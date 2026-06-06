---
id: necromancer
title: Necromancer
sidebar_position: 5
---

# Necromancer

Necromancers have three sub-forms (Vampire, Werewolf, Reaper/Pure/Lich) each with their own combat powers, plus a shared core of undead conjuring, corpse management, and reagent automation.

## Key capabilities

| Feature | Description |
|---|---|
| Sub-form strategies | Separate strategy toggles for Vamp, Were, Reaper, Lich, and Pure abilities |
| Undead nuking | Conjure-and-nuke sequences with automatic absorb/preserve after kill |
| Corpse runs | `qtNP` auto-selects coffin/freezer/cooler and chains unwrap + preserve/absorb |
| Mask doubling | Mask of Gemino Mortis doubles absorb counts automatically |
| Reagent restock | `topup` navigates to the reagent shop and buys up to 999 of each component |
| Power tracking | `power`/`powers` parses your power levels into the `my[necromancer][power]` table |
| Auto-study | `.study` fills missing powers to your configured default levels |
| Auto-protection | Heartbeat casts `protection` on rounds 3–5 when it is off |
| Teleport anchors | Up to multiple numbered teleport anchors with map sync on land |

## Heartbeat

The heartbeat fires `protection` automatically on combat rounds 3–5 whenever `my[necromancer][protection]` is `OFF`.

## Combat strategies

### Opening round abilities
The following fire on the first rounds of combat if their strategy is enabled:

| Strategy | Power |
|---|---|
| `snare` | Snare (Vamp/Were) |
| `call` | Call familiar |
| `maim` | Were: maim (auto-alters hybrid form if needed) |
| `rabies` | Were: rabies |
| `corrode` | Pure: corrode |
| `scythe` | Reaper: scythe |
| `shackle` | Pure: shackle |
| `psibleed` | Pure: psibleed |
| `convokeR` | Convoke ravens |
| `fury_prime` / `fury` | Were: fury prime / fury (requires glamors) |
| `rage_prime` / `rage` | Vamp: rage prime / rage (requires glamors) |
| `bloodlet` | Vamp: bloodlet (requires empty decanters) |
| `spark_prime` / `spark` | Lich: spark prime / spark (requires glamors) |
| `blaze_prime` / `blaze` | Reaper: blaze prime / blaze (requires glamors) |

### Mid-fight abilities (rounds 8–15 on fast kills)
These fire when `kill_rate_avg >= 30` and round is between 8 and 15:

| Strategy | Power | Condition |
|---|---|---|
| `iprime` | Invoke prime | Has invoke-prime charges |
| `diurnum` / `nocturnum` | Diurnum/Nocturnum prime | Has charges |
| `bloodfuse` | Vamp: bloodfuse | Has powered decanters |
| `ug` | Unholy ground | Flag set |
| `soulbind` | Reaper: soulbind | ≥7 souls, ≥1 glamor |
| `bloodarc` | Lich: bloodarc | Has charges, not yet cast |
| `harvest` | Reaper: grim harvest | Has charges |
| `skullfire` | Pure: skullfire | ≥7 souls, ≥1 glamor |
| `conjure` | Undead nuke (with unholy ground + absorb) | GP1 < 50k or > 150k |
| `conjure1` | Undead nuke (no unholy ground + absorb) | Same conditions |
| `conjure2` | Undead nuke + rapture + unholy armour | Same conditions |

### Persistent abilities
| Strategy | Power | Condition |
|---|---|---|
| `spirithowl` | Were: spirithowl | Has charges |
| `illume` | Pure: illume | Has glamors, GP1 < 200k |
| `blaze` | Reaper: blaze | Has glamors, GP1 < 50k |
| `convokeR` | Convoke ravens | Ravens not yet active |
| `gemino` | Use gemino preserve on corpses | — |

## Undead nuke aliases

| Alias | Behaviour |
|---|---|
| `conjureUndead` | Conjure + kill + rabies + corrode (standard) |
| `nukeUndeadAbs` | Conjure nuke with unholy ground + auto-absorb after |
| `nukeUndead_noUG_Abs` | Conjure nuke without unholy ground + auto-absorb |
| `nukeUndeadPres` | Conjure nuke with unholy ground + preserve (no gemino) |
| `nukeUndead_noUG_Pres` | Conjure nuke without unholy ground + preserve |

Mask of Gemino Mortis doubles the absorb/preserve count automatically when active.

## Corpse run aliases

| Alias | Description |
|---|---|
| `qtNP` | Inspect inventory, then auto-select container type and run the best qtNP variant |
| `qtNPc <n>` | Coffin run: unwrap n, absorb 2n (double if masked) |
| `qtNPf <n>` | Freezer run: deslab n, absorb 2n |
| `qtNPcl <n>` | Cooler run: uncooler n, absorb 2n |
| `maskNPc <n>` / `maskNPf <n>` / `maskNPcl <n>` | Swap to mask of gemino, run qtNP variant, swap back |

## Utility aliases

| Alias | Description |
|---|---|
| `comt <type>` | Switch invoke damage type (edged/blunt/fire/ice/acid/electric/mind/energy/poison/radiation) |
| `teleport set <n> <note>` | Save current room vnum as teleport anchor n |
| `teleport <n>` | Teleport to anchor n and sync map |
| `check_chest` | Retrieve/examine chest via qtrance, count full decanters |
| `preserve_remains` | Preserve get (or gemino if strategy active) + keep all preservation |
| `topup` | Navigate to reagent shop and buy up to 999 each of: ginseng, black pearls, spider web, goldenrod, mandrake, pine needles, nightshade |
| `power` / `powers` | Parse power levels into `my[necromancer][power]` table |
| `.study` | Study missing powers to their default levels |
| `.studyPower <name> <n>` | Study a specific power n times (handles > 100 in loops) |
| `.study default` | Save current power levels as defaults |
| `dsave_report` | Report unholy ground hit tracking stats |
