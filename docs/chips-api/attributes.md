---
title: Attributes
sidebar_label: Attributes
---

# Attributes

Attributes are input parameters that the user can set in `diagram.json`. You can also define a `controls` section in the `.chip.json` file to let the user edit these parameters interactively during the simulation. This is particularly useful for sensor inputs (e.g. temperature, humidity, etc.).

### uint32_t attr_init(const char \*name, uint32_t default_value)

Defines a new integer attribute with the given name. The `default_value` will be used when the user does not define a value for the attribute in `diagram.json` (under the `attrs` section of the custom chip `part`).

The function returns a handle to the attribute, which can be accessed using `attr_read()`.

:::caution

Note: `attr_init` can only be called from `chip_init()`. Do not call it at a later time.

:::

### uint32_t attr_init_float(const char \*name, float default_value)

Defines a new floating point attribute with the given name. See `attr_init()` for more info.

:::caution

Note: `attr_init_float` can only be called from `chip_init()`. Do not call it at a later time.

:::

### uint32_t attr_read(uint32_t attr)

Returns the current value of the attribute. `attr` should be a valid attribute handle, previously returned by `attr_init()`.

### float attr_read_float(uint32_t attr)

Returns the current value of the attribute. `attr` should be a valid attribute handle, previously returned by `attr_init_float()`.
