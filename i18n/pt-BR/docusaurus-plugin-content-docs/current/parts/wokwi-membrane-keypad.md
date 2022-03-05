---
title: Referência do wokwi-membrane-keypad
sidebar_label: wokwi-membrane-keypad
---

Um teclado 4x4 padrão. Ótimo para entrada numérica, por exemplo código PIN de segurança.

<wokwi-membrane-keypad connector="true" />

## Nome dos Pinos

| Nome | Descrição                | Pino de exemplo\* |
| ---- | ------------------------ | ----------------- |
| R1   | Linha 1 (linha superior) | 9                 |
| R2   | Linha 2                  | 8                 |
| R3   | Linha 3                  | 7                 |
| R4   | Linha 4 (linha inferior) | 6                 |
| C1   | Coluna 1 (esquerda)      | 5                 |
| C2   | Coluna 2                 | 4                 |
| C3   | Coluna 3                 | 3                 |
| C4   | Coluna 4 (direita)       | 2                 |

\* Esses são apenas os números de pinos do Arduino Uno usados ​​no exemplo do código abaixo. Você pode usar qualquer pino de entrada digital.

## Atributos

| Nome    | Descrição                     | Valor padrão                                                                     |
| ------- | ----------------------------- | -------------------------------------------------------------------------------- |
| columns | Numero de colunas: "3" ou "4" | "4"                                                                              |
| keys    | Rótulos para as teclas        | ["1", "2", "3", "A", "4", "5", "6", "B", "7", "8", "9", "C", "*", "0", "#", "D"] |

Você pode alterar os rótulos das teclas conforme desejar. Os primeiros quatro itens da matriz definem os rótulos para a primeira linha das teclas, o próximo
quatro itens definem os rótulos para a segunda linha das teclas, etc. Caracteres Unicode são suportados, então você pode usar caracteres especiais,
letras acentuadas, sobrescrito/subscrito (por exemplo, Xⁿ ou A₁) e até emojis.

#### Exemplo de código Arduino

O exemplo abaixo usa a biblioteca do teclado para Arduino. Os nomes das teclas definidos no array `keys`
define os valores que `keypad.getKey()` retorna. Eles não precisam corresponder aos rótulos das chavee reais
(mas pode ser confuso se não o fizerem) e devem conter exatamente um caractere ASCII.

```cpp
#include <Keypad.h>

const uint8_t ROWS = 4;
const uint8_t COLS = 4;
char keys[ROWS][COLS] = {
  { '1', '2', '3', 'A' },
  { '4', '5', '6', 'B' },
  { '7', '8', '9', 'C' },
  { '*', '0', '#', 'D' }
};

uint8_t colPins[COLS] = { 5, 4, 3, 2 }; // Pinos conectados a C1, C2, C3, C4
uint8_t rowPins[ROWS] = { 9, 8, 7, 6 }; // Pinos conectados a R1, R2, R3, R4

Keypad keypad = Keypad(makeKeymap(keys), rowPins, colPins, ROWS, COLS);

void setup() {
  Serial.begin(9600);
}

void loop() {
  char key = keypad.getKey();

  if (key != NO_KEY) {
    Serial.println(key);
  }
}
```

Você também pode tentar [este exemplo no Wokwi](https://wokwi.com/projects/294980637632233994).

### Exemplos

| Resultado                                                                                                           | Attrs                                                                           |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| <wokwi-membrane-keypad connector="true" />                                                                          | `{ }`                                                                           |
| <wokwi-membrane-keypad connector="true" columns="3" />                                                              | `{ "columns": "3" }`                                                            |
| <wokwi-membrane-keypad connector="true" keys='["1","2","3","4","Q","W","E","R","A","S","D","F","Z","X","C","V"]' /> | `{ "keys": ["1","2","3","4","Q","W","E","R","A","S","D","F","Z","X","C","V"] }` |

## Exemplos no simulador

- [Basic Keypad example](https://wokwi.com/projects/294980637632233994)
- [Arduino Calculator](https://wokwi.com/projects/276825819240727048)
- [Electronic Safe](https://wokwi.com/arduino/libraries/demo/electronic-safe)
