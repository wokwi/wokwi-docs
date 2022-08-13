---
title: wokwi-mpu60506轴加速和陀螺仪传感器
sidebar_label: wokwi-mpu60506轴加速和陀螺仪传感器
---

 带3轴加速度计、3轴陀螺仪和带I2C接口的温度传感器的集成传感器。

<wokwi-mpu6050 />

## 引脚名称

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

\* 这些引脚目前没有在模拟器中实现。如果你需要, 请 [open a request](https://github.com/wokwi/wokwi-features/issues/new).

您通常只需要连接VCC、GND、SCL和SDA引脚。设备的I2C地址是0x68。您可以通过将AD0引脚连接到VCC来更改0x69的地址。

## 属性

| Name        | Description                         | Default value |
| ----------- | ----------------------------------- | ------------- |
| accelX      | Initial x acceleration value (g)    | "0"           |
| accelY      | Initial y acceleration value (g)    | "0"           |
| accelZ      | Initial z acceleration value (g)    | "1"           |
| rotationX   | Initial x rotation value (deg/sec)  | "0"           |
| rotationY   | Initial y rotation value (deg/sec)  | "0"           |
| rotationZ   | Initial z rotation value (deg/sec)  | "0"           |
| temperature | Initial temperature value (celsius) | "24"          |

### 单位

所有加速度值（x/y/z）都使用g力单位，其中1g = 9.80665 m/s2。陀螺仪测量角旋转，并返回每秒的度数。

#### Arduino 代码示例

下面的示例使用Adafruit MPU6050库读取和显示传感器的加速度值。在Arduino Uno上，将SDA引脚连接到A4，将SCL引脚连接到A5。

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

## 仿真示例

- [MPU6050 X/Y/Z acceleration plotter](https://wokwi.com/projects/305937156771152449)
- [Adafruit MPU6050 Demo](https://wokwi.com/projects/305936654686749250)
- [3D gyro/acceleration visualization on an OLED display](https://wokwi.com/projects/306115576172905024)
- [3D Wokwi "W" controlled by Gyroscope rotation](https://wokwi.com/projects/306399551789466177)
