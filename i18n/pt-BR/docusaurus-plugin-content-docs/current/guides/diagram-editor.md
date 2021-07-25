---
title: Editor de Diagrama Interativo
sidebar_label: Editor de Diagrama
---

O editor de diagramas fornece uma maneira interativa de editar seu diagrama: adicionar componentes à simulação e definir as conexões entre eles. É uma alternativa conveniente para editar o arquivo [diagram.json](../diagram-format) diretamente.

## Editando peças

### Adicionando uma peça

Para adicionar uma nova peça, clique no botão roxo "+" na parte superior do editor de diagramas.

Você verá um menu com uma lista de peças que você pode adicionar. Escolha uma peça para adicioná-la. A peça será adicionada na posição (0, 0), e então você pode arrastá-la para a posição desejada.

Nem todas as peças estão disponíveis no menu. Por exemplo, placas MCU e microcontroladores como o [Arduino Nano](../parts/wokwi-arduino-nano) ou o [ATtiny85](../parts/wokwi-attiny85) estão faltando. Você ainda pode adicionar essas partes [editando o diagram.json](../diagram-format#parts) diretamente.

### Movendo uma peça

Mova uma parte clicando nela e arrastando-a com o mouse.

### Rotacionando uma peça

Gire uma peça clicando nela (para selecioná-la) e pressionando "R". A peça girará 90 graus no sentido horário. Se você precisar girar uma peça
com um valor diferente (por exemplo, 45 graus), você pode conseguir isso [editando o diagram.json](../diagram-format#parts).

### Removendo uma peça

Exclua uma peça clicando nela (para selecioná-la) e em seguida pressionando a tecla Delete.

## Editando fios

### Criação de uma ligação entre as duas peças

Para criar um novo fio entre duas peças, clique em um dos pinos que deseja conectar. Em seguida, clique no segundo pino (alvo). Isso criará o fio.

Se quiser que o fio vá de uma maneira específica, você pode guiá-lo clicando para onde deseja que ele vá após selecionar o primeiro pino.

Para cancelar um novo fio (exclua-o sem selecionar um pino de destino), clique com o botão direito do mouse ou pressione Escape.

### Mudando a cor de um fio

A cor dos novos fios é determinada automaticamente pela função do pino: os fios que começam nos pinos de aterramento são pretos e os outros fios são verdes.

O editor interativo não oferece suporte para definir a cor dos fios. Você pode, no entanto, alterar a cor de qualquer fio editando [diagram.json](../diagram-format#connections)

### Excluindo uma ligação

Exclua um fio clicando nele.

## Atalhos do teclado

A tabela a seguir resume os atalhos do teclado:

| Tecla  | Função                                  |
| ------ | --------------------------------------- |
| -      | Reduz o zoom                            |
| +      | Aumenta o zoom                          |
| R      | Gira a peça selecionada                 |
| Delete | Remove a peça selecionada               |
| ?      | Abre a documentação da peça selecionada |
| Escape | Cancela o fio (no modo de fiação)       |

Usuários do Firefox: se os atalhos do teclado não funcionarem, certifique-se de que a configuração "Pesquisar texto ao começar a digitar" esteja desabilitada.

## Desfazer / Refazer

Qualquer mudança que você fizer no editor interativo também se refletirá em [diagram.json](../diagram-format).

O editor interativo **não tem** o recurso de desfazer no momento (há uma [solicitação aberta para isso](https://github.com/wokwi/wokwi-features/issues/77)).

Você ainda pode obter o histórico completo de Desfazer se selecionar a guia "diagram.json" no editor de código. Quaisquer alterações feitas no editor de diagramas interativo
refletirá imediatamente no editor de código e você poderá desfazê-los clicando no editor de código e pressionando Ctrl+Z.

Observe que isso só funciona se a guia "diagram.json" estiver ativa enquanto você faz alterações. Esta é uma solução temporária até implementarmos o Desfazer no editor de diagramas interativo.
