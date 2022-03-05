---
title: Referência do wokwi-74hc165
sidebar_label: wokwi-74hc165
---

Registrador de deslocamento de entrada (shift register) de 8 bits Serial-Out Parallel-In (PISO)

![74HC165](wokwi-74hc165.svg)

Use o registrador de deslocamento 74HC165 para expandir o número de pinos de _input_ em seu microcontrolador. Para registro de deslocamento de saída (por exemplo, controlar vários LEDs com apenas alguns pinos), consulte o [wokwi-74hc595](wokwi-74hc595).

## Nome dos Pinos

| Pino  | Descrição                                     |
| ----- | --------------------------------------------- |
| D0…D7 | Entrada paralela                              |
| PL    | Carga paralela (ativo em nível baixo)         |
| CP    | Clock serial                                  |
| CE    | Clock habilitado (ativo em nível baixo)       |
| Q7    | Saída serial                                  |
| Q7_N  | Saída serial invertida (geralmente não usada) |
| DS    | Entrada serial\*                              |
| GND   | Terra                                         |
| VCC   | Tensão de alimentação                         |

\* Use o DS para conectar várias unidades 74HC165 em série. Conecte o DS ao pino Q7 do chip 74HC165 anterior na cadeia. Você pode deixar o DS desconectado se não fizer a cadeia ou para o primeiro chip da cadeia.

## Operação

O 74HC165 é um registrador de deslocamento com oito entradas paralelas: ele permite que você teste simultaneamente oito pinos de entrada e, em seguida, leia o resultado de um bit por vez. Em outras palavras, é uma maneira fácil de expandir o número de pinos de entrada do seu microcontrolador.

O registrador de deslocamento tem dois estados: amostragem e deslocamento. O pino PL seleciona o estado ativo.

### Amostragem (PL baixo)

Quando PL está em nível baixo, o registrador de deslocamento está no estado de amostragem: ele lê as entradas dos pinos D0… D7 e as armazena. Ele também produz o valor de D7 no pino Q7 (então Q7 == D7).

### Deslocamento (PL alto)

Quando PL está em nível alto, o registrador está no estado de deslocamento. Ele retém o valor que lê da entrada e permite que você leia esse valor um bit por vez através do pino Q7. Você pode ler o próximo bit pulsando CP (o relógio serial) alto. Inicialmente, Q7 contém o valor lido de D7. Quando você pulsa o clock alto, obtém o valor de D6. Ao pulsar novamente, você obtém o valor de D5, etc.

Alterar os pinos de entrada enquanto PL está alto não tem efeito.

### Usando o registrador de deslocamento

Para usar o registrador de deslocamento, conecte os pinos D0… D7 às suas entradas (por exemplo, [interruptores deslizantes](wokwi-slide-switch) ou [pushbuttons](wokwi-pushbutton)). Pode ser necessário adicionar pull-up ou pull-down externo [resistores](wokwi-resistor), especialmente se você utilizar com os botões.

Você também precisa conectar PL, CP e Q7 ao seu microcontrolador. Configure PL e CP como saídas digitais e Q7 como uma entrada digital.

Finalmente, conecte o pino CE ao aterramento. Você pode usar este pino para desativar a mudança (elevando-o alto), mas geralmente não é necessário. Não deixe o pino CE flutuando!

Faça uma amostra das entradas definindo PL para baixo.

Leia o valor configurando PL para alto. Leia o primeiro bit (mais significativo) de Q7 e, em seguida, pulse o CP alto para obter o próximo bit. Repita oito vezes, até ler todos os bits do registrador de deslocamento.

### Encadeamento de vários registros de deslocamento

Você pode encadear vários registradores de deslocamento e ainda usar um único pino de entrada do microcontrolador. Essa configuração também é chamada de cascata. As conexões são as seguintes:

1. Conecte o pino Q7 de cada unidade (exceto o último) ao pino DS (entrada serial) da próxima unidade.
2. Conecte o pino Q7 da última unidade ao microcontrolador.
3. Os pinos PL (parallel load) e CP (clock) são compartilhados entre todas as unidades. Portanto, você só precisa de dois pinos de microcontrolador para controlar toda a cadeia. Se você usar o CE (pino de ativação do clock), ele também pode ser compartilhado. Caso contrário, basta conectá-lo ao solo.

A operação é igual à anterior: amostragem e depois deslocamento. Há uma diferença: você lê mais de 8 bits durante a mudança. Para uma cadeia de n registradores de deslocamento, você deslocará 8\*n bits lendo repetidamente Q7 e, em seguida, pulsando em nível alto no CP. Portanto, para duas unidades 74hc165 você deslocaria 16 bits, para três unidades você deslocaria 24 bits, etc.

Se você não precisa de todos os bits (por exemplo, você tem duas unidades de registro de deslocamento, usando apenas 10 entradas), então você pode deslocar um número menor de bits, quantos você estiver interessado.

## Exemplo de código Arduino

Este exemplo assume que você conectou o shift register ao Arduino da seguinte maneira:

| Pino Arduino | Pino 74HC165 |
| ------------ | ------------ |
| 2            | Q7\*         |
| 3            | CP           |
| 4            | PL           |
| GND          | CE           |
| GND          | GND          |
| 5V           | VCC          |

\* Se você encadear vários registradores de deslocamento, conecte apenas o pino Q7 do último registrador na cadeia ao Arduino.

```cpp
const int dataPin = 2;   /* Q7 */
const int clockPin = 3;  /* CP */
const int latchPin = 4;  /* PL */

const int numBits = 8;   /* Configurado como 8 * o número de shift registers */

void setup() {
  Serial.begin(115200);
  pinMode(dataPin, INPUT);
  pinMode(clockPin, OUTPUT);
  pinMode(latchPin, OUTPUT);
}

void loop() {
  // Etapa 1: Amostra
  digitalWrite(latchPin, LOW);
  digitalWrite(latchPin, HIGH);

  // Etapa 2: Deslocamento
  Serial.print("Bits: ");
  for (int i = 0; i < numBits; i++) {
    int bit = digitalRead(dataPin);
    if (bit == HIGH) {
      Serial.print("1");
    } else {
      Serial.print("0");
    }
    digitalWrite(clockPin, HIGH); // Desloca para a próxima parte
    digitalWrite(clockPin, LOW);
  }

  Serial.println();
  delay(1000);
}
```

[Execute este exemplo no Wokwi](https://wokwi.com/projects/306031380875182657).

## Exemplos no simulador

- [Shift register 74HC165 de uma entrada](https://wokwi.com/projects/306031380875182657)
- [Shift register 74HC165 em cascata](https://wokwi.com/projects/306024460940476993) - four units daisy-chained to read the state of 32 switches
