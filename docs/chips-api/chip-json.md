---
title: Custom Chip JSON Format
sidebar_label: Chip Definition (JSON)
---

# Custom Chip Definition (JSON)

The pinout and properties of custom chips are defined in a Chip Definition JSON file. The file name should be `<chip-name>.chip.json`. For example, if your chip is called `i2c-light-sensor`, the file name should be `i2c-light-sensor.chip.json`.

The JSON file should contain a single object with the following properties:

| Property   | Type             | Description                                                             |
| ---------- | ---------------- | ----------------------------------------------------------------------- |
| `name`     | string           | The name of the chip. This name will be displayed in the diagram editor |
| `author`   | string           | The name of the chip author                                             |
| `pins`     | array of strings | The list of pins for the chip                                           |
| `controls` | array of objects | The list of controls for the chip (optional)                            |
| `display`  | object           | Configuration of an attached display (optional)                         |

## Pins

The `pins` array should contain the names of the pins for your chip, starting from pin number 1. If you wish to skip some pins (e.g. you want the breakout board to only have pins on its left side), use an empty string (`""`) for the pin name.

For example:

```json
  "pins": ["VCC", "GND", "RST", "", "SCL", "SDA"],
```

The example above defines a chip with 5 pins, ordered as follows:

```
       ___
 VCC -|⚬  |- SDA
 GND -|   |- SCL
 RST -|___|-
```

## Controls

Controls provide a way for users to interact with your chip while the simulation is running. For example, a temperature sensor chip can have a control that lets the user set the current temperature.

The `controls` property should contain an array of control objects. Each control object should have the following properties:

| Property | Type   | Description                                                                                  | Example             |
| -------- | ------ | -------------------------------------------------------------------------------------------- | ------------------- |
| `id`     | string | The identifier for the control, please use `camelCase` (e.g. `relativeHumidity`)             | "relativeHumidity"  |
| `label`  | string | The name of the control that will be displayed to the user                                   | "Relative Humidity" |
| `type`   | string | The type of the control. Currently, the only valid value is "range", which displays a slider | "range"             |
| `min`    | number | The minimum value for the control                                                            | 0                   |
| `max`    | number | The maximum value for the control                                                            | 100                 |
| `step`   | number | The step size for the slider                                                                 | 1                   |

For example:

```json
  "controls": [
    {
      "id": "relativeHumidity",
      "label": "Relative Humidity",
      "type": "range",
      "min": 0,
      "max": 100,
      "step": 1
    }
  ],
```

To read the value of the control from your chip code, use the [Attributes API](../chips-api/attributes).

## Display

The `display` property allows you to attach a display to your chip. Use the display to implement a custom LCD, OLED, or e-paper display, or to show the state of your chip (e.g. draw a graph of the temperature over time, or visually indicate the state of a blinds controller).

The `display` property should contain an object with the following properties:

| Property | Type   | Description                          | Example |
| -------- | ------ | ------------------------------------ | ------- |
| `width`  | number | The width of the display, in pixels  | 128     |
| `height` | number | The height of the display, in pixels | 64      |

For example:

```json
  "display": {
    "width": 128,
    "height": 64
  },
```

To draw on the display from your chip code, use the [Framebuffer API](../chips-api/framebuffer).
