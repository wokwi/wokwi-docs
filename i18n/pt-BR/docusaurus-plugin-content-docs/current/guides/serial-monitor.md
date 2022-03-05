---
title: O Monitor Serial
sidebar_label: Monitor Serial
---

O Monitor Serial fornece uma maneira de enviar/receber informações de/para o seu código Arduino.
Você pode usá-lo para visualizar mensagens de depuração exibidas pelo seu programa ou para enviar comandos que controlam o seu programa.

## Arduino Uno e Mega

Tanto o Arduino Uno quanto o Mega possuem suporte de hardware para o protocolo Serial (USART). O Monitor Serial se conectará automaticamente à porta serial do hardware e detectará a taxa de transmissão, de forma que funcionará imediatamente, sem qualquer configuração especial.

Você pode usar a [Classe de Comunicação Serial do Arduino](https://www.arduino.cc/reference/pt/language/functions/communication/serial/) para interagir com o monitor serial:

```cpp
void setup() {
  Serial.begin(115200); // Qualquer taxa de transmissão deve funcionar
  Serial.println("Olá Arduino\n");
}

void loop() {
  // Não faz nada...
}
```

:::caution ATENÇÃO
O Monitor Serial só será mostrado quando você imprimir alguma saída de seu programa. Para mudar este comportamento, [veja abaixo](#display).
:::

O Arduino Mega possui várias portas seriais de hardware. Você pode conectar o monitor serial a uma porta serial diferente configurando os pinos em diagram.json. Por exemplo, para conectar `Serial2` ao monitor serial, adicione as seguintes linhas a seção `connections` do seu diagrama:

```json
  [ "mega:17", "$serialMonitor:TX", "" ],
  [ "mega:16", "$serialMonitor:RX", "" ],
```

Substitua `mega` pelo ID atual do componente `wokwi-arduino-mega`.
Observe que você precisa conectar `$serialMonitor:TX` ao pino `RX` da porta serial, e `$serialMonitor:RX` to the `TX` pin of the serial port. This can be confusing, I know.

## ATtiny85 + SoftwareSerial

O chip ATtiny85 não possui suporte de hardware embutido para comunicação serial (USART). Você pode usar uma
implementação de software do protocolo USART para interagir com o monitor Serial, utilizando a biblioteca "SoftwareSerial".

Primeiro, defina os pinos que serão usados ​​para a comunicação Serial, adicionando as seguintes linhas a seção `connections` do seu arquivo [diagram.json](../diagram-format):

```json
  [ "tiny:PB0", "$serialMonitor:TX", "" ],
  [ "tiny:PB1", "$serialMonitor:RX", "" ],
```

Substitua `tiny` pelo id do componente ` wokwi-attiny85`, e `PB1`/`PB0` pelo nome dos pinos que você gostaria de usar.

Em seguida, configure a biblioteca SoftwareSerial de acordo:

```cpp
#include <SoftwareSerial.h>

SoftwareSerial Serial(PB0, PB1);

void setup() {
  Serial.begin(9600); // Deve ser 9600
  Serial.println("Olá Arduino\n");
}

void loop() {
  // Não faz nada...
}
```

Certifique-se de que o nome dos pinos em seu código correspondam aos do arquivo do diagrama.
O primeiro parâmetro para o construtor `SoftwareSerial` deve corresponder ao pino conectado ao `$serialMonitor:TX`, e
o segundo parâmetro deve corresponder ao pino conectado ao `$serialMonitor:RX`.

:::caution ATENÇÃO
A taxa de transmissão deve ser definida como **9600**. Isso é codificado no simulador e ao usar um valor diferente
vai exibir caracteres estranhos no monitor Serial.
:::

Para um exemplo completo, verifique o [Projeto de exemplo SoftwareSerial com ATtiny85](https://wokwi.com/projects/290883003139228169).

Nota: se você quiser apenas usar o monitor serial para imprimir mensagens de depuração, dê uma olhada na [biblioteca TinyDebug](../parts/wokwi-attiny85#depuração-com-tinydebug).

## Configurando o Monitor Serial

Você pode configurar o Monitor Serial adicionando uma seção `"serialMonitor"` ao seu arquivo [diagram.json](../diagram-format).

A configuração padrão é a seguinte:

```json
"serialMonitor": {
  "display": "auto",
  "newline": "lf"
}
```

Ao adicionar uma seção `"serialMonitor"`, adicione-a após o último item em diagram.json ou certifique-se de adicionar uma vírgula após a chave de fechamento. Você pode encontrar um exemplo completo [aqui](https://wokwi.com/projects/308893120796295745).

### Display

A propriedade `display` configura quando exibir o monitor serial. Os valores possíveis são:

| Valor    | Descrição                                                         |
| -------- | ----------------------------------------------------------------- |
| auto     | Exibe o monitor serial quando houver alguma saída (por padrão)    |
| always   | Sempre exibe o Monitor Serial quando a simulação é iniciada       |
| never    | Nunca exiba o monitor serial                                      |
| plotter  | Exibe o plotter serial quando a simulação é iniciada              |
| terminal | Exibe um terminal (usando [XTerm.js](https://xtermjs.org/))       |

Nota: o modo "terminal" suporta cores de texto e de fundo. Você pode verificar [o exemplo de cores ANSI do Arduino](https://wokwi.com/projects/308893120796295745) para vê-lo em ação.

### Newline

Quando você insere uma linha de texto no Monitor Serial, o simulador envia esse texto para o seu programa.

Seu programa pode lê-lo usando `Serial.read()` e também alguns outros [métodos seriais](https://www.arduino.cc/reference/pt/language/functions/communication/serial/).

Por padrão, o simulador também anexa um caractere de quebra de linha ("\n", código ASCII 10) a cada linha
de texto que envia ao seu programa. Você pode usar a propriedade `newline` para alterar esse comportamento e configurar uma sequência diferente de caracteres:

| Valor | Caracteres | Código ASCII | Descrição                                            |
| ----- | ---------- | ------------ | ---------------------------------------------------- |
| lf    | "\n"       | 10           | Quebra de linha (por padrão)                         |
| cr    | "\r"       | 13           | Retorno de carro                                     |
| crlf  | "\r\n"     | 10 13        | Retorno de carro + quebra de linha                   |
| none  | ""         |              | Não acrescenta nenhum caractere especial na entrada  |
