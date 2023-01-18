---
title: Getting Started with the Wokwi Custom Chips C API
sidebar_label: Getting Started
---

# Getting Started with the Wokwi Custom Chips C API

:::caution

The Chips API is currently in beta. Please share your experiments and provide feedback in the `#custom-chips` channel on the [Discord chat](https://wokwi.com/discord).

:::

## Getting started

Open the [Custom Chip Playground](https://wokwi.com/projects/327144279206003284), go to the code editor, press `F1` and select _Create a custom C chip (beta)_.

This will create a new file called `i2c-counter.chip.c`. This file contains an example of a simple [I2C](i2c) device with an 8-bit counter that increments for every byte that you read. Writing to the device will override the value.

The device also provides an `INT` pin that goes low when the counter is greater than `127`. Otherwise, the `INT` pin is in input (high impedance) state.

Start the simulation to observe the behavior of the custom chip: the Arduino code should read the counter value, and the LED will light up when the counter goes over `127`.

## Adding your custom chip to the simulation

The [Custom Chip Playground](https://wokwi.com/projects/327144279206003284) already has the chip wired in, but you can follow the instructions below to connect a custom chip to a different project.

Add the following snippet to your diagram.json:

`{ "type": "chip-i2c-counter", "id": "chip1", "top": 0, "left": 0, "attrs": {} },`

Wokwi automatically generates a **breakout board** for your chip. Edit `i2c-counter.chip.json` to define the pins for your part. The `pins` array should contain the names of your chip's pins, starting from pin number `1`. If you wish to skip some pins (e.g. you want the breakout board to only have pins on its left side), use an empty string (`""`) for the pin name.

## Using the API

First, make sure to `#include "wokwi-api.h"`.
The chip should declare a `chip_init` method. This method will be called for every new instance of the chip. If the chip has some internal state, `chip_init` should allocate memory for the internal state, and save a pointer to this memory in the `void *user_data` field of the device configuration structures (e.g. `i2c_config_t`, `timer_config_t`, etc.).

Here's an example of a minimal chip file:

```cpp
#include "wokwi-api.h"

void chip_init() {
  /*
    This method runs when the simulation starts. It's called once for each instance of the chip.
    You'd usually allocate some memory to store the chip state, initialize a bunch of pins with pin_init(),
    and configure pin watches, timers, and protocols such as UART, I2C, and SPI.
  */
}
```

### Debugging your custom chip

You can print debugging messages using the standard C `printf()` function. Make sure to also `#include <stdio.h>` in your program. The debugging messages will appear in the browser's developer console (to view it in Chrome: `Ctrl`+`Shift`+`J` or `Option`+`⌘`+`J`).

The debug messages from your chip will be printed in green color:

<img src={require('./chip-debug.png').default} alt="Chip debug messages displayed in green" />

In addition, you can use the [Wokwi Logic Analyzer](../guides/logic-analyzer) to debug the communication with your custom chip.

## Chip API reference 📖

- [GPIO pins API](gpio)
- [Analog API](analog)
- [Time simulation API](time)
- [UART API](uart)
- [I2C Device API](i2c)
- [SPI Device API](spi)
- [Attributes](attributes)
- [Framebuffer API](framebuffer)

## Chip examples

- [Digital Inverter](https://wokwi.com/projects/327458636089524820)
- [XOR gate](https://wokwi.com/projects/329456176677782100)
- [SPI Chip](https://wokwi.com/projects/330669951756010068) - Implements a basic ROT13 cipher
- [I2C Chip](https://wokwi.com/projects/344061754973618771) - Simple counter interrupt output
- [UART Chip](https://wokwi.com/projects/333638144389808723) - Implements a basic ROT13 cipher
- [Timer Chip](https://wokwi.com/projects/341265875285836370) - Showing how to use the Timer API
- [LM75A Chip](https://wokwi.com/projects/344037885763125843) - I2C digital temperature sensor
- [Framebuffer Chip](https://wokwi.com/projects/330503863007183442) - Shows how to implement a custom display driver chip
- [IL9163 Display Driver](https://wokwi.com/projects/333332561949360723) - 128x128 color LCD display chip
- [I2C Keypad Driver Example](https://wokwi.com/projects/344059749365449300) (by Yewolf)
- [CD4051B Multiplexer Example](https://wokwi.com/projects/343522915673702994) (by Chris Schmidt)
- [EEPROM Chip](https://wokwi.com/projects/329482717479567954) (by Benny Meisels)
- [PCA9685 Chip](https://wokwi.com/projects/348856116302578258) (by Bonny Rais)
- [DS18B20 Chip](https://wokwi.com/projects/349898396478210642) (by Bonny Rais) - Dallas Semi DS18B20 Temperature Sensor over OneWire
