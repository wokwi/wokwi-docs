---
title: wokwi-ir-receiver参考
sidebar_label: wokwi-ir-receiver参考
---

38KHz红外接收器

<wokwi-ir-receiver />

## 引脚名称

| Name | Description      |
| ---- | ---------------- |
| GND  | Ground           |
| VCC  | Positive voltage |
| DAT  | Digital output   |

## 使用接收器

The receiver can be used in two ways:

1. Use the [IR Remote](wokwi-ir-remote) to send infrared commands.
2. Click on the receiver (while the simulation is running) to send arbitrary [NEC-encoded IR signals](https://exploreembedded.com/wiki/NEC_IR_Remote_Control_Interface_with_8051#NEC_Protocol). The user interface lets you specify both the address and the command fields on the NEC message.

To read the commands from your Arduino Code, you can use the [IRRemote](https://github.com/Arduino-IRremote/Arduino-IRremote) or [IRMP](https://github.com/ukw100/IRMP) libraries.

接收器可以通过两种方式使用：

1. 使用 [IR Remote](wokwi-ir-remote) 发送红外命令。

2. 单击接收器（在模拟运行时）发送任意 [NEC-encoded IR signals](https://exploreembedded.com/wiki/NEC_IR_Remote_Control_Interface_with_8051#NEC_Protocol)  。用户界面允许您指定NEC消息上的地址和命令字段。

要从Arduino代码中读取命令，您可以使用 [IRRemote](https://github.com/Arduino-IRremote/Arduino-IRremote) 或者 [IRMP](https://github.com/ukw100/IRMP) 库。

## 仿真案例

- [IRRemote + LCD Display](https://wokwi.com/projects/298934082074575369)
