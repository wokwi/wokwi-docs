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
| flip       | Flips the led horizontally      | ""                   |
| fps        | The framerate of the LED        | "80"                 |

Note: To rotate LEDs, click on them and press "R", or set the ["rotate" property](../diagram-format#parts).

### Examples

| Result                                                    | Attrs                                         |
| --------------------------------------------------------- | --------------------------------------------- |
| <wokwi-led color="green" />                               | `{ "color": "green" }`                        |
| <wokwi-led color="#FFFF00" />                             | `{ "color": "#FFFF00" }`                      |
| <wokwi-led label="Status" />                              | `{ "label": "Status" }`                       |
| <wokwi-led color="white" />                               | `{ "color": "white"}`                         |
| <wokwi-led color="white" lightColor="orange" value="1" /> | `{ "color": "white", "lightColor": "orange"}` |
| <wokwi-led color="red" flip="1"/>                         | `{ "color": "red", "flip": "1"}`              |

### Gamma correction

The LED automatically applies gamma correction. This means that even a very short burst of current will result
in some visible light, similar to how physical LEDs work, so you get more accurate simulation in the following cases:

1. Using `analogWrite()` with very small values (short duty cycle),
2. LED scanning techniques such as [Charlieplexing](https://goodarduinocode.com/guides/charlieplexing).

You can disable the gamma correction by setting the "gamma" attribute to "1.0". You can also choose a different
gamma factor by setting this attribute to the desired value. The default gamma correction factor is 2.8.

The [Gamma Correction Demo project](https://wokwi.com/projects/304762988710068800) shows the behavior of different gamma values: the LED on the left has the default gamma factor of 2.8, while the LED on the right has a gamma factor of 1.0. You can see how lower values of `analogWrite()` look much brighter on the left LED.

For more information about _gamma correction_, including some code examples, check out this [great guide from Adafruit](https://learn.adafruit.com/led-tricks-gamma-correction).

### FPS

The `fps` attribute controls the framerate of the LED, that is how often the LED brightness is updated. The default value is 80.

If you are using PWM (`analogWrite()`) and noticing flickering, try setting a smaller the `fps` value.

In case you are experiencing LED light ghosting, you can try increasing the `fps` value. For example, this [rotating cube](https://wokwi.com/projects/355020415991153665) uses an `fps` value of 10000 to update the LEDs at a higher rate and avoid ghosting of the rotating cube.

## Simulator examples

- [Blink](https://wokwi.com/projects/344891652101374548) - Arduino's standard Blink sketch
- [Fade](https://wokwi.com/projects/313268562698437186) - Using analogWrite() + gamma correction
