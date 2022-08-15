---
title: wokwi-tm1637-7segment参考
sidebar_label: wokwi-tm1637-7segment参考
---

TM1637——4线接口的七段LED显示模块

![Wokwi TM1637 Seven Segment](wokwi-tm1637-7segment.svg)

## 引脚名称

| Name | Description |
| ---- | ----------- |
| CLK  | 时钟线      |
| DIO  | 数据线      |
| VCC  | 电源        |
| GND  | 接地        |

## 属性

| Name  | Description | Default value |
| ----- | ----------- | ------------- |
| color | 段LED的颜色 | "red"         |

## 使用 7 段显示器

七段显示器的这种变体使用TM1637芯片。您只需要2个微控制器引脚即可与它通信。

TM1637通信协议不标准。它类似于I2C协议，但它更简单，与I2C不兼容。幸运的是，您可以使用库，而不必担心协议的实现。以下是您可以在Arduino上使用的一些TM1637库： [SevenSegmentTM1637@1.0.0](https://github.com/bremme/arduino-tm1637)，Grove 4-Digit Display。

## 仿真实例

- [TM1637 Counter](https://wokwi.com/projects/339227323398095442)
- [TM1637 Clock](https://wokwi.com/projects/339227567530705492)
