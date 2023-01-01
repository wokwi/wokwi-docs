---
title: Framebuffer API
sidebar_label: Framebuffer API
---

# Framebuffer API

Use the framebuffer API to implement displays (LCD, OLED, e-paper, etc.). The display size is defined in the `.chip.json` file. The framebuffer uses 32 bits per pixel. The pixels are stored in the RGBA format. The total size of the buffer is `pixel_width * pixel_height * 4`.

### buffer_t framebuffer_init(uint32_t *pixel_width, uint32_t *pixel_height)

Returns the framebuffer for the current chip, and the pixel dimensions (width/height) of the frame buffer.

:::caution

Note: `framebuffer_init` can only be called from `chip_init()`. Do not call it at a later time.

:::

### void buffer_write(buffer_t buffer, uint32_t offset, uint8_t \*data, uint8_t data_len)

Copies `data_len` bytes from `data` into the frame buffer, at the given `offset`.

### void buffer_read(buffer_t buffer, uint32_t offset, uint8_t \*data, uint8_t data_len)

Copies `data_len` bytes at the given `offset` of the frame buffer into `data`.

## Simulator examples

- [Basic Framebuffer Chip Example](https://wokwi.com/projects/330503863007183442)
- [IL9163 128x128 Color LCD Display Driver](https://wokwi.com/projects/333332561949360723)
