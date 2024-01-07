---
title: Depurando seu código
sidebar_label: Depurando
---

Você pode depurar seu código enquanto ele está sendo executado na simulação usando o depurador VS Code. Para configurar o depurador, siga estas etapas:

## Configure o Wokwi

Adicione a seguinte linha à seção `[wokwi]` de seu arquivo de configuração `wokwi.toml`:

```toml
gdbServerPort=3333
```

## Configure o VS Code

Crie um arquivo de configuração de inicialização para o VS Code em `.vscode/launch.json`. Aqui está um modelo que você pode usar:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Wokwi GDB",
      "type": "cppdbg",
      "request": "launch",
      "program": "${workspaceFolder}/build/your-firmware.elf",
      "cwd": "${workspaceFolder}",
      "MIMode": "gdb",
      "miDebuggerPath": "/usr/local/bin/xtensa-esp32-elf-gdb",
      "miDebuggerServerAddress": "localhost:3333"
    }
  ]
}
```

Substitua o caminho `program` pelo caminho para o arquivo ELF do seu firmware e o `miDebuggerPath` pelo caminho para um executável GDB que suporte a arquitetura do seu projeto (por exemplo, para projetos AVR, use `avr-gdb`).

## Inicie o depurador

Inicie o simulador Wokwi pressionando **F1** e selecionando a opção "**Wokwi: Start Simulator and Wait for Debugger**". O simulador será carregado, mas o programa ficará em pausa, aguardando a conexão do depurador. Em seguida, pressione **F5** para iniciar o depurador.

:::warning Aviso
Você precisa iniciar o Wokwi antes de iniciar o depurador. Se você iniciar o depurador primeiro, ele não conseguirá se conectar ao simulador.
:::
