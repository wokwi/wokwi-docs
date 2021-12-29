---
title: Referência do wokwi-led-bar-graph
sidebar_label: wokwi-led-bar-graph
---

Barra Gráfica de LEDs de 10 segmentos.

<wokwi-led-bar-graph values='[1,1,1,1,1,1,1,1,1,1]' />

## Nome dos Pinos

| Nome   | Descrição                                      |
| ------ | ---------------------------------------------- |
| A**n** | Ânodo (pino positivo) do LED **n** (n = 1…10)  |
| C**n** | Cátodo (pino negativo) do LED **n** (n = 1…10) |

ex. A1 é o ânodo do LED superior e C1 é o cátodo do LED superior.

## Atributos

| Nome  | Descrição                                                                | Valor padrão  |
| ----- | ------------------------------------------------------------------------ | ------------- |
| color | A cor do corpo do LED ou um dos valores especiais "GYR" / "BCYR"\*       | "red"         |

\* GYR significa Verde-Amarelo-Vermelho. BCYR significa Azul-Ciano-Amarelo-Vermelho

### Exemplos

| Resultado                                                               | Attrs                    |
| ----------------------------------------------------------------------- | ------------------------ |
| <wokwi-led-bar-graph  values='[1,1,1,1,1,1,1,1,1,1]' color="yellow" />  | `{ "color": "yellow" }`  |
| <wokwi-led-bar-graph  values='[1,1,1,1,1,1,1,1,1,1]' color="#9EFF3C" /> | `{ "color": "#9EFF3C" }` |
| <wokwi-led-bar-graph  values='[1,1,1,1,1,1,1,1,1,1]' color="GYR" />     | `{ "color": "GYR"}`      |
| <wokwi-led-bar-graph  values='[1,1,1,1,1,1,1,1,1,1]' color="BCYR"  />   | `{ "color": "BCYR"}`     |

## Exemplos no simulador

- [Arduino LED Graph Bar](https://wokwi.com/arduino/projects/309829489359061570) - Mova o botão do potenciômetro para controlar os LEDs
- [Contador Binário com Raspberry Pi Pico](https://wokwi.com/arduino/projects/309828467927548481)
