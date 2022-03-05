---
title: wokwi-ir-receiver Reference
sidebar_label: wokwi-ir-receiver
---

38KHz infrared receiver

<wokwi-ir-receiver />

## Pin names

| Name | Description      |
| ---- | ---------------- |
| GND  | Ground           |
| VCC  | Positive voltage |
| DAT  | Digital output   |

## Using the receiver

The receiver can be used in two ways:

1. Use the [IR Remote](wokwi-ir-remote) to send infrared commands.
2. Click on the receiver (while the simulation is running) to send arbitrary [NEC-encoded IR signals](https://exploreembedded.com/wiki/NEC_IR_Remote_Control_Interface_with_8051#NEC_Protocol). The user interface lets you specify both the address and the command fields on the NEC message.

To read the commands from your Arduino Code, you can use the [IRRemote](https://github.com/Arduino-IRremote/Arduino-IRremote) or [IRMP](https://github.com/ukw100/IRMP) libraries.

## Simulator examples

- [IRRemote + LCD Display](https://wokwi.com/projects/298934082074575369)
