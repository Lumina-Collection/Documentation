---
slug: /admin/configuration/config
toc_max_heading_level: 5
---

# Config.yml

Rollbound's config.yml file is located in the `plugins/Rollbound` folder. It contains all of Rollbound's configuration options.

## Default Config.yml

```yaml title="plugins/Rollbound/config.yml"
hooks:
  # Expected data type: Boolean, Default value: false
  venturechat: false
defaults:
  # Expected data type: Integer, Default value: 30
  chat-range: 30
  # Expected data type: String, Default value: below
  triggered: below
  # Expected data type: Integer, Default value: 100
  number-of-faces: 100
  # Expected data type: List, Default value: [{sound=ui.toast.challenge_complete, percentage=10, id=critical-success, pitch=1.4, triggered=below}, {sound=item.goat_horn.sound.5, percentage=-98, id=critical-failure, pitch=1.4, triggered=above}]
  success-states:
  - triggered: below
    sound: ui.toast.challenge_complete
    percentage: 10
    id: critical-success
    pitch: 1.4
  - triggered: above
    sound: item.goat_horn.sound.5
    percentage: -98
    id: critical-failure
    pitch: 1.4
```

## Hooks

### venturechat

This hook enables support for [VentureChat](https://www.spigotmc.org/resources/venturechat.771/) channel ranges. If enabled, Rollbound will use the VentureChat channel range instead of the default chat range.

**Default:** `false`

**Expected Data Type:** `Boolean`

## Defaults

### chat-range

This is the default chat range for Rollbound. If none of the channel hooks are enabled, this is the range that will be used. If you set this to `0`, Rollbound will handle normal rolls as if they were private rolls. If you set this to `-1`, Rollbound will send its message globally.

- **Default:** `30`
- **Expected Data Type:** `Integer`

### triggered

This defines weather high or low rolls are considered a success. If set to `above`, high rolls are considered a success. If set to `below`, low rolls are considered a success.

- **Default:** `below`
- **Expected Data Type:** `String`

### number-of-faces

This is the number of faces on the dice that Rollbound will roll when no rollString is provided. This is used to determine the maximum and minimum possible rolls.

- **Default:** `100`
- **Expected Data Type:** `Integer`

### success-states

This is a list of success states that Rollbound will use to determine what sound to play when a roll is made. Each success state has the following properties:

#### triggered

This defines weather high or low rolls are considered a success. If set to `above`, high rolls are considered a success. If set to `below`, low rolls are considered a success.

- **Default:** `below`
- **Expected Data Type:** `String`

#### sound

This is the sound that will be played when a roll is made that matches this success state. This can be any sound that is available in the game.

- **Default:** `ui.toast.challenge_complete`
- **Expected Data Type:** `String`

#### percentage

This is the percentage of the maximum possible roll that will trigger this success state. For example, if the maximum possible roll is 100, and this is set to 10, then this success state will be triggered by rolls of 10 or lower if `triggered` is set to `below`, or rolls of 10 or higher if `triggered` is set to `above`. If a negative number is provided, this value will be regarded as total. For example, if this is set to -98 then this success state will be triggered only by rolls higher than 98 if `triggered` is set to `above`, or rolls lower than 98 if `triggered` is set to `below`.

- **Default:** `10`
- **Expected Data Type:** `Integer`

#### id

This is the ID of the success state. This is used to identify the success state in translations. See [this](/rollbound/admin/configuration/localization#custom-success-states) for more information.

- **Default:** `critical-success`
- **Expected Data Type:** `String`

#### pitch

This is the pitch of the sound that will be played when a roll is made that matches this success state.

- **Default:** `1.4`
- **Expected Data Type:** `Double`

## Example Config.yml

```yaml title="plugins/Rollbound/config.yml"
hooks:
  venturechat: true
defaults:
  chat-range: 30
  triggered: below
  number-of-faces: 100
  success-states:
  - percentage: 10
    triggered: below
    id: critical-success
    sound: ui.toast.challenge_complete
    pitch: 1.4
  - percentage: -98
    triggered: above
    id: critical-failure
    sound: item.goat_horn.sound.6
    pitch: 1.4
  - percentage: 100
    triggered: below
    id: success
    sound: item.goat_horn.sound.1
    pitch: 1
  - percentage: 100
    triggered: above
    id: failure
    sound: item.goat_horn.sound.4
    pitch: 1.4

```
