---
title: Referência do wokwi-stepper-motor
sidebar_label: wokwi-stepper-motor
---

Um motor de passo bipolar

<wokwi-stepper-motor />

## Nome dos Pinos

| Nome | Descrição                  |
| ---- | -------------------------- |
| A-   | Sinal positivo da bobina A |
| A+   | Sinal negativo da bobina A |
| B+   | Sinal positivo da bobina B |
| B-   | Sinal negativo da bobina B |

## Atributos

| Nome      | Descrição                                                                                                             | Valor padrão  |
| --------- | --------------------------------------------------------------------------------------------------------------------- | ------------- |
| arrow     | Exibe uma seta para indicar a posição do motor de passo. Defina a cor da seta, por ex. "orange"                       | ""            |
| display   | Qual número exibir no motor de passo? Valores válidos "steps" (em passos), "angle" (em graus), "none" (nenhum)        | "steps"       |
| gearRatio | A relação de transmissão do motor. defina como "1:1" para 200 passos/revolução, "2:1" para 400 passos/revolução, etc. | "1:1"         |

### Exemplos

| Resultado                                                     | Attrs                    |
| ------------------------------------------------------------- | ------------------------ |
| <wokwi-stepper-motor value="20" units="Steps" angle="36" />   | `{ "display": "steps" }` |
| <wokwi-stepper-motor value="36" units="Degrees" angle="36" /> | `{ "display": "angle" }` |
| <wokwi-stepper-motor angle="36" />                            | `{ "display": "none" }`  |
| <wokwi-stepper-motor angle="36" arrow="orange" />             | `{ "arrow": "orange" }`  |

## Usando o motor de passo

Ao usar um motor de passo, você precisa de um driver que possa fornecer grandes quantidades de corrente às bobinas do motor. Wokwi suporta a [placa de driver A4988] (wokwi-a4988). Você também pode conectar o motor de passo diretamente ao seu microcontrolador. O Wokwi usa um mecanismo de simulação digital, portanto, a corrente da bobina não é levada em consideração.

Você pode usar uma variedade de bibliotecas do Arduino para controlar o motor de passo: Stepper, AccelStepper, etc.

### Comportamento da Simulação

O motor de passo se move 1,8 graus por passo (200 passos por revolução). O motor também suporta meio passo (0,9 graus por passo / 400 passos por revolução). Você pode até usar micropassos menores (por exemplo, 1/4 ou 1/8 de passo), mas o motor simulado exibe apenas o ângulo em resolução de meio passo. Para obter mais informações, consulte a [tabela de configuração de microstepping A4988](wokwi-a4988#microstepping-configuration).

## Exemplos no simulador

- [Motor de passo usando a biblioteca Arduino Stepper](https://wokwi.com/projects/327324886912467538)
- [Controle direto do motor (sem biblioteca)](https://wokwi.com/projects/327360139702043220)
- [Controle avançado com potenciômetro e a biblioteca AccelStepper](https://wokwi.com/projects/327381547863769683)
- [Controle manualmente o motor de passo usando interruptores e relés](https://wokwi.com/projects/327424914940232274)
