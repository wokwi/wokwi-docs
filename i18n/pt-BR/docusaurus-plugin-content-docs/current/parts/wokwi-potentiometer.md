---
title: Referência do wokwi-potentiometer
sidebar_label: wokwi-potentiometer
---

Resistência variável controlada por botão (potenciômetro linear)

<wokwi-potentiometer />

## Nome dos Pinos

| Nome | Descrição                                     |
| ---- | --------------------------------------------- |
| GND  | Terra                                         |
| SIG  | Saída, conecte a um pino de entrada analógica |
| VCC  | Tensão de alimentação                         |

Nota: Wokwi **não** suporta simulação analógica totalmente, então você terá o mesmo
resultado se não conectar os pinos GND/VCC.

Isso pode mudar no futuro, então é uma boa ideia conectar o GND/VCC de qualquer maneira.

## Atributos

| Nome  | Descrição                                      | Valor padrão  |
| ----- | ---------------------------------------------- | ------------- |
| value | Valor inicial do potenciômetro, entre 0 e 1023 | "0"           |

## Usando o potenciômetro no Arduino

Conecte o pino SIG a um dos pinos de entrada analógica do Arduino (A0, A1, ...). Em seguida, use a função `analogRead()` para ler o valor atual do potenciômetro.

O exemplo de código a seguir assume que o potenciômetro está conectado a A0.
Ele lerá e imprimirá o valor atual do potenciômetro a cada 100 milissegundos:

```cpp
void setup() {
  Serial.begin(115200);
  pinMode(A0, INPUT);
}

void loop() {
  int value = analogRead(A0);
  Serial.println(value);
  delay(100);
}
```

Você pode [executar o exemplo no Wokwi](https://wokwi.com/projects/298685457758159369). Observe como o gráfico da plotter muda conforme você move o botão do potenciômetro.

## Controle no teclado

Você pode controlar o potenciômetro com o teclado:

- Seta Esquerda / Seta Direita - movimento fino
- Page Up / Page Down - movimento aproximado
- Home / End - move para o início (0) ou para o final (1023) do intervalo

Você precisará clicar no potenciômetro antes de usar esses atalhos de teclado.

## Exemplos no simulador

- [Knob](https://wokwi.com/arduino/libraries/Servo/Knob) - Controle um [servo](wokwi-servo) com um potenciômetro
- [Plot](https://wokwi.com/projects/298685457758159369) - Plotar valores de potenciômetro no Serial Plotter
- [Block shooter](https://wokwi.com/projects/291960996581343753) - Jogo estilo breakout
