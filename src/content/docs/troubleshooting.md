---
title: Troubleshooting
date: 2025-12-23
---

# Troubleshooting

Common issues when running TerminaI.

## PTY / Terminal Issues

**"The terminal looks weird/garbled"**

- Ensure you are using a Nerd Font if possible (though not required).
- Check your `TERM` environment variable. Try `export TERM=xterm-256color`.

## Node.js Version

TerminaI requires **Node.js 20+**. Check your version: `node -v`

## Auth Errors

**"Unauthorized / 401"**

- Run `terminai auth login` to refresh your token.
- Check permissions if running in a constrained environment like a container.
