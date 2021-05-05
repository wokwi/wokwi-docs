---
title: wokwi-pi-pico Reference
sidebar_label: wokwi-pi-pico
---

Raspberry Pi Pico, a RP2040 microcontroller board with dual-core ARM Cortex-M0+ processor, 264k of internal RAM, and flexible
Programmable I/O (PIO) feature.

![Raspberry Pi Pico](wokwi-pi-pico.svg)

## Pin names

Pins GP0 to GP22 are digital GPIO pins. Pins GP26, GP27, and GP28 are digital GPIO pins with analog input function.

| Name            | Description                 | Analog input channel |
| --------------- | --------------------------- | -------------------- |
| GP0 … GP22      | Digital GPIO pins (0 to 22) |                      |
| GP26            | Digital GPIO pin 26         | 0                    |
| GP27            | Digital GPIO pin 27         | 1                    |
| GP28            | Digital GPIO pin 28         | 2                    |
| GND.1 … GND.8   | Ground pins \*              |                      |
| VSYS, VBUS, 3V3 | Positive power supply       |                      |
| TP4 †           | Digital GPIO pin 23         |                      |
| TP5 †           | Digital GPIO pin 25 + LED   |                      |

\* The physical pin numbers of the ground pins are 3, 8, 13, 18, 23, 28, 33, and 38.  
† These pins do not appear in the visual diagram editor, but you can use them in your [diagram.json](../diagram-format) file.

Pins 3V3_EN / RUN / ADC_VREF are not available in the simulation, and are therefore omitted from the table.

### On board LED

The Rasberry Pi Pico has an on-board LED, attached to GPIO pin number 25. The LED is lit when the pin is driven high.

You can also use the `LED_BUILTIN` constant to reference the LED in your Arduino code:

```cpp
pinMode(LED_BUILTIN, OUTPUT);
digitalWrite(LED_BUILTIN, HIGH);
```

See [Blink](https://wokwi.com/arduino/projects/297755575592157709) for a complete code example.

## Simulation features

The Raspberry Pi Pico is simulated using the [RP2040js Library](https://github.com/wokwi/rp2040js).  
The following table summarizes the status of the simulation features:

| Peripheral        | Status | Notes                                                                 |
| ----------------- | ------ | --------------------------------------------------------------------- |
| Processor core    | 🟡     | Only a single core is simulated, a few instructions are still missing |
| GPIO              | 🟡     | Output implemented, input not yet                                     |
| PIO               | ❌     |                                                                       |
| USB               | ❌     |                                                                       |
| UART              | 🟡     | TX only (sending data from the Pico to the computer)                  |
| I2C               | ❌     |                                                                       |
| SPI               | ❌     |                                                                       |
| PWM               | ❌     |                                                                       |
| Timer             | 🟡     | 64 bit counter implemented, but alarms not                            |
| Watchdog          | ❌     |                                                                       |
| RTC               | ❌     |                                                                       |
| ADC + Temp sensor | ❌     |                                                                       |
| SSI               | 🟡     | Just the minimum to make the bootloader happy                         |
| GDB Debugging     | 🟡     | Implemented, but missing the web-gdb interface                        |

Legend:  
✔️ Simulated  
🟡 Partial implementation / work in progress  
❌ Not implemented

We're adding the missing features in [weekly live streams](https://www.youtube.com/playlist?list=PLLomdjsHtJTxT-vdJHwa3z62dFXZnzYBm). Expect the list above to update every week or two.

### Arduino core

The Arduino core provides the built-in Arduino functions, such as `pinMode()` and `digitalRead()`, as well as a set of standard Arduino libraries, such as Servo, Wire and SPI.

When compiling your code for the Raspberry Pi Pi Pico, you can choose between two different cores:

- The [official Pi Pico core](https://github.com/arduino/ArduinoCore-mbed), based on Mbed OS. This is the default.
- [Community maintained Pi Pico Arduino Core](https://github.com/earlephilhower/arduino-pico), built on top of [the Pi Pico SDK](https://github.com/raspberrypi/pico-sdk).

To select a core, set the "env" attribute of the `wokwi-pi-pico` part. For the official Arduino core, use the value "arduino-core". For the community maintained core, set "env" to "arduino-community". e.g.:

```json
  "parts": [
    {
      "type": "wokwi-pi-pico",
      "id": "pico",
      "attrs": {
        "env": "arduino-community"
      }
      …
    },
    …
  ]
```

### Serial Monitor

You can use the Serial Monitor to receive information from the code running on the Pi Pico, such as debug prints. To configure the serial monitor connection with the Raspberry Pi Pico, add the following connections to your [diagram.json](../diagram-format#connections) file:

```json
  "connections": [
    [ "$serialMonitor:RX", "pico:GP0", "", [] ],
    [ "$serialMonitor:TX", "pico:GP1", "", [] ],
    …
  ]
```

The example assumes that the Pi Pico was defined with an id of "pico", e.g.

```json
  "parts": [
    {
      "type": "wokwi-pi-pico",
      "id": "pico",
      …
    },
    …
  ]
```

To initialize the Serial monitor in your code use `Serial1.begin(115200)`, and then print messages with `Serial1.println()`. For example:

```cpp
void setup() {
  Serial1.begin(115200);
  Serial1.println("Hello, world!");
}

void loop() { }
```

Note the usage of `Serial1`. The standard `Serial` in the Arduino Core uses Serial over USB (CDC), which is currently not supported in the simulation. `Serial1`, in contrast, uses the hardware UART (connected to pins GP0/GP1).

For a complete example, check out the [Pi Pico Serial Monitor Example](https://wokwi.com/arduino/projects/297755360074138125).

## Simulator examples

* [Pi Pico and LCD1602](https://wokwi.com/arduino/projects/297323005822894602)
* [Pi Pico Traffic Light](https://wokwi.com/arduino/projects/297322571959894536)
