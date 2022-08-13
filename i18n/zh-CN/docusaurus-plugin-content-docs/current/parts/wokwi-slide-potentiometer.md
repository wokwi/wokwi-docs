---
title: wokwi-slide-potentiometer参考
sidebar_label: wokwi-slide-potentiometer参考
---

滑动可变电阻（线性电位器）

<wokwi-slide-potentiometer />

滑动电位器的功能和引脚与 [wokwi-potentiometer](wokwi-potentiometer)相同。查看 [wokwi-potentiometer docs](wokwi-potentiometer) 了解更多信息。

## 属性

| Name         | Description                                                  | Default value |
| ------------ | ------------------------------------------------------------ | ------------- |
| value        | 电位器的初始值，在0到1023之间                                | "0"           |
| travelLength | 尖端的行程长度（毫米）。控制电位器的宽度.<br />常用值: "15", "20", "30", "45", "60", "100" | "30"          |

### 示例

| Result                                           | Attrs                       |
| ------------------------------------------------ | --------------------------- |
| <wokwi-slide-potentiometer travelLength="15" />  | `{ "travelLength": "15" }`  |
| <wokwi-slide-potentiometer travelLength="60" />  | `{ "travelLength": "60" }`  |
| <wokwi-slide-potentiometer travelLength="100" /> | `{ "travelLength": "100" }` |

## 仿真实例

- [Slide potentiometer + Servo](https://wokwi.com/projects/297604176384360973) - Control a [servo](wokwi-servo) with a slide potentiometer
