---
title: wokwi-arduino-uno参考
sidebar_label: wokwi-arduino-uno参考
---

Arduino Uno是Arduino家族中最受欢迎的板卡。它由ATmega328p芯片供电，该芯片具有32K字节的Flash程序内存、2k字节的SRAM和1K字节的EEPROM。

<wokwi-arduino-uno />

## 引脚名称

引脚0到13是数字GPIO引脚。引脚A0至A5除了是数字GPIO引脚外，还兼作模拟输入引脚。

有三个接地引脚：GND.1，在板的顶部，在引脚13旁边，GND.2/GND.3在底部。

引脚VIN/5V连接到正电源。

模拟中没有引脚3.3V / IOREF / AREF / RESET。

数字引脚3、5、6、9、10和11支持硬件PWM。

一些数字引脚还具有额外的功能：

| Pin | Function           | Signal           |
| --- | ------------------ | ---------------- |
| 0   | Serial (USART)     | RX               |
| 1   | Serial (USART)     | TX               |
| 2   | External interrupt | INT0             |
| 3   | External interrupt | INT1             |
| 10  | SPI                | SS (Chip select) |
| 11  | SPI                | MOSI             |
| 12  | SPI                | MISO             |
| 13  | SPI                | SCLK (Clock)     |
| A4  | I2C                | SDA (Data)       |
| A5  | I2C                | SCL (Clock)      |

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

有关完整的代码示例，请参阅[Blink](https://wokwi.com/arduino/libraries/demo/blink) 。

## 属性

| Name      | Description                                                  | Default value |
| --------- | ------------------------------------------------------------ | ------------- |
| frequency | MCU时钟频率，以赫兹为单位。常见值: "8m", "16m", and "20m" \* | "16m"         |

\* 许多Arduino库假设16MHz时钟频率。更改时钟频率可能将使您的功能失效！

## 仿真功能

Arduino Uno使用 [AVR8js Library](https://github.com/wokwi/avr8js)进行仿真。下表总结了现有功能的状态：

| 外设    | 状态 | 注意                                                                |
| ----------------- | ------ | ---------------------------------------------------------------------- |
| Processor         | ✔️     |                                                                        |
| GPIO              | ✔️     | Including External/Pin Change Interrupts                               |
| 8-bit timers      | ✔️     | Timer0, Timer2                                                         |
| 16-bit timer      | ✔️     | Timer1                                                                 |
| Watchdog Timer    | ✔️     | [Usage example](https://wokwi.com/projects/309372800631571009) |
| USART             | ✔️     |                                                                        |
| SPI               | 🟡     | Master mode only                                                       |
| I2C               | 🟡     | Master mode only                                                       |
| EEPROM            | ✔️     |                                                                        |
| Clock Prescale    | ✔️     |                                                                        |
| ADC               | ✔️     | Used by analogRead()                                                   |
| Analog Comparator | ❌     |                                                                        |
| GDB Debugging     | ✔️     | See the [GDB Debugging Guide](../gdb-debugging)                        |

说明:
✔️ 可仿真
🟡 可以仿真, 但是要看注意
❌ 不支持

如果您需要任何缺失的功能，请 [open an issue on the AVR8js repo ](https://github.com/wokwi/avr8js/issues/new)或者 [reach out on Discord](https://wokwi.com/discord).。

### 串行监视器

您可以使用串行监视器从Arduino代码接收信息，例如调试打印。您还可以使用它向代码发送信息，例如文本命令。

有关更多信息和代码示例，请查看[the Serial Monitor guide](../guides/serial-monitor).。它还解释了如何配置串行监视器，例如设置行尾字符。

### 库

该模拟器支持许多流行的Arduino库。有关完整列表，请参阅 [Libraries guides](../guides/libraries)。

## 仿真案例

- [Arduino Blink](https://wokwi.com/arduino/libraries/demo/blink)
