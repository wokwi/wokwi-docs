---
title: Referência do wokwi-analog-joystick
sidebar_label: wokwi-analog-joystick
---

Joystick analógico com dois eixos (horizontal/vertical) e um botão de pressão integrado.

<wokwi-analog-joystick />

## Nome dos Pinos

| Nome | Descrição                            |
| ---- | ------------------------------------ |
| VCC  | Fonte de alimentação positiva        |
| VERT | Saída do eixo vertical (analógica)   |
| HORZ | Saída do eixo horizontal (analógica) |
| SEL  | Botão de pressionar                  |
| GND  | Terra                                |

A tensão da posição ociosa é VCC/2. Movendo o joystick ao longo do eixo vertical altera a tensão do pino VERT de 0 volts (inferior) para VCC (superior). Movendo o joystick ao longo do eixo horizontal muda as tensões do pino HORZ de 0 volts (direita) para VCC (esquerda).

O pino SEL está normalmente aberto (flutuante). Clicando no centro do joystick conecta o pino SEL ao terra. O botão do joystick simula [bouncing] (wokwi-pushbutton # salto) por padrão. Você pode desativar o bouncing definindo o atributo "bounce" como "0".

## Atributos

| Nome   | Descrição                                 | Valor padrão  |
| ------ | ----------------------------------------- | ------------- |
| bounce | Defina como "0" para desativar o bouncing | ""            |

## Operando o Joystick

Você pode operar o joystick com o mouse movendo o cursor sobre o joystick. Você irá ver quatro setas, correspondendo às quatro direções do movimento,
e um círculo no meio. Clique em uma das setas para mover o eixo do joystick nessa direção e no círculo no meio para pressionar o
botão do joystick (conectado ao pino SEL).

Para operar o joystick com o teclado, primeiro foque nele (usando a tecla tab ou clicando nele com o mouse), a seguir use as teclas de seta para mover
o eixo do joystick e a tecla de espaço para pressionar o botão do joystick (conectado ao pino SEL). É possível combinar várias chaves
de uma vez, por exemplo seta para a esquerda e seta para cima, para mover o eixo na direção diagonal. Você também pode pressionar a tecla de espaço enquanto mantém pressionadas as setas
para pressionar o joystick enquanto move o eixo.

Movimento parcial e controle por touch não são suportados no momento. No entanto, adoraríamos vê-los suportados - então, se você estiver à altura da tarefa, há [uma solicitação aberta esperando pelo seu carinho](https://github.com/wokwi/wokwi-elements/issues/62).

## Usando o joystick no Arduino

| Pino do joystick | Pinos Arduino                       | Pin de código de exemplo |
| ---------------- | ----------------------------------- | ------------------------ |
| VCC              | 5V                                  |                          |
| VERT             | qualquer pino analógico (A0...A5)   | A0                       |
| HORZ             | qualquer pino analógico (A0...A5)   | A1                       |
| SEL              | qualquer pino digital               | 2                        |
| GND              | GND                                 |                          |

Para usar o Joystick no Arduino, conecte os pinos VERT e HORZ aos pinos analógicos (A0...A6) e configure esses pinos como entrada. Leia a posição do joystick usando `analogRead()`.

```cpp
#define VERT_PIN A0
#define HORZ_PIN A1
#define SEL_PIN  2

void setup() {
  pinMode(VERT_PIN, INPUT);
  pinMode(HORZ_PIN, INPUT);
  pinMode(SEL_PIN, INPUT_PULLUP);
}

void loop() {
  int vert = analogRead(VERT_PIN);
  int horz = analogRead(HORZ_PIN);
  bool selPressed = digitalRead(SEL_PIN) == LOW;
  // horz vai de 0 (direita) a 1023 (esquerda)
  // vert vai de 0 (parte inferior) a 1023 (parte superior)
  // selPressed é true se o joystick estiver pressionado
}
```

### Tabela de Posição do Joystick

A tabela a seguir mostra as diferentes posições do joystick e os valores HORZ/VERT correspondentes, conforme retornado por `analogRead()`:

| Posição           | HORZ | VERT | Joystick                                                   |
| ----------------- | ---- | ---- | ---------------------------------------------------------- |
| Superior-Esquerda | 1023 | 1023 | <wokwi-analog-joystick xValue="1" yValue="1" disabled />   |
| Superior          | 512  | 1023 | <wokwi-analog-joystick xValue="0" yValue="1" disabled />   |
| Superior-Direita  | 0    | 1023 | <wokwi-analog-joystick xValue="-1" yValue="1" disabled />  |
| Esquerda          | 1023 | 512  | <wokwi-analog-joystick xValue="1" yValue="0" disabled />   |
| Central           | 512  | 512  | <wokwi-analog-joystick xValue="0" yValue="0" disabled />   |
| Direita           | 0    | 512  | <wokwi-analog-joystick xValue="-1" yValue="0" disabled />  |
| Inferior-Esquerda | 1023 | 0    | <wokwi-analog-joystick xValue="1" yValue="-1" disabled />  |
| Inferior          | 512  | 0    | <wokwi-analog-joystick xValue="0" yValue="-1" disabled />  |
| Inferior-Direita  | 0    | 0    | <wokwi-analog-joystick xValue="-1" yValue="-1" disabled /> |

### Usando o map()

Você pode usar a [função map()](https://www.arduino.cc/reference/pt/language/functions/math/map/) para mapear novamente os valores para um intervalo diferente.
Por exemplo, `map(analogRead(HORZ_PIN), 0, 1023, -100, 100)` retornará -100 quando o joystick estiver totalmente para a direita, 0 quando o joystick
estiver centralizado e 100 quando o joystick estiver totalmente à esquerda.

## Exemplos no simulador

- [Etch-a-sketch](https://wokwi.com/projects/296234816685212169) - Um jogo de desenho simples usando uma Matriz de LED MAX7219
