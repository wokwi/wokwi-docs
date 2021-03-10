---
title: Depurador GDB
sidebar_label: Depurador
---

GDB é um depurador de código-fonte poderoso. Você pode usá-lo para depurar seu código Arduino no Wokwi.

## Executando o GDB no Wokwi

Para iniciar uma sessão do GDB, vá para o editor de código e pressione **F1**. No prompt que foi aberto, digite "GDB",
e selecione **"Start Web GDB Session (debug build)"**.

Isso abrirá uma nova guia do navegador com o prompt do GDB. Se esta é a primeira vez que você está usando este
recurso, pode levar até 30 segundos para o GDB carregar totalmente.

## Exemplo de Sessão do Depurador

Quando o GDB estiver pronto, você receberá o seguinte prompt de comando:

```
0x00000000 in __vectors ()
(gdb)
```

Neste ponto, você pode digitar um comando do GDB. Por exemplo, suponha que você deseja executar seu programa
linha por linha, a partir de `setup()`. Primeiro, digite `tbreak setup` e `c` para iniciar o programa
e executá-lo até o início de `setup()`:

```
(gdb) tbreak setup
Temporary breakpoint 1 at 0x2ca: file sketch.ino, line 28.
(gdb) c
Continuing.

Temporary breakpoint 1, setup () at sketch.ino:28
28        pinMode(LED_BUILTIN, OUTPUT);
(gdb)
```

Neste ponto, digite `layout src` para mostrar o código-fonte do seu programa e digite
`next` para executar a próxima linha do código-fonte. Você pode então digitar `next` repetidamente
para repassar o código linha por linha.

Se você quiser imprimir o valor de alguma variável, use o comando `print`. Por exemplo,
se você tem uma variável chamada `ledIndex`, digite `print ledIndex` para imprimir o valor
dessa variável.

## Aprenda mais

Dê uma olhada na [Folha de Dicas do AVR GDB](https://blog.wokwi.com/gdb-avr-arduino-cheatsheet/)
para ver muitos outros exemplos de comandos úteis do GDB. Leva tempo para aprender sobre todos os diferentes recursos do GDB
e usá-los de forma eficiente, mas pode ficar muito poderoso mesmo com apenas alguns comandos básicos.

Se você quiser saber como fizemos o GDB funcionar no navegador, dê uma olhada em [Running GDB in the Browser](https://blog.wokwi.com/running-gdb-in-the-browser/).
Você não precisa saber disso para usar o GDB - são apenas os detalhes sangrentos que permitem que você dê uma olhada nos bastidores.
