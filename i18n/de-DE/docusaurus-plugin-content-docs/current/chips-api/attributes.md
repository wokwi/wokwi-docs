---
title: Attribute
sidebar_label: Attribute
---

# Attribute

Attribute sin Parameter, die der Nutzer in der `diagram.json` einstellen kann. Du kannst auch einen [`controls` Abschnitt](./chip-json#controls) in der Datei `.chip.json` hinzufügen, um den Nutzer die Parameter während der Simulation ändern zu lassen. Die ist besonders für Sensoren nützlich (z.B. Temperatur, Feuchtigkeit, etc.).

### Namensgebung

Bitte beachte beim Benennen der Attribute folgende Richtlinien:

- Für Attributnamen wird `camelCase` genutzt.
- Es wird amerikanisches Englich verwendet (z.B. `color` und nicht `colour`)

### uint32_t attr_init(const char \*name, uint32_t default_value)

Definiert ein Interger Attribut mit dem angegebenen Namen. Der Standardwert (`default_value`) wird genutzt, solange der Nutzer keinen anderen Wert in der `diagram.json` einstellt. (In der `attrs` Sektion vom custom Chip `part`).

Die Funktion gibt ein Handle auf das Attribut zurück, auf das mit `attr_read()` zugegriffen werden kann.

:::caution

Info: `attr_init` kann nur von `chip_init()` aufgerufen werden. Bitte nicht zu einem späteren Zeitpunkt aufrufen.

:::

### uint32_t attr_init_float(const char \*name, float default_value)

Definiert einen Float mit dem angegebenen Namen. Siehe `attr_init()` für mehr Informationen.

:::caution

Info: `attr_init_float` kann nur von `chip_init()` aufgerufen werden. Bitte nicht zu einem späteren Zeitpunkt aufrufen.

:::

### uint32_t attr_read(uint32_t attr)

Gibt den aktuellen Wert vom Attribut zurück. `attr` sollte ein gültiges Attribut-Handle sein, das zuvor von `attr_init()` zurückgegeben wurde.

### float attr_read_float(uint32_t attr)

Gibt den aktuellen Wert vom Attribut zurück. `attr` sollte ein gültiges Attribut-Handle sein, das zuvor von `attr_init_float()` zurückgegeben wurde.
