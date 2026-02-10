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

To run the simulation, use the following command:

```bash
wokwi-cli <your-project-directory>
```

The CLI will start the simulation and display the serial output. It will automatically exit after 30 seconds.

## CLI Options

You can use the following options to customize the CLI behavior:

### Configuration

- `--elf <path>` - ELF file to simulate (default: read from wokwi.toml)
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

## Wokwi ESP-IDF Simulation Extension

After running `pip install idf-wokwi`, you can now access simulation features from `idf.py`. You must first configure
the `WOKWI_CLI_TOKEN` environment variable by creating an API token on the
[Wokwi CI Dashboard](https://wokwi.com/dashboard/ci). To start a simulation, run `idf.py wokwi`. This command accepts a
set of options to customize its behavior.

- `--diagram-file` - Path to `diagram.json` (defaults to project root)
- `--timeout` - Simulation timeout in milliseconds (exit code 42 on timeout)
- `--expect-text` - Exit successfully when this text appears in serial output
- `--fail-text` - Exit with error when this text appears in serial output
- `--expect-regex` - Exit successfully when this regex matches a serial output line
- `--fail-regex` - Exit with error when this regex matches a serial output line

### Example Usage

```bash
export WOKWI_CI_TOKEN="your-token-here"

# Build and simulate
idf.py build
idf.py wokwi

# CI mode: exit when expected text appears
idf.py wokwi --timeout 10000 --expect-text "Hello world!"
```

## Linting Diagrams

The `lint` command validates your [diagram.json](../diagram-format) file for errors and warnings before running a simulation:

```bash
wokwi-cli lint
```

The linter checks for common issues such as unknown part types, invalid pin connections, and missing components. By default, it fetches the latest board definitions from the Wokwi registry to ensure accurate validation.
