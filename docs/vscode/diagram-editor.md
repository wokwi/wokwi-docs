---
title: Diagram Editor in VS Code
sidebar_label: Diagram Editor
description: Use the visual diagram editor in Wokwi for VS Code to open and edit diagrams, and run the simulation.
keywords: [VS Code, diagram editor, visual editor, diagram.json, simulation]
---

# Diagram Editor in VS Code

The visual diagram editor in Wokwi for VS Code allows you to edit the diagram of your simulation project. It is available in the [Hobby+ and Pro plans](https://wokwi.com/pricing).

## Opening the diagram editor

To open the diagram editor, click on a diagram.json file in the Explorer view. The diagram will open in a new tab. The diagram editor also works for files matching the `diagram.*.json` pattern, such as `diagram.esp32.json`. This is useful if you have multiple target boards in your project, and want to maintain a diagram for each target board.

If you are using the Community or the Hobby plan, you will be able to view the diagram, but not edit it in the diagram editor. You can still edit the diagram.json file in the text editor.

## Editing the diagram as text

Some advanced features are only available if you modify the diagram in the text editor. You can open the text editor by right clicking on the diagram.json tab, selecting "Reopen Editor With..." and then selecting "Text Editor".

## Running the simulation

You can run the simulation by pressing the green play button in the top left corner of the editor. Wokwi will open a new tab and start the simulation.
