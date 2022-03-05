---
title: wokwi-nlsf595 Reference
sidebar_label: wokwi-nlsf595
---

Serial (SPI) Tri-Color LED Driver

![NLSF595](wokwi-nlsf595.svg)

Use the NLSF595 shift register to connect power-hungry RGB LEDs to your microcontroller. A single unit can control two RGB LEDs, and a chain of two units can control up to five RGB LEDs.

## Pin names

| Pin   | Description                                            |
| ----- | ------------------------------------------------------ |
| SI    | Serial input                                           |
| SCK   | Serial clock                                           |
| RCK   | Storage (latch) pin                                    |
| OE    | Output enable, active low. Connect to GND if not used. |
| QA…QH | Parallel output                                        |
| SQH   | Serial output\*                                        |
| SCLR  | Reset (clear), active low. Connect to VCC if not used  |
| GND   | Ground                                                 |
| VCC   | Supply voltage                                         |

\* Use the Q7S to chain multiple NLSF595 units together. Connect SQH to the SI pin of the next NLSF595 chip in chain.

## Using the NLSF595

You will need to connect at least 3 pins to your microcontroller: SI, SCK, and RCK.

The OE pin can be used to disable the output of the shift register. If you need that functionality,
connect it to your microcontroller. Otherwise, connect it to the ground to permanently enable the output.

The output pins of the shift register, QA through QH, are usually connected to the input pins of common-anode [RGB LEDs](wokwi-rgb-led).

## Simulator examples

- [NLSF595 LED Driver with 2 RGB LEDs](https://wokwi.com/projects/315085666329297472)
