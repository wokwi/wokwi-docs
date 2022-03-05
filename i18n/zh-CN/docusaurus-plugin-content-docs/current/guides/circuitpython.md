---
title: CircuitPython on Wokwi
sidebar_label: CircuitPython
---

You can simulate CircuitPython on Wokwi using the [Raspberry Pi Pico board](../parts/wokwi-pi-pico). To start a new simulation project, open the [Raspberry Pi Pico CircuitPython project template](https://wokwi.com/projects/new/circuitpython-pi-pico).

## Project structure

CircuitPython projects must include a `code.py` file. The code in this file will execute when you start the simulation.

Wokwi copies all the project files into the Pico's flash file system. This means your project can include additional Python modules and you can import them from `code.py` or from the interactive REPL. Your project can also include custom data inside text files.

You can get a list of all the files in the flash filesystem by running:

```python
import os
print(os.listdir('/'))
```

## Using libraries

You can use any library from the [Adafruit CircuitPython Bundle](https://github.com/adafruit/Adafruit_CircuitPython_Bundle). Create a "requirements.txt" file in your project, and write the names of the libraries that you use, one per line. Lines that start with "#" are comments.

For example, if you want to install both [adafruit_display_text](https://circuitpython.readthedocs.io/projects/display_text/en/latest/) and [adafruit_dht](https://circuitpython.readthedocs.io/projects/dht/en/latest/), create a "requirements.txt" file with the following content:

```
# requirements.txt example
adafruit_display_text
adafruit_dht
```

When you start the simulation, Wokwi downloads all the libraries and their dependencies. It copies them into the "lib" folder in the flash filesystem. You can call `os.listdir('/lib')` to get a list of all the libraries installed. For a complete code example, see [CircuitPython Library List](https://wokwi.com/projects/309475039016649280).

# CircuitPython REPL

When the code in `code.py` terminates (or you interrupt it with Ctrl+C), you'll get into the CircuitPython REPL. The REPL is an interactive prompt where you can type python commands and see the results immediately. To paste code into the REPL type Ctrl+E and enter paste mode.

## Project examples

- [Blink with CircuitPython](https://wokwi.com/projects/309474946192507458)
- [CircuitPython SSD1306 Example](https://wokwi.com/projects/309427357921313345)
