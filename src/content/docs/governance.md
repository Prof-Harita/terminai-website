---
title: Governance & Security
date: 2025-12-23
---

# Governance & Security

TerminaI is designed with the "Sovereign Shell" philosophy: AI should be a
powerful tool, but YOU remain the root operator.

## The Policy Ladder

We use a tiered "Policy Ladder" to determine when an action requires human
approval:

1.  **Read-Only / Safe**: Actions that gather information (e.g., `ls`, `cat`,
    `grep`) can be auto-approved or have a low friction threshold.
2.  **State-Changing / Low Risk**: Actions that modify non-critical state (e.g.,
    `mkdir` in a temp folder).
3.  **Critical / Root Access**: Actions that modify system config, install
    packages, or touch sensitive data (e.g., `sudo`, `rm -rf`, editing `/etc`).
    **These always require explicit PIN/Prompt approval.**

## Trust Boundaries

TerminaI respects your filesystem boundaries.

- **Allowed Scopes**: You define which directories the agent can see.
- **Blocked Scopes**: Sensitive directories `.ssh`, `.env` are blocked by
  default unless explicitly allowed.

## Audit Logs

Every action taken by the agent—every command suggested, every tool call, every
approval grant—is logged to a local, immutable audit trail
(`~/.terminai/audit.jsonl`). You can review this log at any time to see exactly
what happened and why.
