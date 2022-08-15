---
title: wokwi-led参考
sidebar_label: wokwi-led参考
---

标准5mm的LED。

<wokwi-led />

## 引脚名称

| Name | Description    |
| ---- | -------------- |
| A    | 阳极（正引脚） |
| C    | 阴极（负引脚） |

## 属性

| Name       | Description           | Default value        |
| ---------- | --------------------- | -------------------- |
| color      | 灯身的颜色            | "red"                |
| lightColor | 光的颜色              | depends on the color |
| label      | 显示在 LED 下方的文本 |                      |
| gamma      | 伽马校正系数          | "2.8"                |
| flip       | 水平翻转LED           | ""                   |

注意：要旋转LED，请单击它们并按“R”，或设置 ["rotate" property](../diagram-format#parts)。

### 示例

| Result                                                    | Attrs                                         |
| --------------------------------------------------------- | --------------------------------------------- |
| <wokwi-led color="green" />                               | `{ "color": "green" }`                        |
| <wokwi-led color="#FFFF00" />                             | `{ "color": "#FFFF00" }`                      |
| <wokwi-led label="Status" />                              | `{ "label": "Status" }`                       |
| <wokwi-led color="white" />                               | `{ "color": "white"}`                         |
| <wokwi-led color="white" lightColor="orange" value="1" /> | `{ "color": "white", "lightColor": "orange"}` |
| <wokwi-led color="red" flip="1"/>                         | `{ "color": "red", "flip": "1"}`              |

### Gamma亮度校正

LED会自动应用伽马校正。这意味着即使是非常短的电流爆发也会产生一些可见光，类似于物理LED的工作方式，因此在以下情况下，您可以获得更准确的模拟：

1。使用值很小（占空比短）的`analogWrite()`，

2。LED扫描技术，如 [Charlieplexing](https://goodarduinocode.com/guides/charlieplexing)。

您可以通过将“gamma”属性设置为“1.0”来禁用伽马校正。您还可以选择不同的gamma值：将此属性设置为所需的值来实现伽马因子。默认伽马校正系数为2.8。

[Gamma Correction Demo project](https://wokwi.com/projects/304762988710068800) 显示了不同伽马值的行为：左侧的LED默认伽马因子为2.8，而右侧的LED的伽马因子为1.0。你可以看到`analogWrite()`的较低值在左侧LED上看起来要亮得多。

有关_gamma correction_的更多信息，包括一些代码示例，请查看此[great guide from Adafruit](https://learn.adafruit.com/led-tricks-gamma-correction)。

## 仿真实例

- [Blink](https://wokwi.com/arduino/libraries/demo/blink) - Arduino的标准闪烁示例
- [Fade](https://wokwi.com/projects/313268562698437186) - 使用 analogWrite() + 伽马校正
