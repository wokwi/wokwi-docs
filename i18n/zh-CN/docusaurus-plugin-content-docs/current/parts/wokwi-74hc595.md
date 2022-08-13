---
title: wokwi-74hc595模块参考
sidebar_label: wokwi-74hc595模块
---

8位串行并行输出（SIPO）移位寄存器

![74HC595](wokwi-74hc595.svg)

使用74HC595移位寄存器扩展微控制器上的_output_引脚数量。对于输入移位寄存器（例如，使用单个输入引脚读取多个按钮），请参阅[wokwi-74hc165](wokwi-74hc165) 。

## 引脚名称

| Pin   | 描述                                          |
| ----- | --------------------------------------------- |
| DS    | 串行输入                                      |
| SHCP  | 串行时钟                                      |
| STCP  | 锁存引脚                                      |
| OE    | 输出使能，低有效。如果不使用，请连接到GND。   |
| Q0…Q7 | 并行输出                                      |
| Q7S   | 串行输出*                                     |
| MR    | 复位（清除），低有效。如果不使用，请连接到VCC |
| GND   | 接地                                          |
| VCC   | 接电源                                        |

\* 使用Q7S将多个74HC595单元连接在一起。将Q7S连接到链中的下一个74HC595芯片的DS引脚。

## 在Arduino中使用

您需要将至少3个引脚连接到微控制器：DS、SHCP和STCP。

OE引脚可用于禁用移位寄存器的输出。如果您需要该功能，请将其连接到您的微控制器。否则，将其连接到地面以永久启用输出。

移位寄存器的输出引脚Q0到Q7，通常连接到 [LEDs](wokwi-led)或7段显示器。

以下代码示例假设您将DS连接到Arduino引脚2，SHCP连接到Arduino引脚3，并且STCP到Arduino的4号引脚。它输出一个8位的数，该数每秒翻转两次：

```cpp
const int dataPin = 2;   /* DS */
const int clockPin = 3;  /* SHCP */
const int latchPin = 4;  /* STCP */

void setup() {
  pinMode(dataPin, OUTPUT);
  pinMode(clockPin, OUTPUT);
  pinMode(latchPin, OUTPUT);
}

int pattern = 0b10101010;
void loop() {
  digitalWrite(latchPin, LOW);
  shiftOut(dataPin, clockPin, LSBFIRST, pattern);
  digitalWrite(latchPin, HIGH);
  delay(500);
  pattern = ~pattern; // Invert the pattern
}
```

你可以 [尝试该项目](https://wokwi.com/projects/301192672203244042).

## 仿真实例

- [75HC595 shift register with 8 LEDs](https://wokwi.com/projects/301188813482361352)
- [Arduino 16-LED shift register blink](https://wokwi.com/projects/301213976182653448)
- [ATtiny85 75HC595 clock](https://wokwi.com/projects/301366580039647753)
- [8-digit seven-segment hex counter](https://wokwi.com/projects/301304715310793225)
