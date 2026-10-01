---
title: Simulating PlatformIO Projects
sidebar_label: PlatformIO Projects
description: Set up Wokwi for VS Code or the Wokwi CLI for a PlatformIO project, including ESP32 bootloader, partition table, flash size, LittleFS/SPIFFS images, and the ESP-IDF framework.
keywords:
  [
    PlatformIO,
    platformio.ini,
    ESP32,
    wokwi.toml,
    VS Code,
    Wokwi CLI,
    LittleFS,
    SPIFFS,
    partition table,
    flash size,
    merge_bin,
  ]
---

Wokwi for VS Code and the [Wokwi CLI](../wokwi-ci/getting-started) simulate the firmware that PlatformIO builds. This page shows how to point Wokwi at a PlatformIO project, and how to run an ESP32 project with the same bootloader, partition table and flash size as on the real board.

## Build the project

Build with the PlatformIO toolbar button, or from the terminal:

```bash
pio run
```

PlatformIO writes the build output to `.pio/build/<env>/`, where `<env>` is the environment name from `platformio.ini` (`[env:esp32dev]` → `.pio/build/esp32dev/`). Wokwi doesn't compile your code: build first, then start the simulation. Whenever you rebuild, Wokwi reloads the new firmware automatically.

## Create wokwi.toml

Create a file called `wokwi.toml` in the project root (next to `platformio.ini`):

```toml
[wokwi]
version = 1
firmware = '.pio/build/esp32dev/firmware.bin'
elf = '.pio/build/esp32dev/firmware.elf'
```

Replace `esp32dev` with your environment name. The firmware file depends on the board family:

