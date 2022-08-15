---
title: wokwi-photoresistor-sensor参考
sidebar_label: wokwi-photoresistor-sensor参考
---

光电阻（LDR）传感器模块

<wokwi-photoresistor-sensor />

## 引脚名称

| Name | Description           |
| ---- | --------------------- |
| VCC  | Positive power supply |
| GND  | Ground                |
| DO   | Digital output        |
| AO   | Analog output         |

## 属性

| Name      | Description                      | Default value |
| --------- | -------------------------------- | ------------- |
| lux       | 初始光值（lux）                  | "500"         |
| threshold | 数字输出阈值电压                 | "2.5"         |
| rl10      | LDR电阻@ 10lux（以千欧姆为单位） | "50"          |
| gamma     | log(R) / log(lux)图的斜率        | "0.7"         |

## 工作方式

光电阻传感器模块包括一个LDR（光依赖电阻）和一个10K电阻串联。AO引脚连接在LDR和10K电阻之间。

AO引脚上的电压取决于照明——即落在传感器上的光量。您可以通过将光电阻传感器的AO引脚连接到模拟输入引脚，然后使用`analogRead()`函数来读取此电压。

有两个参数控制LDR的灵敏度：rl10和γ。rl10是LDR在10勒克斯照明水平上的电阻。伽马值决定了log(R) / log(lux)图的斜率。您通常可以在LDR的数据表中找到这两个值。

下表显示了照明电平（lux）、电阻（R）和电压电平之间的关系

当gamma = 0.7和rl10 = 50时，在AO引脚上（默认值）：

| Condition            | Illumination (lux) | LDR Resistance | Voltage\* | analogRead() value |
| -------------------- | ------------------ | -------------- | --------- | ------------------ |
| Full moon            | 0.1                | 1.25MΩ         | 4.96      | 1016               |
| Deep twilight        | 1                  | 250kΩ          | 4.81      | 985                |
| Twilight             | 10                 | 50kΩ           | 4.17      | 853                |
| Computer monitor\*\* | 50                 | 16.2kΩ         | 3.09      | 633                |
| Stairway lighting    | 100                | 9.98kΩ         | 2.50      | 511                |
| Office lighting      | 400                | 3.78kΩ         | 1.37      | 281                |
| Overcast day         | 1,000              | 1.99kΩ         | 0.83      | 170                |
| Full daylight        | 10,000             | 397Ω           | 0.19      | 39                 |
| Direct sunlight      | 100,000            | 79Ω            | 0.04      | 8                  |

\* When VCC = 5V  
\*\* 在距离显示器一米远的地方测量

以下代码将`analogRead()`的返回值转换为照明值（勒克斯）：

```cpp
// These constants should match the photoresistor's "gamma" and "rl10" attributes
const float GAMMA = 0.7;
const float RL10 = 50;

// Convert the analog value into lux value:
int analogValue = analogRead(A0);
float voltage = analogValue / 1024. * 5;
float resistance = 2000 * voltage / (1 - voltage / 5);
float lux = pow(RL10 * 1e3 * pow(10, GAMMA) / resistance, (1 / GAMMA));
```

### 数字输出

数字输出（“DO”）引脚在黑暗时会很高，在有光时会变低。在物理传感器上，您可以调整车载小电位器以设置阈值。在模拟器中，使用“阈值”属性来设置阈值电压。默认阈值为2.5伏特，或约100勒克斯。

底部LED（“DO LED”）连接到数字输出，每当DO引脚低时都会亮起。换句话说，当传感器被照亮时，它会发光。

### 原理图

![Wokwi Photoresistor (LDR) Sensor Module Schematics](wokwi-photoresistor-sensor.svg)

## 仿真实例

- [Photoresistor Digital Example](https://wokwi.com/projects/305193592908939842)
- [Photoresistor Analog Example](https://wokwi.com/projects/305193627138654786)
