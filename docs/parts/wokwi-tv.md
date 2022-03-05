---
title: wokwi-tv Reference
sidebar_label: wokwi-tv
---

Black and White analog PAL TV screen.

![Wokwi TV](wokwi-tv.svg)

## Pin names

| Name | Description            |
| ---- | ---------------------- |
| IN   | Data (image) signal    |
| SYNC | Synchronization signal |
| GND  | Ground                 |

## Operation

The resolution of the simulated PAL TV is 768x576 pixels, and the aspect ratio is 4:3.

PAL video uses analog signal. The signal is carried over the air or using a cable. One of the common cabling standard is Composite video, which combines the pixel data together with the synchronization signals and the color data on a single wire.

Wokwi TV does not support color information, and separates the pixel data from the synchronization signals. The separation of the signals makes it easier to generate the image using a digital microcontroller.

Use the _IN_ pin for the pixel data, and the _SYNC_ pin for the synchronization pulses. The Arduino [TVout](https://github.com/pkendall64/arduino-tvout) library can drive these signals for you.

### Signal timing

The simulator mimics the standard PAL timings for the signals at 25 frames per second. The frame are interlaced: each frame is divided into two parts, called "fields". The first field contains the odd lines, and the second field contains the even lines. Each frame takes 40ms, and each field takes 20ms (half the duration of a frame).

Each frame is divided into 625 time slots of 64uS. Each time slot contains the pixel data for a single line, but some of these lines are empty - their only use is for synchronization.

The simulator expects every field (half-frame) to start with at least one ~30uS synchronization pulse. This means you have to hold the SYNC line low for about 30uS. The PAL standard dictates a specific series of synchronization pulses,
but the simulator is pretty lax: it's happy even with a single ~30uS pulse.

Each line should also start with a short, 4uS synchronization pulse. Keep the DATA signal low during these synchronization pulses.

The [Logic Analyzer](../guides/logic-analyzer) is very helpful in debugging the PAL TV signals.

## Physical TV Connection

The PAL standard uses an analog signal. When running in the simulator, you don't have to worry about this, but if you want to run your game on a physical TV, then you'd need to generate the following voltage levels:

- 0V for sync signals (HSYNC/VSYNC)
- 0.3V for black pixels
- 1V for white pixels

The good news is: you only need a few resistors to convert the digital signal (that works in the simulator) to an analog one.

Composite video usually uses RCA connectors. You'd need the make the following connections to the central pin of the RCA connector:

1. SYNC pin through a 1KΩ\* resistor
2. DATA pin through a 470Ω\* resistor
3. Optionally, another 75Ω that goes to the ground (the resistor is usually already built into the TV receiver circuit).

\* if you use a 3.3V board (such as the [Raspberry Pi Pico](wokwi-pi-pico)), use 470Ω for SYNC and 270Ω for DATA.

Also make sure you also connect the ground to the ring of the RCA connector.

How does this work? We implement a simple voltage divider to generate the required voltages, based on the two digital pin levels:

| SYNC      | DATA      | Output Voltage | Calculation                                   |
| --------- | --------- | -------------- | --------------------------------------------- |
| High (5V) | High (5V) | 0.95           | (5\*75)/((1/(1/1000+1/470))+75)               |
| High (5V) | Low       | 0.304          | (5\*(1/(1/75+1/470)))/(1000+(1/(1/75+1/470))) |
| Low       | Low       | 0              | 0                                             |

As you can see, driving both SYNC/DATA high results in a about 1V, the white pixel level, driving SYNC high and DATA low results in about 0.3V, the black pixel level, and driving both pins low results in 0 volts, that's the sync level.

In theory, using this setup and driving DATA high while SYNC is low, you can also generate a gray pixel level (~0.65V), but this is not currently supported by the simulator.

## Arduino code example

A simple example that draws a circle using the TVout library:

```cpp
// Connect SYNC to Arduino pin 9, IN to Arduino pin 7

#include <TVout.h>

TVout TV;

void setup() {
  TV.begin(PAL, 120, 96);
  TV.clear_screen();
  TV.draw_circle(60, 48, 32, WHITE);
}

void loop() {
}
```

## Simulator examples

- [TVout demo reel](https://wokwi.com/projects/301776607665717769)
- [Flappy Cat game](https://wokwi.com/projects/286182458416693768) - Use the blue button to jump
- [Arduino Pong for Wokwi TV](https://wokwi.com/projects/290059909639176713)
- [Conway's Game of Life](https://wokwi.com/projects/299605461742649864)
