---
title: 开始使用 Wokwi for VS Code
sidebar_label: 开始使用
---

Wokwi for Visual Studio Code 为嵌入式和物联网系统工程师提供了一个模拟解决方案。该扩展与您现有的开发环境集成，允许您直接从代码编辑器模拟您的项目。

您可以将 Wokwi for VS Code 与 Zehpyr Project、PlatformIO、ESP-IDF、Pi Pico SDK、NuttX、Rust、Arduino CLI 和其他嵌入式开发框架和工具链一起使用。

:::caution
Wokwi for VS Code 目前处于公开测试阶段。测试结束后，一些功能将只对付费用户开放。
:::

<figure>
  <video src="https://wokwi.github.io/video-assets/vscode/wokwi-vscode-1s.mp4" autoPlay muted loop style={{width:'100%'}}></video>
  <figcaption>Wokwi for VS Code running an ESP-IDF project</figcaption>
</figure>

## 安装

首先，安装 [Wokwi for VS Code](https://marketplace.visualstudio.com/items?itemName=wokwi.wokwi-vscode) 扩展。然后，按 `F1` 并选择“Wokwi: Request a new License”。 VS Code 会要求您确认在浏览器中打开 Wokwi 网站。单击“Open”进行确认。

然后单击“GET YOUR LICENSE”按钮。可能需要登录您的 Wokwi 帐户。如果您没有帐户，可以免费创建一个。

浏览器将要求确认将许可证发送到 VS Code。确认（您可能需要确认两次，一次在浏览器中，一次在 VS Code 中）。你会在 VS Code 中看到一条消息，上面写着“License activated for [你的名字]”。恭喜你，已经安装好了！

## 示例项目

要为您自己的项目配置 Wokwi，请参阅[项目配置](./project-config)页面。

如果您只是想快速入门并使用 Wokwi for VS Code，这里有一些示例项目，预先配置了 [diagram.json](../diagram-format) 和 [wokwi.toml](./project-config) 文件。

:::info
在模拟以下任何项目之前，您需要编译代码并生成 固件 / ELF 文件。有关如何编译代码的说明，请参阅项目的自述文件。
:::

### Platform IO 示例

- [Arduino Simon Game](https://github.com/wokwi/arduino-simon-game) - 带有 4 个 LED、4 个按钮、一个蜂鸣器和一个 7 段显示器的记忆游戏
- [ESP32 Network Clock](https://github.com/wokwi/esp32-ntp-clock) - 从互联网 (NTP) 同步时间并将其显示在 LCD 显示屏上
- [ESP32 Web Server](https://github.com/wokwi/esp32-http-server) - 控制 2 个 LED 的 HTTP 服务器
- [ESP32 Async Web Server](https://github.com/wokwi/esp32-async-web-server-example) - 使用 ESPAsyncWebServer 库控制 2 个 LED 的 HTTP 服务器

### ESP-IDF 示例

- [WiFi + FreeRTOS Tasks](https://github.com/wokwi/esp32-idf-hello-wifi)

### ESP32 + Rust

- [Hello Display](https://github.com/playfulFence/esp-hello-display/tree/feature/vscode-wokwi) - 使用 ESP32-C3 和 ILI9341 显示器
- [esp-gallery](https://github.com/playfulFence/esp-gallery) - 互动艺术画廊 (ESP32-C3)
- [ESP32-S2 Keypad Example](https://github.com/playfulFence/esp-keypad-example/tree/feature/vscode-wokwi)
- [Scrolling text](https://github.com/playfulFence/esp-rolling-stone) - 使用 LED 点阵显示
- [Etch-A-Sketch](https://github.com/playfulFence/esp-etch-a-sketch) - 使用模拟操纵杆在 LED 点阵上绘图

### Arduino 扩展示例

:::caution
VS Code 的 Arduino 扩展需要安装 Arduino IDE 1.8 或 [Arduino CLI](https://github.com/microsoft/vscode-arduino/issues/1477#issuecomment-1278699661)。它不适用于 Arduino IDE 2.0（目前）。
:::

- [Arduino LCD-1602 "Hello World"](https://github.com/wokwi/arduino-lcd-helloworld)

### Other 示例

- [Custom chips example](https://github.com/wokwi/inverter-chip) - 反转输入信号的[自定义芯片](../chips-api/getting-started)
- [Raspberry Pi Pico SDK](https://github.com/wokwi/pico-sdk-blink) - Blinky for Raspberry Pi Pico
