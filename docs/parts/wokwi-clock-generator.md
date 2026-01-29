---
title: wokwi-clock-generator Reference
sidebar_label: wokwi-clock-generator
---

Configurable clock generator component.

![](wokwi-clock-generator.svg)

## Pin names

| Name | Description         |
| :--- | :------------------ |
| CLK  | Clock signal output |

## Attributes

| Name | Description | Default value |
| :--- | :---------- | :------------ |
| frequency | Set the frequency of the generator (in Hz) | "10k" |

You can suffix your value with "k" or "m" to get KHz or MHz values. For example:
- "10k" is a 10KHz clock
- "1.3m" is a 1.3MHz clock
- "1" is a 1Hz clock

:::warning
Frequencies over 100KHz may slow down the simulation.
:::

## Simulator Examples
- [Tiny Tapeout Template](https://wokwi.com/projects/354858054593504257)