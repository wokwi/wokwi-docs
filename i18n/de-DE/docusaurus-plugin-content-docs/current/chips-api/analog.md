---
title: Analoge API
sidebar_label: Analoge API
---

# Analoge API

### float pin_adc_read(pin_t pin)

Misst die aktuelle Spannung an dem angegebenen Pin und gibt sie zurück. Der Pin muss auf den Modus `ANALOG` eingestellt sein, damit der Rückgabewert nicht `undefined` ist. Beachten Sie, dass Wokwi ein digitaler Simulator mit grundlegender analoger Unterstützung ist, daher gibt es derzeit nur eine sehr begrenzte analoge Simulation. Einige Teile, die eine analoge Ausgabe unterstützen, sind das [Potentiometer](../parts/wokwi-slide-potentiometer), der [NTC-Temperatursensor](../parts/wokwi-ntc-temperature-sensor), der [Photowiderstand](../parts/wokwi-photoresistor-sensor) und der [Analog-Joystick](../parts/wokwi-analog-joystick).


### void pin_dac_write(pin_t pin, float voltage)

Setzt die analoge Spannung an dem angegebenen Pin. Momentan ist die Referenzspannung für alle virtuellen ADCs 5 Volt (unabhängig von der MCU), sodass das Setzen der Spannung auf 0 den Minimalwert und das Setzen der Spannung auf 5 den Maximalwert (d.h. 1023 beim Arduino) zurückgibt. (ändert sich eventuell in der Zukunft)

Diese Methode kann aufgerufen werden, bevor der Pin in den Modus `ANALOG` gesetzt wird, aber die Spannung wird erst aktualisiert, wenn der Pin-Modus auf `ANALOG` gesetzt wird.

## Beispiele

- [Beispielprojekt](https://wokwi.com/projects/330112801381024338)
