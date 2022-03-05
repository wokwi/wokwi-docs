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
| env       | Arduino core to use: "attiny" or "ATTinyCore"                              | "attiny"      |
| frequency | MCU clock frequency, in hertz. Common values: "1m", "8m", "16m", and "20m" | "8m"          |

## Code and libraries

The Arduino core provides the built-in Arduino functions, such as `pinMode()` and `digitalRead()`, as well as a set of standard Arduino libraries, such as Servo, Wire and SPI.

When compiling your code for the ATtiny85, you can choose between two different cores:

- [attiny](https://github.com/damellis/attiny) - A minimal core, provides most of the standard Arduino functions. This is the default.
- [ATTinyCore](https://github.com/SpenceKonde/ATTinyCore) - Advanced core which includes the Wire, SPI, Servo, and Serial libraries. Learn more in the [ATTinyCore documentation](https://github.com/SpenceKonde/ATTinyCore/blob/master/avr/extras/ATtiny_x5.md).

Note: The ATTinyCore is a new option and hasn't been widely tested.

To select a core, set the "env" attribute of the `wokwi-attiny85` part, e.g.

```json
  "parts": [
    {
      "type": "wokwi-attiny85",
      "id": "tiny",
      "attrs": {
        "env": "ATTinyCore"
      }
      …
    },
    …
  ]
```

### Debug prints with TinyDebug

You can use the [TinyDebug library](https://github.com/wokwi/TinyDebug) to print debug messages from your code. These messages appear in Wokwi's Serial Monitor. To use the library, include "TinyDebug.h" in your project and create a [libraries.txt](../guides/libraries) file with the text "TinyDebug" in it. 

Call `Debug.begin()` and then print your debug messages using `Debug.println()`:

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

The `Debug` interface consumes ~30 bytes of SRAM and 150 bytes of Flash memory, depending on which methods you use in your code. This can sometimes be an issue, since the ATtiny85 only has 512 bytes of SRAM.

That's why TinyDebug also provides an alternative, lightweight logging interface that doesn't use any SRAM. It provides two functions, `tdPrint()` and `tdPrintln()`. The downside is that you can only print c-style (`char*`) strings:

```cpp
#include <TinyDebug.h>

void setup() {
  tdPrintln(F("I do not use any SRAM!"));
}

void loop() {
  /* ... */
}
```

The TinyDebug library works out of the box in Wokwi, without any changes to your diagram. It uses an
internal debug interface that is part of the Wokwi simulation engine, and does not use any MCU pins.

You can safely run code that uses TinyDebug on a physical ATtiny85 chip. The physical chip doesn't
have the debug interface, so you obviously won't see the debugging messages, but other than that it
shouldn't interfere with your code.

For a complete code example, check out the [TinyDebug demo project on Wokwi](https://wokwi.com/projects/300650387867697672).

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
| Watchdog Timer    | ✔️     |                                                 |
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

- [ATtiny85 Blink](https://wokwi.com/projects/283019827166052872)
- [ATtiny85 Simon Game](https://wokwi.com/projects/285525640477671948)
- [ATtiny85 FastLED Matrix](https://wokwi.com/projects/283910810787381773)
- [ATtiny85 Charlieplexing](https://wokwi.com/projects/283912288194265608)
- [ATtiny85 SSD1306 + DHT](https://wokwi.com/projects/292900020514980360)
