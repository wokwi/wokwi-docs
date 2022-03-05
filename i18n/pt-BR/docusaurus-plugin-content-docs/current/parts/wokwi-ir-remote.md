---
title: Referência do wokwi-ir-remote
sidebar_label: wokwi-ir-remote
---

Controle Remoto infravermelho de 38KHz com 20 teclas de função. Use junto com o [Módulo Receptor IR](wokwi-ir-receiver).

<wokwi-ir-remote />

## Teclas de função

As teclas enviam mensagens infravermelhas codificadas usando o [formato de mensagem NEC](https://exploreembedded.com/wiki/NEC_IR_Remote_Control_Interface_with_8051#NEC_Protocol). Cada tecla envia um valor de comando diferente (consulte a tabela abaixo) e o campo do endereço é sempre 0.

Cada tecla possui um atalho do teclado que ativa a tecla enquanto o controle remoto está em foco.

A tabela a seguir lista os comandos NEC, valor codificado NEC e o atalho do teclado
para cada uma das teclas:

| Tecla    | Comando | NEC codificado | Atalho do teclado       |
| -------- | ------- | -------------- | ----------------------- |
| Liga     | 162     | 0xFFA25D       | O                       |
| Menu     | 226     | 0xFFE21D       | M                       |
| Test     | 34      | 0xFF22DD       | T                       |
| Mais     | 2       | 0xFF02FD       | +                       |
| Voltar   | 194     | 0xFFC23D       | B                       |
| Anterior | 224     | 0xFFE01F       | Seta para a esquerda    |
| Play     | 168     | 0xFFA857       | P                       |
| Próximo  | 144     | 0xFF906F       | Seta para a direita     |
| 0        | 104     | 0xFF6897       | 0                       |
| Menos    | 152     | 0xFF9867       | - (menos)               |
| C        | 176     | 0xFFB04F       | C                       |
| 1        | 48      | 0xFF30CF       | 1                       |
| 2        | 24      | 0xFF18E7       | 2                       |
| 3        | 122     | 0xFF7A85       | 3                       |
| 4        | 16      | 0xFF10EF       | 4                       |
| 5        | 56      | 0xFF38C7       | 5                       |
| 6        | 90      | 0xFF5AA5       | 6                       |
| 7        | 66      | 0xFF42BD       | 7                       |
| 8        | 74      | 0xFF4AB5       | 8                       |
| 9        | 82      | 0xFF52AD       | 9                       |

## Exemplos no simulador

- [IRRemote + Display LCD](https://wokwi.com/projects/298934082074575369)
