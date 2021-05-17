---
title: Referência do wokwi-dht22
sidebar_label: wokwi-dht22
---

Sensor digital de umidade e temperatura.

<wokwi-dht22 />

## Nome dos Pinos

| Nome | Descrição                             |
| ---- | ------------------------------------- |
| VCC  | Tensão positiva                       |
| SDA  | Pino digital de dados (entrada/saída) |
| NC   | Não conectado                         |
| GND  | Terra                                 |

## Atributos

| Nome        | Descrição                                       | Valor padrão  |
| ----------- | ----------------------------------------------- | ------------- |
| temperature | Valor da temperatura inicial (celsius)          | "24"          |
| humidity    | Valor de umidade relativa inicial (porcentagem) | "40"          |

## Controlando a temperatura

Você pode alterar os valores de temperatura e umidade durante a execução da simulação.
Clique no sensor DHT22 e uma pequena janela pop-up será aberta.
Use os controles deslizantes de temperatura e umidade para alterar os valores.
Clique em "Ocultar" para fechar a janela pop-up.

## Exemplos no simulador

- [Teste DHTlib DHT22](https://wokwi.com/arduino/libraries/DHTlib/dht22_test)
- [Exemplos de código da biblioteca DHT](https://wokwi.com/arduino/libraries/DHT-sensor-library)
