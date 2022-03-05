---
title: wokwi-74hc165 Reference
sidebar_label: wokwi-74hc165
---

8-bit Parallel-In Serial-Out (PISO) Shift Register (Input)

![74HC165](wokwi-74hc165.svg)

Use the 74HC165 shift register to expand the number of _input_ pins on your microcontroller. For output shift register (e.g. controlling multiple LEDs with just a few pins), please see the [wokwi-74hc595](wokwi-74hc595).

## Pin names

| Pin   | Description                               |
| ----- | ----------------------------------------- |
| D0…D7 | Parallel input                            |
| PL    | Parallel load (active low)                |
| CP    | Serial clock                              |
| CE    | Clock enable (active low)                 |
| Q7    | Serial output                             |
| Q7_N  | Inverted serial output (usually not used) |
| DS    | Serial input\*                            |
| GND   | Ground                                    |
| VCC   | Supply voltage                            |

\* Use the DS to daisy-chain multiple 74HC165 units together. Connect DS to the Q7 pin of the previous 74HC165 chip in the chain. You can leave DS disconnected if you don't chain or for the first chip in the chain.

## Operation

The 74HC165 is a shift register with eight parallel inputs: it enables you to simultaneously sample eight input pins, and then read the result one bit at a time. In other words, it is an easy way to expand the number of input pins for your microcontroller.

The shift register has two states: sampling and shifting. The PL pin selects the active state.

### Sampling (PL low)

When PL is low, the shift register is in the sampling state: it reads the inputs from pins D0…D7 and stores them. It also outputs the value of D7 in the Q7 pin (so Q7 == D7).

### Shifting (PL high)

When PL is high, the shift register is in the sampling state. It retains the value it reads from the input, and let you read this value one bit at a time through the Q7 pin. You can read the next bit by pulsing CP (the serial clock) high. Initially, Q7 contains the value read from D7. When you pulse the clock high, you get the value from D6. When you pulse it again, you get the value from D5, etc.

Changing the input pins while PL is high has no effect.

### Using the shift register

To use the shift register, connect pins D0…D7 to your inputs (e.g. [slide switches](wokwi-slide-switch) or [pushbuttons](wokwi-pushbutton)). You may need to add external pull-up or pull-down [resistors](wokwi-resistor), especially if you go with the buttons.

You also need to connect PL, CP, and Q7 to your microcontroller. Configure PL and CP as digital outputs, and Q7 as a digital input.

Finally, connect to CE pin to ground. You can use this pin to disable shifting (by driving it high), but it's usually not required. Don't leave the CE pin floating!

Sample the inputs by setting PL to low.

Read the value by setting PL to high. Read the first (most-significant) bit from Q7, then pulse the CP high to get the next bit. Repeat this eight times, until you read all the bits from the shift register.

### Chaining multiple shift registers

You can chain several shift registers and still use a single microcontroller input pin. This configuration is also called a cascade. The connections are as follows:

1. Connect the Q7 pin of each unit (other than the last) to the DS (serial input) pin of the next unit.
2. Connect the Q7 pin of the last unit to the microcontroller.
3. The PL (parallel load) and CP (clock) pins are shared between all the units. So you only need two microcontroller pins to control the entire chain. If you use the CE (clock enable pin), it can also be shared. Otherwise, just connect it to the ground.

The operation is same as above: sampling and then shifting. There is one difference: you read more than 8 bits when shifting. For a chain of n shift registers, you'll shift 8\*n bits by repeatedly reading Q7 and then pulsing CP high. So for two 74hc165 units you'd shift 16 bits, for three units you'd shift 24 bits, etc.

If you don't need all the bits (e.g. you have two shift register units, by only use 10 inputs), then you can shift a smaller number of bits, as many as you are interested in.

## Arduino code example

This example assumes that you connected the shift register to Arduino as follows:

| Arduino pin | 74HC165 pin |
| ----------- | ----------- |
| 2           | Q7\*        |
| 3           | CP          |
| 4           | PL          |
| GND         | CE          |
| GND         | GND         |
| 5V          | VCC         |

\* If you chain multiple shift registers, connect only the Q7 pin of the last register in the chain to Arduino.

```cpp
const int dataPin = 2;   /* Q7 */
const int clockPin = 3;  /* CP */
const int latchPin = 4;  /* PL */

const int numBits = 8;   /* Set to 8 * number of shift registers */

void setup() {
  Serial.begin(115200);
  pinMode(dataPin, INPUT);
  pinMode(clockPin, OUTPUT);
  pinMode(latchPin, OUTPUT);
}

void loop() {
  // Step 1: Sample
  digitalWrite(latchPin, LOW);
  digitalWrite(latchPin, HIGH);

  // Step 2: Shift
  Serial.print("Bits: ");
  for (int i = 0; i < numBits; i++) {
    int bit = digitalRead(dataPin);
    if (bit == HIGH) {
      Serial.print("1");
    } else {
      Serial.print("0");
    }
    digitalWrite(clockPin, HIGH); // Shift out the next bit
    digitalWrite(clockPin, LOW);
  }

  Serial.println();
  delay(1000);
}
```

[Run this example on Wokwi](https://wokwi.com/projects/306031380875182657).

## Simulator examples

- [Single input shift register](https://wokwi.com/projects/306031380875182657)
- [74HC165 shift register cascade](https://wokwi.com/projects/306024460940476993) - four units daisy-chained to read the state of 32 switches
