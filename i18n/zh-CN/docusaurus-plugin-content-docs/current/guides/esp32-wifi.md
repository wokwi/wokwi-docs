---
title: ESP32的WIFI使用
sidebar_label: ESP32的WiFi使用
---

Wokwi可以模拟出具有完全互联网接入的WiFi网络。您可以使用[ESP32](./esp32)和虚拟WiFi来制作物联网项目原型。常见的用例包括：

- 连接到MQTT服务器以发送传感器数据
- 通过 HTTP、HTTPS 和 Web 套接字查询 Web 服务
- 在ESP32中运行HTTP服务器，并从浏览器连接到它（需要[Wokwi IoT Gateway](#the-private-gateway)）

## 连接到WIFI网络

模拟器提供了一个名为**Wokwi-GUEST**的虚拟WiFi接入点。这是一个开放的接入点-不需要密码。

### 使用Arduino连接

要在使用Arduino（在ESP32）的设备上连接，请使用以下代码：

```cpp
#include <WiFi.h>

void setup() {
  Serial.begin(9600);
  Serial.print("Connecting to WiFi");
  WiFi.begin("Wokwi-GUEST", "", 6);
  while (WiFi.status() != WL_CONNECTED) {
    delay(100);
    Serial.print(".");
  }
  Serial.println(" Connected!");
}

void loop() {
  delay(100); // TODO: Build something amazing!
}
```

注意：我们在调用`WiFi.begin()`时指定WiFi通道号(6)。这个步骤跳过了WiFi扫描阶段，连接到WiFi时节省了约4秒的时间。

### 使用MicroPython连接

要使用 [MicroPython项目](https://wokwi.com/projects/new/micropython-esp32)连接，请使用以下代码：

```python
import network
import time

print("Connecting to WiFi", end="")
sta_if = network.WLAN(network.STA_IF)
sta_if.active(True)
sta_if.connect('Wokwi-GUEST', '')
while not sta_if.isconnected():
  print(".", end="")
  time.sleep(0.1)
print(" Connected!")
```

连接后，您可以使用 [urequests 库](https://mpython.readthedocs.io/en/master/library/mPython/urequests.html)发送HTTP和HTTPS请求，并使用[umqtt 库](https://mpython.readthedocs.io/en/master/library/mPython/umqtt.simple.html) 发送MQTT连接。

## 网络权限

Wokwi使用特殊的网关将您的模拟ESP32连接到互联网。由于网络浏览器不允许直接访问互联网，因此需要此网关。有两种方法可以使用Wokwi物联网网关：公共网关和私有网关。

|                      | 公共网关    | 私有网关                                   |
| -------------------- | --------------------- | ------------------------------------------------------ |
| 速度              | 慢              | 更快                                               |
| 稳定性         | 中等              | 高                                                  |
| 位置           | 远程，在云端 | 在你的电脑上运行                          |
| 隐私性     | 受监控的连接 | 不受监控                                   |
| 外网连接 | ✅                    | ✅                                                     |
| 内网连接 | ❌                    | ✅                                                     |
| 可用性      | 所有人          | 仅供 [Club](../getting-started/wokwi-club) 会员 |

### 公共网关

公共网关是默认的互联网连接方法。它开箱即用，可以访问互联网，但不能访问您的本地网络。为了安全起见，所有流量都会受到监控，因此**不要将其用于私人或敏感数据**。我们偶尔会检查流量，如果我们注意到网关的过度使用，可能会实施限制。

公共网关是在ESP32中随便玩一玩或者学习WiFi网络的绝佳选择。

### 私有网关

私有网关是一个小型应用程序，您可以在计算机上下载并运行。它允许更快、更强大的ESP32互联网访问：数据直接从模拟器（在浏览器中运行）传输到计算机的网络，而无需通过云。这意味着：

- 不受监控。您的数据通信保持私密。
- 您的ESP32项目可以访问在您的计算机或本地网络上运行的服务（例如本地MQTT或HTTP服务器）
- 您可以在ESP32上运行Web服务器，并从浏览器连接到它（下面会有解释）

私人网关仅为加入[The Wokwi Club](../getting-started/wokwi-club)的用户提供。

#### 安装

从[Wokwi IoT Gateway 发布界面](https://github.com/wokwi/wokwigw/releases/latest)下载最新版本的软件。您将看到Windows、macOS和Linux的版本。然后提取ZIP文件并运行里面的可执行文件。您的浏览器/操作系统可能会警告您，该文件可能不安全，因此您需要选择“无论如何都要运行它”。

网关不需要任何管理员或者root权限。它可以作为标准流程在您的计算机上顺利运行。

当您运行网关时，它会输出一个logo及它的版本，并且输出：“Listening on TCP port 9011”。祝贺，你已经完成了设置！

如果您担心在计算机上运行网关可执行文件，请您查看 [source code](https://github.com/wokwi/wokwigw)，甚至你可以自己构建可执行文件（在这里提问 [discord](https://wokwi.com/discord)）。

#### 使用方法

运行网关后，在Wokwi中打开任何项目，转到代码编辑器，按“F1”，然后选择“Enable Private Wokwi IoT Gateway”。如果您想启用网关，系统会提示您。回答“确定”以启用专用网关，或“取消”将其禁用并切换回公共网关。

然后运行任何使用WiFi的ESP32项目。看看网关输出，它应该显示“Client connected”。这意味着您正在使用专用网关。

如果您的ESP32项目是HTTP服务器，您可以从浏览器进入地址：[http://localhost:9080/](http://localhost:9080)连接到它。连接将由网关转发到模拟ESP32上的默认HTTP端口（80）。如果您需要转发不同的端口，请[open an issue on Github](https://github.com/wokwi/wokwigw/issues/new).。

注意：由于 [技术限制](https://bugs.webkit.org/show_bug.cgi?id=171934#c96)，Safari浏览器目前不支持专用物联网网关。请使用其他浏览器（例如Chrome、Firefox、Edge）。

## 高级使用篇

### 网络地址

ESP32从Wokwi物联网网关内运行的DHCP服务器获取IP地址。IP地址取决于您使用的网关类型：

- 公共网关: 10.10.0.2
- 私有网关: 10.13.37.2

模拟ESP32的MAC地址是 24:0a:c4:00:01:10 。

虚拟接入点（“Wokwi-GUEST”）的BSSID是 42:13:37:55:aa:01 ，它被监听在WiFi通道6上。

### 使用Wireshark查看wifi的传输信息

Wokwi模拟了一个完整的网络堆栈：从最低的802.11 MAC层开始，通过IP和TCP/UDP层，一直到DNS、HTTP、MQTT、CoAP等协议。您可以使用[Wireshark](https://www.wireshark.org)等网络协议分析器查看原始WiFi流量。

首先，运行一个使用模拟器中WiFi的ESP32项目。然后，转到代码编辑器，按F1并选择**下载WiFi数据包捕获（PCAP）文件**。您的浏览器将下载一个名为_wokwi.pcap_的文件。使用Wireshark打开此文件。

以下屏幕截图显示了HTTP请求数据包捕获的示例：

![ESP32 WiFi Wireshark Packets: DNS, HTTP, and 802.11 MAC](esp32-wifi-wireshark.png)

如您所见，PCAP文件包含各种数据包：802.11信标帧、DNS查询响应（列表中的第一个条目）和HTTP请求/响应数据包（第107和113号）。

在大多数情况下，您只想专注于特定的协议。您可以通过在Wireshark中按Ctrl+/并键入协议名称（http、tcp、ip、dns、dhcp等）来实现这一点。它将过滤列表，并仅显示相关数据包。

:::caution

数据包捕获中的时间字段使用模拟时钟时间。如果模拟运行速度低于全速（100%），它可能会比钟表的时间慢。

:::

### 限制

Wokwi物联网网关支持TCP和UDP。它不支持ICMP协议，因此Ping功能不可用。

## 项目例子

- [NTP Client](https://wokwi.com/projects/321525495180034642) - 从NTP服务器获取当前日期和时间，并将其显示在LCD屏幕上。
- [MicroPython MQTT Weather Logger](https://wokwi.com/projects/322577683855704658) - 每秒读取当前温度+湿度，并向MQTT服务器报告变化。
- [ESP32 HTTP Server](https://wokwi.com/projects/320964045035274834) - 提供了用于控制2个LED的网页。需要[Wokwi IoT Gateway](#the-private-gateway)。

