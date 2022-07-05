---
title: ESP32 WiFi Networking
sidebar_label: ESP32 WiFi
---

Wokwi simulates a WiFi network with full internet access. You can use the [ESP32](./esp32) together with the virtual WiFi to prototype IoT projects. Common use cases include:

- Connect to MQTT servers to send sensor data
- Query web services over HTTP, HTTPS, and web sockets
- Run an HTTP server inside the ESP32 and connect to it from your browser (requires the [Wokwi IoT Gateway](#the-private-gateway))

## Connecting to the WiFi

The simulator provides a virtual WiFi access point called **Wokwi-GUEST**. It is an open access point - no password is required.

### Connecting from Arduino

To connect from Arduino (on an ESP32) device, use the following code:

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

Note: We specify the WiFi channel number (6) when calling `WiFi.begin()`. The skips the WiFi scanning phase and saves about 4 seconds when connecting to the WiFi.

### Connecting from MicroPython

To connect from a [MicroPython project](https://wokwi.com/projects/new/micropython-esp32), use the following code:

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

Once connected, you can use the [urequests library](https://mpython.readthedocs.io/en/master/library/mPython/urequests.html) to send HTTP and HTTPS requests, and the [umqtt library](https://mpython.readthedocs.io/en/master/library/mPython/umqtt.simple.html) to establish MQTT connections.

## Internet Access

Wokwi uses a special gateway to connect your simulated ESP32 to the internet. This gateway is required since web browser do not allow direct internet access. There are two ways you can use the Wokwi IoT Gateway: the Public Gateway, and the Private Gateway.

|                      | Public Gateway        | Private Gateway                                        |
| -------------------- | --------------------- | ------------------------------------------------------ |
| Speed                | Slower                | Faster                                                 |
| Stability            | Medium                | High                                                   |
| Location             | Remote, in the cloud  | Runs on your computer                                  |
| Privacy              | Connections monitored | No monitoring                                          |
| Outgoing connections | ✅                    | ✅                                                     |
| Incoming connections | ❌                    | ✅                                                     |
| Availability         | All users             | Only for [Club](../getting-started/wokwi-club) members |

### The Public Gateway

The Public Gateway is the default internet connection method. It works out of the box and enables access to the internet, but not to your local network. All the traffic is monitored for security purposes, so **do not use it** for private or sensitive data. We occasionally inspect the traffic and may enforce limits if we notice excessive usage of the gateway.

The Public Gateway is a great choice for playing around and learning about WiFi and networking in the ESP32.

### The Private Gateway

The Private Gateway is a small application that you download and run on your computer. It allows faster and more robust ESP32 internet access: the data goes directly from the simulator (running in your browser) to you computer's network, without having to go through the cloud. This means:

- There's no monitoring. Your traffic stays private.
- Your ESP32 projects can access services running on your computer or your local network (e.g. a local MQTT or HTTP server)
- You can run a web server on the ESP32 and connect to it from your browser (explained below)

The Private Gateway is only available for users who join [The Wokwi Club](../getting-started/wokwi-club).

#### Installation

Download the latest version from the [Wokwi IoT Gateway releases page](https://github.com/wokwi/wokwigw/releases/latest). You'll see there versions for Windows, macOS, and Linux. Then extract the ZIP file and run the executable file inside. Your browser / operating system may warn you that the file may be unsafe, so you'll have to tell them to run it anyway.

The gateway _does not_ require any administrator / root permissions. It happily runs as a standard process on your computer.

When you run the gateway, it should print a logo, its version, and say: "Listening on TCP port 9011". Hooray, you've completed the setup!

If you are worried about running the gateway executable on your computer, you are invited to take a look at the [source code](https://github.com/wokwi/wokwigw), and even build the executable file yourself (ask for instructions on [discord](https://wokwi.com/discord)).

#### Usage

After running the gateway, open any project in Wokwi, go to the code editor, press "F1" and select "Enable Private Wokwi IoT Gateway". You'll be prompted if you want to enable the gateway. Answer "OK" to enable the Private Gateway, or "Cancel" to disable it and switch back to the Public Gateway.

Then run any ESP32 project that uses the WiFi. Look at the gateway output, it should say "Client connected". This means you are using the Private Gateway.

If your ESP32 project is an HTTP server, you can connect to it from your browser at [http://localhost:9080/](http://localhost:9080). The connection will be forwarded by the gateway to the default HTTP port (80) on the simulated ESP32. If you need to forward different ports, please [open an issue on Github](https://github.com/wokwi/wokwigw/issues/new).

Note: The Private IoT Gateway is not currently supported in Safari due to [a technical limitation](https://bugs.webkit.org/show_bug.cgi?id=171934#c96). Please use a different browser (e.g. Chrome, Firefox, Edge).

## Advanced Usage

### Network addresses

The ESP32 gets an IP address from a DHCP server running inside the Wokwi IoT gateway. The IP address depends on the type of the gateway that you use:

- Public Gateway: 10.10.0.2
- Private Gateway: 10.13.37.2

The MAC address of the simulated ESP32 is 24:0a:c4:00:01:10.
The BSSID of the virtual access point ("Wokwi-GUEST") is 42:13:37:55:aa:01, and it is listening on WiFi channel 6.

### Viewing WiFi traffic with Wireshark

Wokwi simulates a complete network stack: starting at the lowest 802.11 MAC Layer, through the IP and TCP/UDP layers, all the way up to protocols such as DNS, HTTP, MQTT, CoAP, etc. You can view the raw WiFi traffic using a network protocol analyzer such as [Wireshark](https://www.wireshark.org).

First, run an ESP32 project that uses the WiFi in the simulator. Then, go to the code editor, press F1 and choose **Download WiFi Packet Capture (PCAP) file**. Your browser will download a file called _wokwi.pcap_. Use Wireshark to open this file.

The following screen shot shows an example of an HTTP request packet capture:

![ESP32 WiFi Wireshark Packets: DNS, HTTP, and 802.11 MAC](esp32-wifi-wireshark.png)

As you can see, the PCAP file contains all sort of packets: 802.11 beacon frames, DNS query response (the first entry in the list), and HTTP request/response packets (No. 107 and 113).

In most cases, you'll only want to focus on a specific protocol. You can achieve this by pressing Ctrl+/ in wireshark, and typing a protocol name (http, tcp, ip, dns, dhcp, etc.). The will filter the list and display only the relevant packets.

:::caution
The Time field in the packet capture uses the simulation clock time. It may advance slower than wall clock time if the simulation is running slower than full speed (100%).
:::

### Limitations

The Wokwi IoT Gateway supports both TCP and UDP. It does not support the ICMP protocol, so the Ping functionality is not available.

## Project Examples

- [NTP Client](https://wokwi.com/projects/321525495180034642) - Gets the current date and time from an NTP server and displays them on an LCD screen.
- [MicroPython MQTT Weather Logger](https://wokwi.com/projects/322577683855704658) - Reads the current temperature + humidity every second and report changes to an MQTT server.
- [ESP32 HTTP Server](https://wokwi.com/projects/320964045035274834) - Serves a web page that controls 2 LEDs. Requires the [Wokwi IoT Gateway](#the-private-gateway).
