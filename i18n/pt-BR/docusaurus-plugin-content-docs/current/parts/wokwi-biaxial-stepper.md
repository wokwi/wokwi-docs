---
title: Referência do wokwi-biaxial-stepper
sidebar_label: wokwi-biaxial-stepper
---

Um motor de passo biaxial concêntrico, contendo dois motores de passo embalados em um único gabinete.

<wokwi-biaxial-stepper innerHandAngle="90" />

## Nome dos Pinos

| Nome | Descrição                                           |
| ---- | --------------------------------------------------- |
| A1-  | Sinal negativo da bobina A do eixo externo do motor |
| A1+  | Sinal positivo da bobina A do eixo externo do motor |
| B1+  | Sinal positivo da bobina B do eixo externo do motor |
| B1-  | Sinal negativo da bobina B do eixo externo do motor |
| A2-  | Sinal negativo da bobina A do eixo interno do motor |
| A2+  | Sinal positivo da bobina A do eixo interno do motor |
| B2+  | Sinal positivo da bobina B do eixo interno do motor |
| B2-  | Sinal negativo da bobina B do eixo interno do motor |

## Atributos

| Nome            | Descrição                                                          | Valor padrão |
| --------------- | ------------------------------------------------------------------ | ------------ |
| outerHandLength | O comprimento da mão do eixo externo, entre "20" e "70"            | "30"         |
| outerHandColor  | A cor da mão do eixo externo                                       | "gold"       |
| outerHandShape  | A forma da mão do eixo externo: "plain", "arrow", or "ornate"      | "plain"      |
| innerHandLength | O comprimento da mão do eixo interno, entre "20" e "70"            | "30"         |
| innerHandColor  | A cor da mão do eixo interno                                       | "silver"     |
| innerHandShape  | A forma da mão do eixo interno: "plain", "arrow", ou "ornate"      | "plain"      |

### Exemplos

| Resultado                                                                                                                              | Attrs                                                                                 |
| -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| <wokwi-biaxial-stepper innerHandLength="40" innerHandShape="arrow" outerHandAngle="90" />                                              | `{ "innerHandLength": "40", "innerHandShape": "arrow" }`                              |
| <wokwi-biaxial-stepper innerHandShape="ornate" innerHandColor="red" outerHandShape="ornate" FouterHandAngle="45" outerHandAngle="90"/> | `{ "innerHandColor": "red", "innerHandShape": "ornate", "outerHandShape": "ornate" }` |

## Usando o motor de passo biaxial

O motor de passo biaxial é feito de dois motores de passo individuais. Confira a documentação do [wokwi-stepper-motor](./wokwi-stepper-motor#using-the-stepper-motor) e [wokwi-a4988](./wokwi-a4988) para obter mais informações sobre o uso de motores de passo e seus comportamento de simulação.

## Exemplos no simulador

- [Motor de passo biaxial com Arduino Uno](https://wokwi.com/projects/344254821712265811)
- [Motor de passo biaxial com dois drivers A4988](https://wokwi.com/projects/345206751024382546)
