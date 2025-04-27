---
title: board-ssd1306 Reference
sidebar_label: board-ssd1306
---

import machine
import ssd1306
import time

# Set up I2C communication (SDA = GPIO21, SCL = GPIO22)
i2c = machine.I2C(scl=machine.Pin(22), sda=machine.Pin(21), freq=20000)

# Initialize the OLED display (128x64 resolution)
oled = ssd1306.SSD1306_I2C(128, 64, i2c)

# Draw Happy Face
def draw_happy_face():
    oled.fill(0)  # Clear the screen
    oled.fill_circle(64, 32, 20, 1)  # Face
    oled.fill_circle(54, 26, 3, 0)  # Left Eye
    oled.fill_circle(74, 26, 3, 0)  # Right Eye
    oled.arc(64, 38, 10, 0, 180, 1)  # Smile
    oled.show()


You can choose between several SSD1306 Arduino libraries:

- [Adafruit SSD1306](https://wokwi.com/projects/344892392214626898)
- [ssd1306](https://wokwi.com/projects/344894074741850707)
- [lcdgfx](https://github.com/lexus2k/lcdgfx)
- [U8glib](https://github.com/olikraus/u8glib)
- [U8g2](https://github.com/olikraus/u8g2) (also U8x8)
- [SSD1306Ascii](https://github.com/greiman/SSD1306Ascii)
- [Tiny4kOLED](https://www.arduino.cc/reference/en/libraries/tiny4koled/) - for ATtiny85 users

All the above libraries are available on Wokwi.

## Simulator examples

- [SSD1306 Snake Game](https://wokwi.com/projects/296135008348799496) (using Adafruit SSD1306)
- [ATtiny85 Digital Temperature + Humidity on SSD1306](https://wokwi.com/projects/292900020514980360)
- [U8glib Progress Bar](https://wokwi.com/projects/300867986768527882)
- [SSD1306Ascii Fonts](https://wokwi.com/projects/291197274604700168)
- [Adafruit SSD1306 Showcase](https://wokwi.com/projects/344892392214626898)
- [U8g2 Menu](https://wokwi.com/projects/291572875238834696)
