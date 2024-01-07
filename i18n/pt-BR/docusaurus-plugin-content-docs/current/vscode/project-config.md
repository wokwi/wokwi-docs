---
title: Configurando seu projeto (wokwi.toml)
sidebar_label: Configurando seu projeto
---

Para simular seu projeto no Wokwi, você precisa criar dois arquivos no diretório raiz do seu projeto:

- `wokwi.toml` - um arquivo de configuração que informa ao Wokwi como executar seu projeto.
- `diagram.json` - um [arquivo de diagrama](../diagram-format) que descreve o circuito.

## wokwi.toml

Um arquivo `wokwi.toml` básico se parece com isto:

```toml
[wokwi]
version = 1
firmware = 'path-to-your-firmware.hex'
elf = 'path-to-your-firmware.elf'
```

Substitua "path-to-your-firmware" pelo local do firmware compilado, **relativo** ao arquivo wokwi.toml (que é o diretório raiz do seu espaço de trabalho).

A extensão do arquivo de firmware depende da placa que você está usando:

| Placa                      | Tipos de firmware suportados |
| -------------------------- | ---------------------------- |
| Arduino Uno/Mega, ATtiny85 | .hex, .elf                   |
| Raspberry Pi Pico          | .hex, .uf2                   |
| ESP32 Family               | .bin, .uf2, .elf             |

Verifique sua configuração pressionando **F1** e selecionando "**Wokwi: Start Simulator**".

:::warning Aviso
Evite usar barras invertidas (`\`) em seus caminhos. Em vez disso, use a barra (`/`), pois permite abrir seu projeto em qualquer plataforma (Windows, Mac e Linux).
:::

### Redirecionamento de porta serial

Wokwi for VS Code permite que você se conecte à porta serial do microcontrolador simulado usando um servidor TCP RFC2217. Para habilitar este recurso, adicione a seguinte configuração ao seu arquivo wokwi.toml, dentro da seção `[wokwi]`:

```toml
rfc2217ServerPort = 4000
```

Isso iniciará um servidor RFC2217 na porta 4000. Você pode usar qualquer cliente telnet (por exemplo, [PuTTY](https://www.putty.org/)) para se conectar à porta serial. Além disso, você pode usar o [suporte RFC2217](https://pyserial.readthedocs.io/en/latest/url_handlers.html#rfc2217) do PySerial para se conectar à porta serial do seu código Python:

```python
import serial
ser = serial.serial_for_url('rfc2217://localhost:4000', baudrate=115200)
ser.write(b'hello')
```

Nota: Certifique-se de que a guia do simulador esteja visível no VS Code, caso contrário, a simulação pode pausar e você não obterá nenhuma saída serial do microcontrolador.

### Gateway IoT (ESP32 Wi-Fi)

O Wokwi for VS Code inclui uma versão integrada do [Wokwi Private IoT Gateway](../guides/esp32-wifi#internet-access), que permite conectar o WiFi virtual do ESP32 simulado à sua rede local e à Internet.

Você também pode se conectar ao ESP simulado do seu computador (por exemplo, você está executando um servidor web no ESP32). Para fazer isso, configure o encaminhamento de porta em wokwi.toml. Por exemplo, para encaminhar a porta local 8180 para a porta 80 no ESP32, adicione a seguinte configuração:

```
# Encaminhe http://localhost:8180 para a porta 80 no ESP32 simulado:
[[net.forward]]
from = "localhost:8180"
to = "device:80"
```

Para um exemplo completo, consulte o projeto [ESP32 Web Server](https://github.com/wokwi/esp32-http-server).

### Chips personalizados

Você pode carregar chips personalizados para a simulação adicionando uma seção `[[chip]]` à sua configuração wokwi.toml. O exemplo a seguir carregará um chip de "chip/inverter.chip.wasm" e o disponibilizará sob o nome `chip-inverter` no diagrama do Wokwi:

```toml
[[chip]]
name = 'inverter'  # Para usar o chip no diagram.json, adicione uma peça do tipo "chip-inverter".
binary = 'chips/inverter.chip.wasm'
```

O Wokwi também requer um arquivo JSON que descreva os pinos do chip. O arquivo JSON deve ter o mesmo nome do binário wasm, mas com uma extensão json (por exemplo, `chips/inverter.chip.json` do exemplo acima). Para um exemplo completo, confira [o repositório do chip inversor](https://github.com/wokwi/inverter-chip).

Você pode adicionar vários chips ao seu projeto adicionando várias seções `[[chip]]`, cada uma com um `nome` e `binário` diferentes.

## diagram.json

Você pode copiar o [arquivo de diagrama](../diagram-format) de um projeto existente em [Wokwi.com](https://wokwi.com). Por exemplo, se você estiver trabalhando em um projeto ESP32, poderá copiar o conteúdo do arquivo diagram.json de https://wokwi.com/projects/new/esp32.
