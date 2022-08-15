---
title: wokwi-microsd-card参考
sidebar_label: wokwi-microsd-card参考
---

带有SPI接口的microSD卡

<wokwi-microsd-card />

:::caution
microSD卡模拟器仍处于测试阶段。界面/行为容易改变！
:::

## 引脚名称

| Name | Description            |
| ---- | ---------------------- |
| CD   | Card detect \*         |
| DO   | SPI data output (MISO) |
| GND  | Ground                 |
| SCK  | SPI clock              |
| VCC  | Voltage supply         |
| DI   | SPI data input (MOSI)  |
| CS   | Chip select            |

\* 当插座中没有卡时，CD引脚会连接到接地。在模拟器中，插座中总是有一张卡片，所以这个引脚总是断开连接。

## 文件系统

当您开始仿真时，Wokwi会创建一个FAT16文件系统，并将其附加到microSD卡上。默认情况下，Wokwi将您的所有项目文件复制到microSD卡中。

### 上传二进制文件

[Club](https://wokwi.com) 用户可以将自定义二进制文件（例如位图、声音等）上传到microSD卡的文件系统。将microSD卡添加到项目后，您将在代码编辑器中的其他选项卡旁边看到一个新的“SD卡”选项卡。单击紫色的“上传文件”按钮，然后选择您想要上传的任何文件。

您还可以上传完整的文件夹树（如果您的计算机上附加了物理SD卡，并且您希望上传其中的所有数据，则有用）。点按“上传文件”按钮旁边的小箭头，然后选择“上传完整文件夹”。然后选择包含要上传的文件的文件夹。

<img src={require('./wokwi-microsd-card-upload.png').default} width={355} />

Wokwi将上传的文件与您的项目一起存储。任何打开您的项目并开始模拟的人都必须等待所有micro SD卡文件下载，然后才能开始模拟。

实例: [microSD Card project with a custom bitmap file](https://wokwi.com/projects/319810932695892564)

## Arduino 代码示例

下面的示例使用流行的_SdFat_ Arduino库。它打印卡片中所有文件的列表。代码假设以下连接：

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

## 仿真案例

- [SD library example](https://wokwi.com/projects/310542489623724609)
- [SdFat library example](https://wokwi.com/projects/310692660849410626)
