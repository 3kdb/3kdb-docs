---
id: guild
title: Guild Aliases
---

# Guild Aliases

Guild-specific aliases are loaded dynamically based on `$guild`. Only aliases for your current guild appear in `library3kdb guild`.

> **In-game:** `library3kdb guild`

## Setup

| Alias | Usage | Description | Location |
|---|---|---|---|
| `setup_3kdb_hpbar` | `setup_3kdb_hpbar` | Send hpconfig line for MIP HP bar per guild | `common/guilds/<guild>/hpbar.tin` |

---

## Juggernaut

| Alias | Usage | Description |
|---|---|---|
| `ff` | `ff` | Fire all nukes at current enemy |
| `cdef` | `cdef <party/player/show/clear>` | Defend players from being attacked |
| `tj` | `tj <age/bdamage/bkill/cage/damage/gxp/jkills/recruits>` | View toplists by category |
| `stimheal1` | `stimheal1` | Loop through coffin/freezer/cooler for a corpse to heal stim |
| `stimheal2` | `stimheal2` | Same as stimheal1 but pauses stepper if no corpses found |
| `su1` | `su1` | Dismiss and resummon support mech in defend mode |
| `su2` | `su2` | Switch support mech to assault fire, defend mech |
| `su3` | `su3` | Switch support mech to assault electric, defend mech |
| `summonmech` | `summonmech` | Summon new support mech in assault fire mode |
| `sd` | `sd` | Switch support mech to defend mode |
| `jugg_report` | `jugg_report` | Echo GXP and mount lock summary from tracked rounds |
| `reset_tracking` | `reset_tracking` | Clear GXP vars and mount counters |
| `support_defense` | `support_defense` | Preset: support mech armor repair + defend |
| `support_offense` | `support_offense` | Preset: support mech powerplant + mount assault fire |
| `donateSupport` | `donateSupport <type>` | Parse juggs2 list and donate support to low-stim online juggernauts |

---

## Mage

| Alias | Usage | Description |
|---|---|---|
| `str_party` | `str_party` | Cast giant strength and strength on each party member |
| `prots_mb` | `prots_mb` | Cast mind blank |
| `prots_pa` | `prots_pa` | Cast prismatic aura |
| `prots_ps` | `prots_ps` | Cast prismatic sphere |
| `prots_MG` / `prots_mg` | — | Cast major/minor globe |
| `prots_ms` | `prots_ms` | Cast magnificent shield |
| `prots_pfe` / `prots_pfg` | — | Cast protection from evil/good |
| `prots_rs` | `prots_rs` | Cast rhino skin |
| `prots_ss` | `prots_ss` | Cast stoneskin |
| `prots_shield` | `prots_shield` | Cast shield |
| `prots_armor` | `prots_armor` | Cast armor |
| `prots_blink` | `prots_blink` | Cast blink |
| `clear_def` | `clear_def` | Clear contingencies and turn off defenses |
| `clear_prots` | `clear_prots` | Remove entire defs table |
| `clear_align` | `clear_align` | Clear prot-good/prot-evil flags before recasting |
| `ms` | `ms <config>` | Set up summon configuration |
| `msc` | `msc <digits>` | Quick-set summon config digits and golem lines |
| `castper` | `castper` | Set up perform with a single-target damage spell |
| `activate_sconfig` / `clear_sconfig` | — | Activate/clear summon config |
| `gc_ss`, `gc_mg`, `gc_shield`, etc. | — | Greater contingency spell setups |
| `c_rs`, `c_mg`, `c_shield`, etc. | — | Contingency spell setups |
| `summon_types` | `summon_types` | Print summon roster by slot |
| `summon_select` | `summon_select <key>` | Pick summon from strategy list |
| `summon_str` | `summon_str` | Cast giant strength on each summon, self, and golem |

---

## Necromancer

| Alias | Usage | Description |
|---|---|---|
| `teleport set` | `teleport set` | Set necromancer teleport anchor |
| `teleport` | `teleport` | Teleport to saved anchor |
| `preserve_remains` | `preserve_remains` | Preserve remains workflow |
| `topup` | `topup` | Run to restock reagents/supplies |
| `check_chest` | `check_chest` | Chest check helper |
| `conjureUndead` | `conjureUndead` | Conjure undead |
| `nukeUndeadAbs` | `nukeUndeadAbs` | Conjure nuke absolute |
| `nukeUndead_noUG_Abs` | `nukeUndead_noUG_Abs` | Conjure nuke without unholy grasp |
| `nukeUndeadPres` | `nukeUndeadPres` | Conjure nuke with preserved remains |
| `power` / `powers` | — | Send mud power and parse levels into client tables |
| `dsave_report` | `dsave_report` | Necromancer dsave mob report |
| `comt` | `comt <damage type>` | Switch invoke damage types with comtrance |
| `qtNPc` / `qtNPf` / `qtNPcl` | — | Quick teleport corpse run variants |

---

## Bard

