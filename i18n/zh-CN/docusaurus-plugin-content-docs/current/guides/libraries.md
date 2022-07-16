---
title: Arduino 库
sidebar_label: Arduino 库
---



当你想要引用一个库时，请转到代码编辑器，并在空行上键入`#`。你将看到一个自动完成下拉菜单，其中包含针对流行库的`#include`自动补全建议。

在默认情况下，Wokwi使用标准内置Arduino库（如Wire.h和SPI.h）编译你的代码。

要将第三方库添加到项目中，请将“libraries.txt”文件添加到您的项目中。列出您想要包含的库，每行一个库。开头为“#”的行是注释。

例如，以下文件将安装最新版本的 Servo 库和 FastLED 库，以及 MySensors 库的 2.3.0 版本：

```
# Sample libraries.txt file:
Servo
FastLED

# Install a specific version of a library:
MySensors@2.3.0
```

You can find the library names in the Arduino Library Manager. Alternatively, you can find it inside the source code of the library. Look for the `name` field of the `library.properties` file.（这句话不太懂什么意思？？）

您可以在Arduino库管理器中找到库的名称。或者，您可以在库的源代码中找到它。查找`library.properties`文件的`name`字段。

目前，我们仅支持Arduino Library Manager的库。如果你需要Arduino库管理器上不支持的库，你可以将库源文件复制到你的项目中，或[将其提交给Arduino库管理器](https://github.com/arduino/library-registry/blob/main/FAQ.md#submission)。



------

相关链接：

1. arduino 官方库的汇总外链： https://www.arduino.cc/reference/en/libraries/

2. arduino 内核对Library specification的介绍：https://arduino.github.io/arduino-cli/0.22/library-specification/

