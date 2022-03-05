---
title: Referência do wokwi-lcd1602
sidebar_label: wokwi-lcd1602
---

import FontA00p1 from './wokwi-lcd1602-fonta00-1.svg';
import FontA00p2 from './wokwi-lcd1602-fonta00-2.svg';

Um LCD com 2 linhas, 16 caracteres por linha.

<wokwi-lcd1602 text=" wokwi-lcd1602" />

## Nome dos Pinos

O LCD1602 vem em 2 configurações possíveis: configuração I2C e configuração padrão. A configuração I2C geralmente é mais simples de usar.

A tabela a seguir resume as principais diferenças:

| Propriedade                       | Padrão        | I2C               |
| --------------------------------- | ------------- | ----------------- |
| Número de pinos de I/O do Arduino | 7\*           | 2 (SCL)/SDA       |
| Controle de luz de fundo          | Opcional      | Sim               |
| Nome da biblioteca                | LiquidCrystal | LiquidCrystal_I2C |

\* Controlar a luz de fundo requer outro pino de I/O.

Você pode selecionar a configuração desejada definindo o atributo `pins`. Defina-o como "i2c" para a configuração I2C ou como "full" para a configuração padrão (o padrão).

### Configuração I2C

| Nome | Descrição             |
| ---- | --------------------- |
| GND  | Terra                 |
| VCC  | Tensão de alimentação |
| SDA  | Linha de dados I2C    |
| SCL  | Linha de clock I2C    |

O endereço I2C padrão do módulo LCD1602 é 0x27.

Nota: A configuração I2C simula um chip PCF8574T que controla o módulo LCD. Normalmente, você não teria que se preocupar com isso, pois a biblioteca LiquidCrystal_I2C cuida da comunicação com o chip.

### Configuração padrão

| Nome | Descrição                           | Pino Arduino\* |
| ---- | ----------------------------------- | -------------- |
| VSS  | Terra                               | GND.1          |
| VDD  | Tensão de alimentação               | 5V             |
| V0   | Ajuste de contraste (não simulado)  |                |
| RS   | Seleção de comando/dados            | 12             |
| RW   | Leitura/Escrita. Conectar ao terra  | GND.1          |
| E    | Enable                              | 11             |
| D0   | Dados paralelos 0 (opcional) †      |                |
| D1   | Dados paralelos 1 (opcional) †      |                |
| D2   | Dados paralelos 2 (opcional) †      |                |
| D3   | Dados paralelos 3 (opcional) †      |                |
| D4   | Dados paralelos 4                   | 10             |
| D5   | Dados paralelos 5                   | 9              |
| D6   | Dados paralelos 6                   | 8              |
| D7   | Dados paralelos 7                   | 7              |
| A    | Luz de fundo ânodo                  | 5V / 6‡        |
| K    | Luz de fundo cátodo                 | GND.1          |

\* Estes são apenas exemplos de número de pinos, eles não são obrigatórios. Você pode usar qualquer pino digital/analógico, mas certifique-se de atualizar o código de acordo!
† Normalmente, você configuraria o chip no modo paralelo de 4 bits, o que significa que você só precisa conectar os pinos RS, E, D4, D5, D6 e D7 ao Arduino.
‡ Se você precisar controlar a luz de fundo, conecte o ânodo a um pino de E/S. Caso contrário, conecte-o à tensão de alimentação. Para um circuito real, você também
precisa de um resistor limitador de corrente, mas você pode ignorá-lo no ambiente de simulação.

#### Exemplo de código Arduino

Ao inicializar a biblioteca LiquidCrystal em seu código, você precisa passar os números dos pinos para o construtor.

O exemplo a seguir usa números de pinos que correspondem à tabela acima:

```cpp
#include <LiquidCrystal.h>

LiquidCrystal lcd(12, 11, 10, 9, 8, 7);

void setup() {
  lcd.begin(16, 2);
  // Agora você pode interagir com o LCD, por exemplo:
  lcd.print("Ola Mundo!");
}

void loop() {
  // ...
}
```

