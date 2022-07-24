---
title: wokwi-ssd1306 Reference
sidebar_label: wokwi-ssd1306
---

Monochrome 128x64 OLED display with I2C interface

<wokwi-ssd1306 />

Note: this part has been deprecated. Please use [board-ssd1306](./board-ssd1306) instead.

## Pin names

| Name        | Description           | Arduino Uno pin |
| ----------- | --------------------- | --------------- |
| DATA        | I2C data line (SDA)   | A4              |
| CLK         | I2C clock line (SCL)  | A5              |
| DC, RST, CS | Unused\*              | -               |
| 3V3         | 3.3V regulated output | -               |
| GND         | Ground                | GND             |
| VIN         | Supply voltage        | 5V              |

\* DC, RST and CS are for SPI mode. The SSD1306 simulation only supports I2C mode, so these pins are not functional.

The default I2C address of the SSD1306 module is 0x3c (60).

## Attributes

| Name        | Description                | Default value |
| ----------- | -------------------------- | ------------- |
| i2c-address | I2C address of the display | "0x3c"        |

## Simulator examples

See [board-ssd1306](board-ssd1306#simulator-examples).
