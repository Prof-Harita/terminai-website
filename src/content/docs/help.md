---
title: "Help Manual"
date: "2025-05-15"
description: "Comprehensive guide to using terminaI for everyday tasks."
---

Welcome to the **terminaI** operator's manual. This guide is designed to help you master the sovereign shell, enabling you to perform complex tasks with simple natural language commands.

## 1. Introduction

**terminaI** is a system-aware terminal interface. Unlike traditional shells that require memorization of complex flags and syntax, **terminaI** understands your intent. It bridges the gap between what you want to do and how the system needs to do it.

## 2. Installation & Configuration

### Installation
**terminaI** is typically installed as a global CLI tool.
```bash
npm install -g @terminai/cli
```

### Configuration (`settings.json`)
Your experience is customizable via `~/.terminai/settings.json`.
*   **Theme**: Choose between `dark` (default) or `light`.
*   **Auth**: Configure your preferred LLM provider (Personal, Enterprise, or Local).

```json
{
  "theme": "dark",
  "authType": "personal"
}
```

## 3. Natural Language Interface

The core interaction model is simple: **Ask**.

### Basic Commands
Instead of typing `ls -la | grep "May"`, you can type:
> "List all files modified in May."

Instead of `find . -name "*.log" -exec rm {} \;`, you can type:
> "Delete all log files in this directory."

**terminaI** will always:
1.  **Plan**: Show you the command it intends to run.
2.  **Verify**: Ask for confirmation (unless configured otherwise).
3.  **Execute**: Run the command and show output.

## 4. Shell Integration

**terminaI** does not replace your shell; it augments it. You can still use standard commands.

### Mixing Modes
You can switch between natural language and standard bash/zsh commands seamlessly.
> `cd /var/log` (Standard command)
>
> "Show me the last 10 error lines in syslog" (Natural language)

### System Awareness
The agent knows your environment. If you ask it to "Check memory usage," it knows whether to run `top` (Linux/Mac) or `tasklist` (Windows).

## 5. File Organization & Management

One of **terminaI**'s most powerful capabilities is managing the chaos of your file system.

### Organizing Downloads
> "Create folders named 'Images', 'Docs', and 'Installers'. Then move all jpg/png files to Images, pdfs to Docs, and dmgs/exes to Installers."

### Batch Renaming
> "Rename all screenshots in this folder to follow the pattern 'Project_X_Screenshot_[Date].png'."

### Finding Lost Files
> "Find a PDF I downloaded last week about 'System Architecture'."

## 6. Research & Summarization

**terminaI** can read and synthesize information from local files and the web (if enabled).

### Summarizing Documents
> "Read @quarterly_report.pdf and summarize the key financial risks in 3 bullet points."

### Comparative Analysis
> "Compare the conclusions in @article1.txt and @article2.txt. What are the conflicting points?"

### Web Research (Requires Internet Access)
> "Find the latest documentation on 'Next.js 14 App Router' and summarize the breaking changes."

## 7. Data & Databases

You can interact with data files and local databases without writing complex queries.

### Querying Databases (SQLite)
> "Connect to @chinook.db. List the top 5 customers by total invoice amount."

### Generating Data
Need mock data for a project?
> "Generate a CSV file named 'mock_users.csv' with 100 rows containing id, name, email, and sign_up_date."

> "Create a JSON file with sample inventory data for a grocery store."

## 8. Image & Media Processing

**terminaI** is multi-modal. It can "see" images in your terminal.

### Extracting Data from Images
> "Look at @invoice.png and extract the date, total amount, and vendor into a JSON format."

### Organizing Photos
> "Sort these photos into folders based on the year they were taken (check the EXIF data)."

## 9. Extensibility (MCP)

**terminaI** supports the **Model Context Protocol (MCP)**, allowing you to connect it to external tools and data sources.

*   **GitHub**: Manage issues and PRs.
*   **Postgres**: Connect to production databases safely.
*   **Slack**: Send summaries to your team.

*See the [MCP Guide](/docs/mcp) for full configuration details.*

## 10. Troubleshooting

### Permission Denied
If **terminaI** cannot execute a command, ensure:
1.  You have the necessary system permissions (sudo).
2.  The `settings.json` allows file system modifications.

### "I don't understand"
If the agent is confused:
1.  Be more specific. Instead of "Fix it," say "Fix the permission error for the backup folder."
2.  Check if you are in the correct directory.

### Resetting
To reset the session context:
> "/reset"

---

**terminaI** is designed to grow with you. As you use it, you will find it becomes an extension of your own intent—a sovereign tool for a sovereign user.
