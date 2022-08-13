---
title: wokwi-stepper-motor参考
sidebar_label: wokwi-stepper-motor参考
---

双极步进电机

<wokwi-stepper-motor />

## 引脚名称

| Name | Description            |
| ---- | ---------------------- |
| A-   | Coil A negative signal |
| A+   | Coil A positive signal |
| B+   | Coil B positive signal |
| B-   | Coil B negative signal |

## 属性

| Name      | Description                                                  | Default value |
| --------- | ------------------------------------------------------------ | ------------- |
| arrow     | 显示一个箭头来指示步进器的位置。设置为箭头的颜色，例如“orange” | ""            |
| display   | 步进器上显示什么数字？有效值“步steps”、“angle”（以度为单位）、“none” | "steps"       |
| gearRatio | 电机的齿轮比。200步/转速设置为“1:1”，400步/转速设置为“2:1”等。 | "1:1"         |

### 示例

| Result                                                        | Attrs                    |
| ------------------------------------------------------------- | ------------------------ |
| <wokwi-stepper-motor value="20" units="Steps" angle="36" />   | `{ "display": "steps" }` |
| <wokwi-stepper-motor value="36" units="Degrees" angle="36" /> | `{ "display": "angle" }` |
| <wokwi-stepper-motor angle="36" />                            | `{ "display": "none" }`  |
| <wokwi-stepper-motor angle="36" arrow="orange" />             | `{ "arrow": "orange" }`  |

## 使用步进电机

使用步进电机时，您需要一个驱动芯片，该芯片可以为电机的线圈提供大量电流。Wokwi支持常见的[A4988 driver board](wokwi-a4988)。您还可以将步进电机直接连接到微控制器。Wokwi使用数字模拟引擎，因此不考虑线圈电流。

您可以使用各种Arduino库来控制步进电机：步进电机、AccelStepper等。

### 仿真行为

步进电机每步移动1.8度（每转200步）。电机还支持半步（每步0.9度/每转400步）。您甚至可以使用较小的微步（例如1/4或1/8步），但模拟电机仅以半步分辨率显示角度。有关更多信息，请查看[A4988 microstepping configuration table](wokwi-a4988#microstepping-configuration)。

## 仿真案例

- [Stepper motor using the Arduino Stepper library](https://wokwi.com/projects/327324886912467538)
- [Direct control of the motor (no library)](https://wokwi.com/projects/327360139702043220)
- [Advanced control with the AccelStepper library and potentiometer](https://wokwi.com/projects/327381547863769683)
- [Manually control the stepper motor using switches and relays](https://wokwi.com/projects/327424914940232274)
