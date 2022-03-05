---
title: Referência do wokwi-microsd-card
sidebar_label: wokwi-microsd-card
---

Cartão microSD com interface SPI

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

## Sistema de arquivo

Quando você inicia a simulação, o Wokwi cria um sistema de arquivos FAT16 e o ​​anexa ao cartão microSD. Por padrão, o Wokwi copia todos os seus arquivos de projeto para o cartão microSD.

### Carregando arquivos binários

Os usuários do [Club](https://wokwi.com) podem fazer upload de arquivos binários personalizados (por exemplo, bitmaps, sons, etc.) Depois de adicionar um cartão microSD ao seu projeto, você verá uma nova guia "Cartão SD" ao lado das outras guias no editor de código. Clique nos botões roxos "Fazer upload de arquivos" e selecione os arquivos que deseja enviar.

Você também pode fazer upload de uma árvore de pastas completa (útil se você tiver um cartão SD físico conectado ao seu computador e quiser fazer upload de todos os dados dele, como-as). Clique na pequena seta ao lado do botão "Carregar arquivos" e selecione "Carregar pasta completa". Em seguida, selecione a pasta com os arquivos que deseja enviar.

<img src={require('./wokwi-microsd-card-upload.png').default} width={355} />

Wokwi armazena os arquivos enviados para você, juntamente com seu projeto. Qualquer pessoa que abrir seu projeto e iniciar a simulação terá que esperar o download de todos os arquivos do cartão micro SD antes que a simulação comece.

Exemplo: [Projeto de cartão microSD com um arquivo bitmap personalizado](https://wokwi.com/projects/319810932695892564)

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

[Execute este exemplo no Wokwi](https://wokwi.com/projects/310692660849410626)

## Exemplos no simulador

- [Exemplo da biblioteca SD](https://wokwi.com/projects/310542489623724609)
- [Exemplo da biblioteca SdFat](https://wokwi.com/projects/310692660849410626)
