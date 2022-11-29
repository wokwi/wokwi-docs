---
title: ESP32 Simulation
sidebar_label: ESP32 Simulator
---

The ESP32 is a popular WiFi and Bluetooth-enabled microcontroller, widely used for IoT Projects. Wokwi simulates the ESP32, ESP32-C3, ESP32-S2, ESP32-S3 (beta).

<wokwi-esp32-devkit-v1></wokwi-esp32-devkit-v1>

## ESP32 boards

| Name                                                | Chip     | Description                                   |
| --------------------------------------------------- | -------- | --------------------------------------------- |
| ESP32 DevKit v1                                     | ESP32    | Popular ESP32 development board               |
| TinyPICO                                            | ESP32    | Small ESP32 board by UnexpectedMaker          |
| ESP32-S2-DevKitM-1                                  | ESP32-S2 | Entry-level ESP32-S2 development board        |
| [Franzininho WiFi](../parts/board-franzininho-wifi) | ESP32-S2 | Board by the Franzininho Community            |
| ESP32-C3-DevKitM-1                                  | ESP32-C3 | Entry-level ESP32-C3 development board        |
| Rust Board ESP32-C3                                 | ESP32-C3 | ESP32-C3 board for Rust development           |
| ESP32-S3-DevKitC-1                                  | ESP32-S3 | Entry-level ESP32-C3 development board (beta) |

