---
title: ESP32仿真
sidebar_label: ESP32仿真
---

ESP32是一款支持WiFi和蓝牙的流行的微控制器，被广泛用于物联网项目。Wokwi可以仿真ESP32、ESP32-S2和ESP32-C3（测试版）。

<wokwi-esp32-devkit-v1></wokwi-esp32-devkit-v1>

## ESP32支持的板卡

| Name                                                | Chip     | Description                      |
| --------------------------------------------------- | -------- | -------------------------------- |
| ESP32 DevKit v1                                     | ESP32    | 流行的ESP32开发板                |
| TinyPICO                                            | ESP32    | UnexpectedMaker制作的小型ESP32板 |
| ESP32-S2-DevKitM-1                                  | ESP32-S2 | 入门级ESP32-S2开发板             |
| [Franzininho WiFi](../parts/board-franzininho-wifi) | ESP32-S2 | Franzininho社区制作的板卡        |
| ESP32-C3-DevKitM-1                                  | ESP32-C3 | 入门级ESP32-C3开发板             |
| Rust Board ESP32-C3                                 | ESP32-C3 | 用于Rust开发的ESP32-C3板         |

您可以通过向[wokwi-boards](https://github.com/wokwi/wokwi-boards)发送拉取请求来贡献其他板卡。

## 立即开始

您可以通过三种方式使用ESP32仿真器：

1. 使用ESP32 Arduino Core构建项目（包括ESP-IDF项目）
2. 运行MicroPython项目（也可以在ESP32-S2上运行CircuitPython）
3. 仿真您在计算机上构建的bin应用程序文件（例如使用ESP-IDF）

### Arduino Core

从[Arduino-ESP32 Project Template](https://wokwi.com/projects/new/esp32)或[ESP32 Blink Example](https://wokwi.com/projects/305452382231200320)开始学习。

如果您想使用第三方Arduino库，请添加一个包括您使用的库列表的[libraries.txt file](./libraries)。

### MicroPython

从[MicroPython ESP32 Project Template](https://wokwi.com/projects/new/micropython-esp32)或[MicroPython ESP32 Blink Example](https://wokwi.com/projects/305452627045384768)开始学习。

注意：在仿真运行时，在串行终端内按Ctrl+C进入_MicroPython REPL_。或者，您可以编辑闪烁示例代码，删除while循环。有关更多信息，请查看[MicroPython Guide](./micropython)。

### 自定义bin应用文件

打开[ESP32 custom application project template](https://wokwi.com/projects/305457271083631168)，然后在代码编辑器中按“F1”。然后选择“加载HEX文件并开始仿真...”。从您的计算机中选择任何.bin文件，仿真将开始。

## 仿真例子

### Arduino Examples

- [Blink](https://wokwi.com/projects/305566932847821378)
- [Seven segment counter](https://wokwi.com/projects/305567166302782017)
- [FastLED NeoPixel Blink](https://wokwi.com/projects/312460386125218368)
- [APA102 Color Cycles (TinyPico Board)](https://wokwi.com/projects/308012505806930496)
- [WiFi Scanning](https://wokwi.com/projects/305569599398609473)

### MicroPython Examples

- [SSD1306 Example](https://wokwi.com/projects/305568836183130690)
- [NeoPixels](https://wokwi.com/projects/305569065545499202)
- [AES256 Encryption](https://wokwi.com/projects/321484545174012499)
- [WiFi Scanning](https://wokwi.com/projects/305570169692881473)

### ESP-IDF Examples

以下示例中使用了ESP-IDF函数。它们使用Arduino ESP32 Core编译：

- [Blink using FreeRTOS API](https://wokwi.com/projects/304209256260829762)
- [Binary LED counter using FreeRTOS tasks](https://wokwi.com/projects/322609470223942226)
- [GPIO button input + interrupts](https://wokwi.com/projects/304633599712297536)

## 仿真器特性 

| 外设       | ESP32 | S2  | C3  | Notes                                                                    |
| ------------------ | ----- | --- | --- | ------------------------------------------------------------------------ |
| Processor core(s)  | ✔️    | ✔️  | ✔️  |                                                                          |
| GPIO               | ✔️    | ✔️  | ✔️  | 支持中断                                                |
| IOMUX              | 🟡    | 🟡  | 🟡  |                                                                          |
| PSRAM              | ✔️    | ✔️  | —   | 4MB 外部 SRAM                                                   |
| UART               | ✔️    | ✔️  | ✔️  |                                                                          |
| USB                | —     | ✔️  | ❌  | Support for UART over USB (CDC)                      |
| I2C                | ✔️    | ✔️  | ✔️  | 仅支持主机模式。不支持10位寻址。 |
| I2S                | ❌    | ❌  | ❌  | [Open for voting](https://wokwi.com/features#feature-1031718532)         |
| SPI                | ✔️    | ✔️  | ✔️  |                                                                          |
| TWAI               | ❌    | ❌  | ❌  |                                                                          |
| RMT                | 🟡    | 🟡  | 🟡  | 仅支持发送，用于控制NeoPixels             |
| LEDC PWM           | ✔️    | ✔️  | ✔️  | 用于 analogWrite()、舵机、蜂鸣器等。    |
| MCPWM              | ❌    | —   | —   |                                                                          |
| DMA                | 🟡    | 🟡  | ❌  |                                                                          |
| WiFi               | ✔️    | ✔️  | ✔️  | See the [ESP32 WiFi Guide](./esp32-wifi)                                 |
| Bluetooth          | ❌    | —   | ❌  | [Open for voting](https://wokwi.com/features#feature-1047159691)         |
| Timers             | 🟡    | ✔️  | ✔️  |                                                                          |
| Watchdog           | ❌    | ❌  | ❌  |                                                                          |
| RTC                | 🟡    | 🟡  | 🟡  | 只有RTC上拉/下拉电阻                       |
| ADC                | ✔️    | ✔️  | ❌  | 注意： analogRead()返回值最大为4095 |
| RNG                | ✔️    | ✔️  | ✔️  | 随机数生成器                                            |
| AES Accelerator    | ✔️    | ✔️  | ✔️  |                                                                          |
| SHA Accelerator    | ✔️    | ✔️  | ✔️  |                                                                          |
| RSA Accelerator    | ✔️    | ✔️  | ✔️  |                                                                          |
| Hall Effect Sensor | ❌    | —   | —   |                                                                          |
| ULP Processor      | ❌    | ❌  | ❌  |                                                                          |
| GDB Debugging      | 🟡    | 🟡  | 🟡  | 要使用 [wokwi-gdbserver](https://github.com/wokwi/wokwi-gdbserver) |

说明:  
✔️ - 已支持  
🟡 - 部分支持/正在开发  
❌ - 不支持（但如果您需要，请[open a feature request](https://github.com/wokwi/wokwi-features/issues/new?labels=enhancement&template=feature_request.md)）
— - 此芯片不可用

## WiFi 仿真

看这里： [ESP32 WiFi Guide](./esp32-wifi).

## 高级使用

### 自定义分区表（Partition Table）

您可以通过向项目中添加“partitions.csv”文件来指定自定义分区表。查看[ESP32 Partition Table Guide](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-guides/partition-tables.html)了解此文件的确切格式。

- [ESP32 Custom partition table code example](https://wokwi.com/projects/337425600260080210)
