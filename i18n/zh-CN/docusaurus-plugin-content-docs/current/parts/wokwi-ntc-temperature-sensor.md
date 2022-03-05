---
title: wokwi-ntc-temperature-sensor Reference
sidebar_label: wokwi-ntc-temperature-sensor
---

Analog temperature sensor: NTC (negative temperature coefficient) thermistor.

<wokwi-ntc-temperature-sensor />

## Pin names

| Name | Description            |
| ---- | ---------------------- |
| VCC  | Positive power supply  |
| OUT  | Output signal (analog) |
| GND  | Ground                 |

## Attributes

| Name        | Description                            | Default value |
| ----------- | -------------------------------------- | ------------- |
| temperature | Initial temperature value (celsius)    | "24"          |
| beta        | The beta coefficient of the thermistor | "3950"        |

## Reading the temperature

The temperature sensor module includes a 10K NTC thermistor in series with a 10K resistor.

This setup produces a voltage that depends on the temperature. You can read this voltage by
connecting the OUT pin of the thermistor to an analog input pin and then using the
`analogRead()` function.

Use the following code to convert the return value of `analogRead()` into a temperature value (in celsius):

```cpp
const float BETA = 3950; // should match the Beta Coefficient of the thermistor
int analogValue = analogRead(A0);
float celsius = 1 / (log(1 / (1023. / analogValue - 1)) / BETA + 1.0 / 298.15) - 273.15;
```

## Simulator examples

- [NTC Thermistor Basic Example](https://wokwi.com/projects/299330254810382858)
