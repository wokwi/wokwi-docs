---
title: 在Wokwi使用CircuitPython
sidebar_label: 使用CircuitPython
---

你可以使用[Raspberry Pi Pico board](../parts/wokwi-pi-pico)，在Wokwi上进行CircuitPython仿真。要开始新的仿真项目，请打开[Raspberry Pi Pico CircuitPython 项目实例](https://wokwi.com/projects/new/circuitpython-pi-pico)。

## 项目的工程结构

CircuitPython项目必须包含一个`code.py` 文件。此文件中的代码将在你开始仿真时执行。

Wokwi将所有项目文件复制到Pico的falsh文件系统中。这意味着你的项目可以包含额外的Python模块，你可以从`code.py` 或交互式REPL导入它们。你的项目还可以在文本文件中包含自定义数据。

你可以通过运行以下方式获得falsh文件系统中所有文件的列表：

```python
import os
print(os.listdir('/'))
```

## 库的使用

你可以使用 [Adafruit CircuitPython Bundle](https://github.com/adafruit/Adafruit_CircuitPython_Bundle)中的任何库。在项目中创建一个“requirements.txt”文件，并写下你使用的库的名称，每行一个。开头为“#”的行是注释。

例如，如果你想同时安装[adafruit_display_text](https://circuitpython.readthedocs.io/projects/display_text/en/latest/) 和 [adafruit_dht](https://circuitpython.readthedocs.io/projects/dht/en/latest/)，请创建一个包含以下内容的“requirements.txt”文件：

```
# requirements.txt example
adafruit_display_text
adafruit_dht
```

当你开始仿真时，Wokwi会下载所有库及其依赖项。它们会被复制到Flash文件系统中的“lib”文件夹中。你可以调用`os.listdir('/lib')`以获取已安装的所有库的列表。有关完整的代码示例，请参阅[CircuitPython Library List](https://wokwi.com/projects/309475039016649280)。

# CircuitPython REPL介绍

当`code.py` 中的代码终止（或者你用Ctrl+C中断它）时，你将进入CircuitPython REPL。REPL是一个交互式提示符，你可以在其中键入python命令并立即查看结果。要将代码粘贴到REPL，按下Ctrl+E进入粘贴模式。

## 项目例子

- [Blink with CircuitPython](https://wokwi.com/projects/309474946192507458)
- [CircuitPython SSD1306 Example](https://wokwi.com/projects/309427357921313345)
