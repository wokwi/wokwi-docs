---
title: wokwi-tm1637-7segment Reference
sidebar_label: wokwi-tm1637-7segment
---

Seven segment LED display module with TM1637 4-wire interface

![Wokwi TM1637 Seven Segment](wokwi-tm1637-7segment.svg)

## Pin names

| Name | Description    |
| ---- | -------------- |
| CLK  | Clock input    |
| DIO  | Data input \*  |
| VCC  | Supply voltage |
| GND  | Ground         |

\* The DIO pin is also used for acknowledging the data received from the microcontroller, by pulling it down at a specific clock cycle.

## Attributes

| Name  | Description                   | Default value |
| ----- | ----------------------------- | ------------- |
| color | The color of the segment LEDs | "red"         |

## Using the 7-segment display

This variant of the seven segment display uses the TM1637 chip. You'll only need 2 microcontroller pins to communicate with it.

The TM1637 communication protocol is non-standard. It resembles the I2C protocol, but it is simpler and incompatible with I2C. Luckily, you can use a library and not worry about the implementation of the protocol. Here are some TM1637 libraries you can use on Arduino: RT1637_RT(https://github.com/RobTillaart/TM1637_RT), Grove 4-Digit Display.

## Simulator examples

- [TM1637 Counter](https://wokwi.com/projects/339227323398095442)
- [Three TM1637 displays](https://wokwi.com/projects/356661328560439297)
- [TM1637 Thermometer (MicroPython on Pi Pico)](https://wokwi.com/projects/339373435833549395)
