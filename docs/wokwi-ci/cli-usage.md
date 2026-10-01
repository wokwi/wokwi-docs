---
title: Wokwi CLI Usage
sidebar_label: CLI Usage
description: Wokwi CLI command reference
keywords: [reference, Wokwi, CLI, API, CI Dashboard, serial monitor]
---

Create an API token on the [Wokwi CI Dashboard](https://wokwi.com/dashboard/ci). Set the `WOKWI_CLI_TOKEN` environment variable to the token value.

If you haven't set up your project for Wokwi yet, you can use the `init` command to configure your project for Wokwi. Run the following command in your project's root directory:

```bash
wokwi-cli init
```

This command will ask you a few questions and will automatically generate [wokwi.toml](../vscode/project-config) and [diagram.json](../diagram-format) files for your project.

The command detects [PlatformIO](../vscode/platformio), [ESP-IDF](../vscode/esp-idf) and Pico SDK projects and suggests the matching firmware paths. For ESP-IDF projects built with `idf.py`, you can skip `init` altogether: when you run `wokwi-cli` in a project that has a `build/flasher_args.json`, it creates `wokwi.toml` and `diagram.json` for the project's target chip automatically.

To run the simulation, use the following command:

```bash
wokwi-cli <your-project-directory>
```

The CLI will start the simulation and display the serial output. It will automatically exit after 30 seconds.

:::tip
A valid Wokwi CLI token starts with `wok_` and is exactly 44 characters long (including the `wok_` prefix). If you are
experiencing authorization issues, double check that your token is active, correctly formatted and doesn't contain any
spaces or fancy characters.
:::

## CLI Options

You can use the following options to customize the CLI behavior:

### Configuration

- `--elf <path>` - ELF file to simulate (default: read from wokwi.toml)
- `--gdb-server-port <port>`, `-g` - Listen for GDB on the given port and start the simulation paused (default: read from wokwi.toml, see [Debugging with GDB](#debugging-with-gdb))
- `--diagram-file <path>` - Path to the diagram.json file, relative to project root (default: diagram.json)
- `--interactive` - Redirect stdin to the simulated serial port
- `--serial-log-file <path>` - Save the serial monitor output to the given file
- `--timeout <number>` - Timeout in simulation milliseconds (default: 30000)
- `--timeout-exit-code <number>` - Process exit code when timeout is reached (default: 42)

### Automation

- `--expect-text <string>` - Expect the given text in the output
- `--fail-text <string>` - Fail if the given text is found in the output
- `--scenario <path>` - Path to an [automation scenario](./automation-scenarios) file, relative to project root
- `--screenshot-part <string>` - Take a screenshot of the given part id (from diagram.json)
- `--screenshot-time <number>` - Time in simulation milliseconds to take the screenshot
- `--screenshot-file <string>` - File name to save the screenshot to (default: screenshot.png)
- `--vcd-file <path>` - Export [Logic Analyzer](../parts/wokwi-logic-analyzer) data to a VCD file

### General

- `--help`, `-h` - Prints help information and exit
- `--quiet`, `-q` - Quiet: do not print version or status messages


## Debugging with GDB

You can attach GDB to the simulated firmware from the command line. Add `gdbServerPort` to the `[wokwi]` section of your [wokwi.toml](../vscode/project-config) file:

```toml
[wokwi]
version = 1
firmware = 'build/hello_world.bin'
elf = 'build/hello_world.elf'
gdbServerPort = 3333
```

When `gdbServerPort` is set, the CLI listens for GDB on that port and starts the simulation paused, so you can set breakpoints before the firmware runs. For projects without a `wokwi.toml`, pass `--gdb-server-port <port>` (short: `-g`) instead; the flag also overrides the value from `wokwi.toml`. Connect with the GDB that matches your target, for example:

```bash
wokwi-cli . --timeout 0
xtensa-esp32-elf-gdb build/hello_world.elf -ex 'target remote localhost:3333'
```

The `--timeout 0` flag disables the default 30 second simulation timeout, which would otherwise end an interactive debugging session. The same `gdbServerPort` setting also drives the [VS Code debugger](../vscode/debugging), so a project configured for one works with the other.

:::info
Debugging requires a simulation server that supports it. The Wokwi cloud does; if you run a self-hosted server that doesn't, the CLI prints a warning and runs the simulation without the debugger.
:::

## Linting Diagrams

The `lint` command validates your [diagram.json](../diagram-format) file for errors and warnings before running a simulation:

```bash
wokwi-cli lint
```

The linter checks for common issues such as unknown part types, invalid pin connections, and missing components. By default, it fetches the latest board definitions from the Wokwi registry to ensure accurate validation.
