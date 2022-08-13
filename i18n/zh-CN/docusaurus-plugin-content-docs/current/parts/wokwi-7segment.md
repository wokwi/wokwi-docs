---
title: wokwi-7segment模块参考
sidebar_label: wokwi-7segment模块
---

七段LED显示屏

<wokwi-7segment />

## 引脚名称

| Name | 描述            |
| ---- | --------------- |
| A    | 顶部段          |
| B    | 上部右段        |
| C    | 底部右段        |
| D    | 底部段          |
| E    | 底部左段        |
| F    | 上部右段        |
| G    | 中段            |
| DP   | 点 LED          |
| COM  | 公共端\*        |
| DIG1 | 数字1引脚*      |
| DIG2 | 数字2引脚\*     |
| DIG3 | 数字3引脚\*     |
| DIG4 | 数字4引脚\*     |
| CLN  | 冒号引脚 (可选) |

\* COM是单个数字7段显示器的常见引脚。对于多位数显示器，请使用DIG1...DIG4。

默认情况下，段引脚（A...G、DP、CLN）连接到LED的阳极（正侧），并且普通引脚（COM，DIG1...DIG4）连接到LED的阴极（负侧）。您可以设置“common”属性为“cathode”来翻转。

分段映射如下：

![7-segment display segment mapping](wokwi-7segment-diagram.svg)

数字映射：

![7-segment display digit mapping](wokwi-7segment-digits.svg)

## 属性

| Name   | 描述                                 | 默认值  |
| ------ | ------------------------------------ | ------- |
| common | 公用的引脚：“阴极”或“阳极”           | "anode" |
| digits | 显示数字的选择: "1", "2", "3" or "4" | "1"     |
| colon  | 设置为“1”以显示冒号（时钟模式）      | ""      |
| color  | 段LED的颜色                          | "red"   |

### 示例

| 结果                                                         | 属性                              |
| ------------------------------------------------------------ | --------------------------------- |
| <wokwi-7segment color="green" values="[1,1,1,1,0,1,1,0]" />  | `{ "color": "green" }`            |
| <wokwi-7segment color="#d040d0" values="[1,1,1,1,0,1,1,0]" /> | `{ "color": "#d040d0" }`          |
| <wokwi-7segment digits="2" />                                | `{ "digits": "2" }`               |
| <wokwi-7segment digits="4" />                                | `{ "digits": "4" }`               |
| <wokwi-7segment digits="4" colon="1" colonValue="1" />       | `{ "digits": "4", "colon": "1" }` |

## 使用7段数码管显示

对于一位数，您需要8个微控制器GPIO引脚。每个引脚都应该通过电阻器连接到单个段，

公共引脚应连接到5V（如果您使用的是共用阴极，则连接到GND）。如果你不使用点LED，你可以腾出一个引脚（DP）。通过打开相应驱动段来显示，低有效（或着共阴极为高有效）。

对于多个数字，您需要为段和点添加8个微控制器引脚，并为每个数字加一个额外的微控制器引脚。因此，如果您有4位数字，您总共需要12个微控制器引脚。在这个模式下控制显示有点棘手，因为您需要在不同的数字之间不断交替。

幸运的是，这里有些库可以帮助你:

- 在 Arduino 上: 使用 [SevSeg library](https://wokwi.com/arduino/libraries/SevSeg).
- 在 Raspberry Pi Pico 上: PIO外围设备可以为您刷新显示屏。请参阅下面的 [examples](#simulator-examples) 。

如果您的微控制器没有其他引脚，请考虑使用[74HC595 Shift Register](wokwi-74hc595) 来驱动显示器。

## 仿真实例

- [SevSeg example: Counter](https://wokwi.com/arduino/libraries/SevSeg/SevSeg_Counter)
- [SevSeg example: String with period](https://wokwi.com/arduino/libraries/SevSeg/stringWithPeriod)
- [Arduino Alarm Clock](https://wokwi.com/playground/alarm-clock)
- [ATtiny85 7-Segment clock](https://wokwi.com/projects/301366580039647753)
- [ATtiny85 8 digit counter](https://wokwi.com/projects/301304715310793225)
- [7-Segment on the Raspberry Pi Pico (using PIO)](https://wokwi.com/projects/301404853501952521)
- [7-Segment on the Raspberry Pi Pico (MicroPython)](https://wokwi.com/projects/300936948537623048)
