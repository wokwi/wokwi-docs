---
title: wokwi-lcd1602 Reference
sidebar_label: wokwi-lcd1602
---

import FontA00p1 from './wokwi-lcd1602-fonta00-1.svg';
import FontA00p2 from './wokwi-lcd1602-fonta00-2.svg';

An LCD with 2 lines, 16 characters per line.

<wokwi-lcd1602 text=" wokwi-lcd1602" />

## Pin names

The LCD1602 comes in 2 possible configurations: I2C configuration and standard configuration. The I2C configuration is usually simpler to use.

The following table summarizes the key differences:

| Property                   | Standard      | I2C               |
| -------------------------- | ------------- | ----------------- |
| Number of Arduino I/O pins | 7\*           | 2 (SCL)/SDA       |
| Backlight control          | Optional      | Yes               |
| Library name               | LiquidCrystal | LiquidCrystal_I2C |

\* Controlling the backlight requires another I/O pin.

You can select the desired configuration by setting the `pins` attribute. Set it to "i2c" for the I2C configuration, or "full" for the standard configuration (the default).

### I2C configuration

| Name | Description    |
| ---- | -------------- |
| GND  | Ground         |
| VCC  | Supply voltage |
| SDA  | I2C data line  |
| SCL  | I2C clock line |

The default I2C address of the LCD1602 module is 0x27.

Note: The I2C configuration simulates a PCF8574T chip that controls the LCD module. Normally, you wouldn't have to worry about this as the LiquidCrystal_I2C library takes care of the communication with the chip.

### Standard configuration

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

\* These are just example pin numbers, they are not mandatory. You need can use any digital/analog pin, but make sure to update the code accordingly!  
† Normally, you'd configure the chip in 4-bit parallel mode, which means you only need to connect RS, E, D4, D5, D6, and D7 pins to Arduino.  
‡ If you need to control the backlight, connect the anode to an I/O pin. Otherwise, connect it to the supply voltage. For a real circuit, you'd also
need a current-limiting resistor, but you may skip it in the simulation environment.

#### Arduino code example

When you initialize the LiquidCrystal library in your code, you need to pass the pin numbers to the constructor.

The following example uses pin numbers that match the table above:

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

You can also [try this example on Wokwi](https://wokwi.com/projects/294342288335700490).

## Attributes

| Name        | Description                        | Default value |
| ----------- | ---------------------------------- | ------------- |
| pins        | Set to "i2c" for I2C configuration | "full"        |
| i2c-address | I2C address (I2C configuration)    | "0x27"        |
| color       | The color of the text              | "black"       |
| background  | The color of the backlight         | "green"       |

### Examples

| Result                                                                | Attrs                                        |
| --------------------------------------------------------------------- | -------------------------------------------- |
| <wokwi-lcd1602 text="Hello World!" />                                 | `{ }`                                        |
| <wokwi-lcd1602 text="Hello World!" pins="i2c" />                      | `{ "pins": "i2c" }`                          |
| <wokwi-lcd1602 background="blue" color="white" text="Hello World!" /> | `{ "background": "blue", "color": "white" }` |

## Font

The LCD1602 uses the [Hitachi HD44780 LCD Controller chip](https://en.wikipedia.org/wiki/Hitachi_HD44780_LCD_controller).
The chip comes with a built-in font, as well as the ability to define up to 8 custom characters.

There are two versions of the chip's ROM with two different fonts: HD44780UA00, which includes Japanese katakana characters,
and HD44780UA02, which includes Western European characters.

Wokwi simulates the HD44780UA00 variant. It has a total of 256 characters:

| Range   | Description                                         |
| ------- | --------------------------------------------------- |
| 0-7     | [User defined characters](#user-defined-characters) |
| 8-31    | Blank characters                                    |
| 32-127  | Standard ASCII characters                           |
| 128-160 | Blank characters                                    |
| 161-255 | Japanese katankana and symbols                      |

ASCII character glyphs:

<FontA00p1 className="svg-font-table" />

High characters glyphs:

<FontA00p2 className="svg-font-table"  />

Note: if you need the HD44780UA02 font variant, please [open a feature request](https://github.com/wokwi/wokwi-features/issues/new) or
reach out on [Discord](https://wokwi.com/discord).

### User defined characters

You can define custom characters using the [createChar](https://www.arduino.cc/en/Reference/LiquidCrystalCreateChar) method of the LiquidCrsytal (or LiquidCrystal_I2C) library. The custom characters are the first 8 characters in the font, with indexes from 0 to 7. You can print them to the LCD
display using the `write()` method, or using C string escape sequence, such as `"\x07"`.

The following code example defines a heart shaped character, stores it at index 3, and then uses it to display the text "I (heart) Arduino":

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

You can also [run this example on Wokwi](https://wokwi.com/projects/294395602645549578).

You can modify any custom character while the program is running. This method is useful for
creating simple animations. For example, change `loop()` in the code sample above to slowly
reveal the heart icon, line-by-line:

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

## Simulator examples

- [LiquidCrystal Hello World](https://wokwi.com/projects/294342288335700490)
- [LiquidCrystal I2C Hello World](https://wokwi.com/arduino/libraries/LiquidCrystal_I2C/HelloWorld)
- [LiquidCystal Custom characters](https://wokwi.com/projects/294395602645549578)
- [Electronic Safe](https://wokwi.com/arduino/libraries/demo/electronic-safe)
- [DS1307 Clock](https://wokwi.com/projects/298783436806554120)
