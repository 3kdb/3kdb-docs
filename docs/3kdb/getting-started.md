---
sidebar_position: 11
title: Getting Started
---

# Getting Started

This page provides step-by-step instructions for setting up and using `3kdb`.

## Prerequisites

- Tintin++ installed (see Installation).
- A 3Kingdoms account.

## Installation

Follow the Tintin++ installation instructions from the repository README:

```bash
mkdir tintin
cd tintin
sudo apt-get update
sudo apt-get install build-essential zlib1g-dev libpcre3-dev libgnutls28-dev
sudo apt-get build-dep tintin++
wget https://github.com/scandum/tintin/releases/download/2.02.51/tintin-2.02.51.tar.gz
tar -zxvf tintin-2.02.51.tar.gz
cd tt/src
./configure
sudo make install
```

Once installed, run `tt++` to start Tintin++.

## Setting Up Your Character

1. Clone the `3kdb` repository:
   ```bash
   git clone https://github.com/jmitchell33/3kdb.git
   cd 3kdb
   ```

2. In the `chars` folder, copy the `template` folder and rename it to your character's name (lowercase).

3. Rename `playername.tin` to your character's name (e.g., `byron.tin`).

4. Edit the file to set your guild and user:
   ```tintin
   #var guild bard;
   #var user byron;
   #read chars/$user/vars.tin;

   #NOP -- If discord hooks are setup set this to 1;
   #var discordPost 1;

   #NOP -- Load Common files;
   #read common/index.tin;
   ```

5. Load your character: `#read chars/yourchar/yourchar.tin`

## Connecting to 3Kingdoms

Use the provided `3k.tin` script to connect. Edit it to set your characters:

```tintin
#echo {Connect to:};
#echo {3kingdoms};

#kill all;

#NOP -- Replace byron below with your character (LOWER CASE);
#var player1 byron;
#var player2 ;
#var player3 ;
#var player4 ;

#NOP -- This displays the options when you open tintin;
#echo {1: $player1};
#echo {2: $player2};
#echo {3: $player3};
#echo {4: $player4};

#NOP -- These are the macros to match 1/2/3/4 so you can press that number to select that character;
#macro {1} {#read chars/$player1/$player1.tin;$player1;um};
#macro {2} {#read chars/$player2/$player2.tin;$player2;um};
#macro {3} {#read chars/$player3/$player3.tin;$player3;um};
#macro {4} {#read chars/$player4/$player4.tin;$player4;um};

#NOP -- When you disconnect, these options will again display to log back in;
#event {SESSION DEACTIVATED} {
    #echo {1: $player1};
    #echo {2: $player2};
    #echo {3: $player3};
    #echo {4: $player4};
};

#alias {um} {#unmacro {%d}};
```

Run Tintin++ and load this script: `#read 3k.tin`

Then press the number corresponding to your character to connect.

## Guild Defaults

Some guilds assume certain in-game settings (e.g., Bards: `bset auto_shield 1`).

## Contributing

- Work within `/modules/<module>` for new features.
- Open issues/PRs for global changes.
- Use VSCode with SFTP for live editing (config provided in README).

For more examples, see the [Examples](examples.md) page.