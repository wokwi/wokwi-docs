---
title: I2C Device API
sidebar_label: I2C API
---

# I2C Device API

To create an I2C device, first call `i2c_init`, passing in an `i2c_config_t` struct. This struct defines the SCL/SDA pins, the I2C device address, and the `connect`/`read`/`write`/`disconnect` callbacks.

### i2c_dev_t i2c_init(i2c_config_t \*config)

Initializes an I2C device. The `config` argument defines the pins, address, and callbacks for the I2C device. It contains the following fields:

| Field        | Type       | Description                                                                                        |
| ------------ | ---------- | -------------------------------------------------------------------------------------------------- |
| `address`    | `uint32_t` | Listen for requests matching the given I2C address (7-bit). To listen for all requests, set to `0` |
| `sda`        | `pin_t`    | The SDA pin                                                                                        |
| `scl`        | `pin_t`    | The SCL pin                                                                                        |
| `connect`    | callback   | Called when the chip is addressed on the I2C bus                                                   |
| `read`       | callback   | Called when the microcontroller wants to read a byte of data from your chip                        |
| `write`      | callback   | Called when the microcontroller writes a byte to your chip                                         |
| `disconnect` | callback   | Called when the microcontroller disconnects from your chip                                         |
| `user_data`  | `void \*`  | Data that will be passed in the first argument of the callbacks                                    |

All the callbacks (`connect`, `read`, `write`, `disconnect`) are optional. They all use the `user_data` pointer as their first argument.

:::caution

Note: `i2c_init` can only be called from `chip_init()`. Do not call it at a later time.

:::

Example:

```cpp
bool on_i2c_connect(void *user_data, uint32_t address, bool read) {
  // `address` parameter contains the 7-bit address that was received on the I2C bus.
  // `read` indicates whether this is a read request (true) or write request (false).
  return true; // true means ACK, false NACK
}

uint8_t on_i2c_read(void *user_data) {
  return 0; // The byte to be returned to the microcontroller
}

bool on_i2c_write(void *user_data, uint8_t data) {
  // `data` is the byte received from the microcontroller
  return true; // true means ACK, false NACK
}

void on_i2c_disconnect(void *user_data) {
  // This method is optional. Useful if you need to know when the I2C transaction has concluded.
}

static const i2c_config_t i2c1 {
  .address = 0x22,
  .scl = pin_init("SCL", INPUT_PULLUP),
  .sda = pin_init("SDA", INPUT_PULLUP),
  .connect = on_i2c_connect,
  .read = on_i2c_read,
  .write = on_i2c_write,
  .disconnect = on_i2c_disconnect,
  .user_data = chip,
};
```
