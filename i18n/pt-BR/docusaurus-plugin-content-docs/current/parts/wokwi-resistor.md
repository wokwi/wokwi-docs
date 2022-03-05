---
title: Referência do wokwi-resistor
sidebar_label: wokwi-resistor
---

Um resistor.

<wokwi-resistor value="470"></wokwi-resistor>

:::caution ALERTA
Wokwi tem apenas uma simulação de circuito analógico muito básica. Você não será capaz de usar resistores junto com
componentes analógicos (por exemplo, potenciômetro ou sensor de temperatura NTC). Você ainda pode usar os resistores como
pull-up/pull-down externos.
:::

## Nome dos Pinos

| Pino | Descrição     |
| ---- | ------------- |
| 1    | Primeiro pino |
| 2    | Segundo pino  |

## Atributos

| Nome  | Descrição            | Valor padrão |
| ----- | -------------------- | ------------ |
| value | Resistência, em ohms | "1000"       |

### Exemplos

| Resultado                           | Attrs                     |
| ----------------------------------- | ------------------------- |
| <wokwi-resistor value="1" />        | `{ "value": "1" }`        |
| <wokwi-resistor value="220" />      | `{ "value": "220" }`      |
| <wokwi-resistor value="10000000" /> | `{ "value": "10000000" }` |

Confira a [demonstração do resistor por Koepel](https://wokwi.com/projects/300936732038136328) para mais exemplos.

## Exemplos no simulador

- [Resistor externo pull-down](https://wokwi.com/projects/302214836102627848) - Como usar um resistor como pull-down para um botão
