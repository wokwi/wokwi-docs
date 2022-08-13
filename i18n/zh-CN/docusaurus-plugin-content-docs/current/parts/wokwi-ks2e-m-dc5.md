---
title: ks2e-m-dc5 Relay参考
sidebar_label: wokwi-ks2e-m-dc5继电器参考
---

双路双刀（DPDT）继电器

<wokwi-ks2e-m-dc5 />

## 引脚名称

| Name  | Description                       |
| ----- | --------------------------------- |
| COIL1 | 线圈的第一个端子                  |
| COIL2 | 线圈的第二个端子                  |
| P1    | 第一个连接点                      |
| NC1   | 正常关闭 - 当线圈不供电时连接到P1 |
| NO1   | 正常打开-线圈供电时连接到P1       |
| P2    | 第二个连接点                      |
| NC2   | 正常关闭-当线圈无法供电时连接到P2 |
| NO2   | 正常打开-线圈供电时连接到P2       |

## 操作方式

继电器是一种具有两种状态的电子开关：线圈无动力和线圈供电。默认情况下，线圈没有动力。您可以通过在引脚COIL1和COIL2之间施加电压来为线圈供电。

当线圈断开电源时，P1连接到NC1，P2连接到NC2（通常关闭/连接的NC手段）。

当线圈供电时，P1连接到NO1，P2连接到NO2（NC表示正常打开/断开）。

下图总结了继电器的状态：

![Relay connections diagram](wokwi-ks2e-m-dc5-diagram.svg)

## 仿真案例

- [One relay controlling two LEDs](https://wokwi.com/projects/322846360729551444)
- [Relay Flip-Flop](https://wokwi.com/projects/322802227591774802) - 使用三个继电器的单位内存元素
