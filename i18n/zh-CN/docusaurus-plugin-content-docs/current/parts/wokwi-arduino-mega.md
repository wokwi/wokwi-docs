---
title: wokwi-arduino-mega参考
sidebar_label: wokwi-arduino-mega参考
---

Arduino Mega 2560。由ATmega2560芯片提供支持，该芯片拥有256K字节的Flash程序内存、8k字节的SRAM和4K字节的EEPROM。该板具有54个数字引脚、16个模拟输入引脚和4个串行端口。它以16MHz运行。

<wokwi-arduino-mega />

## 引脚名称

引脚0到53是数字GPIO引脚。引脚A0至A15除了是数字GPIO引脚外，还兼作模拟输入引脚。

有五个接地引脚：GND.1（引脚13旁边）、GND.2/GND.3（Vin引脚旁边）和GND.4/GND.5（在双排母头连接器的底部）

引脚VIN/5V连接到正电源。双排母头连接器顶部还有两个额外的电源引脚，5V.1/5V.2。

模拟中没有引脚3.3V / IOREF / AREF / RESET。

数字引脚2 ... 13、44、45和46支持硬件PWM（共15个PWM通道）。

一些数字引脚还具有额外的功能：

| Pin | Function | Signal           | External interrupt |
| --- | -------- | ---------------- | ------------------ |
| 0   | Serial   | RX               |                    |
| 1   | Serial   | TX               |                    |
| 2   |          |                  | INT4               |
| 3   |          |                  | INT5               |
| 19  | Serial1  | RX               | INT2               |
| 18  | Serial1  | TX               | INT3               |
| 17  | Serial2  | RX               |                    |
| 16  | Serial2  | TX               |                    |
| 15  | Serial3  | RX               |                    |
| 14  | Serial3  | TX               |                    |
| 20  | I2C      | SDA (Data)       | INT1               |
| 21  | I2C      | SCL (Clock)      | INT0               |
| 50  | SPI      | MISO             |                    |
| 51  | SPI      | MOSI             |                    |
| 52  | SPI      | SCK (Clock)      |                    |
| 53  | SPI      | SS (Chip select) |                    |

### 板载LED

主板包括四个LED：

| LED  | Function                    |
| ---- | --------------------------- |
| L    | 连接至数字脚13              |
| RX   | 串口RX工作指示灯            |
| TX   | 串口TX工作指示灯            |
| ON   | 电源LED。模拟运行时始终打开 |

一般来说，只有“L”LED才能由用户的代码控制。您可以使用 `LED_BUILTIN` 常量从代码中引用它：

```cpp
pinMode(LED_BUILTIN, OUTPUT);
digitalWrite(LED_BUILTIN, HIGH);
```

有关完整的代码示例，请参阅[Blink](https://wokwi.com/arduino/libraries/demo/blink-mega) 。

## 仿真功能

Arduino Mega 2560使用 [AVR8js Library](https://github.com/wokwi/avr8js)进行仿真。下表总结了现有功能的状态：

| 外设             | 状态 | 注意                                         |
| ------------------------ | ------ | ----------------------------------------------- |
| Processor                | ✔️     |                                                 |
| GPIO                     | ✔️     | Including External/Pin Change Interrupts        |
| 8-bit timers             | ✔️     | Timer0, Timer2                                  |
| 16-bit timers            | ✔️     | Timer1, Timer3, Timer4, Timer5 \*               |
| Output Compare Modulator | ❌     ||
| Watchdog Timer           | ✔️     |                                                 |
| USART                    | ✔️     | USART0, USART1, USART1, USART3                  |
| SPI                      | 🟡     | Master mode only                                |
| I2C                      | 🟡     | Master mode only                                |
| EEPROM                   | ✔️     |                                                 |
| Clock Prescale           | ✔️     |                                                 |
| ADC                      | ✔️     | Used by analogRead()                            |
| Analog Comparator        | ❌     |                                                 |
| GDB Debugging            | ✔️     | See the [GDB Debugging Guide](../gdb-debugging) |

说明:
✔️ 可仿真
🟡 可以仿真, 但是要看注意
❌ 不支持

\* 16位计时器中没有实现输入捕获。

如果您需要任何缺失的功能，请 [open an issue on the AVR8js repo ](https://github.com/wokwi/avr8js/issues/new)或者 [reach out on Discord](https://wokwi.com/discord).。

### 串行监视器

您可以使用串行监视器从Arduino代码接收信息，例如调试打印。您还可以使用它向代码发送信息，例如文本命令。

有关更多信息和代码示例，请查看 [the Serial Monitor guide](../guides/serial-monitor)。它还解释了如何将串行监视器连接到其他引脚（例如，连接到`Serial2` 而不是`Serial` ），以及如何配置行尾字符。

### 库

该模拟器支持许多流行的Arduino库。有关完整列表，请参阅[Libraries guides](../guides/libraries)。

## 仿真案例

- [Arduino Mega Blink](https://wokwi.com/arduino/libraries/demo/blink-mega)
