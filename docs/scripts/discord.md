---
id: discord
title: Discord Integration
sidebar_position: 1
---

# Discord Integration

3kdb can post game events to Discord channels via webhooks. Three Python scripts in `scripts/` handle the communication.

## Scripts

| File | Purpose |
|---|---|
| `scripts/discordPost.py` | Posts game messages to a Discord webhook. Reads JSON input and sends via the `requests` library |
| `scripts/3kpiConnector.py` | 3K Protocol Interface connector — handles the game-to-client protocol |
| `scripts/3kpiConnector_crafting.py` | Crafting-specific protocol handler variant |

## Enabling Discord posting

1. Create a Discord webhook in your server (Server Settings → Integrations → Webhooks)
2. Copy the webhook URL

3. Set the webhook URL in `chars/<user>/config.tin`

4. Enable posting:
```tintin
toggle discord_post
// or set it permanently:
#var toggles[discord_post] 1;
#var discordPost 1;
```

The `toggle discord_post` command also updates `$discordPost` automatically (see `common/toggles.tin`).

## What gets posted

When `$discordPost` is enabled, kill events, loot finds, and other configurable game events are sent to your webhook. The 3kReport system (`common/3kReport.tin`) generates the event data.

## Python requirements

```bash
pip install requests
```

The Python scripts are called by TinTin++ using `#run` or `#system` commands from within `.tin` scripts. See `3kdb Notes.md` in the repo root for the full Discord webhook setup guide.

## Notes file

`3kdb Notes.md` in the repo root contains detailed notes on configuring the Discord webhook integration, including webhook setup, event formatting, and example config.
