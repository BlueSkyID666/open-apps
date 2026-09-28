## What Cursor does, and what an alternative has to match

Cursor is a proprietary code editor built on VS Code with AI throughout: tab completion that predicts your next edit, and an agent that plans, edits across files and runs commands. An open-source alternative has to match that loop — an agent that works across the project, with diffs you review — and ideally let you choose the model. The first decision is whether you want a new editor or an agent inside the one you already use.

## How to choose

| | [Zed](/apps/zed/) | [Kilo Code](/apps/kilo-code/) | [Cline](/apps/cline/) |
|---|---|---|---|
| Form | Standalone native editor | VS Code and JetBrains extension, CLI | VS Code extension, CLI, desktop app |
| Next-edit completion | Edit predictions | Autocomplete | Not listed in its README |
| Outside agents | Claude Agent, Codex, OpenCode over ACP | — | — |
| Local models | Ollama, LM Studio | Yes | Ollama, LM Studio |
| Licence | GPL-3.0, Apache-2.0 parts | MIT | Apache-2.0 (JetBrains plugin closed) |

- **Want a fast editor that is not VS Code?** Zed.
- **Staying in VS Code or JetBrains and want completion too?** Kilo Code.
- **Want to approve every edit and command?** Cline.

## Not listed and why

- **Void**, an open-source AI editor forked from VS Code, is deprecated and archived; its last commit was in June 2026.
- **Terminal agents** such as [OpenCode](/apps/opencode/) do much of the agent work without an editor; they are compared in [open-source Claude Code alternatives](/collections/open-source-claude-code-alternatives/).

For completion-first assistants, see [open-source GitHub Copilot alternatives](/collections/open-source-github-copilot-alternatives/). More tools are under [Developer tools](/categories/developer-tools/).