You can contribute additional boards by sending a pull request to [wokwi-boards](https://github.com/wokwi/wokwi-boards).

## Getting Started

You can use the ESP32 simulator in three ways:

1. Build projects using the ESP32 Arduino Core (including ESP-IDF projects)
2. Run MicroPython projects (also CircuitPython on the ESP32-S2)
3. Simulate bin application files you built on your machine (e.g. using ESP-IDF)

### Arduino Core

Start from the [Arduino-ESP32 Project Template](https://wokwi.com/projects/new/esp32), or from the
[ESP32 Blink Example](https://wokwi.com/projects/305452382231200320).

If you want to use third-party Arduino libraries, add a [libraries.txt file](./libraries) with the list of libraries that you use.

### MicroPython

Start from the [MicroPython ESP32 Project Template](https://wokwi.com/projects/new/micropython-esp32), or from the
[MicroPython ESP32 Blink Example](https://wokwi.com/projects/305452627045384768).

Note: While the simulation is running, press Ctrl+C inside the Serial Terminal to get into the _MicroPython REPL_. Alternatively, you can edit the Blink Example code and remove the while loop. For more information, check out the [MicroPython Guide](./micropython).

### Custom Application (.bin) File

Open the [ESP32 custom application project template](https://wokwi.com/projects/305457271083631168), and press "F1" in the code editor. Then choose "Load HEX File and Start Simulation…". Choose any .bin file from your computer and the simulation will start.

## Simulator Examples

### Arduino Examples

- [Blink](https://wokwi.com/projects/305566932847821378)
- [Seven segment counter](https://wokwi.com/projects/305567166302782017)
- [FastLED NeoPixel Blink](https://wokwi.com/projects/312460386125218368)
- [WiFi Scanning](https://wokwi.com/projects/305569599398609473)

### MicroPython Examples

- [SSD1306 Example](https://wokwi.com/projects/305568836183130690)
- [NeoPixels](https://wokwi.com/projects/305569065545499202)
- [AES256 Encryption](https://wokwi.com/projects/321484545174012499)
- [WiFi Scanning](https://wokwi.com/projects/305570169692881473)

### ESP-IDF Examples

The following examples use the ESP-IDF functions. They are compiled using Arduino ESP32 Core:

- [Blink using FreeRTOS API](https://wokwi.com/projects/304209256260829762)
- [Binary LED counter using FreeRTOS tasks](https://wokwi.com/projects/322609470223942226)
- [GPIO button input + interrupts](https://wokwi.com/projects/342634722692694610)
- [WiFi Example](https://wokwi.com/projects/343629632022512211)

## Simulation Features

| Peripheral         | ESP32 | S2  | S3  | C3  | Notes                                                                    |
| ------------------ | ----- | --- | --- | --- | ------------------------------------------------------------------------ |
| Processor core(s)  | ✔️    | ✔️  | ✔️  | ✔️  |                                                                          |
| GPIO               | ✔️    | ✔️  | 🟡  | ✔️  | Interrupts supported                                                     |
| IOMUX              | 🟡    | 🟡  | 🟡  | 🟡  |                                                                          |
| PSRAM              | ✔️    | ✔️  | ✔️  | —   | 4MB of external SRAM \*                                                  |
| UART               | ✔️    | ✔️  | ✔️  | ✔️  |                                                                          |
| USB                | —     | ✔️  | ✔️  | ❌  | Support for UART over USB (CDC)                                          |
| I2C                | ✔️    | ✔️  | ✔️  | ✔️  | Master only. 10-bit addressing not supported.                            |
| I2S                | ❌    | ❌  | ❌  | ❌  | [Open for voting](https://wokwi.com/features#feature-1031718532)         |
| SPI                | ✔️    | ✔️  | ✔️  | ✔️  |                                                                          |
| TWAI               | ❌    | ❌  | ❌  | ❌  |                                                                          |
| RMT                | 🟡    | 🟡  | ❌  | 🟡  | Transmit-only, use to control NeoPixels                                  |
| LEDC PWM           | ✔️    | ✔️  | ❌  | ✔️  | Used by analogWrite(), Servo, Buzzer, etc.                               |
| MCPWM              | ❌    | —   | ❌  | —   |                                                                          |
| DMA                | 🟡    | 🟡  | ❌  | ❌  |                                                                          |
| WiFi               | ✔️    | ✔️  | ✔️  | ✔️  | See the [ESP32 WiFi Guide](./esp32-wifi)                                 |
| Bluetooth          | ❌    | —   | ❌  | ❌  | [Open for voting](https://wokwi.com/features#feature-1047159691)         |
| Timers             | 🟡    | ✔️  | 🟡  | ✔️  |                                                                          |
| Watchdog           | ❌    | ❌  | ❌  | ❌  |                                                                          |
| RTC                | 🟡    | 🟡  | 🟡  | 🟡  | Only RTC Pull-up / Pull-down resistors                                   |
| ADC                | ✔️    | ✔️  | ❌  | ✔️  | Note: analogRead() returns values up to 4095                             |
| RNG                | ✔️    | ✔️  | ✔️  | ✔️  | Random Number Generator                                                  |
| AES Accelerator    | ✔️    | ✔️  | ❌  | ✔️  |                                                                          |
| SHA Accelerator    | ✔️    | ✔️  | ❌  | ✔️  |                                                                          |
| RSA Accelerator    | ✔️    | ✔️  | ❌  | ✔️  |                                                                          |
| Hall Effect Sensor | ❌    | —   | ❌  | —   |                                                                          |
| ULP Processor      | ❌    | ❌  | ❌  | ❌  |                                                                          |
| GDB Debugging      | 🟡    | 🟡  | 🟡  | 🟡  | Only through [wokwi-gdbserver](https://github.com/wokwi/wokwi-gdbserver) |

Legend:  
✔️ - Simulated  
🟡 - Partial implementation/work in progress  
❌ - Not implemented (but if you need it, please [open a feature request](https://github.com/wokwi/wokwi-features/issues/new?labels=enhancement&template=feature_request.md))  
— - Not available on this chip

\* The amount of SRAM can be customized using the ["psramSize" attribute](#flash-and-memory-size).

## WiFi Simulation

See the [ESP32 WiFi Guide](./esp32-wifi).

## Advanced Usage

### Flash and memory size

You can customize the size of flash and PSRAM by adding the following attributes to the chip:

| Attribute | Description                                                | Default |
| --------- | ---------------------------------------------------------- | ------- |
| flashSize | Flash size in MB. Valid values: "2", "4", "8", "16", "32". | "4"     |
| psramSize | PSRAM size in MB. Valid values: "2", "4", "8".             | "4"     |

- [ESP32 Custom flash size example](https://wokwi.com/projects/349656534768157267)

### Custom Partition Table

You can specifiy a custom partititon table by adding a "partitions.csv" file to your project. Check out the [ESP32 Partition Table Guide](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-guides/partition-tables.html) for the exact format of this file.

- [ESP32 Custom partition table code example](https://wokwi.com/projects/337425600260080210)

### Custom firmware offset

When loading a custom firmware, you can specify the offset of the firmware in the flash memory. By default, Wokwi will look at the firmware binary and try to figure out the offset automatically, based on the presence of the bootloader and the type of the chip. If Wokwi can't figure out the offset, it will assume that your firmware is an application firmware and load it at offset 0x10000.

You can specify the offset manually by adding the following attribute to the chip:

| Attribute      | Description                                           | Default |
| -------------- | ----------------------------------------------------- | ------- |
| firmwareOffset | Offset of the firmware in the flash memory, in bytes. | ""      |

### Skipping the bootloader

On ESP32 and ESP32-S2 chips, Wokwi skips the boot ROM and the bootloader, so that your firmware starts running immediately. Other chips (ESP32-C3, ESP32-S3, etc.) always run the full boot sequence.

If you want Wokwi to always run the bootloader, you can add the following attribute to the chip:

| Attribute | Description                                                                               | Default |
| --------- | ----------------------------------------------------------------------------------------- | ------- |
| fullBoot  | Set to "1" to simulate the complete boot sequence: boot ROM -> bootloader -> application. | ""      |
