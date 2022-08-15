---
title: wokwi-rgb-led参考
sidebar_label: wokwi-rgb-led参考
---

5毫米红色、绿色和蓝色（RGB）LED。

<wokwi-rgb-led />

## 引脚名称

| Name | Description  |
| ---- | ------------ |
| R    | Red LED      |
| G    | Green LED    |
| B    | Blue LED     |
| COM  | Common pin\* |

\* 默认情况下，公共引脚是阳极（正引脚）。您可以通过将“通用”属性设置为“cathode”来更改它。

## 属性

| Name   | Description                        | Default value |
| ------ | ---------------------------------- | ------------- |
| common | 常见的引脚类型：“cathode”或“anode” | "anode"       |

## 仿真实例

- [RGB LED with 3 linear sliders](https://wokwi.com/projects/306455554559050306)
- [Soft pulsating RGB LED](https://wokwi.com/projects/306461175146611264)
