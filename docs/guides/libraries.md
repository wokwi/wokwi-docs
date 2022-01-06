---
title: Arduino Libraries
sidebar_label: Libraries
---

To include a library, go to the code editor and type `#` on an empty line. You'll see a autocomplete dropdown with `#include` suggestions for popular libraries.

By default, Wokwi compiles your code with the standard built-in Arduino libraries, such as Wire.h and SPI.h.

To add third-party libraries to your project, go to the "Library Manager" tab in the code editor, and press the purple "+" button. Type some text in the search box to search for a library (e.g. "FastLED"), and then click on one of the library names in the list to add it.

You can use this method to install any Arduino library from the Arduino Library Manager. If you need a library that is not available on the Arduino Library Manager, you can either copy the library source files to your project, or [submit it to the Arduino Library Manager](https://github.com/arduino/library-registry/blob/main/FAQ.md#submission).

## The libraries.txt file

When you add libraries through the built-in "Library Manager", it will create a "libraries.txt" file in your project. It is a simple text file that lists all of libraries installed in your project, one library per line. Lines that start with "#" are comments.

Normally, you don't need to edit this file yourself - the "Library Manager" does this for you. But you can find this file useful if you want to install a specific version of a library. To select a specific version, add "@" after the library name, followed by the version that you want to install.

For example, the following file will install the latest versions of Servo and FastLED, as well as version 2.3.0 of MySensors:

```
# Sample libraries.txt file:
Servo
FastLED

# Install a specific version of a library:
MySensors@2.3.0
```
