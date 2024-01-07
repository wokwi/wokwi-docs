---
title: Unterstützte Hardware
---

Wokwi unterstützt eine Vielzahl an Hardwarekomponenten, z.B. Mikrocontroller, Sensoren, Displays und viele weitere Komponenten. Folgende Architekturen werden unterstützt: ARM, AVR, RISC-V und Xtensa.

:::warning

Einige Bauteile wurden nicht übersetzt, da es keine gute Übersetzung gibt oder nur Teile der Beschreibung wurden übersetzt.

:::

## Microcontroller

The following microcontrollers are currently supported:

| Familie                           | Microcontroller                                                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| AVR                               | ATmega328P ([Arduino Uno](../parts/wokwi-arduino-uno)), ATmega2560 ([Arduino Mega](../parts/wokwi-arduino-mega)), [ATtiny85](../parts/wokwi-attiny85) |
| [ESP32](../guides/esp32)          | **Xtensa**: ESP32, ESP32-S2, ESP32-S3<br /> **RISC-V**: ESP32-C3, ESP32-C6, ESP32-H2\*<br/>                                                           |
| STM32                             | [STM32C031](../parts/board-st-nucleo-c031c6), [STM32L031](../parts/board-st-nucleo-l031k6)                                                            |
| [Pi Pico](../parts/wokwi-pi-pico) | RP2040 (Raspberry Pi Pico), ein Dual-Core ARM Cortex-M0+ microcontroller                                                                               |

\* ESP32-C6 Support ist in der Beta, ESP32-H2 Support ist in der Alpha.

## Sensoren

| Teil                                                                     | Beschreibung                                                                                               |
| ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| [HC-SR04](../parts/wokwi-hc-sr04)                                        | HC-SR04 Ultraschall Entfernungssensor |
| [DHT22](../parts/wokwi-dht22)                                            | Digitaler Feuchtigkeits- und Temeratursensor |
| [DS1307 RTC](../parts/wokwi-ds1307)                                      | RTC (Real Time Clock) Modul mit I2C interface und 56 Bytes NV SRAM |
| [PIR Motion Sensor](../parts/wokwi-pir-motion-sensor)                    | Passiver Infrarot Bewegungssensor                                                                         |
| [Analog Temperature Sensor (NTC)](../parts/wokwi-ntc-temperature-sensor) | Analoger Temeratursensor: NTC (negative temperature coefficient) Thermistor                               |
| DS18B20 Temperature Sensor                                               | One-Wire digitaler Temperatursensor                                                                       |
| [MPU6050](../parts/wokwi-mpu6050)                                        | Integrierter Sensor mit 3-Achsen-Beschleunigungsmesser, 3-Achsen-Gyroskop und einem Temperatursensor mit I2C-Schnittstelle |
| [Photoresistor](../parts/wokwi-photoresistor-sensor)                     | Photowiderstand (LDR) Sensor                                                                              |
| [HX711 Load Cell](../parts/wokwi-hx711)                                  | HX711 Load Cell Amplifier with 5kg/50kg/gauge load cell                                                   |

## Input devices

| Teil                                                      | Beschreibung                                                                      |
| --------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [Pushbutton](../parts/wokwi-pushbutton)                   | 12mm Tastschalter (Drucktaster)                                                   |
| [Slide switch](../parts/wokwi-slide-switch)               | Standard-Schiebeschalter (SPDT), einpolig und zweistufig                          |
| [DIP Switch 8](../parts/wokwi-dip-switch-8)               | Set von 8 Schaltern                                                               |
| [Keypad](../parts/wokwi-membrane-keypad)                  | Standard 4x4 Keypad (für die Eingabe von Zahlen)                                  |
| [Analog Joystick](../parts/wokwi-analog-joystick)         | Analoger Joystick mit zwei Achsen (horizontal/vertical) and integriertem Taster   |
| [Potentiometer](../parts/wokwi-potentiometer)             | Regelbarer Widerstand mit Drehknopf (lineares Potentiometer)                      |
| [Slide Potentiometer](../parts/wokwi-slide-potentiometer) | Variabler Schiebwiderstand (lineares Potentiometer)                               |
| [Rotary Encoder (KY-040)](../parts/wokwi-ky-040)          | KY-040 Rotary Encoder Modul mit 20 Schritten pro Umdrehung.                       |

## LEDs

