---
id: mage
title: Mage
sidebar_position: 4
---

# Mage

Mages are the most fully automated guild in the repo. The package manages a large defensive spell suite, summon armies, golem tanking, saturation control, mystic immersion, spellbook study, and mental cognition (MC) monitoring — all hands-free.

## Key capabilities

| Feature | Description |
|---|---|
| Defense maintenance | Heartbeat auto-recasts 13+ protective spells whenever they drop |
| Summon management | Config-driven monster summoning (spells 1–14 + golem), summon tanking, cull damaged summons during immersion |
| Contingency setup | One-command aliases for greater and standard contingencies |
| Saturation management | Auto-uses explosive release or corpse blast to drain saturation |
| Mystic immersion | Auto-activates MI at golem reset threshold; manages summon culling during immersion |
| MC/SP bot pausing | Bot pauses automatically when MC < 60% or SP < 25% and resumes when recovered |
| Spellbook study | Auto-studies spellbook whenever out of combat and MC < 99% |
| Summon shoo | Auto-shoos summons if room damage accidentally targets one |

## Defense management

Set flags with `prots_*` aliases. The heartbeat checks each flag and recasts when the effect is down.

| Alias | Effect | Flag |
|---|---|---|
| `prots_mb` | Mind blank | `defs[MB]` |
| `prots_pa` | Prismatic aura | `defs[PA]` |
| `prots_ps` | Prismatic sphere | `defs[PS]` |
| `prots_MG` | Major globe | `defs[MG]` |
| `prots_mg` | Minor globe | `defs[mg]` |
| `prots_ms` | Magnificent shield | `defs[ms]` |
| `prots_pfe` | Protection from evil (depletes good first) | `defs[pe]` |
| `prots_pfg` | Protection from good (depletes evil first) | `defs[pg]` |
| `prots_rs` | Rhino skin | `defs[rs]` |
| `prots_ss` | Stoneskin | `defs[SS]` |
| `prots_shield` | Shield | `defs[shield]` |
| `prots_armor` | Armor | `defs[A]` |
| `prots_blink` | Blink | `defs[blink]` |
| `clear_prots` | Clear all flags | — |
| `clear_def` | Remove all contingencies + clear all flags | — |

All `prots_*` aliases also call `check_extension` first, which casts extension 3 if SP > 500.

## Summon configuration

### Quick presets (`ms`)
```
ms golema     — create golem, assist mode
ms golemd     — create golem, defend mode
ms 1a         — monster summoning 1 (goblin), assault, up to 4
ms 7d         — monster summoning 7 (hulk), defend mode
ms 12a        — monster summoning 12 (flayer), assault
```
Spell levels 1–14 are available, each with `a` (assault) and `d` (defend) variants.

### Advanced config (`msc`)
```
msc <spell> <count> <strategy> <group>
```
Builds a raw `cast summon config` string directly.

### Config management
| Alias | Description |
|---|---|
| `activate_sconfig` | Activate current summon config |
| `clear_sconfig` | Remove all summon configs and deactivate |
| `summon_types` | Print summon roster by slot |
| `summon_select <key>` | Pick summon type from strategy list |
| `summon_str` | Cast giant strength on each summon, self, and golem |

## Contingency setup

### Greater contingencies
| Alias | Triggers at |
|---|---|
| `gc_ss` | Stoneskin drops |
| `gc_mg` | Major globe drops |
| `gc_shield` | Magnificent shield drops |
| `gc_armor` | Armor drops |
| `gc_pfe` | Protection from evil drops |
| `gc_pfg` | Protection from good drops |
| `gc_mantle` | HP drops below `$mage[contingencies][mantle]` (default 200) |
| `gc_ps` | HP drops below `$mage[contingencies][sphere]` (default 799) |

### Standard contingencies
| Alias | Contingency |
|---|---|
| `c_rs` | Rhino skin |
| `c_mg` | Minor globe |
| `c_shield` | Shield |
| `c_mshield` | Magnificent shield |
| `c_armor` | Armor |
| `c_pfe` | Protection from evil |
| `c_pfg` | Protection from good |
| `c_blur` | Blur/blink |
| `c_blink` | Blink |
| `c_invis` | Invisibility |

## Combat performance (castper)

Set a perform spell by damage type in one command:

```
castper blunt       — implosion
castper radiation   — sunspear
castper mind        — mind warp
castper energy      — disintegrate
castper poison      — venomous spray
castper acid        — acid arrow
castper fire        — burning hands
castper ice         — frostbite
castper noeb        — prismatic spray
```

## Party support
```
str_party    — cast giant strength + strength on every party member
```

## Strategies

| Strategy | Description |
|---|---|
| `anchor` | Cast anchor on self at round 1 |
| `slow` | Cast slow on enemy (once) |
| `edrain` | Cast energy drain (once) |
| `atrophy` | Cast mystic atrophy (once) |
| `feeblemind` | Cast feeblemind (once) |
| `phantasmal` | Cast phantasmal killer (once) |
| `phantasmal_mf` | Cast monstrous fortitude on the phantasmal |
| `spelltap` | Toggle spell tap on/off based on SP% (on when SP < 30%, off when SP > 70%) |
| `golem_defend` | Create golem in defend mode when golem slot is available |
| `golem_assist` | Create golem in assist mode when golem slot is available |
| `gstrength` | Cast giant strength on self during mystic immersion |
| `summon_tank` | Rotate summon tank every 20 rounds |
| `summon_haste` | Cast haste on summons |
| `summon_mf` | Cast monstrous fortitude on summons |
| `summon_cull` | Dismiss damaged summons during immersion (at rounds 10, 30, 70) |
| `summon_select` | Auto-summon more when count drops below 4 |
| `super_er` | Use explosive release to reduce saturation |
| `super_sub` | Cast subjugate to reduce concentration cost (when no MI available) |
| `no_ash` | Disable automatic ASH management |
| `shoosummons` | Shoo summons if room damage causes you to accidentally target one |

## Heartbeat behaviour

Each round the heartbeat also:
- Casts haste on self (once per fight)
- Studies spellbook when out of combat and MC < 99
- Auto-pauses bot when MC < 60 (resumes at 90) or SP < 25% (resumes at 90%)
- Manages ASH and saturation via `corpse_select` + `cast spell tap on corpse` + `cast corpse blast`
- Triggers mystic immersion when golem reset > 80% or SP critical
- Fetches gems via `ffetch gem` when stock < 90 and coins > 2100
