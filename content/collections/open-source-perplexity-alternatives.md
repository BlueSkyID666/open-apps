## What Perplexity does, and what an alternative has to match

Perplexity is a hosted answer engine: ask a question, and it searches the web, reads the results and writes an answer with numbered citations, with deeper research modes on paid plans. An open-source alternative has to do the same search-then-answer loop and show its sources — on your own server, with a model you choose, and ideally with a search backend that does not track you.

## How to choose

| | [Vane](/apps/vane/) | [Morphic](/apps/morphic/) | [Khoj](/apps/khoj/) |
|---|---|---|---|
| Setup | One Docker container | Docker Compose | Self-host guide or cloud app |
| Web search | Bundled SearxNG | SearxNG, Tavily, Brave, Exa | Built in |
| Your documents | Per-question uploads | Per-question uploads | Indexed library |
| Answer format | Cited text and widgets | Generative UI | Cited text |
| Licence | MIT | Apache-2.0 | AGPL-3.0 |

- **Want it running in a minute?** Vane.
- **Want accounts, history and share links?** Morphic.
- **Want your notes and documents searched too?** Khoj.

## Not listed and why

- **Research agents** that call themselves Perplexity alternatives but run as MCP servers or command-line tools are not answer-engine apps; they are left out.
- **Smaller projects** with a few dozen stars join when they reach a stable release.

For a private document assistant with agents, see [AnythingLLM](/apps/anythingllm/). More self-hosted software is under [Productivity](/categories/productivity/).