Você também pode [tentar este exemplo no Wokwi](https://wokwi.com/projects/294342288335700490).

## Atributos

| Nome        | Descrição                                 | Valor padrão |
| ----------- | ----------------------------------------- | ------------ |
| pins        | Defina como "i2c" para a configuração I2C | "full"       |
| i2c-address | Endereço I2C (configuração I2C)           | "0x27"       |
| color       | A cor do texto                            | "black"      |
| background  | A cor da luz de fundo                     | "green"      |

### Exemplos

| Resultado                                                           | Attrs                                        |
| ------------------------------------------------------------------- | -------------------------------------------- |
| <wokwi-lcd1602 text="Ola Mundo!" />                                 | `{ }`                                        |
| <wokwi-lcd1602 text="Ola Mundo!" pins="i2c" />                      | `{ "pins": "i2c" }`                          |
| <wokwi-lcd1602 background="blue" color="white" text="Ola Mundo!" /> | `{ "background": "blue", "color": "white" }` |

## Fonte

O LCD1602 usa o [chip Hitachi HD44780 LCD Controller](https://en.wikipedia.org/wiki/Hitachi_HD44780_LCD_controller).
O chip vem com uma fonte embutida, bem como a capacidade de definir até 8 caracteres personalizados.

Existem duas versões da ROM do chip com duas fontes diferentes: HD44780UA00, que inclui caracteres katakana Japoneses,
e HD44780UA02, que inclui caracteres da Europa Ocidental.

Wokwi simula a variante HD44780UA00. Possui um total de 256 caracteres:

| Faixa   | Descrição                                                     |
| ------- | ------------------------------------------------------------- |
| 0-7     | [Caracteres definidos pelo usuário](#user-defined-characters) |
| 8-31    | Caracteres em branco                                          |
| 32-127  | Caracteres ASCII padrão                                       |
| 128-160 | Caracteres em branco                                          |
| 161-255 | Katankana e símbolos japoneses                                |

Símbolos de caracteres ASCII:

<FontA00p1 className="svg-font-table" />

Símbolos de caracteres especiais:

<FontA00p2 className="svg-font-table"  />

Observação: se você precisar de uma variante da fonte HD44780UA02, [abra uma solicitação de recurso](https://github.com/wokwi/wokwi-features/issues/new) ou
entre em contato no [Discord](https://wokwi.com/discord).

### Caracteres definidos pelo usuário

Você pode definir caracteres personalizados usando o método [createChar](https://www.arduino.cc/en/Reference/LiquidCrystalCreateChar) da biblioteca LiquidCrsytal (ou LiquidCrystal_I2C). Os caracteres personalizados são os primeiros 8 caracteres da fonte, com índices de 0 a 7. Você pode imprimi-los no LCD
exibir usando o método `write()`, ou usando a sequência de escape de string C, como `"\x07"`.

O exemplo de código a seguir define um caractere em forma de coração, armazena-o no índice 3 e, em seguida, use-o para exibir o texto `"Eu ❤ Arduino"`:

```cpp
#include <LiquidCrystal.h>

LiquidCrystal lcd(12, 11, 10, 9, 8, 7);

uint8_t heart[8] = {
  0b00000,
  0b01010,
  0b11111,
  0b11111,
  0b11111,
  0b01110,
  0b00100,
  0b00000,
};

void setup() {
  lcd.createChar(3, heart);
  lcd.begin(16, 2);
  lcd.print("  Eu \x03 Arduino");
}

void loop() { }
```

Você também pode [executar este exemplo no Wokwi](https://wokwi.com/projects/294395602645549578).

Você pode modificar qualquer caractere personalizado durante a execução do programa. Este método é útil para
criar simples animações. Por exemplo, mude em `loop()` no código de exemplo acima para lentamente
exibir o ícone de coração, linha por linha:

```cpp
void loop() {
  uint8_t heart2[8] = {0};
  for (int i = 0; i < 8; i++) {
    heart2[i] = heart[i];
    lcd.createChar(3, heart2);
    delay(100);
  }
  delay(500);
}
```

## Exemplos no simulador

- [LiquidCrystal Hello World](https://wokwi.com/projects/294342288335700490)
- [LiquidCrystal I2C Hello World](https://wokwi.com/arduino/libraries/LiquidCrystal_I2C/HelloWorld)
- [LiquidCystal Custom characters](https://wokwi.com/projects/294395602645549578)
- [Electronic Safe](https://wokwi.com/arduino/libraries/demo/electronic-safe)
- [DS1307 Clock](https://wokwi.com/projects/298783436806554120)
