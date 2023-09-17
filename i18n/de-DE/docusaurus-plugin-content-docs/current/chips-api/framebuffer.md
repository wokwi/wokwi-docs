---
title: Framebuffer API
sidebar_label: Framebuffer API
---

# Framebuffer API

Die Framebuffer API wird genutzt, um Displays zu implementieren (z.B. LCD, OLED, e-paper, etc.). Die Größe des Displays wird in der Datei `<chipname>.chip.json` definiert. Der Buffer nutzt 32 Bit pro Pixel. Pixel werden im RGBA Format gespeichert. Die Gesamtgröße des Buffers ist `pixel_width * pixel_height * 4` bytes.

### buffer_t framebuffer_init(uint32_t *pixel_width, uint32_t *pixel_height)

Gibt den Framebuffer für den Chip und die Maße des Displays zurück.

:::caution

Info: `framebuffer_init` kann nur von der `chip_init()` Methonde aufgerufen werden. Bitte rufe es nicht zu einem späteren Zeitpunk auf.

:::

### void buffer_write(buffer_t buffer, uint32_t offset, void \*data, uint32_t data_len)

Kopiert `data_len` bytes von `data` am gegebenen `offset` in den Buffer.

### void buffer_read(buffer_t buffer, uint32_t offset, void \*data, uint32_t data_len)

Kopiert `data_len` bytes am gegebenen `offset` vom Buffer nach `data`.

## Beispiele

- [Basic Framebuffer Chip Example](https://wokwi.com/projects/330503863007183442)
- [SSD1306 I2C OLED Display](https://wokwi.com/projects/371050937178768385)
- [IL9163 128x128 Color LCD Display Driver](https://wokwi.com/projects/333332561949360723)
