---
title: Security Posture
description: Understanding the safety model of TerminaI
---

# Security Posture

TerminaI is designed with a "Safety First" architecture. Unlike other agentic
tools that are "all or nothing", TerminaI provides a granular **Policy Engine**.

## The Trust Model

1. **Local Execution**: All logic runs on your machine.
2. **BYO-Key**: You provide the API key. You control the budget.
3. **Audit Logging**: Every action is logged to `~/.terminai/audit.jsonl`.

## Policy Levels

- **Level 1 (Safe)**: `ls`, `cat`, `grep`. Auto-approved.
- **Level 2 (Modify)**: `touch`, `mkdir`. Requires generic approval ("y").
- **Level 3 (System)**: `sudo`, network installs. Requires explicit
  confirmation + potentially a PIN.

## Privacy

We do not train on your inputs.
