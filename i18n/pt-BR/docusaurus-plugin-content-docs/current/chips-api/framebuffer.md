---
title: API Framebuffer
sidebar_label: API Framebuffer
---

# API Framebuffer

Use a API Framebuffer para implementar displays (LCD, OLED, e-paper, etc.). O tamanho de exibição é definido no arquivo `.chip.json`. O framebuffer usa 32 bits por pixel. Os pixels são armazenados no formato RGBA. O tamanho total do buffer é `pixel_width * pixel_height * 4`.

### buffer_t framebuffer_init(uint32_t *pixel_width, uint32_t *pixel_height)

Retorna o framebuffer para o chip atual e as dimensões em pixel (largura/altura) do frame buffer.

:::caution AVISO

Nota: `framebuffer_init` só pode ser chamado de `chip_init()`. Não chame isso mais tarde.

:::

### void buffer_write(buffer_t buffer, uint32_t offset, uint8_t \*data, uint8_t data_len)

Copia os bytes `data_len` de `data` para o frame buffer, no `offset` fornecido.

### void buffer_read(buffer_t buffer, uint32_t offset, uint8_t \*data, uint8_t data_len)

Copia os bytes `data_len` no `offset` fornecido do frame buffer em `data`.

## Exemplos no simulator

- [Exemplo Básico de Chip Framebuffer](https://wokwi.com/projects/330503863007183442)
- [Display LCD colorido IL9163 128x128](https://wokwi.com/projects/333332561949360723)
