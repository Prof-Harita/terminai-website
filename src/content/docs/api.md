---
title: API Reference
description: Developer guide for extending TerminaI
---

# API Reference

TerminaI exposes a plugin system via the A2A Protocol.

## Clients

### `TerminaIClient`

The main entrypoint for programmatic interaction.

```typescript
import { TerminaIClient } from '@terminai/sdk';

const client = new TerminaIClient();
await client.connect();
```

## Events

- `on('message')`
- `on('tool_call')`
- `on('auditor_event')`
