---
title: wokwi-analog-joystick模块参考
sidebar_label: wokwi-模拟摇杆模块
---

带有两个轴（水平/垂直）和一个集成按钮的模拟操纵杆。

<wokwi-analog-joystick />

## 引脚名称

| Name | 描述         |
| ---- | ------------ |
| VCC  | 电源输入     |
| VERT | 垂直模拟输出 |
| HORZ | 水平模拟输出 |
| SEL  | 按键         |
| GND  | 接地         |

空闲位置电压为VCC/2。沿着垂直轴移动操纵杆将VERT引脚的电压从0伏特（底部）更改为VCC（顶部）。沿着水平轴移动操纵杆将HORZ引脚的电压从0伏特（右）更改为VCC（左）。

SEL引脚通常打开（浮动）。按下操纵杆的中心，将SEL与地连接。默认情况下，操纵杆的按钮是被模拟 [弹起](wokwi-pushbutton#bouncing) 。您可以通过将 "bounce"属性设置为“0”来禁用反弹。

## 属性

| Name   | Description         | Default value |
| ------ | ------------------- | ------------- |
| bounce | 设置为“0”以禁用反弹 | ""            |

## 操作操纵杆

您可以通过在操纵杆上移动光标来操作鼠标操作操纵杆。你会看到四个箭头，对应于四个运动方向，中间有一个圆圈。单击其中一个箭头将操纵杆轴朝这个方向移动，然后单击中间的圆圈按下操纵杆的按钮（连接到SEL引脚）。

要使用键盘操作操纵杆，请首先聚焦它（使用选项卡键或用鼠标单击它），然后使用箭头键移动操纵杆的轴，以及按下操纵杆按钮的空间键（连接到SEL引脚）。现在可以组合多个键，例如左箭头和顶部箭头，以对角线方向移动轴。您还可以在按住箭头的同时按下空格键在移动轴时按下操纵杆。

目前不支持部分移动和触摸控制。不过，我们希望看到它们得到支持-因此，如果您能胜任任务，看这里[an open issue waiting for your love](https://github.com/wokwi/wokwi-elements/issues/62)。

## 在Arduino使用操纵杆

| Joystick Pin | Arduino Pins             | Example code pin |
| ------------ | ------------------------ | ---------------- |
| VCC          | 5V                       |                  |
| VERT         | any analog pin (A0...A5) | A0               |
| HORZ         | any analog pin (A0...A5) | A1               |
| SEL          | any digital pin          | 2                |
| GND          | GND                      |                  |

要在Arduino中使用操纵杆，请将VERT和HORZ引脚连接到模拟引脚（A0...A6），并将这些引脚配置为输入。使用 `analogRead()`读取操纵杆位置。

```cpp
#define VERT_PIN A0
#define HORZ_PIN A1
#define SEL_PIN  2

void setup() {
  pinMode(VERT_PIN, INPUT);
  pinMode(HORZ_PIN, INPUT);
  pinMode(SEL_PIN, INPUT_PULLUP);
}

void loop() {
  int vert = analogRead(VERT_PIN);
  int horz = analogRead(HORZ_PIN);
  bool selPressed = digitalRead(SEL_PIN) == LOW;
  // horz goes from 0 (right) to 1023 (left)
  // vert goes from 0 (bottom) to 1023 (top)
  // selPressed is true is the joystick is pressed
}
```

### 操纵杆位置表

下表显示了`analogRead()`返回的不同操纵杆位置和相应的HORZ / VERT值：

| Position     | HORZ | VERT | Joystick                                                   |
| ------------ | ---- | ---- | ---------------------------------------------------------- |
| Top-Left     | 1023 | 1023 | <wokwi-analog-joystick xValue="1" yValue="1" disabled />   |
| Top          | 512  | 1023 | <wokwi-analog-joystick xValue="0" yValue="1" disabled />   |
| Top-Right    | 0    | 1023 | <wokwi-analog-joystick xValue="-1" yValue="1" disabled />  |
| Left         | 1023 | 512  | <wokwi-analog-joystick xValue="1" yValue="0" disabled />   |
| Center       | 512  | 512  | <wokwi-analog-joystick xValue="0" yValue="0" disabled />   |
| Right        | 0    | 512  | <wokwi-analog-joystick xValue="-1" yValue="0" disabled />  |
| Bottom-Left  | 1023 | 0    | <wokwi-analog-joystick xValue="1" yValue="-1" disabled />  |
| Bottom       | 512  | 0    | <wokwi-analog-joystick xValue="0" yValue="-1" disabled />  |
| Bottom-Right | 0    | 0    | <wokwi-analog-joystick xValue="-1" yValue="-1" disabled /> |

### 使用map()

您可以使用 [map() function](https://www.arduino.cc/reference/en/language/functions/math/map/) 将值重新映射到不同的范围。

例如，当操纵杆一直向右时，`map(analogRead(HORZ_PIN), 0, 1023, -100, 100)`将返回 -100，当操纵杆时返回 -100

居中，当操纵杆一直向左时为100。

## 仿真案例

- [Etch-a-sketch](https://wokwi.com/projects/296234816685212169) - A simple drawing game using a MAX7219 LED Dot Matrix
