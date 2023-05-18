---
title: 配置你的项目（wokwi.toml）
sidebar_label: 项目配置
---

要在 Wokwi 上模拟你的项目，你需要在项目的根目录中创建两个文件：

- `wokwi.toml` - 告诉 Wokwi 如何运行你的项目的配置文件。
- `diagram.json` - 用于描述电路的 [diagram file](../diagram-format) 文件。

## wokwi.toml

基本的 `wokwi.toml` 看起来像这样：

```toml
[wokwi]
version = 1
firmware = 'path-to-your-firmware.hex'
elf = 'path-to-your-firmware.elf'
```

将 “path-to-your-firmware” 替换为已编译固件的位置，**相对于** wokwi.toml 文件的位置（即你的工作空间的根目录）。

固件文件的扩展名取决于你使用的开发板：

| Board                      | Supported firmware types |
| -------------------------- | ------------------------ |
| Arduino Uno/Mega, ATtiny85 | .hex, .elf               |
| Raspberry Pi Pico          | .hex, .uf2               |
| ESP32 Family               | .bin, .uf2, .elf         |

你可以通过按 **F1** 键然后选择 “Wokwi: Start Simulator” 来检查测试你的配置。

:::caution
避免在路径中使用反斜杠（`\`）。改用正斜杠（`/`）代替，它会使你的项目能够在任何平台上打开（包括Windows、Mac和Linux）。
:::

### 串口转发

Wokwi for VS Code 允许你使用 RFC2217 TCP 服务连接到模拟微控制器的串行端口。要启用此功能，请将以下配置添加到 wokwi.toml 文件的 `[wokwi]` 部分内：

```toml
rfc2217ServerPort = 4000
```

这将在端口 4000 上启动 RFC2217 服务。然后你可以使用任何 telnet 客户端（例如 [PuTTY](https://www.putty.org/)）连接到串行端口。此外，你可以使用 PySerial 的 [RFC2217 support](https://pyserial.readthedocs.io/en/latest/url_handlers.html#rfc2217) 支持从你的 Python 代码连接到串口：

```python
import serial

ser = serial.serial_for_url('rfc2217://localhost:4000', baudrate=115200)
ser.write(b'hello')
```

注意：确保模拟器选项卡在 VS Code 中可见，否则模拟可能会暂停并且你不会从微控制器获得任何串行输出。

### 物联网网关 (ESP32 WiFi)

Wokwi for VS Code 包含一个捆绑版本的 [Wokwi 私有物联网网关](../guides/esp32-wifi#internet-access)，它允许你将模拟 ESP32 的虚拟 WiFi 连接到你的本地网络和互联网。

你还可以从你的计算机连接到模拟 ESP（例如，你正在 ESP32 上运行网络服务器）。为此，请在 wokwi.toml 中设置端口转发。比如将本地的8180端口转发到ESP32的80端口，添加如下配置：

```
# 将 http://localhost:8180 转发到模拟 ESP32 上的 80 端口：
[[net.forward]]
from = "localhost:8180"
to = "target:80"
```

有关完整示例，请参阅 [ESP32 Web 服务器](https://github.com/wokwi/esp32-http-server)项目。

### 自定义芯片

您可以通过在 wokwi.toml 配置中添加 `[[chip]]` 部分来加载自定义芯片到仿真中。以下示例将从“chip/inverter.chip.wasm”加载芯片，并在 Wokwi 的图表中将其命名为 `chip-inverter`，以供使用：

```toml
[[chip]]
name = 'inverter'  # To use the chip in diagram.json, add a part with "chip-inverter" type.
binary = 'chips/inverter.chip.wasm'
```

Wokwi 还需要一个描述芯片引脚的 JSON 文件。这个 JSON 文件应该与 wasm 二进制文件同名，但是扩展名为 json（例如在上面的示例中 `chips/inverter.chip.json`）。完整的例子请查看 [the inverter-chip repo](https://github.com/wokwi/inverter-chip)。

您可以通过添加多个 `[[chip]]` 部分来向您的项目添加多个芯片，每个部分具有不同的`名称`和`二进制文件`。

## diagram.json

您可以从 [Wokwi.com](https://wokwi.com) 上的现有项目复制 [diagram file](../diagram-format)。例如，如果您正在处理 ESP32 项目，则可以从 https://wokwi.com/projects/new/esp32 复制 diagram.json 的内容。
