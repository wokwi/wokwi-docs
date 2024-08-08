---
title: Wokwi CLI Usage
sidebar_label: CLI Usage
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

- `--fail-text <text>` - fail if the serial output contains the specified text
- `--expect-text <text>` - fail if the serial output does not contain the specified text
  ' `--interactive` - Redirect stdin to the simulated serial port
- `--serial-log-file <filename>` - save the serial output to the specified file
- `--scenario <path>` - path to an [automation scenario](./automation-scenarios) file
- `--timeout <milliseconds>` - how long to wait for the simulation to finish (default: 30000)
- `--timeout-exit-code <code>` - exit code to use when the simulation times out (default: 42)
- `--quiet` - do not print version information and status messages
- `--help` - print help message
