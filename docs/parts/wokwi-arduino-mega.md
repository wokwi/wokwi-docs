---
title: wokwi-arduino-mega Reference
sidebar_label: wokwi-arduino-mega
---

Arduino Mega 2560. Powered by the ATmega2560 chip, which has 256K bytes of Flash program memory, 8k bytes of SRAM and 4K bytes of EEPROM. The board features 54 digital pins, 16 analog input pins, and 4 serial ports. It runs at 16MHz.

<wokwi-arduino-mega />

## Pin names

Pins 0 to 53 are digital GPIO pins. Pins A0 to A15 double as analog input pins, in addition to being digital GPIO pins.

There are five ground pins: GND.1 (next to pin 13), GND.2/GND.3 (next to the Vin pin), and GND.4/GND.5 (at the bottom of the dual-row female header connector)

Pins VIN / 5V are connected to the positive power supply. There are also two additional power supply pins, 5V.1/5V.2, at the top of the dual-row female header connector.

Pins 3.3V / IOREF / AREF / RESET are not available in the simulation.

Digital pins 2 … 13, 44, 45, and 46 have hardware PWM support (total of 15 PWM channels).

Some of the digital pins also have additional functions:

| Pin | Function | Signal           | External interrupt |
| --- | -------- | ---------------- | ------------------ |
| 0   | Serial   | RX               |                    |
| 1   | Serial   | TX               |                    |
| 2   |          |                  | INT4               |
| 3   |          |                  | INT5               |
| 19  | Serial1  | RX               | INT2               |
| 18  | Serial1  | TX               | INT3               |
| 17  | Serial2  | RX               |                    |
| 16  | Serial2  | TX               |                    |
| 15  | Serial3  | RX               |                    |
| 14  | Serial3  | TX               |                    |
| 20  | I2C      | SDA (Data)       | INT1               |
| 21  | I2C      | SCL (Clock)      | INT0               |
| 50  | SPI      | MISO             |                    |
| 51  | SPI      | MOSI             |                    |
| 52  | SPI      | SCK (Clock)      |                    |
| 53  | SPI      | SS (Chip select) |                    |

### On board LEDs

The board includes four LEDs:

| LED | Function                                             |
| --- | ---------------------------------------------------- |
| L   | Connected to digital pin 13                          |
| RX  | Serial RX Activity                                   |
| TX  | Serial TX Activity                                   |
| ON  | Power LED. Always on while the simulation is running |

In general, only the "L" LED can be controlled by the user's code. You can use the `LED_BUILTIN` constant to reference it from your code:

```cpp
pinMode(LED_BUILTIN, OUTPUT);
digitalWrite(LED_BUILTIN, HIGH);
```

See [Blink](https://wokwi.com/projects/344893018695795282) for a complete code example.

## Simulation features

The Arduino Mega 2560 is simulated using the [AVR8js Library](https://github.com/wokwi/avr8js). The table below summarizes the status of features:

| Peripheral               | Status | Notes                                           |
| ------------------------ | ------ | ----------------------------------------------- |
| Processor                | ✔️     |                                                 |
| GPIO                     | ✔️     | Including External/Pin Change Interrupts        |
| 8-bit timers             | ✔️     | Timer0, Timer2                                  |
| 16-bit timers            | ✔️     | Timer1, Timer3, Timer4, Timer5 \*               |
| Output Compare Modulator | ❌     |
| Watchdog Timer           | ✔️     |                                                 |
| USART                    | ✔️     | USART0, USART1, USART1, USART3                  |
| SPI                      | 🟡     | Master mode only                                |
| I2C                      | 🟡     | Master mode only                                |
| EEPROM                   | ✔️     |                                                 |
| Clock Prescale           | ✔️     |                                                 |
| ADC                      | ✔️     | Used by analogRead()                            |
| Analog Comparator        | ❌     |                                                 |
| GDB Debugging            | ✔️     | See the [GDB Debugging Guide](../gdb-debugging) |

Legend:
✔️ Simulated
🟡 Simulated, but see notes
❌ Not implemented

\* Input Capture is not implemented in the 16-bit timers.

If you need any of the missing features, please [open an issue on the AVR8js repo](https://github.com/wokwi/avr8js/issues/new)
or [reach out on Discord](https://wokwi.com/discord).

### Serial Monitor

You can use the Serial Monitor to receive information from your Arduino code, such as debug print. You can also use it to send information to your code, such as textual commands.

For more information and code samples, check out [the Serial Monitor guide](../guides/serial-monitor). It also explains how to connect the serial monitor to a different pin (e.g. to `Serial2` instead of `Serial`), and how to configure the line ending characters.

### Libraries

The simulator supports many popular Arduino libraries. For a complete list, see the [Libraries guides](../guides/libraries).

## Simulator examples

- [Arduino Mega Blink](https://wokwi.com/projects/344893018695795282)
