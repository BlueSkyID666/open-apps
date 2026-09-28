## What Claude Tag does, and what an alternative has to match

Claude Tag is Anthropic's way of bringing Claude into a Slack channel: anyone tags `@Claude`, delegates a task, and Claude works with the organisation's tools and the shared context of the channel, where everyone can see what it is doing. It is in beta for Claude Team and Enterprise plans and billed by usage. The projects below reproduce the shape — an agent that lives in the team conversation — on infrastructure you run, with the agent runtime and model you choose.

## How to choose

| | [AgentConnect](/apps/agentconnect/) | [Centaur](/apps/centaur/) | [OpenTag](/apps/opentag/) |
|---|---|---|---|
| Channels | Slack, Telegram, Discord, Lark, Google Chat, code hosts | Slack, API, optional Teams | Slack |
| Agents | Many, each with a role | One shared agent, any CLI harness | One ACP coding agent |
| Where work runs | Daemons you add | Kubernetes sandbox per thread | A computer you pair |
| Setup | Docker Compose | k3s or Kubernetes, 1Password | Docker Compose relay + CLI |
| Licence | Apache-2.0 | MIT or Apache-2.0 | MIT |

- **Several agents with different jobs?** AgentConnect.
- **Every request in a clean, isolated machine?** Centaur.
- **Code must stay on your own computer?** OpenTag.

## Not listed and why

- **CopilotKit's OpenTag** is a starter application to fork and build your own bot on, not a finished app.
- **linxidnju/OpenTag** has no clearly detected licence and no commits since July.
- **Projects named "open-claude-tag"** have a handful of stars so far; they join when they ship a release.

For agents that work on your desktop rather than in a channel, see [open-source Claude Cowork alternatives](/collections/open-source-claude-cowork-alternatives/). More team software is under [Developer tools](/categories/developer-tools/).
