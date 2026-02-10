---
title: ESP-IDF Simulation Extension Usage
sidebar_label: ESP-IDF Simulation Extension
descripton: idf-wokwi CLI command reference
keywords: [esp-idf, idf, CLI, API, CI Dashboard, esp32, simulation]
---

The `idf-wokwi` Python package adds simulation support directly to Espressif's `idf.py` command. From `idf.py`, you can
run a simulation and pass a selection of options to customize its behavior.

Unlike `wokwi-cli`, you don't need to initalize a project as `idf-wokwi` will implicitly generate the relevant files
(`wokwi.toml`/`diagram.json`) by inferring information from ESP-IDF. You can however still add your own files if you
require other components.

## Getting Started

Create an API token on the [Wokwi CI Dashboard](https://wokwi.com/dashboard/ci). Set the `WOKWI_CLI_TOKEN` environment
variable to the token value.

Install the extension with the following command:
```bash
pip install idf-wokwi
```

You can now run a simulation by executing `idf.py wokwi`!

## CLI Options

Pass any selection of the following commands to `idf.py wokwi` to customize its behavior during runtime.

- `--diagram-file` - Path to `diagram.json` (defaults to project root)
- `--timeout` - Simulation timeout in milliseconds (exit code 42 on timeout)
- `--expect-text` - Exit successfully when this text appears in serial output
- `--fail-text` - Exit with error when this text appears in serial output
- `--expect-regex` - Exit successfully when this regex matches a serial output line
- `--fail-regex` - Exit with error when this regex matches a serial output line

## Example Usage

```bash
export WOKWI_CI_TOKEN="your-token-here"

# Build and simulate
idf.py build
idf.py wokwi

# CI mode: exit when expected text appears
idf.py wokwi --timeout 10000 --expect-text "Hello world!"
```