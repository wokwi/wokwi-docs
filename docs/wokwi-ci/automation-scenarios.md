---
title: Wokwi Automation Scenarios
sidebar_label: Automation Scenarios
---

Automation scenarios allow you to automate the simulation, push buttons, change the state of the sensors, and check the serial output. You can use automation scenarios to test your firmware in a realistic environment, and verify that it behaves as expected.

Each automation scenario is a YAML file that describes a sequence of actions that the simulator should take. You can use the `--scenario` CLI option to load an automation scenario file.

The basic structure of an automation scenario file is as follows:

```yaml
name: 'Your scenario name'
version: 1
author: 'Your name'

steps:
  # List of steps:
  - set-control:
      part-id: btn1
      control: pressed
      value: 1
  - delay: 500ms
  - wait-serial: 'Button 1 pressed'
```

:::warning
Automation scenarios are currently in alpha. The API is not fully documented yet, and may change in the future. You can use the [example projects](github-actions#examples) as a reference.
:::
