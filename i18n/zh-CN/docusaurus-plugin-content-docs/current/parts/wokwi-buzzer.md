---
title: wokwi-buzze参考
sidebar_label: wokwi-buzzer参考
---

压电蜂鸣器

<wokwi-buzzer />

## 引脚名称

| Name | Description |
| ---- | ----------- |
| 1    | 负（黑色）引脚 |
| 2    | 正（红色）引脚 |

## 属性

| Name   | Description                               | Default value |
| ------ | ----------------------------------------- | ------------- |
| mode   | 蜂鸣器操作模式："smooth" or "accurate"    | "smooth"      |
| volume | 声音的音量（响度），介于“0.01”和“1.0”之间 | "1.0"         |

### 工作模式

蜂鸣器可以以两种模式运行：“smooth”（默认）和“accurate”。

“smooth”听起来更好，适合简单的单频音调。可以在使用Arduino的`tone()`函数演奏旋律或演奏音调时使用。复杂和复调声音在“平滑模式”下可能无法正常播放（或根本无法播放）。

当您需要播放复杂的声音时，请使用“accurate”模式。它将准确地播放你输入的声音。然而，它会为您的声音添加可听到的咔嗒声。这些噪音是由于模拟速度的波动-它并不总是能够提供完整的实时声音缓冲区。

## Arduino例子

将蜂鸣器的引脚1连接到Arduino GND引脚，将蜂鸣器引脚2连接到Arduino引脚8。然后使用`tone()`函数播放声音：

```cpp
tone(8, 262, 250); // Plays 262Hz tone for 0.250 seconds
```

## 仿真案例

- [Simon game](https://wokwi.com/arduino/libraries/demo/simon-game) - 一个有4个按钮的记忆游戏
- [Diatonic piano](https://wokwi.com/projects/291958456169005577) -一架8音符钢琴，使用1-8键按下按钮并播放音符
- [Alarm clock](https://wokwi.com/playground/alarm-clock) - 使用蜂鸣器播放闹钟声
