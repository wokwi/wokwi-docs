---
title: wokwi-analog-joystick Reference
sidebar_label: wokwi-analog-joystick
---

Analog Joystick with two axes (horizontal/vertical) and an integrated push button.

<wokwi-analog-joystick />

## Pin names

| Name | Description                     |
| ---- | ------------------------------- |
| VCC  | Positive power supply           |
| VERT | Vertical axis output (analog)   |
| HORZ | Horizontal axis output (analog) |
| SEL  | Push button                     |
| GND  | Ground                          |

The idle position voltage is VCC/2. Moving the joystick along the vertical axis changes the voltage of the VERT pin from 0 volts (bottom) to VCC (top). Moving the joystick along the horizontal axis changes the voltages of the HORZ pin from 0 volts (right) to VCC (left).

The SEL pin is normally open (floating). Clicking on the center of the joystick shorts the SEL pin to ground. The joystick's button simulates [bouncing](wokwi-pushbutton#bouncing) by default. You can disable bouncing by setting the "bounce" attribute to "0".

## Attributes

| Name   | Description                    | Default value |
| ------ | ------------------------------ | ------------- |
| bounce | Set to "0" to disable bouncing | ""            |

## Operating the Joystick

You can operate the joystick with your mouse by moving cursor over the joystick. You'll see four arrows, corresponding to the four movement directions,
and a circle in the middle. Click on one of the arrows to move the joystick shaft in that direction, and on the circle in the middle to press the
joystick's push button (connected to the SEL pin).

To operate the joystick with the keyboard, first focus on it (using the tab key or by clicking on it with the mouse), then use the arrow keys to move
the shaft of the joystick, and the space key to press the joystick's push button (connected to the SEL pin). It's possible to combine multiple keys
at once, e.g. left arrow and top arrow, to move the shaft in a diagonal direction. You can also press on the space key while holding down the arrows
to press the joystick while moving the shaft.

Partial movement and touch control are not currently supported. We'd love to see them supported though - so if you are up to the task, there's [an open issue waiting for your love](https://github.com/wokwi/wokwi-elements/issues/62).

## Using the Joystick in Arduino

| Joystick Pin | Arduino Pins             | Example code pin |
| ------------ | ------------------------ | ---------------- |
| VCC          | 5V                       |                  |
| VERT         | any analog pin (A0...A5) | A0               |
| HORZ         | any analog pin (A0...A5) | A1               |
| SEL          | any digital pin          | 2                |
| GND          | GND                      |                  |

To use the Joystick in Arduino, connect the VERT and the HORZ pins to analog pins (A0...A6), and configure these pins as input. Read the joystick position using `analogRead()`.

```cpp
#define VERT_PIN A0
#define HORZ_PIN A1
#define SEL_PIN  2

void setup() {
  pinMode(VERT_PIN, INPUT);
  pinMode(HORZ_PIN, INPUT);
  pinMode(SEL_PIN, INPUT_PULLUP);
}

void loop() {
  int vert = analogRead(VERT_PIN);
  int horz = analogRead(HORZ_PIN);
  bool selPressed = digitalRead(SEL_PIN) == LOW;
  // horz goes from 0 (right) to 1023 (left)
  // vert goes from 0 (bottom) to 1023 (top)
  // selPressed is true is the joystick is pressed
}
```

### Joystick Position Table

The following table shows the different joystick position and the corresponding HORZ / VERT values, as returned by `analogRead()`:

| Position     | HORZ | VERT | Joystick                                                   |
| ------------ | ---- | ---- | ---------------------------------------------------------- |
| Top-Left     | 1023 | 1023 | <wokwi-analog-joystick xValue="1" yValue="1" disabled />   |
| Top          | 512  | 1023 | <wokwi-analog-joystick xValue="0" yValue="1" disabled />   |
| Top-Right    | 0    | 1023 | <wokwi-analog-joystick xValue="-1" yValue="1" disabled />  |
| Left         | 1023 | 512  | <wokwi-analog-joystick xValue="1" yValue="0" disabled />   |
| Center       | 512  | 512  | <wokwi-analog-joystick xValue="0" yValue="0" disabled />   |
| Right        | 0    | 512  | <wokwi-analog-joystick xValue="-1" yValue="0" disabled />  |
| Bottom-Left  | 1023 | 0    | <wokwi-analog-joystick xValue="1" yValue="-1" disabled />  |
| Bottom       | 512  | 0    | <wokwi-analog-joystick xValue="0" yValue="-1" disabled />  |
| Bottom-Right | 0    | 0    | <wokwi-analog-joystick xValue="-1" yValue="-1" disabled /> |

### Using map()

You can use the [map() function](https://www.arduino.cc/reference/en/language/functions/math/map/) to re-map the values to a different range.
For instance, `map(analogRead(HORZ_PIN), 0, 1023, -100, 100)` will return -100 when the joystick is all the way to the right, 0 when the joystick
in centered, and 100 when the joystick is all the way to the left.

## Simulator examples

- [Etch-a-sketch](https://wokwi.com/projects/296234816685212169) - A simple drawing game using a MAX7219 LED Dot Matrix
