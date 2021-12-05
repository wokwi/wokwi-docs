---
title: wokwi-led-bar-graph Reference
sidebar_label: wokwi-led-bar-graph
---

10-segment LED Bar Graph.

<wokwi-led-bar-graph values='[1,1,1,1,1,1,1,1,1,1]' />

## Pin names

| Name   | Description                                    |
| ------ | ---------------------------------------------- |
| A**n** | Anode (positive pin) of LED **n** (n = 1…10)   |
| C**n** | Cathode (negative pin) of LED **n** (n = 1…10) |

e.g. A1 is the anode of the top LED, and C1 is the cathode of the top LED.

## Attributes

| Name  | Description                                                              | Default value |
| ----- | ------------------------------------------------------------------------ | ------------- |
| color | The color of the LED body, or one of the special values "GYR" / "BCYR"\* | "red"         |

\* GYR means Green-Yellow-Red. BCYR means Cyan-Blue-Yellow-Red

### Examples

| Result                                                                  | Attrs                    |
| ----------------------------------------------------------------------- | ------------------------ |
| <wokwi-led-bar-graph  values='[1,1,1,1,1,1,1,1,1,1]' color="yellow" />  | `{ "color": "yellow" }`  |
| <wokwi-led-bar-graph  values='[1,1,1,1,1,1,1,1,1,1]' color="#9EFF3C" /> | `{ "color": "#9EFF3C" }` |
| <wokwi-led-bar-graph  values='[1,1,1,1,1,1,1,1,1,1]' color="GYR" />     | `{ "color": "GYR"}`      |
| <wokwi-led-bar-graph  values='[1,1,1,1,1,1,1,1,1,1]' color="BCYR"  />   | `{ "color": "BCYR"}`     |

## Simulator examples

- [Arduino LED Graph Bar](https://wokwi.com/arduino/projects/309829489359061570) - Move the potentiometer knob to control the LEDs
- [Raspberry Pi Pico Binary Counter](https://wokwi.com/arduino/projects/309828467927548481)
