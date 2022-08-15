---
title: wokwi-pi-pico参考
sidebar_label: wokwi-pi-pico
---

Raspberry Pi Pico，RP2040微控制器板，具有双核ARM Cortex-M0+处理器，264k内部RAM，灵活可编程I/O（PIO）功能。

![Raspberry Pi Pico](wokwi-pi-pico.svg)

## 引脚名称

引脚GP0到GP22是数字GPIO引脚。引脚GP26、GP27和GP28是具有模拟输入功能的数字GPIO引脚。

| Name            | Description                 | Analog input channel |
| --------------- | --------------------------- | -------------------- |
| GP0 … GP22      | Digital GPIO pins (0 to 22) |                      |
| GP26            | Digital GPIO pin 26         | 0                    |
| GP27            | Digital GPIO pin 27         | 1                    |
| GP28            | Digital GPIO pin 28         | 2                    |
| GND.1 … GND.8   | Ground pins \*              |                      |
| VSYS, VBUS, 3V3 | Positive power supply       |                      |
| TP4 †           | Digital GPIO pin 23         |                      |
| TP5 †           | Digital GPIO pin 25 + LED   |                      |

\* 接地引脚的物理引脚编号为3、8、13、18、23、28、33和38。  
† 这些引脚不会出现在可视化图表编辑器中，但您可以在[diagram.json](../diagram-format)文件中使用它们。

引脚3V3_EN / RUN / ADC_VREF在模拟中不可用，因此从表中删除。

### 板载led

Raspberry Pi Pico有一个板载LED，连接到GPIO PIN 25。当引脚被推高时，LED会点亮。

您还可以使用`LED_BUILTIN`常量在Arduino代码中引用LED：

```cpp
pinMode(LED_BUILTIN, OUTPUT);
digitalWrite(LED_BUILTIN, HIGH);
```

有关完整的代码示例，请参阅[Blink](https://wokwi.com/projects/297755575592157709) 。

## 仿真功能

Raspberry Pi Pico使用[RP2040js Library](https://github.com/wokwi/rp2040js) 模拟。本表总结了仿真功能的现状：

| 外设      | 状态 | 注意                                                                 |
| ----------------- | ------ | ----------------------------------------------------------------------- |
| Processor core    | ✔️     | Only a single core is simulated                                         |
| GPIO              | ✔️     |                                                                         |
| PIO               | ✔️     | PIO Debugger available                                                  |
| USB               | 🟡     | USB CDC (Serial) supported, see [Serial Monitor](#serial-monitor) below |
| UART              | ✔️     |                                                                         |
| I2C               | ✔️     | Master mode only                                                        |
| SPI               | ✔️     | Master mode only                                                        |
| PWM               | ✔️     |                                                                         |
| DMA               | ✔️     | Only for the PIO peripheral                                             |
| Timer             | ✔️     | Pausing the timer not implemented yet                                   |
| ARM SysTick Timer | 🟡     | Partial implementation                                                  |
| Watchdog          | ❌     |                                                                         |
| RTC               | ❌     |                                                                         |
| ADC + Temp sensor | ✔️     | Temperature sensor always reads 0                                       |
| SSI               | 🟡     | Just the minimum to make the bootloader happy                           |
| GDB Debugging     | ✔️     | See the [GDB Debugging guide](../gdb-debugging)                         |

说明:
✔️ 可仿真
🟡 可以仿真, 但是要看注意
❌ 不支持

### Arduino核心

Arduino核心提供内置的Arduino函数，如`pinMode()`和`digitalRead()`，以及一组标准Arduino库，如Servo、Wire和SPI。

在为Raspberry Pi Pico编译代码时，您可以在两个不同的核心之间进行选择：

- 基于Mbed OS的[official Pi Pico core](https://github.com/arduino/ArduinoCore-mbed)。这是默认值。

- [The community maintained Pi Pico Arduino Core](https://github.com/earlephilhower/arduino-pico)，建立在[the Pi Pico SDK](https://github.com/raspberrypi/pico-sdk)之上。

您可以在 [this GitHub comment](https://github.com/earlephilhower/arduino-pico/issues/117#issuecomment-830356795)中了解这两个核心之间的主要区别。

要选择核心，请设置`wokwi-pi-pico`部分的“env”属性。对于官方Arduino核心，请使用“arduino-core”值。对于社区维护的核心，将“env”设置为“arduino-community”。例如：

```json
  "parts": [
    {
      "type": "wokwi-pi-pico",
      "id": "pico",
      "attrs": {
        "env": "arduino-community"
      }
      …
    },
    …
  ]
```

### 串行监视器

您可以使用串行监视器从Pi Pico上运行的代码接收信息，例如调试打印。默认情况下，串行监视器通过USB与Pi Pico通讯。

设置USB连接可能需要一些时间，并且在USB设置时间将丢失打印的消息。因此，建议告诉`setup()`等待串行监视器连接后再打印任何东西：

```cpp
void setup() {
  Serial.begin(115200);
  while (!Serial) {
    delay(10); // wait for serial port to connect. Needed for native USB
  }
  // Now you can safely print message:
  Serial.println("Hello, Serial Monitor!");
}
```

### UART上的串行监视器

串行监视器还可以通过物理UART接口与Pi Pico通信。要配置Raspberry Pi Pico和串行监视器之间的UART通信，请将以下连接添加到您的[diagram.json](../diagram-format#connections) 文件中：

```json
  "connections": [
    [ "$serialMonitor:RX", "pico:GP0", "", [] ],
    [ "$serialMonitor:TX", "pico:GP1", "", [] ],
    …
  ]
```

该示例假设Pi Pico是用“pico”的ID定义的，例如

```json
  "parts": [
    {
      "type": "wokwi-pi-pico",
      "id": "pico",
      …
    },
    …
  ]
```

在代码中使用`Serial1` 对象：使用`Serial1.begin(115200)`初始化端口，然后使用`Serial1.println()`打印消息。例如：

```cpp
void setup() {
  Serial1.begin(115200);
  Serial1.println("Hello, world!");
}

void loop() { }
```

有关完整示例，请查看[Pi Pico Serial Monitor over UART Example](https://wokwi.com/projects/297755360074138125)。

## 输出UF2二进制文件

您可以将程序从模拟器直接上传到物理Raspberry Pi Pico板中。这些步骤是：

1. 在Wokwi代码编辑器中按“F1”，然后选择“下载UF2二进制文件”。下载应该在几秒钟内开始。

2. 在引导加载程序模式下启动Pi Pico。您可以通过按下引导加载程序按钮来做到这一点，同时将Pi Pico插入计算机的USB端口。

3. 您应该会在电脑上看到一个名为“RPI-RP2”的新驱动器。将您下载的UF2文件复制到该驱动器中。

## MicroPython支持

Raspberry Pi Pico支持MicroPython，您可以在Wokwi中运行MicroPython项目。有关更多信息，请查看[MicroPython Guide](../guides/micropython)。

## 仿真实例

- [Pi Pico and LCD1602](https://wokwi.com/projects/297323005822894602)
- [Pi Pico Traffic Light](https://wokwi.com/projects/297322571959894536)
- [Pi Pico C++ SDK Blink](https://wokwi.com/projects/298013072042230285)
- [Pi Pico C++ SDK 7-Segment Example](https://wokwi.com/projects/298014884249993738)
