---
title: Wokwi Agent Skills
sidebar_label: Agent Skills
description: Teach AI coding agents such as Claude Code, Cursor, Codex and Copilot to run, test and debug embedded firmware on the Wokwi simulator. Install the Wokwi agent skills and let the agent check its own firmware without a board.
keywords: [agent skills, AI agents, Claude Code, Cursor, Codex, Copilot, SKILL.md, ESP-IDF, ESP32, firmware testing, memory leaks, LVGL, GDB, Wokwi CLI]
---

AI coding agents can write firmware, but they can't tell whether it works without a board on the desk. The [Wokwi agent skills](https://github.com/wokwi/skills) close that loop. Each skill teaches the agent one job on the Wokwi simulator: the commands to run, the output to expect and the pitfalls to avoid.

A skill is a folder with a `SKILL.md` file in the open [Agent Skills](https://agentskills.io/specification) format, so the same files work in Claude Code, Cursor, Codex, Copilot and other agents that read skills. The agent picks up a skill when your request matches it, for example "check this firmware for memory leaks".

:::info
The skills run the [Wokwi CLI](./cli-installation) (0.29.0 or newer) or [`idf.py wokwi`](./idf-wokwi-usage), and both need a CLI token. Create a token on the [Wokwi CI Dashboard](https://wokwi.com/dashboard/ci) and set the `WOKWI_CLI_TOKEN` environment variable where the agent runs.
:::

## Available skills

| Skill | Use it to | Related docs |
| :- | :- | :- |
| [`find-memory-leaks`](https://github.com/wokwi/skills/tree/main/skills/find-memory-leaks) | Catch slow leaks in ESP-IDF firmware. The simulator watches the heap while a scenario drives hours of use in seconds. | [Heap monitoring](./heap-monitoring) |
| [`test-lvgl-ui`](https://github.com/wokwi/skills/tree/main/skills/test-lvgl-ui) | Regression-test an LVGL (or any other) display UI in CI, with taps, swipes and pixel-exact screenshot comparison. | [Automation scenarios](./automation-scenarios) |
| [`debug-esp32-firmware`](https://github.com/wokwi/skills/tree/main/skills/debug-esp32-firmware) | Decode a panic backtrace, reproduce the bug with scripted inputs, trace a bus to a VCD file and attach GDB without a debug probe. | [Debugging with GDB](./cli-usage#debugging-with-gdb) |
| [`verify-esp-idf-build`](https://github.com/wokwi/skills/tree/main/skills/verify-esp-idf-build) | Run and check an ESP-IDF build with `idf.py wokwi` right after building, with no devkit attached. | [ESP-IDF simulation extension](./idf-wokwi-usage) |

New skills are added to the [skills repository](https://github.com/wokwi/skills) first, so check its README for the current list.

## Install the skills

### Claude Code

Install all the skills as a plugin:

```text
/plugin marketplace add wokwi/skills
/plugin install wokwi@wokwi-skills
```

The skills are then available as `/wokwi:<skill>`, for example `/wokwi:find-memory-leaks`.

To add a single skill to one project without the plugin, copy its folder (`skills/<name>/`) from the repository into the `.claude/skills/` directory of your project, or into `~/.claude/skills/` to use it in every project.

### Other agents

Copy the skill folder to the directory your agent loads skills from, or paste the body of `SKILL.md` into the instructions file the agent reads (`AGENTS.md`, `.cursorrules`, `copilot-instructions.md`). The files are plain Markdown with a small YAML header.

## Skills and MCP

The skills don't need the [Wokwi MCP server](./mcp-support): the agent runs `wokwi-cli` like any other command, then reads the exit code and the output. The MCP server is the other way to connect an agent to Wokwi. It gives the agent tools to control a running simulation step by step: start it, read the serial output, press a button, take a screenshot. You can use both in the same project.
