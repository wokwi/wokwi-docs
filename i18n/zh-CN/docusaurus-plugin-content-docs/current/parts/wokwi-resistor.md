---
title: wokwi-resistor参考
sidebar_label: wokwi-resistor参考
---

这就是电阻。

<wokwi-resistor value="470"></wokwi-resistor>

:::caution

Wokwi只有一个非常基本的模拟电路仿真。您将无法同时使用电阻器和模拟组件（例如电位器或NTC温度传感器）。您仍然可以将电阻用作外部上拉/下拉电阻。

:::

## 引脚名称

| Pin | Description |
| --- | ----------- |
| 1   | First pin   |
| 2   | Second pin  |

## 属性

| Name  | Description          | Default value |
| ----- | -------------------- | ------------- |
| value | 电阻值，以欧姆为单位 | "1000"        |

### 示例

| Result                              | Attrs                     |
| ----------------------------------- | ------------------------- |
| <wokwi-resistor value="1" />        | `{ "value": "1" }`        |
| <wokwi-resistor value="220" />      | `{ "value": "220" }`      |
| <wokwi-resistor value="10000000" /> | `{ "value": "10000000" }` |

查看[resistor showcase by Koepel](https://wokwi.com/projects/300936732038136328) 以获取更多示例。

## 仿真案例

- [External pull-down resistor](https://wokwi.com/projects/302214836102627848) - 如何使用电阻作为按钮的下拉
