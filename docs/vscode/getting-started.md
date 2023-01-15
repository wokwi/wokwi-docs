---
title: Getting Started with Wokwi for VS Code
sidebar_label: Getting Started
---

Wokwi for Visual Studio Code provides a simulation solution for embedded and IoT system engineers. The extension integrates with your existing development environment, allowing you to simulate your projects directly from your code editor.

You can use Wokwi for VS Code with Zehpyr Project, PlatformIO, ESP-IDF, Pi Pico SDK, NuttX, Rust, Arduino CLI, and other embedded development frameworks and toolchains.

:::caution
Wokwi for VS Code is currently in public beta. After the beta, some features will be available only to paid users.
:::

<figure>
  <video src="https://wokwi.github.io/video-assets/vscode/wokwi-vscode-1s.mp4" autoPlay muted loop style={{width:'100%'}}></video>
  <figcaption>Wokwi for VS Code running an ESP-IDF project</figcaption>
</figure>

## Installation

First, install the [Wokwi for VS Code](https://marketplace.visualstudio.com/items?itemName=wokwi.wokwi-vscode) extension. Then, press `F1` and select "Wokwi: Request a new License". VS Code will ask you confim opening the Wokwi website in your browser. Confirm by clicking "Open".

Then click on the purple button that says "GET YOUR LICENSE". You may be asked to sign in to your Wokwi account. If you don't have an account, you can create one for free.

The browser will ask for a confirmation to send the license to VS Code. Confirm (you may have to confirm twice, once in the browser, and once in VS Code). You'll see a message in VS Code that says "License activated for [your name]". Congratulations!

## Example Projects

To configure wokwi for your own project, do this.

If you just want to get started quickly and play around with Wokwi for VS Code, here are some example projects, preconfigured with [diagram.json](../diagram-format) and [wokwi.toml](./project-config) files.

:::info
Before simulating any of the following projects, you need to compile the code and generate the firmware / ELF file. Consult the project's README file for instructions on how to compile the code.
:::

### Platform IO Examples

- [Arduino Simon Game](https://github.com/wokwi/arduino-simon-game) - Memory game with 4 LEDs, 4 buttons, a buzzer, and a 7-segment display
- [ESP32 Network Clock](https://github.com/wokwi/esp32-ntp-clock) - Syncs time from the internet (NTP) and displays it on an LCD display
- [ESP32 Web Server](https://github.com/wokwi/esp32-http-server) - HTTP server that controls 2 LEDs

### ESP-IDF Examples

- [WiFi + FreeRTOS Tasks](https://github.com/wokwi/esp32-idf-hello-wifi)

### ESP32 + Rust

- [Hello Display](https://github.com/playfulFence/esp-hello-display/tree/feature/vscode-wokwi) - Using ESP32-C3 and ILI9341 Display
- [esp-gallery](https://github.com/playfulFence/esp-gallery) - Interactive art gallery (ESP32-C3)
- [ESP32-S2 Keypad Example](https://github.com/playfulFence/esp-keypad-example/tree/feature/vscode-wokwi)
- [Scrolling text](https://github.com/playfulFence/esp-rolling-stone) - Using LED Dot Matrix Display
- [Etch-A-Sketch](https://github.com/playfulFence/esp-etch-a-sketch) - Draw on an LED Dot Matrix using an analog joystick

### Arduino Extension Examples

:::caution
VS Code's Arduino Extension requires Arduino IDE 1.8 or [Arduino CLI](https://github.com/microsoft/vscode-arduino/issues/1477#issuecomment-1278699661) installed. It doesn't work (yet) with Arduino IDE 2.0.
:::

- [Arduino LCD-1602 "Hello World"](https://github.com/wokwi/arduino-lcd-helloworld)

### Other Examples

- [Custom chips example](https://github.com/wokwi/inverter-chip) - A [custom chip](../chips-api/getting-started) that inverts the input signal
- [Raspberry Pi Pico SDK](https://github.com/wokwi/pico-sdk-blink) - Blinky for Raspberry Pi Pico
