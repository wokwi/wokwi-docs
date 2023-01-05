---
title: API do dispositivo I2C
sidebar_label: API I2C
---

# API do dispositivo I2C

Para criar um dispositivo I2C, primeiro chame `i2c_init`, passando uma estrutura `i2c_config_t`. Esta estrutura define os pinos SCL/SDA, o endereço do dispositivo I2C e os callbacks `connect`/`read`/`write`/`disconnect`.

### i2c_dev_t i2c_init(i2c_config_t \*config)

Inicializa um dispositivo I2C. O argumento `config` define os pinos, endereço e callbacks para o dispositivo I2C. Contém os seguintes campos:

| Campo        | Tipo       | Descrição                                                                                                                    |
| ------------ | ---------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `address`    | `uint32_t` | Escuta as solicitações correspondentes ao endereço I2C fornecido (7 bits). Para ouvir todas as solicitações, defina como `0` |
| `sda`        | `pin_t`    | O pino SDA                                                                                                                   |
| `scl`        | `pin_t`    | O pino SCL                                                                                                                   |
| `connect`    | callback   | Chamado quando o chip é endereçado no barramento I2C                                                                         |
| `read`       | callback   | Chamado quando o microcontrolador quer ler um byte de dados do seu chip                                                      |
| `write`      | callback   | Chamado quando o microcontrolador escreve um byte no seu chip                                                                |
| `disconnect` | callback   | Chamado quando o microcontrolador se desconecta do seu chip                                                                  |
| `user_data`  | `void \*`  | Data that will be passed in the first argument of the callbacks                                                              |

Todos os callbacks (`connect`, `read`, `write`, `disconnect`) são opcionais. Todos eles usam o ponteiro `user_data` como seu primeiro argumento.

:::caution AVISO

Nota: `i2c_init` só pode ser chamado de `chip_init()`. Não chame isso mais tarde.

:::

Exemplo:

```cpp
bool on_i2c_connect(void *user_data, uint32_t address, bool read) {
  // O parâmetro `address` contém o endereço de 7 bits que foi recebido no barramento I2C.
  // `read` indica se esta é uma solicitação de leitura (true) ou uma solicitação de gravação (false).
  return true; // verdadeiro significa ACK, falso NACK
}

uint8_t on_i2c_read(void *user_data) {
  return 0; // O byte a ser retornado ao microcontrolador
}

bool on_i2c_write(void *user_data, uint8_t data) {
  // `data` é o byte recebido do microcontrolador
  return true; // verdadeiro significa ACK, falso NACK
}

void on_i2c_disconnect(void *user_data) {
  // Este método é opcional. Útil se você precisar saber quando a transação I2C foi concluída.
}

static const i2c_config_t i2c1 {
  .address = 0x22,
  .scl = pin_init("SCL", INPUT_PULLUP),
  .sda = pin_init("SDA", INPUT_PULLUP),
  .connect = on_i2c_connect,
  .read = on_i2c_read,
  .write = on_i2c_write,
  .disconnect = on_i2c_disconnect,
  .user_data = chip,
};
```
