---
title: MicroPython no Wokwi
sidebar_label: MicroPython
---

Você pode criar e executar projetos MicroPython no Wokwi. Comece com o [modelo de projeto Raspberry Pi Pico MicroPython](https://wokwi.com/projects/new/micropython-pi-pico).

## Estrutura do projeto

Todos os projetos MicroPython devem incluir um arquivo `main.py`. MicroPython irá carregar e executar automaticamente o código de `main.py` quando você iniciar a simulação.

Wokwi copia todos os arquivos do projeto para o sistema de arquivos flash do Pico. Isso significa que seu projeto
pode incluir módulos Python adicionais e você pode importá-los no `main.py` ou do modo interativo
REPL. Seu projeto também pode incluir dados personalizados dentro de arquivos de texto.

Você pode obter uma lista de todos os arquivos no sistema de arquivos flash executando:

```python
import os
print(os.listdir('/'))
```

# MicroPython REPL

Quando o código em `main.py` termina (ou você o interrompe com Ctrl+C), você entrará no REPL do MicroPython. O REPL é um prompt interativo onde você pode digitar comandos python e ver os resultados imediatamente. Digite `help()` para exibir a ajuda da API MicroPython. Para colar o código no REPL, digite Ctrl+E para entrar no modo de colagem.

## Exemplos de projetos

- [Blink com MicroPython](https://wokwi.com/projects/300504213470839309)
- [Display de 7-Segmentos com MicroPython](https://wokwi.com/projects/300210834979684872)
