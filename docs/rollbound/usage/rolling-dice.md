---
slug: /usage/rolling-dice
---

# Rolling Dice

:::info
Rollbound supports many ways to roll dice. This page will give you a quick overview of the different ways you can roll them.
:::

## Default Rolls

The most basic way to roll dice is to use the `/roll` command. This command (without any arguments) will roll a single die with a default number of sides configured by your server administrator.

When yoo provide a number as an argument, your roll will roll against that number as a target. For example, `/roll 10` will roll a single die and compare it to 10. Depending on the configuration of your server, you may need to roll higher or lower than the target number to succeed.

## Multiple Dice and Modifiers

You can roll multiple dice at once by using a so called "roll string". A roll string is a combination of dice that are separated by a dots and modifiers seperated by a `+` or `-` sign. For example, `2d6+1` will roll two six-sided dice and add 1 to the result. Or `2d20.5d6-1` will roll two twenty-sided dice, five six-sided dice and subtract 1 from the result.

## Private Rolls

You can roll dice privately by using the `/proll` command. This command works exactly like the `/roll` command, but will only be visible to you and the console.

## Exploding Dice (Future Feature)

Rollbound will support exploding dice in the future. Exploding dice are dice that will roll again if they roll a maximum value. For example, if you roll a d6 and it rolls a 6, it will roll again and add the result to the previous roll. This will continue until the dice rolls a value that is not the maximum value.

## Dice Pools (Future Feature)

Rollbound will support dice pools in the future. Dice pools are a collection of dice that are rolled together. The result of the roll is the number of dice that rolled a certain value. For example, if you roll 5d6 and get 1, 2, 3, 4, 5, the result will be 1 success. If you roll 5d6 and get 1, 1, 1, 1, 1, the result will be 5 successes.

## Probability (Future Feature)

Rollbound will support probability calculations in the future. This will allow you to calculate the probability of a certain roll. For example, you can calculate the probability of rolling a 6 on a d6. Or you can calculate the probability of rolling a 6 on 2d6. Or you can calculate the probability of rolling a 6 on 2d6 and adding 1 to the result.

## History (Future Feature)

Rollbound will support a history of your rolls in the future. This will allow you and gamemasters to see what you rolled in the past.

## Dice Macros (Future Feature)

Rollbound will support dice macros in the future. This will allow you to save a roll string and give it a name. You can then use the name to roll the dice again. For example, you can save a roll string called `attack` and use it to roll your attack dice. Or you can save a roll string called `damage` and use it to roll your damage dice.