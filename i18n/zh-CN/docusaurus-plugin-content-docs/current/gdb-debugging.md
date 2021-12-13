---
title: GDB调试工具
sidebar_label: 调试工具
---

GDB是一个强大的代码调试工具，你可以用它来调试wokwi中的代码。

## 在Wokwi中运行GDB

要启动GDB，在代码编辑器中按F1，在弹出的提示框中输入“GDB”，然后选择**"Start Web GDB Session (debug build)"**

这会在浏览器中打开一个新tab启动GDB。如果这是你第一次使用这个功能，大概会花30秒的时间加载。

## 调试会话示例

当GDB加载完成后，你会看到如下提示：

```
0x00000000 in __vectors ()
(gdb)
```

现在你可以输入GDB指令，例如，如果你想从`setup()`开始一行一行运行你的程序，先输入`tbreak setup`和`c`来启动程序，然后运行直到`setup()`的开始：

```
(gdb) tbreak setup
Temporary breakpoint 1 at 0x2ca: file sketch.ino, line 28.
(gdb) c
Continuing.

Temporary breakpoint 1, setup () at sketch.ino:28
28        pinMode(LED_BUILTIN, OUTPUT);
(gdb)
```

此时，输入`layout src`显示你程序的源代码，然后输入`next`来执行下一行代码，然后重复输入`next`继续执行后面的每一行。

`print`命令用来打印变量的值。例如使用`print ledIndex`来打印名为`ledIndex`的值。

## Learn more
## 了解更多

查看[AVR GDB 手册](https://blog.wokwi.com/gdb-avr-arduino-cheatsheet/)，了解更多有用的 GDB 命令。学习所有的 GDB 功能并有效地使用它们需要时间，但即便只使用几个基本命令，它也可以非常强大。

如果你想了解我们如何让 GDB 在浏览器中工作，请查看[在浏览器中运行 GDB](https://blog.wokwi.com/running-gdb-in-the-browser/)。这不是使用 GDB 所必须了解的 - 只是让你看一下幕后的疯狂操作。