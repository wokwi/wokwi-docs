---
title: Model Context Protocola (MCP) support
sidebar_label: MCP support
description: Integrate AI agents like Copilot, Claude, Cursor, Gemini, and ChatGPT with Wokwi using the Model Context Protocol (MCP). This guide covers configuring the Wokwi MCP server, enabling real-time simulation, automated testing, and virtual hardware interaction.
keywords: [MCP, Model Context Protocol, AI integration, Copilot, Claude, ChatGPT, Gemini, Cursor, automated testing, serial console]
---


# MCP Support

The Model Context Protocol (MCP) is an open standard that allows AI agents—such as Copilot, Claude Code, Cursor, Gemini, ChatGPT and others to securely interact with external tools and services. For Wokwi users, MCP enables seamless integration between AI assistants and embedded simulation.

## Wokwi MCP Server

The Wokwi CLI includes an experimental MCP server that allows AI agents to interact with Wokwi's simulation and testing capabilities. This enables AI agents to:

- Simulate complex embedded systems
- Run automated tests on embedded projects
- Monitor the serial console output and logs
- Interact with the virtual hardware in real-time

## Configuration

To configure your AI agent to use the Wokwi MCP server, add the following to your agent's MCP configuration:

```json
{
  "servers": {
    "Wokwi": {
      "type": "stdio",
      "command": "wokwi-cli",
      "args": ["mcp"],
      "env": {
        "WOKWI_CLI_TOKEN": "${input:wokwi-cli-token}"
      }
    }
  }
}
```

### Authentication

You will need a valid Wokwi CLI token to use the MCP server. You can generate a token in the [Wokwi CI Dashboard](https://wokwi.com/dashboard/ci).
