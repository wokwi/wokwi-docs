---
title: board-ssd1306显示模块参考
sidebar_label: board-ssd1306显示模块
---

具有I2C接口的单色128x64 OLED显示器

![SSD1306](https://raw.githubusercontent.com/wokwi/wokwi-boards/master/boards/ssd1306/board.svg)

## 引脚名称

| 名称 | 介绍      | Arduino Uno pin |
| ---- | --------- | --------------- |
| GND  | 接地      | GND             |
| VCC  | 接电源    | 5V              |
| SCL  | I2C时钟线 | A5              |
| SDA  | I2C数据线 | A4              |

SSD1306模块的默认I2C地址为0x3c（60）。

## 属性

| Name        | Description     | Default value |
| ----------- | --------------- | ------------- |
| i2c-address | 显示器的I2C地址 | "0x3c"        |

## 在Arduino中使用

您可以在几个SSD1306 Arduino库之间进行选择：

- [Adafruit SSD1306](https://wokwi.com/arduino/libraries/Adafruit_SSD1306)
- [ssd1306](https://wokwi.com/arduino/libraries/ssd1306)
- [lcdgfx](https://wokwi.com/arduino/libraries/lcdgfx)
- [U8glib](https://github.com/olikraus/u8glib)
- [U8g2](https://github.com/olikraus/u8g2) (also U8x8)
- [SSD1306Ascii](https://github.com/greiman/SSD1306Ascii)
- [Tiny4kOLED](https://www.arduino.cc/reference/en/libraries/tiny4koled/) - for ATtiny85 users

上述所有库都可以在Wokwi上找到。

## 仿真案例

- [SSD1306 Snake Game](https://wokwi.com/projects/296135008348799496) (using Adafruit SSD1306)
- [ATtiny85 Digital Temperature + Humidity on SSD1306](https://wokwi.com/projects/292900020514980360)
- [U8glib Progress Bar](https://wokwi.com/projects/300867986768527882)
- [SSD1306Ascii Fonts](https://wokwi.com/projects/291197274604700168)
- [Adafruit SSD1306 Showcase](https://wokwi.com/arduino/libraries/Adafruit_SSD1306/ssd1306_128x64_i2c)
- [U8g2 Menu](https://wokwi.com/projects/291572875238834696)
