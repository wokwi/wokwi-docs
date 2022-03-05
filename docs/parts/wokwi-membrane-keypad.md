---
title: wokwi-membrane-keypad Reference
sidebar_label: wokwi-membrane-keypad
---

A standard 4x4 keypad. Great for numeric input, e.g. security pin code.

<wokwi-membrane-keypad connector="true" />

## Pin names

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

\* These are just the Arduino Uno pin numbers used in the code example below. You can use any input digital input pin.

## Attributes

| Name    | Description                   | Default value                                                                    |
| ------- | ----------------------------- | -------------------------------------------------------------------------------- |
| columns | Number of columns: "3" or "4" | "4"                                                                              |
| keys    | Labels for the keys           | ["1", "2", "3", "A", "4", "5", "6", "B", "7", "8", "9", "C", "*", "0", "#", "D"] |

You can change the key labels as you like. The first four items in the array set the labels for the first row of keys, the next
four items set the labels for the second row of keys, etc. Unicode characters are supported, so you can use special characters,
accented letters, superscript/subscript (e.g. Xⁿ or A₁), and even emojis.

#### Arduino code example

The example below uses the Keypad library for Arduino. The key names set in the `keys` array
define the values that `keypad.getKey()` returns. They don't have to match the actual key labels
(but it can be confusing if they don't), and they must contain exactly one ASCII character.

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

You can also [try this example on Wokwi](https://wokwi.com/projects/294980637632233994).

### Examples

| Result                                                                                                              | Attrs                                                                           |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| <wokwi-membrane-keypad connector="true" />                                                                          | `{ }`                                                                           |
| <wokwi-membrane-keypad connector="true" columns="3" />                                                              | `{ "columns": "3" }`                                                            |
| <wokwi-membrane-keypad connector="true" keys='["1","2","3","4","Q","W","E","R","A","S","D","F","Z","X","C","V"]' /> | `{ "keys": ["1","2","3","4","Q","W","E","R","A","S","D","F","Z","X","C","V"] }` |

## Simulator examples

- [Basic Keypad example](https://wokwi.com/projects/294980637632233994)
- [Arduino Calculator](https://wokwi.com/projects/276825819240727048)
- [Electronic Safe](https://wokwi.com/arduino/libraries/demo/electronic-safe)
