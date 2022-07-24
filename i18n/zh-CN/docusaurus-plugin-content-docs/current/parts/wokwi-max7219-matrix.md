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

## Attributes

| Name   | Description                                  | Default value |
| ------ | -------------------------------------------- | ------------- |
| chain  | How many units to chain together             | "1"           |
| color  | LED color (when lit)                         | "red"         |
| layout | Matrix connection layout: "parola" or "fc16" | "parola"      |

### Chaining

Each dot matrix units is an 8x8 LED matrix. All the LEDs in the matrix have the same color. You can make the display wider by setting the "chain" attribute. For example, setting "chain" to 4 will chain four dot matrix units horizontally, resulting in 32x8 matrix (four times 8x8 matrix).

If you want to chain units in a custom way (e.g. select a different pixel color for each unit, chain them vertically, etc), connect the DOUT pin of one unit to the DIN pin of the next unit. You also need to connect the CLK / CS pins of the units together. See [32x32 LED Matrix Tunnel](https://wokwi.com/projects/318864638990090834) for an example.

### Matrix layout

There are several type of matrix layout, based on the commonly available modules. You can set the "layout" property to choose the desired pixel layout:

- "parola" - See the [Parola documentation](https://majicdesigns.github.io/MD_MAX72XX/page_parola.html) for information about the layout of these modules
- "fc16" - The FC-16 modules are available from EBay and AliExpress. They usually come in a chain of four 8x8 matrices, so they have 32x8 pixels in total.

Choosing the wrong layout will cause your text / drawing to be rotated and / or mirrored.

### Examples

| Result                                           | Attrs                  |
| ------------------------------------------------ | ---------------------- |
| <DotMatrix style={{'--pixel-color': 'green'}} /> | `{ "color": "green" }` |
| <DotMatrixChain4/>                               | `{ "chain": "4" }`     |

## Simulator examples

- [Dot Matrix Clock](https://wokwi.com/projects/289186888566178317)
- [Etch A Sketch game](https://wokwi.com/projects/296234816685212169)
- [Electronic Dice (on ATtiny85)](https://wokwi.com/projects/291779699024069128)
- [Arduino QR Code Generator](https://wokwi.com/projects/318641692720759379)
- [32x32 LED Matrix Tunnel](https://wokwi.com/projects/318864638990090834)
- [MD_Parola library examples](https://wokwi.com/arduino/libraries/MD_Parola)
