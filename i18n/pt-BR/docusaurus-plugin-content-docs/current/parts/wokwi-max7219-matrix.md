---
title: Referência do wokwi-max7219-matrix
sidebar_label: wokwi-max7219-matrix
---

import DotMatrix from './wokwi-max7219-matrix.svg';

Módulo Matriz de LED 8x8 com MAX7219

![MAX7219 LED Dot Matrix](wokwi-max7219-matrix.svg)

## Nome dos Pinos

| Nome | Descrição                |
| ---- | ------------------------ |
| VCC  | Tensão de alimentação    |
| GND  | Terra                    |
| DIN  | Entrada de dados         |
| CS   | Seletor de transferência |
| CLK  | Entrada de clock         |

Nota: o modelo de simulação atual não tem um pino DOUT para encadear várias unidades juntas. Você pode encadear várias unidades usando o atributo "chain" (veja abaixo).

## Atributos

| Nome  | Descrição                             | Valor padrão |
| ----- | ------------------------------------- | ------------ |
| chain | Quantas unidades devem ser encadeadas | "1"          |
| color | Cor do LED (quando aceso)             | "red"        |

### Encadeamento

Cada unidade matricial é uma matriz de LED 8x8. Todos os LEDs da matriz têm a mesma cor. Você pode encadear várias unidades horizontalmente definindo o atributo "chain". Por exemplo, ao definir o "chain" como 4 resultará em uma matriz 8x32 (quatro matrizes 8x8).

### Exemplos

| Resultado                                                                                          | Attrs                  |
| -------------------------------------------------------------------------------------------------- | ---------------------- |
| <DotMatrix style={{'--pixel-color': 'green'}} />                                                   | `{ "color": "green" }` |
| <DotMatrix /><span style={{'--pixel-color':'none'}}><DotMatrix /><DotMatrix /><DotMatrix /></span> | `{ "chain": "4" }`     |

## Exemplos no simulador

- [Relogio Matrix de LED](https://wokwi.com/arduino/projects/289186888566178317)
- [Esboço de um jogo Etch](https://wokwi.com/arduino/projects/296234816685212169)
- [Dados Eletrônicos (no ATtiny85)](https://wokwi.com/arduino/projects/291779699024069128)
- [Gerador de código QR no Arduino](https://wokwi.com/arduino/projects/297148152803230218)
- [Exemplos da biblioteca MD_Parola](https://wokwi.com/arduino/libraries/MD_Parola)
