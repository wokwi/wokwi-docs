---
title: Interactive Diagram Editor
sidebar_label: Diagram Editor
---

The diagram editor provides an interactive way to edit your diagram: add components to the simulation and define the connections between them. It's a convenient alternative for editing the [diagram.json](../diagram-format) file directly.

:::info
The diagram editor is currently in beta, and we are improving it daily. The documentation may lag behind a bit.
:::

## Editing parts

### Adding a part

To add a new part, click on the purple "+" button at the top of the diagram editor.

You'll see a menu with a list of parts you can add. Choose a part to add it. The part will be added at position (0, 0), and then you can drag it to the desired position.

Not all parts are currently available through the menu. For example, MCU boards and micro-controllers such as the [Arduino Nano](../parts/wokwi-arduino-nano) or the [ATtiny85](../parts/wokwi-attiny85) are missing. You can still add these parts by [editing diagram.json](../diagram-format#parts) directly.

### Moving a part

Move a part by clicking on it and then dragging it with your mouse.

### Rotating a part

Rotate a part by clicking on it (to select it) and then pressing "R". The part will rotate 90 degrees clockwise. If you need to rotate a part by
a different amount (e.g. 45 degrees), you can achieve that by [editing diagram.json](../diagram-format#parts).

### Deleting a part

Delete a part by clicking on it (to select it) and then pressing the Delete button.

## Editing wires

### Creating a wire between two parts

To create a new wire between two parts, click on one of the pins that you'd like to connect. Then click on the second (target) pin. This will create the wire.

If you want the wire to go in a specific way, you can guide it by clicking where you want it to go after selecting the first pin.

To cancel a new wire (delete it without selecting a target pin) click the right mouse button or press Escape.

### Changing the color of a wire

The color of new wires is automatically determined by the function of the pin: wires starting from ground pins are black, and other wires are green.

The interactive editor does not support setting the color of wires. You can, however, change the color of any wire by editing [diagram.json](../diagram-format#connections)

### Deleting a wire

Delete a wire by clicking on it.

## Undo / Redo

Any change that you make in the interactive editor is also reflected in [diagram.json](../diagram-format).

The interactive editor **does not** have an undo feature at the moment (there's an [open issue for that](https://github.com/wokwi/wokwi-features/issues/77)).

You can still get complete Undo history if you select the "diagram.json" tab in the code editor. Any changes made in the interactive diagram editor
will immediately reflect in the code editor, and you'll be able to undo them by clicking on the code editor and then pressing Ctrl+Z.

Note that this only works if the "diagram.json" tab is active while you make changes. This is a temporary solution until we implement Undo in the interactive diagram editor.
