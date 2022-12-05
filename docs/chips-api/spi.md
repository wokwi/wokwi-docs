---
title: SPI Device API
sidebar_label: SPI API
---

# SPI Device API

To create an SPI device, first call `spi_init`, passing in an `spi_config_t` struct. This struct defines the clock and MOSI/MISO pins, the SPI mode, and the `done` callback.

### spi_dev_t spi_init(spi_config_t \*config)

Initializes an SPI device interface. The `config` argument defines the pins, mode, and callbacks for the SPI device. It contains the following fields:

| Field       | Type       | Description                                                           |
| ----------- | ---------- | --------------------------------------------------------------------- |
| `sck`       | `pin_t`    | The clock pin                                                         |
| `mosi`      | `pin_t`    | The MOSI data pin (or `NO_PIN` to disable MOSI)                       |
| `miso`      | `pin_t`    | The MISO data pin (or `NO_PIN` to disable MISO)                       |
| `mode`      | `uint32_t` | SPI mode: `0`, `1`, `2`, or `3` (default: `0`)                        |
| `done`      | `callback` | Called when an SPI transaction finishes (see below)                   |
| `user_data` | `void \*`  | Data that will be passed in the first argument of the `done` callback |

The API does not support a CS/SS pin: it is up to the user to select/deselect the SPI interface by calling `spi_start()` and `spi_stop()`.

:::caution

Note: `spi_init` can only be called from `chip_init()`. Do not call it at a later time.

:::

Example:

```cpp
const spi_config_t spi1 {
  .sck = pin_init("SCK", INPUT),
  .mosi = pin_init("MOSI", INPUT),
  .miso = pin_init("MISO", INPUT),
  .mode = 0,
  .write_done = chip_spi_done, // See the example below
  .user_data = chip,
};
```

### void spi_start(spi_dev_t spi, uint8_t \*buffer, uint32_t count)

Starts an SPI transaction, sending and receiving `count` bytes to/from the given `buffer`.

You will usually listen for the CS (chip select) pin with `pin_watch`. Call `spi_start()` when the CS pin goes low, and `spi_stop()` when the CS pin goes high.

When creating a device that transfers large amounts of data (e.g. an LCD display), it's recommended to use a large buffer size (few kilobytes). The simulator can use the larger buffer to optimize DMA-controlled SPI transfer and speed up the simulation.

For simple devices that transfer small amounts of data, you can use a single-byte buffer, and process each byte as it arrives in the `done` callback.

### void spi_stop(spi_dev_t spi)

Stops the SPI interface. Usually, you'd call this method when the CS pin goes high.

### The `done` callback

The signature for the `done` callback is as follows:

```cpp
static void chip_spi_done(void *user_data, uint8_t *buffer, uint32_t count) {
  // 1. process the received data (optional)
  // 2. if the CS pin is still low, schedule the next SPI transaction using `spi_start`
}
```

The `done` callback runs when an SPI transaction finishes: either when the buffer provided to `spi_start` is full, or when `spi_stop` was called. The `buffer` contains the data received (it is the same buffer given to `spi_start`), and `count` is the number of bytes that have been transferred (or `0` if `spi_stop` was called before a complete byte has been transferred).

Your `done` callback should check the status of the CS pin, and if it is still low, it should call `spi_start()` again to receive the next chunk of data from the microcontroller.

## Simulator examples

- [SPI ROT13 Chip Example](https://wokwi.com/projects/330669951756010068)
