---
title: wokwi-potentiometer Reference
sidebar_label: wokwi-potentiometer
---

Knob-controlled variable resistor (linear potentiometer)

<wokwi-potentiometer />

The information below also applies to the [slide potentiometer](wokwi-slide-potentiometer).

## Pin names

| Name | Description                            |
| ---- | -------------------------------------- |
| GND  | Ground                                 |
| SIG  | Output, connect to an analog input pin |
| VCC  | Supply voltage                         |

Note: Wokwi does **not** support full analog simulation, so you will get the same
results even if you don't connect the GND/VCC pins.

This may change in the future, so it's a good idea to connect GND/VCC anyway.

## Attributes

| Name  | Description                                            | Default value |
| ----- | ------------------------------------------------------ | ------------- |
| value | Initial value of the potentiometer, between 0 and 1023 | "0"           |

## Using the Potentiometer in Arduino

Connect the SIG pin to one of Arduino's analog input pins (A0, A1, …). Then use the `analogRead()` function to read the current value of the potentiometer.

The following code example assumes that the potentiometer is connected to A0.
It will read and print the current value of the potentiometer every 100 milliseconds:

```cpp
void setup() {
  Serial.begin(115200);
  pinMode(A0, INPUT);
}

void loop() {
  int value = analogRead(A0);
  Serial.println(value);
  delay(100);
}
```

You can [run the example on Wokwi](https://wokwi.com/projects/298685457758159369). Observe how the plotter graph changes as you move the potentiometer's knob.

## Keyboard control

You can control the potentiometer with the keyboard:

- Left / Right - fine movement
- Page Up / Page Down - coarse movement
- Home / End - move to the start (0) or the end (1023) of the range

You'll need to click on the potentiometer before using these keyboard shortcuts.

## Simulator examples

- [Knob](https://wokwi.com/arduino/libraries/Servo/Knob) - Control a [servo](wokwi-servo) with a potentiometer
- [Plot](https://wokwi.com/projects/298685457758159369) - Plot potentiometer values in the Serial Plotter
- [Block shooter](https://wokwi.com/projects/291960996581343753) - Breakout style game
