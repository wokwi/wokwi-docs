---
title: wokwi-pir-motion-sensor Reference
sidebar_label: wokwi-pir-motion-sensor
---

Passive Infrared (PIR) motion sensor.

<wokwi-pir-motion-sensor />

## Pin names

| Name | Description      |
| ---- | ---------------- |
| GND  | Ground           |
| OUT  | Output (digital) |
| VCC  | Supply voltage   |

## Attributes

| Name        | Description                                                                 | Default value |
| ----------- | --------------------------------------------------------------------------- | ------------- |
| delayTime   | The number of seconds OUT pin will stay high                                | "5"           |
| inhibitTime | The number of seconds the sensor will ignore motion when OUT returns to low | "1.2"         |
| retrigger   | Set to "0" to disable retriggering                                          | ""            |

## Using the sensor

To trigger the PIR motion sensor:

1. Select the sensor by clicking on it (while the simulation is running).
2. A small popup window will open. Click on "Simulate Motion".

Triggering the sensor will drive the OUT pin high for 5 seconds (delay time),
and then go low again. The sensor will ignore any further input for the
next 1.2 seconds (inhibit time), and then start sensing for motion again.

You can adjust the high duration of the OUT pin by setting the delayTime
attribute (on a physical sensor you use a potentiometer to set the delay).

The default setting of the sensor is to retrigger: the sensor keeps checking
for motion while the OUT pin is high. It will extend the delay time every
time another motion event is detected. You can disable this behavior by
setting the "retrigger" attribute to "0".

## Simulator examples

- [PIR sensor example (from AdaFruit)](https://wokwi.com/projects/299284655047180808)
