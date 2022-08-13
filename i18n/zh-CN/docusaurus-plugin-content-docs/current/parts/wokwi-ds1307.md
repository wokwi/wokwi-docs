---
title: wokwi-ds1307参考
sidebar_label: wokwi-ds1307参考
---

带有I2C接口和56字节NV SRAM的RTC（实时时钟）模块。

<wokwi-ds1307 />

## 引脚名称

| Name | Description              |
| ---- | ------------------------ |
| GND  | Ground                   |
| 5V   | Positive voltage (5V)    |
| SDA  | I2C 数据线               |
| SCL  | I2C 时钟线               |
| SQW  | 方波输出。模拟中不可用。 |

DS1307的I2C地址是0x68。

## 仿真工作

模拟的DS1307在开始模拟时会自动初始化为当前系统时间。然后它继续数时间。

仿真中运行的代码可以更新DS1307的日期/时间，DS1307将跟踪更新时间。

## 仿真案例

- [Reading current date/time using RTClib](https://wokwi.com/projects/305979285237137984)
- [Alarm clock](https://wokwi.com/playground/alarm-clock)
