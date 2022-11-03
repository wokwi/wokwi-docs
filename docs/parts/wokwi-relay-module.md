---
title: Relay Module Reference
sidebar_label: wokwi-relay-module
---

 Electrically operated switch

![Relay-Module](wokwi-relay-module.svg)

## Pin names

| Name | Description                                 |
| ---- | ------------------------------------------- |
| VCC  | Supply voltage                              |
| GND  | Ground                                      |
| IN   | Control signal (e.g. from micro-controller) |
| NC   | Normally closed                             |
| COM  | Common pin                                  |
| NO   | Normally open                               |

## Operation

The relay is an electronic switch. 

When the `IN` pin is low / disconnected, `COM` is connected to `NC` (NC means normally closed).

When the `IN` pin is high, `COM` is connected to `NO` (NO means normally open).




## Simulator Examples

- [One relay module controlling two LEDs](https://wokwi.com/projects/347308007359513172)

