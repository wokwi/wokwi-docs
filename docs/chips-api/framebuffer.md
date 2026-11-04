---
title: Framebuffer API
sidebar_label: Framebuffer API
---

# Framebuffer API

Use the framebuffer API to implement displays (LCD, OLED, e-paper, etc.). The display size is defined in the `.chip.json` file. The framebuffer uses 32 bits per pixel. The pixels are stored in the RGBA format. The total size of the buffer is `pixel_width * pixel_height * 4` bytes.

### buffer_t framebuffer_init(uint32_t *pixel_width, uint32_t *pixel_height)

Returns the framebuffer for the current chip, and the pixel dimensions (width/height) of the frame buffer.

:::warning

Note: `framebuffer_init` can only be called from `chip_init()`. Do not call it at a later time.

:::

### void buffer_write(buffer_t buffer, uint32_t offset, void \*data, uint32_t data_len)

Copies `data_len` bytes from `data` into the frame buffer, at the given `offset`.

### void buffer_read(buffer_t buffer, uint32_t offset, void \*data, uint32_t data_len)

Copies `data_len` bytes at the given `offset` of the frame buffer into `data`.

## Screenshots in CI

The Wokwi CLI can capture the framebuffer of your chip as a PNG image, in a [`take-screenshot`](../wokwi-ci/automation-scenarios#take-a-screenshot-take-screenshot) scenario step or with the [`--screenshot-part`](../wokwi-ci/cli-usage#automation) option. Use the id of the chip part in `diagram.json`. For a chip that is part of a [custom board](https://github.com/wokwi/wokwi-boards), use the id of the board part instead: the image also applies the rotation and flips that the board defines for its display.

## Simulator examples

- [Basic Framebuffer Chip Example](https://wokwi.com/projects/330503863007183442)
- [SSD1306 I2C OLED Display](https://wokwi.com/projects/371050937178768385)
- [IL9163 128x128 Color LCD Display Driver](https://wokwi.com/projects/333332561949360723)
