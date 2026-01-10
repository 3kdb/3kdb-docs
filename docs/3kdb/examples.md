---
sidebar_position: 13
title: Examples & Snippets
---

# Examples & Snippets

This page contains ready-to-use Tintin++ snippets from the upstream `SCRIPTS` document and Python scripts from the `3kdb` repository. They demonstrate common patterns for automating gameplay and integrations.

## Python Connector Script (3kpiConnector.py)

This script sends JSON data to a URL, useful for integrations like Discord hooks.

```python
import copy, sys, requests, time

url = str(sys.argv[1])
data = ""
for i in range(len(sys.argv)):
    if i >= 2:
        data = " ".join([data, sys.argv[i]])

headers = {'Content-Type': "application/json", 'Accept': "application/json"}

data = data.replace("x7B", "{")
data = data.replace("x7D", "}")

try:
    res = requests.post(url, json=data, headers=headers)
except (requests.exceptions.SSLError):
    time.sleep(3)
    try:
        res = requests.post(url, json=data, headers=headers)
    except:
        pass
except:
    pass
```

Usage: `python 3kpiConnector.py <url> <json_data>`

## Tintin++ Snippets

```tintin
#event {SESSION CONNECTED}
{
    #event {SESSION DISCONNECTED}
    {
        #gts #delay 5 {#session %0 %1 %3}
    }
}
```

## Timestamped logging (decisecond precision)

```tintin
#function {timestamp}
{
    #format utime {%U};
    #format result {%t.%m} {%Y-%m-%d %H:%M:%S}{$utime % 1000000 / 100000}
}

#event {RECEIVED LINE}
{
    #line log mylog.txt {<178>@timestamp{} \};
}
```

## HP bar alias

```tintin
#alias {hpbar}
{
    #math {hp_percent}{100 * %1 / %2};
    #math {hpbars1}   {$hp_percent / 5};
    #math {hpbars2}   {20 - $hpbars1};

    #format {hpbar} {<011>%+${hpbars1}s<099><000>%+${hpbars2}s<099> };

    #showme [$hpbar]
}

#alias {test}
{
    hpbar 30 100
}
```

## JSON save/load helpers

```tintin
#alias {json_save}
{
    #if {"%1" == "" || "%2" == ""}
    {
        #showme Syntax: json_save <variable> <filename>;
        #return
    };

    #line quiet #log remove %2;
    #line json {%1} {#line log {%2} {&0}}
}

#alias {json_load}
{
    #if {"%1" == "" || "%2" == ""}
    {
        #showme Syntax: json_load <variable> <filename>;
        #return
    };
    #line quiet #unvar {%2};
    #scan json {%2} {%1}
}
```

## Targeting helper (track and auto-act)

```tintin
#var targets {}

#alias {target}
{
    #if {"%0" == ""}
    {
        #showme {Current targets: $targets[]}
    };
    #elseif {&targets[%0]}
    {
        #unvar targets[%0];
        #showme Target '%0' removed.
    };
    #else
    {
        #var targets[%0] {};
        #showme Target '%0' added.
    }
}

#act {%1 arrives}
{
    #if {&targets[%1]} {kill %1}
}

#act {%1 is standing here}
{
    #if {&targets[%1]} {kill %1}
}

#action {%1 is dead! R.I.P.}
{
    #if {&targets[%1]} {target %1}
}
```

## Speedwalk alias (dot-prefixed)

```tintin
#alias {.%0}
{
    #var cnt {};

    #parse {%0} {char}
    {
        #if {"$char" >= "0" && "$char" <= "9"}
        {
            #var cnt $cnt$char
        };
        #elseif {"$cnt" == ""}
        {
            #send $char
        };
        #else
        {
            #$cnt #send $char;
            #var cnt {}
        }
    }
}
```

---

If you'd like, I can:

- Import more scripts from other files like `docs/manual.html` or `docs/syntax.txt` in the Tintin++ repo.
- Convert selected examples into runnable demo pages (with explanation and expected output).

Tell me which snippets you'd like expanded or if I should import additional files from the upstream repo. 
