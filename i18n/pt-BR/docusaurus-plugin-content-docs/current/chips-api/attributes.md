---
title: Atributos
sidebar_label: Atributos
---

# Atributos

Atributos são parâmetros de entrada que o usuário pode definir em `diagram.json`. Você também pode definir uma seção `controls` no arquivo `.chip.json` para permitir que o usuário edite esses parâmetros interativamente durante a simulação. Isso é particularmente útil para entradas de sensores (por exemplo, temperatura, umidade, etc.).

### uint32_t attr_init(const char \*name, uint32_t default_value)

Define um novo atributo inteiro com o nome fornecido. O `default_value` será usado quando o usuário não definir um valor para o atributo em `diagram.json` (na seção `attrs` da `parte` do chip personalizado).

A função retorna um identificador para o atributo, que pode ser acessado usando `attr_read()`.

:::caution AVISO

Nota: `attr_init` só pode ser chamado através de `chip_init()`. Não chame isso mais tarde.

:::

### uint32_t attr_init_float(const char \*name, float default_value)

Define um novo atributo de ponto flutuante com o nome fornecido. Veja `attr_init()` para mais informações.

:::caution AVISO

Nota: `attr_init_float` só pode ser chamado de `chip_init()`. Não chame isso mais tarde.

:::

### uint32_t attr_read(uint32_t attr)

Retorna o valor atual do atributo. `attr` deve ser um identificador de atributo válido, previamente retornado por `attr_init()`.

### float attr_read_float(uint32_t attr)

Retorna o valor atual do atributo. `attr` deve ser um identificador de atributo válido, previamente retornado por `attr_init_float()`.
