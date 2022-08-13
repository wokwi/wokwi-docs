---
title: wokwi-membrane-keypad参考
sidebar_label: wokwi-membrane-keypad参考
---

标准的4x4键盘。非常适合数字输入，例如安全密码。

<wokwi-membrane-keypad connector="true" />

## 引脚名称

| Name | Description        | Example pin\* |
| ---- | ------------------ | ------------- |
| R1   | Row 1 (top row)    | 9             |
| R2   | Row 2              | 8             |
| R3   | Row 3              | 7             |
| R4   | Row 4 (bottom row) | 6             |
| C1   | Column 1 (left)    | 5             |
| C2   | Column 2           | 4             |
| C3   | Column 3           | 3             |
| C4   | Column 4 (right)   | 2             |

\* 这些只是下面代码示例中使用的Arduino Uno引脚编号。您可以使用任何输入数字输入引脚。

## 属性

| Name    | Description      | Default value                                                |
| ------- | ---------------- | ------------------------------------------------------------ |
| columns | 列数: "3" or "4" | "4"                                                          |
| keys    | 按键的标签       | ["1", "2", "3", "A", "4", "5", "6", "B", "7", "8", "9", "C", "*", "0", "#", "D"] |

您可以根据需要更改关键标签。数组中的前四个项目设置了第一行键的标签，下一个四个项目设置第二行键的标签等。支持Unicode字符，因此您可以使用特殊字符，重音字母，上标/下标（例如Xn或A1），甚至表情符号。

#### Arduino代码示例

下面的示例使用Arduino的键盘库。在`keys` 数组中设置的键名定义 `keypad.getKey()` 返回的值。他们不必与实际的关键标签相匹配（但如果它们不这样做，可能会令人困惑），并且它们必须包含一个ASCII字符。

```cpp
#include <Keypad.h>

const uint8_t ROWS = 4;
const uint8_t COLS = 4;
char keys[ROWS][COLS] = {
  { '1', '2', '3', 'A' },
  { '4', '5', '6', 'B' },
  { '7', '8', '9', 'C' },
  { '*', '0', '#', 'D' }
};

uint8_t colPins[COLS] = { 5, 4, 3, 2 }; // Pins connected to C1, C2, C3, C4
uint8_t rowPins[ROWS] = { 9, 8, 7, 6 }; // Pins connected to R1, R2, R3, R4

Keypad keypad = Keypad(makeKeymap(keys), rowPins, colPins, ROWS, COLS);

void setup() {
  Serial.begin(9600);
}

void loop() {
  char key = keypad.getKey();

  if (key != NO_KEY) {
    Serial.println(key);
  }
}
```

你可以 [try this example on Wokwi](https://wokwi.com/projects/294980637632233994).

### 示例

| Result                                                                                                              | Attrs                                                                           |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| <wokwi-membrane-keypad connector="true" />                                                                          | `{ }`                                                                           |
| <wokwi-membrane-keypad connector="true" columns="3" />                                                              | `{ "columns": "3" }`                                                            |
| <wokwi-membrane-keypad connector="true" keys='["1","2","3","4","Q","W","E","R","A","S","D","F","Z","X","C","V"]' /> | `{ "keys": ["1","2","3","4","Q","W","E","R","A","S","D","F","Z","X","C","V"] }` |

## 仿真实例

- [Basic Keypad example](https://wokwi.com/projects/294980637632233994)
- [Arduino Calculator](https://wokwi.com/projects/276825819240727048)
- [Electronic Safe](https://wokwi.com/arduino/libraries/demo/electronic-safe)
