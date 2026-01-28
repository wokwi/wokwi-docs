---
title: STM32 Nucleo32 L031K6
sidebar_label: board-st-nucleo-l031k6
---

A Nucleo-32 development board with STM32L031K6 MCU: ARM Cortex-M0+ processor, 32 KB Flash, 8 KB RAM, 1 KB EEPROM running at 32 MHz.

![board-st-nucleo-l031k6](https://raw.githubusercontent.com/wokwi/wokwi-boards/main/boards/st-nucleo-l031k6/board.svg)

### Onboard LED

The Nucleo-L031K6 has an onboard user LED (LD3), attached to GPIO pin PB3 (D13). The LED is lit when the pin is driven high.

You can also use the `LED_BUILTIN` constant to reference the LED in your Arduino code:

```cpp
pinMode(LED_BUILTIN, OUTPUT);
digitalWrite(LED_BUILTIN, HIGH);
```

See [Blink](https://wokwi.com/projects/367243685392886785) for a complete code example.

## Simulation features

This table summarizes the current status of the STM32L031K6 MCU simulation features:

| Feature        | Status | Notes                                           |
| -------------- | ------ | ----------------------------------------------- |
| Processor core | ✔️     | Cortex M0+ core                                 |
| SysTick timer  | ✔️     |                                                 |
| EERPOM         | ✔️     |                                                 |
| GPIO           | ✔️     |                                                 |
| USART          | ✔️     |                                                 |
| I2C            | ✔️     | Master mode only                                |
| SPI            | ✔️     | Master mode only                                |
| ADC            | ✔️     | Used by analogRead()                            |
| STM32 timers   | ✔️     | TIM2/21/22, used by analogWrite()               |
| Comparator     | ❌     |                                                 |
| CRC            | ✔️     | 32, 16, and 8 bits (7 bits not supported)       |
| DBG            | ❌     |                                                 |
| DMA            | ❌     |                                                 |
| EXTI           | ✔️     |                                                 |
| IWDG           | ❌     |                                                 |
| LPTIM          | ❌     | Low power timer                                 |
| LPUART         | ❌     | Low power USART                                 |
| PWR            | ❌     |                                                 |
| RCC            | ✔️     |                                                 |
| RTC            | ❌     |                                                 |
| SYSCFG         | 🟡     | Only EXTICRn registers                          |
| WWDG           | 🟡     | Implemented, not tested yet                     |
| GDB Debugging  | ✔️     | See the [GDB Debugging guide](../gdb-debugging) |

Legend:  
✔️ Simulated  
🟡 Partial implementation/work in progress  
❌ Not implemented

## Simulator examples

- [Nucleo-L031K6 STM32 HAL Example](https://wokwi.com/projects/367244067477216257)
- [Nucleo-L031K6 and I2C LCD1602](https://wokwi.com/projects/367245102561225729)
- [Nucleo-L031K6 and ILI9341 SPI LCD Display](https://wokwi.com/projects/367245384072432641)
- [GPIO Interrupts on Nucleo-L031K6](https://wokwi.com/projects/367245698833985537)
