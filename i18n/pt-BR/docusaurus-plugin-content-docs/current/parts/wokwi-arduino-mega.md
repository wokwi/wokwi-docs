---
title: Referência do wokwi-arduino-mega
sidebar_label: wokwi-arduino-mega
---

Arduino Mega 2560. Equipado com o chip ATmega2560, que possui 256K bytes de memória de programa Flash, 8k bytes de SRAM e 4K bytes de EEPROM. A placa possui 54 pinos digitais, 16 pinos de entrada analógica e 4 portas seriais. Funciona a 16 MHz.

<wokwi-arduino-mega />

## Nome dos Pinos

Os pinos de 0 a 53 são pinos GPIO digitais. Os pinos A0 a A15 funcionam como pinos de entrada analógica, além de serem pinos GPIO digitais.

Existem cinco pinos de aterramento: GND.1 (próximo ao pino 13), GND.2/GND.3 (próximo ao pino Vin) e GND.4/GND.5 (na parte inferior do conector fêmea de duas vias)

Os pinos VIN / 5V são conectados à fonte de alimentação positiva. Há também dois pinos adicionais de fonte de alimentação, 5V.1 / 5V.2, na parte superior do conector fêmea de duas vias.

Os pinos 3.3V / IOREF / AREF / RESET não estão disponíveis na simulação.

Os pinos digitais 2 a 13, 44, 45 e 46 têm suporte de hardware PWM (total de 15 canais PWM).

Alguns dos pinos digitais também possuem funções adicionais:

| Pino | Função  | Sinal            | Interrupção externa |
| ---- | ------- | ---------------- | ------------------- |
| 0    | Serial  | RX               |                     |
| 1    | Serial  | TX               |                     |
| 2    |         |                  | INT4                |
| 3    |         |                  | INT5                |
| 19   | Serial1 | RX               | INT2                |
| 18   | Serial1 | TX               | INT3                |
| 17   | Serial2 | RX               |                     |
| 16   | Serial2 | TX               |                     |
| 15   | Serial3 | RX               |                     |
| 14   | Serial3 | TX               |                     |
| 20   | I2C     | SDA (Data)       | INT1                |
| 21   | I2C     | SCL (Clock)      | INT0                |
| 50   | SPI     | MISO             |                     |
| 51   | SPI     | MOSI             |                     |
| 52   | SPI     | SCK (Clock)      |                     |
| 53   | SPI     | SS (Chip select) |                     |

### LEDs integrados

A placa inclui quatro LEDs:

| LED | Função                                                            |
| --- | ----------------------------------------------------------------- |
| L   | Conectado ao pino digital 13                                      |
| RX  | Atividade RX serial                                               |
| TX  | Atividade  TX serial                                              |
| ON  | LED de força. Sempre ligado enquanto a simulação está em execução |

Em geral, apenas o LED "L" pode ser controlado pelo código do usuário. Você pode usar a constante `LED_BUILTIN` para referenciá-la em seu código:

```cpp
pinMode(LED_BUILTIN, OUTPUT);
digitalWrite(LED_BUILTIN, HIGH);
```

Veja [Blink](https://wokwi.com/projects/344893018695795282) para um exemplo de código completo.

## Recursos de simulação

O Arduino Mega 2560 é simulado usando a [Biblioteca AVR8js](https://github.com/wokwi/avr8js). A tabela abaixo resume o status dos recursos:

| Periférico               | Status | Notas                                                |
| ------------------------ | ------ | ---------------------------------------------------- |
| Processador              | ✔️     |                                                      |
| GPIO                     | ✔️     | Incluindo Externo/Interrupções de mudança de pino    |
| 8-bit timers             | ✔️     | Timer0, Timer2                                       |
| 16-bit timers            | ✔️     | Timer1, Timer3, Timer4, Timer5 \*                    |
| Output Compare Modulator | ❌     |                                                      |
| Watchdog Timer           | ✔️     |                                                      |
| USART                    | ✔️     | USART0, USART1, USART1, USART3                       |
| SPI                      | 🟡     | Apenas modo master                                   |
| I2C                      | 🟡     | Apenas modo master                                   |
| EEPROM                   | ✔️     |                                                      |
| Clock Prescale           | ✔️     |                                                      |
| ADC                      | ✔️     | Usado por analogRead()                               |
| Analog Comparator        | ❌     |                                                      |
| GDB Debugging            | ✔️     | Consulte o [Guia de depuração GDB](../gdb-debugging) |

Legenda:
✔️ Simulado
🟡 Simulado, mas veja as notas
❌ Não implementado

\* A Captura de entrada não é implementada nos temporizadores de 16 bits.

Se você precisar de algum dos recursos ausentes, [abra uma solicitação de recurso no repositório AVR8js](https://github.com/wokwi/avr8js/issues/new)
ou [entre em contato no Discord](https://wokwi.com/discord).

### Monitor Serial

Você pode usar o Monitor Serial para receber informações do código do Arduino, como impressão de depuração. Você também pode usá-lo para enviar informações ao seu código, como comandos textuais.

Para obter mais informações e exemplos de código, consulte [o guia do Serial Monitor](../guides/serial-monitor). Também explica como conectar o monitor serial a um pino diferente (por exemplo, `Serial2` em vez de` Serial`) e como configurar os caracteres de final de linha.

### Bibliotecas

O simulador oferece suporte a muitas bibliotecas populares do Arduino. Para obter uma lista completa, consulte os [guias de bibliotecas](../guides/libraries).

## Exemplos no simulador

- [Arduino Mega Blink](https://wokwi.com/projects/344893018695795282)
