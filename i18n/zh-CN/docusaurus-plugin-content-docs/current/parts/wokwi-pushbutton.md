---
title: wokwi-pushbutton参考
sidebar_label: wokwi-pushbutton参考
---

12毫米触觉开关按钮（初级按钮）。

<wokwi-pushbutton />

## 引脚名称

| Name      | Description               |
| --------- | ------------------------- |
| 1.l / 1.r | 第一个触点 (left / right) |
| 2.l / 2.r | 第二个触电 (left / right) |

按钮有两组引脚（触点），1和2。

当按下按钮时，它会连接这两个触点，从而关闭电路。

每个触点都有一个按钮左侧的引脚，另一个引脚位于按钮的右侧。

因此，引脚`1.l`是第一次接触的左引脚，`1.r`是第一次接触的右引脚。因为两者都属于即使没有按下按钮，他们也会始终连接到同一个联系人。

下图说明了按钮内部的连接：

![Pushbutton connection diagram](wokwi-pushbutton-diagram.svg)

与Arduino合作时，您通常会连接一个接触点（例如`1.r`或`1.l`)到数字引脚并配置

那个引脚为`INPUT_PULLUP`，另一个接触点（例如`2.r`或`2.l`）到地面。数字引脚将读取为`LOW`当按下按钮时，不按下按钮时为`HIGH`。

## 属性

| Name   | Description          | Default value |
| ------ | -------------------- | ------------- |
| color  | 按下按钮的颜色       | "red"         |
| label  | 显示在按钮下方的文本 | ""            |
| key    | 按钮的键盘快捷键     |               |
| bounce | 设置为“0”以禁用反弹  | ""            |

### 定义键盘快捷键

您可以使用“键”属性来定义控制按钮的键盘按键。

只有当模拟运行并且图表有焦点时，按键才处于活动状态。

例如，假设您将“key”定义为“Q”。然后，当您运行模拟时，在键盘中按_Q_将按下按钮。按钮将保留处于按下状态，只要你继续按_Q_，一旦你松开键，该按钮也将被释放。

您可以定义任何字母数字键盘快捷键（例如英语字母和数字），对于字母，“key”的值不区分大小写（所以“q”和“Q”的意思相同）。

您还可以瞄准一些特殊密钥，例如“Escape”、“ArrowUp”、“F8”、“（空格）或“PageDown”，但一些键可能会被浏览器阻止（例如“F5”刷新页面）。按键的完整列表 [here](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values)。

请注意，特殊键名区分大小写-因此“Escape”将起作用，“escape”不会起作用。

Firefox用户：如果键盘快捷键不能用，请确保禁用“开始键入时搜索文本”设置。

### 弹跳

当您按下物理按钮时，电路会打开和关闭数十次或数百次。这种现象被称为弹跳。发生这种情况是因为按钮的机械性质：金属触点结合在一起时，有一段短暂的过度时间——触点的接触不充分，这导致一系列快速的开放/关闭。

Wokwi默认模拟按钮弹跳。您可以通过以下方式禁用弹跳模拟"Bounce" 至 "0"：

`{ "bounce": "0" }`

弹跳模拟遵循Horowitz & Hill在《电子艺术》中描述的行为：

>当开关关闭时，两个触点实际上分离并重新连接，通常为10到100次，大约1ms的时间。

例如，[这个项目展示了弹跳和非弹跳的不同](https://wokwi.com/projects/288681423014986248). 。它有两个按钮连接到同一个Arduino输入引脚：

- 蓝色按钮不会模拟弹跳。按一次只会打印一对“按下”和“释放”的消息。

- 红色按钮模拟弹跳。按一次将打印多条“按下”和“释放”的消息。

### 保持

如果您希望该按钮保持按下状态，请按住 Ctrl 键单击它（在 Mac 上按住 Cmd 键单击）。它将导致按钮保持按下状态，直到下次单击。

当您需要同时按下多个按钮时，这非常有用。

### 示例

| Result                                | Attrs                     |
| ------------------------------------- | ------------------------- |
| <wokwi-pushbutton color="green" />    | `{ "color": "green" }`    |
| <wokwi-pushbutton color="#FFFF00" />  | `{ "color": "#FFFF00" }`  |
| <wokwi-pushbutton label="Push me!" /> | `{ "label": "Push me!" }` |

## 仿真案例

- [Simon Game](https://wokwi.com/arduino/libraries/demo/simon-game) - A memory game with 4 push buttons
- [Diatonic Piano](https://wokwi.com/projects/291958456169005577) - A 8-note piano, use keys 1-8 to press the buttons and play the notes.
- [Bounce vs non-bounce](https://wokwi.com/projects/288681423014986248)
