---
title: CircuitPython no Wokwi
sidebar_label: CircuitPython
---

Você pode simular o CircuitPython no Wokwi usando a placa [Raspberry Pi Pico](../parts/wokwi-pi-pico). Para iniciar um novo projeto de simulação, abra o [modelo de projeto Raspberry Pi Pico com CircuitPython](https://wokwi.com/projects/new/circuitpython-pi-pico).

## Estrutura do projeto

Os projetos CircuitPython devem incluir um arquivo `code.py`. O código neste arquivo será executado quando você iniciar a simulação.

Wokwi copia todos os arquivos do projeto para o sistema de arquivos flash do Pico. Isso significa que seu projeto pode incluir módulos Python adicionais e você pode importá-los do `code.py` ou do REPL interativo. Seu projeto também pode incluir dados personalizados dentro de arquivos de texto.

Você pode obter uma lista de todos os arquivos no sistema de arquivos flash executando:

```python
import os
print(os.listdir('/'))
```

## Usando bibliotecas

Você pode usar qualquer biblioteca do [Adafruit CircuitPython Bundle](https://github.com/adafruit/Adafruit_CircuitPython_Bundle). Crie um arquivo "requirements.txt" em seu projeto e escreva os nomes das bibliotecas que você usa, uma por linha. As linhas que começam com "#" são comentários.

Por exemplo, se você deseja instalar ambos [adafruit_display_text](https://circuitpython.readthedocs.io/projects/display_text/en/latest/) and [adafruit_dht](https://circuitpython.readthedocs.io/projects/dht/en/latest/), crie um arquivo "requirements.txt" com o seguinte conteúdo:

```
# requirements.txt exemplo
adafruit_display_text
adafruit_dht
```

Ao iniciar a simulação, o Wokwi baixa todas as bibliotecas e suas dependências. Ele os copia para a pasta "lib" no sistema de arquivos flash. Você pode chamar `os.listdir ('/ lib')` para obter uma lista de todas as bibliotecas instaladas. Para um exemplo de código completo, consulte a [Lista da Biblioteca CircuitPython](https://wokwi.com/projects/309475039016649280).

# CircuitPython REPL

Quando o código em `code.py` termina (ou você o interrompe com Ctrl+C), você entrará no REPL do CircuitPython. O REPL é um prompt interativo onde você pode digitar comandos python e ver os resultados imediatamente. Para colar o código no REPL, digite Ctrl+E e entre no modo de colagem.

## Exemplos no simulador

- [Blink com CircuitPython](https://wokwi.com/projects/309474946192507458)
- [CircuitPython SSD1306 Exemplo](https://wokwi.com/projects/309427357921313345)
