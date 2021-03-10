---
title: Referência do wokwi-servo
sidebar_label: wokwi-servo
---

Um Motor Micro Servo padrão

<wokwi-servo />

## Nome dos Pinos

| Nome | Descrição                  |
| ---- | -------------------------- |
| PWM  | Sinal de controle do Servo |
| V+   | Tensão positiva (5V)       |
| GND  | Terra                      |

## Atributos

| Nome      | Descrição                                     | Valor padrão  |
| --------- | --------------------------------------------- | ------------- |
| horn      | Tipo de hélice: "single", "double" ou "cross" | "single"      |
| hornColor | A cor da hélice do servo                      | "#ccc"        |

### Exemplos

| Resultado                        | Atributos (attrs)         |
| -------------------------------- | ------------------------- |
| <wokwi-servo horn="single" />    | `{ "horn": "single" }`    |
| <wokwi-servo hornColor="#008" /> | `{ "hornColor": "#008" }` |
| <wokwi-servo horn="double" />    | `{ "horn": "double" }`    |
| <wokwi-servo horn="cross" />     | `{ "horn": "cross" }`     |

## Exemplos no Simulador

- [Sweep](https://wokwi.com/arduino/libraries/Servo/Sweep)
- [Knob](https://wokwi.com/arduino/libraries/Servo/Knob)
