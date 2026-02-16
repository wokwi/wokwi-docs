---
title: wokwi-neopixel Reference
sidebar_label: wokwi-neopixel
---

WS2812 NeoPixel Compatible Addressable LED.

<wokwi-neopixel />

## Pin names

| Name | Description             |
| ---- | ----------------------- |
| VDD  | Positive voltage supply |
| DOUT | Data output             |
| VSS  | Ground                  |
| DIN  | Data input signal       |

### Chaining

You can chain multiple NeoPixels by connecting the DOUT pin of one to the DIN pin of the next. All LEDs share the same data line and are addressed sequentially.

For larger numbers of LEDs, consider using the [LED Strip](./wokwi-led-strip), [LED Ring](./wokwi-led-ring), or [LED Matrix](./wokwi-led-matrix) parts instead.

## Arduino code example

```cpp
#include <Adafruit_NeoPixel.h>

#define LED_PIN 6

Adafruit_NeoPixel pixel(1, LED_PIN, NEO_GRB + NEO_KHZ800);

void setup() {
  pixel.begin();
  pixel.setPixelColor(0, pixel.Color(150, 0, 0)); // Red
  pixel.show();
}

void loop() {
  delay(100);
}
```

## Simulator examples

- [NeoPixel Red-Yellow-Green](https://wokwi.com/projects/456120200854327297)
