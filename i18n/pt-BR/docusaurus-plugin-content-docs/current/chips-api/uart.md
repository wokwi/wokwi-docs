---
title: API da UART
sidebar_label: API UART
---

# API da UART

Para criar um dispositivo UART, primeiro chame `uart_init`, passando uma estrutura `uart_config_t`. Essa estrutura define os pinos RX/TX, a taxa de transmissão e os retornos de chamada `rx`/`write_done`.

### uart_dev_t uart_init (const uart_config_t \*config)

Inicializa o dispositivo UART. O argumento `config` define os pinos, configuração e retornos de chamada para o dispositivo UART. Contém os seguintes campos:

| Campo        | Tipo       | Descrição                                                    |
| ------------ | ---------- | ------------------------------------------------------------ |
| `rx`         | `pin_t`    | O pino RX (ou `NO_PIN` para desabilitar RX)                  |
| `tx`         | `pin_t`    | O pino TX (ou `NO_PIN` para desabilitar TX)                  |
| `baud_rate`  | `uint32_t` | A taxa de transmissão (por exemplo, 115200)                  |
| `rx_data`    | callback   | Chamado para cada byte recebido no pino RX                   |
| `write_done` | callback   | Chamado quando a transmissão de dados no pino TX finalizar   |
| `user_data`  | `void \*`  | Dados que serão passados no primeiro argumento dos callbacks |

Ambos os retornos de chamada (`rx_data`, `write_done`) são opcionais. Todos eles usam o ponteiro `user_data` como seu primeiro argumento.

Exemplo:

```cpp
static void on_uart_rx_data(void *user_data, uint8_t byte) {
  // `byte` é o byte recebido no pino TX
}

static uint8_t on_uart_write_done(void *user_data) {
  // Você pode gravar o bloco de dados a ser transmitido aqui (chamando o uart_write).
}

// ...

const uart_config_t uart1 {
  .tx = pin_init("TX", INPUT_PULLUP),
  .rx = pin_init("RX", INPUT),
  .baud_rate = 115200,
  .rx_data = on_uart_rx_data,
  .write_done = on_uart_write_done,
  .user_data = chip,
};
```

### bool uart_write (uart_dev_t uart, uint8_t \*buffer, uint32_t count)

Escreve o `count` bytes da memória apontada por `buffer` para o dispositivo `uart` fornecido.
Retorna `true` em caso de sucesso, ou `false` se o dispositivo UART já estiver ocupado transmitindo dados de uma chamada `uart_write` anterior (e os novos dados não serão transmitidos).

Os dados começam a ser transmitidos após o retorno de `uart_write`. Assim que o Wokwi termina de transmitir os dados, o callback `write_done` é chamado (da estrutura `uart_config_t` que você passou para `uart_init`).

## Exemplos no simulator

- [Exemplo de chip UART ROT13](https://wokwi.com/projects/333638144389808723)
