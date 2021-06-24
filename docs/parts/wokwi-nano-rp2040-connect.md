---
title: wokwi-nano-rp2040-connect Reference
sidebar_label: wokwi-nano-rp2040-connect
---

Raspberry Pi RP2040-based board with WiFi + Bluetooth support in Arduino Nano form factor.

<wokwi-nano-rp2040-connect></wokwi-nano-rp2040-connect>

## Pin names

| Pin | RP2040 Pin | Functions             |
| --- | ---------- | --------------------- |
| RX  | 0          | UART RX               |
| TX  | 1          | UART TX               |
| D2  | 25         |                       |
| D3  | 15         |                       |
| D4  | 16         |                       |
| D5  | 17         |                       |
| D6  | 18         |                       |
| D7  | 19         |                       |
| D8  | 20         |                       |
| D9  | 21         |                       |
| D10 | 5          |                       |
| D11 | 7          | SPI MOSI              |
| D12 | 4          | SPI MISO              |
| D13 | 6          | SPI SCK, LED          |
| A0  | 26         |                       |
| A1  | 27         |                       |
| A2  | 28         |                       |
| A3  | 29         |                       |
| A4  | 12\*       | I2C SDA               |
| A5  | 13\*       | I2C SCL               |
| A6  | \*         |                       |
| A7  | \*         |                       |
| VCC | VCC        | Positive voltage (5V) |
| GND | GND        | Ground                |

\* Pins A4…A7 are connected through the u-blox NINA W102 WiFi/BT module. They are only capable of analog / digital input. Pins A4/A5 also support I2C communication.

### On board LEDs

The board includes two standard LEDs and one RGB LED:

| LED | Color  | Function                                             |
| --- | ------ | ---------------------------------------------------- |
| ON  | Green  | Power LED. Always on while the simulation is running |
| L   | Yellow | Connected to pin D13                                 |
| RGB | All    | Connected to 3 internal pins: `LEDR`, `LEDG`, `LEDB` |

If you want to use the RGB LED in your code, you'll need to include to `WiFiNINA.h` library.
Here is a complete example:

```cpp
#include <WiFiNINA.h>

void setup() {
  pinMode(LEDR, OUTPUT);
  pinMode(LEDG, OUTPUT);
  pinMode(LEDB, OUTPUT);
}

void loop() {
  digitalWrite(LEDR, HIGH);
  delay(250);
  digitalWrite(LEDR, LOW);
  digitalWrite(LEDG, HIGH);
  delay(250);
  digitalWrite(LEDG, LOW);
  digitalWrite(LEDB, HIGH);
  delay(250);
  digitalWrite(LEDB, LOW);
}
```

## Simulation features

The Arduino Nano RP2040 Connect is simulated using the [RP2040js Library](https://github.com/wokwi/rp2040js). Please see the [wokwi-pi-pico docs](wokwi-pi-pico#simulation-features) for a complete list of supported features.

### WiFi Support

The simulation includes partial WiFi support. You can scan for networks, connect to an access point, and even define your own access point (and connect
to it from another simulation running in a browser tab). Actual data exchange (e.g. opening a TCP connection) hasn't been implemented yet. Expect some updates soon!

The simulator also provides two built-in access points:

| Name (SSID) | BSSID             | Description                                      |
| ----------- | ----------------- | ------------------------------------------------ |
| Wokwi-GUEST | 42:13:37:55:aa:01 | Open WiFi network (no password required)         |
| Wokwi-Club  | 42:13:37:55:aa:02 | [Club](https://wokwi.com/club)-only WiFi network |

You can connect to these access point from your code:

```cpp
#include <WiFiNINA.h>

void setup() {
  Serial1.begin(115200);

  while (WiFi.status() != WL_CONNECTED) {
    Serial1.println("Connecting to Wokwi-GUEST...");
    WiFi.begin("Wokwi-GUEST");
    delay(1000);
  }

  Serial1.print("Connected! IP Address: ");
  Serial1.println(WiFi.localIP());
}

void loop() {
  delay(1);
}
```

Or define your own access point:

```cpp
#include <WiFiNINA.h>

void setup() {
  WiFi.beginAP("my-cool-AP", "verysecret");
}

void loop() {
  int status = WiFi.status();
  if (status == WL_AP_CONNECTED) {
    // Someone connected to our Access Point! Do something...
  }
  delay(1);
}
```

## Simulator examples

- [Blink on the Nano RP2040 Connect](https://wokwi.com/arduino/projects/302107513045647885)
- [WiFi Scanning](https://wokwi.com/arduino/projects/302218566716883465)
