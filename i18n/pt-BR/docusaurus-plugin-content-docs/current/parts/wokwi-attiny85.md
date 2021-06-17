---
title: Referência do wokwi-attiny85
sidebar_label: wokwi-attiny85
---

O ATtiny85 é um pequeno microcontrolador AVR de 8 bits. Possui 8 KB de memória de programa Flash, 512 bytes de SRAM e 512 bytes de EEPROM.

![ATtiny85](wokwi-attiny85.svg)

## Nome dos Pinos

| Pino | Nome | Funções           | Canal Analógico |
| ---- | ---- | ----------------- | --------------- |
| 1    | PB5  | Reset             | 0               |
| 2    | PB3  |                   | 3               |
| 3    | PB4  |                   | 2               |
| 4    | GND  | Terra             |                 |
| 5    | PB0  | SPI:MOSI, I2C:SDA |                 |
| 6    | PB1  | SPI:MISO          |                 |
| 7    | PB2  | SPI:SCK, I2C:SCL  | 1               |
| 8    | VCC  | Tensão positiva   |                 |

## Attributes

| Nome      | Descrição                                                                        | Valor padrão |
| --------- | -------------------------------------------------------------------------------- | ------------ |
| frequency | Frequência de clock do MCU, em hertz. Valores comuns: "1m", "8m", "16m", e "20m" | "8m"         |

## Código e bibliotecas

O código é compilado usando o [ATtiny Core para Arduino](https://github.com/damellis/attiny).
Isso significa que você pode usar a maioria das funções e bibliotecas padrão do Arduino em seu código.

### Saída Serial

O ATtiny85 não tem um periférico UART dedicado, mas ainda é possível obter saída serial usando a biblioteca Software Serial.
Para obter mais informações e código de demonstração, consulte o [Guia do Monitor Serial](../guides/serial-monitor#attiny85--softwareserial)

### I2C

Para comunicação I2C, use a biblioteca [TinyWireM](https://github.com/adafruit/TinyWireM).

## Recursos do simulador

O ATtiny85 é simulado usando a [Biblioteca AVR8js](https://github.com/wokwi/avr8js). A tabela abaixo resume o status dos recursos:

| Periférico           | Status | Notas                                                |
| -------------------- | ------ | ---------------------------------------------------- |
| Processador          | ✔️     |                                                      |
| GPIO                 | ✔️     | 6 pinos GPIO (PB0...PB6), Suporte para INT0/PCINT    |
| USI                  | 🟡     | Só funciona no modo I2C                              |
| Timer0               | ✔️     | Suporte PWM para PB0/PB1                             |
| Timer1               | ❌     |                                                      |
| Watchdog Timer       | ❌     |                                                      |
| EEPROM               | ✔️     |                                                      |
| ADC                  | ✔️     | Usado por analogRead()                               |
| Comparador Analógico | ❌     |                                                      |
| Depuração GDB        | ✔️     | Consulte o [Guia do Depurador GDB](../gdb-debugging) |

Legenda:
✔️ Simulado
🟡 Suporte parcial
❌ Não implementado

Se você precisar de algum dos recursos ausentes, [abra uma solicitação de recurso no repositório AVR8js](https://github.com/wokwi/avr8js/issues/new)
ou [entre em contato no Discord](https://wokwi.com/discord).

## Exemplos no simulador

- [ATtiny85 Blink](https://wokwi.com/arduino/projects/283019827166052872)
- [ATtiny85 Simon Game](https://wokwi.com/arduino/projects/285525640477671948)
- [ATtiny85 FastLED Matrix](https://wokwi.com/arduino/projects/283910810787381773)
- [ATtiny85 Charlieplexing](https://wokwi.com/arduino/projects/283912288194265608)
- [ATtiny85 SSD1306 + DHT](https://wokwi.com/arduino/projects/292900020514980360)
