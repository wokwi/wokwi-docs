---
title: wokwi-a4988 Reference
sidebar_label: wokwi-a4988
---

A4988 Stepper Motor driver, for use with [wokwi-stepper-motor](./wokwi-stepper-motor)

![Wokwi A4988](wokwi-a4988.svg)

## Pin names

| Name   | Description                                      | Default \* |
| ------ | ------------------------------------------------ | ---------- |
| ENABLE | Enable pin, active low (pulled down)             | Low (0)    |
| MS1    | Microstep select pin 1                           | Low (0)    |
| MS2    | Microstep select pin 2                           | Low (0)    |
| MS3    | Microstep select pin 3                           | Low (0)    |
| RESET  | Reset pin, active low (floating)                 |            |
| SLEEP  | Sleep pin, active low (pulled up)                | High (1)   |
| STEP   | Step input, connect to microcontroller           |            |
| DIR    | Direction input: 0=counterclockwise, 1=clockwise |            |
| GND    | Ground                                           |            |
| VDD    | Logic power supply                               |            |
| 1B     | Connect to motor's A-                            |            |
| 1A     | Connect to motor's A+                            |            |
| 2A     | Connect to motor's B+                            |            |
| 2B     | Connect to motor's B-                            |            |
| VMOT   | Motor power supply, not used in the simulation   |            |

\* Digital pins with a default value of Low (0) are pulled-down, and pins with a default value of High (1) are pulled up. Pins without a default value are floating.

### Microstepping configuration

Standard stepper motors have 200 steps per revolution (the steps are spaces 1.8 degrees apart). The stepper driver supports microstepping: turning the motor less than one step for every pulse. Microstepping allows finer control of the motor movement.

Use the MS1/MS2/MS3 pins to select the microstepping configuration for the stepper driver:

| MS1 | MS2 | MS3 | Operation mode      | Degrees | Microsteps/revolution |
| --- | --- | --- | ------------------- | ------- | --------------------- |
| 0   | 0   | 0   | Full step (default) | 1.8     | 200                   |
| 1   | 0   | 0   | Half step           | 0.9     | 400                   |
| 0   | 1   | 0   | 1/4 step\*          | 0.45    | 800                   |
| 1   | 1   | 0   | 1/8 step\*          | 0.225   | 1600                  |
| 1   | 1   | 1   | 1/16 step\*         | 0.1125  | 3200                  |

\* These mode are not fully supported by [wokwi-stepper-motor](./wokwi-stepper-motor). When using these modes, the number of steps per revolution will still be correct, but the motor angle will only update every half step. For instance, if you use 1/8 step mode, the motor will move half a step (0.9 degrees) every four STEP pin pulses.

## Using the A4988 Stepper Driver

Connect the stepper motor pins to the 1B/1A/2A/2B pins of the driver. The RESET pin has to be HIGH, so you can connect it to the adjacent SLEEP pin (which is pulled HIGH by default). Alternatively, you can enable/disable the stepper motor driver from your code by connecting the RESET/SLEEP pins to your microcontroller.

Use the STEP pin to move the stepper motor. Every HIGH pulse on this pin will move the motor one step (or microstep, depending on the MS1/MS2/MS3 pins). When the DIR pin is HIGH, the stepper motor will move clockwise. When the DIR pin is LOW, the motor will move counterclockwise.

For example, if DIR, MS1 and MS3 are LOW, and MS2 is HIGH (1/4 step mode), then pulsing the STEP pin will move the motor 1/4 step (0.45 degrees) counterclockwise.

## Simulator Examples

- [A4988 control using a button + switch](https://wokwi.com/projects/327823888123691604) - press the green button to move the motor one step, and move the switch to change the direction.
- [4-Motor GCODE controller](https://wokwi.com/projects/327761195587076690) - Type "G00 X10 Y25" to move the first motor 10 steps, and the second one 25 steps.
