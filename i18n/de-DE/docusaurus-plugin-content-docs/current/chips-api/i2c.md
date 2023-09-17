---
title: I2C Geräte-API
sidebar_label: I2C API
---

# I2C Geräte-API

Um ein I2C-Gerät zu erstellen rufe als erstes `i2c_init` und übergib die Struct `i2c_config_t`. Die Struct definiert die SCL/SDA Pins, die I2C Geräteadresse und die Callbacks `call`, `read`, `write` und `disconnect`.

### i2c_dev_t i2c_init(i2c_config_t \*config)

Initialisiert ein I2C-Gerät. Das Argument `config` definiert die Pins, Adressen, und Callbacks für das I2C-Gerät. Es enthält folgende Felder:

| Feld         | Typ        | Beschreibung                                                                                       |
| ------------ | ---------- | -------------------------------------------------------------------------------------------------- |
| `address`    | `uint32_t` | Warten auf Anfragen, die der angegebenen I2C-Adresse entsprechen. (7-bit). `0` bedeutet "alle Anfragen" |
| `sda`        | `pin_t`    | Der SDA-Pin                                                                                        |
| `scl`        | `pin_t`    | Der SCL-Pin                                                                                        |
| `connect`    | callback   | Wird aufgerufen, wenn der Chip auf dem I2C-Bus angesteuert wird                                    |
| `read`       | callback   | Wird aufgerufen, wenn der Microcontroller einen Byte vom Chip lesen will                           |
| `write`      | callback   | Wird aufgerufen, wenn der Microcontroller einen Byte auf den Chip schreibt                         |
| `disconnect` | callback   | Wird aufgerufen, wenn der Microcontroller die Verbindung zum Chip trennt                           |
| `user_data`  | `void \*`  | Data that will be passed in the first argument of the callbacks                                    |

Die Callbacks (`connect`, `read`, `write`, `disconnect`) sind optional. Alle Callbacks nutzen den `user_data` Pointer als erstes Argument.

:::caution

Info: `i2c_init` kann nur von `chip_init()` aufgerufen werden. Bitte rufe es nicht später auf..

:::

Beispiel:

```cpp
bool on_i2c_connect(void *user_data, uint32_t address, bool read) {
  // `address` enthält die 7-bit Adresse, die vom I2C-Bus empfangen wurde.
  // `read` gibt an, ob es eine read Anfrage (true) oder eine write Anfrage (false) ist.
  return true; // true bedeutet ACK, false bedeutet NACK
}

uint8_t on_i2c_read(void *user_data) {
  return 0; // Byte, der zum Microcontroller zurückgegeben wird.
}

bool on_i2c_write(void *user_data, uint8_t data) {
  // `data` ist der vom Microcontroller empfangene Byte.
  return true; // true bedeutet ACK, false bedeutet NACK
}

void on_i2c_disconnect(void *user_data) {
  // Diese Methode ist optional. Nützlich, wenn du wissen willst, ob die Übertragung abgeschlossen wurde.
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
