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

The BSSID of the access point is 42:13:37:55:aa:01.

### Connecting from Arduino

To connect from Arduino (on an ESP32) device, use the following code:

```cpp
#include <WiFi.h>

void setup() {
  Serial.print("Connecting to WiFi");
  WiFi.begin("Wokwi-GUEST", "");
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

### Connecting from MicroPython

To connect from a [MicroPython project](https://wokwi.com/arduino/new?template=micropython-esp32), use the following code:

```python
import network

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

If your ESP32 project is an HTTP server, you can connect to it from your browser at http://localhost:9080/. The connection will be forwarded by the gateway to the default HTTP port (80) on the simulated ESP32. If you need to forward different ports, please [open an issue on Github](https://github.com/wokwi/wokwigw/issues/new).

## Limitations

The Wokwi IoT Gateway supports both TCP and UDP. It does not support the ICMP protocol, so the Ping functionality is not available.
