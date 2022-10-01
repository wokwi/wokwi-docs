---
title: wokwi-hx711 Reference
sidebar_label: wokwi-hx711
---

HX711 Load Cell Amplifier

<wokwi-hx711 type="50kg" />

## Pin names

| Name | Description                                       |
| ---- | ------------------------------------------------- |
| VCC  | Voltage supply (5V)                               |
| DT   | Serial data                                       |
| SCK  | Serial clock                                      |
| GND  | Ground                                            |

*note that `E+`/`E-`/`A+`/`A-`/`B+`/`B-` pins are non-interactive and rendered based on attributes*  

<wokwi-hx711 type="5kg" />

## Attributes

| Name     | Description                                | Default value |
| -------- | ------------------------------------------ | ------------- |
| type     | Either "50kg" (default), "5kg", or "guage" | "50kg"        |

## Operation

The HX711 amplifier allows you to easily read load cells and evaluate changes in resistance. A Wheatstone bridge is used to connect load cells to the IC, which is in turn connected to the microcontroller via `VCC`, `DT`, `SCK`, and `GND`. Use `begin()` to initialize the scale and `set_scale()` and `tare()` to calibrate it. `power_down()` and `power_up()` can be used to bring the ADC into and out of low power mode. `get_value()` and `get_units()` are used to read the ADC minus tare and divided, passing an optional integer value to obtain that number of values, averaged.

## Arduino code example

```cpp
/* 
  Source: https://www.electroschematics.com/pressure-sensor-guide/
*/
#include "HX711.h"

HX711 scale;

void setup() {
  Serial.begin(9600);
  Serial.println("HX710B Demo with HX711 Library");
  Serial.println("Initializing the scale");

  // parameter "gain" is ommited; the default value 128 is used by the library
  // HX711.DOUT   - pin #A1
  // HX711.PD_SCK - pin #A0

  scale.begin(A1, A0);

  Serial.println("Before setting up the scale:");
  Serial.print("read: \t\t");
  Serial.println(scale.read());                  // print a raw reading from the ADC
  Serial.print("read average: \t\t");
  Serial.println(scale.read_average(20));        // print the average of 20 readings from the ADC
  Serial.print("get value: \t\t");
  Serial.println(scale.get_value(5));            // print the average of 5 readings from the ADC minus the tare weight (not set yet)
  Serial.print("get units: \t\t");
  Serial.println(scale.get_units(5), 1);         // print the average of 5 readings from the ADC minus tare weight (not set) divided

  // by the SCALE parameter (not set yet)
  scale.set_scale(2280.f);                       // this value is obtained by calibrating the scale with known weights; see the README for details
  scale.tare();                                  // reset the scale to 0

  Serial.println("After setting up the scale:");
  Serial.print("read: \t\t");
  Serial.println(scale.read());                  // print a raw reading from the ADC
  Serial.print("read average: \t\t");
  Serial.println(scale.read_average(20));        // print the average of 20 readings from the ADC
  Serial.print("get value: \t\t");
  Serial.println(scale.get_value(5));            // print the average of 5 readings from the ADC minus the tare weight, set with tare()
  Serial.print("get units: \t\t");
  Serial.println(scale.get_units(5), 1);         // print the average of 5 readings from the ADC minus tare weight, divided

  // by the SCALE parameter set with set_scale
  Serial.println("Readings:");
}

void loop() {
  Serial.print("one reading:\t");
  Serial.print(scale.get_units(), 1);
  Serial.print("\t| average:\t");
  Serial.println(scale.get_units(10), 1);
  scale.power_down();                            // put the ADC in sleep mode
  delay(5000);
  scale.power_up();
}
```

Try [this example on Wokwi](https://wokwi.com/projects/344192176616374868)

## Simulator examples

- [Digital scale](https://wokwi.com/projects/336613701830312531)
