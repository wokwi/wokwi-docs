---
title: Referência do wokwi-ssd1306
sidebar_label: wokwi-ssd1306
---

Display OLED monocromático 128x64 com interface I2C

<wokwi-ssd1306 />

## Nome dos Pinos

| Nome        | Descrição                  | Pino do Arduino Uno |
| ----------- | -------------------------- | ------------------- |
| DATA        | Linha de dados I2C (SDA)   | A4                  |
| CLK         | Linha de clock I2C (SCL)   | A5                  |
| DC, RST, CS | Não utilizado\*            | -                   |
| 3V3         | Saída regulada de 3,3 V    | -                   |
| GND         | Terra                      | GND                 |
| VIN         | Tensão de alimentação      | 5V                  |

\* DC, RST e CS são para o modo SPI. A simulação do SSD1306 suporta apenas o modo I2C, portanto, esses pinos não são funcionais.

O endereço I2C padrão do módulo SSD1306 é 0x3c (60).

## Atributos

| Nome        | Descrição                  | Valor padrão  |
| ----------- | -------------------------- | ------------- |
| i2c-address | Endereço I2C do display    | "0x3c"        |

## Usando no Arduino

Você pode escolher entre várias bibliotecas do Arduino para o SSD1306:

- [Adafruit SSD1306](https://wokwi.com/arduino/libraries/Adafruit_SSD1306)
- [ssd1306](https://wokwi.com/arduino/libraries/ssd1306)
- [lcdgfx](https://wokwi.com/arduino/libraries/lcdgfx)
- [U8glib](https://github.com/olikraus/u8glib)
- [U8g2](https://github.com/olikraus/u8g2) (também U8x8)
- [SSD1306Ascii](https://github.com/greiman/SSD1306Ascii)
- [Tiny4kOLED](https://www.arduino.cc/reference/en/libraries/tiny4koled/) - para uso no ATtiny85

Todas as bibliotecas acima estão disponíveis no Wokwi.

## Exemplos no simulador

- [SSD1306 Snake Game](https://wokwi.com/arduino/projects/296135008348799496) (usando Adafruit SSD1306)
- [ATtiny85 Temperatura Digital + Umidade no SSD1306](https://wokwi.com/arduino/projects/292900020514980360)
- [U8glib Progress Bar](https://wokwi.com/arduino/projects/300867986768527882)
- [SSD1306Ascii Fonts](https://wokwi.com/arduino/projects/291197274604700168)
- [Adafruit SSD1306 Showcase](https://wokwi.com/arduino/libraries/Adafruit_SSD1306/ssd1306_128x64_i2c)
- [U8g2 Menu](https://wokwi.com/arduino/projects/291572875238834696)
