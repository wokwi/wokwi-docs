---
title: Referência do wokwi-hc-sr04
sidebar_label: wokwi-hc-sr04
---

Sensor de distância ultrassônico HC-SR04

<wokwi-hc-sr04 />

## Nome dos Pinos

| Nome | Descrição                                                      |
| ---- | -------------------------------------------------------------- |
| VCC  | Tensão de alimentação (5V)                                     |
| TRIG | Pulso para iniciar a medição                                   |
| ECHO | Medição do comprimento de um pulso alto para obter a distância |
| GND  | Terra                                                          |

## Atributos

| Nome     | Descrição                                  | Valor padrão |
| -------- | ------------------------------------------ | ------------ |
| distance | Valor da distância inicial, em centímetros | "400"        |

## Operação

Para iniciar uma nova medição de distância, defina o pino TRIG para nível alto em 10µS ou mais. Em seguida, espere até que o pino ECHO esteja em nível alto,
e conte o tempo enquanto permaneça em alto (duração do pulso). O comprimento do pulso no pino ECHO em nível alto é proporcional à distância. Use
a tabela a seguir para converter a duração do pulso em microssegundos no pino ECHO para centímetros ou polegadas:

| Unidade     | Distância      |
| ----------- | -------------- |
| Centímetros | Pulso μs / 58  |
| Polegadas   | Pulso μs / 148 |

### Definindo a distância

Para alterar a distância enquanto a simulação está em execução, clique no elemento HC-SR04 no diagrama e use o controle deslizante
para definir o valor da distância. Você pode escolher qualquer valor entre 2cm e 400cm.

## Exemplo de código Arduino

```cpp
#define PIN_TRIG 3
#define PIN_ECHO 2

void setup() {
  Serial.begin(115200);
  pinMode(PIN_TRIG, OUTPUT);
  pinMode(PIN_ECHO, INPUT);
}

void loop() {
  // Inicia uma nova medição:
  digitalWrite(PIN_TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(PIN_TRIG, LOW);

  // Leia o resultado:
  int duration = pulseIn(PIN_ECHO, HIGH);
  Serial.print("Distância em CM: ");
  Serial.println(duration / 58);
  Serial.print("Distância em polegadas: ");
  Serial.println(duration / 148);

  delay(1000);
}
```

Experimente [este exemplo no Wokwi](https://wokwi.com/projects/304444938977804866)

## Exemplos no simulador

- [Sensor de distância com LED](https://wokwi.com/projects/290056311044833800)
- [Display de distância com LCD](https://wokwi.com/projects/290043622233997832)
- [Display de distância com 7 segmentos](https://wokwi.com/projects/295030553275532810)
- [Sensor ultrassônico com Franzininho](https://wokwi.com/projects/302020345098928648)
- [Sensor de estacionamento](https://wokwi.com/projects/290964046833779209)
