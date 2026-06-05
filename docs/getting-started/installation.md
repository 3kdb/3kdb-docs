---
id: installation
title: Installation
sidebar_position: 1
---

# Installation

3kdb requires **TinTin++** (the MUD client) and a copy of this repository. TinTin++ runs on Linux, macOS, and Windows (via WSL).

## 1. Install TinTin++ (Ubuntu / Debian)

```bash
mkdir tintin
cd tintin
sudo apt-get update
sudo apt-get install build-essential zlib1g-dev libpcre3-dev libgnutls28-dev
sudo apt-get build-dep tintin++
wget https://github.com/scandum/tintin/releases/download/2.02.61/tintin-2.02.61.tar.gz
tar -zxvf tintin-2.02.61.tar.gz
cd tt/src
./configure
sudo make install
```

After installation, type `tt++` in your terminal to launch TinTin++.

## 2. Clone the repository

```bash
git clone https://github.com/sonic306/3kdb.git ~/mud
cd ~/mud
```

> The scripts use **relative paths** from the repository root. Always launch TinTin++ from the `mud/` (repo root) directory.

## 3. Create the logs directory

Logs are written to `logs/<system-username>/`. Create that folder before connecting:

```bash
mkdir -p logs/$(whoami)
```

## 4. (Optional) VSCode SFTP sync

If you edit scripts locally and want them synced to a remote server automatically, install the [SFTP extension](https://marketplace.visualstudio.com/items?itemName=Natizyskunk.sftp) for VSCode and add this to `.vscode/sftp.json`:

```json
{
    "name": "3kdb",
    "host": "your-server-ip",
    "protocol": "sftp",
    "port": 22,
    "username": "YOUR_USERNAME",
    "password": "YOUR_PASSWORD",
    "remotePath": "/home/YOUR_USERNAME/mud",
    "uploadOnSave": true,
    "ignore": [".vscode", ".git", ".DS_Store", "logs", "*.swp"]
}
```

For syntax highlighting of `.tin` files in VSCode, use **C++** language mode — it's the closest available match until a TinTin++ extension exists.

## Next step

Proceed to **[Your First Character](first-character)** to set up a character and connect to 3 Kingdoms.
