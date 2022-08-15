---
title: wokwi-dht22参考
sidebar_label: wokwi-dht22参考
---

数字湿度和温度传感器。

<wokwi-dht22 />

## 引脚名称

| Name | Description               |
| ---- | ------------------------- |
| VCC  | Positive voltage          |
| SDA  | 数字数据引脚（输入/输出） |
| NC   | Not connected             |
| GND  | Ground                    |

## 属性

| Name        | Description              | Default value |
| ----------- | ------------------------ | ------------- |
| temperature | 初始温度值（摄氏度）     | "24"          |
| humidity    | 初始相对湿度值（百分比） | "40"          |

## 控制温度

您可以在模拟运行期间更改温度和湿度值。单击DHT22传感器，将打开一个小弹出窗口。使用温度和湿度滑块来改变值。点按“隐藏”以关闭弹出窗口。

:::caution

如果您尝试从ESP32读取此传感器，请使用“DHT sensor library for ESPx”库。其他DHT22库可能无法在ESP32上可靠地工作。您可以使用此 [example project](https://wokwi.com/projects/322410731508073042) 作为开始的点。

:::

## 仿真案例

- [DHTlib DHT22 test](https://wokwi.com/arduino/libraries/DHTlib/dht22_test)
- [DHT-sensor-library code examples](https://wokwi.com/arduino/libraries/DHT-sensor-library)
- [DHT22 on the ESP32](https://wokwi.com/projects/322410731508073042)
