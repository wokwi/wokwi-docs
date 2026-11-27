{
  "version": 1,
  "author": "Alarma Perimetral ESP32",
  "editor": "wokwi",
  "parts": [
    { "type": "wokwi-esp32-devkit-v1", "id": "esp", "top": 10, "left": 220, "attrs": {} },
    { "type": "wokwi-hc-sr04", "id": "ultra1", "top": -130, "left": -40, "attrs": {} },
    { "type": "wokwi-buzzer", "id": "bz1", "top": -110, "left": 140, "attrs": { "volume": "0.8" } },
    { "type": "wokwi-led", "id": "ledRed", "top": -120, "left": 260, "attrs": { "color": "red" } },
    { "type": "wokwi-led", "id": "ledGreen", "top": -120, "left": 320, "attrs": { "color": "green" } },
    { "type": "wokwi-resistor", "id": "rRed", "top": -50, "left": 265, "attrs": { "value": "220" } },
    { "type": "wokwi-resistor", "id": "rGreen", "top": -50, "left": 325, "attrs": { "value": "220" } },
    { "type": "wokwi-pushbutton", "id": "btn1", "top": 10, "left": 10, "attrs": { "color": "blue", "label": "ARM/SIL" } }
  ],
  "connections": [
    [ "esp:TX0", "$serialMonitor:RX", "", [] ],
    [ "esp:RX0", "$serialMonitor:TX", "", [] ],
    [ "esp:VIN", "ultra1:VCC", "red", [ "h-40", "v-130" ] ],
    [ "esp:GND.1", "ultra1:GND", "black", [ "h-60", "v-110" ] ],
    [ "esp:D5", "ultra1:TRIG", "blue", [ "h-30", "v-90" ] ],
    [ "esp:D18", "ultra1:ECHO", "purple", [ "h-20", "v-80" ] ],
    [ "esp:D26", "bz1:1", "yellow", [ "h-50", "v-60" ] ],
    [ "esp:GND.1", "bz1:2", "black", [ "h-60", "v-60" ] ],
    [ "esp:D25", "rRed:1", "red", [ "h20", "v-40" ] ],
    [ "rRed:2", "ledRed:A", "red", [] ],
    [ "ledRed:C", "esp:GND.2", "black", [ "v40", "h-20" ] ],
    [ "esp:D33", "rGreen:1", "green", [ "h40", "v-40" ] ],
    [ "rGreen:2", "ledGreen:A", "green", [] ],
    [ "ledGreen:C", "esp:GND.2", "black", [ "v40", "h-40" ] ],
    [ "esp:D14", "btn1:1.l", "cyan", [ "h-80", "v-10" ] ],
    [ "esp:GND.1", "btn1:2.l", "black", [ "h-80", "v10" ] ]
  ],
  "dependencies": {}
}
