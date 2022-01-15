---
title: Bibliotecas Arduino
sidebar_label: Bibliotecas
---

Para incluir uma biblioteca, vá ao editor de código e digite `#` em uma linha vazia. Você verá uma lista suspensa de preenchimento automático com sugestões do `#include` para as bibliotecas mais populares.

Por padrão, o Wokwi compila seu código com as bibliotecas padrão integradas do Arduino, como Wire.h e SPI.h.

## Adicionando bibliotecas de terceiros

Para adicionar bibliotecas de terceiros ao seu projeto, vá para a guia "Library Manager" no editor de código e pressione o botão roxo "+". Digite algum texto na caixa de pesquisa para procurar uma biblioteca (por exemplo, "FastLED") e clique em um dos nomes de biblioteca na lista para adicioná-la.

Você pode usar este método para instalar qualquer biblioteca do Arduino a partir do Arduino Library Manager.

### Carregando bibliotecas personalizadas

[Membros do clube](https://wokwi.com/club) podem fazer upload de qualquer biblioteca do Arduino selecionando uma pasta em seu computador. Para fazer upload de uma biblioteca personalizada, clique no botão roxo "+" no gerenciador de bibliotecas do Arduino e clique em "Upload a Library".

A pasta selecionada deve conter o código-fonte da biblioteca (arquivos .h e .c/.cpp). Depois de selecionar uma pasta, o Wokwi compactará seu conteúdo e fará o upload para o servidor de compilação do Wokwi. Você poderá ver a biblioteca no Library Manager como um arquivo .zip.

Qualquer pessoa que abrir o projeto poderá baixar a biblioteca do gerenciador de bibliotecas. Qualquer usuário que criar uma cópia do projeto poderá usar a biblioteca no projeto copiado.

## O arquivo library.txt

Quando você adiciona bibliotecas por meio do "Library Manager" integrado, ele cria um arquivo "libraries.txt" em seu projeto. É um arquivo de texto simples que lista todas as bibliotecas instaladas em seu projeto, uma biblioteca por linha. As linhas que começam com "#" são comentários.

Normalmente, você não precisa editar este arquivo - o "Library Manager" faz isso para você. Mas você pode achar este arquivo útil se quiser instalar uma versão específica de uma biblioteca. Para selecionar uma versão específica, adicione "@" após o nome da biblioteca, seguido pela versão que deseja instalar.

Por exemplo, o arquivo a seguir instalará as versões mais recentes de Servo e FastLED, bem como a versão 2.3.0 de MySensors:

```
# Arquivo de exemplo libraries.txt:
Servo
FastLED

## Solicitando uma biblioteca
# Instala uma versão específica de uma biblioteca:
MySensors@2.3.0
```

As bibliotecas personalizadas têm o seguinte formato: o nome da biblioteca, seguido pelo texto "@wokwi:" e um identificador exclusivo do arquivo zip da biblioteca nos servidores do Wokwi. Você pode copiar bibliotecas personalizadas para um projeto diferente copiando as linhas relevantes do arquivo library.txt para o outro projeto.
