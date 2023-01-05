---
title: API de pinos GPIO
sidebar_label: API GPIO
---

# API de pinos GPIO

Os chips interagem com o simulador usando pinos digitais. Os pinos são definidos em um arquivo JSON, chamado `{chip-name}.chip.json` (substitua `{chip-name}` pelo nome real do chip). Por exemplo, o seguinte arquivo JSON define um chip com 4 pinos (`IN`, `OUT`, `VCC`, `GND`):

```json
{
  "name": "Inverter",
  "author": "Uri Shaked",
  "pins": ["OUT", "IN", "VCC", "GND"]
}
```

A API de pinos GPIO permite que seu código de implementação de chip interaja com os pinos GPIO:

### pin_t pin_init(const char \*name, uint32_t mode)

Inicializa o pino fornecido e retorna um identificador de pino para uso com os outros métodos de pino. Os parâmetros `mode` configuram o estado inicial do pino. Estão disponíveis os seguintes valores:

- `INPUT` - configura o pino como uma entrada digital
- `INPUT_PULLUP` - configura o pino como uma entrada digital e anexa um registrador pull-up ao pino.
- `INPUT_PULLDOWN` - configura o pino como uma entrada digital e anexa um registrador pull-down ao pino.
- `OUTPUT` - configura o pino como uma saída digital
- `OUTPUT_LOW` - configura o pino como uma saída digital, define o valor do pino como LOW
- `OUTPUT_HIGH` - configura o pino como uma saída digital, define o valor do pino para ALTO
- `ANALOG` - configura o pino como um pino analógico. Consulte a seção [API analógica](analog) para obter mais detalhes.

:::caution AVISO

Nota: `pin_init()` só pode ser chamado de `chip_init()`. Não ligue mais tarde. Você pode usar `pin_mode()` para alterar o modo de um pino a qualquer momento.

:::

### void pin_mode(pin_t pin, uint32_t mode)

Configura o `pin` fornecido como entrada ou saída digital. Os valores válidos para `mode` são os mesmos de `pin_init()`: `INPUT`, `INPUT_PULLUP`, `INPUT_PULLDOWN`, `OUTPUT`, `OUTPUT_LOW`, `OUTPUT_HIGH` e `ANALOG`.

### void pin_write(pin_t pin, uint32_t value)

Defina o valor de saída para um pino digital. Use as constantes `LOW` e `HIGH` para `value`.

### uint32_t pin_read(pin_t pin)

Lê o valor digital atual do pino, retorna `LOW` ou `HIGH`.

### bool pin_watch(pin_t pin, pin_watch_config_t \*config)

Escuta as mudanças no valor digital do pino fornecido. A estrutura de configuração contém os seguintes campos:

| Campo        | Tipo       | Descrição                                                                  |
| ------------ | ---------- | -------------------------------------------------------------------------- |
| `edge`       | `uint32_t` | Quais mudanças de valor de pinos escutamos (`RISING`, `FALLING` ou `BOTH`) |
| `pin_change` | callback   | Chamado quando o valor do pino muda (Veja abaixo)                          |
| `user_data`  | `void \*`  | Dados que serão passados no primeiro argumento para `pin_change`           |

Os valores válidos para borda são:

- `BOTH` - Escuta qualquer mudança de valor
- `FALLING` - Escuta as mudanças de `HIGH` a `LOW`
- `RISING` - Escuta as mudanças de `LOW` a `HIGH`

Você só pode ter um relógio para um pino a qualquer momento. A função retorna `true` se o relógio foi ajustado com sucesso, ou `false` caso já exista um relógio definido para este pino (e assim o novo relógio não foi ajustado).

A assinatura de callback `pin_change` é a seguinte:

```cpp
void chip_pin_change(void *user_data, pin_t pin, uint32_t value) {
  // value will either be HIGH or LOW
}
```

### void pin_watch_stop(pin_t pin)

Pára de observar as alterações no pino fornecido.
