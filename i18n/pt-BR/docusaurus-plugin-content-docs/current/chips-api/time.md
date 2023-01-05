---
title: API de simulação de tempo
sidebar_label: API Time
---

# API de simulação de tempo

### uint64_t get_sim_nanos()

Retorna o tempo atual (virtual) do simulador em nanossegundos.

### timer_t timer_init(timer_config_t \*config)

Inicializa um novo temporizador. Retorna o identificador do temporizador. Chame `timer_start()` para iniciar o cronômetro e defina o retorno de chamada `chip_timer_event()` para responder aos eventos do cronômetro.

A estrutura `timer_config_t` contém os seguintes campos:

| Campo       | Tipo      | Descrição                                                      |
| ----------- | --------- | -------------------------------------------------------------- |
| `callback`  | callback  | Chamado quando o timer dispara                                 |
| `user_data` | `void \*` | Dados que serão passados no primeiro argumento para o callback |

A assinatura para a função callback é a seguinte:

```cpp
void chip_timer_callback(void *user_data) {
  /* Chamado quando o timer dispara */
}
```

:::caution AVISO

Nota: `timer_init()` só pode ser chamado de `chip_init()`. Não chame isso mais tarde.

:::

### void timer_start(uint32_t timer_id, uint32_t micros, bool repeat)

Agenda o timer dado por `timer_id`. O argumento `micros` determina quantos microssegundos passarão até que o timer chame `chip_timer_event()`. Se `repeat` for `false`, o evento do timer será chamado uma vez (one-shot timer). Se repeat for `true`, o evento timer continuará sendo chamado a cada microssegundos `micros`, até que você chame `timer_stop()` ou reconfigure o timer com `timer_start`.

### void timer_start_ns(uint32_t timer_id, uint64_t nanos, bool repeat)

Semelhante a `timer_start`, mas especifica a duração do cronômetro em nanossegundos em vez de microssegundos. Prefira `timer_start()` quando possível, para melhorar o desempenho.

### void timer_stop(uint32_t timer_id)

Interrompe o cronômetro fornecido. Se o timer ainda não disparou, ele não disparará até que você chame `timer_start()` novamente.
