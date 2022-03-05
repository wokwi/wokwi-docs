---
title: MicroPython on Wokwi
sidebar_label: MicroPython
---

You can create and run MicroPython projects on Wokwi. Start from the [Raspberry Pi Pico MicroPython project template](https://wokwi.com/projects/new/micropython-pi-pico).

## Project structure

All MicroPython projects must include a `main.py` file. MicroPython will automatically load and execute the code from `main.py` when you start the simulation.

Wokwi copies all the project files into the Pico's flash filesystem. This means your project
can include additional Python modules and you can import them from `main.py` or from the interactive
REPL. Your project can also include custom data inside text files.

You can get a list of all the files in the flash filesystem by running:

```python
import os
print(os.listdir('/'))
```

# MicroPython REPL

When the code in `main.py` terminates (or you interrupt it with Ctrl+C), you'll get into the MicroPython REPL. The REPL is an interactive prompt where you can type python commands and see the results immediately. Type `help()` for MicroPython API cheat sheet. To paste code into the REPL type Ctrl+E and enter paste mode.

## Project examples

- [Blink with MicroPython](https://wokwi.com/projects/300504213470839309)
- [MicroPython 7-Segment Display](https://wokwi.com/projects/300210834979684872)
