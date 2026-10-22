---
title: board-pi-pico-2w Reference
sidebar_label: board-pi-pico-2w
---

Raspberry Pi Pico 2 W, an RP2350 microcontroller board with a CYW43439 wireless chip for 2.4 GHz WiFi and Bluetooth.

![Raspberry Pi Pico 2 W](https://raw.githubusercontent.com/wokwi/wokwi-boards/main/boards/pi-pico-2w/board.svg)

The pin-out, simulation features, Serial Monitor setup and UF2 export are the same as the [board-pi-pico-2](board-pi-pico-2). Check out the [board-pi-pico-2 docs](board-pi-pico-2) for more information.

## Onboard LED

The onboard LED is attached to GPIO 0 of the wireless chip (WL_GPIO0), not to an RP2350 pin. The hidden pins TP5 and TP4 map to wireless chip GPIO 0 and GPIO 1. `LED_BUILTIN` works in Arduino code, and `Pin("LED")` in MicroPython.

## WiFi

The simulated CYW43439 connects to the virtual WiFi network, so WiFi code written for the real board runs unchanged. The simulator provides an open access point called **Wokwi-GUEST** with internet access through the Wokwi gateway; the [WiFi guide](../guides/esp32-wifi) describes the network, the gateway options and how to add your own access point with the [wokwi-wifi-ap](wokwi-wifi-ap) part. Bluetooth is not simulated.

## Pico SDK

Pico SDK projects are compiled with `PICO_BOARD=pico2_w`, which enables the `pico_cyw43_arch` libraries.

## MicroPython

The MicroPython firmware includes the `network` module for WiFi. Start from the [Raspberry Pi Pico 2 W MicroPython project template](https://wokwi.com/projects/new/micropython-pi-pico-2w).
