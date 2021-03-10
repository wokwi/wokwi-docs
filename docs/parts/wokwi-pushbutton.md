---
title: wokwi-pushbutton Reference
sidebar_label: wokwi-pushbutton
---

12mm Tactile Switch Button (momentary push button).

<wokwi-pushbutton />

## Pin names

| Name      | Description                   |
| --------- | ----------------------------- |
| 1.l / 1.r | First contact (left / right)  |
| 2.l / 2.r | Second contact (left / right) |

The push button has two set of pins (contacts), 1 and 2.
When the push button is pressed, it connects these two contacts, thus closing an electrical circuit.

Each contact has a pin of the left side of the push button, and another pin on the right side of the push button.
So pin `1.l` is the left pin for first contact, and `1.r` is the right pin for the first contact. Since both belong
to the same contact, they are always connected, even when the button is not pressed.

When working with Arduino, you'd usually connect one contact (e.g. `1.r` or `1.l`) to a digital pin and configure
that pin as `INPUT_PULLUP`, and the other contact (e.g. `2.r` or `2.l`) to the ground. The digital pin will read
`LOW` when you press the button, and `HIGH` when the button is not pressed.

## Attributes

| Name  | Description                        | Default value |
| ----- | ---------------------------------- | ------------- |
| color | The color of the push button       | "red"         |
| label | Text that appears below the button | ""            |
| key   | Keyboard shortcut for button       |               |

### Defining a keyboard shortcut

You can use the "key" attribute to define a keyboard key that will control the button.
The key is only active when the simulation is running and the diagram has focus.

For example, suppose you defined "key" to "Q". Then, when you run the simulation,
pressing _Q_ in the keyboard will press the push button. The button will be kept
in pressed state as long as you keep pressing _Q_, and once you release the key,
the button will also be released.

You can define any alphanumerical keyboard shortcut (so English letters and numbers), and for letters,
the value of "key" is case insensitive (so "q" and "Q" mean the same).

You can also target some special keys, such as "Escape", "ArrowUp", "F8", " " (space), or "PageDown", but some keys
could be blocked by the browser (e.g. "F5" that refreshes the page).
The full list of key names can be found [here](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values).
Note the the special key names are case sensitive - so "Escape" will work, "escape" won't.

### Examples

| Result                                | Attrs                     |
| ------------------------------------- | ------------------------- |
| <wokwi-pushbutton color="green" />    | `{ "color": "green" }`    |
| <wokwi-pushbutton color="#FFFF00" />  | `{ "color": "#FFFF00" }`  |
| <wokwi-pushbutton label="Push me!" /> | `{ "label": "Push me!" }` |

## Simulator examples

- [Simon Game](https://wokwi.com/arduino/libraries/demo/simon-game) - A memory game with 4 push buttons
- [Diatonic Piano](https://wokwi.com/arduino/projects/291958456169005577) - A 8-note piano, use keys 1-8 to press the buttons and play the notes.
