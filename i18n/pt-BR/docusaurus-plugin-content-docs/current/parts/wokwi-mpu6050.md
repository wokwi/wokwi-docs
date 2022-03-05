---
title: Referência do wokwi-mpu6050
sidebar_label: wokwi-mpu6050
---

Sensor integrado com acelerômetro de 3 eixos, giroscópio de 3 eixos e um sensor de temperatura com interface I2C.

<wokwi-mpu6050 />

## Nome dos Pinos

| Nome | Descrição                  |
| ---- | -------------------------- |
| VCC  | Tensão de alimentação      |
| GND  | Terra                      |
| SCL  | Linha de clock I2C         |
| SDA  | Linha de dados I2C         |
| XDA  | Não utilizado\*            |
| XCL  | Não utilizado\*            |
| AD0  | PIN de seleção de endereço |
| INT  | Interrupção\*              |

\* Esses pinos não estão implementados atualmente no simulador. Se você precisar deles, por favor [abra uma solicitação](https://github.com/wokwi/wokwi-features/issues/new).

Normalmente, você só precisa conectar os pinos VCC, GND, SCL e SDA. O endereço I2C do dispositivo é 0x68. Você pode alterar o endereço de 0x69 conectando o pino AD0 ao VCC.

## Atributos

| Nome        | Descrição                              | Valor padrão |
| ----------- | -------------------------------------- | ------------ |
| accelX      | Valor inicial de aceleração x (g)      | "0"          |
| accelY      | Valor inicial de aceleração y (g)      | "0"          |
| accelZ      | Valor inicial de aceleração z (g)      | "1"          |
| rotationX   | Valor inicial de rotação x (deg/sec)   | "0"          |
| rotationY   | Valor inicial de rotação y (deg/sec)   | "0"          |
| rotationZ   | Valor inicial de rotação z (deg/sec)   | "0"          |
| temperature | Valor de temperatura inicial (celsius) | "24"         |

### Unidades

Todos os valores de aceleração (x/y/z) usam unidades de força g, onde 1g = 9,80665 m/s². O giroscópio mede a rotação angular e retorna o número de graus por segundo.

#### Exemplo de código Arduino

O exemplo abaixo usa a biblioteca Adafruit MPU6050 para ler e exibir os valores de aceleração do sensor. No Arduino Uno, conecte o pino SDA a A4 e o pino SCL a A5.

```cpp
#include <Adafruit_MPU6050.h>
#include <Adafruit_Sensor.h>
#include <Wire.h>

Adafruit_MPU6050 mpu;

void setup(void) {
  Serial.begin(115200);

  while (!mpu.begin()) {
    Serial.println("MPU6050 não conectado!");
    delay(1000);
  }
  Serial.println("MPU6050 pronto!");
}

sensors_event_t event;

void loop() {
  mpu.getAccelerometerSensor()->getEvent(&event);

  Serial.print("[");
  Serial.print(millis());
  Serial.print("] X: ");
  Serial.print(event.acceleration.x);
  Serial.print(", Y: ");
  Serial.print(event.acceleration.y);
  Serial.print(", Z: ");
  Serial.print(event.acceleration.z);
  Serial.println(" m/s^2");
  delay(500);
}
```

[Execute este exemplo no Wokwi](https://wokwi.com/projects/305937248748044864)

## Exemplos no simulador
- [Plotter de aceleração MPU6050 X/Y/Z](https://wokwi.com/projects/305937156771152449)
- [Adafruit MPU6050 Demo](https://wokwi.com/projects/305936654686749250)
- [Visualização do giroscópio/aceleração 3D em um display OLED](https://wokwi.com/projects/306115576172905024)
- [Wokwi 3D "W" controlado pela rotação do giroscópio](https://wokwi.com/projects/306399551789466177)
