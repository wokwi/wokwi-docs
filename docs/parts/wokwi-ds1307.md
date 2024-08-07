---
title: wokwi-ds1307 Reference
sidebar_label: wokwi-ds1307
---

RTC (Real Time Clock) module with I2C interface and 56 bytes of NV SRAM.

<wokwi-ds1307 />

## Pin names

| Name | Description                                          |
|------|------------------------------------------------------|
| GND  | Ground                                               |
| 5V   | Positive voltage (5V)                                |
| SDA  | I2C data line                                        |
| SCL  | I2C clock line                                       |
| SQW  | Square wave output. Not available in the simulation. |

The I2C address of the DS1307 is 0x68.

## Attributes

| Name       | Description                                                          | Default value |
|------------|----------------------------------------------------------------------|---------------|
| `initTime` | Initial time of the RTC: "0", "now", or a valid ISO 8601 date string | "now"         |

## Simulation Behavior

The simulated DS1307 is automatically initialized to the current system time when starting the simulation. It
then keeps counting the time. You can override the initial time by setting the `initTime` attribute to a different
value. The value can be either a valid ISO 8601 date string (e.g. "2019-11-19T11:41:56Z"), or one of the following
special values:

- "0" - Set the initial time to "2000-01-01T00:00:00Z"
- "now" - Set the initial time to the current system time

Note that "Z" at the end of the date string indicates that the time is in UTC, and not in the local time zone.
If you omit the "Z", the time will be interpreted as local time.

The code running in the simulation can update the date/time of the DS1307, and the DS1307 will keep track
of the updated time.

## Simulator examples

- [Reading current date/time using RTClib](https://wokwi.com/projects/305979285237137984)
- [Alarm clock](https://wokwi.com/projects/297787059514376717)
