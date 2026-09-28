## What ChatGPT does, and what an alternative has to match

ChatGPT is OpenAI's hosted AI assistant: a chat interface with conversation history, file and image uploads, web search, image generation, custom assistants and code execution, on free and paid plans. An open-source alternative has to match the chat experience itself — history, branching, files, tools — while letting you choose where it runs and which model answers: a local model on your own hardware, or a cloud provider with your own key.

## How to choose

| | [LibreChat](/apps/librechat/) | [Jan](/apps/jan/) | [AnythingLLM](/apps/anythingllm/) | [Libre WebUI](/apps/libre-webui/) |
|---|---|---|---|---|
| Form | Self-hosted web app | Desktop app | Desktop app or Docker server | Self-hosted web app, desktop client |
| Local models | Via Ollama or OpenAI-compatible servers | Runs them itself (llama.cpp) | Built in, or Ollama | Via Ollama |
| Multi-user | Yes, SSO and admin panel | No | Docker version | Yes |
| Focus | Multi-provider chat, agents | Private offline chat | Documents and agents | Chat, documents, sandboxed work |
| Analytics | Operator-configured | Off until allowed | On by default, can be disabled | None |
| Licence | MIT | Apache-2.0 | MIT | Apache-2.0 |

- **Replacing ChatGPT seats for a team?** LibreChat.
- **Want it offline on your own laptop?** Jan.
- **Want answers from your own documents?** AnythingLLM.
- **Want a small, telemetry-free front end for Ollama?** Libre WebUI.

## Not listed and why

- **Open WebUI** is widely used, but its Open WebUI License adds a condition that forbids removing its branding in deployments with more than 50 users unless you hold permission or an enterprise licence. That is not an OSI-approved licence.
- **LobeHub** (formerly LobeChat) uses the LobeHub Community License, based on Apache-2.0 but requiring a commercial licence to develop and distribute derivative works. It is source-available rather than open source.
- **Llama Coder** calls itself an open-source Claude Artifacts; it is an example app built on Together AI's inference API, not a general chat assistant.

For a private answer engine that cites the web, see [open-source Perplexity alternatives](/collections/open-source-perplexity-alternatives/). More AI and workspace apps are under [Productivity](/categories/productivity/).
