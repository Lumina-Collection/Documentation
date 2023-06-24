---
slug: /admin/configuration/commands-and-permissions
---

# Commands and Permissions

## Overview

|                Command           |        Permission Node        |                 Description                 |
| -------------------------------- | ----------------------------- | ------------------------------------------- |
| /nameshift                       | nameshift.command             | Shows general information about the plugin. |
| /nameshift reload                | nameshift.command.reload      | Reloads the config and messages.            |
| /name                            | nameshift.command.name        | Allows to view the own name.                |
| /name <name>                     | nameshift.command.name.self   | Allows to change the own name.              |
| /name give <player> <name>       | nameshift.command.name.others | Allows to change the name of other players. |
| /name reset <player>             | nameshift.command.name.others | Resets a players name.                      |
| /whois <name|all>                | nameshift.command.whois       | Allows to lookup the player behind a name.  |