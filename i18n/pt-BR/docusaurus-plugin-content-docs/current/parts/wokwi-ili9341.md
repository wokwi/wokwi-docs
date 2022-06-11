---
title: Referência do wokwi-ili9341
sidebar_label: wokwi-ili9341
---

Display colorido LCD-TFT 240x320 de 2,8" com interface SPI

<wokwi-ili9341 />

## Nome dos Pinos

| #   | Nome | Descrição              | Pino do Arduino Uno |
| --- | ---- | ---------------------- | ------------------- |
| 1   | VCC  | Tensão de alimentação  | 5V                  |
| 2   | GND  | Terra                  | GND                 |
| 3   | CS   | Seletor de chip        | 10†                 |
| 4   | RST  | Reset\*                | -                   |
| 5   | D/C  | Pino de dados/comando  | 9†                  |
| 6   | MOSI | Dados SPI (MCU → LCD)  | 11                  |
| 7   | SCK  | Clock SPI              | 13                  |
| 8   | LED  | Luz de fundo com LED\* | 5V                  |
| 9   | MISO | Dados SPI (LCD → MCU)‡ | 12                  |

\* Os pinos RST e luz de fundo (LED) não estão disponíveis na simulação.  
† Você pode conectar o CS e D/C a qualquer pino digital do Arduino. Os números dos pinos aqui são apenas um exemplo.  
‡ Você pode deixar o MISO desconectado, a menos que precise ler os dados do LCD.

## Atributos

| Nome           | Descrição                                         | Valor padrão  |
| -------------- | ------------------------------------------------- | ------------- |
| flipHorizontal | Defina como "1" para virar a tela horizontalmente | ""            |
| flipVertical   | Defina como "1" para virar a tela verticalmente   | ""            |

## Uso no Arduino

Você pode usar as bibliotecas _Adafruit_ILI9341_ ou _lcdgfx_ para fazer a interface com o display LCD. O exemplo de código a seguir mostra o uso básico com _Adafruit_ILI9341_. Funciona com as conexões de pino da tabela acima:

```cpp
#include "SPI.h"
#include "Adafruit_GFX.h"
#include "Adafruit_ILI9341.h"

#define TFT_DC 9
#define TFT_CS 10

Adafruit_ILI9341 tft = Adafruit_ILI9341(TFT_CS, TFT_DC);

void setup() {
  tft.begin();

  tft.setCursor(26, 120);
  tft.setTextColor(ILI9341_RED);
  tft.setTextSize(3);
  tft.println("Olá, TFT!");

  tft.setCursor(20, 160);
  tft.setTextColor(ILI9341_GREEN);
  tft.setTextSize(2);
  tft.println("Eu posso tem cores?");
}

void loop() { }
```

[Execute este exemplo no Wokwi](https://wokwi.com/projects/308024602434470466)

## Exemplos no simulador

- [Exemplo Adafruit ILI9341 GFX](https://wokwi.com/projects/307567201804616256)
- [Fingerprint Pattern](https://wokwi.com/projects/307567963154678338)
- [Mandelbrot Set](https://wokwi.com/projects/307567275170333248)
- [Neon Ribbons](https://wokwi.com/projects/307577144545903170)
- [Logotipo Wokwi sobre Plasma](https://wokwi.com/projects/307664460274729536)
- [Lode Runner com lcdgfx](https://wokwi.com/projects/308022099088245312)
