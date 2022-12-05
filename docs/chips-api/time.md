---
title: Time simulation API
sidebar_label: Time API
---

# Time simulation

### uint64_t get_sim_nanos()

Returns the current simulator (virtual) time in nanoseconds.

### timer_t timer_init(timer_config_t \*config)

Initializes a new timer. Returns the identifier of the timer. Call `timer_start()` to start the timer, and define the `chip_timer_event()` callback to response to timer events.

The `timer_config_t` struct contains the following fields:

| Field       | Type      | Description                                                    |
| ----------- | --------- | -------------------------------------------------------------- |
| `callback`  | callback  | Called when the timer fires                                    |
| `user_data` | `void \*` | Data that will be passed in the first argument to the callback |

The signature for the callback function is as follows:

```cpp
void chip_timer_callback(void *user_data) {
  /* Called when the timer fires */
}
```

:::caution

Note: `timer_init()` can only be called from `chip_init()`. Do not call it at a later time.

:::

### void timer_start(uint32_t timer_id, uint32_t micros, bool repeat)

Schedules the timer given by `timer_id`. The `micros` argument determines how many microseconds will pass until the timer will call `chip_timer_event()`. If `repeat` is `false`, the timer event will be called once (one-shot timer). If repeat is `true`, the timer event will keep getting called every `micros` microseconds, until you call `timer_stop()` or reconfigure the timer with `timer_start`.

### void timer_start_ns(uint32_t timer_id, uint64_t nanos, bool repeat)

Similar to `timer_start`, but specifies the duration of the timer in nanoseconds instead of microseconds. Prefer `timer_start()` when possible, in order to improve performance.

### void timer_stop(uint32_t timer_id)

Stops the given timer. If the timer hasn't fired yet, it won't fire until you call `timer_start()` again.
