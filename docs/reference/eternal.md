---
id: eternal
title: Eternal
---

# Eternal

Aliases for Eternal class powers — the cross-guild power set that high-level characters can acquire. These are available when `$eternal` is set.

> **In-game:** `library3kdb eternal`

## Duplication & Item Management

| Alias | Usage | Description | Location |
|---|---|---|---|
| `dupe` | `dupe <item>` | Duplicate an item | `common/guilds/eternal/eternal.tin` |
| `dc` | `dc <mob>` or `dc` | Duplicate a mob | `common/guilds/eternal/eternal.tin` |
| `rload` | `rload <item>` | Reload unique items (cup, cooler, freezer, glimmering, feather, etc.) | `common/guilds/eternal/eternal.tin` |

## Dungeon Management

| Alias | Usage | Description | Location |
|---|---|---|---|
| `rd3` | `rd3 <dungeon>` | Reset dungeons for yourself or other players (mj/sz/aegis/name) | `common/guilds/eternal/eternal.tin` |
| `dung_reset` | `dung_reset <dungeon>` | Announce dungeon resets to the party/clan | `common/guilds/eternal/eternal.tin` |
| `unload` | `unload` | Completely unload a room | `common/guilds/eternal/eternal.tin` |
| `refresh` | `refresh` | Refresh a previously defiled room | `common/guilds/eternal/eternal.tin` |

## Combat Powers

| Alias | Usage | Description | Location |
|---|---|---|---|
| `ewell` | `ewell <mob>` or `ewell` | Redirect all incoming damage to a mob until it explodes | `common/guilds/eternal/eternal.tin` |
| `fry` | `fry <mob>` or `fry` | Room or single-target damage with the mob's weakest AC damage type | `common/guilds/eternal/eternal.tin` |
| `imm` | `imm` | Immunity to all damaging attacks for up to 90 rounds | `common/guilds/eternal/eternal.tin` |
| `prot` | `prot on` / `prot off` | Shrinks oversized hits compared to your max HP (stacks up to 120 rounds) | `common/guilds/eternal/eternal.tin` |

## Teleportation

| Alias | Usage | Description | Location |
|---|---|---|---|
| `tp1` | `tp1 <myself/party/player>` | Teleport yourself or your party to CoT, or teleport to another player's party | `common/guilds/eternal/eternal.tin` |
| `tp2` | `tp2 <player>` | Teleport your present party to a party member | `common/guilds/eternal/eternal.tin` |
| `summ1` | `summ1 <party/player>` | Summon your party to you, or summon a player to CoT | `common/guilds/eternal/eternal.tin` |
| `summ2` | `summ2 <player>` | Summon another player's party to CoT | `common/guilds/eternal/eternal.tin` |
| `et-res` | `et-res <player/myself>` | Resurrect another player or yourself | `common/guilds/eternal/eternal.tin` |

## Buffs

| Alias | Usage | Description | Location |
|---|---|---|---|
| `em` | `em` | Increase your stats up to 50% for 1 hour | `common/guilds/eternal/eternal.tin` |
| `hw` | `hw` | XP bonus up to 32% for 1 hour | `common/guilds/eternal/eternal.tin` |

## Notes

- Eternal powers are a separate power set from guild abilities. A character can be any guild and still have eternal powers if they've acquired the Eternal class.
- `ewell` is particularly powerful — it redirects the mob's own damage back at itself, causing rapid destruction.
- The `epowers` strategy (`strategy epowers`) automates using `fry`, `shred`, and `ewell` in the early rounds of combat.
- Eternal healing (`(heal`) is referenced in `useHeal` and emote heal automations.
