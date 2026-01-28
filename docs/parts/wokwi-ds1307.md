---
title: wokwi-ds1307 Reference
sidebar_label: wokwi-ds1307
---

RTC (Real Time Clock) module with I2C interface and 56 bytes of NV SRAM.

<wokwi-ds1307 />

## Pin names

| Name | Description           |
| ---- | --------------------- |
| GND  | Ground                |
| 5V   | Positive voltage (5V) |
| SDA  | I2C data line         |
| SCL  | I2C clock line        |
| SQW  | Square wave output    |

The I2C address of the DS1307 is 0x68.

## Attributes

| Name       | Description                                                          | Default value |
| ---------- | -------------------------------------------------------------------- | ------------- |
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

## Square Wave Output (SQW)

The SQW pin can output a square wave signal at one of four frequencies, or a static high/low level. Using the [RTClib](https://github.com/adafruit/RTClib) library, you can configure the SQW output with `writeSqwPinMode()`:

| Mode                     | Output     |
| ------------------------ | ---------- |
| `DS1307_OFF`             | LOW        |
| `DS1307_ON`              | HIGH       |
| `DS1307_SquareWave1HZ`   | 1 Hz       |
| `DS1307_SquareWave4kHz`  | 4.096 kHz  |
| `DS1307_SquareWave8kHz`  | 8.192 kHz  |
| `DS1307_SquareWave32kHz` | 32.768 kHz |

### Example

To enable a 1 Hz square wave output:

```cpp
#include <RTClib.h>

RTC_DS1307 rtc;

void setup() {
  rtc.begin();
  rtc.writeSqwPinMode(DS1307_SquareWave1HZ);
}

void loop() {
  // Your code here
}
```

## Simulator examples

- [Reading current date/time using RTClib](https://wokwi.com/projects/305979285237137984)
- [Alarm clock](https://wokwi.com/projects/297787059514376717)
