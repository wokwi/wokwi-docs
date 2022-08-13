---
title: diagram.json文件格式
sidebar_label: diagram.json
---

每个方阵项目都包含一个 diagram.json 文件。此文件定义了将用于仿真的组件、组件的特性以及它们之间的连接部分。

## 文件结构

diagram file文件是一个包含以下几个部分的 JSON 文件。基本文件结构为：

```json
{
  "version": 1,
  "author": "Uri Shaked",
  "editor": "wokwi",
  "parts": [],
  "connections": []
}
```

`"version"` 总是1，`"author"`是创建者的名字， `"editor"`是用于编辑的应用程序的名称文件（“wokwi”）。

此外，您可以在`"serialMonitor"` 中添加 [配置串行监视器](guides/serial-monitor#configuring-the-serial-monitor) 部分。

## Parts介绍

 `"parts"` 部分定义了仿真中的组件列表。这是一个具有以下属性的数组对象：

| 名称   | 类型    | 描述                              |
| ------ | ------- | --------------------------------- |
| id     | string  | 部件的唯一标识符（例如“led1”）    |
| type   | string  | 零件的类型（例如“wokwi-led”）     |
| left   | number  | X屏幕坐标（以像素为单位）         |
| top    | number  | Y屏幕坐标（以像素为单位）         |
| attrs  | object  | 组件属性（例如wokwi-led的“颜色”） |
| rotate | number  | 旋转角度（例如90）                |
| hide   | boolean | 如果为真，则该部件将无法显示      |

`id` 和 `type` 是必需的，其他字段是可选的。

例如，以下是您在位置（x=100，y=50）定义名为“led1”的红色LED的方法：

```json
{
  "id": "led1",
  "type": "wokwi-led",
  "left": 100,
  "top": 50,
  "attrs": {
    "color": "red"
  }
}
```

:::warning

每个部件必须具有唯一的“id”属性。如果两个部分具有相同的“ID”，仿真可能无法正常工作。

:::

组件类型的部分列表（例如 [wokwi-led](parts/wokwi-led)）可以在本指南的“图表参考”部分中找到。我们目前正在努力扩展此列表。与此同时，一些部分也记录在 [Wokwi Elements](https://elements.wokwi.com) 上。

每个图表都应该包括一个微控制器部分。目前支持以下微控制器：

- [`wokwi-attiny85`](parts/wokwi-attiny85) - ATtiny85
- [`wokwi-arduino-nano`](parts/wokwi-arduino-nano) - Arduino Nano
- [`wokwi-arduino-mega`](parts/wokwi-arduino-mega) - Arduino Mega 2560
- [`wokwi-arduino-uno`](parts/wokwi-arduino-uno) - Arduino Uno R3
- [`wokwi-pi-pico`](parts/wokwi-pi-pico) - Raspberry Pi Pico
- `wokwi-esp32-devkit-v1` - ESP32
- `board-esp32-s2-devkitm-1` - ESP32-S2
- [`board-franzininho-wifi`](parts/board-franzininho-wifi) - ESP32-S2
- `board-esp32-c3-devkitm-1` - ESP32-C3
- `board-esp32-c3-rust-1` - ESP32-C3

:::tip

您不需手动指定每个项目的左/顶部坐标，而是可以用鼠标将它们拖动到所需的位置。

:::

## Connections部分

 `"connections"` 部分定义了组件的连接方式。每个连接都是一个有四个元素的数组对象：

- 源组件id和引脚名称，用冒号分隔，例如`partId:pinName`
- 目标组件ID和引脚名称
- 连线的颜色（或隐藏电线的空字符串）
- 一个字符串数组用于说明如何放置电线（可选）

例如，以下定义将连接`led1`的A（anode）引脚到`uno`组件的13脚：

```json
  ["led1:A", "uno:13", "green", []],
```

您可以通过将鼠标移动到组件引脚上来找到组件引脚的名称。

### 电线放置的迷你语言

`"connections"` 部分中的每个项目都可以指定一个说明列表如何为电线画线。电线总是直线，或者水平或垂直，或者从不对角线。

具体有以下三个说明:

- “v”后跟一些像素：垂直移动（向上/向下）
- “h”后跟一些像素：水平移动（左/右）
- “\*”只能出现一次。“\*”前面显示的所有说明适用于源引脚，以及应用后出现的说明到目标引脚。

例如：

```json
["v10", "h5", "*", "v-15", "h10"]
```

“v10”将从源引脚向下移动10像素，然后“h5”将移动右边五个像素。

“\*”之后显示的说明按相反的顺序应用：“h10”将在目标引脚右侧移动10像素，然后“v-15”将向上移动15像素。

最后，模拟器将用组合连接电线的两端必要时覆盖剩余距离的水平和垂直电线。

### 电线放置动画

如果您想通过视频学习，您可能会发现以下GIF动画很有用。

动画由Steve Sigma创作。

![diagram.json wire placement mini language](diagram-format-connections.gif)
