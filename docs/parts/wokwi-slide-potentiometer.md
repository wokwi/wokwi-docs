---
title: wokwi-slide-potentiometer Reference
sidebar_label: wokwi-slide-potentiometer
---

Sliding variable resistor (linear potentiometer)

<wokwi-slide-potentiometer />

The function and pin-out of the slide potentiometer are same as [wokwi-potentiometer](wokwi-potentiometer). Check out the [wokwi-potentiometer docs](wokwi-potentiometer) for more information.

## Attributes

| Name         | Description                                                                                                                | Default value |
| ------------ | -------------------------------------------------------------------------------------------------------------------------- | ------------- |
| value        | Initial value of the potentiometer, between 0 and 1023                                                                     | "0"           |
| travelLength | Travel length of the tip (mm). Controls the width of the potentiometer.<br />Common values: "15", "20", "30", "45", "60", "100" | "30"          |

### Examples

| Result                                           | Attrs                       |
| ------------------------------------------------ | --------------------------- |
| <wokwi-slide-potentiometer travelLength="15" />  | `{ "travelLength": "15" }`  |
| <wokwi-slide-potentiometer travelLength="60" />  | `{ "travelLength": "60" }`  |
| <wokwi-slide-potentiometer travelLength="100" /> | `{ "travelLength": "100" }` |

## Simulator examples

- [Slide potentiometer + Servo](https://wokwi.com/projects/297604176384360973) - Control a [servo](wokwi-servo) with a slide potentiometer
