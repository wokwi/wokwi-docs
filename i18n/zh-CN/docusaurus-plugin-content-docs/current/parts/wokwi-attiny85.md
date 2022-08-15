---
title: wokwi-attiny85参考
sidebar_label: wokwi-attiny85参考
---

ATtiny85是一款小型8位AVR微控制器。它有8KB的Flash程序内存、512字节的SRAM和512字节的EEPROM。

![ATtiny85](wokwi-attiny85.svg)

## 引脚名称

| Pin | Name | Functions         | Analog Channel |
| --- | ---- | ----------------- | -------------- |
| 1   | PB5  | Reset             | 0              |
| 2   | PB3  |                   | 3              |
| 3   | PB4  |                   | 2              |
| 4   | GND  | Ground            |                |
| 5   | PB0  | SPI:MOSI, I2C:SDA |                |
| 6   | PB1  | SPI:MISO          |                |
| 7   | PB2  | SPI:SCK, I2C:SCL  | 1              |
| 8   | VCC  | Positive voltage  |                |

## 属性

| Name      | Description                                                  | Default value |
| --------- | ------------------------------------------------------------ | ------------- |
| env       | 使用Arduino核心：“attiny”或“ATTinyCore”                      | "attiny"      |
| frequency | MCU时钟频率，以赫兹为单位。共同价值观：: "1m", "8m", "16m", and "20m" | "8m"          |

## 代码和库

Arduino核心提供内置的Arduino函数，如`pinMode()` and `digitalRead()`，以及一组标准Arduino库，如Servo、Wire和SPI。

在为ATtiny85编译代码时，您可以在两个不同的内核中进行选择：

- [attiny](https://github.com/damellis/attiny) - 一个最小的核心，提供大多数标准的Arduino函数。这是默认值。

- [ATTinyCore](https://github.com/SpenceKonde/ATTinyCore)-高级核心，包括Wire、SPI、Servo和Serial库。在 [ATTinyCore documentation](https://github.com/SpenceKonde/ATTinyCore/blob/master/avr/extras/ATtiny_x5.md)中了解更多信息）。

注意：ATTinyCore是一个新选项，尚未经过广泛测试。

要选择核心，请设置 `wokwi-attiny85`部分的“env”属性，例如

```json
  "parts": [
    {
      "type": "wokwi-attiny85",
      "id": "tiny",
      "attrs": {
        "env": "ATTinyCore"
      }
      …
    },
    …
  ]
```

### 使用TinyDebug进行调试打印

您可以使用 [TinyDebug library](https://github.com/wokwi/TinyDebug) 从代码中打印调试消息。这些消息显示在Wokwi的串行监视器中。要使用该库，请在项目中包含“TinyDebug.h”，并创建一个文本为“TinyDebug”的[libraries.txt](../guides/libraries) 文件。

调用`Debug.begin()`，然后使用`Debug.println()`打印调试消息：

```cpp
#include <TinyDebug.h>

void setup() {
  Debug.begin();
  Debug.println(F("Hello, TinyDebug!"));
}

void loop() {
  /* Sprinkle some magic code here */
}
```

同样，您可以使用`Debug`对象从模拟器的串行监视器读取输入：

```cpp
if (Debug.read() == 'c') {
  // Do something, e.g. toggle an LED
}
```

有关可用方法的更多信息，请查看[Stream class documentation](https://www.arduino.cc/reference/en/language/functions/communication/stream/#_functions)。

“调试”接口消耗约30字节的SRAM和150字节的闪存，具体取决于您在代码中使用的方法。这有时可能是一个问题，因为ATtiny85只有512字节的SRAM。

这就是为什么TinyDebug还提供了一个不使用任何SRAM的替代轻量级日志界面。它提供了两个函数，`tdPrint()`和`tdPrintln()`。缺点是，您只能打印c样式（`char*`）字符串：

```cpp
#include <TinyDebug.h>

void setup() {
  tdPrintln(F("I do not use any SRAM!"));
}

void loop() {
  /* ... */
}
```

TinyDebug库在Wokwi中开箱即用，对您的图表没有任何更改。它使用内部调试接口是Wokwi仿真引擎的一部分，不使用任何MCU引脚。

您可以在物理ATtiny85芯片上安全地运行使用TinyDebug的代码。物理芯片没有有调试界面，所以你显然不会看到调试消息，但除此之外，它不干扰你的代码。

有关完整的代码示例，请查看[TinyDebug demo project on Wokwi](https://wokwi.com/projects/300650387867697672)。

### 串口输出

ATtiny85没有专用的UART外围设备，但仍然可以使用软件串行库获得串行输出。

有关更多信息和演示代码，请参阅[Serial Monitor Guide](../guides/serial-monitor#attiny85--softwareserial)。

### I2C

对于I2C通信，请使用 [TinyWireM](https://github.com/adafruit/TinyWireM) 库。

## 仿真功能

ATtiny85使用 [AVR8js Library](https://github.com/wokwi/avr8js)仿真。下表总结了功能的状态：

| 外设      | 状态 | 注意                                         |
| ----------------- | ------ | ----------------------------------------------- |
| Processor         | ✔️     |                                                 |
| GPIO              | ✔️     | 6 GPIO pins (PB0...PB6), INT0 / PCINT support   |
| USI               | 🟡     | Only works in I2C mode                          |
| Timer0            | ✔️     | PWM support for PB0/PB1                         |
| Timer1            | ❌     |                                                 |
| Watchdog Timer    | ✔️     |                                                 |
| EEPROM            | ✔️     |                                                 |
| ADC               | ✔️     | Used by analogRead()                            |
| Analog Comparator | ❌     |                                                 |
| GDB Debugging     | ✔️     | See the [GDB Debugging Guide](../gdb-debugging) |

说明:
✔️ 可仿真
🟡 可以仿真, 但是要看注意
❌ 不支持

如果您需要任何缺失的功能，请 [open an issue on the AVR8js repo ](https://github.com/wokwi/avr8js/issues/new)或者 [reach out on Discord](https://wokwi.com/discord).。

## 仿真案例

- [ATtiny85 Blink](https://wokwi.com/projects/283019827166052872)
- [ATtiny85 Simon Game](https://wokwi.com/projects/285525640477671948)
- [ATtiny85 FastLED Matrix](https://wokwi.com/projects/283910810787381773)
- [ATtiny85 Charlieplexing](https://wokwi.com/projects/283912288194265608)
- [ATtiny85 SSD1306 + DHT](https://wokwi.com/projects/292900020514980360)
