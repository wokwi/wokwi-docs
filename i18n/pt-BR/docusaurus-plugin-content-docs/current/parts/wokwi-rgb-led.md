---
title: Referência do wokwi-rgb-led
sidebar_label: wokwi-rgb-led
---

LED 5mm vermelho, verde e azul (RGB).

<wokwi-rgb-led />

## Nome dos Pinos

| Nome | Descrição    |
| ---- | ------------ |
| R    | LED vermelho |
| G    | LED verde    |
| B    | LED azul     |
| COM  | Pino comum\* |

\* Por padrão, o pino comum é o ânodo (positivo). Você pode alterá-lo definindo o atributo "common" para "cathode" (negativo).

## Atributos

| Nome   | Descrição                                  | Valor padrão |
| ------ | ------------------------------------------ | ------------ |
| common | O tipo do pino comum: "cathode" ou "anode" | "anode"      |

## Exemplos no simulador

- [LED RGB com 3 controles deslizantes lineares](https://wokwi.com/projects/306455554559050306)
- [LED RGB pulsante suave](https://wokwi.com/projects/306461175146611264)
