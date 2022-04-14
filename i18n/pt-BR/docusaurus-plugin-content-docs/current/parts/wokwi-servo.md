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

| Resultado                        | Atributos (attrs)            |
| -------------------------------- | ---------------------------- |
| <wokwi-servo horn="single" />    | `{ "horn": "single" }`       |
| <wokwi-servo hornColor="#008" /> | `{ "hornColor": "#000088" }` |
| <wokwi-servo horn="double" />    | `{ "horn": "double" }`       |
| <wokwi-servo horn="cross" />     | `{ "horn": "cross" }`        |

## Exemplos no simulador

- [Sweep](https://wokwi.com/arduino/libraries/Servo/Sweep)
- [Knob](https://wokwi.com/arduino/libraries/Servo/Knob)
- [Controlando 1 servo com dois botões no Arduino Nano](https://wokwi.com/projects/328312829780165204)
- [Controlando 5 servos com Arduino Uno](https://wokwi.com/projects/305087394119418434)
- [Animando 32 servos com Arduino Mega](https://wokwi.com/projects/305336312628511297)
