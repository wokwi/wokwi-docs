---
title: wokwi-dht22 Reference
sidebar_label: wokwi-dht22
---

Digital Humidity and Temperature sensor.

<wokwi-dht22 />

## Pin names

| Name | Description                     |
| ---- | ------------------------------- |
| VCC  | Positive voltage                |
| SDA  | Digital data pin (input/output) |
| NC   | Not connected                   |
| GND  | Ground                          |

## Attributes

| Name        | Description                                  | Default value |
| ----------- | -------------------------------------------- | ------------- |
| temperature | Initial temperature value (celsius)          | "24"          |
| humidity    | Initial relative humidity value (percentage) | "40"          |

## Controlling the temperature

You can change the temperature and humidity values while the simulation is running.
Click on the DHT22 sensor and a small popup window will open. Use the temperature and
humidity sliders to change the values. Click "Hide" to close the popup window.

## Simulator examples

- [DHTlib DHT22 test](https://wokwi.com/arduino/libraries/DHTlib/dht22_test)
- [DHT-sensor-library code examples](https://wokwi.com/arduino/libraries/DHT-sensor-library)
