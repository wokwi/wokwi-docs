---
title: wokwi-lcd1602 Reference
sidebar_label: wokwi-lcd1602
---

An LCD display with 2 lines, 16 characters per line.

<wokwi-lcd1602 />

## Pin names

The LCD1602 comes in 2 possible configurations: I2C configuration and standard configuration. The I2C configuration is usually simpler to use.

The following table summarizes the key differences:

| Property                   | Standard      | I2C               |
| -------------------------- | ------------- | ----------------- |
| Number of Arduino I/O pins | 7\*           | 2 (SCL)/SDA       |
| Backlight control          | Optional      | Yes               |
| Library name               | LiquidCrystal | LiquidCrystal_I2C |

\* Controlling the backlight requires another I/O pin.

You can select the desired configuration by setting the `pins` attribute. Set it to "i2c" for the I2C configuration, or to "full" for the standard configuration (the default).

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
† Normally, you'd configure the chip in 4-bit parellel mode, which means you only need to connect RS, E, D4, D5, D6, and D7 pins to Arduino.  
‡ If you need to control the backlight, connect the anode to an I/O pin. Otherwise, connect it to the supply voltage. For a real circuit you'd also
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

You can also [try this example on Wokwi](https://wokwi.com/arduino/projects/294342288335700490).

## Attributes

| Name        | Description                        | Default value |
| ----------- | ---------------------------------- | ------------- |
| pins        | Set to "i2c" for I2C configuration | "full"        |
| i2c-address | I2C address (I2C configuration)    | "0x27"        |
| color       | The color of the text              | "black"       |
| background  | The color of the backlight         | "green"       |

### Defining a keyboard shortcut

You can use the "key" attribute to define a keyboard key that will control the button.
The key is only active when the simulation is running and the diagram has focus.

For example, suppose you defined "key" to "Q". Then, when you run the simulation,
pressing _Q_ in the keyboard will press the push button. The button will be kept
in pressed state as long as you keep pressing _Q_, and once you release the key,
the button will also be released.

You can define any alphanumerical keyboard shortcut (so English letters and numbers), and for letters,
the value of "key" is case insensitive (so "q" and "Q" mean the same).

You can also target some special keys, such as "Escape", "ArrowUp", "F8", " " (space), or "PageDown", but some keys
could be blocked by the browser (e.g. "F5" that refreshes the page).
The full list of key names can be found [here](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values).
Note the the special key names are case sensitive - so "Escape" will work, "escape" won't.

### Examples

| Result                                                                | Attrs                                        |
| --------------------------------------------------------------------- | -------------------------------------------- |
| <wokwi-lcd1602 text="Hello World!" />                                 | `{ }`                                        |
| <wokwi-lcd1602 text="Hello World!" pins="i2c" />                      | `{ "pins": "i2c" }`                          |
| <wokwi-lcd1602 background="blue" color="white" text="Hello World!" /> | `{ "background": "blue", "color": "white" }` |

## Simulator examples

- [LiquidCrystal Hello World](https://wokwi.com/arduino/projects/294342288335700490)
- [LiquidCrystal I2C Hello World](https://wokwi.com/arduino/libraries/LiquidCrystal_I2C/HelloWorld)
- [Electronic Safe](https://wokwi.com/arduino/libraries/demo/electronic-safe)
- [DS1307 Clock](https://wokwi.com/arduino/projects/286806448514531852)
