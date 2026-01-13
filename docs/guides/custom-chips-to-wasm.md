---
title: Compiling custom chips to WASM
sidebar_label: Custom chips as WASM
description: Compile your custom chips to WASM for use with VS Code or the Wokwi CLI
keywords: [Visual Studio Code, VS Code, custom chip, compiling, WASM, web assembly, API, chips, chip, docker]
---

import VsCodeDevContainerImage from './custom-chips-as-wasm-vscode-dev-container.png';
import VsCodeRemoteContainerImage from './custom-chips-as-wasm-vscode-remote-container-button.png';
import WokwiCliCompileFirstRunImage from './custom-chips-as-wasm-wokwi-cli-compile-first-run.png';

Custom components written with the [Chips API](/chips-api/getting-started) can be compiled into WebAssembly (WASM) for
use with the Wokwi VS Code extension or the Wokwi CLI.

The WASM binary can be compiled by the Wokwi CLI, GitHub Actions, a container, or locally. This guide will cover all four
approaches.

The simplest way to get started is by cloning/forking the [inverter-chip](https://github.com/wokwi/inverter-chip)
example repository from the Wokwi GitHub. You can then compile locally, use the dev container feature from VS
Code, or push to GitHub to compile the WASM binary. This repository will also be referenced multiple times throughout
this guide, so it is worth having a look at.

## Configure your project
Before compiling your chip, you should make sure your project is configured properly to ensure that they can work in
Wokwi.

### Wokwi configuration
A custom chip requires a `[[chip]]` key in `wokwi.toml`. This key specifies the name and binary used by the custom chip.
Wokwi also requires a JSON file that describes the pinout of the chip. This JSON file should have the same name as the
WASM binary, but with its extension changed to `.json` instead of `.wasm`, e.g. `inverter.chip.wasm` is paired with
`inverter.chip.json`. To configure the chip JSON file properly, see the docs on [custom chip definitions](../chips-api/chip-json).

An example excerpt from `wokwi.toml`:
```toml
[[chip]]
name = 'inverter' # To use the chip in diagram.json, add a part with "chip-inverter" type.
binary = 'chips/inverter.chip.wasm'
```

Multiple chips can be added to the same project by adding multiple `[[chip]]` keys, each with different `name` and
`binary` values.

### Source files
:::note
If you are cloning/forking the inverter chip repository, then you can skip this section.
:::

If you are setting up your project from scratch, you will need to ensure that the Wokwi C API is present within your
source files. The easiest way to ensure this is to use the Wokwi CLI to compile your chip, as it will fetch the required
files. It is also available from [wokwi.com/api/chips/wokwi-api.h](https://wokwi.com/api/chips/wokwi-api.h).

You need to ensure that it is included in your project, otherwise you will not be able to make use of the Chips API.

## Compilation methods

### Wokwi CLI
As of v0.20.0, the [wokwi-cli](https://github.com/wokwi/wokwi-cli) provides you the ability to easily compile chips from
the terminal. To get started, download the wokwi-cli from [github.com/wokwi/wokwi-cli](https://github.com/wokwi/wokwi-cli),
navigate to your project folder and run `wokwi-cli chip compile main.c` (replacing `main.c` with the relevant source
file name). The wokwi-cli will automatically fetch the required toolchain + SDK, and will output a WASM binary which
is ready to use with Wokwi.

<figure>
  <img src={WokwiCliCompileFirstRunImage} alt="Running wokwi-cli for the first time to compile a chip" />
  <figcaption>Running wokwi-cli for the first time to compile a chip</figcaption>
</figure>

You can also:
- pass multiple source files, `wokwi-cli chip compile main.c utils.c`
- specify output file name, `wokwi-cli chip compile main.c -o my_chip.wasm`
- generate a Makefile for more advanced projects, `wokwi-cli chip makefile -n my_chip [source_files ...]`

Additional examples are available via the `-h`/`--help` flag in wokwi-cli.

### GitHub Actions

If you have cloned the inverter chip repository, then it has been configured and is ready for you to modify it to your
needs. It will automatically compile the binary once a push is made to the repository, and will also automatically
generate a GitHub release if you push a tag that starts with a "v", e.g. `v1.0.3`.

If you did not clone the inverter chip repository and are wanting to configure your own actions, then consider looking
at the [build workflow file](https://github.com/wokwi/inverter-chip/blob/ff72418a11d9d56621731ab3d373c952b1b508ea/.github/workflows/build.yaml).
If you do not want to use this action, then see the steps for compiling locally.


### VS Code dev container
The inverter chip repository comes with a dev container configuration file that will automatically handle setting up a
Docker container for you to build your binaries in. To make use of this, simply open the custom chip folder in a
container by pressing <kbd>F1</kbd> and searching for "Dev Containers: Open Folder in Container...". 

<figure>
  <img src={VsCodeDevContainerImage} alt="Opening a dev container in VS Code via the command palette" />
  <figcaption>Opening a dev container in VS Code via the command palette</figcaption>
</figure>

Alternatively, you can click the icon bottom left of the VS Code window, and click on "Reopen in Container".

<figure>
    <img src={VsCodeRemoteContainerImage}  style={{margin: "auto"}} alt="Opening a dev container in VS Code via a dedicated button"/>
  <figcaption>Opening a dev container in VS Code via a dedicated button</figcaption>
</figure>

Once done, you should be presented with a terminal window where you can now run `make`. This will run the `Makefile` in
the repository, and your generated WASM files should appear in `dist/`.

### Docker
You can use the prebuilt [wokwi/builder-clang-wasm](https://hub.docker.com/r/wokwi/builder-clang-wasm) image to compile
your project in a Docker environment.

To get started, simply navigate to the root of your project and run:
```bash
docker run --rm -u 1000:1000 -v ${PWD}:/src wokwi/builder-clang-wasm:latest make
```

After fetching the image, this will command automatically execute the `Makefile` in the project. In the case of the
inverter example, it will create the `dist/` directory, compile the binary into `dist/chip.wasm` and copy `chip.json` to 
`dist/`.

You can enter an interactive session with the following:
```bash
docker run --rm -it -u 1000:1000 -v ${PWD}:/src wokwi/builder-clang-wasm:latest
```

:::info
The argument `-u 1000:1000` is required since otherwise you may run into issues with permissions (such as the container
being unable to open files or create directories). If your computer has multiple users, you may have to update
the value to something other than `1000` - check the output of the `id` command on the host to get the proper value.
:::


### Building locally

You will need to configure your environment to be able to build WASM assemblies locally. This part of the documentation
is written with Ubuntu/Debian distros in mind, so you may have to adjust these instructions to your machine.

1. Install `wasi-libc` with `sudo apt install wasi-libc`
2. Install the missing `libclang_rt.builtins-wasm32.a` library
    1. Download `libclang_rt-27.0.tar.gz` from the [wasi-sdk GitHub releases](https://github.com/WebAssembly/wasi-sdk/releases)
    2. Extract `libclang_rt-27.0/wasm32-unknown-wasi/libclang_rt.builtins.a` to `/usr/lib/llvm-???/lib/clang/???/lib/wasi/`
    :::info
    Replace the `???` in the path above with the currently installed LLVM version number on your system. Check by
    running `clang -v` and looking at the major release number.
    :::
    3. Rename the copied file from `libclang_rt.builtins.a` to `libclang_rt.builtins-wasm32.a`

You can now compile WASM binaries! To test, clone the inverter repository and run 
`clang --target=wasm32-unknown-wasi -nostartfiles -Wl,--import-memory -Wl,--export-table -Wl,--no-entry -Werror -o dist/chip.wasm src/main.c`.

You may have to update the `Makefile` to remove the `--sysroot` argument, as `wasi-libc` will be installed to a different
directory than what `--sysroot` is set to.

If successful, you should now have `chip.wasm` under `dist/`!