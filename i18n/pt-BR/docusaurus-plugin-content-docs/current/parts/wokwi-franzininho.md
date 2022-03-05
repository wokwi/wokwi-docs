---
title: Referência do wokwi-franzininho
sidebar_label: wokwi-franzininho
---

Uma pequena placa de desenvolvimento baseada no ATtiny85.

<wokwi-franzininho></wokwi-franzininho>

## Sobre o Franzininho

O Franzininho DIY é uma placa open hardware compatível com o Arduino projetada no Brasil. É baseado
no chip ATtiny85, portanto, consulte a [documentação do ATtiny85](wokwi-attiny85) para informações técnicas.

O LED amarelo (LED1) está conectado ao pino PB1 do chip ATtiny85. Você pode aprender mais sobre
a placa e as pessoas por trás do projeto na [homepage do Franzininho](https://franzininho.com.br/).

## Nome dos Pinos

| Pino | Pino ATtiny85 | Funções              | Canal Analógico | PWM |
| ---- | ------------- | -------------------- | --------------- | --- |
| 0    | PB0           | SPI:MOSI, I2C:SDA    |                 | Sim |
| 1    | PB1           | SPI:MISO, LED1       |                 | Sim |
| 2    | PB2           | SPI:SCK, I2C:SCL     | A1              | -   |
| 3    | PB3           |                      | A3              | -   |
| 4    | PB5           | Reset                | A0              | -   |
| 5    | PB4           |                      | A2              | Sim |
| VCC  | VCC           | Tensão positiva (5V) |                 | -   |
| GND  | GND           | Terra                |                 | -   |

### LEDs integrados

A placa inclui dois LEDs de 3 mm:

| LED  | Cor     | Função                                                                  |
| ---- | ------- | ----------------------------------------------------------------------- |
| ON   | Verde   | LED de alimentação. Sempre ligado enquanto a simulação está em execução |
| LED1 | Amarelo | Conectado ao pino PB1                                                   |

## Exemplos no simulador

- [Pisca LED](https://wokwi.com/projects/301693553069785610)
- [Relógio](https://wokwi.com/projects/301738586036765194), usando dois [74HC595](wokwi-74hc595) e [RTC DS1307](wokwi-ds1307)
- [Sensor de Temperatura NTC](https://wokwi.com/projects/301751077214093834), usando [Termistor NTC](wokwi-ntc-temperature-sensor) e [SSD1306](wokwi-ssd1306)
- [Sensor de Umidade e Temperatura Digital](https://wokwi.com/projects/301745949656482317), usando [DHT22](wokwi-dht22) e [SSD1306](wokwi-ssd1306)
- [Sensor Ultra-sônico](https://wokwi.com/projects/302020345098928648), usando [74HC595](wokwi-74hc595) e HC-SR04
- [Controle de posição Servo Motor](https://wokwi.com/projects/302291615188255242), usando um [Motor Micro Servo](wokwi-servo) e um [LCD1602](wokwi-lcd1602)
- [Contador de pulsos externos](https://wokwi.com/projects/302199144424931848)
