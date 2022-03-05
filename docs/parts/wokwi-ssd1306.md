---
title: wokwi-ssd1306 Reference
sidebar_label: wokwi-ssd1306
---

Monochrome 128x64 OLED display with I2C interface

<wokwi-ssd1306 />

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

## Using in Arduino

You can choose between several SSD1306 Arduino libraries:

- [Adafruit SSD1306](https://wokwi.com/arduino/libraries/Adafruit_SSD1306)
- [ssd1306](https://wokwi.com/arduino/libraries/ssd1306)
- [lcdgfx](https://wokwi.com/arduino/libraries/lcdgfx)
- [U8glib](https://github.com/olikraus/u8glib)
- [U8g2](https://github.com/olikraus/u8g2) (also U8x8)
- [SSD1306Ascii](https://github.com/greiman/SSD1306Ascii)
- [Tiny4kOLED](https://www.arduino.cc/reference/en/libraries/tiny4koled/) - for ATtiny85 users

All the above libraries are available on Wokwi.

## Simulator examples

- [SSD1306 Snake Game](https://wokwi.com/projects/296135008348799496) (using Adafruit SSD1306)
- [ATtiny85 Digital Temperature + Humidity on SSD1306](https://wokwi.com/projects/292900020514980360)
- [U8glib Progress Bar](https://wokwi.com/projects/300867986768527882)
- [SSD1306Ascii Fonts](https://wokwi.com/projects/291197274604700168)
- [Adafruit SSD1306 Showcase](https://wokwi.com/arduino/libraries/Adafruit_SSD1306/ssd1306_128x64_i2c)
- [U8g2 Menu](https://wokwi.com/projects/291572875238834696)
