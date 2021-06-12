---
title: wokwi-74hc595 Reference
sidebar_label: wokwi-74hc595
---

8-bit Serial-In Parallel-Out (SIPO) Shift Register

![74HC595](wokwi-74hc595.svg)

## Pin names

| Pin   | Description                                            |
| ----- | ------------------------------------------------------ |
| DS    | Serial input                                           |
| SH_CP | Serial clock                                           |
| ST_CP | Storage (latch) pin                                    |
| OE    | Output enable, active low. Connect to GND if not used. |
| Q0…Q7 | Parallel output                                        |
| Q7O   | Serial output\*                                        |
| MR    | Reset (clear), active low. Connect to VCC if not used  |
| GND   | Ground                                                 |
| VCC   | Supply voltage                                         |

\* Use the Q7O to chain multiple 74HC595 units together. Connect Q7O to the DS pin of the next 74HC595 chip in chain.

## Connecting to Arduino

You will need to connect at least 3 pins to your microcontroller: DS, SH_CP, and ST_CP.

The OE pin can be used to disable the output of the shift register. If you need that functionality,
connect it to your microcontroller. Otherwise, connect it to the ground to permanently enable the output.

The output pins of the shift register, Q0 through Q7, are usually connected to [LEDs](wokwi-led) or a 7-segment display.

The following code example assumes that you connected DS to Arduino pin 2, SH_CP to Arduino pin 3, and
ST_CP to Arduino pin 4. It outputs an 8-bit pattern that inverts two times a second:

```cpp
const int dataPin = 2;   /* DS */
const int clockPin = 3;  /* SH_CP */
const int latchPin = 4;  /* ST_CP */

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

You can also [run this example on Wokwi](https://wokwi.com/arduino/projects/301192672203244042).

## Simulator examples

- [75HC595 Shift Register with 8 LEDs](https://wokwi.com/arduino/projects/301188813482361352)
