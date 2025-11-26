---
title: 'Tutorial: 7-segment display'
sidebar_label: 'Tutorial: 7-segement display'
---

# Tutorial: 7-segment display

## Introduction
The Custom Chips API allows you to create new simulation models and behaviors that extend the functionality of Wokwi.
You can create new sensors, displays, memories, testing instruments and even simulate your own hardware.

Custom chips are usually written in C, and have an accompanying JSON file that describes the pinout, as well as any
input values for the chip (e.g. the current temperature for a temperature sensor chip). Other languages are also
available - more on that later.

In this tutorial we'll learn how to get started with the Chips API by implementing a simple 7-segment controller chip.
The chip will get a character (0-9 or A-F) via UART interface, and will display it on a
[7-segment display](https://docs.wokwi.com/parts/wokwi-7segment#using-the-7-segment-display).

Let's get started!

## The pinout
Before we dive into the code, let's define the pinout for the chip:

| Name  | Type   | Function       |
| :-    | :-     | :-             |
| VCC   | Power  | Supply voltage |
| GND   | Power  | Ground         |
| RX    | Input  | UART           |
| SEG_A | Output | 7-segment      |
| SEG_B | Output | 7-segment      |
| SEG_C | Output | 7-segment      |
| SEG_D | Output | 7-segment      |
| SEG_E | Output | 7-segment      |
| SEG_F | Output | 7-segment      |
| SEG_G | Output | 7-segment      |

Our chip will have a total of 10 pins: two power supply pins, one UART input pin (RX), and 7 output pins to drive the
7-segment display. For simplicity, we'll assume that the 7-segment display is a common anode display, which is the
default on Wokwi.

## The chip JSON file
Now we're ready to start writing code! We'll start from an empty ESP32-C3 project:
[wokwi.com/projects/new/esp32-c3](https://wokwi.com/projects/new/esp32-c3).

The first thing we need to do is to create a custom chip. The easiest way to go about this is to press the blue "+"
button and serach for "Custom Chip". After selecting this option, type "sevseg-controller" for the chip name. Select
the "C" language option.

Wokwi will add a green breakout board for your custom chip, and create two new files in your project:
- `sevseg-controller.chip.json` - defines the pinout
- `sevseg-controller.chip.c` - defines the logic for the chip

We'll start by editing the `sevseg-controller.chip.json` as follows:
1. Change the `name` of the chip to "7 Segment Controller"
2. Change the `author` of the chip to your name
3. Change the `pins` array of the chip to include all the pin names:
    ```json
    ["VCC", "GND", "RX", "SEG_A", "SEG_B", "SEG_C", "SEG_D", "SEG_E", "SEG_F", "SEG_G"]
    ```

You'll see the green breakout board updating as you make changes to the JSON file.

## Implementing the chip's logic
Next, go to `sevseg-controller.chip.c`. This file implements the chip logic. The two important parts are:
1. The `chip_state_t` struct - use it to store all the state information of your chip, together with all the objects
   that you create for your chips: IO pins, timers, etc.
2. The `chip_init` function - Wokwi will call this function for every instance (copy) of your chip. The function should
   allocate memory for a new `chip_state_t` struct, initialize all the IO pins, the chip's state, and create any
   relevant objects (we'll see an example in a minute).

The default implementation does not include any state or initialization - it only prints a message saying "Hello from
custom chip!". You will see this message when you start the simulation - it'll appear in a new "Chips Console" tab
below the diagram.

We'll modify `chip_init` to perform the following actions:
1. Initialize all the `SEG_x` pins as outputs
2. Listen for UART data on the `RX` pin, and call a function that will update the `SEG_x` according to the character we
   received.

### Initializing the 7-segment outputs
Start by adding a `segment_pins` array to the `chip_state_t` struct. This array will store a reference to the `SEG_x`
output pins, so we'll need to allocate 7 items:
```C
typedef struct {
    pin_t segment_pins[7];
} chip_state_t;
```

Next, add the following code to `chip_init` (after the line that defines `chip`):
```C
chip->segment_pins[0] = pin_init("SEG_A", OUTPUT_HIGH);
chip->segment_pins[0] = pin_init("SEG_B", OUTPUT_HIGH);
chip->segment_pins[0] = pin_init("SEG_C", OUTPUT_HIGH);
chip->segment_pins[0] = pin_init("SEG_D", OUTPUT_HIGH);
chip->segment_pins[0] = pin_init("SEG_E", OUTPUT_HIGH);
chip->segment_pins[0] = pin_init("SEG_F", OUTPUT_HIGH);
chip->segment_pins[0] = pin_init("SEG_G", OUTPUT_HIGH);
```

The code initializes each of the segment pins as an output, and sets the initial value to digital high. The 7-segment
display has a common annode, so setting a segment pin high will turn that segment off. You can learn more about the
`pin_init` function in the [GPIO API reference](../chips-api/gpio.md).

### Listening to UART data
Add the following code to `chip_init`, right after the code that initializes the segment pins:
```C
const uart_config_t uart_config = {
    .tx = NO_PIN,
    .rx = pin_init("RX", INPUT),
    .buad_rate = 115200,
    .rx_data = on_uart_rx_data,
    .user_data = chip,
};
uart_init(&uart_config);
```

The code configures the `RX` pin as an input (in the third line), and sets up a `uart_config_t` structure. This
structure configures the baud rate, as well as a function that will get called whenever there is new data,
`on_uart_rx_data`.

Also note how we set `.user_data` to `chip` - this is important, as this value will be passed as a parameter to the
`on_uart_rx_data` function, providing it access to our chip's state.

In our case, we are only interested in receiving data, so we set `.tx` to the special `NO_PIN` value.

:::tip

To learn more about using UART in Wokwi, check out the [UART API reference](../chips-api/uart.md).

:::

### From UART to 7-segment
For the final part of the show, we'll implement the `on_uart_rx_data` callback. Paste the following code above the
definition of `chip_init`:
```C
const uint8_t font[] = {
  ['0'] = 0b11000000,
  ['1'] = 0b11111001,
  ['2'] = 0b10100100,
  ['3'] = 0b10110000,
  ['4'] = 0b10011001,
  ['5'] = 0b10010010,
  ['6'] = 0b10000010,
  ['7'] = 0b11111000,
  ['8'] = 0b10000000,
  ['9'] = 0b10010000,
  ['A'] = 0b10001000,
  ['B'] = 0b10000011,
  ['C'] = 0b11000110,
  ['D'] = 0b10100001,
  ['E'] = 0b10000110,
  ['F'] = 0b10001110,
};

static void on_uart_rx_data(void *user_data, uint8_t byte) {
  chip_state_t *chip = user_data;
  uint8_t font_char = font[byte];
  if (font_char) {
    for (int bit = 0; bit < 7; bit++) {
      uint8_t bit_value = font_char & (1 << bit);
      pin_write(chip->segment_pins[bit], bit_value ? HIGH : LOW);
    }
  }
}
```

This part simply defines the "font" - it maps between a character that we receive from UART and the corresponding
segments that need to be turned on. Our 7-segment display has a common anode, so 0 will ligh a segment, and 1 will turn
it off.

The `on_uart_rx_data` is where the actual magic happens. We use the `font` array to lookup the `byte` we received over
UART. If we find a match (when `font_char` is not 0), we iterate over the bits of the `font_char`, and update each
segment to its corresponding bit in `font_char`.

That's it - we created a simple 7-segment controller chip for Wokwi!

## Testing the chip
You can test the chip by adding a 7-segment display to the diagram, and writing it to the chip. Don't forget to write
the common pin of the 7-segment display to the 3.3V or 5V pin of the ESP32-C3 board!

Next, wire the `RX` pin of the chip to the `TX` pin of the ESP32-C3 board. You can also wire the GND/VCC pins of the
chip for good measures, even though the chip will be functional even without these pins.

Finally, pase the following code into `sketch.ino`:
```C
void setup() {
  Serial.begin(115200);
}

int i = 0;
void loop() {
  Serial.println(i, HEX);
  i++;
  if (i > 0xf) {
    i = 0;
  }
  delay(500);
}
```

It's a simple program that outputs all the hexadecimal values between 0 and F to the ESP32-C3's serial port - all the
characters that are included in our custom chip's font. If you prefer plain C code, you can change the first line in
`loop` to use `printf()` instead.
```C
printf("%X\n", i);
```

When you start the simulation, you should see the 7-segment display counting from 0 to F repeatedly. Hooray!

Doesn't work? No worries, here's the link to the final result, so you can compare it with yours:
[wokwi.com/projects/371252876830114817](https://wokwi.com/projects/371252876830114817).

## Under the hood
How do custom chips work? What happens with the C code you write? Behind the scenes, Wokwi takes this code and compiles
it into a Web Assembly module using LLVM (if you are curious, here's the
[Docker container](https://github.com/wokwi/wokwi-builders/blob/main/clang-wasm/Dockerfile) that does all the magic).

When you run the simulation, Wokwi creates an instance of the Web Assembly module, and calls `chip_init` once for
every instance of the chip in your diagram.

Using Web Assembly means you can write your code in a variety of languages. Currently, only C is officially supported,
there are some examples of how to write custom chips with Rust, AssemblyScript and even Zig.

There's even a hack where we use Custom Chips to simulate Verilog: we use Yosys CXXRTL to convert your Verilog code
into C++, and then
[use emscripten to compile](https://github.com/wokwi/wokwi-builders/blob/main/verilog-cxxrtl/project/compile.sh)
the result along with [some glue code](https://github.com/wokwi/wokwi-builders/blob/main/verilog-cxxrtl/project/main.cpp)
into Web Assembly. Scary cool?

## Next steps
If you want to dive deeper into the Custom Chips API, here are some ideas how to build on the chip we created in this
tutorial:

- **Fix the bug!** <br/>
  Unfortunately, our code has a bug - some values will cause it to display garbage on the 7-segment display (try sending
  it a 'b'). Some bound checking can help!

- **Add support for common cathode 7-segment displays** <br/>
  You can use an additional input pin to select between common anode/cathode, or use the [Attributes API](../chips-api/attributes.md)
  to allow the user to define the type of display by editing the chip attributes in `diagram.json`.

- **Add another communication protocol** <br/>
  You can turn our 7-segment display into an [I2C](../chips-api/i2c.md) or an [SPI](../chips-api/spi.md) device.

- **Support multiple digits** <br/>
  Control a two or four digital 7-segment display! Use the [Time API](../chips-api/time.md) to create a timer that will quickly
  alternate between the digits.

- **Add analog input** <br/>
  Use the [Analog API](../chips-api/analog.md) to read and display an analog input value. This makes the 7-segment controller chips
  useful even without a microcontroller - you can connect it directly to a potentiometer or an analog sensor, and
  display the reading directly.

- **Share your chip on GitHub** <br/>
  By sharing your chip's code on GitHub, you can make it easy for other users to include it in their project. You can
  use the [inverter-chip repo](https://github.com/wokwi/inverter-chip) as a starting point - it has a
  [GitHub action](https://github.com/wokwi/inverter-chip/blob/main/.github/workflows/build.yaml) that automatically
  compiles the chips and creates a release whenever you push a tag.

  Here's an [example for a Wokwi project](https://wokwi.com/projects/350946636543820370) that uses this chip. Note the
  "dependencies" section in `diagram.json` - it tells Wokwi where to look for the chip implementation on GitHub.