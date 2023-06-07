---
title: STM32 Nucleo64 C031C6
sidebar_label: board-st-nucleo-c031c6
---

A Nucleo-64 development board with STM32C031C6 MCU: ARM Cortex-M0+ processor, 32 KB Flash, 12 KB RAM running at 48 MHz.

![board-st-nucleo-c031c6](https://raw.githubusercontent.com/wokwi/wokwi-boards/main/boards/st-nucleo-c031c6/board.svg)

### Onboard LED

The Nucleo-C031C6 has an onboard user LED (LD4), attached to GPIO pin PA5 (D13). The LED is lit when the pin is driven high.

You can also use the `LED_BUILTIN` constant to reference the LED in your Arduino code:

```cpp
pinMode(LED_BUILTIN, OUTPUT);
digitalWrite(LED_BUILTIN, HIGH);
```

See [Blink](https://wokwi.com/projects/365916265388374017) for a complete code example.

## Simulation features

This table summarizes the current status of the STM32C031C6 MCU simulation features:

| Feature        | Status | Notes                                           |
| -------------- | ------ | ----------------------------------------------- |
| Processor core | ✔️     | Cortex M0+ core                                 |
| SysTick timer  | ✔️     |                                                 |
| GPIO           | 🟡     | Interrupts not supported yet                    |
| USART          | ✔️     |                                                 |
| I2C            | ✔️     | Master mode only                                |
| SPI            | ✔️     | Master mode only                                |
| ADC            | ✔️     | Used by analogRead()                            |
| STM32 timers   | ❌     | TIM1/3/14/16/17                                 |
| CRC            | ❌     |                                                 |
| DBG            | ❌     |                                                 |
| DMA            | ❌     |                                                 |
| EXTI           | ❌     |                                                 |
| IWDG           | ❌     |                                                 |
| PWR            | ❌     |                                                 |
| RCC            | 🟡     |                                                 |
| RTC            | ❌     |                                                 |
| SYSCFG         | ❌     |                                                 |
| WWDG           | ❌     |                                                 |
| GDB Debugging  | ✔️     | See the [GDB Debugging guide](../gdb-debugging) |

Legend:  
✔️ Simulated  
🟡 Partial implementation/work in progress  
❌ Not implemented

## Simulator examples

- [Nucleo-C031C6 STM32 HAL Example](https://wokwi.com/projects/365551778332549121)
- [Nucleo-C031C6 and I2C LCD1602](https://wokwi.com/projects/365421666018061313)
- [Nucleo-C031C6 and ILI9341 SPI LCD Display](https://wokwi.com/projects/365549388158011393)
