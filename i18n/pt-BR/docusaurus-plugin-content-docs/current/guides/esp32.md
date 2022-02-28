---
title: Simulador ESP32
sidebar_label: Simulador ESP32
---

O Simulador ESP32 está atualmente em versão beta. Existem duas placas ESP32:

- ESP32 DevKit v1 - placa de desenvolvimento ESP32 popular
- [TinyPico](https://www.tinypico.com/) - uma placa ESP32 por [UnexpectedMaker](https://unexpectedmaker.com/)

<wokwi-esp32-devkit-v1></wokwi-esp32-devkit-v1>

Você pode contribuir com painéis adicionais, enviando-nos um [pull request](https://github.com/wokwi/wokwi-boards).

## Começando

Você pode usar o simulador ESP32 de três maneiras:

1. Crie projetos usando o ESP32 Arduino Core
2. Execute projetos MicroPython
3. Simule arquivos de aplicativo bin que você construiu em sua máquina (por exemplo, usando ESP-IDF)

### Arduino Core

Comece a partir do [modelo de projeto Arduino-ESP32](https://wokwi.com/projects/new/esp32), ou do
[Exemplo de Blink ESP32](https://wokwi.com/arduino/projects/305452382231200320).

Se você quiser usar bibliotecas Arduino de terceiros, adicione um [arquivo libraries.txt](./libraries) com a lista de bibliotecas que você usa.

### MicroPython

Comece com o [modelo de projeto MicroPython ESP32](https://wokwi.com/projects/new/micropython-esp32), ou com o
[Exemplo de Blink MicroPython ESP32](https://wokwi.com/arduino/projects/305452627045384768).

Nota: Enquanto a simulação está em execução, pressione Ctrl+C dentro do Terminal Serial para entrar no _MicroPython REPL_. Alternativamente, você pode editar o código de Exemplo Blink e remover o loop while. Para obter mais informações, consulte o [Guia MicroPython](./micropython).

### Aplicativo personalizado (.bin)

Abra o [modelo de projeto de aplicativo personalizado ESP32](https://wokwi.com/arduino/projects/305457271083631168), e pressione "F1" no editor de código. Em seguida, escolha "Carregar Arquivo HEX e Iniciar Simulação...". Escolha qualquer arquivo .bin em seu computador e a simulação será iniciada.

## Exemplos no simulador

### Exemplos Arduino

- [Blink](https://wokwi.com/arduino/projects/305566932847821378)
- [Contador de Sete Segmentos](https://wokwi.com/arduino/projects/305567166302782017)
- [Blink com FastLED NeoPixel](https://wokwi.com/arduino/projects/312460386125218368)
- [APA102 Color Cycles (TinyPico Board)](https://wokwi.com/arduino/projects/308012505806930496)
- [WiFi Scanning](https://wokwi.com/arduino/projects/305569599398609473)

### Exemplos MicroPython

- [Exemplo SSD1306](https://wokwi.com/arduino/projects/305568836183130690)
- [NeoPixels](https://wokwi.com/arduino/projects/305569065545499202)
- [AES256 Encryption](https://wokwi.com/arduino/projects/321484545174012499)
- [WiFi Scanning](https://wokwi.com/arduino/projects/305570169692881473)

### Exemplos ESP-IDF

Os exemplos a seguir usam as funções ESP-IDF. Eles são compilados usando o Arduino ESP32 Core:

- [Blink usando a API FreeRTOS](https://wokwi.com/arduino/projects/304209256260829762)
- [Contador de LED binário usando tarefas FreeRTOS](https://wokwi.com/arduino/projects/322609470223942226)
- [Entrada do botão GPIO + Interrupções](https://wokwi.com/arduino/projects/304633599712297536)

## Recursos do simulador

| Periférico         | Status | Notas                                                                      |
| ------------------ | ------ | -------------------------------------------------------------------------- |
| Processor core     | ✔️     | Ambos os núcleos são simulados                                             |
| GPIO               | ✔️     | Interrupções suportadas                                                    |
| IOMUX              | 🟡     |                                                                            |
| PSRAM              | ✔️     | 4MB de SRAM externa                                                        |
| UART               | ✔️     | Apenas UART0 por enquanto                                                  |
| I2C                | ✔️     | Somente Master, endereçamento de 10 bits não suportado.                    |
| I2S                | ❌     | [Aberto para votação](https://wokwi.com/features#feature-1031718532)       |
| SPI                | ❌     |                                                                            |
| RMT                | 🟡     | Apenas transmissão, use para controlar NeoPixels                           |
| LEDC PWM           | ✔️     | Usado por analogWrite(), Servo, Buzzer, etc.                               |
| MCPWM              | ❌     |                                                                            |
| DMA                | ❌     |                                                                            |
| WiFi               | ✔️     | Veja o [Guia WiFi do ESP32](./esp32-wifi)                                  |
| Bluetooth          | ❌     | [Aberto para votação](https://wokwi.com/features#feature-1047159691)       |
| Timers             | 🟡     |                                                                            |
| Watchdog           | ❌     |                                                                            |
| RTC                | 🟡     | Apenas resistores RTC pull-up / pull-down                                  |
| ADC                | ✔️     | Nota: analogRead() retorna valores até 4095                                |
| RNG                | ✔️     | Gerador de números aleatórios                                              |
| AES Accelerator    | ✔️     |                                                                            |
| SHA Accelerator    | ✔️     |                                                                            |
| RSA Accelerator    | ✔️     |                                                                            |
| Hall Effect Sensor | ❌     |                                                                            |
| GDB Debugging      | 🟡     | Apenas atraves [wokwi-gdbserver](https://github.com/wokwi/wokwi-gdbserver) |

Legenda:  
✔️ - Simulado  
🟡 - Implementação parcial/trabalho em andamento  
❌ - Não implementado (mas se você precisar, [abra uma solicitação de recurso](https://github.com/wokwi/wokwi-features/issues/new?labels=enhancement&template=feature_request.md))

## Simulação WiFi

Veja o [Guia WiFi do ESP32](./esp32-wifi).
