---
title: 调试你的代码
sidebar_label: 调试
---

您可以在模拟器运行代码时使用 VS Code 调试器对其进行调试。要设置调试器，请按照以下步骤操作：

## 配置 Wokwi

将以下行添加到 `wokwi.toml` 配置文件的 `[wokwi]` 部分：

```toml
gdbServerPort=3333
```

## 配置 VS Code

在 `.vscode/launch.json` 为 VS Code 创建启动配置文件。这是您可以使用的模板：

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Wokwi GDB",
      "type": "cppdbg",
      "request": "launch",
      "program": "${workspaceFolder}/build/your-firmware.elf",
      "cwd": "${workspaceFolder}",
      "MIMode": "gdb",
      "miDebuggerPath": "/usr/local/bin/xtensa-esp32-elf-gdb",
      "miDebuggerServerAddress": "localhost:3333"
    }
  ]
}
```
`type` 描述了此处使用的 VS Code 扩展。在本例中为 `cppdbg`。因此必须安装以下扩展：https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools
将 `program` 路径替换为固件的 ELF 文件路径，将 `miDebuggerPath` 替换为支持项目架构的 GDB 可执行文件的路径（例如，对于 AVR 项目，使用 `avr-gdb`）。

## 启动调试器

按 **F1** 启动 Wokwi 模拟器，然后选择“**Wokwi: Start Simulator and Wait for Debugger**”。模拟器将加载，但程序将暂停，等待调试器连接。然后按 **F5** 启动调试器。

:::caution
您需要在启动调试器之前启动 Wokwi。如果先启动调试器，它将无法连接到模拟器。
:::