| Part                                          | Description                                        |
| --------------------------------------------- | -------------------------------------------------- |
| [LED](../parts/wokwi-led)                     | Standard 5mm LED (Light Emitting Diode)            |
| [RGB LED](../parts/wokwi-rgb-led)             | 5mm Red, Green and Blue (RGB) LED                  |
| [LED Bar Graph](../parts/wokwi-led-bar-graph) | 10-segment LED Bar Graph                           |
| WS2812 LED                                    | NeoPixel kombatible LED                            |
| WS2812 LED Ring                               | NeoPixel kompatibler LED Ring                      |
| WS2812 LED Strip                              | NeoPixel kompatibler LED Streifen                  |
| WS2812 LED Matrix                             | NeoPixel kompatible LED Matrix                     |
| NeoPixel Meter                                | Misst NeoPixel Framerate und Energieverbrauch      |
| [NLSF595 LED Driver](../parts/wokwi-nlsf595)  | Serieller (SPI) Tri-Color LED-Treiber              |

## Display

| Teil                                                           | Beschreibung                                               |
| -------------------------------------------------------------- | ---------------------------------------------------------- |
| [LCD 1602](../parts/wokwi-lcd1602)                             | LCD mit 2 Zeilen, 16 Zeichen pro Zeile                     |
| [LCD 2004](../parts/wokwi-lcd2004)                             | LCD mit 4 Zeilen, 20 Zeichen pro Zeile                     |
| [ILI9341 2.8" TFT-LCD display](../parts/wokwi-ili9341)         | Full color 240x320 2.8" LCD-TFT Display mit SPI interface  |
| ILI9341 2.8" Touch Screen LCD                                  | ILI9341 LCD with FT6206 I2C capacitive touch controller    |
| [SSD1306 OLED](../parts/board-ssd1306)                         | Monochrome 128x64 OLED display mit I2C Interface           |
| [MAX7219 LED Dot Matrix](../parts/wokwi-max7219-matrix)        | 8x8 LED Punktmatrix mit MAX7219 Controller                 |
| [Seven Segment Display](../parts/wokwi-7segment)               | 7-Segment Display (eine bis vier Ziffern)                  |
| [TM1637 Seven Segment Display](../parts/wokwi-tm1637-7segment) | 4 Ziffern 7-Segment Display mit TM1637 4-wire Interface    |
| 2.9" e-Paper Display                                           | 2.9" e-Paper Display                                       |
| [PAL TV](../parts/wokwi-tv)                                    | Analoger Schwarzweiß PAL-TV Bildschirm                     |

## Motors

| Teil                                                    | Beschreibung                                                                                     |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| [Servo](../parts/wokwi-servo)                           | Standard micro Servomotor                                                                        |
| [Bipolar Stepper Motor](../parts/wokwi-stepper-motor)   | Standard bipolarer Steppermotor                                                                  |
| [A4988](../parts/wokwi-a4988)                           | A4988 Stepper Motor Driver                                                                       |
| [Biaxial Stepper Motor](../parts/wokwi-biaxial-stepper) | A concentric biaxial stepper motor, containing two stepper motors packaged in a single enclosure |

## Kommunikation

| Teil                                      | Beschreibung                                |
| ----------------------------------------- | ------------------------------------------- |
| [IR Receiver](../parts/wokwi-ir-receiver) | 38KHz Infrarotempfänger                     |
| [IR Remote](../parts/wokwi-ir-remote)     | 38KHz Infrarotfernbedienung mit 20 Tasten   |

## Logik

| Teil                                                   | Beschreibung                                               |
| ------------------------------------------------------ | ---------------------------------------------------------- |
| NOT gate                                               | NOT gate                                                   |
| AND gate                                               | AND gate                                                   |
| OR gate                                                | OR gate                                                    |
| XOR gate                                               | XOR gate                                                   |
| NAND gate                                              | NAND gate                                                  |
| MUX                                                    | MUX                                                        |
| Flip-Flop D                                            | Flip-Flop D                                                |
| Flip-Flop DSR                                          | Flip-Flop DSR                                              |
| [74HC595 Shift Register](../parts/wokwi-74hc595)       | 8-bit Serial-In Parallel-Out (SIPO) Shift Register         |
| [74HC165 Input Shift Register](../parts/wokwi-74hc165) | 8-bit Parallel-In Serial-Out (PISO) Shift Register (Input) |

## Andere Teile

| Teil                                            | Beschreibung                            |
| ----------------------------------------------- | --------------------------------------- |
| [Resistor](../parts/wokwi-resistor)             | Widerstand                              |
| [Buzzer](../parts/wokwi-buzzer)                 | Piezoelektrischer Buzzer                |
| [Relay Module](../parts/wokwi-relay-module)     | Relay Modul                             |
| [DPDT Relay](../parts/wokwi-ks2e-m-dc5)         | Double Pole Double Throw (DPDT) Relay   |
| Breadboard                                      | Standard, halbgroß und mini verfügbar   |
| [Logic Analyzer](../parts/wokwi-logic-analyzer) | 8-Kanal Digital Logic Analyzer          |
| [microSD card](../parts/wokwi-microsd-card)     | microSD Karte mit SPI interface         |
