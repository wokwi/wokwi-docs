---
title: Introdução ao Wokwi para VS Code
sidebar_label: Iniciando
---

Wokwi for Visual Studio Code fornece uma solução de simulação para engenheiros de sistemas embarcados e IoT. A extensão se integra ao seu ambiente de desenvolvimento existente, permitindo que você simule seus projetos diretamente do seu editor de código.

Você pode usar Wokwi para VS Code com Zehpyr Project, PlatformIO, ESP-IDF, Pi Pico SDK, NuttX, Rust, Arduino CLI e outras estruturas e cadeias de ferramentas de desenvolvimento incorporadas.

:::caution Aviso
Wokwi for VS Code está atualmente em beta público. Após a versão beta, alguns recursos estarão disponíveis apenas para usuários pagos.
:::

<figure>
  <video src="https://wokwi.github.io/video-assets/vscode/wokwi-vscode-1s.mp4" autoPlay muted loop style={{width:'100%'}}></video>
  <figcaption>Wokwi para VS Code executando um projeto ESP-IDF</figcaption>
</figure>

## Instalação

Primeiro, instale a extensão [Wokwi for VS Code](https://marketplace.visualstudio.com/items?itemName=wokwi.wokwi-vscode). Em seguida, pressione `F1` e selecione "Wokwi: Solicitar uma nova licença". O VS Code solicitará que você confirme a abertura do site Wokwi em seu navegador. Confirme clicando em "Abrir".

Em seguida, clique no botão azul que diz "GET YOUR LICENSE". Você pode ser solicitado a entrar em sua conta Wokwi. Se você não tiver uma conta, poderá criar uma gratuitamente.

O navegador pedirá uma confirmação para enviar a licença para o VS Code. Confirme (talvez seja necessário confirmar duas vezes, uma vez no navegador e outra no VS Code). Você verá uma mensagem no VS Code que diz "License activated for [seu nome]". Parabéns!

## Exemplos de Projetos

Para configurar o Wokwi para seu próprio projeto, consulte a página [Configurando seu projeto](./project-config).

Se você quiser começar rapidamente e brincar com o Wokwi para VS Code, aqui estão alguns projetos de exemplo, pré-configurados com os arquivos [diagram.json](../diagram-format) e [wokwi.toml](./project-config).

:::info Aviso
Antes de simular qualquer um dos projetos a seguir, você precisa compilar o código e gerar o arquivo firmware/ELF. Consulte o arquivo README do projeto para obter instruções sobre como compilar o código.
:::

### Exemplos do Platform IO

- [Arduino Simon Game](https://github.com/wokwi/arduino-simon-game) - Jogo da memória com 4 LEDs, 4 botões, buzzer e display de 7 segmentos
- [ESP32 Network Clock](https://github.com/wokwi/esp32-ntp-clock) - Sincroniza a hora da internet (NTP) e a exibe em um display LCD
- [ESP32 Web Server](https://github.com/wokwi/esp32-http-server) - Servidor HTTP que controla 2 LEDs
- [ESP32 Async Web Server](https://github.com/wokwi/esp32-async-web-server-example) - Servidor HTTP que controla 2 LEDs, usando a biblioteca ESPAsyncWebServer

### Exemplos do ESP-IDF

- [WiFi + FreeRTOS Tasks](https://github.com/wokwi/esp32-idf-hello-wifi)

### ESP32 + Rust

- [Hello Display](https://github.com/playfulFence/esp-hello-display/tree/feature/vscode-wokwi) - Usando o display ILI9341 com ESP32-C3
- [esp-gallery](https://github.com/playfulFence/esp-gallery) - Galeria de arte interativa (ESP32-C3)
- [ESP32-S2 Keypad Example](https://github.com/playfulFence/esp-keypad-example/tree/feature/vscode-wokwi)
- [Scrolling text](https://github.com/playfulFence/esp-rolling-stone) - Usando a matriz de pontos com LED
- [Etch-A-Sketch](https://github.com/playfulFence/esp-etch-a-sketch) - Desenhe matriz de pontos com LED usando um joystick analógico

### Exemplos de extensões do Arduino

:::caution Aviso
A extensão Arduino do VS Code requer Arduino IDE 1.8 ou [Arduino CLI](https://github.com/microsoft/vscode-arduino/issues/1477#issuecomment-1278699661) instalado. Não funciona (ainda) com o Arduino IDE 2.0.
:::

- [Arduino LCD-1602 "Olá Mundo"](https://github.com/wokwi/arduino-lcd-helloworld)

### Outros exemplos

- [Custom chips example](https://github.com/wokwi/inverter-chip) - Um [chip personalizado](../chips-api/getting-started) que inverte o sinal de entrada
- [Raspberry Pi Pico SDK](https://github.com/wokwi/pico-sdk-blink) - Blinky para Raspberry Pi Pico
