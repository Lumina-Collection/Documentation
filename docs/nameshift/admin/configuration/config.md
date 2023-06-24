---
slug: /admin/configuration/config
toc_max_heading_level: 5
---

# Config.yml

Nameshift's config.yml file is located in the `plugins/Nameshift` folder. It contains all of Nameshift's configuration options.

## Default Config.yml

```yaml title="plugins/Nameshift/config.yml"
limits:
  # Expected Data Type: Integer, Default value: 40
  character-limit: 40
  # Expected Data Type: List, Default value: [color, bold, italic, underlined, strikethrough, obfuscated, gradient, rainbow, font]
  allowed-tags:
  - color
  - bold
  - italic
  - underlined
  - strikethrough
  - obfuscated
  - gradient
  - rainbow
  - font
```

## limits

### character-limit

The character limit is the maximum amount of characters a player can use in their name. This only counts the characters that are visible in the name, so color codes and formatting codes are not counted.

- **Expected Data Type:** Integer
- **Default Value:** 40

### allowed-tags

The allowed tags list is a list of all the [MiniMessage](https://docs.advntr.dev/minimessage/index.html) tags that are allowed to be used in a player's name. If a player uses a tag that is not in this list, it will not get parsed.

- **Expected Data Type:** List
- **Default Value:** [color, bold, italic, underlined, strikethrough, obfuscated, gradient, rainbow, font]

#### Available Tags

- `color`
- `bold`
- `italic`
- `underlined`
- `strikethrough`
- `obfuscated`
- `gradient`
- `rainbow`
- `font`
- `insertion`
- `hover`
- `click`
- `key`
- `lang`
- `selector`
- `score`
- `nbt`
