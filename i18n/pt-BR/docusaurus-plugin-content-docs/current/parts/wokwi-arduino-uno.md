---
title: Referência do wokwi-arduino-uno
sidebar_label: wokwi-arduino-uno
---

Arduino Uno é a placa mais popular da família Arduino. Ele é alimentado pelo chip ATmega328p, que possui 32K bytes de memória de programa Flash, 2k bytes de SRAM e 1K bytes de EEPROM.

<wokwi-arduino-uno />

## Nome dos Pinos

Os pinos de 0 a 13 são pinos GPIO digitais. Os pinos A0 a A5 funcionam como pinos de entrada analógica, além de serem pinos digitais GPIO.

Existem três pinos de aterramento: GND.1, que está na parte superior da placa, próximo ao pino 13, e GND.2/GND.3, que está na parte inferior.

Os pinos VIN / 5V são conectados à fonte de alimentação positiva.

Os pinos 3.3V / IOREF / AREF / RESET não estão disponíveis na simulação.

Os pinos digitais 3, 5, 6, 9, 10 e 11 têm suporte de hardware PWM.

Alguns dos pinos digitais também têm funções adicionais:

| Pino | Função              | Sinal            |
| ---- | ------------------- | ---------------- |
| 0    | Serial (USART)      | RX               |
| 1    | Serial (USART)      | TX               |
| 2    | Interrupção externa | INT0             |
| 3    | Interrupção externa | INT1             |
| 10   | SPI                 | SS (Chip select) |
| 11   | SPI                 | MOSI             |
| 12   | SPI                 | MISO             |
| 13   | SPI                 | SCLK (Clock)     |
| A4   | I2C                 | SDA (Data)       |
| A5   | I2C                 | SCL (Clock)      |

### LEDs integrados

A placa inclui quatro LEDs:

| LED | Função                                                            |
| --- | ----------------------------------------------------------------- |
| L   | Conectado ao pino digital 13                                      |
| RX  | Atividade serial RX                                               |
| TX  | Atividade serial TX                                               |
| ON  | LED de força. Sempre ligado enquanto a simulação está em execução |

Em geral, apenas o LED "L" pode ser controlado pelo código do usuário. Você pode usar a constante `LED_BUILTIN` para referenciá-la ao seu código:

```cpp
pinMode(LED_BUILTIN, OUTPUT);
digitalWrite(LED_BUILTIN, HIGH);
```

Veja [Blink](https://wokwi.com/arduino/libraries/demo/blink) para um exemplo de código completo.

## Atributos

| Nome      | Descrição                                                                     | Valor padrão |
| --------- | ----------------------------------------------------------------------------- | ------------ |
| frequency | Frequência de clock do MCU, em hertz. Valores comuns: "8m", "16m", e "20m" \* | "16m"        |

\* Muitas bibliotecas do Arduino assumem a frequência de clock de 16 MHz. Alterar a frequência do clock anulará a sua garantia!

## Recursos do simulador

O Arduino Uno é simulado usando a [Biblioteca AVR8js](https://github.com/wokwi/avr8js). A tabela abaixo resume o status dos recursos:

| Periférico        | Status | Notas                                                                   |
| ----------------- | ------ | ----------------------------------------------------------------------- |
| Processador       | ✔️     |                                                                         |
| GPIO              | ✔️     | Incluindo Externo/Interrupções de mudança de pino                       |
| 8-bit timers      | ✔️     | Timer0, Timer2                                                          |
| 16-bit timer      | ✔️     | Timer1                                                                  |
| Watchdog Timer    | ✔️     | [Exemplo de uso](https://wokwi.com/projects/309372800631571009) |
| USART             | ✔️     |                                                                         |
| SPI               | 🟡     | Modo mestre apenas                                                      |
| I2C               | 🟡     | Modo mestre apenas                                                      |
| EEPROM            | ✔️     |                                                                         |
| Clock Prescale    | ✔️     |                                                                         |
| ADC               | ✔️     | Usado por analogRead()                                                  |
| Analog Comparator | ❌     |                                                                         |
| GDB Debugging     | ✔️     | Consulte o [Guia do depurador GDB](../gdb-debugging)                    |

Legenda:
✔️ Simulado
🟡 Simulado, mas veja as notas
❌ Não implementado

Se você precisar de algum dos recursos ausentes, [abra uma solicitação de recurso no repositório AVR8js](https://github.com/wokwi/avr8js/issues/new)
ou [entre em contato no Discord](https://wokwi.com/discord).

### Monitor Serial

Você pode usar o Monitor Serial para receber informações do código do Arduino, como impressão de depuração. Você também pode usá-lo para enviar informações ao seu código, como comandos textuais.

Para obter mais informações e exemplos de código, consulte [o guia do Monitor Serial](../guides/serial-monitor). Também explica como configurar o monitor serial, por exemplo, definir os caracteres de final de linha.

### Bibliotecas

O simulador oferece suporte a muitas bibliotecas populares do Arduino. Para obter uma lista completa, consulte os [guias de bibliotecas](../guides/libraries).

## Exemplos no simulador

- [Arduino Blink](https://wokwi.com/arduino/libraries/demo/blink)
