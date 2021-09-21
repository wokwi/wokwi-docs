---
title: wokwi-logic-analyzer Reference
sidebar_label: wokwi-logic-analyzer
---

8-Channel Digital Logic Analyzer

![Logic Analyzer](wokwi-logic-analyzer.svg)

## Pin names

Pins D0 to D7 are connected to the input channels of the logic analyzer. There's also a GND pin, which should be connected to the digital ground.

## Attributes

| Name       | Description                                       | Default value |
| ---------- | ------------------------------------------------- | ------------- |
| bufferSize | Maximum number of samples to collect              | "1000000"     |
| filename   | Name of the recording file, without the extension | "wokwi-logic" |

### Sample buffer

The logic analyzer uses a buffer to store the recorded pin data. Each pin level change (e.g. low to high) occupies one slot in the buffer. The simulator allocates
the memory for the buffer in advance, to ensure fast simulation.

You can choose the size of the buffer by setting the `bufferSize` attribute. Each slot in the buffer uses 9 bytes of RAM. Thus, the default buffer size of 1 million
samples will use about 9 MB of RAM. Allocating a large buffer may strain your browser.

The logic analyzer displays the number of samples captured while the simulation is running. You can use this number to estimate the required buffer size.

## Viewing the data

When you stop the simulation, the logic analyzer downloads a file with the recorded samples to your computer. The recording file uses the standard [Value Change Dump (VCD)](https://en.wikipedia.org/wiki/Value_change_dump) format. The file is called "wokwi-logic.vcd" by default, but you can configure the name using the `filename` attribute.

To learn how to view the data, please visit our [Logic Analyzer Guide](../guides/logic-analyzer#using-the-logic-analyzer).
