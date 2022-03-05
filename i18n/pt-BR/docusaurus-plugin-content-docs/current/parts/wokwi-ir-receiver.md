---
title: Referência do wokwi-ir-receiver
sidebar_label: wokwi-ir-receiver
---

Receptor infravermelho 38KHz

<wokwi-ir-receiver />

## Nome dos Pinos

| Nome | Descrição        |
| ---- | ---------------- |
| GND  | Terra            |
| VCC  | Tensão positiva  |
| DAT  | Saída digital    |

## Usando o receptor

O receptor pode ser usado de duas maneiras:

1. Use o [Controle Remoto IR](wokwi-ir-remote) para enviar comandos infravermelhos.
2. Clique no receptor (enquanto a simulação está em execução) para enviar arbitrariamente [sinais IR codificados por NEC](https://exploreembedded.com/wiki/NEC_IR_Remote_Control_Interface_with_8051#NEC_Protocol). A interface do usuário permite especificar o endereço e os campos de comando na mensagem NEC.

Para ler os comandos no seu código Arduino, você pode usar a biblioteca [IRRemote](https://github.com/Arduino-IRremote/Arduino-IRremote) ou [IRMP](https://github.com/ukw100/IRMP).

## Exemplos no simulador

- [IRRemote + Display LCD](https://wokwi.com/projects/298934082074575369)
