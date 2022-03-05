---
title: Referência do wokwi-lcd2004
sidebar_label: wokwi-lcd2004
---

Um display LCD com 4 linhas, 20 caracteres por linha.

<wokwi-lcd2004 text="    wokwi-lcd2004                         4x20 characteres" />

Este componente tem os mesmos pinos e atributos do wokwi-lcd1602.

Para **informações completas e exemplos de código**, consulte a [Referência do wokwi-lcd1602](wokwi-lcd1602).

### Exemplos

| Resultado                                                           | Attrs                                        |
| ------------------------------------------------------------------- | -------------------------------------------- |
| <wokwi-lcd2004 text="Ola Mundo!" />                                 | `{ }`                                        |
| <wokwi-lcd2004 text="Ola Mundo!" pins="i2c" />                      | `{ "pins": "i2c" }`                          |
| <wokwi-lcd2004 background="blue" color="white" text="Ola Mundo!" /> | `{ "background": "blue", "color": "white" }` |

## Exemplos no simulador

- [LCD2004 Tiny Pacman on Wokwi](https://wokwi.com/projects/294590769009787402)
