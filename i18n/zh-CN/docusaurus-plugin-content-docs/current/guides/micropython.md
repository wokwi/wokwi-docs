---
title: 在Wokwi使用MicroPython
sidebar_label: 使用MicroPython
---

你可以在Wokwi上创建和运行MicroPython项目。[Raspberry Pi Pico MicroPython 工程样例](https://wokwi.com/projects/new/micropython-pi-pico)帮助你快速开始。

## 项目的工程结构

所有的MicroPython项目必须包含一个 `main.py` 文件。当你开始仿真时，MicroPython将自动从 `main.py` 加载和执行代码。

Wokwi将所有项目文件复制到Pico的falsh文件系统中。这意味着你的项目可以包括额外的Python模块，你可以从`main.py`或[交互式REPL（交互式命令，开始仿真后，绘图界面出现的黑色的区域）](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop)导入它们。你的项目还可以在文本文件中包含自定义数据。

你可以通过运行以下方式获得falsh文件系统中所有文件的列表：

```python
import os
print(os.listdir('/'))
```

# MicroPython REPL介绍

当`main.py`中的代码终止（或者你用Ctrl+C中断它）时，你将进入MicroPython REPL。REPL是一个交互式提示符，你可以在其中键入python命令并立即查看结果。输入`help()`可查看MicroPython API备忘表。要将代码粘贴到REPL中，按下Ctrl+E后可进入粘贴模式。

## 项目例子

- [Blink with MicroPython](https://wokwi.com/projects/300504213470839309)
- [MicroPython 7-Segment Display](https://wokwi.com/projects/300210834979684872)
