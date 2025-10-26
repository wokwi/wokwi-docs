---
title: wokwi-hx711 Reference
sidebar_label: wokwi-hx711
---

HX711 Load Cell Amplifier

<wokwi-hx711 type="50kg" />

## Pin names

| Name | Description         |
| ---- | ------------------- |
| VCC  | Voltage supply (5V) |
| DT   | Serial data         |
| SCK  | Serial clock        |
| GND  | Ground              |

_note that `E+`/`E-`/`A+`/`A-`/`B+`/`B-` pins are non-interactive and rendered based on attributes_

<wokwi-hx711 type="5kg" />

## Attributes

| Name | Description                                | Default value |
| ---- | ------------------------------------------ | ------------- |
| type | Either "50kg" (default), "5kg", or "gauge" | "50kg"        |

### Examples

| Result                       | Attrs                 |
| ---------------------------- | --------------------- |
| <wokwi-hx711 type="5kg" />   | `{ "type": "5kg" }`   |
| <wokwi-hx711 type="50kg" />  | `{ "type": "50kg" }`  |
| <wokwi-hx711 type="gauge" /> | `{ "type": "gauge" }` |

## Operation

The HX711 amplifier allows you to easily read load cells and evaluate changes in resistance. A Wheatstone bridge is used to connect load cells to the IC, which is in turn connected to the microcontroller via `VCC`, `DT`, `SCK`, and `GND`. Use `begin()` to initialize the scale and `set_scale()` and `tare()` to calibrate it. `power_down()` and `power_up()` can be used to bring the ADC into and out of low power mode. `get_value()` and `get_units()` are used to read the ADC minus tare and divided, passing an optional integer value to obtain that number of values, averaged. Refer to the [`HX711` Arduino library](https://github.com/bogde/HX711#features) for more details on features and calibration.

Note that this chip does not implement channel B or gain settings of 32/64/128. The raw readings are from `0-2100` for the `"type":"5kg"` type,
and `0-21000` for the `"type":"50kg"`.

## Arduino code example

```cpp
#include "HX711.h"

HX711 scale;

void setup() {
  Serial.begin(9600);
  Serial.println("Initializing the scale");
  scale.begin(A1, A0);
}

void loop() {
  Serial.println(scale.get_units(), 1);
  delay(1000);
}
```

Try [this example on Wokwi](https://wokwi.com/projects/345134808605655636)

## Automation controls

The HX711 can be controlled using [Automation Scenarios](../wokwi-ci/automation-scenarios). It exposes the following controls:

| Control | Type  | Description                             |
| ------- | ----- | --------------------------------------- |
| load    | float | Set the load value of the scale (in kg) |

## Simulator examples

- [HX711 demo](https://wokwi.com/projects/344192176616374868)
- [Digital scale](https://wokwi.com/projects/336613701830312531)
- [HX711_ADC Calibration demo](https://wokwi.com/projects/407626388355231745)
