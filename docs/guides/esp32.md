---
title: ESP32 Simulation
sidebar_label: ESP32 Simulator
---

The ESP32 Simulator is currently in beta. There are two ESP32 boards:

- ESP32 DevKit v1 - Popular ESP32 development board
- [TinyPico](https://www.tinypico.com/) - an ESP32 board by [UnexpectedMaker](https://unexpectedmaker.com/)

<wokwi-esp32-devkit-v1></wokwi-esp32-devkit-v1>

You can contribute additional boards by sending us a [pull request](https://github.com/wokwi/wokwi-boards).

## Getting Started

You can use the ESP32 simulator in three ways:

1. Build projects using the ESP32 Arduino Core
2. Run MicroPython projects
3. Simulate bin application files you built on your machine (e.g. using ESP-IDF)

### Arduino Core

Start from the [Arduino-ESP32 Project Template](https://wokwi.com/projects/new/esp32), or from the
[ESP32 Blink Example](https://wokwi.com/arduino/projects/305452382231200320).

If you want to use third-party Arduino libraries, add a [libraries.txt file](./libraries) with the list of libraries that you use.

### MicroPython

Start from the [MicroPython ESP32 Project Template](https://wokwi.com/projects/new/micropython-esp32), or from the
[MicroPython ESP32 Blink Example](https://wokwi.com/arduino/projects/305452627045384768).

Note: While the simulation is running, press Ctrl+C inside the Serial Terminal to get into the _MicroPython REPL_. Alternatively, you can edit the Blink Example code and remove the while loop. For more information, check out the [MicroPython Guide](./micropython).

### Custom Application (.bin) File

Open the [ESP32 custom application project template](https://wokwi.com/arduino/projects/305457271083631168), and press "F1" in the code editor. Then choose "Load HEX File and Start Simulation…". Choose any .bin file from your computer and the simulation will start.

## Simulator Examples

### Arduino Examples

- [Blink](https://wokwi.com/arduino/projects/305566932847821378)
- [Seven segment counter](https://wokwi.com/arduino/projects/305567166302782017)
- [FastLED NeoPixel Blink](https://wokwi.com/arduino/projects/312460386125218368)
- [APA102 Color Cycles (TinyPico Board)](https://wokwi.com/arduino/projects/308012505806930496)
- [WiFi Scanning](https://wokwi.com/arduino/projects/305569599398609473)

### MicroPython Examples

- [SSD1306 Example](https://wokwi.com/arduino/projects/305568836183130690)
- [NeoPixels](https://wokwi.com/arduino/projects/305569065545499202)
- [AES256 Encryption](https://wokwi.com/arduino/projects/321484545174012499)
- [WiFi Scanning](https://wokwi.com/arduino/projects/305570169692881473)

### ESP-IDF Examples

The following examples use the ESP-IDF functions. They are compiled using Arduino ESP32 Core:

- [Blink using FreeRTOS API](https://wokwi.com/arduino/projects/304209256260829762)
- [Binary LED counter using FreeRTOS tasks](https://wokwi.com/arduino/projects/322609470223942226)
- [GPIO button input + interrupts](https://wokwi.com/arduino/projects/304633599712297536)

## Simulation Features

| Peripheral         | Status | Notes                                                                    |
| ------------------ | ------ | ------------------------------------------------------------------------ |
| Processor core     | ✔️     | Both cores are simulated                                                 |
| GPIO               | ✔️     | Interrupts supported                                                     |
| IOMUX              | 🟡     |                                                                          |
| PSRAM              | ✔️     | 4MB of external SRAM                                                     |
| UART               | ✔️     | Only UART0 for now                                                       |
| I2C                | ✔️     | Master only. 10-bit addressing not supported.                            |
| I2S                | ❌     | [Open for voting](https://wokwi.com/features#feature-1031718532)         |
| SPI                | ❌     |                                                                          |
| RMT                | 🟡     | Transmit-only, use to control NeoPixels                                  |
| PWM                | ❌     | [Open for voting](https://wokwi.com/features#feature-1033121859)         |
| DMA                | ❌     |                                                                          |
| WiFi               | ✔️     | See the [ESP32 WiFi Guide](./esp32-wifi)                                 |
| Bluetooth          | ❌     | [Open for voting](https://wokwi.com/features#feature-1047159691)         |
| Timers             | 🟡     |                                                                          |
| Watchdog           | ❌     |                                                                          |
| RTC                | 🟡     | Only RTC Pull-up / Pull-down resistors                                   |
| ADC                | ✔️     | Note: analogRead() returns values up to 4095                             |
| RNG                | ✔️     | Random Number Generator                                                  |
| AES Accelerator    | ✔️     |                                                                          |
| SHA Accelerator    | ✔️     |                                                                          |
| RSA Accelerator    | ✔️     |                                                                          |
| Hall Effect Sensor | ❌     |                                                                          |
| GDB Debugging      | 🟡     | Only through [wokwi-gdbserver](https://github.com/wokwi/wokwi-gdbserver) |

Legend:  
✔️ - Simulated  
🟡 - Partial implementation/work in progress  
❌ - Not implemented (but if you need it, please [open a feature request](https://github.com/wokwi/wokwi-features/issues/new?labels=enhancement&template=feature_request.md))

## WiFi Simulation

See the [ESP32 WiFi Guide](./esp32-wifi).
