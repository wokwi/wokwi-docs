---
title: Introdução à API Wokwi Custom Chips C
sidebar_label: Começando
---

# Introdução à API Wokwi Custom Chips C

:::caution AVISO

A API de chips está atualmente em versão beta. Por favor, compartilhe suas experiências e forneça feedback no canal `#custom-chips` no [chat do Discord](https://wokwi.com/discord).

:::

## Começando

Abra o [Custom Chip Playground](https://wokwi.com/projects/327144279206003284), vá para o editor de código, pressione `F1` e selecione _Create a custom C chip (alpha)_.

Isso criará um novo arquivo chamado `i2c-counter.chip.c`. Este arquivo contém um exemplo de um dispositivo [I2C](i2c) simples com um contador de 8 bits que aumenta para cada byte que você lê. A gravação no dispositivo substituirá o valor.

O dispositivo também fornece um pino `INT` que fica baixo quando o contador é maior que `127`. Caso contrário, o pino `INT` está no estado de entrada (alta impedância).

Inicie a simulação para observar o comportamento do chip customizado: o código do Arduino deve ler o valor do contador, e o LED acenderá quando o contador ultrapassar `127`.

## Adicionando seu chip personalizado à simulação

O [Custom Chip Playground](https://wokwi.com/projects/327144279206003284) já tem o chip conectado, mas você pode seguir as instruções abaixo para conectar um chip personalizado a um projeto diferente.

Adicione o seguinte snippet ao seu diagram.json:

`{ "type": "chip-i2c-counter", "id": "chip1", "top": 0, "left": 0, "attrs": {} },`

O Wokwi gera automaticamente uma **placa de quebra** para o seu chip. Edite `i2c-counter.chip.json` para definir os pinos para sua peça. O array `pins` deve conter os nomes dos pinos do seu chip, começando pelo pino número `1`. Se você deseja pular alguns pinos (por exemplo, deseja que o quadro de acesso tenha apenas pinos no lado esquerdo), use uma string vazia (`""`) para o nome do pino.

## Usando a API

Primeiro, certifique-se de `#include "wokwi-api.h"`.
O chip deve declarar um método `chip_init`. Este método será chamado para cada nova instância do chip. Se o chip tiver algum estado interno, `chip_init` deve alocar memória para o estado interno e salvar um ponteiro para esta memória no campo `void *user_data` das estruturas de configuração do dispositivo (por exemplo, `i2c_config_t`, `timer_config_t`, etc .).

Aqui está um exemplo de um arquivo chip mínimo:

```cpp
#include "wokwi-api.h"

void chip_init() {
  /*
     Este método é executado quando a simulação é iniciada. É chamado uma vez para cada instância do chip.
     Você normalmente alocaria alguma memória para armazenar o estado do chip, inicializar um monte de pinos com pin_init(),
     e configurar relógios de pinos, temporizadores e protocolos como UART, I2C e SPI.
  */
}
```

### Depurando seu chip personalizado

Você pode imprimir mensagens de depuração usando a função padrão C `printf()`. Certifique-se de também `#include <stdio.h>` em seu programa. As mensagens de depuração aparecerão no console do desenvolvedor do navegador (para visualizar no Chrome: `Ctrl`+`Shift`+`J` ou `Option`+`⌘`+`J`).

As mensagens de depuração do seu chip serão impressas na cor verde:

<img src={require('./chip-debug.png').default} alt="Mensagens de depuração de chip exibidas em verde" />

Além disso, você pode usar o [Analisador Lógico Wokwi](../guides/logic-analyzer) para depurar a comunicação com seu chip personalizado.

## Referência da API do chip 📖

- [API de pinos GPIO](gpio)
- [API Analógica](analog)
- [API de simulação de tempo](time)
- [API da UART](uart)
- [API do dispositivo I2C](i2c)
- [API do dispositivo SPI](spi)
- [Atributos](attributes)
- [API Framebuffer](framebuffer)

## Exemplos de Chip

- [Digital Inverter](https://wokwi.com/projects/327458636089524820)
- [XOR gate](https://wokwi.com/projects/329456176677782100)
- [SPI Chip](https://wokwi.com/projects/330669951756010068) - Implementa uma cifra ROT13 básica
- [I2C Chip](https://wokwi.com/projects/344061754973618771) - Saída simples de interrupção do contador
- [UART Chip](https://wokwi.com/projects/333638144389808723) - Implementa uma cifra ROT13 básica
- [Timer Chip](https://wokwi.com/projects/341265875285836370) - Mostrando como usar a API Timer
- [LM75A Chip](https://wokwi.com/projects/344037885763125843) - Sensor digital de temperatura I2C
- [Framebuffer Chip](https://wokwi.com/projects/330503863007183442) - Mostra como implementar um chip de driver de exibição personalizado
- [IL9163 Display Driver](https://wokwi.com/projects/333332561949360723) - Chip de exibição LCD colorido de 128x128
- [I2C Keypad Driver Example](https://wokwi.com/projects/344059749365449300) (por Yewolf)
- [CD4051B Multiplexer Example](https://wokwi.com/projects/343522915673702994) (por Chris Schmidt)
- [EEPROM Chip](https://wokwi.com/projects/329482717479567954) (por Benny Meisels)
- [PCA9685 Chip](https://wokwi.com/projects/348856116302578258) (por Bonny Rais)
- [DS18B20 Chip](https://wokwi.com/projects/349898396478210642) (por Bonny Rais) - Sensor de temperatura Dallas Semi DS18B20 através do OneWire
