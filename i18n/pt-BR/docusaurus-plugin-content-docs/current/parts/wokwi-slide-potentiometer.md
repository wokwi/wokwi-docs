---
title: Referência do wokwi-slide-potentiometer
sidebar_label: wokwi-slide-potentiometer
---

Resistência variável deslizante (potenciômetro linear)

<wokwi-slide-potentiometer />

A funcionalidade e pinagem do potenciômetro deslizante são as mesmas do potenciômetro linear. Confira a [documentação do potenciômetro wokwi](wokwi-potentiometer) para maiores informações.

## Atributos

| Nome         | Descrição                                                                                                                            | Valor padrão |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------ |
| value        | Valor inicial do potenciômetro, entre 0 e 1023                                                                                       | "0"          |
| travelLength | Comprimento do percurso da ponta (mm). Controla a largura do potenciômetro.<br />Valores comuns: "15", "20", "30", "45", "60", "100" | "30"         |

### Exemplos

| Resultado                                        | Attrs                       |
| ------------------------------------------------ | --------------------------- |
| <wokwi-slide-potentiometer travelLength="15" />  | `{ "travelLength": "15" }`  |
| <wokwi-slide-potentiometer travelLength="60" />  | `{ "travelLength": "60" }`  |
| <wokwi-slide-potentiometer travelLength="100" /> | `{ "travelLength": "100" }` |

## Exemplos no simulador

- [Potenciômetro deslizante + Servo](https://wokwi.com/projects/297604176384360973) - Controle um [servo](wokwi-servo) com um potenciômetro deslizante
