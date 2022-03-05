---
title: Referência do wokwi-ntc-temperature-sensor
sidebar_label: wokwi-ntc-temperature-sensor
---

Sensor analógico de temperatura: termistor NTC (coeficiente de temperatura negativo).

<wokwi-ntc-temperature-sensor />

## Nome dos Pinos

| Nome | Descrição                     |
| ---- | ----------------------------- |
| VCC  | Fonte de alimentação positiva |
| OUT  | Sinal de saída (analógico)    |
| GND  | Terra                         |

## Atributos

| Nome        | Descrição                              | Valor padrão  |
| ----------- | -------------------------------------- | ------------- |
| temperature | Valor da temperatura inicial (celsius) | "24"          |
| beta        | O coeficiente beta do termistor        | "3950"        |

## Lendo a temperatura

O módulo do sensor de temperatura inclui um termistor NTC de 10K em série com um resistor de 10K.

Esta configuração produz uma voltagem que depende da temperatura. Você pode ler esta tensão através
da conexão do pino OUT do termistor a um pino de entrada analógica e, em seguida, usar a
função `analogRead()`.

Use o seguinte código para converter o valor de retorno da função `analogRead()` em um valor de temperatura (em celsius):

```cpp
const float BETA = 3950; // Deve corresponder ao coeficiente beta do termistor
int analogValue = analogRead(A0);
float celsius = 1 / (log(1 / (1023. / analogValue - 1)) / BETA + 1.0 / 298.15) - 273.15;
```

## Exemplos no simulador

- [Exemplo básico do termistor NTC](https://wokwi.com/projects/299330254810382858)
