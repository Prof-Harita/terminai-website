---
title: Model Context Protocol (MCP)
date: 2025-12-23
---

# Model Context Protocol (MCP)

TerminaI is a first-class MCP host. This means it can connect to any
MCP-compliant server—local or remote—to extend its capabilities.

## Why MCP?

Instead of building hard-coded integrations, you can just plug in an MCP server.

- Connect to **GitHub** for issue triage.
- Connect to **Postgres** for database ops.
- Connect to **Linear** for project management.

## connecting a Server

Add to your configuration:

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"]
    }
  }
}
```

TerminaI handles the handshake, tool discovery, and routing automatically.
