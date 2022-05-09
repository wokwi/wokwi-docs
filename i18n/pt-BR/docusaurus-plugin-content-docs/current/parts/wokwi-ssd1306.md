---
title: Referência do wokwi-ssd1306
sidebar_label: wokwi-ssd1306
---

Display OLED monocromático 128x64 com interface I2C

<wokwi-ssd1306 />

Nota: esta parte foi descontinuada. Em vez disso, use [board-ssd1306](./board-ssd1306).

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

## Exemplos no simulador

Veja [board-ssd1306](board-ssd1306#simulator-examples).
