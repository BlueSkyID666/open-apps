## What Zendesk does, and what an alternative has to match

Zendesk is a hosted customer service suite: tickets from email, chat, phone and social channels, a help centre, SLAs, automations and reports, billed per agent. An open-source alternative has to cover the core loop — every channel landing in one queue that a team can assign, answer and measure — on your own servers. The differences between the four below are in the shape of that queue, and in what each keeps behind a paid licence.

## How to choose

| | [Zammad](/apps/zammad/) | [Chatwoot](/apps/chatwoot/) | [FreeScout](/apps/freescout/) | [Frappe Helpdesk](/apps/frappe-helpdesk/) |
|---|---|---|---|---|
| Model | Multi-channel ticketing | Conversation inbox and live chat | Shared mailbox | Tickets, SLAs, customer portal |
| Hosting needs | Rails services; Docker, Helm, DEB/RPM | Rails services; Docker or Kubernetes | PHP and MySQL | Frappe Framework; install script |
| Paid extras | Hosting and support only | Captain AI, SSO, SLA policies, branding | Most official modules | Frappe Cloud hosting |
| Licence | AGPL-3.0 | MIT core, enterprise directory | AGPL-3.0 | AGPL-3.0 |
| Since | 2012 | 2019 | 2018 | 2021 |

- **Replacing Zendesk across email, phone and social?** Zammad.
- **Customers mostly on website chat, WhatsApp or Instagram?** Chatwoot — also the one to look at if you are leaving Intercom.
- **Small team, email-first, cheap hosting?** FreeScout.
- **Already on ERPNext, or need SLAs and a portal?** Frappe Helpdesk.

## Not listed and why

- **Tiledesk** is an MIT live-chat and chatbot platform, but its main repository is a Docker and Helm installer with a few hundred stars, enterprise features ship as private images, and it compares itself with Voiceflow rather than a help desk.
- **Chatwoot's enterprise features** are listed as caveats, not reasons to exclude it: everything outside its `enterprise/` directory is MIT.

For other business software you can run yourself, see [Business](/categories/business/). More AGPL projects are under [AGPL-3.0 apps](/licenses/agpl-3.0/).
