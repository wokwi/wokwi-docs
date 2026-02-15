---
title: wokwi-led-ring Reference
sidebar_label: wokwi-led-ring
---

WS2812 NeoPixel Compatible LED Ring.

<wokwi-led-ring />

## Pin names

| Name | Description                |
| ---- | -------------------------- |
| GND  | Ground                     |
| VCC  | Positive voltage supply    |
| DIN  | Data input signal          |
| DOUT | Data output (for chaining) |

## Attributes

| Name   | Description                | Default value |
| ------ | -------------------------- | ------------- |
| pixels | Number of LEDs in the ring | "16"          |

### Chaining

You can chain multiple rings by connecting the DOUT pin of one ring to the DIN pin of the next. All LEDs share the same data line and are addressed sequentially.

## Arduino code example

```cpp
#include <Adafruit_NeoPixel.h>

#define RING_PIN 2
#define NUM_PIXELS 16

Adafruit_NeoPixel ring(NUM_PIXELS, RING_PIN, NEO_GRB + NEO_KHZ800);

void setup() {
  ring.begin();
  for (int i = 0; i < NUM_PIXELS; i++) {
    ring.setPixelColor(i, ring.Color(0, 150, 0)); // Green
  }
  ring.show();
}

void loop() {
  delay(10);
}
```

## See also

- [wokwi-led-matrix](wokwi-led-matrix) - WS2812 NeoPixel Compatible LED Matrix
- [wokwi-led-strip](wokwi-led-strip) - WS2812 NeoPixel Compatible LED Strip

## Simulator examples

- [LED Ring Rainbow](https://wokwi.com/projects/437060805227413505)
- [LED Ring Animations](https://wokwi.com/projects/368816317759493121)
