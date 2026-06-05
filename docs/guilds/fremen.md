---
id: fremen
title: Fremen
sidebar_position: 10
---

# Fremen

Fremen are a desert warrior guild with water-based corpse management, voice abilities, and a deep skill training system. The script automates corpse donation/reclaiming, water donation runs, and skill cost analysis.

## Key capabilities

| Feature | Description |
|---|---|
| Corpse management | `fremCorpse` / `fremCorpse2` decide donate vs. reclaim based on GP1 level |
| Water donation | `donate_water1` runs to Shimoom, donates all corpses, fills/donates literjons, then returns |
| Skill analysis | `fskills` parses the in-game skill list into a formatted table with trainer names and costs |
| Skill sorting | `fskill-train` sorts all tracked skills by training cost (cheapest first) |
| GLVL tracking | `fskills` calculates total skill points, current GLVL, and points needed to next GLVL |
| Combat abilities | Strategy-driven agony, stun, voice hold, voice enfeeblement, spice beer, focus, suspend |

## Corpse aliases

| Alias | Description |
|---|---|
| `fremCorpse` | If GP1 > 50% max: donate with `fai`; else reclaim |
| `fremCorpse2` | If GP1 > 50%: fill coffin first, then `fai` when full; else reclaim |

## Water donation

```
donate_water          — acquire all + fill all + donate all (simple in-room version)
donate_water1         — full run to Shimoom: unwrap/deslab/uncooler all corpses,
                        fill literjons from corpse water value, donate, return
```

`donate_water1` calculates how many literjon fill cycles each corpse is worth (`corpse water worth = 200`) and loops automatically. Handles Chaotic Sewers entry/exit via winch rune.

## Skill tracking (`fskills`)

`fskills` loads the fremen skills parser, runs `skills -nograph`, and formats output:

```
Skill                Rank       Cost       Difficulty   Trainer
Ambush               45         1,200      Normal       Otheym
Assault              32         800        Easy         Otheym
...
Total Skill Points: 847 | Current GLVL: 141 | Next GLVL in 1 skill points
Cheapest to train: Ambush
```

All 20+ skills are tracked (Ambush, Assault, Bindu, and others), each with rank, cost, difficulty, and trainer name.

## Strategies

| Strategy | Description |
|---|---|
| `agony` | Inflict pain (mind damage) — fires when GP1 > 100 and SP > 100 |
| `stun` | Stun with poison pellet — fires when GP1 > 110 |
| `voicehold` | Voice hold — fires when GP1 > 100 |
| `voicefeeble` | Voice enfeeblement (AC shred) — fires when GP1 > 100 |
| `spicebeer` | Smuggle and drink spice beer if available |
| `focus` | Focus on start of combat when GP1 > 100 |
| `suspend` | Refocus after every fight |
| `donate_water` | Run water donation when corpse count reaches threshold |

## Utility

| Alias | Description |
|---|---|
| `fskills` | Parse skills list, show formatted table + GLVL info |
| `fskills-cheap` | Print all tracked skill keys (quick listing) |
| `fskill-train` | Sort all tracked skills by training cost, cheapest first |
| `gxp-stats` | Show GXP tracking statistics |
| `fskills-cheap` | Compact skill list (names only) |