| Board family                  | `firmware`                                                                            | `elf`                           |
| ----------------------------- | ------------------------------------------------------------------------------------- | ------------------------------- |
| ESP32 family                  | `.pio/build/<env>/firmware.bin` (see [below](#esp32-application-image-vs-full-image)) | `.pio/build/<env>/firmware.elf` |
| Arduino Uno / Mega / ATtiny85 | `.pio/build/<env>/firmware.hex`                                                       | `.pio/build/<env>/firmware.elf` |
| Raspberry Pi Pico             | `.pio/build/<env>/firmware.uf2`                                                       | `.pio/build/<env>/firmware.elf` |
| STM32                         | `.pio/build/<env>/firmware.bin`                                                       | `.pio/build/<env>/firmware.elf` |

If `platformio.ini` has several environments, one `wokwi.toml` describes one of them. To simulate another environment, change the paths.

:::tip
[`wokwi-cli init`](../wokwi-ci/cli-usage) detects PlatformIO projects and generates `wokwi.toml` and `diagram.json` for you.
:::

## Create diagram.json

`diagram.json` describes the circuit, starting with the board. Copy it from a new project on Wokwi.com (for example https://wokwi.com/projects/new/esp32 or https://wokwi.com/projects/new/arduino-uno), or run `wokwi-cli init`. Pick the Wokwi board that matches the PlatformIO `board`:

| PlatformIO `board`                               | Wokwi board part type      |
| ------------------------------------------------ | -------------------------- |
| `esp32dev`, `esp32doit-devkit-v1`, `nodemcu-32s` | `board-esp32-devkit-c-v4`  |
| `esp32-s2-saola-1`, `esp32-s2-devkitm-1`         | `board-esp32-s2-devkitm-1` |
| `esp32-s3-devkitc-1`                             | `board-esp32-s3-devkitc-1` |
| `esp32-c3-devkitm-1`                             | `board-esp32-c3-devkitm-1` |
| `esp32-c6-devkitc-1`                             | `board-esp32-c6-devkitc-1` |
| `esp32-h2-devkitm-1`                             | `board-esp32-h2-devkitm-1` |
| `uno`                                            | `wokwi-arduino-uno`        |
| `megaatmega2560`                                 | `wokwi-arduino-mega`       |
| `pico`                                           | `wokwi-pi-pico`            |

See [ESP32 boards](../guides/esp32#esp32-boards) for the complete list. Then press **F1** and select "**Wokwi: Start Simulator**".

## ESP32: application image vs. full image

A real ESP32 flash contains several images: the **bootloader**, the **partition table**, and the **application**. PlatformIO builds all of them, but `firmware.bin` is the **application only**. When Wokwi loads an application-only image, it fills in the rest itself: its own bootloader, a default partition table (one app partition, no `spiffs`/`littlefs` or OTA partitions), and 4 MB of flash unless `diagram.json` says otherwise.

This is fine for most sketches that use PlatformIO's default partition scheme. You need the **full image** when your project has any of these:

- a custom partition table (`board_build.partitions = ...`),
- a filesystem: LittleFS, SPIFFS or FATFS (`LittleFS.begin()` fails with `partition "spiffs" could not be found` on an application-only image),
- OTA updates,
- more than 4 MB of flash (`board_upload.flash_size = 16MB`), or an application larger than the default app partition,
- `framework = espidf` (see [below](#esp-idf-framework-under-platformio)).

### Building a full image automatically

Add an [extra script](https://docs.platformio.org/en/latest/scripting/actions.html) that runs after every build and merges the images that PlatformIO would flash into a single `firmware.merged.bin`. Save it as `merge_firmware.py` next to `platformio.ini`:

```python title="merge_firmware.py"
# PlatformIO extra script: merge bootloader + partition table + app into one image
# that Wokwi can load (.pio/build/<env>/firmware.merged.bin).
Import("env")
from os.path import join, isfile

# Optional: also include a filesystem image built with `pio run -t buildfs`.
# Set this to the offset of the spiffs/littlefs partition in your partition table.
FS_OFFSET = None  # e.g. "0x290000" for the default 4MB partition table

def merge_firmware(source, target, env):
    board = env.BoardConfig()
    build_dir = env.subst("$BUILD_DIR")
    merged = join(build_dir, "firmware.merged.bin")
    esptool = join(env.PioPlatform().get_package_dir("tool-esptoolpy"), "esptool.py")
    images = [(offset, env.subst(path)) for offset, path in env.get("FLASH_EXTRA_IMAGES", [])]
    images.append((env.subst("$ESP32_APP_OFFSET"), str(target[0])))
    fs_image = join(build_dir, env.subst("$ESP32_FS_IMAGE_NAME") + ".bin")
    if FS_OFFSET and isfile(fs_image):
        images.append((FS_OFFSET, fs_image))
    cmd = [
        '"$PYTHONEXE"', '"%s"' % esptool,
        "--chip", board.get("build.mcu", "esp32"),
        "merge_bin", "-o", '"%s"' % merged,
        "--flash_mode", board.get("build.flash_mode", "dio"),
        "--flash_size", board.get("upload.flash_size", "4MB"),
    ]
    for offset, path in images:
        # offsets may be strings ("0x1000") or ints, depending on the framework
        cmd += [offset if isinstance(offset, str) else hex(offset), '"%s"' % path]
    env.Execute(env.VerboseAction(" ".join(cmd), "Merging firmware images into %s" % merged))

env.AddPostAction("$BUILD_DIR/${PROGNAME}.bin", merge_firmware)
```

Register it in `platformio.ini` and point `wokwi.toml` at the merged file:

```ini title="platformio.ini"
[env:esp32dev]
platform = espressif32
board = esp32dev
framework = arduino
extra_scripts = post:merge_firmware.py
```

```toml title="wokwi.toml"
[wokwi]
version = 1
firmware = '.pio/build/esp32dev/firmware.merged.bin'
elf = '.pio/build/esp32dev/firmware.elf'
```

The script uses the same image list, offsets and flash settings as `pio run -t upload`, so the simulated flash is laid out exactly like the real board. It works with the Arduino and ESP-IDF frameworks, on every ESP32 chip.

:::info
You can also merge the images by hand after each build. Adjust the chip, the environment name, and the bootloader offset (`0x1000` for the ESP32 and ESP32-S2, `0x0` for the other chips):

```bash
pio pkg exec -p tool-esptoolpy -- esptool.py --chip esp32 merge_bin -o .pio/build/esp32dev/firmware.merged.bin \
  0x1000 .pio/build/esp32dev/bootloader.bin \
  0x8000 .pio/build/esp32dev/partitions.bin \
  0x10000 .pio/build/esp32dev/firmware.bin
```

:::

### Flash size and PSRAM

The merged image contains your partition table, but not the size of the flash chip. If your board has more than 4 MB of flash (`board_upload.flash_size`, or the board's default - for example the ESP32-S3-DevKitC-1 has 8 MB), set `flashSize` on the board part in `diagram.json`. The value must be large enough for the partition table, otherwise filesystems will fail to mount or format. If you build with `board_build.arduino.memory_type = qio_opi` (octal PSRAM), also set `psramType`:

```json
{
  "type": "board-esp32-s3-devkitc-1",
  "id": "esp",
  "top": 0,
  "left": 0,
  "attrs": { "flashSize": "16", "psramType": "octal" }
}
```

See [Flash and memory size](../guides/esp32#flash-and-memory-size) for all the values.

### Filesystem images (LittleFS / SPIFFS)

With the full image loaded, your partition table has the filesystem partition, so `LittleFS.begin(true)` (format on failure) works just like on a blank board. To ship files from the `data/` directory, build the filesystem image and merge it too:

1. Run `pio run -t buildfs`. PlatformIO writes `.pio/build/<env>/littlefs.bin` (or `spiffs.bin`).
2. In `merge_firmware.py`, set `FS_OFFSET` to the offset of the filesystem partition in your partition table (`0x290000` for the default 4 MB Arduino table; check your `partitions.csv` or the [arduino-esp32 partition tables](https://github.com/espressif/arduino-esp32/tree/master/tools/partitions)).
3. Run `pio run` again. The build now includes the filesystem in `firmware.merged.bin`.

## ESP-IDF framework under PlatformIO

With `framework = espidf`, PlatformIO runs the ESP-IDF build and leaves a `flasher_args.json` in `.pio/build/<env>/`. Don't point `firmware` at it: the file lists the `idf.py` file names, but PlatformIO writes the images under different names, so Wokwi fails with `Could not read file: bootloader/bootloader.bin`:

| `flasher_args.json` says              | PlatformIO writes |
| ------------------------------------- | ----------------- |
| `bootloader/bootloader.bin`           | `bootloader.bin`  |
| `partition_table/partition-table.bin` | `partitions.bin`  |
| `<project>.bin`                       | `firmware.bin`    |

Use the [merge script](#building-a-full-image-automatically) above, which reads the real image list from PlatformIO, and point `firmware` at `firmware.merged.bin`. Alternatively, write your own `flasher_args.json` with the offsets and flash size copied from the generated one, and set `firmware` to that file:

```json title="wokwi/flasher_args.json"
{
  "flash_settings": { "flash_size": "4MB" },
  "flash_files": {
    "0x1000": "../.pio/build/esp32dev/bootloader.bin",
    "0x8000": "../.pio/build/esp32dev/partitions.bin",
    "0x10000": "../.pio/build/esp32dev/firmware.bin"
  }
}
```

Paths in `flash_files` are relative to the `flasher_args.json` file. Since the file carries the flash size, you don't need `flashSize` in `diagram.json`.

## Debugging

Add `gdbServerPort = 3333` to `wokwi.toml` and use PlatformIO's bundled GDB, as described in [Debugging: PlatformIO projects](./debugging#platformio-projects).

## Troubleshooting

**`firmware binary .pio/build/esp32dev/firmware.bin not found in workspace`**

The project hasn't been built, or the environment name in the path doesn't match an `[env:...]` section in `platformio.ini`. Run `pio run`, then compare the path with the folder names under `.pio/build/`. See also [Project Configuration](./project-config#troubleshooting).

**`Could not read file: bootloader/bootloader.bin`**

You pointed `firmware` at the `flasher_args.json` generated by PlatformIO's ESP-IDF build. See [ESP-IDF framework under PlatformIO](#esp-idf-framework-under-platformio).

**`partition "spiffs" could not be found`, `LittleFS.begin()` / `SPIFFS.begin()` fails, OTA fails, or `Image length … doesn't fit in partition`**

The simulation is running an application-only image on Wokwi's default partition table. Load the [full image](#building-a-full-image-automatically), and set [`flashSize`](#flash-size-and-psram) if your partition table needs more than 4 MB.

**`opi psram: PSRAM ID read error`**

The firmware expects octal PSRAM. Add `"psramType": "octal"` to the board's `attrs` in `diagram.json`.

**The simulator starts the wrong environment**

`wokwi.toml` describes a single environment. Edit the paths, or keep one `wokwi.toml` per environment in separate folders and use "**Wokwi: Select Config File**" to switch.
