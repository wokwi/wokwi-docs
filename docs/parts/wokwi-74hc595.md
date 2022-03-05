---
title: wokwi-74hc595 Reference
sidebar_label: wokwi-74hc595
---

8-bit Serial-In Parallel-Out (SIPO) Shift Register

![74HC595](wokwi-74hc595.svg)

Use the 74HC595 shift register to expand the number of _output_ pins on your microcontroller. For input shift register (e.g. reading multiple buttons with a single input pin), please see the [wokwi-74hc165](wokwi-74hc165).

## Pin names

| Pin   | Description                                            |
| ----- | ------------------------------------------------------ |
| DS    | Serial input                                           |
| SHCP  | Serial clock                                           |
| STCP  | Storage (latch) pin                                    |
| OE    | Output enable, active low. Connect to GND if not used. |
| Q0…Q7 | Parallel output                                        |
| Q7S   | Serial output\*                                        |
| MR    | Reset (clear), active low. Connect to VCC if not used  |
| GND   | Ground                                                 |
| VCC   | Supply voltage                                         |

\* Use the Q7S to chain multiple 74HC595 units together. Connect Q7S to the DS pin of the next 74HC595 chip in chain.

## Connecting to Arduino

You will need to connect at least 3 pins to your microcontroller: DS, SHCP, and STCP.

The OE pin can be used to disable the output of the shift register. If you need that functionality,
connect it to your microcontroller. Otherwise, connect it to the ground to permanently enable the output.

The output pins of the shift register, Q0 through Q7, are usually connected to [LEDs](wokwi-led) or a 7-segment display.

The following code example assumes that you connected DS to Arduino pin 2, SHCP to Arduino pin 3, and
STCP to Arduino pin 4. It outputs an 8-bit pattern that inverts two times a second:

```cpp
const int dataPin = 2;   /* DS */
const int clockPin = 3;  /* SHCP */
const int latchPin = 4;  /* STCP */

void setup() {
  pinMode(dataPin, OUTPUT);
  pinMode(clockPin, OUTPUT);
  pinMode(latchPin, OUTPUT);
}

int pattern = 0b10101010;
void loop() {
  digitalWrite(latchPin, LOW);
  shiftOut(dataPin, clockPin, LSBFIRST, pattern);
  digitalWrite(latchPin, HIGH);
  delay(500);
  pattern = ~pattern; // Invert the pattern
}
```

You can also [run this example on Wokwi](https://wokwi.com/projects/301192672203244042).

## Simulator examples

- [75HC595 shift register with 8 LEDs](https://wokwi.com/projects/301188813482361352)
- [Arduino 16-LED shift register blink](https://wokwi.com/projects/301213976182653448)
- [ATtiny85 75HC595 clock](https://wokwi.com/projects/301366580039647753)
- [8-digit seven-segment hex counter](https://wokwi.com/projects/301304715310793225)
