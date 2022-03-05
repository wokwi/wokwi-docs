---
title: wokwi-pi-pico Reference
sidebar_label: wokwi-pi-pico
---

Raspberry Pi Pico, an RP2040 microcontroller board with dual-core ARM Cortex-M0+ processor, 264k of internal RAM, and flexible
Programmable I/O (PIO) feature.

![Raspberry Pi Pico](wokwi-pi-pico.svg)

## Pin names

Pins GP0 to GP22 are digital GPIO pins. Pins GP26, GP27, and GP28 are digital GPIO pins with analog input function.

| Name            | Description                 | Analog input channel |
| --------------- | --------------------------- | -------------------- |
| GP0 … GP22      | Digital GPIO pins (0 to 22) |                      |
| GP26            | Digital GPIO pin 26         | 0                    |
| GP27            | Digital GPIO pin 27         | 1                    |
| GP28            | Digital GPIO pin 28         | 2                    |
| GND.1 … GND.8   | Ground pins \*              |                      |
| VSYS, VBUS, 3V3 | Positive power supply       |                      |
| TP4 †           | Digital GPIO pin 23         |                      |
| TP5 †           | Digital GPIO pin 25 + LED   |                      |

\* The physical pin numbers of the ground pins are 3, 8, 13, 18, 23, 28, 33, and 38.  
† These pins do not appear in the visual diagram editor, but you can use them in your [diagram.json](../diagram-format) file.

Pins 3V3_EN / RUN / ADC_VREF are not available in the simulation and are therefore omitted from the table.

### Onboard LED

The Raspberry Pi Pico has an onboard LED, attached to GPIO PIN 25. The LED is lit when the pin is driven high.

You can also use the `LED_BUILTIN` constant to reference the LED in your Arduino code:

```cpp
pinMode(LED_BUILTIN, OUTPUT);
digitalWrite(LED_BUILTIN, HIGH);
```

See [Blink](https://wokwi.com/projects/297755575592157709) for a complete code example.

## Simulation features

The Raspberry Pi Pico is simulated using the [RP2040js Library](https://github.com/wokwi/rp2040js).  
This table summarizes the status of the simulation features:

| Peripheral        | Status | Notes                                                                   |
| ----------------- | ------ | ----------------------------------------------------------------------- |
| Processor core    | ✔️     | Only a single core is simulated                                         |
| GPIO              | ✔️     |                                                                         |
| PIO               | ✔️     | PIO Debugger available                                                  |
| USB               | 🟡     | USB CDC (Serial) supported, see [Serial Monitor](#serial-monitor) below |
| UART              | ✔️     |                                                                         |
| I2C               | ✔️     | Master mode only                                                        |
| SPI               | ❌     |                                                                         |
| PWM               | ❌     |                                                                         |
| DMA               | ✔️     | Only for the PIO peripheral                                             |
| Timer             | ✔️     | Pausing the timer not implemented yet                                   |
| ARM SysTick Timer | 🟡     | Partial implementation                                                  |
| Watchdog          | ❌     |                                                                         |
| RTC               | ❌     |                                                                         |
| ADC + Temp sensor | ✔️     | Temperature sensor always reads 0                                       |
| SSI               | 🟡     | Just the minimum to make the bootloader happy                           |
| GDB Debugging     | ✔️     | See the [GDB Debugging guide](../gdb-debugging)                         |

Legend:  
✔️ Simulated  
🟡 Partial implementation/work in progress  
❌ Not implemented

We're adding the missing features in [weekly live streams](https://www.youtube.com/playlist?list=PLLomdjsHtJTxT-vdJHwa3z62dFXZnzYBm). Expect the list above to update every week or two.

### Arduino core

The Arduino core provides the built-in Arduino functions, such as `pinMode()` and `digitalRead()`, as well as a set of standard Arduino libraries, such as Servo, Wire and SPI.

When compiling your code for the Raspberry Pi Pi Pico, you can choose between two different cores:

- The [official Pi Pico core](https://github.com/arduino/ArduinoCore-mbed), based on Mbed OS. This is the default.
- [The community maintained Pi Pico Arduino Core](https://github.com/earlephilhower/arduino-pico), built on top of [the Pi Pico SDK](https://github.com/raspberrypi/pico-sdk).

You can learn about the key differences between these two cores in [this GitHub comment](https://github.com/earlephilhower/arduino-pico/issues/117#issuecomment-830356795).

To select a core, set the "env" attribute of the `wokwi-pi-pico` part. For the official Arduino core, use the value "arduino-core". For the community maintained core, set "env" to "arduino-community". e.g.:

```json
  "parts": [
    {
      "type": "wokwi-pi-pico",
      "id": "pico",
      "attrs": {
        "env": "arduino-community"
      }
      …
    },
    …
  ]
```

### Serial Monitor

You can use the Serial Monitor to receive information from the code running on the Pi Pico, such as debug prints. By default, the Serial Monitor communicates with
the Pi Pico over USB.

Setting up the USB connection can take some time, and any messages printed during
the USB setup time will be lost. Therefore, it's recommended to tell `setup()` to wait for the Serial Monitor connection before printing anything:

```cpp
void setup() {
  Serial.begin(115200);
  while (!Serial) {
    delay(10); // wait for serial port to connect. Needed for native USB
  }
  // Now you can safely print message:
  Serial.println("Hello, Serial Monitor!");
}
```

### Serial Monitor over UART

The Serial Monitor can also communicate with the Pi Pico over the physical UART interface. To configure the UART communication between the Raspberry Pi Pico and the Serial Monitor, add the following connections to your [diagram.json](../diagram-format#connections) file:

```json
  "connections": [
    [ "$serialMonitor:RX", "pico:GP0", "", [] ],
    [ "$serialMonitor:TX", "pico:GP1", "", [] ],
    …
  ]
```

The example assumes that the Pi Pico was defined with an id of "pico", e.g.

```json
  "parts": [
    {
      "type": "wokwi-pi-pico",
      "id": "pico",
      …
    },
    …
  ]
```

The use the `Serial1` object in your code: initialize the port using `Serial1.begin(115200)`, and then print messages with `Serial1.println()`. For example:

```cpp
void setup() {
  Serial1.begin(115200);
  Serial1.println("Hello, world!");
}

void loop() { }
```

For a complete example, check out the [Pi Pico Serial Monitor over UART Example](https://wokwi.com/projects/297755360074138125).

## Exporting UF2 binary

You can upload the program from the emulator directly into a physical Raspberry Pi Pico board. The steps are:

1. Press "F1" in the Wokwi code editor and select "Download UF2 Binary".
   The download should start within a few seconds.
2. Start your Pi Pico in bootloader mode. You can do this by pressing the boot loader button while
   plugging the Pi Pico into the USB port of your computer.
3. You should see a new drive appear on your computer (named "RPI-RP2"). Copy the UF2 file you downloaded into that drive.

## MicroPython Support

The Raspberry Pi Pico supports MicroPython, and you can use it for running MicroPython projects in Wokwi. For more information, check out the [MicroPython Guide](../guides/micropython).

## Simulator examples

- [Pi Pico and LCD1602](https://wokwi.com/projects/297323005822894602)
- [Pi Pico Traffic Light](https://wokwi.com/projects/297322571959894536)
- [Pi Pico C++ SDK Blink](https://wokwi.com/projects/298013072042230285)
- [Pi Pico C++ SDK 7-Segment Example](https://wokwi.com/projects/298014884249993738)
