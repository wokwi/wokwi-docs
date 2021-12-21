---
title: wokwi-max7219-matrix Dot Matrix Reference
sidebar_label: wokwi-max7219-matrix
---

import DotMatrix from './wokwi-max7219-matrix.svg';
import DotMatrixChain4 from './wokwi-max7219-matrix-chain-4.svg';

8x8 LED Dot Matrix with MAX7219 Controller

![MAX7219 LED Dot Matrix](wokwi-max7219-matrix.svg)

## Pin names

| Name | Description    |
| ---- | -------------- |
| VCC  | Voltage supply |
| GND  | Ground         |
| DIN  | Data input     |
| CS   | Chip Select    |
| CLK  | Clock input    |
| DOUT | Data output    |

You can chain multiple units together by connecting the DOUT pin of one unit to the DIN pin of the next unit. You also need to connect the CLK / CS pins of the units together.

## Attributes

| Name  | Description                      | Default value |
| ----- | -------------------------------- | ------------- |
| chain | How many units to chain together | "1"           |
| color | LED color (when lit)             | "red"         |

### Chaining

Each dot matrix units is an 8x8 LED matrix. All the LEDs in the matrix have the same color. You can chain multiple units horizontally by setting the "chain" attribute. For example, setting "chain" to 4 will result in 8x32 matrix (four times 8x8 matrix).

### Examples

| Result                                           | Attrs                  |
| ------------------------------------------------ | ---------------------- |
| <DotMatrix style={{'--pixel-color': 'green'}} /> | `{ "color": "green" }` |
| <DotMatrixChain4/>                               | `{ "chain": "4" }`     |

## Simulator examples

- [Dot Matrix Clock](https://wokwi.com/arduino/projects/289186888566178317)
- [Etch A Sketch game](https://wokwi.com/arduino/projects/296234816685212169)
- [Electronic Dice (on ATtiny85)](https://wokwi.com/arduino/projects/291779699024069128)
- [Arduino QR Code Generator](https://wokwi.com/arduino/projects/297148152803230218)
- [MD_Parola library examples](https://wokwi.com/arduino/libraries/MD_Parola)
