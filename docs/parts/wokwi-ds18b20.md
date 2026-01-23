---
title: wokwi-ds18b20 Reference
sidebar_label: wokwi-ds18b20
---

Digital temperature sensor with 1-Wire interface.

![DS18B20](https://raw.githubusercontent.com/wokwi/wokwi-boards/main/boards/ds18b20/board.svg)

## Pin names

| Name | Description                     |
| ---- | ------------------------------- |
| VCC  | Positive voltage                |
| DQ   | 1-Wire data line (input/output) |
| GND  | Ground                          |

## Attributes

| Name        | Description                                       | Default value  |
| ----------- | ------------------------------------------------- | -------------- |
| temperature | Initial temperature value (celsius)               | "22"           |
| deviceID    | 12-character hex device ID for the 1-Wire address | "010203040506" |
| familyCode  | 1-Wire family code                                | "28"           |

## Controlling the temperature

You can change the temperature value while the simulation is running.
Click on the DS18B20 sensor and a small popup window will open. Use the temperature
slider to change the value.

The temperature range is -55°C to 125°C.

## Multiple sensors

You can connect multiple DS18B20 sensors to the same data pin. Each sensor must have
a unique `deviceID` attribute. The 1-Wire protocol allows addressing individual sensors
by their unique ID.

Example with three sensors:

```json
{
  "parts": [
    { "type": "wokwi-ds18b20", "id": "temp1", "attrs": { "deviceID": "111111111111" } },
    { "type": "wokwi-ds18b20", "id": "temp2", "attrs": { "deviceID": "222222222222" } },
    { "type": "wokwi-ds18b20", "id": "temp3", "attrs": { "deviceID": "333333333333" } }
  ]
}
```

## Arduino code example

```cpp
#include <OneWire.h>
#include <DallasTemperature.h>

#define ONE_WIRE_BUS 2

OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature sensors(&oneWire);

void setup() {
  Serial.begin(115200);
  sensors.begin();
}

void loop() {
  sensors.requestTemperatures();
  float tempC = sensors.getTempCByIndex(0);
  Serial.print("Temperature: ");
  Serial.print(tempC);
  Serial.println(" °C");
  delay(1000);
}
```

:::warning
The DallasTemperature library cannot read temperatures of exactly -55°C due to
a limitation in how the library detects disconnected sensors. If you need to read
this specific temperature, use the OneWire library directly.
:::

## Automation controls

The temperature sensor can be controlled using [Automation Scenarios](../wokwi-ci/automation-scenarios). It exposes the following controls:

| Control     | Type  | Description                                                |
| ----------- | ----- | ---------------------------------------------------------- |
| temperature | float | Set the temperature value in Celsius (between -55 and 125) |

## Simulator examples

- [DS18B20 single sensor](https://wokwi.com/projects/453964849658651649) - Basic temperature reading with DallasTemperature library
- [DS18B20 multiple sensors](https://wokwi.com/projects/453940154220493825) - Multiple sensors on a single bus
