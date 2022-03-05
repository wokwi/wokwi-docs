---
title: wokwi-ir-remote Reference
sidebar_label: wokwi-ir-remote
---

38KHz infrared remote with 20 function keys. Use together with the [IR Receiver module](wokwi-ir-receiver).

<wokwi-ir-remote />

## Function keys

The keys send infrared messages encoded using the [NEC frame format](https://exploreembedded.com/wiki/NEC_IR_Remote_Control_Interface_with_8051#NEC_Protocol). Each key sends a different command value (see the table below), and the address field is always 0.

Each key has a keyboard shortcut that actives the key while the remote is in focus.

The following table lists the NEC command, NEC encoded value and keyboard shortcut
for each of the keys:

| Key      | Command | NEC encoded | Keyboard Shortcut |
| -------- | ------- | ----------- | ----------------- |
| Power    | 162     | 0xFFA25D    | O                 |
| Menu     | 226     | 0xFFE21D    | M                 |
| Test     | 34      | 0xFF22DD    | T                 |
| Plus     | 2       | 0xFF02FD    | +                 |
| Back     | 194     | 0xFFC23D    | B                 |
| Previous | 224     | 0xFFE01F    | Left arrow key    |
| Play     | 168     | 0xFFA857    | P                 |
| Next     | 144     | 0xFF906F    | Right arrow key   |
| 0        | 104     | 0xFF6897    | 0                 |
| Minus    | 152     | 0xFF9867    | - (minus)         |
| C        | 176     | 0xFFB04F    | C                 |
| 1        | 48      | 0xFF30CF    | 1                 |
| 2        | 24      | 0xFF18E7    | 2                 |
| 3        | 122     | 0xFF7A85    | 3                 |
| 4        | 16      | 0xFF10EF    | 4                 |
| 5        | 56      | 0xFF38C7    | 5                 |
| 6        | 90      | 0xFF5AA5    | 6                 |
| 7        | 66      | 0xFF42BD    | 7                 |
| 8        | 74      | 0xFF4AB5    | 8                 |
| 9        | 82      | 0xFF52AD    | 9                 |

## Simulator examples

- [IRRemote + LCD Display](https://wokwi.com/projects/298934082074575369)
