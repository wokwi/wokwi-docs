---
title: Heap Monitoring for ESP-IDF
sidebar_label: Heap Monitoring
description: Catch memory leaks in ESP-IDF firmware on every commit. The Wokwi CLI follows the free heap of the simulated ESP32 and fails the run when it drops below a limit, with no logging code in your firmware.
keywords: [heap, memory leak, ESP-IDF, ESP32, soak test, free heap, malloc, esp_get_free_heap_size, Wokwi CLI, CI, GitHub Actions]
---

A slow memory leak is one of the hardest firmware bugs to catch before it ships. The device passes every test, then runs out of memory after a day in the field. Wokwi CI catches these leaks on every commit: the [Wokwi CLI](./cli-usage) follows the free heap of your ESP-IDF firmware while the simulation runs, and fails the run as soon as the heap drops below a limit you set.

:::info
Requires Wokwi CLI **0.29.0** or newer, and firmware built with ESP-IDF 4.4 or newer.
:::

## How it works

The simulator reads ESP-IDF's own heap counters straight from the memory of the simulated chip, at fixed points in simulated time. This means:

- **No changes to your firmware.** There is no logging task to add and no output to parse, so you test the same firmware you ship.
- **No effect on the firmware.** Reading the heap does not run any code on the simulated chip, and the simulation never pauses.
- **The same numbers your firmware sees.** The free heap is the value `esp_get_free_heap_size()` returns: the sum of every heap that `malloc()` can use, including PSRAM when it is added to the heap. The minimum is the value of `esp_get_minimum_free_heap_size()`.

Together with [automation scenarios](./automation-scenarios), this turns hours of use into a short CI run. A scenario can press a button or send serial commands hundreds of times in a few seconds of simulated time, and the heap check tells you whether any of them leaked.

## Usage

The CLI needs the firmware's ELF file to find the heap, so set `elf` in your [wokwi.toml](../vscode/project-config):

```toml
[wokwi]
version = 1
firmware = 'build/flasher_args.json'
elf = 'build/my-app.elf'
```

Then pass any of the heap options to turn on monitoring:

```bash
wokwi-cli . --scenario leak.test.yaml --heap-min-free 350000 --heap-csv heap.csv
```

- `--heap-interval <ms>` - Sample the heap every `<ms>` milliseconds of simulated time (default: 1000)
- `--heap-min-free <bytes>` - Fail the run when the free heap drops below `<bytes>`
- `--heap-csv <path>` - Write every sample to a CSV file, with the columns `part,time_s,free,min_free`

## Output

The CLI prints a sample whenever the free heap changes, and a summary when the run ends:

```
[heap esp] 0.500s free=388008 min=382776
[heap esp] 1.000s free=384924 min=379692
...
[heap esp] 8.000s free=348944 min=347916

Error: free heap 348944 dropped below 350000 bytes at 8.000s
Heap: 16 samples, free 388008 -> 348944, lowest 347916, 5209 bytes/s lost
TEST FAILED.
```

The summary shows the free heap at the first and the last sample, the lowest free heap the firmware reached, and how fast the heap shrank. When the free heap drops below `--heap-min-free`, the run fails with exit code 1.

The CSV file is written as the samples arrive, so it is complete even when the run fails. Upload it as a CI artifact to chart the heap over time.

### Choosing a limit

Run the test once without `--heap-min-free` and look at the free heap after the firmware has finished starting up. Set the limit below that value, leaving room for the allocations your firmware makes and releases during normal operation. For example, if the heap settles at 380,000 bytes, `--heap-min-free 350000` fails the run once about 30 KB has leaked.

## GitHub Actions

The [Wokwi CI action](./github-actions) takes the heap options as the `heap_interval`, `heap_min_free` and `heap_csv` inputs. The CSV path is relative to the repository root:

```yaml
- name: Leak test
  uses: wokwi/wokwi-ci-action@v1
  with:
    token: ${{ secrets.WOKWI_CLI_TOKEN }}
    scenario: scenarios/leak.test.yaml
    timeout: 60000
    heap_interval: 500
    heap_min_free: 350000
    heap_csv: heap.csv

- name: Upload heap samples
  if: always()
  uses: actions/upload-artifact@v7
  with:
    name: heap
    path: heap.csv
```

## Example project

The [ESP32-S3 heap leak demo](https://github.com/wokwi/esp32-heap-leak-demo) is a complete project you can copy: firmware with a leak in its request handler, a scenario that sends 200 requests, and a GitHub Actions workflow that fails once the leak has eaten 38 KB of heap. Its README shows where the leak is and how to fix it.

## Notes

- Heap monitoring works with firmware that uses the ESP-IDF heap allocator. For other firmware, the CLI reports that it took no samples.
- The first sample arrives once ESP-IDF has set up its heap, early in boot. While the chip restarts, the CLI skips the samples it cannot read.
