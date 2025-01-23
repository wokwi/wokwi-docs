---
title: UART API
sidebar_label: UART API
---

# UART API

Um ein UART-Gerät zu erstellen, rufe als erstes `uart_init` auf und Übergib die Struct `uart_config_t`. Die Struct definiert die RX/TX Pins, Baudrate und die `rx`/`write_done` Callbacks.

### uart_dev_t uart_init (const uart_config_t \*config)

Initialisiert ein UART-Gerät. Das Argument `config` definiert die Pins, Konfiguration und Callbacks für das UART-Gerät. Es enthält folgende Felder:

| Feld         | Typ        | Beschreibung                                                    |
| ------------ | ---------- | --------------------------------------------------------------- |
| `rx`         | `pin_t`    | Der RX Pin (oder `NO_PIN` um RX zu deaktivieren)                |
| `tx`         | `pin_t`    | Der TX Pin (oder `NO_PIN` um TX zu deaktivieren)                |
| `baud_rate`  | `uint32_t` | Die Baudrate (z.B. 115200)                                      |
| `rx_data`    | callback   | Wird für jeden empfangenen Byte am RX-Pin aufgerufen            |
| `write_done` | callback   | Wird aufgerufen, wenn die Übertragung am TX-Pin fertig ist      |
| `user_data`  | `void *`   | Daten, die in das erste Argument der Callbacks übergeben werden |

Die beiden Callbacks (`rx_data` und `write_done`) sind optional. Sie nutzen einen Pointer auf `user_data` als erstes Argument.

Beispiel:

```cpp
static void on_uart_rx_data(void *user_data, uint8_t byte) {
  // `byte` ist der vom "RX" Pin empfangene Byte
}

static uint8_t on_uart_write_done(void *user_data) {
  // Hier kannst du zu übertragende Pakete senden, indem du uart_write aufrufst.
}

// ...

const uart_config_t uart1 = {
  .tx = pin_init("TX", INPUT_PULLUP),
  .rx = pin_init("RX", INPUT),
  .baud_rate = 115200,
  .rx_data = on_uart_rx_data,
  .write_done = on_uart_write_done,
  .user_data = chip,
};
```

### bool uart_write (uart_dev_t uart, uint8_t \*buffer, uint32_t count)

Sendet `count` Bytes vom Speicher, auf den vom `buffer` gezeigt wird an das angegebene `uart`-Gerät.  
Gibt `true` bei Erfolg zurück oder `false`, wenn das UART-Gerät schon Daten überträgt (die neuen Daten werden nicht übertragen).

Die Daten werden nach der Rückgabe von `uart_write` übertragen. Sobald Wokwi die Daten fertig übertragen hat, wird das `write_done` Callback aufgerugen.

## Beispiele

- [UART ROT13 Chip](https://wokwi.com/projects/333638144389808723)
