---
title: Debugging your code
sidebar_label: Debugging
---

You can debug your code while it is running in the simulation using the VS Code debugger. To set up the debugger, follow these steps:

## Configure Wokwi

Add the following line to the `[wokwi]` section of your `wokwi.toml` configuration file:

```toml
gdbServerPort=3333
```

## Configure VS Code

Create a launch configuration file for VS Code at `.vscode/launch.json`. Here's a template you can use:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Wokwi GDB",
      "type": "cppdbg",
      "request": "launch",
      "program": "${workspaceFolder}/build/your-firmware.elf",
      "cwd": "${workspaceFolder}",
      "MIMode": "gdb",
      "miDebuggerPath": "/usr/local/bin/xtensa-esp32-elf-gdb",
      "miDebuggerServerAddress": "localhost:3333"
    }
  ]
}
```
The `type` describes the VS Code extension used here. In this case `cppdbg`. Therefore the following extension must be installed: https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools

Replace the `program` path with the path to your firmware's ELF file, and the `miDebuggerPath` with the path to a GDB executable that supports your project's architecture (e.g. for AVR projects, use `avr-gdb`).

## Start the debugger

Start the Wokwi simulator by pressing **F1** and then selecting "**Wokwi: Start Simulator and Wait for Debugger**". The simulator will load, but the program will be paused, waiting for the debugger to connect. Then press **F5** to start the debugger.

:::caution
You need to start Wokwi before starting the debugger. If you start the debugger first, it will fail to connect to the simulator.
:::
