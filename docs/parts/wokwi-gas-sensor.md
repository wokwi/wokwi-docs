---
title: wokwi-gas-sensor Reference
sidebar_label: wokwi-gas-sensor
---

MQ2 Gas Sensor module

<wokwi-gas-sensor />

## Pin names

| Name | Description           |
| ---- | --------------------- |
| VCC  | Positive power supply |
| GND  | Ground                |
| DO   | Digital output        |
| AO   | Analog output         |

## Attributes

| Name      | Description                                      | Default value |
| --------- | ------------------------------------------------ | ------------- |
| ppm       | Initial gas concentration (in parts per million) | "400"         |
| threshold | Digital output threshold voltage                 | "4.4"         |

## Operation

The MQ2 Gas Sensor is a semiconductor sensor that can detect the presence of various combustible gases including LPG, Propane, Hydrogen, Methane, and Carbon Monoxide. The sensor has both analog and digital outputs:

- The analog output (AO) provides a continuous voltage reading that corresponds to the gas concentration (ppm). Higher gas concentration results in higher voltage output.
- The digital output (DO) acts as a threshold detector - it goes LOW when gas concentration exceeds the threshold set by the potentiometer.

To use the MQ2 sensor:

1. Connect VCC to 5V power supply
2. Connect GND to ground
3. For analog readings:
   - Connect AO to an analog input pin
   - Read the analog value to get relative gas concentration
4. For threshold detection:
   - Connect DO to a digital input pin
   - The pin will read LOW when gas concentration exceeds threshold
   - Adjust threshold using the `threshold` attribute

Note: In real hardware, the sensor needs a pre-heating time of about 20-30 seconds before taking readings. The simulator provides readings immediately.


### Digital output

The digital output (DO) pin will read LOW when gas concentration exceeds the threshold. The threshold is set by the `threshold` attribute. The default threshold is 4.4V.


## Simulator examples

- [MQ2 Gas Sensor Digital Example](https://wokwi.com/projects/424318978955716609)
