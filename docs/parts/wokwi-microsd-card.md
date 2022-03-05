---
title: wokwi-microsd-card Reference
sidebar_label: wokwi-microsd-card
---

microSD card with SPI interface

<wokwi-microsd-card />

:::caution
The microSD card simulator is still in beta. The interface/behavior are prone to change!
:::

## Pin names

| Name | Description            |
| ---- | ---------------------- |
| CD   | Card detect \*         |
| DO   | SPI data output (MISO) |
| GND  | Ground                 |
| SCK  | SPI clock              |
| VCC  | Voltage supply         |
| DI   | SPI data input (MOSI)  |
| CS   | Chip select            |

\* The CD pin is connected to ground when there's no card in the socket. In the simulator, there's always a card in the socket, so this pin is always disconnected.

## Filesystem

When you start the simulation, Wokwi creates a FAT16 file system and attaches it to the microSD card. By default, Wokwi copies all your project files into the microSD card.

### Uploading binary files

[Club](https://wokwi.com) users can upload custom binary files (e.g. bitmaps, sounds, etc.) to the microSD card's filesystem. After adding a microSD card to your project, you'll see a new "SD Card" tab next to the other tabs in the code editor. Click on the purple "Upload Files" buttons and select any files you wish to upload.

You can also upload a complete folder tree (useful if you have a physical SD card attached to your computer and you want to upload all the data from it, as-as). Click on the small arrow next to the "Upload Files" button and select "Upload complete folder". Then select the folder with the files you want to upload.

<img src={require('./wokwi-microsd-card-upload.png').default} width={355} />

Wokwi stores the uploaded files for you, alongside with your project. Anyone who opens your project and starts the simulation will have to wait for all the micro SD card files to download before the simulation starts.

Example: [microSD Card project with a custom bitmap file](https://wokwi.com/projects/319810932695892564)

## Arduino code example

The example below uses the popular _SdFat_ Arduino library. It prints a list of all the files in the card. The code assumes the following connections:

| SD card pin | Arduino Uno pin |
| ----------- | --------------- |
| SCK         | 13              |
| DO          | 12              |
| DI          | 11              |
| CS          | 10              |

```cpp
#include "SdFat.h"

#define SPI_SPEED SD_SCK_MHZ(4)
#define CS_PIN 10

SdFat sd;

void setup() {
  Serial.begin(115200);
  if (!sd.begin(CS_PIN, SPI_SPEED)) {
    if (sd.card()->errorCode()) {
      Serial.println("SD initialization failed.");
    } else if (sd.vol()->fatType() == 0) {
      Serial.println("Can't find a valid FAT16/FAT32 partition.");
    } else {
      Serial.println("Can't determine error type");
    }
    return;
  }

  Serial.println("Files on card:");
  Serial.println("   Size    Name");

  sd.ls(LS_R | LS_SIZE);
}

void loop() {
}
```

[Run this example on Wokwi](https://wokwi.com/projects/310692660849410626)

## Simulator examples

- [SD library example](https://wokwi.com/projects/310542489623724609)
- [SdFat library example](https://wokwi.com/projects/310692660849410626)
