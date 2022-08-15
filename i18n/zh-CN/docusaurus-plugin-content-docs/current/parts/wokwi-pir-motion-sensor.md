---
title: wokwi-pir-motion-sensor参考
sidebar_label: wokwi-pir-motion-sensor参考
---

被动红外（PIR）运动传感器。

<wokwi-pir-motion-sensor />

## 引脚名称

| Name | Description      |
| ---- | ---------------- |
| GND  | Ground           |
| OUT  | Output (digital) |
| VCC  | Supply voltage   |

## 属性

| Name        | Description                                 | Default value |
| ----------- | ------------------------------------------- | ------------- |
| delayTime   | OUT引脚的保持高电平的时间                   | "5"           |
| inhibitTime | 当OUT恢复到低电平时，传感器将忽略运动的秒数 | "1.2"         |
| retrigger   | 设置为“0”以禁用重新触发                     | ""            |

## 使用传感器

要触发PIR运动传感器：

1.  通过单击传感器（在模拟运行时）选择传感器。

2. 将打开一个小弹出窗口。点按“模拟运动”。

触发传感器将使OUT引脚高5秒（延迟时间），然后又变低。在接下来1.2秒（抑制时间），传感器将忽略任何进一步的输入，然后再次开始感应运动。

您可以通过设置延迟时间来调整OUT引脚的高持续时间属性（在物理传感器上，您使用电位器设置延迟）。

传感器的默认设置是重新触发：传感器不断检查在OUT引脚高时进行运动。它将延长每次的延迟时间检测到另一个运动事件的时间。您可以通过以下方式禁用此行为设置“retrigger”属性为“0”。

## 仿真实例

- [PIR sensor example (from AdaFruit)](https://wokwi.com/projects/299284655047180808)
