---
title: wokwi-max7219-matrix点阵参考
sidebar_label: wokwi-max7219-matrix参考
---

import DotMatrix from './wokwi-max7219-matrix.svg';
import DotMatrixChain4 from './wokwi-max7219-matrix-chain-4.svg';

带MAX7219控制器的8x8 LED点阵

![MAX7219 LED Dot Matrix](wokwi-max7219-matrix.svg)

## 引脚名称

| Name | Description    |
| ---- | -------------- |
| VCC  | Voltage supply |
| GND  | Ground         |
| DIN  | Data input     |
| CS   | Chip Select    |
| CLK  | Clock input    |
| DOUT | Data output    |

## 属性

| Name   | Description                      | Default value |
| ------ | -------------------------------- | ------------- |
| chain  | 链在一起需要多少个单元           | "1"           |
| color  | LED颜色（点亮时）                | "red"         |
| layout | 矩阵连接布局: "parola" or "fc16" | "parola"      |

### 链（chain）

每个点阵单元都是一个8x8 LED矩阵。矩阵中的所有LED颜色相同。您可以通过设置“链式”属性来扩大显示范围。例如，将“chain”设置为4将水平链导四个点矩阵单元，从而产生32x8矩阵（四次乘以8x8矩阵）。

如果您想以自定义方式链接单元（例如为每个单元选择不同的像素颜色，垂直链条等），请将一个单元的DOUT引脚连接到下一个单元的DIN引脚。您还需要将设备的CLK/CS引脚连接在一起。有关示例，请参阅[32x32 LED Matrix Tunnel](https://wokwi.com/projects/318864638990090834) 。

### 矩阵布局（layout）

根据常用模块，有几种类型的矩阵布局。您可以设置“layout”属性来选择所需的像素布局：

- “parola”-有关这些模块布局的信息，请参阅 [Parola documentation](https://majicdesigns.github.io/MD_MAX72XX/page_parola.html) 

- “fc16”-FC-16模块可从eBay和AliExpress获得。它们通常由四个8x8矩阵组成，因此它们总共有32x8像素。

选择错误的布局将导致您的文本/绘图被旋转和/或镜像。

### 示例

| Result                                           | Attrs                  |
| ------------------------------------------------ | ---------------------- |
| <DotMatrix style={{'--pixel-color': 'green'}} /> | `{ "color": "green" }` |
| <DotMatrixChain4/>                               | `{ "chain": "4" }`     |

## 仿真实例

- [Dot Matrix Clock](https://wokwi.com/projects/289186888566178317)
- [Etch A Sketch game](https://wokwi.com/projects/296234816685212169)
- [Electronic Dice (on ATtiny85)](https://wokwi.com/projects/291779699024069128)
- [Arduino QR Code Generator](https://wokwi.com/projects/318641692720759379)
- [32x32 LED Matrix Tunnel](https://wokwi.com/projects/318864638990090834)
- [MD_Parola library examples](https://wokwi.com/arduino/libraries/MD_Parola)
