---
title: Simulador ESP32
sidebar_label: Simulador ESP32
---

O Simulador ESP32 está atualmente em pré-visualização. Existem duas placas ESP32:

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

Comece a partir do [modelo de projeto Arduino-ESP32](https://wokwi.com/arduino/new?template=esp32), ou do
[Exemplo de Blink ESP32](https://wokwi.com/arduino/projects/305452382231200320).

Se você quiser usar bibliotecas Arduino de terceiros, adicione um [arquivo libraries.txt](./libraries) com a lista de bibliotecas que você usa.

### MicroPython

Comece com o [modelo de projeto MicroPython ESP32](https://wokwi.com/arduino/new?template=micropython-esp32), ou com o
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
- [WiFi Scanning](https://wokwi.com/arduino/projects/305570169692881473)

### Exemplos ESP-IDF

Os exemplos a seguir usam as funções ESP-IDF. Eles são compilados usando o Arduino ESP32 Core:

- [Blink usando a API FreeRTOS](https://wokwi.com/arduino/projects/304209256260829762)
- [Contador de LED binário usando tarefas FreeRTOS](https://wokwi.com/arduino/projects/304210422302507585)
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
| I2S                | ❌     |                                                                            |
| SPI                | ❌     |                                                                            |
| RMT                | 🟡     | Apenas transmissão, use para controlar NeoPixels                           |
| PWM                | ❌     |                                                                            |
| DMA                | ❌     |                                                                            |
| WiFi               | 🟡     | Escaneamento da rede funciona; [Veja as notas](#simula%C3%A7%C3%A3o-wifi)  |
| Bluetooth          | ❌     |                                                                            |
| Timers             | 🟡     |                                                                            |
| Watchdog           | ❌     |                                                                            |
| RTC                | 🟡     | Apenas resistores RTC pull-up / pull-down                                  |
| ADC                | ✔️     | Nota: analogRead() retorna valores até 4095                                |
| RNG                | ✔️     | Gerador de números aleatórios                                              |
| AES Accelerator    | ❌     | Requerido para HTTPS / SSL                                                 |
| SHA Accelerator    | ❌     |                                                                            |
| RSA Accelerator    | ❌     |                                                                            |
| Hall Effect Sensor | ❌     |                                                                            |
| GDB Debugging      | 🟡     | Apenas atraves [wokwi-gdbserver](https://github.com/wokwi/wokwi-gdbserver) |

Legenda:  
✔️ - Simulado  
🟡 - Implementação parcial/trabalho em andamento  
❌ - Não implementado (mas se você precisar, [abra uma solicitação de recurso](https://github.com/wokwi/wokwi-features/issues/new?labels=enhancement&template=feature_request.md))

## Simulação WiFi

A simulação de WiFi ainda está em andamento. Você pode procurar por redes WiFi, e agora estamos trabalhando na capacidade de nos conectar a redes (associação).

O simulador fornece atualmente dois pontos de acesso WiFi virtuais integrados:

| Nome (SSID) | BSSID             | Descrição                                              |
| ----------- | ----------------- | ------------------------------------------------------ |
| Wokwi-GUEST | 42:13:37:55:aa:01 | Abra a rede WiFi (sem necessidade de senha)            |
| Wokwi-Club  | 42:13:37:55:aa:02 | Rede WiFi somente [assinantes](https://wokwi.com/club) |

A rede **Wokwi-GUEST** pode ser usada por qualquer pessoa e pode acessar um conjunto limitado de serviços da Internet.
A rede **Wokwi-Club** é limitada para [assinantes](https://wokwi.com/club), e pode acessar todos os servidores da Internet através de um proxy.
