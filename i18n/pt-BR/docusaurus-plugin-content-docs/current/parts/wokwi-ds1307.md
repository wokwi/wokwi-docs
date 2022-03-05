---
title: Referência do wokwi-ds1307
sidebar_label: wokwi-ds1307
---

Módulo RTC (Real Time Clock) com interface I2C e 56 bytes de NV SRAM.

<wokwi-ds1307 />

## Nome dos Pinos

| Nome | Descrição                                            |
| ---- | ---------------------------------------------------- |
| GND  | Terra                                                |
| 5V   | Tensão positiva (5V)                                 |
| SDA  | Linha de dados I2C                                   |
| SCL  | Linha de clock I2C                                   |
| SQW  | Saída de onda quadrada. Não disponível na simulação. |

O endereço I2C do DS1307 é 0x68.

## Comportamento da Simulação

O simulador do DS1307 é inicializado automaticamente com a hora atual do sistema ao iniciar a simulação. Após isso
continua contando o tempo.

O código em execução na simulação pode atualizar a data/hora do DS1307 e o DS1307 manterá o controle
do tempo da atualização.

## Exemplos no simulador

- [Lendo data/hora usando RTClib](https://wokwi.com/projects/305979285237137984)
- [Despertador](https://wokwi.com/playground/alarm-clock)
