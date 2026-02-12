---
title: Wokwi Automation Scenarios
sidebar_label: Automation Scenarios
description: Automate simulations in Wokwi using YAML-based automation scenarios. Simulate button presses, sensor input, and verify serial output to test firmware programmatically.
keywords: [automation, simulation testing, YAML automation scenarios, embedded simulation, automated firmware testing, sensor state simulation]
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Automation scenarios allow you to automate the simulation, push buttons, change the state of the sensors, and check the serial output. You can use automation scenarios to test your firmware in a realistic environment, and verify that it behaves as expected.

Each automation scenario is a YAML file that describes a sequence of actions that the simulator should take. You can use the `--scenario` CLI option to load an automation scenario file.

## Scenario File Structure

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

## Available Steps

These can be used as a sequence of actions to perform when running the scenario. Use these to build a list of steps for
testing your project.

### Wait (`delay`)
Wait for an amount of time.

#### Parameters
| Name | Description |
| :- | :- |
| `value` | Amount of time to wait for. Units are required (e.g. `200ms`) |

#### Example Usage
```yaml
delay: 30ms
```

### Assert Pin Value (`expect-pin`)
Check if a pin is set to an expected value.

#### Parameters
| Name | Description |
| :- | :- |
| `part-id` | ID of the target compontent |
| `pin` | Name of pin to check |
| `value` | Expected value of the pin |

#### Example Usage
```yaml
expect-pin:
  part-id: esp
  pin: 2
  expected: 1
```

