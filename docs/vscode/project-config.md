---
title: Configuring Your Project (wokwi.toml)
sidebar_label: Project Config
---

To simulate your project on Wokwi, you need to create two files in your project's root directory:

- `wokwi.toml` - a configuration file that tells Wokwi how to run your project.
- `diagram.json` - a [diagram file](../diagram-format) that describes the circuit.

## wokwi.toml

A basic `wokwi.toml` file looks like this:

```toml
[wokwi]
version = 1
firmware = 'path-to-your-firmware.hex'
elf = 'path-to-your-firmware.elf'
```

Replace "path-to-your-firmware" with the location of the compiled firmware, **relative** to the wokwi.toml file (that is your workspace's root directory).

The extension of the firmware file depends on the board you are using:

| Board                      | Firmware file extension |
| -------------------------- | ----------------------- |
| Arduino Uno/Mega, ATtiny85 | .hex or .elf            |
| Raspberry Pi Pico          | .uf2 or .hex            |
| ESP32 Family               | .bin or .elf            |

You check test your configuration by pressing **F1** and then selecting "**Wokwi: Start Simulator**".

:::caution
Avoid using backslashes (`\`) in your paths. Use forward slash (`/`) instead, as it makes it possible to open your project on any platform (Windows, Mac and Linux).
:::

### IoT Gateway (ESP32 WiFi)

Wokwi for VS Code includes a bundled version of the [Wokwi Private IoT Gateway](../guides/esp32-wifi#internet-access), which allows you to connect the virtual WiFi of the simulated ESP32 to your local network and the Internet.

You can also connect to the simulated ESP from your computer (e.g. you are running a web server on the ESP32). To do so, set up port forwarding in wokwi.toml. For instance, to forward local port 8180 to port 80 on the ESP32, add the following configuration:

```
# Forward http://localhost:8180 to port 80 on the simulated ESP32:
[[net.forward]]
from = "localhost:8180"
to = "device:80"
```

For a complete example, see the [ESP32 Web Server](https://github.com/wokwi/esp32-http-server) project.

### Custom chips

You can load custom chips to the simulation by adding a `[[chip]]` sections to your wokwi.toml configuration. The following example will load a chip from "chip/inverter.chip.wasm" and make it available under the name `chip-inverter` in Wokwi's diagram:

```toml
[[chip]]
name = 'inverter'  # To use the chip in diagram.json, add a part with "chip-inverter" type.
binary = 'chips/inverter.chip.wasm'
```

Wokwi also requires a JSON file that describes the chip pins. The JSON file should have the same name as the wasm binary, but with a json extension (e.g. `chips/inverter.chip.json` in the above example). For a complete example, check out [the inverter-chip repo](https://github.com/wokwi/inverter-chip).

You can add multiple chips to your project by adding multiple `[[chip]]` sections, each with a different `name` and `binary`.

## diagram.json

You can copy the [diagram file](../diagram-format) from an existing project on [Wokwi.com](https://wokwi.com). For instance, if you are working on an ESP32 project, you can copy the contents of diagram.json from https://wokwi.com/projects/new/esp32.
