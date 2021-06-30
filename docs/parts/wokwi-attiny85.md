---
title: wokwi-attiny85 Reference
sidebar_label: wokwi-attiny85
---

The ATtiny85 is a small 8-bit AVR microcontroller. It has 8KB of Flash program memory, 512 bytes of SRAM, and 512 bytes of EEPROM.

![ATtiny85](wokwi-attiny85.svg)

## Pin names

| Pin | Name | Functions         | Analog Channel |
| --- | ---- | ----------------- | -------------- |
| 1   | PB5  | Reset             | 0              |
| 2   | PB3  |                   | 3              |
| 3   | PB4  |                   | 2              |
| 4   | GND  | Ground            |                |
| 5   | PB0  | SPI:MOSI, I2C:SDA |                |
| 6   | PB1  | SPI:MISO          |                |
| 7   | PB2  | SPI:SCK, I2C:SCL  | 1              |
| 8   | VCC  | Positive voltage  |                |

## Attributes

| Name      | Description                                                                | Default value |
| --------- | -------------------------------------------------------------------------- | ------------- |
| frequency | MCU clock frequency, in hertz. Common values: "1m", "8m", "16m", and "20m" | "8m"          |

## Code and libraries

The code is compiled using the [ATtiny Core for Arduino](https://github.com/damellis/attiny).
This means you can use most of the standard Arduino functions and libraries in your code.

### Debug prints with TinyDebug

You can use the [TinyDebug library](https://github.com/wokwi/TinyDebug) to print debug messages from your code. These messages appear in Wokwi's Serial Monitor. To use the library, include "TinyDebug.h" in your project, call `Debug.begin()` and then print your debug messages using `Debug.println()`:

```cpp
#include <TinyDebug.h>

void setup() {
  Debug.begin();
  Debug.println(F("Hello, TinyDebug!"));
}

void loop() {
  /* Sprinkle some magic code here */
}
```

Similarly, you can use the `Debug` object to read input from the Simulator's serial monitor:

```cpp
if (Debug.read() == 'c') {
  // Do something, e.g. toggle an LED
}
```

For more information about the available methods, check out the [Stream class documentation](https://www.arduino.cc/reference/en/language/functions/communication/stream/#_functions).

The TinyDebug library works out of the box in Wokwi, without any changes to your diagram. It uses an
internal debug interface that is part of the Wokwi simulation engine, and does not use any MCU pins.

You can safely run code that uses TinyDebug on a physical ATtiny85 chip. The physical chip doesn't
have the debug interface, so you obviously won't see the debugging messages, but other than that it
shouldn't interfere with your code. However, note that TinyDebug uses about 32 bytes of SRAM.

For a complete code example, check out the [TinyDebug demo project on Wokwi](https://wokwi.com/arduino/projects/300650387867697672).

### Serial Output

The ATtiny85 doesn't have a dedicated UART peripheral, but it it still possible to get Serial Output using the Software Serial library.
For more information and demo code, please see the [Serial Monitor Guide](../guides/serial-monitor#attiny85--softwareserial).

### I2C

For I2C communication use the [TinyWireM](https://github.com/adafruit/TinyWireM) library.

## Simulation features

The ATtiny85 is simulated using the [AVR8js Library](https://github.com/wokwi/avr8js). The table below summarizes the status of features:

| Peripheral        | Status | Notes                                           |
| ----------------- | ------ | ----------------------------------------------- |
| Processor         | ✔️     |                                                 |
| GPIO              | ✔️     | 6 GPIO pins (PB0...PB6), INT0 / PCINT support   |
| USI               | 🟡     | Only works in I2C mode                          |
| Timer0            | ✔️     | PWM support for PB0/PB1                         |
| Timer1            | ❌     |                                                 |
| Watchdog Timer    | ❌     |                                                 |
| EEPROM            | ✔️     |                                                 |
| ADC               | ✔️     | Used by analogRead()                            |
| Analog Comparator | ❌     |                                                 |
| GDB Debugging     | ✔️     | See the [GDB Debugging Guide](../gdb-debugging) |

Legend:  
✔️ Simulated  
🟡 Partial support  
❌ Not implemented

If you need any of the missing features, please [open an issue on the AVR8js repo](https://github.com/wokwi/avr8js/issues/new)
or [reach out on Discord](https://wokwi.com/discord).

## Simulator examples

- [ATtiny85 Blink](https://wokwi.com/arduino/projects/283019827166052872)
- [ATtiny85 Simon Game](https://wokwi.com/arduino/projects/285525640477671948)
- [ATtiny85 FastLED Matrix](https://wokwi.com/arduino/projects/283910810787381773)
- [ATtiny85 Charlieplexing](https://wokwi.com/arduino/projects/283912288194265608)
- [ATtiny85 SSD1306 + DHT](https://wokwi.com/arduino/projects/292900020514980360)
