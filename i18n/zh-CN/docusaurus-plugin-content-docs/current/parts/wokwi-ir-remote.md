---
title: wokwi-ir-remote参考
sidebar_label: wokwi-ir-remote参考
---

38KHz红外遥控器，带20个功能键。与[IR Receiver module](wokwi-ir-receiver)一起使用。

<wokwi-ir-remote />

## 功能键

密钥发送使用[NEC frame format](https://exploreembedded.com/wiki/NEC_IR_Remote_Control_Interface_with_8051#NEC_Protocol).编码的红外消息。每个键发送不同的命令值（见下表），地址字段始终为0。

每个按键都有一个键盘快捷键，可以在遥控器对焦时激活该键。

下表列出了NEC命令、NEC编码值和键盘快捷键，对于每个按键：

| Key      | Command | NEC encoded | Keyboard Shortcut |
| -------- | ------- | ----------- | ----------------- |
| Power    | 162     | 0xFFA25D    | O                 |
| Menu     | 226     | 0xFFE21D    | M                 |
| Test     | 34      | 0xFF22DD    | T                 |
| Plus     | 2       | 0xFF02FD    | +                 |
| Back     | 194     | 0xFFC23D    | B                 |
| Previous | 224     | 0xFFE01F    | Left arrow key    |
| Play     | 168     | 0xFFA857    | P                 |
| Next     | 144     | 0xFF906F    | Right arrow key   |
| 0        | 104     | 0xFF6897    | 0                 |
| Minus    | 152     | 0xFF9867    | - (minus)         |
| C        | 176     | 0xFFB04F    | C                 |
| 1        | 48      | 0xFF30CF    | 1                 |
| 2        | 24      | 0xFF18E7    | 2                 |
| 3        | 122     | 0xFF7A85    | 3                 |
| 4        | 16      | 0xFF10EF    | 4                 |
| 5        | 56      | 0xFF38C7    | 5                 |
| 6        | 90      | 0xFF5AA5    | 6                 |
| 7        | 66      | 0xFF42BD    | 7                 |
| 8        | 74      | 0xFF4AB5    | 8                 |
| 9        | 82      | 0xFF52AD    | 9                 |

## 仿真案例

- [IRRemote + LCD Display](https://wokwi.com/projects/298934082074575369)
