---
title: Simulador ESP32
sidebar_label: Simulador ESP32
---

O ESP32 é um microcontrolador popular habilitado para WiFi e Bluetooth, amplamente utilizado para projetos de IoT. Wokwi simula o ESP32, ESP32-S2 e ESP32-C3 (beta).

<wokwi-esp32-devkit-v1></wokwi-esp32-devkit-v1>

## ESP32 boards

| Nome                                                | Chip     | Descrição                                         |
| --------------------------------------------------- | -------- | ------------------------------------------------- |
| ESP32 DevKit v1                                     | ESP32    | Placa de desenvolvimento popular ESP32            |
| TinyPICO                                            | ESP32    | Placa ESP32 compacta por UnexpectedMaker          |
| [Franzininho WiFi](../parts/board-franzininho-wifi) | ESP32-S2 | Placa ESP32-S2 da Comunidade Franzininho          |
| ESP32-S2-DevKitM-1                                  | ESP32-S2 | Placa de desenvolvimento ESP32-S2 de nível básico |
| ESP32-C3-DevKitM-1                                  | ESP32-C3 | Placa de desenvolvimento ESP32-C3 de nível básico |
| Rust Board ESP32-C3                                 | ESP32-C3 | Placa ESP32-C3 para desenvolvimento Rust          |

Você pode contribuir com placas adicionais enviando um pull request para [wokwi-boards](https://github.com/wokwi/wokwi-boards).

## Começando

Você pode usar o simulador ESP32 de três maneiras:

1. Crie projetos usando o ESP32 Arduino Core (incluindo projetos ESP-IDF)
2. Execute projetos MicroPython (também CircuitPython no ESP32-S2)
3. Simule arquivos de aplicativo bin que você construiu em sua máquina (por exemplo, usando ESP-IDF)

### Arduino Core

Comece a partir do [modelo de projeto Arduino-ESP32](https://wokwi.com/projects/new/esp32), ou do
[Exemplo de Blink ESP32](https://wokwi.com/projects/305452382231200320).

Se você quiser usar bibliotecas Arduino de terceiros, adicione um [arquivo libraries.txt](./libraries) com a lista de bibliotecas que você usa.

### MicroPython

Comece com o [modelo de projeto MicroPython ESP32](https://wokwi.com/projects/new/micropython-esp32), ou com o
[Exemplo de Blink MicroPython ESP32](https://wokwi.com/projects/305452627045384768).

Nota: Enquanto a simulação está em execução, pressione Ctrl+C dentro do Terminal Serial para entrar no _MicroPython REPL_. Alternativamente, você pode editar o código de Exemplo Blink e remover o loop while. Para obter mais informações, consulte o [Guia MicroPython](./micropython).

### Aplicativo personalizado (.bin)

Abra o [modelo de projeto de aplicativo personalizado ESP32](https://wokwi.com/projects/305457271083631168), e pressione "F1" no editor de código. Em seguida, escolha "Carregar Arquivo HEX e Iniciar Simulação...". Escolha qualquer arquivo .bin em seu computador e a simulação será iniciada.

## Exemplos no simulador

### Exemplos Arduino

- [Blink](https://wokwi.com/projects/305566932847821378)
- [Contador de Sete Segmentos](https://wokwi.com/projects/305567166302782017)
- [Blink com FastLED NeoPixel](https://wokwi.com/projects/312460386125218368)
- [APA102 Color Cycles (TinyPico Board)](https://wokwi.com/projects/308012505806930496)
- [WiFi Scanning](https://wokwi.com/projects/305569599398609473)

### Exemplos MicroPython

- [Exemplo SSD1306](https://wokwi.com/projects/305568836183130690)
- [NeoPixels](https://wokwi.com/projects/305569065545499202)
- [AES256 Encryption](https://wokwi.com/projects/321484545174012499)
- [WiFi Scanning](https://wokwi.com/projects/305570169692881473)

### Exemplos ESP-IDF

Os exemplos a seguir usam as funções ESP-IDF. Eles são compilados usando o Arduino ESP32 Core:

- [Blink usando a API FreeRTOS](https://wokwi.com/projects/304209256260829762)
- [Contador de LED binário usando tarefas FreeRTOS](https://wokwi.com/projects/322609470223942226)
- [Entrada do botão GPIO + Interrupções](https://wokwi.com/projects/304633599712297536)

## Recursos do simulador

| Periférico           | ESP32 | S2 | C3 | Notas                                                                         |
| -------------------- | ----- | -- | -- | ----------------------------------------------------------------------------- |
| Processador core(s)  | ✔️    | ✔️ | ✔️  |                                                                               |
| GPIO                 | ✔️    | ✔️ | ✔️  | Interrupções suportadas                                                       |
| IOMUX                | 🟡    | 🟡 | 🟡  |                                                                               |
| PSRAM                | ✔️    | ✔️ | —  | 4MB de SRAM externa                                                           |
| UART                 | ✔️    | ✔️ | ✔️  |                                                                               |
| USB                  | —    | ✔️ | ❌  | Suporte para UART sobre USB (CDC)                                             |
| I2C                  | ✔️    | ✔️ | ✔️  | Mestre apenas. Endereçamento de 10 bits não suportado.                        |
| I2S                  | ❌    | ❌ | ❌  | [Aberto para votação](https://wokwi.com/features#feature-1031718532)          |
| SPI                  | ✔️    | ✔️ | ✔️  |                                                                               |
| TWAI                 | ❌    | ❌ | ❌  |                                                                               |
| RMT                  | 🟡    | 🟡 | 🟡  | Somente transmissão, use para controlar NeoPixels                             |
| LEDC PWM             | ✔️    | ✔️ | ✔️  | Used by analogWrite(), Servo, Buzzer, etc.                                    |
| MCPWM                | ❌    | — |  —  |                                                                               |
| DMA                  | 🟡    | 🟡 | ❌  |                                                                               |
| WiFi                 | ✔️    | ✔️ | ✔️  | Veja o [Guia WiFi do ESP32](./esp32-wifi)                                     |
| Bluetooth            | ❌    | — |  ❌  | [Aberto para votação](https://wokwi.com/features#feature-1047159691)          |
| Timers               | 🟡    | ✔️ | ✔️  |                                                                               |
| Watchdog             | ❌    | ❌ | ❌  |                                                                               |
| RTC                  | 🟡    | 🟡 | 🟡  | Apenas resistores RTC pull-up / pull-down                                     |
| ADC                  | ✔️    | ✔️ | ❌  | Nota: analogRead() retorna valores até 4095                                   |
| RNG                  | ✔️    | ✔️ | —  | Gerador de números aleatórios                                                 |
| AES Accelerator      | ✔️    | ✔️ | ✔️  |                                                                               |
| SHA Accelerator      | ✔️    | ✔️ | ✔️  |                                                                               |
| RSA Accelerator      | ✔️    | ✔️ | ✔️  |                                                                               |
| Hall Effect Sensor   | ❌    | —  |  —  |                                                                               |
| ULP Processor        | ❌    | ❌  | ❌  |                                                                               |
| GDB Debugging        | 🟡    | 🟡  | 🟡  | Apenas através do [wokwi-gdbserver](https://github.com/wokwi/wokwi-gdbserver) |
  
Legenda:  
✔️ - Simulado  
🟡 - Implementação parcial/trabalho em andamento  
❌ - Não implementado (mas se você precisar, [abra uma solicitação de recurso](https://github.com/wokwi/wokwi-features/issues/new?labels=enhancement&template=feature_request.md))  
— - Não disponível neste chip

## Simulação WiFi

Veja o [Guia WiFi do ESP32](./esp32-wifi).
