---
title: wokwi-potentiometer参考
sidebar_label: wokwi-potentiometer参考
---

旋钮控制可变电阻（线性电位器）

<wokwi-potentiometer />

以下信息也适用于[slide potentiometer](wokwi-slide-potentiometer)。

## 引脚名称

| Name | Description                            |
| ---- | -------------------------------------- |
| GND  | Ground                                 |
| SIG  | Output, connect to an analog input pin |
| VCC  | Supply voltage                         |

注意：Wokwi**不**支持完整的模拟仿真，因此您将获得相同的结果，即使您没有连接GND/VCC引脚。

这在将来可能会改变，所以无论如何，总是连接GND/VCC是个好习惯。

## 属性

| Name  | Description                   | Default value |
| ----- | ----------------------------- | ------------- |
| value | 电位器的初始值，在0到1023之间 | "0"           |

## 在Arduino中使用电位器

将SIG引脚连接到Arduino的模拟输入引脚之一（A0、A1、...）。然后使用`analogRead()`函数读取电位器的当前值。

以下代码示例假设电位器连接到A0。

它将每100毫秒读取和打印电位器的当前值：

```cpp
void setup() {
  Serial.begin(115200);
  pinMode(A0, INPUT);
}

void loop() {
  int value = analogRead(A0);
  Serial.println(value);
  delay(100);
}
```

您可以 [run the example on Wokwi](https://wokwi.com/projects/298685457758159369)。观察绘图仪在移动电位器旋钮时如何变化。

## 键盘控制

您可以使用键盘控制电位器：

- 左/右 - 精细运动

- 上页/下页 - 粗略的移动

- 主页/结束 - 移动到范围的开始（0）或结束（1023）

在使用这些键盘快捷键之前，您需要单击电位器。

## 仿真实例

- [Knob](https://wokwi.com/arduino/libraries/Servo/Knob) - Control a [servo](wokwi-servo) with a potentiometer
- [Plot](https://wokwi.com/projects/298685457758159369) - Plot potentiometer values in the Serial Plotter
- [Block shooter](https://wokwi.com/projects/291960996581343753) - Breakout style game
