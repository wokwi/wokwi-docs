---
title: Depurador GDB
sidebar_label: Depurador
---

GDB é um depurador de código-fonte poderoso. Você pode usá-lo para depurar seu código Arduino no Wokwi.

## Usando o GDB no Wokwi

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

Neste ponto, você pode digitar comandos GDB. Por exemplo, suponha que você deseja executar seu programa
linha por linha, a partir do `setup()`. Primeiro, digite `tbreak setup` e `c` para iniciar o programa
e executá-lo até o início do `setup()`:

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

## Guia de Referência Rápida

Lista de comandos GDB mais comuns para depuração de código AVR.

### Execução do programa

| Comando       | Forma curta | Descrição                                             |
| ------------- | ----------- | ------------------------------------------------------|
| continue      | c           | Roda o programa                                       |
| advance setup | adv setup   | Roda o programa e para no início da função `setup()`* |
| next          | n           | Executa a próxima linha de código (passando por cima) |
| step          | s           | Avança para a próxima linha de código                 |
| finish        | fin         | Roda o programa até que a função atual retorne (sair) |
| nexti         | n           | Executa a próxima instrução (passando por cima)       |
| stepi         | si          | Avança para a próxima instrução                       |
| until         | u           | Igual ao comando `next`, mas não fica em loop         |
| Ctrl+C        |             | Quebra o programa na instrução atual                  |

* O comando de avanço também irá parar se retornar na função atual

### Pontos de interrupção

| Comando          | Forma curta | Descrição                                                     |
| ---------------- | ----------- | ------------------------------------------------------------- |
| info breakpoints | i b         | Mostra uma lista de todos os pontos de interrupção            |
| break loop       | b loop      | Define um ponto de interrupção no início do loop()            |
| break 42         | b 42        | Define um ponto de interrupção na linha 42                    |
| break *0x156     | `b *0x156`  | Define um ponto de interrupção no endereço do programa 0x156  |
| tbreak loop      | tb loop     | Define um ponto de interrupção único (temporário) em `loop()` |
| clear loop       | cl loop     | Remove quaisquer pontos de interrupção que esteja em `loop()` |
| clear 42         | cl 42       | Remove ponto de interrupção que esteja na linha 42            |
| delete 1         | d 1         | Remove ponto de interrupção número 1                          |
| disable          | dis         | Desativa todos os pontos de interrupção                       |
| disable 1        | dis 1       | Desativa ponto de interrupção número 1                        |
| enable           | en          | Habilita todos os pontos de interrupção                       |
| enable 1         | en 1        | Habilita ponto de interrupção número 1                        |
| enable once 1    | en once 1   | Habilita ponto de interrupção número 1 uma única vez          |

### Pilha de chamadas

| Comando          | Forma curta | Descrição                                                       |
| ---------------- | ----------- | --------------------------------------------------------------- |
| backtrace        | bt          | Mostra um backtrace da pilha de chamadas atual                  |
| backtrace -full  | bt -fu      | Exibe backtrace incluindo variáveis ​​locais                      |
| info args        | i ar        | Dump (despejo) dos argumentos da função atual                   |
| info locals      | i lo        | Dump das variáveis ​​locais e seus valores                        |
| info registers   | i r         | Dump dos registradores da MCU                                   |
| faas info args   | fa i ar     | Dump dos argumentos de todas as funções na pilha de chamadas    |
| frame 2          | f 2         | Seleciona o frame número 2                                      |
| up               |             | Vá um frame da pilha para cima (por exemplo, chamada de função) |
| down             | do          | Vá um frame da pilha para baixo                                 |

### Código de inspeção

| Comando          | Forma curta | Descrição                                              |
| ---------------- | ----------- | ------------------------------------------------------ |
| list loop        | l loop      | Exibe o código fonte da função `loop()`                |
| disassemble      | disas       | Disassemble (desmonte) a localização atual do programa |
| disassemble/s    | disas/s     | Disassemble incluindo o código-fonte                   |
| disassemble/r    | disas/r     | Disassemble incluindo opcodes (em hexadecimal)         |
| disassemble loop | disas loop  | Disassemble a função `loop()`                          |

