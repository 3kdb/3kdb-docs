---
sidebar_position: 10
title: 3kdb Overview
---

# 3kdb Library

`3kdb` is a modular Tintin++ script repository for the 3Kingdoms game, built with a plug-and-play approach for guilds, professions, strategies, etc. It aims to limit dependencies while providing a comprehensive framework for automating gameplay.

- Source: https://github.com/jmitchell33/3kdb
- Based on Tintin++: https://github.com/scandum/tintin

This documentation covers installation, setup, usage patterns, examples, and development for `3kdb`.

## Repository Structure

- **chars**: Individual character settings.
- **common**: Shared settings across all characters/global stuff.
- **modules**: Script packages for specific functionalities (guilds, professions, etc.).
- **logs/user**: Logs per system user (e.g., `logs/jerry` for user `jerry`).

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/jmitchell33/3kdb.git
   cd 3kdb
   ```

2. Copy the `chars/template` folder to your character's name, rename `playername.tin` to your character's name, and update variables like `guild` and `user`.

3. Load your character script: `#read chars/yourchar/yourchar.tin`

For detailed setup, see the [Getting Started](getting-started.md) page.
