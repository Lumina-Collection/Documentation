---
slug: /admin/configuration/localization
---

# Localization

Rollbound supports localization, which means that you can change nearly all messages sent by Rollbound to your liking.

:::tip
Rollbound supports [MiniMessage](https://docs.advntr.dev/minimessage/index.html) for localization. This means that you can use MiniMessage formatting in your localization files.
:::

## Localization Files

Rollbound uses Properties files for localization. These files are located in the `plugins/Rollbound/i18n` folder.

### Default Localizations

The default localizaztions can be found inside the `default` folder. These files are used when no other localization files are found.

Rollbound supports `English` and `German` by default.

:::caution
The default localizations are not meant to be edited and will be reset on every server restart. If you want to change the messages, create a new localization file inside the `custom` folder.
:::

```properties	title="plugins/Rollbound/i18n/default/default.properties"
command.rollbound=<gold><name> <gray>version <gold><version>\n\
<gray><description>\n\
<gray>Website: <gold><website>\n\
<gray>Author: <gold><author>
command.rollbound.reload=<gold>Config <gray>and <gold>Messages <gray>reloaded!
command.roll=<gold><player> <gray>rolls with <hover:show_text:"<results>"><dice></hover> <gray>an end-result of: <hover:show_text:"<gray>Modified by: <modifier>"><gold><total></hover> <success_state>
command.roll.die=<gold><count>d<faces></gold>
command.roll.result=<result_color><result>
command.roll.result.seperator=<gray>, </gray>
command.roll.die.seperator=<gray>, </gray>
command.roll.modifier.positive=<green>+<modifier></green>
command.roll.modifier.negative=<red>-<modifier></red>
command.roll.success-state=<gray>- <success_state>
command.roll.results=<die><gray>:</gray> <dice_group_results><newline>
success-states.text.critical-success=<green>Critical Success!
success-states.text.critical-failure=<red>Critical Failure!
command.roll.meta.name=roll
command.roll.meta.argument.threshold=threshold
command.roll.meta.argument.roll-string=rollString
command.roll.meta.short-description=A command provided by the Lumina Collection.
command.proll.meta.name=proll
command.proll.meta.short-description=A command provided by the Lumina Collection.
command.proll.meta.argument.threshold=threshold
command.proll.meta.argument.roll-string=rollString
```

```properties	title="plugins/Rollbound/i18n/default/default_de.properties"
command.rollbound=<gold><name> <gray>version <gold><version>\n\
<gray><description>\n\
<gray>Webseite: <gold><website>de/\n\
<gray>Autor: <gold><author>
command.rollbound.reload=<blue>Konfiguration <gray>und <blue>Nachrichten <gray>neu geladen!
command.roll=<gold><player> <gray>würfelt mit <hover:show_text:"<results>"><dice></hover> <gray>ein Gesamtergebnis von: <hover:show_text:"<gray>Modifiziert um: <modifier>"><gold><total></hover> <success_state>
command.roll.die=<gold><count>w<faces></gold>
command.roll.die.seperator=<gray>, </gray>
command.roll.modifier.negative=<red>-<modifier></red>
command.roll.modifier.positive=<green>+<modifier></green>
command.roll.result=<result_color><result>
command.roll.result.seperator=<gray>, </gray>
command.roll.success-state=<gray>- <success_state>
command.roll.results=<die><gray>:</gray> <dice_group_results><newline>
success-states.text.critical-success=<green>Kritischer Erfolg!
success-states.text.critical-failure=<red>Patzer!
command.roll.meta.name=würfeln
command.roll.meta.argument.threshold=Zielwert
command.roll.meta.argument.roll-string=Würfelkette
command.roll.meta.short-description=Ein Befehl der Lumina Collection.
command.proll.meta.name=pwürfeln
command.proll.meta.short-description=Ein Befehl der Lumina Collection.
command.proll.meta.argument.threshold=Zielwert
command.proll.meta.argument.roll-string=Würfelkette
```

### Custom Localizations

Custom localizations can be found inside the `custom` folder. These files will take priority over the default localizations.

You can create a new localization file by copying the `default.properties` file and renaming it to `custom.properties`.

:::tip
You can also create custom translations for the default localizations. To do this, copy the default localization file you want to translate and rename it to `custom_<language>.properties`. For example, if you want to translate the default German localizations, you would copy the `default_de.properties` file and rename it to `custom_de.properties`.
:::

Here is an example of a custom localization file:

```properties	title="plugins/Rollbound/i18n/custom/custom.properties"
command.proll.meta.argument.threshold=target value
```

As you can see, you don't have to translate every message. Only the messages you want to change need to be in the file.

## Changing the Language

Rollbound will automatically use the language of the player it sends the message to. If the player's language is not supported, it will use the default language. Messages sent to the console will be in Axios' default language.

As Rollbound relies on Axios, you can change the language of the console by setting the `language` option in the `config.yml` file of Axios.

```yaml	title="plugins/Axios/config.yml"
language: en
```

## Custom Success States

You can add custom success states to your localizations. To do this, add a new entry to the `success-states` section of your localization file.

```properties	title="plugins/Rollbound/i18n/custom/custom.properties"
success-states.text.custom-success=<green>Custom Success!
success-states.text.custom-failure=<red>Custom Failure!
```

In the above example, we added two new success states called `custom-success` and `custom-failure`. This is the `id` from our `config.yml`.