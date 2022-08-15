---
title: wokwi-ili9341 Reference
sidebar_label: wokwi-ili9341
---

使用SPI接口的全彩240X320的LCD-TFT显示屏

<wokwi-ili9341 />

## 引脚名称

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

\* RST和背光灯（LED）引脚在模拟中不可用。  
† 您可以将CS和D/C连接到任何数字Arduino引脚。这里的引脚数字只是一个例子。  
‡ 您可以断开MISO的连接，除非您需要从LCD读取数据。

## 属性

| Name           | Description               | Default value |
| -------------- | ------------------------- | ------------- |
| flipHorizontal | 设置为“1”以水平翻转显示器 | ""            |
| flipVertical   | 设置为“1”以垂直翻转显示器 | ""            |

## 在Arduino使用

您可以使用_Adafruit_ILI9341_库或_lcdgfx_库驱动液晶显示器接口。以下代码示例显示了_Adafruit_ILI9341_的基本用法。它适用于上表中的引脚连接：

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

## 仿真案例

- [Adafruit ILI9341 GFX Example](https://wokwi.com/projects/307567201804616256)
- [Fingerprint Pattern](https://wokwi.com/projects/307567963154678338)
- [Mandelbrot Set](https://wokwi.com/projects/307567275170333248)
- [Neon Ribbons](https://wokwi.com/projects/307577144545903170)
- [Wokwi Logo over Plamsa](https://wokwi.com/projects/307664460274729536)
- [Lode Runner with lcdgfx](https://wokwi.com/projects/308022099088245312)
