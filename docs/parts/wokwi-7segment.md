---
title: wokwi-7segment Reference
sidebar_label: wokwi-7segment
---

Seven segment LED display

<wokwi-7segment />

## Pin names

| Name | Description          |
| ---- | -------------------- |
| A    | Top segment          |
| B    | Top-right segment    |
| C    | Bottom-right segment |
| D    | Bottom segment       |
| E    | Bottom-left segment  |
| F    | Top-left segment     |
| G    | Middle segment       |
| DP   | Dot LED              |
| COM  | Common pin\*         |
| DIG1 | Digit 1 pin\*        |
| DIG2 | Digit 2 pin\*        |
| DIG3 | Digit 3 pin\*        |
| DIG4 | Digit 4 pin\*        |
| CLN  | Colon pin (optional) |

\* COM is the common pin for a single digit 7-segment display. For multi digit displays, use DIG1…DIG4.

By default, the segment pins (A…G, DP, CLN) are connected to the anode (positive side) of the LEDS, and the
common pins (COM, DIG1…DIG4) are connected to the cathode (negative side) of the LEDs. You can set the "common"
attribute to "cathode" to reverse this behavior.

The segment mapping is as follows:

![7-segment display segment mapping](wokwi-7segment-diagram.svg)

And the digit mapping:

![7-segment display digit mapping](wokwi-7segment-digits.svg)

## Attributes

| Name   | Description                               | Default value |
| ------ | ----------------------------------------- | ------------- |
| common | The common pin: "cathode" or "anode"      | "anode"       |
| digits | Number of digits: "1", "2", "3" or "4"    | "1"           |
| colon  | Set to "1" to show the colon (clock mode) | ""            |
| color  | The color of the segment LEDs             | "red"         |

### Examples

| Result                                                        | Attrs                             |
| ------------------------------------------------------------- | --------------------------------- |
| <wokwi-7segment color="green" values="[1,1,1,1,0,1,1,0]" />   | `{ "color": "green" }`            |
| <wokwi-7segment color="#d040d0" values="[1,1,1,1,0,1,1,0]" /> | `{ "color": "#d040d0" }`          |
| <wokwi-7segment digits="2" />                                 | `{ "digits": "2" }`               |
| <wokwi-7segment digits="4" />                                 | `{ "digits": "4" }`               |
| <wokwi-7segment digits="4" colon="1" colonValue="1" />        | `{ "digits": "4", "colon": "1" }` |

## Using the 7-segment display

For a single digit, you'll need 8 microcontroller GPIO pins. Each pin should be connected to a single segment through a resistor,
and the common pin should be connected to 5V (or GND if you are using the common cathode variant). You can spare one pin (DP) if you don't use the dot LED. Turn a segment on by driving the corresponding segment on (or HIGH for the common cathode variant).

For multiple digits, you'll need 8 microcontroller pins for the segments and the dot plus one extra microcontroller pin for each digit. So if you have 4 digits, you'll need 12 microcontroller pins in total. Controlling the display in this mode is a bit tricky, as you'll need to continuously alternate between the different digits.

Luckily, there are libraries that can help:

- On Arduino: Use the [SevSeg library](https://wokwi.com/arduino/libraries/SevSeg).
- On the Raspberry Pi Pico: The PIO peripheral can take care of refreshing the display for you. See the [examples](#simulator-examples) below.

If you are out of microcontroller pins, consider using a [74HC595 Shift Register](wokwi-74hc595) to drive the display.

## Simulator examples

- [SevSeg example: Counter](https://wokwi.com/arduino/libraries/SevSeg/SevSeg_Counter)
- [SevSeg example: String with period](https://wokwi.com/arduino/libraries/SevSeg/stringWithPeriod)
- [Arduino Alarm Clock](https://wokwi.com/playground/alarm-clock)
- [ATtiny85 7-Segment clock](https://wokwi.com/projects/301366580039647753)
- [ATtiny85 8 digit counter](https://wokwi.com/projects/301304715310793225)
- [7-Segment on the Raspberry Pi Pico (using PIO)](https://wokwi.com/projects/301404853501952521)
- [7-Segment on the Raspberry Pi Pico (MicroPython)](https://wokwi.com/projects/300936948537623048)
