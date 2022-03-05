---
title: wokwi-franzininho Reference
sidebar_label: wokwi-franzininho
---

A small ATtiny85-based development board, popular in Brazil.

<wokwi-franzininho></wokwi-franzininho>

## About the Franzininho

The Franzininho DIY in an open-source, Arduino-compatible board designed in Brazil. It's based
on the ATtiny85 chip, so please consult the [ATtiny85 documentation](wokwi-attiny85) for technical
information.

The yellow LED (LED1) is connected to pin PB1 of the ATtiny85 chip. You can learn more about
the board and the people behind it in the [Franzininho homepage](https://franzininho.com.br/) (Portuguese).

## Pin names

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

### On board LEDs

The board includes two 3mm LEDs:

| LED  | Color  | Function                                             |
| ---- | ------ | ---------------------------------------------------- |
| ON   | Green  | Power LED. Always on while the simulation is running |
| LED1 | Yellow | Connected to pin PB1                                 |

## Simulator examples

- [Franzininho Blink](https://wokwi.com/projects/301693553069785610)
- [Franzininho Clock](https://wokwi.com/projects/301738586036765194), using two [74HC595 shift registers](wokwi-74hc595) and [DS1307 RTC](wokwi-ds1307)
- [Franzininho Analog Temperature Sensor](https://wokwi.com/projects/301751077214093834), using [NTC thermistor](wokwi-ntc-temperature-sensor) and [SSD1306](wokwi-ssd1306)
- [Franzininho Digital Humidity and Temperature](https://wokwi.com/projects/301745949656482317), using [DHT22](wokwi-dht22) and [SSD1306](wokwi-ssd1306)
- [Ultrasonic Sensor](https://wokwi.com/projects/302020345098928648), using [74HC595](wokwi-74hc595) and HC-SR04
- [Servo Motor control](https://wokwi.com/projects/302291615188255242), using [Motor Micro Servo](wokwi-servo) and [LCD1602](wokwi-lcd1602)
- [External pulse counter](https://wokwi.com/projects/302199144424931848)
