---
title: wokwi-slide-switch参考
sidebar_label: wokwi-slide-switch参考
---

标准单极双掷（SPDT）滑动开关。

<wokwi-slide-switch />

## 引脚名称

| Name | Description     |
| ---- | --------------- |
| 1    | Left terminal   |
| 2    | Common terminal |
| 3    | Right terminal  |

滑动开关有三个引脚。引脚2（中间）是常见的引脚。根据在不同开关的手柄中的位置，它连接到引脚1或3：

| Handle position | Description           |
| --------------- | --------------------- |
| Left            | Shorting pins 1 and 2 |
| Right           | Shorting pins 3 and 2 |

下图说明了滑动开关内部的连接。你可以看到灰色的滑动与手柄一起移动并在引脚2和引脚1或3之间建立连接的触点：

![Slide switch connection diagram](wokwi-slide-switch-diagram.svg)

## 属性

| Name   | Description                                                          | Default value |
| ------ | -------------------------------------------------------------------- | ------------- |
| value  | 滑动开关的初始位置:<br/>"" for left, "1" for right | ""           |
| bounce | 设置为“0”以禁用反弹                            | ""            |

### 弹跳

当您移动物理滑动开关时，电路会打开和关闭数十次或数百次。

这种现象被称为 [Bouncing](wokwi-pushbutton#bouncing)。

Wokwi默认模拟开启反弹。您可以通过将单个开关的“bounce”设置为“0”来禁用：

`{ "bounce": "0" }`

## 仿真实例

- [Slide Switch and LED](https://wokwi.com/projects/288276100805558797) - Using a slide switch to toggle an LED
- [Slide Switch and 2 LEDs](https://wokwi.com/projects/288278249939665421) - A slide switch toggles between 2 LEDs
- [Digital Pin Output Switching](https://wokwi.com/projects/292033853022798344) - A slide switch redirects the output of a digital pin to one of two LEDs
