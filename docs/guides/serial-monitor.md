---
title: The Serial Monitor
sidebar_label: Serial Monitor
---

The Serial Monitor provides a way to send/receive information to/from your Arduino code.
You can use it to view debug messages printed by your program, or to send commands that control
your program.

## Arduino Uno and Mega

Both the Arduino Uno and Mega have hardware support for the Serial protocol (USART). The Serial Monitor will automatically attach to the hardware serial port and detect the baud rate, so it'll work out of the box without any special configuration.

You can use [Arduino's Serial class](https://www.arduino.cc/reference/en/language/functions/communication/serial/) to interact with the Serial monitor:

```cpp
void setup() {
  Serial.begin(115200); // Any baud rate should work
  Serial.println("Hello Arduino\n");
}

void loop() {
  // Do nothing...
}
```

:::caution
The serial monitor will only show once you print some output from your program.
:::

The Arduino Mega has multiple hardware Serial ports. You can connect the Serial monitor to a different serial port by configuring the pins in diagram.json. For instance, to connect `Serial2` to the serial monitor, add the following lines to the `connections` section in your diagram:

```json
  [ "mega:17", "$serialMonitor:TX", "" ],
  [ "mega:16", "$serialMonitor:RX", "" ],
```

Replace `mega` with the actual id of your `wokwi-arduino-mega` part.  
Note that you need to connect `$serialMonitor:TX` to the `RX` pin of the serial port, and `$serialMonitor:RX` to the `TX` pin of the serial port. This can be confusing, I know.

## ATtiny85 + SoftwareSerial

The ATtiny85 chip does not have a built-in hardware support for serial communication (USART). You can use a
software implementation of the USART protocol to interact with the Serial monitor, using the "SoftwareSerial" library.

First, define the pins that will be used for Serial communication, by adding the following lines to the `connections` section of your [diagram.json](../diagram-format) file:

```json
  [ "tiny:PB0", "$serialMonitor:TX", "" ],
  [ "tiny:PB1", "$serialMonitor:RX", "" ],
```

Replace `tiny` with the actual id of your `wokwi-attiny85` part, and `PB1`/`PB0` with the pin names that you would like to use.

Then, configure the SoftwareSerial library accordingly:

```cpp
#include <SoftwareSerial.h>

SoftwareSerial Serial(PB0, PB1);

void setup() {
  Serial.begin(9600); // Must be 9600
  Serial.println("Hello Arduino\n");
}

void loop() {
  // Do nothing...
}
```

Make sure the the pin names in your code match the ones in the diagram file. The first parameter
to the `SoftwareSerial` constructor should match the pin connected to `$serialMonitor:TX`, and
the second parameter should match the pin connected to `$serialMonitor:RX`.

:::caution
The baud rate must be set to **9600**. This is hard coded in the simulator, and using a different
value will get you garbage in the Serial monitor.
:::

For a complete example, check out the [ATtiny85 SoftwareSerial example project](https://wokwi.com/arduino/projects/290883003139228169).
