---
title: wokwi-lcd2004显示模块参考
sidebar_label: wokwi-lcd2004显示模块参考
---

液晶显示器，每行4行，20个字符。

<wokwi-lcd2004 text="    wokwi-lcd2004                          4x20 characters" />

这个组件具有与wokwi-lcd1602相同的引脚和属性。

有关**完整信息和代码示例**，请参阅 [wokwi-lcd1602 reference](wokwi-lcd1602)。

### 示例

| Result                                                                | Attrs                                        |
| --------------------------------------------------------------------- | -------------------------------------------- |
| <wokwi-lcd2004 text="Hello World!" />                                 | `{ }`                                        |
| <wokwi-lcd2004 text="Hello World!" pins="i2c" />                      | `{ "pins": "i2c" }`                          |
| <wokwi-lcd2004 background="blue" color="white" text="Hello World!" /> | `{ "background": "blue", "color": "white" }` |

## 仿真案例

- [LCD2004 Tiny Pacman on Wokwi](https://wokwi.com/projects/294590769009787402)
