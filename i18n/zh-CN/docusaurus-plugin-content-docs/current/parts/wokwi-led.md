---
title: wokwi-led Reference
sidebar_label: wokwi-led
---

Standard 5mm LED.

<wokwi-led />

## Pin names

| Name | Description            |
| ---- | ---------------------- |
| A    | Anode (positive pin)   |
| C    | Cathode (negative pin) |

## Attributes

| Name       | Description                     | Default value        |
| ---------- | ------------------------------- | -------------------- |
| color      | The color of the LED body       | "red"                |
| lightColor | The color of the light          | depends on the color |
| label      | Text that appears below the led |                      |
| gamma      | Gamma correction factor         | "2.8"                |

### Examples

| Result                                                    | Attrs                                         |
| --------------------------------------------------------- | --------------------------------------------- |
| <wokwi-led color="green" />                               | `{ "color": "green" }`                        |
| <wokwi-led color="#FFFF00" />                             | `{ "color": "#FFFF00" }`                      |
| <wokwi-led label="Status" />                              | `{ "label": "Status" }`                       |
| <wokwi-led color="white" />                               | `{ "color": "white"}`                         |
| <wokwi-led color="white" lightColor="orange" value="1" /> | `{ "color": "white", "lightColor": "orange"}` |

### Gamma correction

The LED automatically applies gamma correction. This means that even a very short burst of current will result
in some visible light, similar to how physical LEDs work, so you get more accurate simulation in the following cases:

1. Using `analogWrite()` with very small values (short duty cycle),
2. LED scanning techniques such as [Charlieplexing](https://goodarduinocode.com/guides/charlieplexing).

You can disable the gamma correction by setting the "gamma" attribute to "1.0". You can also choose a different
gamma factor by setting this attribute to the desired value. The default gamma correction factor is 2.8.

The [Gamma Correction Demo project](https://wokwi.com/projects/304762988710068800) shows the behavior of different gamma values: the LED on the left has the default gamma factor of 2.8, while the LED on the right has a gamma factor of 1.0. You can see how lower values of `analogWrite()` look much brighter on the left LED.

## Simulator examples

- [Blink](https://wokwi.com/arduino/libraries/demo/blink) - Arduino's standard Blink sketch
