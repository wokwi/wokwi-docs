---
title: wokwi-74hc165参考
sidebar_label: wokwi-74hc165模块
---

8位并行输入-串行输出（PISO）移位寄存器（输入）

![74HC165](wokwi-74hc165.svg)

使用74HC165移位寄存器扩展微控制器上的_input_引脚数量。有关输出移位寄存器（例如，只需几个引脚即可控制多个LED），请参阅 [wokwi-74hc595](wokwi-74hc595)。

## 引脚名称

| Pin   | 介绍                       |
| ----- | -------------------------- |
| D0…D7 | 并行输入                   |
| PL    | 并行装载（低有效）         |
| CP    | 串行时钟                   |
| CE    | 时钟使能（低有效）         |
| Q7    | 串行输出                   |
| Q7_N  | 翻转串行输出（通常不使用） |
| DS    | 串行输入*                  |
| GND   | 接地                       |
| VCC   | 接电源                     |

\* 使用DS将多个74HC165单元拼凑在一起。将DS连接到芯片链中的之前74HC165芯片的Q7引脚。如果您不串联连接中的第一个芯片，您可以断开DS的连接。

## 工作方式

74HC165是一个具有八个并行输入的移位寄存器：它使您能够同时采样八个输入引脚，然后一次读取一个结果。换句话说，这是增加微控制器输入引脚数量的简单方法。

移位寄存器有两个状态：采样和移位。PL引脚选择活动状态。

### 采样 (PL low)

当PL低时，移位寄存器处于采样状态：它从引脚D0...D7读取输入并存储它们。它还在Q7引脚中输出D7的值（因此Q7 == D7）。

### 移位 (PL high)

当PL高时，移位寄存器处于移位状态。它保留从输入中读取的值，并允许您通过Q7引脚一次读取此值。您可以通过将CP（串行时钟）高脉动来读取下一个位。最初，Q7包含从D7读取的值。当您将时钟脉冲高时，您将从D6中获得值。当你再次脉冲它时，你会从D5等中获得值。

在PL高时更改输入引脚没有效果。

### 移位寄存器的使用

要使用移位寄存器，请将引脚D0...D7连接到您的输入（例如[滑动开关](wokwi-slide-switch) or [按键](wokwi-pushbutton)）。您可能需要添加外部上拉或下拉[电阻](wokwi-resistor)，特别是如果您使用按钮。

您还需要将PL、CP和Q7连接到微控制器。将PL和CP配置为数字输出，Q7配置为数字输入。

最后，连接到CE引脚接地。您可以使用此引脚禁用移位（通过将其推高），但通常不需要。不要让CE浮空，他必须有确定的状态！

通过将PL设置为低来采样输入。

通过将PL设置为高来读取值。读取Q7的第一个（最重要的）位，然后脉冲CP高以获得下一个位。重复八次，直到您读取移位寄存器中的所有位。

### 链接多个移位寄存器

您可以链接多个移位寄存器，但仍然使用单个微控制器输入引脚。这种配置也被称为级联。连接如下：

1. 将每个单元（最后一个单元除外）的Q7引脚连接到下一个单元的DS（序列输入）引脚。

2. 将最后一个单元的Q7引脚连接到微控制器。

3. PL（并行负载）和CP（时钟）引脚在所有单元之间共享。因此，您只需要两个微控制器引脚来控制整个链条。如果您使用CE（时钟启用引脚），它也可以共享。否则，只需将其连接到地面即可。

操作与上面相同：采样，然后移动。但有一个区别：你移位时读数超过8位。对于n个移位寄存器的链，您将通过重复读取Q7，然后给CP高脉冲来移动8\*n位。因此，对于两个74hc165单元，您将移动16位，对于三个单元，您将移动24位，等等。

如果您不需要所有位（例如，您有两个移位寄存器单元，只需使用10个输入），那么您可以移动更少的位，只移出您需要的就可以。

## Arduino代码示例

此示例假设您将Shift寄存器连接到Arduino，如下所示：

| Arduino pin | 74HC165 pin |
| ----------- | ----------- |
| 2           | Q7\*        |
| 3           | CP          |
| 4           | PL          |
| GND         | CE          |
| GND         | GND         |
| 5V          | VCC         |

\* 如果您链接多个移位寄存器，请仅将链中最后一个寄存器的Q7引脚连接到Arduino。

```cpp
const int dataPin = 2;   /* Q7 */
const int clockPin = 3;  /* CP */
const int latchPin = 4;  /* PL */

const int numBits = 8;   /* Set to 8 * number of shift registers */

void setup() {
  Serial.begin(115200);
  pinMode(dataPin, INPUT);
  pinMode(clockPin, OUTPUT);
  pinMode(latchPin, OUTPUT);
}

void loop() {
  // Step 1: Sample
  digitalWrite(latchPin, LOW);
  digitalWrite(latchPin, HIGH);

  // Step 2: Shift
  Serial.print("Bits: ");
  for (int i = 0; i < numBits; i++) {
    int bit = digitalRead(dataPin);
    if (bit == HIGH) {
      Serial.print("1");
    } else {
      Serial.print("0");
    }
    digitalWrite(clockPin, HIGH); // Shift out the next bit
    digitalWrite(clockPin, LOW);
  }

  Serial.println();
  delay(1000);
}
```

[Run this example on Wokwi](https://wokwi.com/projects/306031380875182657).

## 仿真实例

- [Single input shift register](https://wokwi.com/projects/306031380875182657)
- [74HC165 shift register cascade](https://wokwi.com/projects/306024460940476993) - four units daisy-chained to read the state of 32 switches
