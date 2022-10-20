---
title: Referência do wokwi-hx711
sidebar_label: wokwi-hx711
---

Amplificador de célula de carga HX711

<wokwi-hx711 type="50kg" />

## Nome dos Pinos

| Nome | Descrição                  |
| ---- | -------------------------- |
| VCC  | Tensão de alimentação (5V) |
| DT   | Dados seriais              |
| SCK  | Clock serial               |
| GND  | Terra                      |

_note que os pinos `E+`/`E-`/`A+`/`A-`/`B+`/`B-` não são interativos e são renderizados com base em atributos_

<wokwi-hx711 type="5kg" />

## Atributos

| Nome | Descrição                                  | Valor padrão |
| ---- | ------------------------------------------ | ------------ |
| type | Qualquer "50kg" (padrão), "5kg" ou "gauge" | "50kg"       |

### Exemplos

| Resultado                    | Attrs                 |
| ---------------------------- | --------------------- |
| <wokwi-hx711 type="5kg" />   | `{ "type": "5kg" }`   |
| <wokwi-hx711 type="50kg" />  | `{ "type": "50kg" }`  |
| <wokwi-hx711 type="gauge" /> | `{ "type": "gauge" }` |

## Operação

O amplificador HX711 permite que você leia facilmente as células de carga e avalie as mudanças na resistência. Uma ponte de Wheatstone é usada para conectar as células de carga ao IC, que por sua vez é conectado ao microcontrolador via `VCC`, `DT`, `SCK` e `GND`. Use `begin()` para inicializar a balança e `set_scale()` e `tare()` para calibrá-la. `power_down()` e `power_up()` podem ser usados para colocar o ADC dentro e fora do modo de baixa energia. `get_value()` e `get_units()` são usados para ler o ADC menos a tara e dividida, passando um valor inteiro opcional para obter esse número de valores, em média. Consulte a [biblioteca Arduino `HX711`](https://github.com/bogde/HX711#features) para obter mais detalhes sobre recursos e calibração.

## Exemplo de código Arduino

```cpp
#include "HX711.h"

HX711 scale;

void setup() {
  Serial.begin(9600);
  Serial.println("Inicializando a escala");
  scale.begin(A1, A0);
}

void loop() {
  Serial.println(scale.get_units(), 1);
  delay(1000);
}
```

Tente [este exemplo no Wokwi](https://wokwi.com/projects/345134808605655636)

## Exemplos no simulador

- [Exemplo com HX711](https://wokwi.com/projects/344192176616374868)
- [Escala digital](https://wokwi.com/projects/336613701830312531)
