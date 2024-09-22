---
title: Attributes
sidebar_label: Attributes
---

# Attributes

Attributes are input parameters that the user can set in `diagram.json`. You can also define a [`controls` section](./chip-json#controls) in the `.chip.json` file to let the user edit these parameters interactively during the simulation. This is particularly useful for sensor inputs (e.g. temperature, humidity, etc.).

### Naming

When naming your attributes, please follow the following conventions:

- Use `camelCase` for attribute names
- Use American English spelling (e.g. `color` and not `colour`)

### uint32_t attr_init(const char \*name, uint32_t default_value)

Defines a new integer attribute with the given name. The `default_value` will be used when the user does not define a value for the attribute in `diagram.json` (under the `attrs` section of the custom chip `part`).

The function returns a handle to the attribute, which can be accessed using `attr_read()`.

:::warning

Note: `attr_init` can only be called from `chip_init()`. Do not call it at a later time.

:::

### uint32_t attr_init_float(const char \*name, float default_value)

Defines a new floating point attribute with the given name. See `attr_init()` for more info.

:::warning

Note: `attr_init_float` can only be called from `chip_init()`. Do not call it at a later time.

:::

### uint32_t attr_read(uint32_t attr)

Returns the current value of the attribute. `attr` should be a valid attribute handle, previously returned by `attr_init()`.

### float attr_read_float(uint32_t attr)

Returns the current value of the attribute. `attr` should be a valid attribute handle, previously returned by `attr_init_float()`.

### Simulator Examples

- [Analog API chip example](https://wokwi.com/projects/330112801381024338) -- Simulates a 0-5V/0-ADC_MAX voltage source. One float attribute and one analog output.
