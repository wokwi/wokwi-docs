---
title: wokwi-logic-analyzer参考
sidebar_label: wokwi-logic-analyzer参考
---

8通道数字逻辑分析仪

![Logic Analyzer](wokwi-logic-analyzer.svg)

## 引脚名称

引脚D0到D7连接到逻辑分析仪的输入通道。还有一个GND引脚，应该连接到数字地面。

## 属性

| Name         | Description                        | Default value |
| ------------ | ---------------------------------- | ------------- |
| bufferSize   | 要采集的最大样本数量               | "1000000"     |
| filename     | 录音文件的名称，不带扩展名         | "wokwi-logic" |
| triggerMode  | 触发模式: "off", "level" or "edge" | "off"         |
| triggerLevel | "high" or "low"                    | "high"        |
| triggerPin   | "D0" … "D7"                        | "D7"          |

### 采样缓冲区

逻辑分析仪使用缓冲区来存储记录的引脚数据。每个引脚电平变化（例如从低到高）占据缓冲区中的一个插槽。模拟器分配提前为缓冲区提供内存，以确保快速模拟。

您可以通过设置`bufferSize`属性来选择缓冲区的大小。缓冲区中的每个插槽使用9字节的RAM。因此，100万的默认缓冲区大小样本将使用约9 MB的RAM。分配一个大缓冲区可能会使您的浏览器紧张。

逻辑分析仪显示模拟运行时捕获的样本数量。您可以使用此数字来估计所需的缓冲区大小。

### 触发

触发器控制逻辑分析器何时开始记录数据。默认情况下，触发器处于关闭状态，因此逻辑分析器会捕获所有数据。您可以使用三个属性`triggerMode`、`triggerPin`和`triggerEdge`来配置触发器。

下表总结了可用的触发模式：

| triggerMode | Description     | Behavior                                   |
| ----------- | --------------- | ------------------------------------------ |
| "off"       | Disable trigger | 所有数据都已记录                           |
| "edge"      | Edge trigger    | 当`triggerPin`等于`triggerLevel`时开始记录 |
| "level"     | Level trigger   | 仅当`triggerPin`等于`riggerLevel`时才记录  |

当`triggerPin`更改为`triggerLevel`时，“边缘”模式开始记录，并持续记录，直到仿真结束。例如，如果您将`triggerPin`设置为“D7”，将`triggerLevel`设置为“高”（其默认值），当引脚D7变高时，逻辑分析器将开始记录。

“级别”模式更通用：就像“边缘”模式一样，当`triggerPin`更改为`triggerLevel`时，它会开始记录，但一旦`triggerPin`再次更改，它就会暂停记录。

有关使用示例，请查看Logic Analyzer指南中的[Using the Trigger section](../guides/logic-analyzer#using-the-trigger) 。

## 查看数据

当您停止仿真时，逻辑分析器会将包含录制样本的文件下载到您的计算机上。录音文件使用标准[Value Change Dump (VCD)](https://en.wikipedia.org/wiki/Value_change_dump) 格式。该文件默认称为“wokwi-logic.vcd”，但您可以使用`filename` 属性配置名称。

要了解如何查看数据，请访问我们的[Logic Analyzer Guide](../guides/logic-analyzer#using-the-logic-analyzer)。

## 仿真实例

- [Logic Analyzer recording I2C protocol signals](https://wokwi.com/projects/325933824665977428)
