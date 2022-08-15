---
title: wokwi-ssd1306显示模块参考
sidebar_label: wokwi-ssd1306参考
---

具有I2C接口的单色128x64 OLED显示器

<wokwi-ssd1306 />

注：此部件已被弃用。请改用[board-ssd1306](./board-ssd1306)。

## 引脚名称

| Name        | Description           | Arduino Uno pin |
| ----------- | --------------------- | --------------- |
| DATA        | I2C data line (SDA)   | A4              |
| CLK         | I2C clock line (SCL)  | A5              |
| DC, RST, CS | Unused\*              | -               |
| 3V3         | 3.3V regulated output | -               |
| GND         | Ground                | GND             |
| VIN         | Supply voltage        | 5V              |

\* DC、RST和CS适用于SPI模式。SSD1306模拟仅支持I2C模式，因此这些引脚不起作用。

SSD1306模块的默认I2C地址为0x3c（60）。

## 属性

| Name        | Description                | Default value |
| ----------- | -------------------------- | ------------- |
| i2c-address | I2C address of the display | "0x3c"        |

## 仿真实例

See [board-ssd1306](board-ssd1306#simulator-examples).
