---
title: UART API
sidebar_label: UART API
---

# UART API

To create an UART device, first call `uart_init`, passing in an `uart_config_t` struct. This struct defines the RX/TX pins, the baud rate, and the `rx`/`write_done` callbacks.

### uart_dev_t uart_init (const uart_config_t \*config)

Initializes UART device. The `config` argument defines the pins, configuration, and callbacks for the UART device. It contains the following fields:

| Field        | Type       | Description                                                     |
| ------------ | ---------- | --------------------------------------------------------------- |
| `rx`         | `pin_t`    | The RX pin (or `NO_PIN` to disable RX)                          |
| `tx`         | `pin_t`    | The TX pin (or `NO_PIN` to disable TX)                          |
| `baud_rate`  | `uint32_t` | The baud rate (e.g. 115200)                                     |
| `rx_data`    | callback   | Called for each byte received on the RX pin                     |
| `write_done` | callback   | Called when data transmission on the TX pin has finished        |
| `user_data`  | `void \*`  | Data that will be passed in the first argument of the callbacks |

Both of the callbacks (`rx_data`, `write_done`) are optional. They all use the `user_data` pointer as their first argument.

Example:

```cpp
static void on_uart_rx_data(void *user_data, uint8_t byte) {
  // `byte` is the byte received on the TX pin
}

static uint8_t on_uart_write_done(void *user_data) {
  // You can write the chunk of data to transmit here (by calling uart_write).
}

// ...

const uart_config_t uart1 {
  .tx = pin_init("TX", INPUT_PULLUP),
  .rx = pin_init("RX", INPUT),
  .baud_rate = 115200,
  .rx_data = on_uart_rx_data,
  .write_done = on_uart_write_done,
  .user_data = chip,
};
```

### bool uart_write (uart_dev_t uart, uint8_t \*buffer, uint32_t count)

Write `count` bytes from the memory pointed to by `buffer` to the given `uart` device.  
Returns `true` on success, or `false` if the UART device is already busy transmitting data from a previous `uart_write` call (and the new data won't be transmitted).

The data starts transmitting after `uart_write` returns. Once Wokwi finishes transmitting the data, the `write_done` callback is called (from the `uart_config_t` structure that you passed to `uart_init`).

## Simulator examples

- [UART ROT13 Chip Example](https://wokwi.com/projects/333638144389808723)
