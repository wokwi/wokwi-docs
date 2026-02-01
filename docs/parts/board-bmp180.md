---
title: board-bmp180 Barometric Pressure Sensor
sidebar_label: board-bmp180
---

Barometric pressure and temperature sensor with I2C interface.

![board-bmp180](https://raw.githubusercontent.com/wokwi/wokwi-boards/main/boards/bmp180/board.svg)

## Pin names

| Name | Description    |
| ---- | -------------- |
| VCC  | Voltage supply |
| 3.3V | 3.3V supply    |
| GND  | Ground         |
| SCL  | I2C clock line |
| SDA  | I2C data line  |

## Attributes

| Name        | Description                         | Default value |
| ----------- | ----------------------------------- | ------------- |
| temperature | Initial temperature value (celsius) | "24"          |
| pressure    | Initial pressure value (pascals)    | "101325"      |

### Measurement ranges

- Temperature: -40°C to 85°C
- Pressure: 30000 Pa to 110000 Pa (300 hPa to 1100 hPa)

The default pressure value of 101325 Pa corresponds to standard sea level atmospheric pressure (1 atm).

## Using the BMP180

The BMP180 communicates via I2C at address 0x77. It's compatible with the BMP085 sensor, so you can use libraries designed for either chip. The sensor measures both barometric pressure and temperature.

Common use cases:

- Weather station projects
- Altitude measurement (pressure decreases with altitude)
- Indoor climate monitoring

## Controlling the sensor

You can change the temperature and pressure values while the simulation is running. Click on the BMP180 sensor to open a popup with sliders for both values.

## Arduino code example

The example below uses the Adafruit BMP085 library (which is compatible with BMP180) to read temperature and pressure. On Arduino Uno, connect SDA to A4 and SCL to A5.

```cpp
#include <Wire.h>
#include <Adafruit_BMP085.h>

Adafruit_BMP085 bmp;

void setup() {
  Serial.begin(115200);

  if (!bmp.begin()) {
    Serial.println("BMP180 not found!");
    while (1);
  }

  Serial.println("BMP180 ready!");
}

void loop() {
  float temperature = bmp.readTemperature();
  int32_t pressure = bmp.readPressure();
  float altitude = bmp.readAltitude();

  Serial.print("Temperature: ");
  Serial.print(temperature);
  Serial.println(" C");

  Serial.print("Pressure: ");
  Serial.print(pressure);
  Serial.println(" Pa");

  Serial.print("Altitude: ");
  Serial.print(altitude);
  Serial.println(" m");

  Serial.println();
  delay(1000);
}
```

## Automation controls

The BMP180 sensor can be controlled using [Automation Scenarios](../wokwi-ci/automation-scenarios). It exposes the following controls:

| Control     | Type  | Description                                      |
| ----------- | ----- | ------------------------------------------------ |
| temperature | float | Set the temperature value in Celsius (-40 to 85) |
| pressure    | float | Set the pressure value in Pascals (30000-110000) |

### Example scenario

The following scenario tests the BMP180 by verifying initial readings and then changing the sensor values:

```yaml
name: BMP180 Sensor Test
version: 1

steps:
  # Wait for initial temperature reading
  - wait-serial: 'Temperature: 24.0 C'

  # Change the temperature to 30.5°C
  - set-control:
      part-id: bmp1
      control: temperature
      value: 30.5

  # Verify the new temperature is read
  - wait-serial: 'Temperature: 30.5 C'

  # Change the pressure to simulate higher altitude
  - set-control:
      part-id: bmp1
      control: pressure
      value: 90000

  # Verify the new pressure is read
  - wait-serial: 'Pressure: 90000 Pa'
```

## Simulator examples

- [BMP180 Basic Reading](https://wokwi.com/projects/454754573969772545) - Temperature and pressure monitoring
