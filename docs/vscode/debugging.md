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

### ESP-IDF projects

For ESP-IDF projects, you can set the `miDebuggerPath` to `"${command:espIdf.getXtensaGdb}"`, and the debugger will automatically use the correct GDB executable (this requires the [ESP-IDF extension](https://marketplace.visualstudio.com/items?itemName=espressif.esp-idf-extension) to be installed). For a complete example, check out the [ESP32 Hello WiFi debug configuration](https://github.com/wokwi/esp32-idf-hello-wifi/blob/main/.vscode/launch.json).

### Arduino (AVR) projects

For Arduino projects, you need to use a recent version of GDB. The version that comes with the Arduino IDE (7.8) is too old, and will fail with an error: "ERROR: Unable to start debugging. Failed to find thread 1 for break event".

You can download a recent version of avr-gdb from [here](https://blog.zakkemble.net/avr-gcc-builds/) (Windows/Linux) or [here](https://github.com/osx-cross/homebrew-avr) (macOS, using Homebrew).

## Start the debugger

Start the Wokwi simulator by pressing **F1** and then selecting "**Wokwi: Start Simulator and Wait for Debugger**". The simulator will load, but the program will be paused, waiting for the debugger to connect. Then press **F5** to start the debugger.

:::warning
You need to start Wokwi before starting the debugger. If you start the debugger first, it will fail to connect to the simulator.
:::

## Troubleshooting

If you get an error message saying "Remote 'g' packet reply is too long", you are probably using a GDB version that is incompatible with the microcontroller architecture (e.g. using avr-gdb with an ESP32 project). Make sure you are using the correct GDB version for your project's microcontroller.
