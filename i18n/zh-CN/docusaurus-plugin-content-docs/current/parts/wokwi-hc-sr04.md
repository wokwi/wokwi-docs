---
title: wokwi-hc-sr04参考
sidebar_label: wokwi-hc-sr04参考
---

HC-SR04超声波距离传感器

<wokwi-hc-sr04 />

## 引脚名称

| Name | Description              |
| ---- | ------------------------ |
| VCC  | Voltage supply (5V)      |
| TRIG | 脉冲开始测量             |
| ECHO | 测量高脉冲长度以获得距离 |
| GND  | Ground                   |

## 属性

| Name     | Description            | Default value |
| -------- | ---------------------- | ------------- |
| distance | 初始距离值，单位：厘米 | "400"         |

## 工作方式

要开始新的距离测量，请将TRIG引脚设置为10uS或更高的高度。然后等到ECHO引脚变高，并计算它保持高的时间（脉冲长度）。ECHO高脉冲的长度与距离成正比。下表将ECHO脉冲长度（以微秒为单位）转换为厘米/英寸：

| 单位        | 距离           |
| ----------- | -------------- |
| Centimeters | 脉冲长度 / 58  |
| Inches      | 脉冲长度 / 148 |

### 设置距离

要在模拟运行时更改距离，请单击图表中的HC-SR04图并使用滑块设置距离值。您可以选择2厘米到400厘米之间的任何值。

## Arduino代码参考

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

在这里尝试 [this example on Wokwi](https://wokwi.com/projects/304444938977804866)

## 仿真实例

- [Distance sensor and LED](https://wokwi.com/projects/290056311044833800)
- [Display distance on LCD screen](https://wokwi.com/projects/290043622233997832)
- [Seven segment distance display](https://wokwi.com/projects/295030553275532810)
- [Franzininho ultrasonic sensor](https://wokwi.com/projects/302020345098928648)
- [Parking sensor](https://wokwi.com/projects/290964046833779209)
