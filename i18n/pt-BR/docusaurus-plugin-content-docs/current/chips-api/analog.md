---
title: API Analógica
sidebar_label: API Analógica
---

# API Analógica

### float pin_adc_read(pin_t pin)

Mede a tensão atual no pino fornecido e a retorna. O pino deve ser definido para o modo `ANALOG`, caso contrário, o valor de retorno desta função é indefinido. Observe que o Wokwi é um simulador digital com suporte analógico básico, portanto, atualmente, a simulação analógica é muito limitada. Algumas peças que suportam saída analógica incluem o [potenciômetro](../parts/wokwi-slide-potentiometer), [sensor de temperatura NTC](../parts/wokwi-ntc-temperature-sensor), [fotoresistor](../parts/wokwi-photoresistor-sensor) e [joystick analógico](../parts/wokwi-analog-joystick).

### void pin_dac_write(pin_t pin, float voltage)

Define a tensão analógica no pino fornecido. Atualmente, a tensão de referência para todos os ADCs virtuais é de 5 volts (independentemente do MCU), portanto, definir a tensão como 0 retornará o valor mínimo e definir a tensão como 5 retornará o valor máximo (que é 1023 no Arduino). Isso pode mudar no futuro.

Este método pode ser chamado antes de definir o pino para o modo `ANALOG`, mas a tensão só será atualizada quando o modo do pino for definido para `ANALOG`.

## Exemplos no simulator

- [Exemplo da API Analógica](https://wokwi.com/projects/330112801381024338)
