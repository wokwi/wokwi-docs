---
title: wokwi-lcd1602显示模块参考
sidebar_label: wokwi-lcd1602显示模块参考
---

import FontA00p1 from './wokwi-lcd1602-fonta00-1.svg';
import FontA00p2 from './wokwi-lcd1602-fonta00-2.svg';

带有2行的液晶显示器，每行16个字符。

<wokwi-lcd1602 text=" wokwi-lcd1602" />

## 引脚名称

LCD1602有两种可能的配置：I2C配置和标准配置。I2C配置通常使用起来更简单。

下表总结了主要差异：

| Property                   | Standard      | I2C               |
| -------------------------- | ------------- | ----------------- |
| Number of Arduino I/O pins | 7\*           | 2 (SCL)/SDA       |
| 背光控制                   | Optional      | Yes               |
| 库名称                     | LiquidCrystal | LiquidCrystal_I2C |

\* 控制背光灯需要另一个I/O引脚。

您可以通过设置`pins`属性来选择所需的配置。对于I2C配置，将其设置为“i2c”，对于标准配置（默认配置）将其设置为“full”。

### I2C配置

| Name | Description    |
| ---- | -------------- |
| GND  | Ground         |
| VCC  | Supply voltage |
| SDA  | I2C data line  |
| SCL  | I2C clock line |

LCD1602模块的默认I2C地址为0x27。

注：I2C 配置模拟了控制 LCD 模块的 PCF8574T 芯片。通常，您不必担心这一点，因为LiquidCrystal_I2C库负责与芯片的通信。

### 标准配置

| Name | Description                         | Arduino Pin\* |
| ---- | ----------------------------------- | ------------- |
| VSS  | Ground                              | GND.1         |
| VDD  | Supply voltage                      | 5V            |
| V0   | Contrast adjustment (not simulated) |               |
| RS   | Command/Data select                 | 12            |
| RW   | Read/Write. Connect to Ground.      | GND.1         |
| E    | Enable                              | 11            |
| D0   | Parallel data 0 (optional) †        |               |
| D1   | Parallel data 1 (optional) †        |               |
| D2   | Parallel data 2 (optional) †        |               |
| D3   | Parallel data 3 (optional) †        |               |
| D4   | Parallel data 4                     | 10            |
| D5   | Parallel data 5                     | 9             |
| D6   | Parallel data 6                     | 8             |
| D7   | Parallel data 7                     | 7             |
| A    | Backlight anode                     | 5V / 6‡       |
| K    | Backlight cathode                   | GND.1         |

\* 这些只是示例引脚编号，它们不是强制性的。您需要使用任何其他数字/模拟引脚，但请务必相应地更新代码！  
† 通常，您将在4位并行模式下配置芯片，这意味着您只需要将RS、E、D4、D5、D6和D7引脚连接到Arduino。 
‡ 如果您需要控制背光灯，请将阳极连接到I/O引脚。否则，将其连接到电源电压。对于一个真正的电路，你也会需要一个限流电阻，但您可以在模拟环境中不接它。

#### Arduino代码例子

当您在代码中初始化LiquidCrystal库时，您需要将引脚号传递给构造函数。

以下示例使用与上表匹配的引脚编号：

```cpp
#include <LiquidCrystal.h>

LiquidCrystal lcd(12, 11, 10, 9, 8, 7);

void setup() {
  lcd.begin(16, 2);
  // you can now interact with the LCD, e.g.:
  lcd.print("Hello World!");
}

void loop() {
  // ...
}
```

你可以 [try this example on Wokwi](https://wokwi.com/projects/294342288335700490).

## 属性

| Name        | Description              | Default value |
| ----------- | ------------------------ | ------------- |
| pins        | 对于I2C配置，设置为“i2c” | "full"        |
| i2c-address | I2C地址（I2C配置）       | "0x27"        |
| color       | 文本的颜色               | "black"       |
| background  | 背光颜色                 | "green"       |

### 示例

| Result                                                                | Attrs                                        |
| --------------------------------------------------------------------- | -------------------------------------------- |
| <wokwi-lcd1602 text="Hello World!" />                                 | `{ }`                                        |
| <wokwi-lcd1602 text="Hello World!" pins="i2c" />                      | `{ "pins": "i2c" }`                          |
| <wokwi-lcd1602 background="blue" color="white" text="Hello World!" /> | `{ "background": "blue", "color": "white" }` |

## 字体

LCD1602使用[Hitachi HD44780 LCD Controller chip](https://en.wikipedia.org/wiki/Hitachi_HD44780_LCD_controller)。

该芯片内置字体，并能够定义多达8个自定义字符。芯片的ROM有两个版本，有两种不同的字体：HD44780UA00，其中包括日语片假名字符，和HD44780UA02，包括西欧字符。

Wokwi模拟了HD44780UA00变体。它共有256个字符：

| Range   | Description                                         |
| ------- | --------------------------------------------------- |
| 0-7     | [User defined characters](#user-defined-characters) |
| 8-31    | Blank characters                                    |
| 32-127  | Standard ASCII characters                           |
| 128-160 | Blank characters                                    |
| 161-255 | Japanese katankana and symbols                      |

ASCII字符字形:

<FontA00p1 className="svg-font-table" />

其他字符字形:

<FontA00p2 className="svg-font-table"  />

注意：如果您需要HD44780UA02字体变体，请[open a feature request](https://github.com/wokwi/wokwi-features/issues/new) 或者联系 [Discord](https://wokwi.com/discord).。

### 用户定义的字符

您可以使用LiquidCrsytal（或LiquidCrystal_I2C）库的 [createChar](https://www.arduino.cc/en/Reference/LiquidCrystalCreateChar) 方法定义自定义字符。自定义字符是字体的前8个字符，索引从0到7。你可以把它们打印到LCD上使用`write()`方法或使用C字符串转义序列显示，例如`"\x07"`。

以下代码示例定义了一个心形字符，将其存储在索引3，然后使用它来显示文本“I (heart) Arduino”：

```cpp
#include <LiquidCrystal.h>

LiquidCrystal lcd(12, 11, 10, 9, 8, 7);

uint8_t heart[8] = {
  0b00000,
  0b01010,
  0b11111,
  0b11111,
  0b11111,
  0b01110,
  0b00100,
  0b00000,
};

void setup() {
  lcd.createChar(3, heart);
  lcd.begin(16, 2);
  lcd.print("  I \x03 Arduino");
}

void loop() { }
```

你也可以 [run this example on Wokwi](https://wokwi.com/projects/294395602645549578).

您可以在程序运行时修改任何自定义字符。这种方法对创建简单的动画。例如，将上面代码示例中`loop()`更改为缓慢逐行显示心形图标：

```cpp
void loop() {
  uint8_t heart2[8] = {0};
  for (int i = 0; i < 8; i++) {
    heart2[i] = heart[i];
    lcd.createChar(3, heart2);
    delay(100);
  }
  delay(500);
}
```

## 仿真实例

- [LiquidCrystal Hello World](https://wokwi.com/projects/294342288335700490)
- [LiquidCrystal I2C Hello World](https://wokwi.com/arduino/libraries/LiquidCrystal_I2C/HelloWorld)
- [LiquidCystal Custom characters](https://wokwi.com/projects/294395602645549578)
- [Electronic Safe](https://wokwi.com/arduino/libraries/demo/electronic-safe)
- [DS1307 Clock](https://wokwi.com/projects/298783436806554120)
