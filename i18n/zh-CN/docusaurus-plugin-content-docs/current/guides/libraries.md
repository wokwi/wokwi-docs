---
title: Arduino Libraries
sidebar_label: Libraries
---

To include a library, go to the code editor and type `#` on an empty line. You'll see a autocomplete dropdown with `#include` suggestions
for popular libraries.

By default, Wokwi compiles your code with the standard built-in Arduino libraries, such as Wire.h and SPI.h.

To add third-party libraries to your project, add a "libraries.txt" file to your project. List the libraries that you want to include, one library per line. Lines that start with "#" are comments.

For example, the following file will install the latest versions of Servo and FastLED, as well as version 2.3.0 of MySensors:

```
# Sample libraries.txt file:
Servo
FastLED

# Install a specific version of a library:
MySensors@2.3.0
```

You can find the library names in the Arduino Library Manager. Alternatively, you can find it inside the source code of the library. Look for the `name` field of the `library.properties` file.

At the moment, only libraries from the Arduino Library Manager are supported. If you need a library that is not available on the Arduino Library Manager, you can either copy the library source files to your project, or [submit it to the Arduino Library Manager](https://github.com/arduino/library-registry/blob/main/FAQ.md#submission).
