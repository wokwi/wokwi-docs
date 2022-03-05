---
title: wokwi-mpu6050 6-Axis Accel & Gyro Sensor
sidebar_label: wokwi-mpu6050
---

Integrated sensor with 3-axis accelerometer, 3-axis gyroscope and a temperature sensor with I2C interface.

<wokwi-mpu6050 />

## Pin names

| Name | Description        |
| ---- | ------------------ |
| VCC  | Voltage supply     |
| GND  | Ground             |
| SCL  | I2C clock line     |
| SDA  | I2C data line      |
| XDA  | Unused\*           |
| XCL  | Unused\*           |
| AD0  | Address select pin |
| INT  | Interrupt\*        |

\* These pins are not currently implemented in the simulator. If you need them, please [open a request](https://github.com/wokwi/wokwi-features/issues/new).

You normally only need to connect the VCC, GND, SCL, and SDA pins. The I2C address of the device is 0x68. You can change the address of 0x69 by connecting the AD0 pin to VCC.

## Attributes

| Name        | Description                         | Default value |
| ----------- | ----------------------------------- | ------------- |
| accelX      | Initial x acceleration value (g)    | "0"           |
| accelY      | Initial y acceleration value (g)    | "0"           |
| accelZ      | Initial z acceleration value (g)    | "1"           |
| rotationX   | Initial x rotation value (deg/sec)  | "0"           |
| rotationY   | Initial y rotation value (deg/sec)  | "0"           |
| rotationZ   | Initial z rotation value (deg/sec)  | "0"           |
| temperature | Initial temperature value (celsius) | "24"          |

### Units

All the acceleration values (x/y/z) use g-force units, where 1g = 9.80665 m/s². The gyroscope measures angular rotation and returns the number of degrees per second.

#### Arduino code example

The example below uses the Adafruit MPU6050 library to read and display the acceleration values from the sensor. On Arduino Uno, connect the SDA pin to A4, and the SCL pin to A5.

```cpp
#include <Adafruit_MPU6050.h>
#include <Adafruit_Sensor.h>
#include <Wire.h>

Adafruit_MPU6050 mpu;

void setup(void) {
  Serial.begin(115200);

  while (!mpu.begin()) {
    Serial.println("MPU6050 not connected!");
    delay(1000);
  }
  Serial.println("MPU6050 ready!");
}

sensors_event_t event;

void loop() {
  mpu.getAccelerometerSensor()->getEvent(&event);

  Serial.print("[");
  Serial.print(millis());
  Serial.print("] X: ");
  Serial.print(event.acceleration.x);
  Serial.print(", Y: ");
  Serial.print(event.acceleration.y);
  Serial.print(", Z: ");
  Serial.print(event.acceleration.z);
  Serial.println(" m/s^2");
  delay(500);
}
```

[Run this example on Wokwi](https://wokwi.com/projects/305937248748044864)

## Simulator examples

- [MPU6050 X/Y/Z acceleration plotter](https://wokwi.com/projects/305937156771152449)
- [Adafruit MPU6050 Demo](https://wokwi.com/projects/305936654686749250)
- [3D gyro/acceleration visualization on an OLED display](https://wokwi.com/projects/306115576172905024)
- [3D Wokwi "W" controlled by Gyroscope rotation](https://wokwi.com/projects/306399551789466177)
