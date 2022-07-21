---
title: 串行监视器
sidebar_label: 串行监视器
---

串行监视器提供了一种向/从你的 Arduino 代码发送/接收信息的方法。
你可以使用它来查看程序打印的调试消息，或发送命令控制你的程序。

## Arduino Uno and Mega

Arduino Uno和Mega在硬件上都支持串行协议（USART）。串行监视器将自动连接到硬件串行端口并检测波特率，因此它是开箱即用的，无需任何特殊配置。

你可以使用 [Arduino's Serial class](https://www.arduino.cc/reference/en/language/functions/communication/serial/) 与串行监视器交互：

```cpp
void setup() {
  Serial.begin(115200); // Any baud rate should work
  Serial.println("Hello Arduino\n");
}

void loop() {
  // Do nothing...
}
```

:::caution

只有当你从程序中打印一些输出时，串行监视器才会显示。要更改这种行为，[见下文](#display)。

:::



Arduino Mega有多个硬件串行端口。你可以通过在 diagram.json 中配置引脚，将串行监视器连接到其他串行端口。例如，要将`Serial2`连接到串行监视器，请在diagram.json中的`connections` 部分添加以下行：

```json
  [ "mega:17", "$serialMonitor:TX", "" ],
  [ "mega:16", "$serialMonitor:RX", "" ],
```

将 `mega` 部分替换为 你的`wokwi-arduino-mega` 板卡使用的实际ID。

请注意：你需要将 `$serialMonitor:TX` 连接到你的串行端口的 `RX` 引脚，并将 `$serialMonitor:RX` 连接到你的串行端口的 `TX` 引脚。我知道，这可能会令人困惑。（交叉相连，互换角色，你发我收，我发你收）。

## ATtiny85 + SoftwareSerial

ATtiny85芯片硬件上没有内置串口（USART）。但是你可以使用一个USART协议的软件实现，使用`SoftwareSerial`库与串行监视器交互。

首先，通过将以下行添加到[diagram.json](../diagram-format)中的`connections` 部分，来声明将用于串行通信的引脚：

```json
  [ "tiny:PB0", "$serialMonitor:TX", "" ],
  [ "tiny:PB1", "$serialMonitor:RX", "" ],
```

将 `tiny` 部分替换为`wokwi-attiny85`板卡使用的实际ID，将`PB1`/`PB0`替换为你想要使用的引脚名称。

然后，根据下面来配置SoftwareSerial库：

```cpp
#include <SoftwareSerial.h>

SoftwareSerial Serial(PB0, PB1);

void setup() {
  Serial.begin(9600); // Must be 9600
  Serial.println("Hello Arduino\n");
}

void loop() {
  // Do nothing...
}
```

要保证在代码中的引脚名称与图表文件中的引脚名称匹配。第一个参数和`SoftwareSerial`的构造函数匹配并连接到`$serialMonitor:TX`的引脚，并且第二个参数应和连接到`$serialMonitor:RX`的引脚相匹配。

:::caution
波特率必须设置为**9600**。这是在模拟器中硬编码的！如果使用不同的值，串行监视器会中出现垃圾信息。

:::

如果你想参考完整示例，请查看[ATtiny85 SoftwareSerial example project](https://wokwi.com/projects/290883003139228169)。

注意：如果你只想使用串行监视器打印调试消息，请查看[the TinyDebug library](../parts/wokwi-attiny85#debug-prints-with-tinydebug)。

## 串行监视器的配置

你可以通过在[diagram.json](../diagram-format)文件中添加`"serialMonitor"` 部分来配置串行监视器。

默认配置如下：

```json
"serialMonitor": {
  "display": "auto",
  "newline": "lf"
}
```

当你添加 `"serialMonitor"`部分时，务必在 diagram.json 的最后一个项目之后添加它，或者确保在关闭花括号后添加逗号。你可以在[这里](https://wokwi.com/projects/308893120796295745)查看完整示例。

### Display

`display` 属性用于配置何时/如何显示串行监视器。有效的值如下：

| Value    | Description                                      |
| -------- | ------------------------------------------------ |
| auto     | 当有输出时，串行监视器显示（默认值）             |
| always   | 当仿真开始时，串行监视器始终显示                 |
| never    | 串行监视器关闭显示                               |
| plotter  | 仿真开始时显示串行绘图仪                         |
| terminal | 显示终端 (使用 [XTerm.js](https://xtermjs.org/)) |

注意：“终端”模式支持调整文本和背景颜色。你可以查看[the Arduino ANSI colors example](https://wokwi.com/projects/308893120796295745)以查看其输出情况。

### Newline

当你在串行监视器中输入一行文本时，模拟器会将该文本发送到你的程序。

你的程序可以使用`Serial.read()` ，也可以参看其他[Serial methods](https://www.arduino.cc/reference/en/language/functions/communication/serial/)来读取它。

默认情况下，模拟器还会在你输入的文本的每一行附加一个换行符（“\n”，ASCII 码 10）。

你可以使用`newline` 属性来更改此行为，并配置不同的字符序列：

| Value | Characters | ASCII codes | Description                |
| ----- | ---------- | ----------- | -------------------------- |
| lf    | "\n"       | 10          | 附加换行(the default)      |
| cr    | "\r"       | 13          | 附加回车                   |
| crlf  | "\r\n"     | 10 13       | 附加回车+换行              |
| none  | ""         |             | 不将任何字符附加到输入行中 |
