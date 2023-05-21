---
title: Supported Hardware
---

Wokwi simulates a wide variety of hardware components, including microcontrollers, sensors, displays, and more. It supports the following architectures: ARM, AVR, RISC-V, and Xtensa.

## Microcontrollers

The following microcontrollers are currently supported:

| Family                            | Microcontrollers                                                                                                                                      |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| AVR                               | ATmega328P ([Arduino Uno](../parts/wokwi-arduino-uno)), ATmega2560 ([Arduino Mega](../parts/wokwi-arduino-mega)), [ATtiny85](../parts/wokwi-attiny85) |
| [ESP32](../guides/esp32)          | **Xtensa**: ESP32, ESP32-S2, ESP32-S3<br /> **RISC-V**: ESP32-C3, ESP32-C6\*<br/>                                                                     |
| [Pi Pico](../parts/wokwi-pi-pico) | RP2040 (Raspberry Pi Pico), an dual-core ARM Cortex-M0+ microcontroller                                                                               |

\* ESP32-C6 support is still in alpha.

## Sensors

| Part                                                                     | Description                                                                                               |
| ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| [HC-SR04](../parts/wokwi-hc-sr04)                                        | HC-SR04 Ultrasonic Distance Sensor                                                                        |
| [DHT22](../parts/wokwi-dht22)                                            | Digital Humidity and Temperature sensor                                                                   |
| [DS1307 RTC](../parts/wokwi-ds1307)                                      | RTC (Real Time Clock) module with I2C interface and 56 bytes of NV SRAM                                   |
| [PIR Motion Sensor](../parts/wokwi-pir-motion-sensor)                    | Passive Infrared (PIR) motion sensor                                                                      |
| [Analog Temperature Sensor (NTC)](../parts/wokwi-ntc-temperature-sensor) | Analog temperature sensor: NTC (negative temperature coefficient) thermistor                              |
| DS18B20 Temperature Sensor                                               | One-Wire digital Temperature Sensor                                                                       |
| [MPU6050](../parts/wokwi-mpu6050)                                        | Integrated sensor with 3-axis accelerometer, 3-axis gyroscope and a temperature sensor with I2C interface |
| [Photoresistor](../parts/wokwi-photoresistor-sensor)                     | Photoresistor (LDR) Sensor                                                                                |
| [HX711 Load Cell](../parts/wokwi-hx711)                                  | HX711 Load Cell Amplifier with 5kg/50kg/gauge load cell                                                   |

## Input devices

| Part                                                      | Description                                                                       |
| --------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [Pushbutton](../parts/wokwi-pushbutton)                   | 12mm Tactile Switch Button (momentary push button)                                |
| [Slide switch](../parts/wokwi-slide-switch)               | Standard Single Pole Double Throw (SPDT) slide switch                             |
| [DIP Switch 8](../parts/wokwi-dip-switch-8)               | Set of 8 electrical switches in a single package                                  |
| [Keypad](../parts/wokwi-membrane-keypad)                  | A standard 4x4 keypad (for numeric input)                                         |
| [Analog Joystick](../parts/wokwi-analog-joystick)         | Analog Joystick with two axes (horizontal/vertical) and an integrated push button |
| [Potentiometer](../parts/wokwi-potentiometer)             | Knob-controlled variable resistor (linear potentiometer)                          |
| [Slide Potentiometer](../parts/wokwi-slide-potentiometer) | Sliding variable resistor (linear potentiometer)                                  |
| [Rotary Encoder (KY-040)](../parts/wokwi-ky-040)          | KY-040 Rotary Encoder module with 20 steps per revolution.                        |

## LEDs

| Part                                          | Description                                        |
| --------------------------------------------- | -------------------------------------------------- |
| [LED](../parts/wokwi-led)                     | Standard 5mm LED (Light Emitting Diode)            |
| [RGB LED](../parts/wokwi-rgb-led)             | 5mm Red, Green and Blue (RGB) LED                  |
| [LED Bar Graph](../parts/wokwi-led-bar-graph) | 10-segment LED Bar Graph                           |
| WS2812 LED                                    | NeoPixel Compatible LED                            |
| WS2812 LED Ring                               | NeoPixel Compatible LED Ring                       |
| WS2812 LED Strip                              | NeoPixel Compatible LED Strip                      |
| WS2812 LED Matrix                             | NeoPixel Compatible LED Matrix                     |
| NeoPixel Meter                                | Monitors NeoPixel frame rate and power consumption |
| [NLSF595 LED Driver](../parts/wokwi-nlsf595)  | Serial (SPI) Tri-Color LED Driver                  |

## Display

| Part                                                           | Description                                                |
| -------------------------------------------------------------- | ---------------------------------------------------------- |
| [LCD 1602](../parts/wokwi-lcd1602)                             | An LCD with 2 lines, 16 characters per line                |
| [LCD 2004](../parts/wokwi-lcd2004)                             | An LCD with 4 lines, 20 characters per line                |
| [ILI9341 2.8" TFT-LCD display](../parts/wokwi-ili9341)         | Full color 240x320 2.8" LCD-TFT display with SPI interface |
| ILI9341 2.8" Touch Screen LCD                                  | ILI9341 LCD with FT6206 I2C capacitive touch controller    |
| [SSD1306 OLED](../parts/board-ssd1306)                         | Monochrome 128x64 OLED display with I2C interface          |
| [MAX7219 LED Dot Matrix](../parts/wokwi-max7219-matrix)        | 8x8 LED Dot Matrix with MAX7219 Controller                 |
| [Seven Segment Display](../parts/wokwi-7segment)               | Seven segment LED display (1 to 4 digits)                  |
| [TM1637 Seven Segment Display](../parts/wokwi-tm1637-7segment) | 4 digit seven segment module with TM1637 4-wire interface  |
| 2.9" e-Paper Display                                           | 2.9" e-Paper Display                                       |
| [PAL TV](../parts/wokwi-tv)                                    | Black and White analog PAL TV screen                       |

## Motors

| Part                                                    | Description                                                                                      |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| [Servo](../parts/wokwi-servo)                           | A standard Micro Servo Motor                                                                     |
| [Bipolar Stepper Motor](../parts/wokwi-stepper-motor)   | A bipolar Stepper Motor                                                                          |
| [A4988](../parts/wokwi-a4988)                           | A4988 Stepper Motor Driver                                                                       |
| [Biaxial Stepper Motor](../parts/wokwi-biaxial-stepper) | A concentric biaxial stepper motor, containing two stepper motors packaged in a single enclosure |

## Communications

| Part                                      | Description                                 |
| ----------------------------------------- | ------------------------------------------- |
| [IR Receiver](../parts/wokwi-ir-receiver) | 38KHz infrared receiver                     |
| [IR Remote](../parts/wokwi-ir-remote)     | 38KHz infrared remote with 20 function keys |

## Logic

| Part                                                   | Description                                                |
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

## Other parts

| Part                                            | Description                             |
| ----------------------------------------------- | --------------------------------------- |
| [Resistor](../parts/wokwi-resistor)             | Resistor                                |
| [Buzzer](../parts/wokwi-buzzer)                 | A piezoelectric buzzer                  |
| [Relay Module](../parts/wokwi-relay-module)     | Relay Module                            |
| [DPDT Relay](../parts/wokwi-ks2e-m-dc5)         | Double Pole Double Throw (DPDT) Relay   |
| Breadboard                                      | Standard, half and mini sizes available |
| [Logic Analyzer](../parts/wokwi-logic-analyzer) | 8-Channel Digital Logic Analyzer        |
| [microSD card](../parts/wokwi-microsd-card)     | microSD card with SPI interface         |
