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
| ---------- | ------------------------------- | ---------------------|
| color      | The color of the LED button     | "red"                |
| lightColor | The color of the light          | depends on the color |
| label      | Text that appears below the led |                      |

### Examples

| Result                                                    | Attrs                                         |
| --------------------------------------------------------- | --------------------------------------------- |
| <wokwi-led color="green" />                               | `{ "color": "green" }`                        |
| <wokwi-led color="#FFFF00" />                             | `{ "color": "#FFFF00" }`                      |
| <wokwi-led label="Status" />                              | `{ "label": "Status" }`                       |
| <wokwi-led color="white" />                               | `{ "color": "white"}`                         |
| <wokwi-led color="white" lightColor="orange" value="1" /> | `{ "color": "white", "lightColor": "orange"}` |

## Simulator examples

- [Blink](https://wokwi.com/arduino/libraries/demo/blink) - Arduino's standard Blink sketch
