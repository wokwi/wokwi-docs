---
title: ESP32 Simulation
sidebar_label: ESP32 Simulator
---

The ESP32 is a popular WiFi and Bluetooth-enabled microcontroller, widely used for IoT Projects. Wokwi simulates the ESP32, ESP32-C3, ESP32-S2, ESP32-S3, ESP32-C6, ESP32-H2, and ESP32-P4 (beta).

<wokwi-esp32-devkit-v1></wokwi-esp32-devkit-v1>

## ESP32 boards

| Name                                                           | Chip     | Description                                                                          |
|----------------------------------------------------------------|----------|--------------------------------------------------------------------------------------|
| ESP32-DevKitC V4                                               | ESP32    | Entry-level ESP32 development board                                                  |
| ESP32 DevKit v1                                                | ESP32    | Popular ESP32 development board                                                      |
| ESP32-S2-DevKitM-1                                             | ESP32-S2 | Entry-level ESP32-S2 development board                                               |
| [Franzininho WiFi](../parts/board-franzininho-wifi)            | ESP32-S2 | Board by the Franzininho Community                                                   |
| [Wemos S2 mini](https://wokwi.com/projects/355047217294313473) | ESP32-S2 | Small ESP32-S2 board by Wemos                                                        |
| ESP32-S3-DevKitC-1                                             | ESP32-S3 | Entry-level ESP32-S3 development board                                               |
| ESP32-C3-DevKitM-1                                             | ESP32-C3 | Entry-level ESP32-C3 development board                                               |
| Rust Board ESP32-C3                                            | ESP32-C3 | ESP32-C3 board designed for [Rust trainings](https://github.com/esp-rs/std-training) |
| ESP32-C6-DevKitC-1                                             | ESP32-C6 | Entry-level ESP32-C6 development board                                               |
| ESP32-H2-DevKitM-1                                             | ESP32-H2 | Entry-level ESP32-H2 development board                                               |
| ESP32-P4-Preview-DevKitC-1                                     | ESP32-P4 | ESP32-P4 pre-release virtual evaluation board (beta)                                 |
| XIAO ESP32-C3                                                  | ESP32-C3 | ESP32-C3 board by Seeed Studio                                                       |
| XIAO ESP32-C6                                                  | ESP32-C6 | ESP32-C6 board by Seeed Studio                                                       |
| XIAO ESP32-S3                                                  | ESP32-S3 | ESP32-S3 board by Seeed Studio                                                       |

You can contribute additional boards by sending a pull request to [wokwi-boards](https://github.com/wokwi/wokwi-boards).

## Getting Started

You can use the ESP32 simulator to run different kinds of applications:

1. ESP32 Arduino Core projects (including ESP-IDF projects)
2. MicroPython and CircuitPython projects (examples at https://wokwi.com/micropython)
3. Rust projects (see https://wokwi.com/rust)
4. Custom application firmware files (e.g. applications built using the ESP-IDF)

### Arduino Core

Start from the [Arduino-ESP32 Project Template](https://wokwi.com/projects/new/esp32), or from the
[ESP32 Blink Example](https://wokwi.com/projects/305452382231200320).

If you want to use third-party Arduino libraries, add a [libraries.txt file](./libraries) with the list of libraries that you use.

### MicroPython

Start from the [MicroPython ESP32 Project Template](https://wokwi.com/projects/new/micropython-esp32), or from the
[MicroPython ESP32 Blink Example](https://wokwi.com/projects/305452627045384768).

Note: While the simulation is running, press Ctrl+C inside the Serial Terminal to get into the _MicroPython REPL_. Alternatively, you can edit the Blink Example code and remove the while loop. For more information, check out the [MicroPython Guide](./micropython).

### Custom Application Firmware

Open the [ESP32 custom application project template](https://wokwi.com/projects/305457271083631168), and press "F1" in the code editor. Then choose "Upload Firmware and Start Simulation…". Choose any .bin, .elf or .uf2 file from your computer and the simulation will start.

:::info
When uploading a custom firmware, it's recommended to create a single .bin file that contains the bootloader, partition table, and
application. You can use the [esptool merge_bin command](https://docs.espressif.com/projects/esptool/en/latest/esp32/esptool/basic-commands.html#merge-binaries-for-flashing-merge-bin) to create such file.

For ESP-IDF projects, you can also build a single UF2 file using the command: `idf.py uf2`. The file will be located in `build/uf2.bin`, and can be uploaded to the simulator.
:::

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

- [Blink using FreeRTOS API](https://wokwi.com/projects/411723444725332993)
- [Binary LED counter using FreeRTOS tasks](https://wokwi.com/projects/322609470223942226)
- [GPIO button input + interrupts](https://wokwi.com/projects/342634722692694610)
- [WiFi Example](https://wokwi.com/projects/411725624945943553)

### Sming Framework

Follow [this guide](https://sming.readthedocs.io/en/latest/experimental/wokwi.html) to simulate Sming Framework projects.

## Simulation Features

| Peripheral         | ESP32 | S2 | S3 | C3 | C6 | H2 | Notes                                                            |
|--------------------|-------|----|----|----|----|----|------------------------------------------------------------------|
| Processor core(s)  | ✔️    | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |                                                                  |
| GPIO               | ✔️    | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | Interrupts supported                                             |
| IOMUX              | ✔️    | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |                                                                  |
| PSRAM              | ✔️    | ✔️ | ✔️ | —  | —  | —  | 4MB of external SRAM \*                                          |
| UART               | ✔️    | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |                                                                  |
| USB                | —     | ✔️ | ✔️ | —  | —  | —  | Support for UART over USB (CDC)                                  |
| USB Serial + JTAG  | —     | —  | ✔️ | ✔️ | ✔️ | ✔️ | Serial supported, JTAG not.                                      |
| I2C                | ✔️    | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | Master only. 10-bit addressing not supported.                    |
| I2S                | ❌     | ❌  | ❌  | ❌  | ❌  | ❌  | [Implementation in progress](https://github.com/wokwi/wokwi-features/issues/213) |
| SPI                | ✔️    | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |                                                                  |
| TWAI               | 🟡    | 🟡 | 🟡 | 🟡 | 🟡 | ✔️ |                                                                  |
| RMT                | 🟡    | 🟡 | 🟡 | 🟡 | 🟡 | ✔️ | Transmit-only, use to control WS2812 LED strips                  |
| LEDC PWM           | ✔️    | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | Used by analogWrite(), Servo, Buzzer, etc.                       |
| MCPWM              | ❌     | —  | ❌  | —  | ❌  | ❌  |                                                                  |
| PCNT               | ✔️    | ✔️ | ✔️ | —  | ✔️ | ✔️ |                                                                  |
| DMA                | ✔️    | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |                                                                  |
| WiFi               | ✔️    | ✔️ | ✔️ | ✔️ | ✔️ | —  | See the [ESP32 WiFi Guide](./esp32-wifi)                         |
| Bluetooth          | ❌     | —  | ❌  | ❌  | ❌  | ❌  |                                                                  |
| Timers             | ✔️    | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |                                                                  |
| Watchdog           | ❌     | ❌  | ❌  | ❌  | ❌  | ❌  |                                                                  |
| RTC                | 🟡    | 🟡 | 🟡 | 🟡 | 🟡 | 🟡 | Only RTC Pull-up / Pull-down resistors                           |
| ADC                | ✔️    | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |                                                                  |
| RNG                | ✔️    | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | Random Number Generator                                          |
| AES Accelerator    | ✔️    | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |                                                                  |
| SHA Accelerator    | ✔️    | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |                                                                  |
| RSA Accelerator    | ✔️    | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |                                                                  |
| ECC Accelerator    | —     | —  | —  | —  | ✔️ | ✔️ |                                                                  |
| Hall Effect Sensor | ❌     | —  | ❌  | —  | —  | —  |                                                                  |
| ULP Processor      | ❌     | ❌  | ❌  | —  | ✔️ | —  |                                                                  |
| GDB Debugging      | ✔️    | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | Works with [Wokwi for VS Code](../vscode/debugging)              |

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
|-----------|------------------------------------------------------------|---------|
| flashSize | Flash size in MB. Valid values: "2", "4", "8", "16", "32". | "4"     |
| psramSize | PSRAM size in MB. Valid values: "2", "4", "8".             | "4"     |
| psramType | PSRAM type. Valid values: "quad", "octal".                 | "quad"  |

- [ESP32 Custom flash size example](https://wokwi.com/projects/349656534768157267)

### USB CDC (Serial over USB) support

Some chips have a built-in USB CDC (Serial over USB) + JTAG peripheral. These chips include the ESP32-S3, ESP32-C3, ESP32-C6, and ESP32-H2. You can configure USB CDC support in Wokwi by adding the following attribute to the chip:

```json
{ 
  "serialInterface": "USB_SERIAL_JTAG" 
}
```

Note that you also need to remove any connections to the `$serialMonitor` pins from the `connections` section in your diagram.json file.

### Custom Partition Table

You can specifiy a custom partititon table by adding a "partitions.csv" file to your project. Check out the [ESP32 Partition Table Guide](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-guides/partition-tables.html) for the exact format of this file.

- [ESP32 Custom partition table code example](https://wokwi.com/projects/337425600260080210)

### Custom firmware offset

When loading a custom firmware, you can specify the offset of the firmware in the flash memory. By default, Wokwi will look at the firmware binary and try to figure out the offset automatically, based on the presence of the bootloader and the type of the chip. If Wokwi can't figure out the offset, it will assume that your firmware is an application firmware and load it at offset 0x10000.

You can specify the offset manually by adding the following attribute to the chip:

| Attribute      | Description                                           | Default |
|----------------|-------------------------------------------------------|---------|
| firmwareOffset | Offset of the firmware in the flash memory, in bytes. | ""      |

### Changing the MAC address

You can change the MAC address of the WiFi interface by adding the following attribute to the chip:

| Attribute  | Description                                                 | Default             |
|------------|-------------------------------------------------------------|---------------------|
| macAddress | MAC address of the WiFi interface, e.g. "24:0a:c4:12:45:56" | "24:0a:c4:00:01:10" |

### CPU frequency limit

In order to achieve a higher simulation speed, Wokwi automatically limits the maximum simulated CPU frequency. In most cases, this doesn't affect the behavior of the simulated program and allows you to run the simulation considerably faster. The CPU frequency limit does not affect the timing of the peripherals, only the speed instructions are executed.

To override the maximum CPU frequency, you can set the "cpuFrequency" attribute to a specific frequency (e.g. "16" for 16 MHz) or "max" to run the CPU at the maximum frequency (not recommended - it will make the simulation much slower). The default value is "auto", which means that Wokwi will automatically cap the CPU frequency to about 8 MHz.

| Attribute    | Description                                         | Default |
|--------------|-----------------------------------------------------|---------|
| cpuFrequency | Maximum simulated CPU frequency, e.g. "16" or "max" | "auto"  |
