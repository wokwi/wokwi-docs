---
title: wokwi-nlsf595参考
sidebar_label: wokwi-nlsf595参考
---

串行（SPI）三色LED驱动器

![NLSF595](wokwi-nlsf595.svg)

使用NLSF595移位寄存器将耗电的RGB LED连接到微控制器。一个单元可以控制两个RGB LED，一个由两个单元组成的链条最多可以控制五个RGB LED。

## 引脚名称

| Pin   | Description                                            |
| ----- | ------------------------------------------------------ |
| SI    | Serial input                                           |
| SCK   | Serial clock                                           |
| RCK   | Storage (latch) pin                                    |
| OE    | Output enable, active low. Connect to GND if not used. |
| QA…QH | Parallel output                                        |
| SQH   | Serial output\*                                        |
| SCLR  | Reset (clear), active low. Connect to VCC if not used  |
| GND   | Ground                                                 |
| VCC   | Supply voltage                                         |

\* 使用Q7S将多个NLSF595设备链接在一起。将SQH连接到链式下一个NLSF595芯片的SI引脚。

## 使用NLSF595

您需要将至少3个引脚连接到微控制器：SI、SCK和RCK。

OE引脚可用于禁用移位寄存器的输出。如果您需要该功能，请将其连接到您的微控制器。否则，将其连接到地面以永久启用输出。

移位寄存器的输出引脚QA通过QH，通常连接到共极的[RGB LEDs](wokwi-rgb-led)输入引脚。

## 仿真案例

- [NLSF595 LED Driver with 2 RGB LEDs](https://wokwi.com/projects/315085666329297472)
