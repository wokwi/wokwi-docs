---
title: GDB Debugging
sidebar_label: Debugging
---

GDB is a powerful source code debugger. You can use it to debug your Arduino code in Wokwi.

## Running GDB in Wokwi

To start a GDB session, go into the code editor and press **F1**. In the prompt that opens, type "GDB",
and select **"Start Web GDB Session (debug build)"**.

This will open a new browser tab with the GDB prompt. If this is the first time you are using this
feature, it may take up to 30 seconds for GDB to fully load.

## Debugging Session Example

When GDB is ready, you'll get the following prompt:

```
0x00000000 in __vectors ()
(gdb)
```

At this point you can type GDB commands. For instance, suppose you want to run your program
line-by-line, starting from `setup()`. First, type `tbreak setup` and `c` to start the program
and run it until the beginning of `setup()`:

```
(gdb) tbreak setup
Temporary breakpoint 1 at 0x2ca: file sketch.ino, line 28.
(gdb) c
Continuing.

Temporary breakpoint 1, setup () at sketch.ino:28
28        pinMode(LED_BUILTIN, OUTPUT);
(gdb)
```

At this point, type `layout src` to show the source code of your program, and type
`next` to execute the next line of source code. You can then type `next` repeatedly
to go over the code line by line.

If you want to print the value of some variable, use the `print` command. For example,
if you have a variable called `ledIndex`, type `print ledIndex` to print the value
of that variable.

## Learn more

Take a look at the [AVR GDB Cheatsheet](https://blog.wokwi.com/gdb-avr-arduino-cheatsheet/) to see
many more examples of useful GDB commands. It takes time to learn about all the different GDB features
and to use them efficiently, but it can get very powerful even with just a few basic commands.

If you want to learn how we got GDB to work in the browser, take a look at [Running GDB in the Browser](https://blog.wokwi.com/running-gdb-in-the-browser/). You don't need to know this in order to use GDB - it's just the gory details that let you take a look under the hood.
