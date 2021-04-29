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
| TP4 †        | Digital GPIO pin 23         |                      |
| TP5 †        | Digital GPIO pin 25 + LED   |                      |

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

See [Blink](TODO: link to Blink) for a complete code example.

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

### Serial Monitor

You can use the Serial Monitor to receive information from the code running on the Pi Pico, such as debug prints. To configure the serial monitor
connection with the Raspberry Pi Pico, add the following connections to your [diagram.json](../diagram-format#connections) file:

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

TODO link to a complete example with Serial Monitor

## Simulator examples

TODO: links
