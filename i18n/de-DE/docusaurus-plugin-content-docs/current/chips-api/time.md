---
title: Time simulation API
sidebar_label: Time API
---

# Zeitsimulation

### uint64_t get_sim_nanos()

Gibt die Zeit vom aktuellen Simulator (virtuell) in Nanosekunden zurück.

:::tip
Du kannst die aktuelle Zeit in Millisekunden durch das Aufrufen von `get_sim_nanos() / 1000000` bekommen.
:::

### timer_t timer_init(timer_config_t \*config)

Initialisiert einen neuen Timer. Gibt die ID vom Timer zurück. Rufe `timer_start()` auf, um den Timer zu starten und definiere ein `chip_timer_event()` Callback, um auf Timer-Events zu reagieren.

Die Struct `timer_config_t` enthält folgende Felder:

| Feld        | Typ      | Beschreibung                                                   |
| ----------- | -------- | -------------------------------------------------------------- |
| `callback`  | callback | Wird aufgerufen, wenn der Timer ausgelöst wird                 |
| `user_data` | `void *` | Daten, die in das erste Argument vom Callback übergeben werden |

Die Signatur der Callbackfunktion sieht folgendermaßen aus:

```cpp
void chip_timer_callback(void *user_data) {
  /* Wird aufgerufen, wenn der Timer ausgelöst wird */
}
```

:::warning

Info: `timer_init()` kann nur von `chip_init()` aufgerufen werden. Bitte nicht zu einem späteren Zeitpunkt aufrufen.

:::

### void timer_start(uint32_t timer_id, uint32_t micros, bool repeat)

Startet den durch `timer_id` angegebenen Timer. Das `micros` Argument gibt an, wie lange gewartet werden soll, bis der Timer `chip_timer_event()` aufruft. Wenn `repeat` auf `false` gesetzt wurde, wird der Timer nur einmal aufgerufen (one-shot Timer). Wenn repeat auf `true` ist, wird der Timer alle `micros` Mikrosekunden aufgerufen, bis `timer_stop()` aufgerufen wird oder der Timer mit `timer_start` neu konfiguriert wird.

### void timer_start_ns(uint32_t timer_id, uint64_t nanos, bool repeat)

Ähnlich zu `timer_start`, aber gibt die Zeit in Nanosekunden statt in Mikrosekunden ab. Nutze sofern möglich `timer_start()`, um die Performance zu verbessern.

### void timer_stop(uint32_t timer_id)

Stoppt den Timer. Wenn der Timer noch nicht ausgelöst wurde, wird er erst wieder ausgelöst, wenn `timer_start()` nochmal aufgerufen wird.
