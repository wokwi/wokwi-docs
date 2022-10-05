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

### Duplicando uma peça

Crie uma nova cópia de uma peça clicando nela (para selecioná-la) e pressionando "D". Você pode pressionar "D" várias vezes para criar várias cópias da peça.

### Removendo uma peça

Exclua uma peça clicando nela (para selecioná-la) e em seguida pressionando a tecla Delete.

### Selecionando várias peças

Selecione várias peças clicando nas peças com a tecla Shift pressionada. Você pode então mover todas as partes juntas, duplicá-las (usando a tecla "D") ou excluí-las usando a tecla Delete.

### Copiando e colando peças

Você pode copiar a(s) parte(s) selecionada(s) usando o atalho de teclado padrão Copiar (Ctrl+C ou ⌘+C). Se você selecionou várias peças, todos os fios que conectam as peças selecionadas também são copiados. As partes que você copiou são armazenadas na área de transferência do sistema em um formato JSON, semelhante ao [diagram.json](../diagram-format).

Para colar as partes que você copiou, clique no diagrama e pressione o teclado padrão Colar (Ctrl+V ou ⌘+V). Em alguns casos, as peças serão coladas fora da área do diagrama atualmente visível, portanto, talvez seja necessário diminuir o zoom para encontrá-las. Isso será corrigido no futuro.

Você pode usar o recurso copiar e colar entre diferentes projetos e copiar rapidamente várias partes (incluindo todas as conexões internas) de uma só vez.

## Editando fios

### Criação de uma ligação entre as duas peças

Para criar um novo fio entre duas peças, clique em um dos pinos que deseja conectar. Em seguida, clique no segundo pino (alvo). Isso criará o fio.

Se quiser que o fio vá de uma maneira específica, você pode guiá-lo clicando para onde deseja que ele vá após selecionar o primeiro pino.

Para cancelar um novo fio (exclua-o sem selecionar um pino de destino), clique com o botão direito do mouse ou pressione Escape.

### Mudando a cor de um fio

A cor dos novos fios é determinada automaticamente pela função do pino: os fios que começam nos pinos de aterramento são pretos, pinos de 5V são vermelhos e os outros fios são verdes.

Você pode alterar a cor de um fio clicando nele e selecionando uma nova cor para o fio. Você também pode usar os seguintes atalhos de teclado para definir as cores dos fios:

| Atalho | Cor         |
| ------ | ----------- |
| 0      | Preto       |
| 1      | Marrom      |
| 2      | Vermelho    |
| 3      | Laranja     |
| 4      | Ouro        |
| 5      | Verde       |
| 6      | Azul        |
| 7      | Violeta     |
| 8      | Cinza       |
| 9      | Branco      |
| C      | Ciano       |
| L      | Verde limão |
| M      | Magenta     |
| P      | Roxo        |
| Y      | Amarelo     |

Esses atalhos de teclado também funcionam ao desenhar um novo fio. Você também pode alterar as cores dos fios editando o [diagram.json](../diagram-format#connections)

### Excluindo uma ligação

Exclua um fio clicando nele.

## Atalhos do teclado

A tabela a seguir resume os atalhos do teclado:

| Tecla  | Função                                       |
| ------ | -------------------------------------------- |
| -      | Reduz o zoom                                 |
| +      | Aumenta o zoom                               |
| F      | Ajusta o diagrama à janela (zoom automático) |
| D      | Duplicar (copiar) a peça selecionada         |
| R      | Gira a peça selecionada                      |
| Delete | Remove a peça selecionada                    |
| ?      | Abre a documentação da peça selecionada      |
| Escape | Cancela o fio (no modo de fiação)            |
| G      | Alterna a grade                              |
| Shift  | Alterna ajuste grosso da grade ao arrastar   |
| Alt    | Alterna ajuste fino da grade ao arrastar     |
| Ctrl   | Alterna ajuste fino da grade ao arrastar     |
| Ctrl+Z | Desfazer \*                                  |
| Ctrl+Y | Refazer \*                                   |

\* No Mac, use ⌘ em vez de Ctrl

Usuários do Firefox: se os atalhos de teclado não funcionarem para você, certifique-se de que a configuração "Pesquisar texto ao começar a digitar" esteja desativada.

## Grade de encaixe

Ative a visualização da grade pressionando "G" ou clicando no ícone da grade no menu. Isso exibe uma grade com réguas. A grade grossa é de 2,54 mm ou 0,1 polegadas e a grade fina é de 1,27 mm ou 0,05 polegadas. Os rótulos das réguas mostram as medidas em milímetros (por padrão), mas você pode mudar para polegadas clicando nas unidades no canto superior direito.

A tecla Shift alterna temporariamente o modo de ajuste da grade entre a grade grossa e o movimento livre. Se a grade estiver ativada, ele alterna para movimento livre; se a grade estiver desligada, ele alterna para o encaixe grosso da grade.

A tecla Alt ou a tecla Ctrl alternam temporariamente para grade fina ajustando-se se a grade está visível ou não.

Este comportamento de ajuste da grade é o mesmo para as peças e os fios, e as teclas modificadoras permitem que você execute o ajuste se a grade estiver ligada ou desligada.
