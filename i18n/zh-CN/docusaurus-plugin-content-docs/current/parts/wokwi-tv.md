---
title: wokwi-tv参考
sidebar_label: wokwi-tv参考
---

黑白模拟PAL电视屏幕。

![Wokwi TV](wokwi-tv.svg)

## 引脚名称

| Name | Description            |
| ---- | ---------------------- |
| IN   | Data (image) signal    |
| SYNC | Synchronization signal |
| GND  | Ground                 |

## 工作方式

模拟PAL电视的分辨率为768x576像素，宽高比为4:3。

PAL视频使用模拟信号。信号通过空气或使用电缆传输。常见的布线标准之一是复合视频，它将像素数据与同步信号和单根电线上的颜色数据相结合。

Wokwi TV不支持颜色信息，并将像素数据与同步信号分开。信号的分离使使用数字微控制器生成图像变得更加容易。

像素数据使用_IN_引脚，同步脉冲使用_SYNC_引脚。Arduino [TVout](https://github.com/pkendall64/arduino-tvout) 库可以为您驱动这些信号。

### 信号计时

模拟器以每秒25帧的速度模拟信号的标准PAL定时。框架是交错的：每个框架分为两部分，称为“字段”。第一个字段包含奇数线，第二个字段包含偶数线。每帧需要40ms，每个字段需要20ms（帧持续时间的一半）。

每帧分为625个64uS时段。每个时段都包含一条线路的像素数据，但其中一些行是空的-它们的唯一用途是同步。

模拟器预计每个字段（半帧）至少从一个~30uS的同步脉冲开始。这意味着您必须将SYNC线保持在低30uS左右。PAL标准规定了特定系列的同步脉冲，但对模拟器相当没有压力：即使是1~30uS脉冲，它也可以很容易做到。

每条线路还应该从一个短的4uS同步脉冲开始。在这些同步脉冲中保持数据信号低。

 [Logic Analyzer](../guides/logic-analyzer) 对调试PAL电视信号非常有帮助。

## 物理电视连接

PAL标准使用模拟信号。在模拟器中运行时，您不必担心这一点，但如果您想在实体电视上运行游戏，那么您需要生成以下电压级别：

- 用于同步信号的0V（HSYNC/VSYNC）

- 黑色像素0.3V

- 白色像素为1V

好消息是：你只需要几个电阻器就可以将数字信号（在模拟器中工作）转换为模拟信号。

复合视频通常使用RCA连接器。您需要与RCA连接器的中央引脚进行以下连接：

1. 通过1KΩ\*电阻的同步引脚

2. 数据引脚穿过470Ω\*电阻器

3. 或者，另一个75Ω进入地面（电阻通常已经内置在电视接收器电路中）。

\*如果您使用3.3V板（如 [Raspberry Pi Pico](wokwi-pi-pico)），SYNC使用470Ω，数据使用270Ω。

此外，请确保还将接地连接到RCA连接器的环上。

这是怎么工作的？我们根据两个数字引脚电平实现一个简单的分压器来产生所需的电压：

| SYNC      | DATA      | Output Voltage | Calculation                                   |
| --------- | --------- | -------------- | --------------------------------------------- |
| High (5V) | High (5V) | 0.95           | (5\*75)/((1/(1/1000+1/470))+75)               |
| High (5V) | Low       | 0.304          | (5\*(1/(1/75+1/470)))/(1000+(1/(1/75+1/470))) |
| Low       | Low       | 0              | 0                                             |

如您所见，驱动SYNC/DATA高分辨率约为1V，白色像素级，驱动SYNC高和DATA低分辨率约为0.3V，黑色像素级，驱动两个引脚低分辨率为0伏特，这就是同步级别。

理论上，在SYNC低时使用此设置并驱动DATA高，您还可以生成灰色像素级别（~0.65V），但模拟器目前不支持此功能。

## Arduino 代码示例

使用TVout库绘制圆圈的简单示例：

```cpp
// Connect SYNC to Arduino pin 9, IN to Arduino pin 7

#include <TVout.h>

TVout TV;

void setup() {
  TV.begin(PAL, 120, 96);
  TV.clear_screen();
  TV.draw_circle(60, 48, 32, WHITE);
}

void loop() {
}
```

## 仿真实例

- [TVout demo reel](https://wokwi.com/projects/301776607665717769)
- [Flappy Cat game](https://wokwi.com/projects/286182458416693768) - 使用蓝色按钮跳转
- [Arduino Pong for Wokwi TV](https://wokwi.com/projects/290059909639176713)
- [Conway's Game of Life](https://wokwi.com/projects/299605461742649864)
