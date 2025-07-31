---
title: Wokwi Automation Scenarios
sidebar_label: Automation Scenarios
description: Automate simulations in Wokwi using YAML-based automation scenarios. Simulate button presses, sensor input, and verify serial output to test firmware programmatically.
keywords: [automation, simulation testing, YAML automation scenarios, embedded simulation, automated firmware testing, sensor state simulation]
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

## Supported Parts with Automation Controls

Several Wokwi parts support automation controls that can be controlled using automation scenarios. These controls allow you to programmatically change the state of sensors, press buttons, and modify component values during simulation.

### Parts with Automation Controls

- **[Push Button](../parts/wokwi-pushbutton#automation-controls)** - Control button presses and releases
- **[Potentiometer](../parts/wokwi-potentiometer#automation-controls)** - Adjust the potentiometer position
- **[MPU6050 Sensor](../parts/wokwi-mpu6050#automation-controls)** - Set acceleration, rotation, and temperature values

Each part's documentation page contains detailed information about the specific automation controls available, including control names, types, and example usage.
