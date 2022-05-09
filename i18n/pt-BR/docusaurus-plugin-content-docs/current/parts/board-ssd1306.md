---
title: Referência do board-ssd1306
sidebar_label: board-ssd1306
---

Tela OLED monocromática 128x64 com interface I2C

![SSD1306](https://raw.githubusercontent.com/wokwi/wokwi-boards/master/boards/ssd1306/board.svg)

## Nome dos Pinos

| Nome | Descrição             | Pino Arduino Uno |
| ---- | --------------------- | ---------------- |
| GND  | Terra                 | GND              |
| VCC  | Tensão de alimentação | 5V               |
| SCL  | Sinal de clock I2C    | A5               |
| SDA  | Sinal de dados I2C    | A4               |

O endereço I2C padrão do módulo SSD1306 é 0x3c (60).

## Atributos

| Nome        | Descrição            | Valor padrão  |
| ----------- | -------------------- | ------------- |
| i2c-address | Endereço I2C da tela | "0x3c"        |

## Usando no Arduino

Você pode escolher entre várias bibliotecas SSD1306 do Arduino:

- [Adafruit SSD1306](https://wokwi.com/arduino/libraries/Adafruit_SSD1306)
- [ssd1306](https://wokwi.com/arduino/libraries/ssd1306)
- [lcdgfx](https://wokwi.com/arduino/libraries/lcdgfx)
- [U8glib](https://github.com/olikraus/u8glib)
- [U8g2](https://github.com/olikraus/u8g2) (também U8x8)
- [SSD1306Ascii](https://github.com/greiman/SSD1306Ascii)
- [Tiny4kOLED](https://www.arduino.cc/reference/en/libraries/tiny4koled/) - para usuários ATtiny85

Todas as bibliotecas acima estão disponíveis no Wokwi.

## Exemplos no simulador

- [Jogo da Cobrinha no SSD1306](https://wokwi.com/projects/296135008348799496) (usando Adafruit SSD1306)
- [ATtiny85 Digital Temperatura + Umidade no SSD1306](https://wokwi.com/projects/292900020514980360)
- [Barra de progresso com U8glib](https://wokwi.com/projects/300867986768527882)
- [Fontes SSD1306Ascii](https://wokwi.com/projects/291197274604700168)
- [Adafruit SSD1306 Showcase](https://wokwi.com/arduino/libraries/Adafruit_SSD1306/ssd1306_128x64_i2c)
- [U8g2 Menu](https://wokwi.com/projects/291572875238834696)
