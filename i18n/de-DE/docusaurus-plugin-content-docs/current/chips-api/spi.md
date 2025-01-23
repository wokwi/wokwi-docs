---
title: SPI Geräte-API
sidebar_label: SPI API
---

# SPI Geräte-API

Um ein SPI-Gerät zu erstellen, rufe zuerst `spi_init` auf und übergib die Struct `spi_config_t`. Die Struct definiert die Clock und MOSI/MISO Pins, den SPI Modus, und das `done` Callback.

### spi_dev_t spi_init(spi_config_t \*config)

Initialisiert eine SPI-Geräteschnittstelle. Das Argument `config` definiert Pins, Modi und Callbacks für das SPI-Gerät. Es enthält folgende Felder:

| Field       | Type       | Description                                                        |
| ----------- | ---------- | ------------------------------------------------------------------ |
| `sck`       | `pin_t`    | Der Clock Pin                                                      |
| `mosi`      | `pin_t`    | Der MOSI data Pin (oder `NO_PIN` um MOSI zu deaktivieren)          |
| `miso`      | `pin_t`    | Der MISO data Pin (oder `NO_PIN` um MISO zu deaktivieren)          |
| `mode`      | `uint32_t` | SPI Modus: `0`, `1`, `2`, oder `3` (Standard: `0`)                 |
| `done`      | `callback` | Wird aufgerufen, wenn die SPI Übertragung fertig ist (siehe unten) |
| `user_data` | `void *`   | Daten werden an das erste Argument vom `done` Callback übergeben   |

Die API unterstützt keine CS/SS Pins: die SPI-Schnittstelle durch das Aufrufen von `spi_start()` und `spi_stop()` zu aktivieren/deaktivieren ist dem Nutzer selbst überlassen.

:::warning

Info: `spi_init` kann nur von `chip_init()` aufgerufen werden. Bitte nicht zu einem späteren Zeitpunkt aufrufen.

:::

Example:

```cpp
const spi_config_t spi1 = {
  .sck = pin_init("SCK", INPUT),
  .mosi = pin_init("MOSI", INPUT),
  .miso = pin_init("MISO", INPUT),
  .mode = 0,
  .done = chip_spi_done, // Siehe Beispiel unten
  .user_data = chip,
};
```

### void spi_start(spi_dev_t spi, uint8_t \*buffer, uint32_t count)

Startet eine SPI-Übertragung, wobei `count` Bytes zum/vom angegebenen `buffer` gesendet/empfangen werden.

Normalerweise wird auf ein Signal auf dem CS (chip select) Pin mit `pin_watch` gewartet. Rufe `spi_start()` auf, wenn der Pin low ist und `spi_stop()`, wenn der Pin high ist.

Wenn ein Gerät erstellt wird, das große Datenmengen überträgt (z.B. ein LCD Display), ist ein größerer Buffer (wenige Kilobytes) zu empfehlen. Der Simulator kann den größeren Buffer nutzen, um DMA-gesteuerte SPI-Übertragungen zu optimieren und die Simulation zu beschleunigen.

Für einfache Geräte, die kleine Datenmengen übertragen, kannst du einen single-byte Buffer verwenden und jeden Byte einzeln verarbeiten, wenn er über das `done` Callback ankommt.

### void spi_stop(spi_dev_t spi)

Stoppt die SPI-Schnittstelle. Wird normalerweise aufgerufen, wenn der CS-Pin auf high ist.

### Das `done` Callback

Die Signatur für das `done` Callback sieht folgendermaßen aus:

```cpp
static void chip_spi_done(void *user_data, uint8_t *buffer, uint32_t count) {
  // 1. verarbeitet empfangene Daten (optional)
  // 2. wenn der CS-Pin immer noch low ist, die Nächste Übertragung mit `spi_start` beginnen
}
```

Das `done` Callback wird aufgerufen, wenn eine SPI-Übertragung fertig ist: entweder wenn der in `spi_start` übergebene Buffer voll ist oder wenn `spi_stop` aufgerufen wurde. Der `buffer` enthält die empfangenen Daten (der Gleiche Buffer, der bei spi_start übergeben wurde `spi_start`), und `count` ist die Anzahl der Bytes, die übertragen wurden (oder `0`, wenn `spi_stop` aufgerufen wurde, bevor ein Byte empfangen wurde).

Dein `done` Callback sollte den Status vom CS-Pin überprüfen und wenn er immer noch low ist, sollte `spi_start()` wieder aufgerufen werden, um das nächste Paket vom Microcontroller zu empfangen.

## Beispiele

- [SPI ROT13 Chip](https://wokwi.com/projects/330669951756010068)
