---
title: wokwi-servo参考
sidebar_label: wokwi-servo参考
---

标准微伺服电机

<wokwi-servo />

## 引脚名称

| Name | Description           |
| ---- | --------------------- |
| PWM  | Servo control signal  |
| V+   | Positive voltage (5V) |
| GND  | Ground                |

## 属性

| Name      | Description                                 | Default value |
| --------- | ------------------------------------------- | ------------- |
| horn      | 安装角的类型: "single", "double" or "cross" | "single"      |
| hornColor | 伺服角的颜色                                | "#ccc"        |

### 示例

| Result                           | Attrs                        |
| -------------------------------- | ---------------------------- |
| <wokwi-servo horn="single" />    | `{ "horn": "single" }`       |
| <wokwi-servo hornColor="#008" /> | `{ "hornColor": "#000088" }` |
| <wokwi-servo horn="double" />    | `{ "horn": "double" }`       |
| <wokwi-servo horn="cross" />     | `{ "horn": "cross" }`        |

## 仿真实例

- [Sweep](https://wokwi.com/arduino/libraries/Servo/Sweep)
- [Knob](https://wokwi.com/arduino/libraries/Servo/Knob)
- [Arduino Nano controlling 1 servo with two pushbuttons](https://wokwi.com/projects/328312829780165204)
- [Arduino Uno controlling 5 servos](https://wokwi.com/projects/305087394119418434)
- [Arduino Mega animating 32 servos](https://wokwi.com/projects/305336312628511297)
