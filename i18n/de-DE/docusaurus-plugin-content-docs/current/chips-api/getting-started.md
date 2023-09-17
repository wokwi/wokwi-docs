---
title: Erste Schritte mit der Wokwi Custom Chips C API
sidebar_label: Erste Schritte
---

import ChipsConsoleImage from './chips-console.png';

# Erste Schritte mit der Wokwi Custom Chips C API

:::caution

Die Chips API ist momentan in der Beta. Bitte teile deine Tests und gib im `#custom-chips` Kanal auf unserem [Discord Server](https://wokwi.com/discord) Feedback.

:::

## Einleitung

Die Custom Chips API ermöglicht es dir, neue Simulationsmodelle zu erstellen und die Funktionalität von Wokwi zu erweitern. Du kannst neue Sensoren, Displays, Speicher, Testgeräte und sogar eigene Hardware simulieren.

Benutzerdefinierte Chips werden normalerweise in C erstellt, aber du kannst jeder Sprache nutzen, die zu WebAssembly kompiliert wird (z.B. Rust). Zusätzlich gibt es experimentellen Support für Chips in Verilog.

## Tutorials

- [Video Tutorial](https://youtu.be/yzdCS3A4DvU) - Drei Beispiele in 15 Minuten
- [Step-by-step blog tutorial](https://link.wokwi.com/chips-api-tutorial) - 7-Segment Display Treiberchip von Anfang an

## Erste Schritte

Öffne ein beliebiges Wokwi Projekt (oder [erstelle ein neues Projekt](https://wokwi.com/projects/new)) und klicke auf das blaue "+" im Editor. Wähle "Custom Chip" in der Liste aus.

Gib im Dialog den Namen des Chips sowie die Sprache ein. Als Sprache wird C empfohlen. Klicke anschließend auf "Create Chip", um den Chip zu erstellen.

Der Chip wird zur Grafik hinzugefügt und diese beiden Dateien werden erstellt:

- eine [JSON Datei](./chip-json) mit den Pins und Einstellungen des Chips (Name, Autor, etc.)
- eine C (bzw. Rust/Verilog) Datei mit dem Code für den Chip

Die [JSON Datei](./chip-json) hat Standardmäßig vier Pins ("VCC", "GND", "IN", "OUT"). Die Name und Anzahl der Pins kannst du in der JSON Datei jederzeit ändern.

Am Anfang besteht die C Datei nur aus Beispielcode. Du kannst deinen Code in der `chip_init()` Funktion hinzufügen. Jeder Chip ruft diese Funktion am Anfang auf und du kannst sie nutzen, um den Zustand, Timer oder Aktionen an Pins zu definieren. 

Der Beispielcode enthält auch die Struktur `chip_state_t`, in der du die Zustände speichern kannst, die dein Chip braucht. Du kannst das Feld `user_data` von `i2c_config_t`, `timer_config_t`, etc. nutzen, um Pointer zur Stuktur zu speichern. 

### Benutzerdefinierten Chip debuggen

Du kannst mit der Standard C Funktion `printf()` Debug Nachrichten senden. Achte darauf, `stdio.h` einzubinden. Die Nachrichten werden im "Chips Console" Tab unter der Konsole erscheinen:

<img src={ChipsConsoleImage} alt="Chips Console" width="543" height="109" />

Zusätzlich kannst du den [Wokwi Logic Analyzer](../guides/logic-analyzer) nutzen, um die Kommunikation mit dem Chip zu debuggen.

:::tip
Achte darauf, einen Zeilenumbruch ("\n") am Ende von jeder `printf()` Nachricht einzufügen. Der Simulator zeigt Nachrichten erst, wenn ein Zeilenumbruch kommt.
:::

## Chips API reference 📖

- [GPIO pins API](gpio)
- [Analog API](analog)
- [Time simulation API](time)
- [UART API](uart)
- [I2C Device API](i2c)
- [SPI Device API](spi)
- [Attributes](attributes)
- [Framebuffer API](framebuffer)

## Beispiele

### Basics

- [Digital Inverter](https://wokwi.com/projects/327458636089524820) - Inverts the input signal
- [XOR gate](https://wokwi.com/projects/329456176677782100) - Implements a XOR gate
- [Timer Chip](https://wokwi.com/projects/341265875285836370) - Showing how to use the Time API and create timers

### Kommunikation

- [SPI Chip](https://wokwi.com/projects/330669951756010068) - A basic ROT13 cipher over SPI
- [UART Chip](https://wokwi.com/projects/333638144389808723) - A basic ROT13 cipher over UART
- [I2C Chip](https://wokwi.com/projects/344061754973618771) - Simple counter with interrupt output
- [EEPROM Chip](https://wokwi.com/projects/329482717479567954) - Simple I2C memory with 256 kbits by Benny Meisels

### Displays

- [Framebuffer Chip](https://wokwi.com/projects/330503863007183442) - Shows how to implement a custom display driver chip
- [SSD1306 Display](https://wokwi.com/projects/371050937178768385) - 128x64 monochrome OLED display chip (using I2C)
- [IL9163 Display](https://wokwi.com/projects/333332561949360723) - 128x128 color LCD display chip (using SPI)

### Sensoren

- [LM75A Chip](https://wokwi.com/projects/344037885763125843) - I2C digitaler Temperatursensor
- [I2C Keypad Driver Example](https://wokwi.com/projects/344059749365449300) by Yewolf
- [DS18B20 Chip](https://wokwi.com/projects/349898396478210642) - Dallas Semi DS18B20 Temperature Sensor over OneWire by Bonny Rais

### Komplexe Chips

- [CD4051B Multiplexer Example](https://wokwi.com/projects/343522915673702994) - Analog Multiplexer by Chris Schmidt
- [PCA9685 Chip](https://wokwi.com/projects/348856116302578258) - 16-channel PWM driver over I2C by Bonny Rais
