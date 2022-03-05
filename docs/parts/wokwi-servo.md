---
title: wokwi-servo Reference
sidebar_label: wokwi-servo
---

A standard Micro Servo Motor

<wokwi-servo />

## Pin names

| Name | Description           |
| ---- | --------------------- |
| PWM  | Servo control signal  |
| V+   | Positive voltage (5V) |
| GND  | Ground                |

## Attributes

| Name      | Description                              | Default value |
| --------- | ---------------------------------------- | ------------- |
| horn      | Horn type: "single", "double" or "cross" | "single"      |
| hornColor | The color of the servo's horn            | "#ccc"        |

### Examples

| Result                           | Attrs                        |
| -------------------------------- | ---------------------------- |
| <wokwi-servo horn="single" />    | `{ "horn": "single" }`       |
| <wokwi-servo hornColor="#008" /> | `{ "hornColor": "#000088" }` |
| <wokwi-servo horn="double" />    | `{ "horn": "double" }`       |
| <wokwi-servo horn="cross" />     | `{ "horn": "cross" }`        |

## Simulator examples

- [Sweep](https://wokwi.com/arduino/libraries/Servo/Sweep)
- [Knob](https://wokwi.com/arduino/libraries/Servo/Knob)
- [Arduino Uno controlling 5 servos](https://wokwi.com/projects/305087394119418434)
- [Arduino Mega animating 32 servos](https://wokwi.com/projects/305336312628511297)