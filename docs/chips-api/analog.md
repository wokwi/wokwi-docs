---
title: Analog API
sidebar_label: Analog API
---

# Analog API

### float pin_adc_read(pin_t pin)

Measures the current voltage on the given pin, and returns it. The pin must be set to `ANALOG` mode, otherwise the return value of this function is undefined. Note that Wokwi is a digital simulator with basic analog support, so there is currently very limited analog simulation. Some parts which support analog output include the [potentiometer](../parts/wokwi-slide-potentiometer), [NTC temperature sensor](../parts/wokwi-ntc-temperature-sensor), [photoresistor](../parts/wokwi-photoresistor-sensor), and [analog joystick](../parts/wokwi-analog-joystick).

### void pin_dac_write(pin_t pin, float voltage)

Sets the analog voltage on the given pin. Currently, the reference voltage for all the virtual ADCs is 5 volts (regardless of the MCU), so setting the voltage to 0 will return the minimum value, and setting the voltage to 5 will return the maximum value (that is 1023 on Arduino). This may change in the future.

This method can be called before setting the pin to `ANALOG` mode, but the voltage will only update once the pin mode is set to `ANALOG`.

## Simulator examples

- [Analog API chip example](https://wokwi.com/projects/330112801381024338)
