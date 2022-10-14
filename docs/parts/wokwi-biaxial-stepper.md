---
title: wokwi-biaxial-stepper Reference
sidebar_label: wokwi-biaxial-stepper
---

A concentric biaxial stepper motor, containing two stepper motors packaged in a single enclosure.

<wokwi-biaxial-stepper innerHandAngle="90" />

## Pin names

| Name | Description                                |
| ---- | ------------------------------------------ |
| A1-  | Outer shaft motor's coil A negative signal |
| A1+  | Outer shaft motor's coil A positive signal |
| B1+  | Outer shaft motor's coil B positive signal |
| B1-  | Outer shaft motor's coil B negative signal |
| A2-  | Inner shaft motor's coil A negative signal |
| A2+  | Inner shaft motor's coil A positive signal |
| B2+  | Inner shaft motor's coil B positive signal |
| B2-  | Inner shaft motor's coil B negative signal |

## Attributes

| Name            | Description                                                        | Default value |
| --------------- | ------------------------------------------------------------------ | ------------- |
| outerHandLength | The length of the outer shaft's hand, between "20" and "70"        | "30"          |
| outerHandColor  | The color of the outer shaft's hand                                | "gold"        |
| outerHandShape  | The shape of the outer shaft's hand: "plain", "arrow", or "ornate" | "plain"       |
| innerHandLength | The length of the inner shaft's hand, between "20" and "70"        | "30"          |
| innerHandColor  | The color of the inner shaft's hand                                | "silver"      |
| innerHandShape  | The shape of the inner shaft's hand: "plain", "arrow", or "ornate" | "plain"       |

### Examples

| Result                                                                                                                                 | Attrs                                                                                 |
| -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| <wokwi-biaxial-stepper innerHandLength="40" innerHandShape="arrow" outerHandAngle="90" />                                              | `{ "innerHandLength": "40", "innerHandShape": "arrow" }`                              |
| <wokwi-biaxial-stepper innerHandShape="ornate" innerHandColor="red" outerHandShape="ornate" FouterHandAngle="45" outerHandAngle="90"/> | `{ "innerHandColor": "red", "innerHandShape": "ornate", "outerHandShape": "ornate" }` |

## Using the biaxial stepper motor

The biaxial stepper motor is made of two individual stepper motor. Check out the [wokwi-stepper-motor](./wokwi-stepper-motor#using-the-stepper-motor) and [wokwi-a4988](./wokwi-a4988) documentation for more information about using stepper motors and their simulation behavior.

## Simulator examples

- [Arduino Uno driving a Biaxial Stepper Motor](https://wokwi.com/projects/344254821712265811)
- [Biaxial Motor with two A4988 drivers](https://wokwi.com/projects/345206751024382546)
