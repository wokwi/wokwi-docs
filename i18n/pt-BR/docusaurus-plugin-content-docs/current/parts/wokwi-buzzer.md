---
title: Referência do wokwi-buzzer
sidebar_label: wokwi-buzzer
---

Um buzzer piezoelétrico

<wokwi-buzzer />

## Nome dos Pinos

| Nome | Descrição                |
| ---- | ------------------------ |
| 1    | Pino negativo (preto)    |
| 2    | Pino positivo (vermelho) |

## Atributos

| Nome   | Descrição                                          | Valor padrão  |
| ------ | -------------------------------------------------- | ------------- |
| mode   | Modo de operação do buzzer: "smooth" ou "accurate" | "smooth"      |
| volume | Volume (intensidade) do som, entre "0.01" e "1.0"  | "1.0"         |

### Modos de operação

O buzzer pode operar em dois modos: "smooth" (o padrão) e "accurate".

"smooth" soa melhor e é adequado para tons simples de frequência única. Use-o
ao tocar uma melodia ou tons com a função `tone()` do Arduino. Sons polifônicos complexos
podem não tocar corretamente (ou nem tocar) no modo "smooth" (suave).

Uso o modo "accurate" quando você precisar tocar sons complexos. Vai tocar com precisão
o som que você alimenta. No entanto, ele adicionará ruídos de clique audíveis ao seu som. Esses ruídos
são devido a flutuações na velocidade da simulação - nem sempre é capaz de fornecer o
buffer de som em tempo real.

## Arduino exemplo

Conecte o pino 1 da campainha ao pino GND do Arduino e o pino 2 da campainha ao pino 8 do Arduino. Em seguida, use a função `tone()` para reproduzir um som:

```cpp
tone(8, 262, 250); // Toca um tom de 262Hz por 0,250 segundos
```

## Exemplos no simulador

- [Jogo Simon](https://wokwi.com/arduino/libraries/demo/simon-game) - Um jogo de memória com 4 botões de pressão
- [Piano diatônico](https://wokwi.com/projects/291958456169005577) - Um piano de 8 notas, use as teclas 1 a 8 para pressionar os botões e tocar as notas.
- [Despertador](https://wokwi.com/playground/alarm-clock) - Use a campainha para tocar o som do alarme
