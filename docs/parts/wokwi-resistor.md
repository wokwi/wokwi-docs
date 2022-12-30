---
title: wokwi-resistor Reference
sidebar_label: wokwi-resistor
---

A resistor.

<wokwi-resistor value="470"></wokwi-resistor>

:::caution
Wokwi only has a very basic analog circuit simulation. You won't be able to use resistors together with
analog components (e.g. potentiometer or NTC temperature sensor). You can still use the resistors as external
pull-up/pull-down resistors.
:::

## Pin names

| Pin | Description |
| --- | ----------- |
| 1   | First pin   |
| 2   | Second pin  |

## Attributes

| Name  | Description         | Default value |
| ----- | ------------------- | ------------- |
| value | Resistance, in ohms | "220"        |

### Examples

| Result                              | Attrs                     |
| ----------------------------------- | ------------------------- |
| <wokwi-resistor value="1" />        | `{ "value": "1" }`        |
| <wokwi-resistor value="220" />      | `{ "value": "220" }`      |
| <wokwi-resistor value="10000000" /> | `{ "value": "10000000" }` |

Check out the [resistor showcase by Koepel](https://wokwi.com/projects/300936732038136328) for more examples.

## Simulator examples

- [External pull-down resistor](https://wokwi.com/projects/302214836102627848) - How to use a resistor as a pull-down for a button