| Alias | Usage | Description |
|---|---|---|
| `fillwater` | `fillwater` | Go to Angel fountain and fill pitcher/glass with water |
| `clear_prots` | `clear_prots` | Turn off all defenses |
| `vamp` | `vamp` | Perform vampire (damage dealt returns as healing) |
| `black` | `black <target>` | Perform black (causes mob to flee) |
| `it` | `it <player>` | Perform invigorating tune |
| `pd` | `pd` | Perform dirge (heal karma with a corpse) |
| `ag` | `ag` | Perform amazing grace (reduce physical harm) |
| `om` | `om` | Perform O Muse (aura of protection) |
| `rd` / `rod` | — | Rainbow of death + focus the rainbow |
| `lotb` | `lotb` | Perform leader of the band |
| `itf` | `itf` | Perform into the fire (room damage) |
| `ham_bot` / `rod_bot` | — | Toggle hammer/rainbow-of-death bot |
| `blades` | `blades` | Perform blades dance |
| `critic` | `critic` | Perform caustic critic |
| `ebolt` | `ebolt` | Perform energy bolt |
| `es` | `es` | Empowered strikes (weapon strikes deal more damage) |
| `buffup` | `buffup <player>` | Perform all song buffs for yourself or another player |
| `prots_spells` | `prots_spells` | Cast all defensive spells |
| `prots_songs` | `prots_songs` | Toggle defensive songs (amazing grace + O Muse) |
| `reflex_critic` | `reflex critic <threshold>` | Reflexively cast caustic critic when SP above threshold |
| `reflex_ow` | `reflex ow <threshold>` | Reflexively perform dirge when karma below threshold |
| `reflex_ma` / `reflex_soothe` | — | Reflex martial assault / soothe triggers |

---

## Priest

| Alias | Usage | Description |
|---|---|---|
| `bless_party` | `bless_party` | Bless the whole party |
| `fftouch` | `fftouch` | Faithful touch routine |
| `gxp_reset` | `gxp_reset` | Reset GXP and round tracking counters |
| `hp_monitor` | `hp_monitor <percent>` | Set party heal threshold as % of max HP |
| `sp_monitor` | `sp_monitor <percent>` | Set party radiance threshold as % of max SP |

---

## Psicorps

| Alias | Usage | Description |
|---|---|---|
| `addp` / `remp` | — | Add/remove power from tracker list |
| `usep` | `usep` | Use selected psicorps power |
| `showp` | `showp` | Show power details |
| `psi_donate` | `psi_donate` | Donate psi resource run |
| `refill_apump` | `refill_apump` | Refill astral pump |
| `track_regen` / `track_regen_reset` | — | Track/reset psi regen stats |
| `start_pw_tracking` / `stop_pw_tracking` | — | Start/stop power word tracking |
| `reset_pw_tracking` | `reset_pw_tracking` | Reset power word tracking |
| `gs_powers` | `gs_powers` | After gs, add tracker entries for existing powers |
| `aa_swap` | `aa_swap <affinity>` | Swap animal affinity implant |

---

## Elemental

| Alias | Usage | Description |
|---|---|---|
| `blast` | `blast <mob>` | Give blast to enemy (unbriefed) |
| `blast2` | `blast2 <mob>` | Give blast to enemy (briefed) |
| `gs` / `gs2` | — | Check escore/escore2 |
| `acid1`, `blunt1`, `edged1`, `electric1`, `fire1`, `ice1`, `mind1`, `poison1`, `rad1`, `energy1` | — | Set resolve and prismatic emission with specific damage type |

---

## Fremen

| Alias | Usage | Description |
|---|---|---|
| `donate_water` | `donate_water` | Fill and donate litterjons at Shimoom |
| `donate_water1` | `donate_water1` | Run to Shimoom and donate water with mask dupe |
| `fskills` | `fskills` | See additional information on Fremen skills |
| `fremCorpse` / `fremCorpse2` | — | Fremen corpse handling presets |
| `fskills-cheap` | `fskills-cheap` | Fremen skills list cheap mode |
| `gxp-stats` | `gxp-stats` | Show GXP tracking stats |
| `fskill-train` | `fskill-train` | List Fremen skills sorted by training cost |

---

## Gentech

| Alias | Usage | Description |
|---|---|---|
| `fill_cpc` | `fill_cpc <item>` | Transfer item to CPC and return |
| `heal_up` | `heal_up` | Run to Gentech infirmary admit flow |
| `shields` | `shields` | Gentech shields routine |
| `gt-repair` | `gt-repair <target>` | Repair twice, stabilize tactical |
| `timescan` | `timescan` | Timescan clear, set, query and estimate time to reset |
| `check_slide` | `check_slide` | Check HP/SP/CPC/PU gates and set timeslide flag |
| `grav_well` | `grav_well` | Smuggle inducer charge grav sequence |

---

## Jedi

| Alias | Usage | Description |
|---|---|---|
| `weaponstats` | `weaponstats` | Show light weapon mastery and guide lines |
| `setweaponmodetime` | `setweaponmodetime` | Set weapon mode timing |

---

## Sii

| Alias | Usage | Description |
|---|---|---|
| `gxp_reset` | `gxp_reset` | Reset Sii GXP tracker |
