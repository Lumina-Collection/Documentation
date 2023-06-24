---
slug: /usage/tips-and-tricks
---

# Tips and Tricks

## Gradient

The gradient tag allows you to create a gradient between two or more colors. The syntax for the gradient tag is as follows:

```md title="Gradient Tag Syntax"
<gradient:color1:color2:colorN>Name</gradient>
```

You can either use the known Minecraft colors (e.g. `red`, `blue`, `green`, etc.) or you can use hex codes (e.g. `#ff0000`, `#00ff00`, `#0000ff`, etc.). You can also use a combination of both.

```md title="Gradient Tag Examples"
<gradient:red:blue>Name</gradient>
<gradient:#ff0000:#00ff00:#0000ff>Name</gradient>
<gradient:red:#00ff00:blue>Name</gradient>
```

## Font

The font tag allows you to change the font of a text. The syntax for the font tag is as follows:

```md title="Font Tag Syntax"
<font:font-name>Name</font>
```

Per default, the following fonts are available:

- `uniform` The Minecraft Unicode font
- `alt` The Minecraft "magic" font

When you use server resource packs, you can also use the fonts provided by the resource pack. To use a font from a resource pack, you have to use the following syntax:

```md title="Font Tag Syntax"
<font:resource-pack:font-name>Name</font>
```