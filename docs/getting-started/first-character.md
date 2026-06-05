---
id: first-character
title: Your First Character
sidebar_position: 2
---

# Your First Character

This guide walks you through setting up a character file so you can connect to 3 Kingdoms.

## Step 1 — Copy the template

Every character lives in its own folder inside `chars/`. There's a `template` folder ready to copy:

```bash
cd ~/mud
cp -r chars/template chars/yourcharname
```

## Step 2 — Rename the main file

Inside `chars/yourcharname/`, rename `playername.tin` to match your character:

```bash
mv chars/yourcharname/playername.tin chars/yourcharname/yourcharname.tin
```

## Step 3 — Edit the main character file

Open `chars/yourcharname/yourcharname.tin` and set two required variables:

```tintin
#var guild bard;      // Your guild (e.g. bard, mage, necromancer, monk...)
#var user yourcharname;

#read chars/$user/vars.tin;

// Optional: set to 1 if you've configured Discord webhooks
#var discordPost 0;

// Load all common systems
#read common/index.tin;
```

> Replace `bard` with your actual guild. See [Guild Overview](../guilds/overview) for the full list of supported guilds.

:::note About the chars/ folder
The `chars/` directory contains many existing players' character configurations. These are not relevant to your setup — ignore them. The only folder you need to reference is `chars/template/`, which is the starting point for any new character.
:::

## Step 4 — Register your character in 3k.tin

Open `3k.tin` in the repo root and add your character to one of the four player slots:

```tintin
#var player1 yourcharname;
#var player2 ;
#var player3 ;
#var player4 ;
```

## Step 5 — Launch TinTin++ and connect

From the repo root, launch TinTin++ and load the main menu:

```bash
cd ~/mud
tt++
```

Inside TinTin++:

```tintin
#read 3k.tin
```

You'll see a numbered list of your configured characters. Press the number key to load that character and automatically connect to **3k.org port 3000**.

```
1: yourcharname
2:
3:
4:
```

Press **1** to connect.

## Character file overview

Each character folder contains these standard files:

| File | Purpose |
|---|---|
| `yourcharname.tin` | Main entry — sets guild/user, loads common |
| `config.tin` | Character-specific MUD settings and variables |
| `vars.tin` | Persistent variables saved between sessions |
| `actions.tin` | Character-specific trigger patterns |
| `aliases.tin` | Character-specific command shortcuts |
| `heartbeat.tin` | Per-round logic unique to this character |
| `miphp.tin` | HP bar configuration for the MIP UI |
| `tickers.tin` | Repeating timers (buffs, auto-actions, etc.) |

## Saving your session

When you're done playing, type `ld` to save your character's state and disconnect:

```tintin
ld
```

This calls `_variable_export`, which writes all persistent variables back to `vars.tin` before ending the session.
