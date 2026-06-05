---
id: loading-chain
title: Loading Chain
sidebar_position: 2
---

# Loading Chain

Understanding the order files are loaded is important for knowing when variables are available and how overrides work.

## Full sequence

```
tt++ (launch TinTin++)
  └─> #read 3k.tin
      ├─ Sets player1..4 variables
      ├─ Shows character selection menu
      └─ Press key 1–4 →
           #read chars/<yourcharname>/<yourcharname>.tin
           ├─ #var guild <guildname>
           ├─ #var user  <charname>
           ├─ #read chars/<user>/vars.tin        (restore saved state)
           └─ #read common/index.tin
               ├─ common/config.tin              (MUD connection, tickers)
               ├─ common/status.tin              (HP/stat tracking)
               ├─ common/3kdb_library.tin        (utility functions, 62 KB)
               ├─ common/3kReport.tin            (kill/event reporting)
               ├─ common/actions.tin             (global triggers)
               ├─ common/aliases.tin             (global aliases)
               ├─ common/toggles.tin             (feature toggles)
               ├─ common/corpsetrig.tin          (corpse detection)
               ├─ common/defaults.tin            (default variable values)
               ├─ common/events.tin              (mouse/keyboard events)
               ├─ common/gags/gags.tin           (spam filters)
               ├─ common/heartbeat.tin           (per-round hook)
               ├─ common/highmortal.tin          (HM features)
               ├─ common/itemlist.tin            (item database)
               ├─ common/macros.tin              (key bindings)
               ├─ common/miphp.tin               (HP bar default)
               ├─ common/mob_kill_action.tin     (kill triggers)
               ├─ common/party.tin               (group management)
               ├─ common/room.tin                (room parsing)
               ├─ common/strategy.tin            (strategy system)
               ├─ common/subs.tin                (text substitutions)
               ├─ common/themes.tin              (color themes)
               ├─ common/whitelist.tin           (NPC whitelist)
               ├─ common/map/speedruns.tin       (speedrun routes)
               ├─ common/quests/aliases.tin      (quest shortcuts)
               ├─ common/areas/index.tin         (area modules)
               ├─ common/eq/index.tin            (equipment modules)
               ├─ common/bot/bots.tin            (bot loader)
               ├─ modules/deadman/deadman.tin
               ├─ modules/defense_tracker/defense_tracker.tin
               ├─ modules/dmgtracker/mob_dodges.tin
               ├─ modules/map/map.tin
               ├─ modules/mip/mip.tin
               ├─ modules/worlddrops/worlddrops.tin
               ├─ modules/colors/colors.tin
               ├─ modules/crafting/index.tin
               └─ common/private.tin             (local overrides, not committed)

           Then the guild index loads:
           common/guilds/<guild>/index.tin
           ├─ guild/actions.tin
           ├─ guild/aliases.tin
           ├─ guild/gags.tin
           ├─ guild/heartbeat.tin
           ├─ guild/miphp.tin
           ├─ guild/strategy.tin
           └─ guild/tickers.tin

           Then character overlays load:
           chars/<user>/actions.tin
           chars/<user>/aliases.tin
           chars/<user>/config.tin
           chars/<user>/heartbeat.tin
           chars/<user>/miphp.tin
           chars/<user>/tickers.tin
```

## Override priority

Files loaded **later** override earlier ones. The priority order from lowest to highest is:

1. `common/` — baseline for everyone
2. `common/guilds/<guild>/` — guild-specific overrides
3. `chars/<user>/` — character-specific overrides
4. `common/private.tin` — local untracked overrides (highest priority, not in git)

If you want a character to behave differently from the guild default, add the override to `chars/<user>/aliases.tin` or `chars/<user>/actions.tin`.

## The `postload` hook

After screen initialization, `common/config.tin` calls a `postload` alias. This is the place for anything that needs to run once everything else is loaded — e.g. reading inventory, checking buffs, drawing the UI. Characters and guilds can define or extend `postload`.

## Hot-reload workflow

During development, you rarely need to restart TinTin++. Instead:

```tintin
.reload          // Reloads all guild and character files
#read common/index.tin   // Full reload of all common systems
```

For a single file:
```tintin
#read common/strategy.tin
```

Reading a file whose class is already open is safe — the `{kill}` at the top of the file removes the old version first.
