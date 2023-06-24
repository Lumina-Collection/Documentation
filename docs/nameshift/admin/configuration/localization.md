---
slug: /admin/configuration/localization
---

# Localization

Nameshift supports localization, which means that you can change nearly all messages sent by Nameshift to your liking.

:::tip
Nameshift supports [MiniMessage](https://docs.advntr.dev/minimessage/index.html) for localization. This means that you can use MiniMessage formatting in your localization files.
:::

## Localization Files

Nameshift uses Properties files for localization. These files are located in the `plugins/Nameshift/i18n` folder.

### Default Localizations

The default localizaztions can be found inside the `default` folder. These files are used when no other localization files are found.

Nameshift supports `English` and `German` by default.

:::caution
The default localizations are not meant to be edited and will be reset on every server restart. If you want to change the messages, create a new localization file inside the `custom` folder.
:::

```properties	title="plugins/Nameshift/i18n/default/default.properties"
command.nameshift.main=<blue><name> <gray>version <blue><version>\n\
<gray><description>\n\
<gray>Website: <blue><website>\n\
<gray>Author: <blue><author>
command.nameshift.meta.short-description=This is the main command of Nameshift
command.nameshift.sub.reload=<blue>Config <gray>and <blue>Messages <gray>reloaded!
command.name.meta.short-description=Allows to manage player names
command.name.main=<blue>You <gray>are currently known as <blue><name><gray>!
command.name.main.self=<blue>You <gray>are now known as <blue><name><gray>!
command.name.sub.give=<blue><player> <gray>is now known as <blue><name><gray>!
command.whois.main=<gray>The player behind <blue><name> <gray>is <blue><player><gray>!
command.whois.main.not-found=<red>There is no player known as <dar_red><name><red>!
command.whois.sub.all=<gray>The following players with custom names are currently online:\n\
<gray><list>
command.whois.sub.all.empty=<gray>There are no players with custom names online!
command.whois.sub.all.entry=<blue><player> <gray>as <blue><name>
command.whois.meta.short-description=Allows to get information about players with custom names
command.whois.meta.name=whois
command.whois.sub.all.meta.name=all
command.name.meta.name=name
command.name.sub.give.meta.name=give
command.name.meta.arg.name=name
command.name.meta.arg.player=player
command.whois.meta.arg.name=name
command.name.sub.reset.meta.name=reset
command.name.sub.reset=<gray>The name of <blue><target> <gray>has been reset!
command.name.sub.reset.self=<blue>You <gray>reset your name!
command.name.error.name-too-long=<red>The name you provided is too long. The limit is <character_limnit> characters!
```

```properties	title="plugins/Nameshift/i18n/default/default_de.properties"
command.nameshift.main=<blue><name> <gray>version <blue><version>\n\
<gray><description>\n\
<gray>Webseite: <blue><website>\n\
<gray>Autor: <blue><author>
command.nameshift.meta.short-description=Dies ist der Hauptbefehl von Nameshift
command.nameshift.sub.reload=<blue>Config <gray>und <blue>Nachrichten <gray>neu geladen!
command.name.meta.short-description=Erlaubt die Verwaltung von Spielernamen
command.name.main=<blue>Du <gray>bist aktuell als <blue><name> <gray>bekannt!
command.name.main.self=<blue>Dich <gray>kennt man ab sofort als <blue><name><gray>!
command.name.sub.give=<blue><player> <gray>ist ab sofort als <blue><name> <gray>bekannt!
command.whois.main=<gray>Der Spieler hinter <blue><name> <gray>ist <blue><player><gray>!
command.whois.main.not-found=<red>Es ist kein Spieler als <dark_red><name> <red>bekannt!
command.whois.sub.all=<gray>Die folgenden Spieler mit Spitznamen sind aktuell online:\n\
<gray><list>
command.whois.sub.all.empty=<gray>Es sind aktuell keine Spieler mit Spitznamen online!
command.whois.sub.all.entry=<blue><player> <gray>als <blue><name>
command.whois.meta.short-description=Erlaubt das Sammeln von Informationen über Spieler mit Spitznamen
command.whois.meta.name=werist
command.whois.sub.all.meta.name=alle
command.name.meta.name=name
command.name.sub.give.meta.name=geben
command.name.meta.arg.name=Name
command.name.meta.arg.player=Spieler
command.whois.meta.arg.name=Name
command.name.sub.reset.meta.name=zurücksetzen
command.name.sub.reset=<gray>Der Name von <blue><target> <gray>wurde zurückgesetzt!
command.name.sub.reset.self=<blue>Du <gray>hast deinen Namen zurückgesetzt!
command.name.error.name-too-long=<red>Der von dir angegebene Name ist zu lang. Das Zeichenlimit beträgt <character_limit> Zeichen!
```

### Custom Localizations

Custom localizations can be found inside the `custom` folder. These files will take priority over the default localizations.

You can create a new localization file by copying the `default.properties` file and renaming it to `custom.properties`.

:::tip
You can also create custom translations for the default localizations. To do this, copy the default localization file you want to translate and rename it to `custom_<language>.properties`. For example, if you want to translate the default German localizations, you would copy the `default_de.properties` file and rename it to `custom_de.properties`.
:::

Here is an example of a custom localization file:

```properties	title="plugins/Nameshift/i18n/custom/custom.properties"
command.name.meta.arg.player=Playable Character
```

As you can see, you don't have to translate every message. Only the messages you want to change need to be in the file.

## Changing the Language

Nameshift will automatically use the language of the player it sends the message to. If the player's language is not supported, it will use the default language. Messages sent to the console will be in Axios' default language.

As Nameshift relies on Axios, you can change the language of the console by setting the `language` option in the `config.yml` file of Axios.

```yaml	title="plugins/Axios/config.yml"
language: en
```