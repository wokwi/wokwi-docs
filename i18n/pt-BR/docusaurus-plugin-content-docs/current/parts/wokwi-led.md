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
| label      | Texto que aparece abaixo do LED |                      |
| gamma      | Fator de correção gamma         | "2.8"                |
| flip       | Vira o LED horizontalmente      | ""                   |

Nota: Para girar os LEDs, clique neles e pressione "R", ou defina a propriedade ["rotate"](../diagram-format#parts).

### Exemplos

| Resultado                                                 | Atributos (attrs)                             |
| --------------------------------------------------------- | --------------------------------------------- |
| <wokwi-led color="green" />                               | `{ "color": "green" }`                        |
| <wokwi-led color="#FFFF00" />                             | `{ "color": "#FFFF00" }`                      |
| <wokwi-led label="Status" />                              | `{ "label": "Status" }`                       |
| <wokwi-led color="white" />                               | `{ "color": "white"}`                         |
| <wokwi-led color="white" lightColor="orange" value="1" /> | `{ "color": "white", "lightColor": "orange"}` |
| <wokwi-led color="red" flip="1"/>                         | `{ "color": "red", "flip": "1"}`              |

### Correção de Gamma

O LED aplica automaticamente a correção de gamma. Isso significa que mesmo uma explosão muito curta de corrente resultará
em alguma luz visível, semelhante a como os LEDs físicos funcionam, para que você obtenha uma simulação mais precisa nos seguintes casos:

1. Usando `analogWrite()` com valores muito pequenos (ciclo de trabalho curto),
2. Técnicas de varredura de LED, como [Charlieplexing](https://goodarduinocode.com/guides/charlieplexing).

Você pode desativar a correção de gamma definindo o atributo "gamma" para "1.0". Você também pode escolher um
fator gamma definindo este atributo com o valor desejado. O fator de correção de gamma padrão é "2.8".

O [projeto de demonstração da correção de gamma](https://wokwi.com/projects/304762988710068800) mostra o comportamento de diferentes valores: o LED à esquerda tem o fator gamma padrão de "2.8", enquanto o LED à direita tem um fator gamma de "1.0". Você pode ver como valores mais baixos em `analogWrite()` parecem muito mais brilhantes no LED esquerdo.

## Exemplos no simulador

- [Blink](https://wokwi.com/arduino/libraries/demo/blink) - Esboço Blink padrão do Arduino
