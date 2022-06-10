---
title: wokwi-ili9341 Reference
sidebar_label: wokwi-ili9341
---

Full color 240x320 2.8" LCD-TFT display with SPI interface

<wokwi-ili9341 />

## Pin names

| #   | Name | Description           | Arduino Uno pin |
| --- | ---- | --------------------- | --------------- |
| 1   | VCC  | Supply voltage        | 5V              |
| 2   | GND  | Ground                | GND             |
| 3   | CS   | Chip select           | 10†             |
| 4   | RST  | Reset\*               | -               |
| 5   | D/C  | Data/command pin      | 9†              |
| 6   | MOSI | SPI data (MCU → LCD)  | 11              |
| 7   | SCK  | SPI clock             | 13              |
| 8   | LED  | Backlight LED\*       | 5V              |
| 9   | MISO | SPI data (LCD → MCU)‡ | 12              |

\* The RST and backlight (LED) pins are not available in the simulation.  
† You connect CS and D/C to any digital Arduino pin. The pin numbers here are just an example.  
‡ You can leave MISO disconnected, unless you need to read data back from the LCD.

## Attributes

| Name           | Description                                 | Default value |
| -------------- | ------------------------------------------- | ------------- |
| flipHorizontal | Set to "1" to flip the display horizontally | ""            |
| flipVertical   | Set to "1" to flip the display vertically   | ""            |

## Using in Arduino

You can use the _Adafruit_ILI9341_ library or the _lcdgfx_ library to interface with the LCD display. The following code example shows basic usage with _Adafruit_ILI9341_. It works with the pin connections from the table above:

```cpp
#include "SPI.h"
#include "Adafruit_GFX.h"
#include "Adafruit_ILI9341.h"

#define TFT_DC 9
#define TFT_CS 10
Adafruit_ILI9341 tft = Adafruit_ILI9341(TFT_CS, TFT_DC);

void setup() {
  tft.begin();

  tft.setCursor(26, 120);
  tft.setTextColor(ILI9341_RED);
  tft.setTextSize(3);
  tft.println("Hello, TFT!");

  tft.setCursor(20, 160);
  tft.setTextColor(ILI9341_GREEN);
  tft.setTextSize(2);
  tft.println("I can has colors?");
}

void loop() { }
```

[Run this example on Wokwi](https://wokwi.com/projects/308024602434470466)

## Simulator examples

- [Adafruit ILI9341 GFX Example](https://wokwi.com/projects/307567201804616256)
- [Fingerprint Pattern](https://wokwi.com/projects/307567963154678338)
- [Mandelbrot Set](https://wokwi.com/projects/307567275170333248)
- [Neon Ribbons](https://wokwi.com/projects/307577144545903170)
- [Wokwi Logo over Plamsa](https://wokwi.com/projects/307664460274729536)
- [Lode Runner with lcdgfx](https://wokwi.com/projects/308022099088245312)
