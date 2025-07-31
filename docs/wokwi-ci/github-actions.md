---
title: Using Wokwi in GitHub Actions
sidebar_label: Github Actions
description: Integrate Wokwi CI with GitHub Actions to automatically test your embedded firmware on every commit. 
keywords: [GitHub Actions, embedded testing, firmware automation, CI/CD, automation scenarios, CI workflows, embedded projects, continuous integration]
---

You can use Wokwi CI with GitHub Actions to run your tests on every commit. You need to have a workflow that builds your project's firmware. Add the following step to your workflow:

```yaml
- name: Test with Wokwi
  uses: wokwi/wokwi-ci-action@v1
  with:
    token: ${{ secrets.WOKWI_CLI_TOKEN }}
    path: / # directory with wokwi.toml, relative to repo's root
    expect_text: 'Hello, world!' # optional
```

For a complete list of options, check out the [action's README](https://github.com/wokwi/wokwi-ci-action?tab=readme-ov-file#usage).

## CLI tokens

You also need to set up the `WOKWI_CLI_TOKEN` secret in your repository settings. You can create an API token on the [Wokwi CI Dashboard](https://wokwi.com/dashboard/ci).

## Examples

The following projects are set up to run on Wokwi CI. You can use them as a reference for your own projects. Check out the `.github/workflows` directory for the complete GitHub Action configuration in each example.

- [ESP32 WiFi + FreeRTOS Tasks](https://github.com/wokwi/esp32-idf-hello-wifi)
- [STM32 Nucleo64 C031C6 with STM32 HAL](https://github.com/wokwi/stm32-hello-wokwi)
- [Raspberry Pi Pico SDK](https://github.com/wokwi/pico-sdk-blink) - Includes an [automation scenario](https://github.com/wokwi/pico-sdk-blink/blob/main/blink.test.yaml) that verifies the LED blinking pattern.
- [PlatformIO Pushbutton Counter](https://github.com/wokwi/platform-io-esp32-counter-ci) - Includes an [automation scenario](https://github.com/wokwi/platform-io-esp32-counter-ci/blob/main/button.test.yaml) that pushes the button and checks the serial output.
- [ESP32-C6 LP I2C (Low Power)](https://github.com/wokwi/esp32c6-i2c-lp) - Includes an [automation scenario](https://github.com/wokwi/esp32c6-i2c-lp/blob/main/lp.test.yaml) that interacts with an I2C device.
- [Embedded Wizard Breakout Game](https://github.com/wokwi/esp-wrover-kit-embedded-wizard-wokwi) - Example of taking a screenshot of the simulated LCD display.

## Additional resources

- [Using PlatformIO CI and Wokwi in GitHub Actions](https://blog.leon0399.ru/wokwi-platformio-github-actions?showSharer=true) - Blog post by Leonid Meleshin
