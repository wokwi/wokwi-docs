---
title: wokwi-led-bar-graph参考
sidebar_label: wokwi-led-bar-graph参考
---

10段LED条形图。

<wokwi-led-bar-graph values='[1,1,1,1,1,1,1,1,1,1]' />

## 引脚名称

| Name   | Description                          |
| ------ | ------------------------------------ |
| A**n** | LED的阳极（正引脚） **n** (n = 1…10) |
| C**n** | LED的阴极（负引脚） **n** (n = 1…10) |

例如，例如A1是顶部LED的阳极，C1是顶部LED的阴极。

## 属性

| Name  | Description                              | Default value |
| ----- | ---------------------------------------- | ------------- |
| color | LED主体的颜色，或特殊值“GYR”/“BCYR”之一* | "red"         |

\* GYR的意思是绿色-黄色-红色。BCYR的意思是青蓝色-黄色-红色

### 示例

| Result                                                                  | Attrs                    |
| ----------------------------------------------------------------------- | ------------------------ |
| <wokwi-led-bar-graph  values='[1,1,1,1,1,1,1,1,1,1]' color="yellow" />  | `{ "color": "yellow" }`  |
| <wokwi-led-bar-graph  values='[1,1,1,1,1,1,1,1,1,1]' color="#9EFF3C" /> | `{ "color": "#9EFF3C" }` |
| <wokwi-led-bar-graph  values='[1,1,1,1,1,1,1,1,1,1]' color="GYR" />     | `{ "color": "GYR"}`      |
| <wokwi-led-bar-graph  values='[1,1,1,1,1,1,1,1,1,1]' color="BCYR"  />   | `{ "color": "BCYR"}`     |

## 仿真案例

- [Arduino LED Graph Bar](https://wokwi.com/projects/309829489359061570) - Move the potentiometer knob to control the LEDs
- [Raspberry Pi Pico Binary Counter](https://wokwi.com/projects/309828467927548481)
