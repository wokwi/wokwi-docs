---
title: Getting Started with Wokwi for VS Code
sidebar_label: Getting Started
description:  Simulate embedded and IoT projects directly inside Visual Studio Code using the Wokwi extension. Supports PlatformIO, ESP-IDF, Arduino, MicroPython, Rust, Zephyr and more.
keywords: [Visual Studio Code, VS Code, embedded simulation, IoT simulation, PlatformIO, ESP-IDF, Arduino, MicroPython, Rust, Zephyr]
---

# Wokwi for VS Code

Wokwi for Visual Studio Code provides a simulation solution for embedded and IoT system engineers. The extension integrates with your existing development environment, allowing you to simulate your projects directly from your code editor.

You can use Wokwi for VS Code with Zehpyr Project, PlatformIO, ESP-IDF, Pi Pico SDK, NuttX, Rust, Arduino CLI, MicroPython, and other embedded development frameworks and toolchains.

<figure>
  <video src="https://wokwi.github.io/video-assets/vscode/wokwi-vscode-1s.mp4" autoPlay muted loop style={{width:'100%'}}></video>
  <figcaption>Wokwi for VS Code running an ESP-IDF project</figcaption>
</figure>

## Installation

First, install the [Wokwi for VS Code](https://marketplace.visualstudio.com/items?itemName=wokwi.wokwi-vscode) extension. Then, press `F1` and select "Wokwi: Request a new License". VS Code will ask you confirm opening the Wokwi website in your browser. Confirm by clicking "Open".

Then click on the button that says "GET YOUR LICENSE". You may be asked to sign in to your Wokwi account. If you don't have an account, you can create one for free.

The browser will ask for a confirmation to send the license to VS Code. Confirm (you may have to confirm twice, once in the browser, and once in VS Code). You'll see a message in VS Code that says "License activated for [your name]". Congratulations!

## Example Projects

To configure Wokwi for your own project, see the [Project Configuration](./project-config) page.

If you just want to get started quickly and play around with Wokwi for VS Code, here are some example projects, preconfigured with [diagram.json](../diagram-format) and [wokwi.toml](./project-config) files.

:::info
Before simulating any of the following projects, you need to compile the code and generate the firmware / ELF file. Consult the project's README file for instructions on how to compile the code.
:::

### Platform IO Examples

- [Arduino Simon Game](https://github.com/wokwi/arduino-simon-game) - Memory game with 4 LEDs, 4 buttons, a buzzer, and a 7-segment display
- [ESP32 Network Clock](https://github.com/wokwi/esp32-ntp-clock) - Syncs time from the internet (NTP) and displays it on an LCD display
- [ESP32 Web Server](https://github.com/wokwi/esp32-http-server) - HTTP server that controls 2 LEDs
- [ESP32 Async Web Server](https://github.com/wokwi/esp32-async-web-server-example) - HTTP server that controls 2 LEDs, using the ESPAsyncWebServer library

### ESP-IDF Examples

- [WiFi + FreeRTOS Tasks](https://github.com/wokwi/esp32-idf-hello-wifi)
- [SSD1306 OLED with LVGL Graphics](https://github.com/wokwi/esp-idf-oled-ssd1306)

### STM32 Examples

- [STM32 Nucleo64 C031C6 with STM32 HAL](https://github.com/wokwi/stm32-hello-wokwi)
- [CMSIS on STM32C031C6](https://github.com/WelsTheory/stm32_hello_cmsis_wokwi)
- [FreeRTOS on STM32C0](https://github.com/KhalilOuali/FreeRTOS-STM32-VSCode-Wokwi)

### ESP32 + Rust

- [Hello Display](https://github.com/playfulFence/esp-hello-display/tree/feature/vscode-wokwi) - Using ESP32-C3 and ILI9341 Display
- [esp-gallery](https://github.com/playfulFence/esp-gallery) - Interactive art gallery (ESP32-C3)
- [ESP32-S2 Keypad Example](https://github.com/playfulFence/esp-keypad-example/tree/feature/vscode-wokwi)
- [Scrolling text](https://github.com/playfulFence/esp-rolling-stone) - Using LED Dot Matrix Display
- [Etch-A-Sketch](https://github.com/playfulFence/esp-etch-a-sketch) - Draw on an LED Dot Matrix using an analog joystick

### MicroPython

Check out the [MicroPython on Wokwi for VS Code repo](https://github.com/wokwi/wokwi-vscode-micropython) for examples and instructions.

### Sming Framework

- [Using Wokwi with the Sming Framework](https://sming.readthedocs.io/en/latest/experimental/wokwi.html)

### Arduino Extension Examples

- [Arduino LCD-1602 "Hello World"](https://github.com/wokwi/arduino-lcd-helloworld)

### Other Examples

- [Custom chips example](https://github.com/wokwi/inverter-chip) - A [custom chip](../chips-api/getting-started) that inverts the input signal
- [Raspberry Pi Pico SDK](https://github.com/wokwi/pico-sdk-blink) - Blinky for Raspberry Pi Pico
