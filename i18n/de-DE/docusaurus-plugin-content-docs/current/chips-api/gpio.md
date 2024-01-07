---
title: GPIO pins API
sidebar_label: GPIO API
---

# GPIO pins API

Der Chip interagiert durch digitale Pins mit dem Simulator. Die Pins werden in der `{chipname}.chip.json` definiert. Das folgende Beispiel definiert einen Chip mit 4 Pins (`IN`, `OUT`, `VCC`, `GND`):

```json
{
  "name": "Beispielchip",
  "author": "Till",
  "pins": ["OUT", "IN", "VCC", "GND"]
}
```

Die GPIO Pins API ermöglicht dem Implementierungscode, mit den Pins zu interagieren.

### pin_t pin_init(const char \*name, uint32_t mode)

Initialisiert den angegebenen Pin und gibt den Pin Identifier, welcher für andere Methoden benötigt wird, zurück. Der Parameter `mode` setzt den Anfangsstatus des Pins. Gültige Werte für `mode` sind:

- `INPUT` - konfiguriert den Pin als digitalen Eingang
- `INPUT_PULLUP` - konfiguriert den Pin als digitalen Eingang und fügt einen Pullup Widerstand hinzu.
- `INPUT_PULLDOWN` - konfiguriert den Pin als digitalen Eingang und fügt einen Pulldown Widerstand hinzu.
- `OUTPUT` - konfigueriert den Pin als digitalen Ausgang
- `OUTPUT_LOW` - konfiguriert den Pin als digitalen Ausgang und setzt den Wert auf `LOW`
- `OUTPUT_HIGH` - konfiguriert den Pin als digitalen Ausgang und setzt den Wert auf `HIGH`
- `ANALOG` - konfiguriert den Pin als analogen Pin. Mehr Details gibt es unter "[Analoge API](analog)".

:::warning

Info: `pin_init()` kann nur von `chip_init()` aufgerufen werden. Rufe die Methode nicht zu einem späteren Zeitpunkt auf. Du kannst jederzeit `pin_mode()` nutzen, um den Modus zu ändern.

:::

### void pin_mode(pin_t pin, uint32_t mode)

Konfiguriert den angegebenen `pin` als digitalen Eingang oder Ausgang. Gültige Werte für `mode` sind dieselben Werte wie bei `pin_init()`: `INPUT`, `INPUT_PULLUP`, `INPUT_PULLDOWN`, `OUTPUT`, `OUTPUT_LOW`, `OUTPUT_HIGH`, und `ANALOG`.

### void pin_write(pin_t pin, uint32_t value)

Setzt den Ausgabewert für einen Pin. `value` kann `HIGH` oder `LOW` sein.

### uint32_t pin_read(pin_t pin)

Liest den Wert vom Pin aus und gibt entweder `HIGH` oder `LOW` zurück.

### bool pin_watch(pin_t pin, pin_watch_config_t \*config)

Überwacht Änderungen vom Wert des Pins. Die Struktur `config` enthält folgende Felder:

| Feld         | Typ        | Beschreibung                                                         |
| ------------ | ---------- | -------------------------------------------------------------------- |
| `edge`       | `uint32_t` | Die Änderungen, die überwacht werden sollen (`RISING`, `FALLING` oder `BOTH`) |
| `pin_change` | callback   | Wird bei Änderungen aufgerufen (siehe unten)                           |
| `user_data`  | `void *`   | Daten, die an das erste Argument von `pin_change` übergeben werden     |

Gültige Werte für `edge`:

- `BOTH` - Jede Änderung wird überwacht
- `FALLING` - Die Änderung von `HIGH` auf `LOW` wird überwacht
- `RISING` - Die Änderung von `LOW` auf `HIGH` wird überwacht

Du kannst nur einen `pin_watch` pro Pin haben. Die Funktion gibt bei richtiger Einrichtung `true` zurück. Wenn schon ein `pin_watch` für den Pin existiert, wird `false` zurückgegeben und kein neuer Listener erstellt.

Die Signatur des `pin_change` Callbacks sieht folgendermaßen aus:

```cpp
void chip_pin_change(void *user_data, pin_t pin, uint32_t value) {
  // Wert wird entweder HIGH oder LOW sein
}
```

Beispiel:

```cpp
const pin_watch_config_t watch_config = {
  .edge = FALLING,
  .pin_change = chip_pin_change,
  .user_data = chip,
};
pin_watch(pin, &watch_config);
```

### void pin_watch_stop(pin_t pin)

Hört auf, Änderungen auf dem angegebenen Pin zu überwachen.