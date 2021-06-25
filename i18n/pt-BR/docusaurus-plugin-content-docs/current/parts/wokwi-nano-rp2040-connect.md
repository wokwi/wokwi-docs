---
title: Referência do wokwi-nano-rp2040-connect
sidebar_label: wokwi-nano-rp2040-connect
---

Placa baseada no Raspberry Pi RP2040 com suporte WiFi + Bluetooth no formato do Arduino Nano.

<wokwi-nano-rp2040-connect></wokwi-nano-rp2040-connect>

## Nome dos Pinos

| Pino | RP2040 Pino | Funções               |
| ---- | ----------- | --------------------- |
| RX   | 0           | UART RX               |
| TX   | 1           | UART TX               |
| D2   | 25          |                       |
| D3   | 15          |                       |
| D4   | 16          |                       |
| D5   | 17          |                       |
| D6   | 18          |                       |
| D7   | 19          |                       |
| D8   | 20          |                       |
| D9   | 21          |                       |
| D10  | 5           |                       |
| D11  | 7           | SPI MOSI              |
| D12  | 4           | SPI MISO              |
| D13  | 6           | SPI SCK, LED          |
| A0   | 26          |                       |
| A1   | 27          |                       |
| A2   | 28          |                       |
| A3   | 29          |                       |
| A4   | 12\*        | I2C SDA               |
| A5   | 13\*        | I2C SCL               |
| A6   | \*          |                       |
| A7   | \*          |                       |
| VCC  | VCC         | Tensão positiva (5V)  |
| GND  | GND         | Terra                 |

\* Os pinos A4…A7 são conectados através do módulo u-blox NINA W102 WiFi/BT. Eles são capazes apenas de entrada analógica/digital. Os pinos A4/A5 também suportam comunicação I2C.

### LEDs integrados

A placa inclui dois LEDs padrão e um LED RGB:

| LED | Cor     | Função                                               |
| --- | ------- | ---------------------------------------------------- |
| ON  | Verde   | LED de alimentação. Sempre ligado enquanto a simulação está em execução |
| L   | Amarelo | Connected to pin D13                                 |
| RGB | Todas   | Conectado a 3 pinos internos: `LEDR`, `LEDG`, `LEDB` |

Se você quiser usar o LED RGB em seu código, precisará incluír a biblioteca `WiFiNINA.h`.
Aqui está um exemplo completo:

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

## Recursos de simulação

O Arduino Nano RP2040 Connect é simulado usando a [Biblioteca RP2040js](https://github.com/wokwi/rp2040js). Por favor, veja a [documentação do wokwi-pi-pico](wokwi-pi-pico#simulation-features) para obter uma lista completa de recursos com suporte.

### Suporte WiFi

A simulação inclui suporte WiFi parcial. Você pode procurar redes, conectar-se a um ponto de acesso e até mesmo definir seu próprio ponto de acesso (e conectar
nele a partir de outra simulação em execução em uma guia do navegador). A troca real de dados (por exemplo, abertura de uma conexão TCP) ainda não foi implementada. Espere algumas atualizações em breve!

O simulador também fornece dois pontos de acesso integrados:

| Nome (SSID) | BSSID             | Descrição                                         |
| ----------- | ----------------- | ------------------------------------------------- |
| Wokwi-GUEST | 42:13:37:55:aa:01 | Rede Wi-Fi aberta (nenhuma senha exigida          |
| Wokwi-Club  | 42:13:37:55:aa:02 | Somente rede Wi-Fi [Club](https://wokwi.com/club) |

Você pode se conectar a estes pontos de acesso a partir do seu código:

```cpp
#include <WiFiNINA.h>

void setup() {
  Serial1.begin(115200);

  while (WiFi.status() != WL_CONNECTED) {
    Serial1.println("Conectando-se ao Wokwi-GUEST...");
    WiFi.begin("Wokwi-GUEST");
    delay(1000);
  }

  Serial1.print("Conectado! Endereço de IP: ");
  Serial1.println(WiFi.localIP());
}

void loop() {
  delay(1);
}
```

Ou defina seu próprio ponto de acesso:

```cpp
#include <WiFiNINA.h>

void setup() {
  WiFi.beginAP("my-cool-AP", "verysecret");
}

void loop() {
  int status = WiFi.status();
  if (status == WL_AP_CONNECTED) {
    // Alguém conectado ao nosso Ponto de Acesso! Faça alguma coisa...
  }
  delay(1);
}
```

## Exemplos no simulador

- [Blink no Nano RP2040 Connect](https://wokwi.com/arduino/projects/302107513045647885)
- [WiFi Scanning](https://wokwi.com/arduino/projects/302218566716883465)
