---
title: Interactive Diagram Editor
sidebar_label: Diagram Editor
---

The diagram editor provides an interactive way to edit your diagram: add components to the simulation and define the connections between them. It's a convenient alternative for editing the [diagram.json](../diagram-format) file directly.

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

### Duplicating a part

Create a new copy of a part by clicking on it (to select it) and the pressing "D". You can press "D" several times to create multiple copies of the part.

### Deleting a part

Delete a part by clicking on it (to select it) and then pressing the Delete button.

### Selecting multiple parts

Select multiple parts by clicking on the parts with the Shift key pressed. You can then move all the parts together, duplicate them (using the "D" key), or delete them using the Delete key.

### Copying and pasting parts

You can copy the selects part(s) by using the standard Copy keyboard shortcut (Ctrl+C or ⌘+C). If you selected multiple parts, all the wires that connect the selected parts are also copied. The parts you copied are stored in your system clipboard in a JSON format, similar to the [diagram.json format](../diagram-format).

To paste the parts you copied, click on the diagram and press the standard Paste keyboard (Ctrl+V or ⌘+V). In some cases, the parts will be pasted outside of the currently visible diagram area, so you may have to zoom out in order to find them. This will be fixed in the future.

You can use the copy-paste feature between different project, and quickly copy several parts (including all the internal connections) at once.

## Editing wires

### Creating a wire between two parts

To create a new wire between two parts, click on one of the pins that you'd like to connect. Then click on the second (target) pin. This will create the wire.

If you want the wire to go in a specific way, you can guide it by clicking where you want it to go after selecting the first pin.

To cancel a new wire (delete it without selecting a target pin) click the right mouse button or press Escape.

### Changing the color of a wire

The color of new wires is automatically determined by the function of the pin: wires starting from ground pins are black, 5&nbsp;V pins are red, and other wires are green.

You can change the color of a wire by clicking on it, and then selecting a new color for the wire. You can also use the following keyboard shortcuts to set wire colors:

| Shortcut | Color     |
| -------- | --------- |
| 0        | Black     |
| 1        | Brown     |
| 2        | Red       |
| 3        | Orange    |
| 4        | Gold      |
| 5        | Green     |
| 6        | Blue      |
| 7        | Violet    |
| 8        | Gray      |
| 9        | White     |
| C        | Cyan      |
| L        | Limegreen |
| M        | Magenta   |
| P        | Purple    |
| Y        | Yellow    |

These keyboard shortcuts also work while drawing a new wire. You can also change wire colors by editing [diagram.json](../diagram-format#connections)

### Deleting a wire

Select a wire by clicking on it, and then click the trash icon on the wire (or press the Delete key). You can also delete a wire by double-clicking on it.

## Keyboard shortcuts

The following table summarizes the keyboard shortcuts:

| Key    | Function                                   |
| ------ | ------------------------------------------ |
| -      | Zoom out                                   |
| +      | Zoom in                                    |
| F      | Fit diagram to window (auto zoom)          |
| D      | Duplicate (copy) the selected part         |
| R      | Rotate the selected part                   |
| Delete | Delete the selected part / wire            |
| ?      | Open documentation for the selected part   |
| Escape | Cancel wire (in wiring mode)               |
| G      | Toggle the grid                            |
| Shift  | Toggle coarse grid snapping while dragging |
| Alt    | Toggle fine grid snapping while dragging   |
| Ctrl   | Toggle fine grid snapping while dragging   |
| Ctrl+Z | Undo \*                                    |
| Ctrl+Y | Redo \*                                    |

\* On Mac, use ⌘ instead of Ctrl

Firefox users: if the keyboard shortcuts don't work for you, please make sure that the "Search for text when you start typing" setting is disabled.

## Grid snapping

Activate the grid view by pressing "G" or by clicking the grid icon in the menu. This displays a grid and rulers. The coarse grid is 2.54&nbsp;mm or 0.1&nbsp;inches and the fine grid is 1.27&nbsp;mm or 0.05&nbsp;inches. Tick labels on the rulers show measurements in millimetres (the default), but you can switch to inches by clicking on the units in the top right corner.

The Shift key temporarily toggles the grid snapping mode between the coarse grid and free movement. If the grid is on, it toggles to free movement; if the grid is off, it toggles to coarse grid snapping.

The Alt key or the Ctrl key temporarily toggle to fine grid snapping whether the grid is visible or not.

This grid snapping behaviour is the same for both parts and new wires, and the modifier keys allow you to perform grid snapping whether the grid is on or off.

When you start the simulation, Wokwi hides the grid. Stopping the simulation restores the grid.
