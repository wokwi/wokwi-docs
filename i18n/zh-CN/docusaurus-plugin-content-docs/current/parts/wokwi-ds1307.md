---
title: wokwi-ds1307 Reference
sidebar_label: wokwi-ds1307
---

RTC (Real Time Clock) module with I2C interface and 56 bytes of NV SRAM.

<wokwi-ds1307 />

## Pin names

| Name | Description                                          |
| ---- | ---------------------------------------------------- |
| GND  | Ground                                               |
| 5V   | Positive voltage (5V)                                |
| SDA  | I2C data line                                        |
| SCL  | I2C clock line                                       |
| SQW  | Square wave output. Not available in the simulation. |

The I2C address of the DS1307 is 0x68.

## Simulation Behavior

The simulated DS1307 is automatically initialized to the current system time when starting the simulation. It
then keeps counting the time.

The code running in the simulation can update the date/time of the DS1307, and the DS1307 will keep track
of the update time.

## Simulator examples

- [Reading current date/time using RTClib](https://wokwi.com/projects/305979285237137984)
- [Alarm clock](https://wokwi.com/playground/alarm-clock)
