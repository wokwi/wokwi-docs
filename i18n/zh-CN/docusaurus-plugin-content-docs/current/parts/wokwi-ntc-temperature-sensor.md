---
title: wokwi-ntc-temperature-sensor参考
sidebar_label: wokwi-ntc-temperature-sensor参考
---

模拟温度传感器：NTC（负温度系数）热敏电阻。

<wokwi-ntc-temperature-sensor />

## 引脚名称

| Name | Description            |
| ---- | ---------------------- |
| VCC  | Positive power supply  |
| OUT  | Output signal (analog) |
| GND  | Ground                 |

## 属性

| Name        | Description          | Default value |
| ----------- | -------------------- | ------------- |
| temperature | 初始温度值（摄氏度） | "24"          |
| beta        | 热敏电阻的β系数      | "3950"        |

## 读取温度

温度传感器模块包括一个10K NTC热敏电阻和10K电阻串联。

这种设置产生的电压取决于温度。您可以通过以下方式读取此电压

将热敏电阻的OUT引脚连接到模拟输入引脚，然后使用

`analogRead()`函数。

使用以下代码将`analogRead()` 的返回值转换为温度值（以摄氏度为单位）：

```cpp
const float BETA = 3950; // should match the Beta Coefficient of the thermistor
int analogValue = analogRead(A0);
float celsius = 1 / (log(1 / (1023. / analogValue - 1)) / BETA + 1.0 / 298.15) - 273.15;
```

## 仿真实例

- [NTC Thermistor Basic Example](https://wokwi.com/projects/299330254810382858)