### Control a Part (`set-control`)
Set a controllable part of a compontent to a specified value. View part documentation for available controls or see a 
list of [supported parts](#supported-parts-with-automation-controls) below.

#### Parameters
| Name | Description |
| :- | :- |
| `part-id` | ID of the target compontent |
| `control` | Aspect of the target compontent to modify (e.g. temperature, humidity) |
| `value` | Value to set the `control` to |

#### Example Usage
```yaml
set-control:
  part-id: dht
  control: humidity
  value: 39
```

### Wait and Match Text from Serial (`wait-serial`)
Wait for serial console output which matches a given string.

#### Parameters
| Name | Description |
| :- | :- |
| `text` | String to wait and match for |

#### Example Usage
```yaml
wait-serial: 'Ready for testing!'
```

### Write to Serial (`write-serial`)
Write text or an array of numbers to the serial console.

#### Parameters
| Name | Description |
| :- | :- |
| `value` | The string or array of numbers to write to the serial console |

#### Example Usage
<Tabs>
  <TabItem value="write-serial-string-example" label="String">
  ```json
  write-serial: 'Ready for testing!'
  ```
  </TabItem>
  <TabItem value="write-serial-array-example" label="Array">
  ```json
  write-serial: [87, 111, 107, 119, 105]
  ```
  </TabItem>
</Tabs>

### Take a Screenshot (`take-screenshot`)
Take a screenshot of a specific component and compare it with an existing capture.

| Name | Description |
| :- | :- |
| `part-id` | ID of the target compontent |
| `save-to` | Path to save screenshot to |
| `compare-with` | Path of a screenshot to compare with |

This step requires `part-id` and `save-to` and/or `compare-with`.

Example usage:
```yaml
take-screenshot:
  part-id: 'oled1'
  compare-with: 'screenshots/oled-1.png'
```

### Touch a Part (`touch`)

Simulate a touch tap on a part with a touchscreen. Sends a press event at the given coordinates, and automatically releases after `duration`.

#### Parameters

| Name | Description |
| :- | :- |
| `part-id` | ID of the target part (e.g. the board with a touchscreen) |
| `x` | X coordinate (touch controller coordinates) |
| `y` | Y coordinate (touch controller coordinates) |
| `duration` | How long to hold the touch (optional, default: `50ms`) |
| `wait` | If `true`, wait for the touch duration before continuing (optional, default: `false`) |

#### Example Usage

```yaml
touch:
  part-id: esp32s3box
  x: 120
  y: 160
  duration: 100ms
```

### Touch Press (`touch-press`)

Low-level touch command: send a press event at the given coordinates. Pair with `touch-release` to complete the gesture.

#### Parameters

| Name | Description |
| :- | :- |
| `part-id` | ID of the target part |
| `x` | X coordinate (touch controller coordinates) |
| `y` | Y coordinate (touch controller coordinates) |

#### Example Usage

```yaml
touch-press:
  part-id: esp32s3box
  x: 120
  y: 160
```

### Touch Move (`touch-move`)

Low-level touch command: send a move (drag) event to new coordinates. Use between `touch-press` and `touch-release`.

#### Parameters

| Name | Description |
| :- | :- |
| `part-id` | ID of the target part |
| `x` | X coordinate (touch controller coordinates) |
| `y` | Y coordinate (touch controller coordinates) |

#### Example Usage

```yaml
touch-move:
  part-id: esp32s3box
  x: 150
  y: 200
```

### Touch Release (`touch-release`)

Low-level touch command: release the touch.

#### Parameters

| Name | Description |
| :- | :- |
| `part-id` | ID of the target part |

#### Example Usage

```yaml
touch-release:
  part-id: esp32s3box
```

:::info Touch Coordinate System
Touch coordinates use the **touch controller's coordinate space**, matching real hardware behavior. For most display+touch combinations (e.g. ILI9341 with FT6206), the touch controller's origin (0, 0) is at the **bottom-right** of the display, not the top-left.

Your firmware is responsible for mapping touch coordinates to display coordinates, just like on real hardware. For example, with the Adafruit FT6206 library on a 240x320 ILI9341 display:

```cpp
TS_Point p = ts.getPoint();
// Flip to match display coordinates
p.x = map(p.x, 0, 240, 240, 0);
p.y = map(p.y, 0, 320, 320, 0);
```
:::

#### Drag Gesture Example

Combine the low-level touch commands to simulate a drag gesture:

```yaml
- touch-press:
    part-id: esp32s3box
    x: 50
    y: 100
- delay: 50ms
- touch-move:
    part-id: esp32s3box
    x: 150
    y: 100
- delay: 50ms
- touch-release:
    part-id: esp32s3box
```

## Running Scenarios

To build the test projects and run the tests, you need to install [PlatformIO Core](https://platformio.org/install/cli)
and the [Wokwi CLI](https://docs.wokwi.com/wokwi-ci/cli-installation), get a [Wokwi CI token](https://wokwi.com/dashboard/ci)
and set the `WOKWI_CLI_TOKEN` environment variable with the token.

You can then use `pio run` to compile the project and `wokwi-cli . --scenario <scenraio_file>.yaml` to run the tests.
You can also use [Wokwi for VS Code](https://docs.wokwi.com/vscode/getting-started) to interactively simulate the test
projects.

### Example Usage

Example parts with test scenarios are available at the [wokwi-part-tests](https://github.com/wokwi/wokwi-part-tests)
GitHub repository. We will try to compile and run tests for the `wokwi-dht22` part on the ESP32.

Begin with cloning the repository:
```bash
git clone https://github.com/wokwi/wokwi-part-tests
```

Navigate to the part in question:
```bash
cd wokwi-dht22/dht22-esp32
```

Build the required microcontroller firmware:
```bash
pio run
```
This can also be done via the PlatformIO VS Code extension - just click the build button.

Finally, run the test!
```bash
wokwi-cli . --scenario dht22.test.yaml
```

If successful, the output of the test looks as follows:
```text
Wokwi CLI v0.18.3 (786fa8e49d9c)
Connected to Wokwi Simulation API 1.0.0-20251028-g60747fe2
Starting simulation...
ets Jul 29 2019 12:21:46
[DHT22 Sensor Test (ESP32)] Expected text matched: "ets Jul 29 2019 12:21:46"

rst:0x1 (POWERON_RESET),boot:0x13 (SPI_FAST_FLASH_BOOT)
configsip: 0, SPIWP:0xee
clk_drv:0x00,q_drv:0x00,d_drv:0x00,cs0_drv:0x00,hd_drv:0x00,wp_drv:0x00
mode:DIO, clock div:2
load:0x3fff0030,len:1156
load:0x40078000,len:11456
ho 0 tail 12 room 4
load:0x40080400,len:2972
entry 0x400805dc
DHT22 test!
[DHT22 Sensor Test (ESP32)] Expected text matched: "DHT22 test!"
Humidity: 45.80%  Temperature: 23.50°C
[DHT22 Sensor Test (ESP32)] Expected text matched: "Humidity: 45.80%  Temperature: 23.50°C"
Humidity: 45.80%  Temperature: 23.50°C
[DHT22 Sensor Test (ESP32)] Expected text matched: "Humidity: 45.80%  Temperature: 23.50°C"
Humidity: 66.90%  Temperature: 21.50°C
[DHT22 Sensor Test (ESP32)] Expected text matched: "Humidity: 66.90%  Temperature: 21.50°C"
[DHT22 Sensor Test (ESP32)] Scenario completed successfully
```

## Supported Parts with Automation Controls

Several Wokwi parts support automation controls that can be controlled using automation scenarios. These controls allow you to programmatically change the state of sensors, press buttons, and modify component values during simulation.

### Parts with Automation Controls

- **[Push Button](../parts/wokwi-pushbutton#automation-controls)** - Control button presses and releases
- **[Potentiometer](../parts/wokwi-potentiometer#automation-controls)** - Adjust the potentiometer position
- **[MPU6050 Sensor](../parts/wokwi-mpu6050#automation-controls)** - Set acceleration, rotation, and temperature values
- **[Analog Joystick](../parts/wokwi-analog-joystick#automation-controls)** - Set direction and pressed state
- **[HX711 Load Cell Amplifier](../parts/wokwi-hx711#automation-controls)** - Set load value of scale
- **[Photoresistor Sensor](../parts/wokwi-photoresistor-sensor#automation-controls)** - Set lux

Each part's documentation page contains detailed information about the specific automation controls available, including control names, types, and example usage.
