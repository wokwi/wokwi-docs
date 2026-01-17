---
title: STM32 Blue Pill
sidebar_label: board-stm32-bluepill
---

An STM32 Blue Pill development board with STM32F103C8: ARM Cortex-M3 processor, 64KiB flash, 20KiB RAM, running at 72MHz.

![STM32 Blue Pill](https://wokwi.github.io/wokwi-boards/stm32-bluepill/board.svg)

## Onboard LED

A user-controllable LED is attached to GPIO pin PC13.

## Simulation features

This table summarizes the current status of the STM32F103C8 simulation features:

| Feature        | Status | Notes                                           |
| -------------- | ------ | ----------------------------------------------- |
| Processor Core | ✔️     | Cortex-M3 core                                  |
| SysTick timer  | ❌     |                                                 |
| GPIO           | ✔️     |                                                 |
| USART          | 🟡     | Implemented, but pin mapping is incomplete      |
| I2C            | ❌     |                                                 |
| SPI            | ✔️     |                                                 |
| ADC            | 🟡     | Dual ADC/ADC2 are missing                       |
| STM32 timers   | ❌     |                                                 |
| CRC            | ❌     |                                                 |
| DBG            | ❌     |                                                 |
| DMA            | ❌     |                                                 |
| EXTI           | ❌     |                                                 |
| IWDG           | ❌     |                                                 |
| PWR            | ❌     |                                                 |
| RCC            | ✔️     |                                                 |
| RTC            | ❌     |                                                 |
| SYSCFG         | ❌     |                                                 |
| WWDG           | ❌     |                                                 |
| GDB Debugging  | ?      | See the [GDB Debugging guide](../gdb-debugging) |

Legend:  
✔️ Simulated  
🟡 Partial implementation/work in progress  
❌ Not implemented 

## Simulator examples

- [STM32 Blue Pill `analogRead()` example](https://wokwi.com/projects/374772127111874561)
- [STM32 Blue Pill SPI LCD](https://wokwi.com/projects/374780854731040769)