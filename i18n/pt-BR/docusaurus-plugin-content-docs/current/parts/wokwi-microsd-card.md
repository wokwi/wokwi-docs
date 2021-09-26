---
title: Referência do wokwi-microsd-card
sidebar_label: wokwi-microsd-card
---

cartão microSD com interface SPI

<wokwi-microsd-card />

:::caution Atenção
O simulador de cartão microSD ainda está em beta. A interface/comportamento está sujeito a mudanças!
:::

## Nome dos Pinos

| Nome | Descrição                   |
| ---- | ----------------------------|
| CD   | Detecção de cartão \*       |
| DO   | Saída de dados SPI (MISO)   |
| GND  | Terra                       |
| SCK  | Clock SPI                   |
| VCC  | Alimentação de tensão       |
| DI   | Entrada de dados SPI (MOSI) |
| CS   | Seletor do Chip             |

\* O pino do CD é conectado ao aterramento quando não há placa no soquete. No simulador, sempre há um cartão no soquete, então esse pino está sempre desconectado.

## Comportamento da Simulação

O cartão microSD é inicializado automaticamente com um sistema de arquivos FAT16 e todos os seus arquivos de projeto são copiados para ele.

## Exemplo de código Arduino

O exemplo abaixo usa a popular biblioteca _SdFat_ Arduino. Ele imprime uma lista de todos os arquivos do cartão. O código assume as seguintes conexões:

| Pino do SD | Pino do Arduino Uno |
| ---------- | ------------------- |
| SCK        | 13                  |
| DO         | 12                  |
| DI         | 11                  |
| CS         | 10                  |

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

[Execute este exemplo no Wokwi](https://wokwi.com/arduino/projects/310692660849410626)

## Exemplos no simulador

- [Exemplo da biblioteca SD](https://wokwi.com/arduino/projects/310542489623724609)
- [Exemplo da biblioteca SdFat](https://wokwi.com/arduino/projects/310692660849410626)
