---
title: Bibliotecas Arduino
sidebar_label: Bibliotecas
---

Para incluir uma biblioteca, vá ao editor de código e digite `#` em uma linha vazia. Você verá uma lista suspensa de preenchimento automático com sugestões do `#include`
para as bibliotecas mais populares.

Por padrão, o Wokwi compila seu código com as bibliotecas padrão integradas do Arduino, como Wire.h e SPI.h.

Para adicionar bibliotecas de terceiros ao seu projeto, adicione um arquivo "libraries.txt" ao seu projeto. Liste as bibliotecas que deseja incluir, uma biblioteca por linha. As linhas que começam com "#" são comentários.

Por exemplo, o arquivo a seguir instalará as versões mais recentes de Servo e FastLED, bem como a versão 2.3.0 de MySensors:

```
# Arquivo de exemplo libraries.txt:
Servo
FastLED

## Solicitando uma biblioteca
# Instala uma versão específica de uma biblioteca:
MySensors@2.3.0
```

Você pode encontrar os nomes das bibliotecas no Arduino Library Manager. Alternativamente, você pode encontrá-lo dentro do código-fonte da biblioteca. Procure o campo `name` no arquivo `library.properties`.

No momento, apenas as bibliotecas do Arduino Library Manager são suportadas. Se precisar de uma biblioteca que não está disponível no Arduino Library Manager, você pode copiar os arquivos de origem da biblioteca para o seu projeto ou [enviá-lo para o Arduino Library Manager](https://github.com/arduino/library-registry/blob/main/FAQ.md#submission).
