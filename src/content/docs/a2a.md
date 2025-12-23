---
title: A2A Protocol
date: 2025-12-23
---

# Agent-to-Agent (A2A) Protocol

A2A is the protocol for "Agentic Coordination". It allows TerminaI to
communicate with other agents and services securely.

## What is it?

A2A is a lightweight JSON-RPC interactions layer over HTTP/SSE. It allows:

- **Task Delegation**: One agent asks another to "fix the wifi".
- **Streaming**: Real-time progress updates.
- **Tool Handoff**: Sharing capabilities between contexts.

## Integration

To run an A2A server:

```bash
terminai serve --port 3000
```

To connect a client:

```typescript
import { A2AClient } from '@terminai/a2a';

const client = new A2AClient('http://localhost:3000');
await client.send('ExecuteTask', { prompt: 'Check disk usage' });
```

_(Full spec coming soon)_
