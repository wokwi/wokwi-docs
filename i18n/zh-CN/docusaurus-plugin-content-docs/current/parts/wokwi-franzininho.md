---
title: wokwi-franzininho参考
sidebar_label: wokwi-franzininho参考
---

一个基于ATtiny85的小型开发板，在巴西很受欢迎。

<wokwi-franzininho></wokwi-franzininho>

## 关于Franzininho

Franzininho DIY在巴西设计的开源Arduino兼容板中。它是基于在ATtiny85芯片上，因此请参阅[ATtiny85 documentation](wokwi-attiny85) 了解技术信息。

黄色LED（LED1）连接到ATtiny85芯片的引脚PB1。您可以进一步了解 [Franzininho homepage](https://franzininho.com.br/) （葡萄牙语）中的开发板及其背后的人。

## 引脚名称

| Pin | ATtiny85 Pin | Functions             | Analog Channel | PWM |
| --- | ------------ | --------------------- | -------------- | --- |
| 0   | PB0          | SPI:MOSI, I2C:SDA     |                | Yes |
| 1   | PB1          | SPI:MISO, LED1        |                | Yes |
| 2   | PB2          | SPI:SCK, I2C:SCL      | A1             | -   |
| 3   | PB3          |                       | A3             | -   |
| 4   | PB5          | Reset                 | A0             | -   |
| 5   | PB4          |                       | A2             | Yes |
| VCC | VCC          | Positive voltage (5V) |                | -   |
| GND | GND          | Ground                |                | -   |

### 板载Led

主板包括两个3毫米LED：

| LED  | Color  | Function                    |
| ---- | ------ | --------------------------- |
| ON   | Green  | 电源LED。模拟运行时始终打开 |
| LED1 | Yellow | 连接到PB1                   |

## 仿真案例

- [Franzininho Blink](https://wokwi.com/projects/301693553069785610)
- [Franzininho Clock](https://wokwi.com/projects/301738586036765194), using two [74HC595 shift registers](wokwi-74hc595) and [DS1307 RTC](wokwi-ds1307)
- [Franzininho Analog Temperature Sensor](https://wokwi.com/projects/301751077214093834), using [NTC thermistor](wokwi-ntc-temperature-sensor) and [SSD1306](wokwi-ssd1306)
- [Franzininho Digital Humidity and Temperature](https://wokwi.com/projects/301745949656482317), using [DHT22](wokwi-dht22) and [SSD1306](wokwi-ssd1306)
- [Ultrasonic Sensor](https://wokwi.com/projects/302020345098928648), using [74HC595](wokwi-74hc595) and HC-SR04
- [Servo Motor control](https://wokwi.com/projects/302291615188255242), using [Motor Micro Servo](wokwi-servo) and [LCD1602](wokwi-lcd1602)
- [External pulse counter](https://wokwi.com/projects/302199144424931848)
