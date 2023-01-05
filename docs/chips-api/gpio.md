---
title: GPIO pins API
sidebar_label: GPIO API
---

# GPIO pins API

Chips interact with the simulator using digital pins. The pins are defined in a JSON file, called `{chip-name}.chip.json` (replace `{chip-name}` with the actual name of the chip). For instance, the following JSON file defines a chip with 4 pins (`IN`, `OUT`, `VCC`, `GND`):

```json
{
  "name": "Inverter",
  "author": "Uri Shaked",
  "pins": ["OUT", "IN", "VCC", "GND"]
}
```

The GPIO pins API allows your chip implementation code to interact with the GPIO pins:

### pin_t pin_init(const char \*name, uint32_t mode)

Initializes the given pin, and returns a pin identifier for use with the other pin methods. The `mode` parameters configure the initial state of the pin. The following values are available:

- `INPUT` - configures the pin as a digital input
- `INPUT_PULLUP` - configures the pin as a digital input, and attaches a pull-up register to the pin.
- `INPUT_PULLDOWN` - configures the pin as a digital input, and attaches a pull-down register to the pin.
- `OUTPUT` - configures the pin as a digital output
- `OUTPUT_LOW` - configures the pin as a digital output, sets the value of the pin to LOW
- `OUTPUT_HIGH` - configures the pin as a digital output, sets the value of the pin to HIGH
- `ANALOG` - configures the pin as an analog pin. See the [Analog API](analog) section for more detail.

:::caution

Note: `pin_init()` can only be called from `chip_init()`. Do not call it at a later time. You can use `pin_mode()` to change the mode of a pin at any time.

:::

### void pin_mode(pin_t pin, uint32_t mode)

Configures the given `pin` as digital input or output. The valid values for `mode` are the same as `pin_init()`: `INPUT`, `INPUT_PULLUP`, `INPUT_PULLDOWN`, `OUTPUT`, `OUTPUT_LOW`, `OUTPUT_HIGH`, and `ANALOG`.

### void pin_write(pin_t pin, uint32_t value)

Set the output value for a digital pin. Use the `LOW` and `HIGH` constants for `value`.

### uint32_t pin_read(pin_t pin)

Reads the current digital value of the pin, returns either `LOW` or `HIGH`.

### bool pin_watch(pin_t pin, pin_watch_config_t \*config)

Listens for changes in the digital value of the given pin. The config structure contains the following fields:

| Field        | Type       | Description                                                          |
| ------------ | ---------- | -------------------------------------------------------------------- |
| `edge`       | `uint32_t` | What pin value changes we listen for (`RISING`, `FALLING` or `BOTH`) |
| `pin_change` | callback   | Called when the pin value changes (see below)                        |
| `user_data`  | `void \*`  | Data that will be passed in the first argument to `pin_change`       |

The valid values for edge are:

- `BOTH` - Listen for any value change
- `FALLING` - Listen for `HIGH` to `LOW` changes
- `RISING` - Listen for `LOW` to `HIGH` changes

You can only have one watch for a pin at any given time. The function returns `true` if the watch was successfully set, or `false` in case there is already a watch defined for this pin (and thus the new watch was not set).

The `pin_change` callback signature is as follows:

```cpp
void chip_pin_change(void *user_data, pin_t pin, uint32_t value) {
  // value will either be HIGH or LOW
}
```

### void pin_watch_stop(pin_t pin)

Stops watching for changes on the given pin.
