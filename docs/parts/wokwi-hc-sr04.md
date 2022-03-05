---
title: wokwi-hc-sr04 Reference
sidebar_label: wokwi-hc-sr04
---

HC-SR04 Ultrasonic Distance Sensor

<wokwi-hc-sr04 />

## Pin names

| Name | Description                                       |
| ---- | ------------------------------------------------- |
| VCC  | Voltage supply (5V)                               |
| TRIG | Pulse to start the measurement                    |
| ECHO | Measure the high pulse length to get the distance |
| GND  | Ground                                            |

## Attributes

| Name     | Description                            | Default value |
| -------- | -------------------------------------- | ------------- |
| distance | Initial distance value, in centimeters | "400"         |

## Operation

To start a new distance measurement set the TRIG pin to high for 10uS or more. Then wait until the ECHO pin goes high,
and count the time it stays high (pulse length). The length of the ECHO high pulse is proportional to the distance. Use
the following table to convert the ECHO pulse length in microseconds into centimeters / inches:

| Unit        | Distance          |
| ----------- | ----------------- |
| Centimeters | PulseMicros / 58  |
| Inches      | PulseMicros / 148 |

### Setting the distance

To change the distance while the simulation is running, click on the HC-SR04 drawing in the diagram and use the slider
to set the distance value. You can choose any value between 2cm and 400cm.

## Arduino code example

```cpp
#define PIN_TRIG 3
#define PIN_ECHO 2

void setup() {
  Serial.begin(115200);
  pinMode(PIN_TRIG, OUTPUT);
  pinMode(PIN_ECHO, INPUT);
}

void loop() {
  // Start a new measurement:
  digitalWrite(PIN_TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(PIN_TRIG, LOW);

  // Read the result:
  int duration = pulseIn(PIN_ECHO, HIGH);
  Serial.print("Distance in CM: ");
  Serial.println(duration / 58);
  Serial.print("Distance in inches: ");
  Serial.println(duration / 148);

  delay(1000);
}
```

Try [this example on Wokwi](https://wokwi.com/projects/304444938977804866)

## Simulator examples

- [Distance sensor and LED](https://wokwi.com/projects/290056311044833800)
- [Display distance on LCD screen](https://wokwi.com/projects/290043622233997832)
- [Seven segment distance display](https://wokwi.com/projects/295030553275532810)
- [Franzininho ultrasonic sensor](https://wokwi.com/projects/302020345098928648)
- [Parking sensor](https://wokwi.com/projects/290964046833779209)
