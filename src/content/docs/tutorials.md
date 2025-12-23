---
title: Tutorials
description: Getting started with common workflows
---

# Tutorials

## 1. Setting up your first MCP Server

Connect to GitHub Issues:

```bash
npm install -g @modelcontextprotocol/server-github
```

Add to `~/.terminai/config.json`:

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

## 2. Creating a Custom Workflow

Start a conversation:

```bash
terminai "Check my unread emails and summarize"
```
