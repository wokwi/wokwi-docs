---
title: Getting Started with Wokwi for CI and GitHub Actions
sidebar_label: Getting Started
---

# Wokwi CI

Wokwi for CI and GitHub Actions provides a simulation solution for automated testing of embedded and IoT projects. You can use Wokwi to run your tests on every commit, and get instant feedback on your code changes.

The simulation runs in the cloud, so you don't need to install any software on your CI server. You can use Wokwi CI with any CI system that supports running shell commands, including GitHub Actions, GitLab CI, CircleCI, Travis CI, and more.

A copy of your firmware binary is uploaded to the Wokwi Cloud for every test run. The firmware is then simulated in the cloud, and the serial output is streamed back to your CI system. Wokwi does not store your firmware, and it is deleted from the cloud after the simulation is finished.

If you do not want to upload your firmware to the cloud, please contact us to discuss options for on-premise deployment of Wokwi CI.

:::caution
Wokwi CI is free while in beta. After the beta, we will charge based on the number of minutes your tests run on Wokwi CI. We plan to offer a free tier with a limited number of minutes per month.
:::

## CLI Installation

The CLI allows you to run Wokwi simulations from your terminal, and integrate them with your CI system. We recommend using the [Wokwi for VS Code](../vscode/getting-started) extension for local development, and the CLI for running your tests on CI.

Both the CLI and the VS Code extension use the same project configuration files ([wokwi.toml](../vscode/project-config) and [diagram.json](../diagram-format)), so you can use the VS Code extension to create and test your project, and then use the CLI to run it on CI.

To install the Wokwi CLI, run the following command:

```bash
curl -L https://wokwi.com/ci/install.sh | sh
```

On Windows, you can use the following command in PowerShell:

```powershell
iwr https://wokwi.com/ci/install.ps1 -useb | iex
```

Alternatively, you can download the CLI directly from the [GitHub Releases page](https://github.com/wokwi/wokwi-cli/releases/latest). Rename the file to `wokwi-cli` (or `wokwi-cli.exe` on Windows), make it executable (`chmod +x wokwi-cli` on Linux/Mac), and move it to a directory in your PATH (e.g. `/usr/local/bin` on Linux/Mac).

## CLI Usage

Create an API token on the [Wokwi CI Dashboard](https://wokwi.com/dashboard/ci). Set the `WOKWI_CLI_TOKEN` environment variable to the token value.

Create a `wokwi.toml` file in your project's root directory. See the [Project Configuration](../vscode/project-config) page for details.

Then, run the following command:

```bash
wokwi-cli <your-project-directory>
```

The CLI will start the simulation and display the serial output. It will automatically exit after 30 seconds.

### CLI Options

You can use the following options to customize the CLI behavior:

- `--fail-text <text>` - fail if the serial output contains the specified text
- `--expect-text <text>` - fail if the serial output does not contain the specified text
- `--scenario <path>` - path to a scenario file (see below)
- `--timeout <milliseconds>` - how long to wait for the simulation to finish (default: 30000)
- `--timeout-exit-code <code>` - exit code to use when the simulation times out (default: 42)
- `--quiet` - do not print version information and status messages
- `--help` - print help message

## GitHub Actions

You can use Wokwi CI with GitHub Actions to run your tests on every commit. You need to have a workflow that builds your project's firmware. Add the following step to your workflow:

```yaml
- name: Test with Wokwi
  uses: wokwi/wokwi-ci-action@v1
  with:
    token: ${{ secrets.WOKWI_CLI_TOKEN }}
    path: / # directory with wokwi.toml, relative to repo's root
    timeout: 10000
    expect_text: 'Hello, world!' # optional
    fail_text: 'Error' # optional
    scenario: 'test-hello-world.yaml' # optional, see below
```

For a complete example, check out the [Example Projects](#example-projects) section below.

## Automation Scenarios

You can use the `--scenario` option to load a YAML file that describes the simulation scenario. The scenario file can be used to automate the simulation, by pushing buttons, changing the state of the sensors, and checking the serial output.

:::caution
Automation scenarios are currently in alpha. The API is not documented yet, and may change in the future. You can use the [example projects](#example-projects) below as a reference.
:::

## Example Projects

The following projects are set up to run on Wokwi CI. You can use them as a reference for your own projects. Check out the `.github/workflows` directory for the complete GitHub Action configuration in each example.

- [ESP32 WiFi + FreeRTOS Tasks](https://github.com/wokwi/esp32-idf-hello-wifi)
- [STM32 Nucleo64 C031C6 with STM32 HAL](https://github.com/wokwi/stm32-hello-wokwi)
- [Raspberry Pi Pico SDK](https://github.com/wokwi/pico-sdk-blink) - Includes an [automation scenario](https://github.com/wokwi/pico-sdk-blink/blob/main/blink.test.yaml) that verifies the LED blinking pattern.
- [PlatformIO Pushbutton Counter](https://github.com/wokwi/platform-io-esp32-counter-ci) - Includes an [automation scenario](https://github.com/wokwi/platform-io-esp32-counter-ci/blob/main/button.test.yaml) that pushes the button and checks the serial output.
- [ESP32-C6 LP I2C (Low Power)](https://github.com/wokwi/esp32c6-i2c-lp) - Includes an [automation scenario](https://github.com/wokwi/esp32c6-i2c-lp/blob/main/lp.test.yaml) that interacts with an I2C device.
- [Embedded Wizard Breakout Game](https://github.com/wokwi/esp-wrover-kit-embedded-wizard-wokwi) - Example of taking a screenshot of the simulated LCD display.
