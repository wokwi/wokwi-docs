---
title: Simulating ESP-IDF Projects
sidebar_label: ESP-IDF Projects
description: Set up Wokwi for VS Code or the Wokwi CLI for an ESP-IDF (idf.py) project, loading the bootloader, partition table and application from build/flasher_args.json.
keywords: [ESP-IDF, idf.py, flasher_args.json, ESP32, wokwi.toml, VS Code, Wokwi CLI, idf-wokwi]
---

This page covers projects built with `idf.py` (including the ESP-IDF extension for VS Code). If you use ESP-IDF through PlatformIO (`framework = espidf`), see [PlatformIO projects](./platformio#esp-idf-framework-under-platformio) instead.

## Build the project

```bash
idf.py set-target esp32s3   # pick the chip you want to simulate
idf.py build
```

The build directory contains `flasher_args.json`, which lists every image that `idf.py flash` writes to the chip: bootloader, partition table, application, and any extra images (OTA data, filesystems). Wokwi loads the same images, so the simulated flash matches the real board.

## Create wokwi.toml and diagram.json

The easiest way is to run the [Wokwi CLI](../wokwi-ci/cli-installation) in the project directory. It detects the ESP-IDF build and creates both files, with a board that matches your `idf.py set-target`:

```bash
wokwi-cli .
```

With ESP-IDF 6.0 or newer, you can also install the [`idf-wokwi` extension](../wokwi-ci/idf-wokwi-usage) and run `idf.py wokwi`, which builds and simulates in one step.

To create the files by hand, add `wokwi.toml` in the project root (next to `CMakeLists.txt`). Set `firmware` to `build/flasher_args.json` and `elf` to the application ELF, named after `project(...)` in `CMakeLists.txt`:

```toml
[wokwi]
version = 1
firmware = 'build/flasher_args.json'
elf = 'build/hello_world.elf'
```

Then create `diagram.json` with a board for the target chip, for example by copying the diagram from https://wokwi.com/projects/new/esp32-s3. The board must match the `idf.py set-target` chip, otherwise the firmware will not boot.

Press **F1** and select "**Wokwi: Start Simulator**". Whenever you run `idf.py build` again, Wokwi reloads the new firmware.

## What Wokwi reads from flasher_args.json

- **Images and offsets** - every entry in `flash_files` is loaded at its offset. Paths are relative to the directory of `flasher_args.json`.
- **Flash size** - `flash_settings.flash_size` (`CONFIG_ESPTOOLPY_FLASHSIZE` in `sdkconfig`) sets the size of the simulated flash, so you don't need the `flashSize` attribute in `diagram.json`.
- **Partition table** - comes from `partition_table/partition-table.bin`, so custom partition tables and filesystems (SPIFFS, LittleFS, FATFS) work as on hardware.

PSRAM is not described in `flasher_args.json`. For octal PSRAM (`CONFIG_SPIRAM_MODE_OCT` on the ESP32-S3), add `"psramType": "octal"` to the board's `attrs` in `diagram.json`. See [Flash and memory size](../guides/esp32#flash-and-memory-size).

If you build with `idf.py -B <dir>`, point `firmware` and `elf` at that directory instead of `build/`. The Wokwi CLI only auto-detects the default `build/` directory.

## Debugging

Add `gdbServerPort = 3333` to `wokwi.toml` and follow the [debugging guide](./debugging#esp-idf-projects) to attach the VS Code debugger, or [attach GDB from the command line](../wokwi-ci/cli-usage#debugging-with-gdb).

## Troubleshooting

**`Could not read file: bootloader/bootloader.bin`** (or `partition_table/partition-table.bin`, `<project>.bin`)

The images listed in `flasher_args.json` don't exist: the project hasn't been built, was built into a different directory, or `idf.py fullclean` removed them. Run `idf.py build` and start the simulation again. If this is a PlatformIO project with `framework = espidf`, see [PlatformIO projects](./platformio#esp-idf-framework-under-platformio).

**`The IDF project is targeting esp32s3, but the diagram is for esp32`** (Wokwi CLI)

The board in `diagram.json` doesn't match `idf.py set-target`. Replace the board, or pass `--diagram-file` to use a different diagram.

**The application doesn't boot, or prints `invalid header`**

Check that `firmware` points at `flasher_args.json` and not at the application `.bin`. An application-only image runs on Wokwi's default bootloader and partition table, which may not match your `sdkconfig`.