### Inspecionando dados

| Comando              | Forma curta  | Descrição                                                           |
| -------------------- | ------------ | ------------------------------------------------------------------- |
| print $pc            | p $pc        | Imprime o valor do registrador PC (contador do programa)            |
| print $r0            | p $r0        | Imprime o valor do registrador R0                                   |
| print i              | p i          | Imprime o valor da variável i                                       |
| print PORTB          | p PORTB      | Imprime o valor de I/O do registrador PORTB                         |
| dprint loop,"Loop\n" | dp …         | Imprime "Loop" sempre que o `loop()` começa                         |
| dprint loop,"%d\n",i | dp …         | Imprime o valor de `i` toda vez que o `loop()` começa               |
| x/16b $sp            |              | Despejo de 16 bytes da memória começando em $sp (ponteiro da pilha) |
| x/10w 0x800200       |              | Despejo de 10 dwords começando no endereço do espaço de dados 0x200 |
| x/s 0x800151         |              | Despejo de uma string no endereço do espaço de dados 0x151          |
| display someVar      | disp someVar | Exibe o valor de `someVar` sempre que o programa parar              |
| info display         | i di         | Lista as expressões ativas de exibição automática (watch)           |
| delete display 1     | d d 1        | Excluí a expressão de exibição automática número 1                  |

### Modificando dados

| Comando                | Forma curta  | Descrição                                                             |
| ---------------------- | ------------ | --------------------------------------------------------------------- |
| set i = 0              | s i=0        | Altera o valor da variável `i` para 0                                 |
| set $pc = 0            | s $pc=0      | Salta para o início do programa                                       |
| set $r12 = 0x55        | s $r12=0x55  | Define r12 como 0x55                                                  |
| set PORTB = 0xff       | s PORTB=0xff | Define o (registro de I/O) do PORTB para 0xff                         |
| set {int}0x800200 = 50 | s …          | Define um número inteiro no endereço do espaço de dados 0x200 para 50 |

### Interface de usuário de texto (TUI)

| Comando          | Forma curta | Descrição                                       |
| ---------------- | ----------- | ----------------------------------------------- |
| tui enable       | tu e        | Ativa o modo TUI (também Ctrl X + A)            |
| tui disable      | tu d        | Desativa o modo TUI (também Ctrl X + A)         |
| tui reg all      | tu r a      | Exibe a janela de registradores                 |
| layout asm       | la a        | Muda para a visualização em Assembly            |
| layout src       | la sr       | Muda para a visualização do Código-fonte        |
| layout split     | la sp       | Divide a visualização (Assembly + Código-fonte) |
| update           | upd         | Mostra a linha atual na janela do Código Fonte  |
| Ctrl+L           |             | Redesenha a tela                                |

### Outros comandos

| Comando          | Forma curta   | Descrição                                                       |
| ---------------- | ------------- | --------------------------------------------------------------- |
| (empty line)     |               | Repete o comando anterior                                       |
| help continue    | h c           | Exibe a ajuda do comando "continue"                             |
| help break       | h b           | Exibe a ajuda do comando "break"                                |
| help breakpoints | h breakpoints | Exibe uma lista de todos os comandos relacionados ao breakpoint |
| quit             | q             | Saí do GDB (no Wokwi Web GDB, o GDB será reiniciado)            |

## Aprenda mais

Se você quiser saber como fizemos o GDB funcionar no navegador, dê uma olhada em [Executando GDB no navegador](https://blog.wokwi.com/running-gdb-in-the-browser/).
Você não precisa saber disso para usar o GDB - são apenas os detalhes sangrentos que permitem que você dê uma olhada nos bastidores.
