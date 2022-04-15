---
title: wokwi-a4988 Reference
sidebar_label: wokwi-a4988
---

Driver de motor de passo A4988, para uso com [wokwi-stepper-motor](./wokwi-stepper-motor)

![Wokwi A4988](wokwi-a4988.svg)

## Nome dos Pinos

| Nome   | Descrição                                             | Valor padrão \* |
| ------ | ----------------------------------------------------- | --------------- |
| ENABLE | Pino de ativação, ativo em baixo (puxado para baixo)  | Low (0)         |
| MS1    | Pino de seleção de micropasso 1                       | Low (0)         |
| MS2    | Pino de seleção de micropasso 2                       | Low (0)         |
| MS3    | Pino de seleção de micropasso 3                       | Low (0)         |
| RESET  | Pino de reset, ativo em baixo (flutuante)             |                 |
| SLEEP  | Pino de suspensão, ativo em baixo (puxado para cima)  | High (1)        |
| STEP   | Entrada de passo, conecte ao microcontrolador         |                 |
| DIR    | Entrada de direção: 0 = anti-horário, 1 = horário     |                 |
| GND    | Terra                                                 |                 |
| VDD    | Tensão de alimentação                                 |                 |
| 1B     | Conecte ao A- do motor                                |                 |
| 1A     | Conecte ao A+ do motor                                |                 |
| 2A     | Conecte ao B+ do motor                                |                 |
| 2B     | Conecte ao B- do motor                                |                 |
| VMOT   | Fonte de alimentação do motor, não usada na simulação |                 |

\* Os pinos digitais com um valor padrão de Low (0) são puxados para baixo e os pinos com um valor padrão de High (1) são puxados para cima. Os pinos sem valor padrão são flutuantes.

### Configuração de micropasso

Os motores de passo padrão têm 200 passos por revolução (os passos são espaços separados por 1,8 graus). O driver de passo suporta micropasso: girando o motor menos de um passo para cada pulso. O micropasso permite um controle mais preciso do movimento do motor.

Use os pinos MS1/MS2/MS3 para selecionar a configuração de micropasso para o driver de passo:

| MS1 | MS2 | MS3 | Modo de operação        | Graus  | Micropassos/revolução |
| --- | --- | --- | ----------------------- | ------ | --------------------- |
| 0   | 0   | 0   | Passo completo (padrão) | 1.8    | 200                   |
| 1   | 0   | 0   | Meio passo              | 0.9    | 400                   |
| 0   | 1   | 0   | Passo de 1/4\*          | 0.45   | 800                   |
| 1   | 1   | 0   | Passo de 1/8\*          | 0.225  | 1600                  |
| 1   | 1   | 1   | Passo de 1/16\*         | 0.1125 | 3200                  |

\* Estes modos não são totalmente suportados por [wokwi-stepper-motor](./wokwi-stepper-motor). Ao usar esses modos, o número de passos por revolução ainda estará correto, mas o ângulo do motor só será atualizado a cada meio passo. Por exemplo, se você usar o modo de passo de 1/8, o motor se moverá meio passo (0,9 graus) a cada quatro pulsos do pino STEP.

## Usando o Driver de Passo A4988

Conecte os pinos do motor de passo aos pinos 1B/1A/2A/2B do driver. O pino RESET tem que ser HIGH, então você pode conectá-lo ao pino SLEEP adjacente (que é puxado para HIGH por padrão). Alternativamente, você pode habilitar/desabilitar o driver do motor de passo do seu código conectando os pinos RESET/SLEEP ao seu microcontrolador.

Use o pino STEP para mover o motor de passo. Cada pulso ALTO neste pino moverá o motor um passo (ou micropasso, dependendo dos pinos MS1/MS2/MS3). Quando o pino DIR estiver em HIGH, o motor de passo se moverá no sentido horário. Quando o pino DIR estiver em BAIXO, o motor se moverá no sentido anti-horário.

Por exemplo, se DIR, MS1 e MS3 forem LOW, e MS2 for HIGH (modo de 1/4 de passo), então pulsar o pino STEP moverá o motor 1/4 de passo (0,45 graus) no sentido anti-horário.

## Exemplos no simulador

- [Controle do A4988 usando um botão + interruptor](https://wokwi.com/projects/327823888123691604) - pressione o botão verde para mover o motor um passo e troque a posição do interruptor para mudar a direção.
- [Controlador GCODE de 4 motores](https://wokwi.com/projects/327761195587076690) - Digite "G00 X10 Y25" para mover o primeiro motor 10 passos e o segundo 25 passos.
