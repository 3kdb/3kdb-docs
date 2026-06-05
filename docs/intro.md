---
id: intro
slug: /
title: Welcome to 3kdb
sidebar_position: 1
---

# Welcome to 3kdb

**3kdb** is a modular [TinTin++](https://tintin.mudhalla.net/) scripting framework for the [3 Kingdoms MUD](https://3k.org). It gives you a plug-and-play system for managing multiple characters, guilds, automation bots, combat strategies, and quality-of-life features — all from a single, well-organized codebase.

## What does it do?

| Feature | Description |
|---|---|
| **Guild automation** | 22 fully scripted guilds with combat AI, skill usage, and healing |
| **Leveling bots** | 151+ area-specific bots that grind mobs automatically |
| **MIP UI** | A rich terminal UI showing HP bars, room info, chat logs, and stats |
| **Strategy system** | Named combat strategies you can toggle on/off mid-session |
| **Crafting** | Automation for blacksmithing, mining, farming, enchanting, and more |
| **Discord integration** | Posts game events (kills, loot, deaths) to Discord webhooks |
| **Character template** | A ready-to-use template for creating your own character configuration |

## Who is this for?

- Players on **3 Kingdoms MUD** who want automation and quality-of-life scripting
- People new to TinTin++ looking for a working reference implementation
- Contributors who want to add guild scripts, area bots, or module features

## How to navigate these docs

If you're brand new, start with **[Installation](getting-started/installation)** to get TinTin++ running, then **[Your First Character](getting-started/first-character)** to connect to the MUD.

Once connected, explore:

- **[Common Systems](common/aliases)** — the aliases, actions, events, and toggles available to every character
- **[Guilds](guilds/overview)** — how guild automation works and what each guild provides
- **[Modules](modules/overview)** — optional features you can enable per character
- **[Bots](bots/overview)** — automated leveling scripts for specific areas

## Characters

The `chars/` folder contains a **template** character (`chars/template/`) for creating your own character configuration. All other character folders in that directory are existing players' configs — refer only to the template when setting up your own character.

## Credits

The MIP UI foundation was built by **Balthus**, with contributions from **Inix** and **Krat**. Related repos:

- [Balthus / Tim-Radcliffe](https://github.com/Tim-Radcliffe/Tintin-Setup)
- [Inix](https://github.com/Inix3K/TinTin/)
- [Krat](https://github.com/Krattimus/3k/)
- [Flooby / 3scapes](https://github.com/daagar/3Steps)
