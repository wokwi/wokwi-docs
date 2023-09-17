---
title: Benutzerdefiniertes Chip JSON Format
sidebar_label: Chip Definition (JSON)
---

# Benutzerdefinierte Chip Definition (JSON)

Die Pinbelegung und die Eigenschaften der benutzerdefinierten Chips werden in einer Chip-Definitions-JSON-Datei definiert. Der Dateiname sollte `<chipname>.chip.json` sein. Beispiel: Wenn dein Chip `i2c-sensor` heißt, sollte die Datei `ic2-sensor.chip.json` heißen-

Die JSON Datei sollte ein einzelnes Objekt mit folgenden Eigenschaften enthalten:

| Eigenschaft| Typ              | Beschreibung                                                            |
| ---------- | ---------------- | ----------------------------------------------------------------------- |
| `name`     | string           | Der Name des Chips (wird im Editor angezeigt)                           |
| `author`   | string           | Der Name vom Autor des Chips                                            |
| `pins`     | array of strings | Liste mit den Pins des Chips                                            |
| `controls` | array of objects | Liste mit den Steuerelementen des Chips (optional)                      |
| `display`  | object           | Konfiguration vom Display (optional)                                    |

## Pins

Das `pins` Array sollte die Namen von allen Pins deines Chips, beginnend mit Pin 1, enthalten. Wenn du Pins auslassen willst (z.B. um nur Pins auf der linken Seite zu haben), nutze einen leeren String (`""`) als Name, um einen leeren Pin zu definieren.

Beispiel:

```json
  "pins": ["VCC", "GND", "RST", "", "SCL", "SDA"],
```

Das obige Beispiel definiert einen Chip mit 5 Pins, die wie folgt angeordnet sind:

```
       ___
 VCC -|⚬  |- SDA
 GND -|   |- SCL
 RST -|___|-
```

## Steuerung

Steuerelemente ermöglichen dem Nutzer die Interaktion mit dem Pin während der Simulation. Ein Temeratursensor kann z.B. ein Steuerelement haben, mit dem der Nutzer die Temperatur einstellen kann. 

Die Eigenschaft `controls` sollte ein Array von Steuerelementen (Objekte) enthalten. Jedes Steuerelement sollte die folgenden Eigenschaften haben.

| Eigenschaft | Typ   | Beschreibung                                                                               | Beispiel            |
| -------- | ------ | -------------------------------------------------------------------------------------------- | ------------------- |
| `id`     | string | ID des Steuerelements, bitte `camelCase` nutzen (z.B.. `relativeHumidity`)                   | "relativeHumidity"  |
| `label`  | string | Der Anzeigename des Steuerelements                                                           | "Relative Feuchtigkeit" |
| `type`   | string | Art des Elements. Momentan gibt es nur `"range"` (Schiebregler).                             | "range"             |
| `min`    | number | Der Minimale Wert des Steuerelements                                                         | 0                   |
| `max`    | number | Der Maximale Wert des Steuerelements                                                         | 100                 |
| `step`   | number | Die Schrittweite für den Schiebregler.                                                       | 1                   |

Beispiel:

```json
  "controls": [
    {
      "id": "relativeHumidity",
      "label": "Releative Feuchtigkeit",
      "type": "range",
      "min": 0,
      "max": 100,
      "step": 1
    }
  ],
```

Um den Wert des Steuerelements zu lesen, nutze bitte die [Attribut API](../chips-api/attributes).

## Display

Die Eigenschaft `display` lässt dich einen Bildschirm zum Chip hinzufügen. Nutze die Eigengschaft, um ein Benutzerdefiniertes LCD, OLED, or e-paper Display hinzuzufügen, oder um den Status deines Chips (z.B. ein Diagramm mit der Temperatur über die Zeit oder die Position eines Motors) anzuzeigen.

Die Eigenschaft `display` sollte ein Objekt mit folgenden Eigenschaften enthalten.

| Eigenschaft | Typ | Beschreibung                      | Beispiel |
| -------- | ------ | ------------------------------------ | ------- |
| `width`  | number | Die Weite des Displays in Pixeln  | 128     |
| `height` | number | Die Höhe des Displays in Pixeln | 64      |

Beispiel:

```json
  "display": {
    "width": 128,
    "height": 64
  },
```

Um auf das Display zu schreiben, benötigst du die [Framebuffer API](../chips-api/framebuffer).
