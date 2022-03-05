---
title: Referência do wokwi-pir-motion-sensor
sidebar_label: wokwi-pir-motion-sensor
---

Sensor de movimento infravermelho passivo (PIR).

<wokwi-pir-motion-sensor />

## Nome dos Pinos

| Nome | Descrição                     |
| ---- | ----------------------------- |
| GND  | Terra                         |
| OUT  | Saída (digital)               |
| VCC  | Fonte de alimentação positiva |

## Atributos

| Nome        | Descrição                                                                                | Valor padrão  |
| ----------- | ---------------------------------------------------------------------------------------- | ------------- |
| delayTime   | O número de segundos em que o pino OUT permanecerá alto                                  | "5"           |
| inhibitTime | O número de segundos que o sensor irá ignorar o movimento quando OUT retornar para baixo | "1.2"         |
| retrigger   | Defina como "0" para desativar a reativação                                              | ""            |

## Usando o sensor

Para acionar o sensor de movimento PIR:

1. Selecione o sensor clicando nele (enquanto a simulação está em execução).
2. Uma pequena janela pop-up será aberta. Clique em "Simular movimento".

O acionamento do sensor colocará o pino OUT em nível alto por 5 segundos (tempo de atraso),
e, em seguida, em nível de sinal baixo novamente. O sensor irá ignorar qualquer entrada adicional nos
próximos 1,2 segundos (tempo de inibição) e, em seguida, começara a detectar o movimento novamente.

Você pode ajustar a duração em nível alto do pino OUT definindo no atributo delayTime
(em um sensor físico, é utilizado um potenciômetro para definir o atraso).

A configuração padrão do sensor é para reativar: o sensor continua verificando
algum movimento enquanto o pino OUT estiver em nível alto. Isso estenderá o tempo de atraso a cada
vez que outro evento de movimento é detectado. Você pode desativar esse comportamento através
da definição do atributo "retrigger" para "0".

## Exemplos no simulador

- [Exemplo do sensor PIR (da AdaFruit)](https://wokwi.com/projects/299284655047180808)
