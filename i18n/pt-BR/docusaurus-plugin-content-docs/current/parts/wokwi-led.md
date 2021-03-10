---
title: Referência do wokwi-led
sidebar_label: wokwi-led
---

LED 5mm padrão.

<wokwi-led />

## Nome dos Pinos

| Nome | Descrição              |
| ---- | ---------------------- |
| A    | Ânodo (pino positivo)  |
| C    | Cátodo (pino negativo) |

## Atributos

| Nome       | Descrição                       | Valor padrão         |
| ---------- | ------------------------------- | ---------------------|
| color      | A cor do invólucro do LED       | "red"                |
| lightColor | A cor da luz                    | depende da cor       |
| label      | Texto que aparece abaixo do led |                      |

### Exemplos

| Resultado                                                 | Atributos (attrs)                             |
| --------------------------------------------------------- | --------------------------------------------- |
| <wokwi-led color="green" />                               | `{ "color": "green" }`                        |
| <wokwi-led color="#FFFF00" />                             | `{ "color": "#FFFF00" }`                      |
| <wokwi-led label="Status" />                              | `{ "label": "Status" }`                       |
| <wokwi-led color="white" />                               | `{ "color": "white"}`                         |
| <wokwi-led color="white" lightColor="orange" value="1" /> | `{ "color": "white", "lightColor": "orange"}` |

## Exemplos no Simulador

- [Blink](https://wokwi.com/arduino/libraries/demo/blink) - Esboço Blink padrão do Arduino
