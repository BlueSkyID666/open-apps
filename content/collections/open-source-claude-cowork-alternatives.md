## What Claude Cowork does, and what an alternative has to match

Claude Cowork is Anthropic's desktop app for handing Claude real work: you give it access to folders and tools, it plans, asks before anything significant, and carries a multi-step task through to finished files. It runs Claude models only and needs a paid Claude plan. The apps below reproduce that loop — an agent with a workspace, skills and MCP connectors — while letting you choose the model, read the code and, in most cases, run on Linux.

## How to choose

| | [OpenWork](/apps/openwork/) | [Eigent](/apps/eigent/) | [Open Cowork](/apps/open-cowork/) | [OpenWorker](/apps/openworker/) | [NextCoWork](/apps/nextcowork/) |
|---|---|---|---|---|---|
| Platforms | macOS, Windows, Linux | macOS, Windows, Linux | Apple Silicon Mac, Windows | macOS, Windows | macOS, Windows, Linux |
| Licence | MIT app, commercial `ee/` | Apache-2.0 | MIT, Anthropic skills bundled | MIT | Apache-2.0 |
| Local models | Ollama, OpenAI-compatible | vLLM, Ollama, LM Studio | OpenAI-compatible endpoints | Ollama | Custom endpoints, Ollama |
| Stand-out | Shares skills and MCP across tools | Parallel agent workforce | Commands in a local VM | Approval gates and audit trail | Editor, terminal and Git built in |

- **On Linux, or want the closest match?** Start with OpenWork.
- **Big jobs with independent parts?** Eigent runs agents in parallel.
- **Worried about the agent touching your system?** Open Cowork, with WSL2 or Lima installed.
- **Need to show who approved what?** OpenWorker.
- **Mostly writing code?** NextCoWork.

## Not listed and why

- **Kuse Cowork** — MIT and self-described as a Claude Cowork alternative, but it has no release build yet; its README asks you to build from source.
- **Open Claude Cowork** by Composio (MIT) has had no commits since May 2026. A second project with the same name, DevAgentForge's, has no licence file, which means no open-source licence.
- **Smaller projects** named after Open Cowork, with a few hundred stars or fewer and no installable build, join when they ship one.

For agents that live in a team chat rather than on your desktop, see [open-source Claude Tag alternatives](/collections/open-source-claude-tag-alternatives/). More desktop software is under [Productivity](/categories/productivity/) and [Developer tools](/categories/developer-tools/).
