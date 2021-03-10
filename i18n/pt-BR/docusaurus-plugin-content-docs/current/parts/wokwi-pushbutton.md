---
title: Referência do wokwi-pushbutton
sidebar_label: wokwi-pushbutton
---

Botão interruptor tátil de 12 mm (botão momentâneo).

<wokwi-pushbutton />

## Nome dos Pinos

| Nome      | Descrição                             |
| --------- | ------------------------------------- |
| 1.l / 1.r | Primeiro contato (esquerda / direita) |
| 2.l / 2.r | Segundo contato (esquerda / direita)  |

O botão de pressão tem dois conjuntos de pinos (contatos), 1 e 2.
Quando o botão é pressionado, ele conecta esses dois contatos, fechando assim um circuito elétrico.

Cada contato tem um pino do lado esquerdo do botão e outro pino do lado direito do botão.
Portanto, o pino `1.l` é o pino esquerdo para o primeiro contato e` 1.r` é o pino direito para o primeiro contato. Uma vez que ambos pertencem
para o mesmo contato, eles estão sempre conectados, mesmo quando o botão não é pressionado.

Ao trabalhar com o Arduino, você normalmente conecta um contato (por exemplo, `1.r` ou` 1.l`) a um pino digital e configura
aquele pino como `INPUT_PULLUP`, e o outro contato (ex: `2.r` ou `2.l`) para o terra. O pino digital irá ler
`BAIXO` quando você pressiona o botão e` ALTO` quando o botão não é pressionado.

## Atributos

| Name  | Descrição                    | Valor padrão  |
| ----- | ---------------------------- | ------------- |
| color | A cor do botão momentâneo    | "red"         |
| key   | Tecla de atalho para o botão |               |

### Definindo uma tecla de atalho

Você pode usar o atributo "key" para definir uma tecla do teclado para controlar um botão.
Essa tecla só estara disponível quando a simulação estiver em execução e o diagrama em foco.

Por exemplo, suponha que você definiu "key" para "Q". Então, quando você executa a simulação e
ao pressionar _Q_ no teclado o botão será pressionado. O botão será mantido
no estado pressionado, desde que você mantenha pressionado _Q_, e uma vez que você solte a tecla,
o botão também será solto.

Você pode definir qualquer atalho do teclado alfanumérico (portanto, letras e números em Inglês), e para letras,
o valor de "key" não diferencia maiúsculas de minúsculas (então "q" e "Q" significam o mesmo).

Você também pode direcionar algumas teclas especiais, como "Escape", "ArrowUp", "F8", "" (space) ou "PageDown", mas algumas teclas
pode ser bloqueadas pelo navegador (por exemplo, "F5" que atualiza a página).
A lista completa de nomes de chaves pode ser encontrada [aqui](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values).
Observe que o nome de chaves especiais diferenciam maiúsculas de minúsculas - portanto, "Escape" funcionará, "escape" não.

### Exemplos

| Resultado                            | Atributos (attrs)        |
| ------------------------------------ | ------------------------ |
| <wokwi-pushbutton color="green" />   | `{ "color": "green" }`   |
| <wokwi-pushbutton color="#FFFF00" /> | `{ "color": "#FFFF00" }` |

## Exemplos no Simulador

- [Simon Game](https://wokwi.com/arduino/libraries/demo/simon-game) - Um jogo de memória com 4 botões momentâneo
- [Diatonic Piano](https://wokwi.com/arduino/projects/291958456169005577) - Um piano de 8 notas, use as teclas 1 a 8 para pressionar os botões e tocar as notas.
