---
title: API do dispositivo SPI
sidebar_label: API SPI
---

# API do dispositivo SPI

Para criar um dispositivo SPI, primeiro chame `spi_init`, passando uma estrutura `spi_config_t`. Essa estrutura define o relógio e os pinos MOSI/MISO, o modo SPI e o callback `done`.

### spi_dev_t spi_init(spi_config_t \*config)

Inicializa uma interface de dispositivo SPI. O argumento `config` define os pinos, modo e callbacks para o dispositivo SPI. Contém os seguintes campos:

| Campo       | Tipo       | Descrição                                                             |
| ----------- | ---------- | --------------------------------------------------------------------- |
| `sck`       | `pin_t`    | O pino de clock                                                       |
| `mosi`      | `pin_t`    | O pino de dados MOSI (ou `NO_PIN` para desabilitar o MOSI)            |
| `miso`      | `pin_t`    | O pino de dados MISO (ou `NO_PIN` para desabilitar o MISO)            |
| `mode`      | `uint32_t` | Modo SPI: `0`, `1`, `2` ou `3` (padrão: `0`)                          |
| `done`      | `callback` | Chamado quando uma transação SPI termina (veja abaixo)                |
| `user_data` | `void \*`  | Dados que serão passados no primeiro argumento do callback `done`     |

A API não suporta um pino CS/SS: cabe ao usuário selecionar/desmarcar a interface SPI chamando `spi_start()` e `spi_stop()`.

:::caution AVISO

Nota: `spi_init` só pode ser chamado de `chip_init()`. Não ligue mais tarde.

:::

Exemplo:

```cpp
const spi_config_t spi1 {
  .sck = pin_init("SCK", INPUT),
  .mosi = pin_init("MOSI", INPUT),
  .miso = pin_init("MISO", INPUT),
  .mode = 0,
  .write_done = chip_spi_done, // Veja o exemplo abaixo
  .user_data = chip,
};
```

### void spi_start(spi_dev_t spi, uint8_t \*buffer, uint32_t count)

Inicia uma transação SPI, enviando e recebendo bytes `count` de/para o `buffer` fornecido.

Normalmente, você escutará o pino CS (seleção de chip) com `pin_watch`. Chame `spi_start()` quando o pino CS for baixo, e `spi_stop()` quando o pino CS for alto.

Ao criar um dispositivo que transfere grandes quantidades de dados (por exemplo, uma tela LCD), é recomendável usar um tamanho de buffer grande (alguns kilobytes). O simulador pode usar o buffer maior para otimizar a transferência SPI controlada por DMA e acelerar a simulação.

Para dispositivos simples que transferem pequenas quantidades de dados, você pode usar um buffer de byte único e processar cada byte à medida que chega no callback `done`.

### void spi_stop(spi_dev_t spi)

Pára a interface SPI. Normalmente, você chamaria esse método quando o pino CS fosse alto.

### O callback `done`

A assinatura para o callback `done` é a seguinte:

```cpp
static void chip_spi_done(void *user_data, uint8_t *buffer, uint32_t count) {
  // 1. processa os dados recebidos (opcional)
  // 2. se o pino CS ainda estiver baixo, agende a próxima transação SPI usando `spi_start`
}
```

O retorno de chamada `done` é executado quando uma transação SPI termina: quando o buffer fornecido para `spi_start` está cheio ou quando `spi_stop` foi chamado. O `buffer` contém os dados recebidos (é o mesmo buffer dado para `spi_start`), e `count` é o número de bytes que foram transferidos (ou `0` se `spi_stop` foi chamado antes de um byte completo ter sido foi transferido).

Seu retorno de chamada `done` deve verificar o status do pino CS e, se ainda estiver baixo, deve chamar `spi_start()` novamente para receber o próximo bloco de dados do microcontrolador.

## Exemplos no simulator

- [Exemplo de chip SPI ROT13](https://wokwi.com/projects/330669951756010068)
