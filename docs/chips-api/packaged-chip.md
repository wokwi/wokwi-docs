---
title: Packaged Wokwi Custom Chips
sidebar_label: Packaged Chips
---

# Packaged Custom Chips

A packaged Custom Chip is a Wokwi Custom Chip that can be used in other design but that has not been (yet) included into the Wokwi proper. While the GUI does not currently include a direct way to add such chips into a design, you can add them by manually editing your `diagram.json` file.

You can also create your own Packaged Custom Chips and make them available for others to be used. To do so, once your chip is ready (enough), you can publish it as a
[Github repository release](https://docs.github.com/en/repositories/releasing-projects-on-github). 
In the future, there may be alternative ways to make chips available.

## Introduction

Essentially, a custom chip consists of two files, `chip.json` and `chip.wasm`.  The former contains a [chip description](./chip-json) in JSON, defining the properties of the chip.  The `chip.wasm` contains the Webassembly definition of the chip functionality. It is usually produced by compiling a C source code file that describes the chip functionality.

Any custom chip may be packaged into a Packaged Custom Chip by creating a `chip.zip` package and publishing it in a release in a Github repository.  Correspondingly, any Github repository release[^1] with a `chip.zip` package that contains a `chip.json` and a `chip.wasm` file is understood to be a custom chip by the Wokwi Diagram Editor.

[^1]: Currently the release name must start with the letter `v`, see below.

## Using a Packaged Custom Chip

Let's imagine that you need an inverter in your design and there aren't one directly available. Consider the https://github.com/wokwi/inverter-chip/ repository. It contains a definition of a very simple Custom Chip, an inverter. The repository also contains a release named `v1.0.0`: https://github.com/wokwi/inverter-chip/releases/tag/v1.0.0

That release contains the `chip.zip` file as required, containing the required files.

To use the Packaged Custom Chip inverter in your design, first include a dependency into your `diagram.json`:
```
  "dependencies": { "chip-inverter": "github.com/wokwi/inverter-chip@1.0.0" }
```

:::note 

Note that the release name in Github is `v1.0.0`, beginning with a letter `v`, but the dependency in the `diagram.json` lists it as `@1.0.0`, without the letter `v`.

Once you have included it as a dependency, you can use it normally, by adding it to `"parts"`:
```
  "parts": [
    {
      "type": "chip-inverter",
      "id": "inverter1",
      ...
```

## Creating a Packaged Custom Chip

To create a Packaged Custom Chip, publish your chip design in Github as a repository and make there a release.  Further documentation for this remains to be written.