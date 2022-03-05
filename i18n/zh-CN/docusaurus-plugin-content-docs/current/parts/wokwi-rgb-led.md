---
title: wokwi-rgb-led Reference
sidebar_label: wokwi-rgb-led
---

5mm Red, Green and Blue (RGB) LED.

<wokwi-rgb-led />

## Pin names

| Name | Description  |
| ---- | ------------ |
| R    | Red LED      |
| G    | Green LED    |
| B    | Blue LED     |
| COM  | Common pin\* |

\* By default, the common pin is the anode (positive). You can change it by setting the "common" attribute to "cathode".

## Attributes

| Name   | Description                               | Default value |
| ------ | ----------------------------------------- | ------------- |
| common | The common pin type: "cathode" or "anode" | "anode"       |

## Simulator examples

- [RGB LED with 3 linear sliders](https://wokwi.com/projects/306455554559050306)
- [Soft pulsating RGB LED](https://wokwi.com/projects/306461175146611264)
