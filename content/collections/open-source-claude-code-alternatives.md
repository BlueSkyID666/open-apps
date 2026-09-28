## What Claude Code does, and what an alternative has to match

Claude Code is Anthropic's coding agent: it runs in the terminal and in IDEs, reads your repository, edits files and runs commands, with subagents, skills, hooks and MCP. It uses Anthropic's models. An open-source alternative has to do the same agent loop in your repository; the reason to switch is usually the choice of model — another provider, or a local one — and the ability to read the code of the tool that runs commands on your machine.

## How to choose

| | [OpenCode](/apps/opencode/) | [Qwen Code](/apps/qwen-code/) | [Goose](/apps/goose/) |
|---|---|---|---|
| Focus | Coding | Coding | General-purpose, including coding |
| Interfaces | Terminal, desktop (beta) | Terminal, desktop, IDE plugins, web (experimental), chat apps | Desktop, CLI, API |
| Models | Many providers, local models, Copilot or ChatGPT sign-in | OpenAI, Anthropic, Gemini, Qwen APIs, Ollama, vLLM | 15+ providers, Ollama, subscriptions via ACP |
| Licence | MIT | Apache-2.0 | Apache-2.0 |

- **Want a focused terminal agent with any model?** OpenCode.
- **Want the same features you use in Claude Code, by name?** Qwen Code.
- **Want one agent for code, research and automation, with a desktop app?** Goose.

Want to keep Claude Code but run several sessions at once? [Emdash](/apps/emdash/) runs it and other agents in parallel Git worktrees, and [opendray](/apps/opendray/) keeps sessions alive on an always-on host.

## Not listed and why

- **Aider**, the long-running AI pair programmer for the terminal, has had no commits since May 2026.
- **cdesktop**, which calls itself an open-source Claude Code Desktop alternative, is small and has had no commits since May 2026.
- **Editor-based agents** such as [Cline](/apps/cline/) and [Kilo Code](/apps/kilo-code/) also have CLIs; they are compared in [open-source Cursor alternatives](/collections/open-source-cursor-alternatives/).

More agents are under [Developer tools](/categories/developer-tools/).
