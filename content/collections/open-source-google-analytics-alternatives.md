## What Google Analytics does, and what an alternative has to match

Google Analytics is a free, hosted analytics service: traffic, acquisition, events and conversions for websites and apps, tied into Google's advertising products. An open-source alternative has to answer the everyday questions — how many people came, from where, what they did and whether they converted — while keeping visitor data on servers you control. The five below split into simple web analytics, a full suite, and product analytics.

## How to choose

| | [Umami](/apps/umami/) | [Plausible](/apps/plausible/) | [Rybbit](/apps/rybbit/) | [Matomo](/apps/matomo/) | [OpenPanel](/apps/openpanel/) |
|---|---|---|---|---|---|
| Scope | Web analytics | Simple web analytics | Web and product analytics | Full analytics suite | Product and web analytics |
| Self-host needs | Node.js, PostgreSQL | Elixir, PostgreSQL, ClickHouse | ClickHouse, PostgreSQL, Redis | PHP, MySQL or MariaDB | ClickHouse, PostgreSQL, Redis |
| Held back from self-hosted | Nothing in repository | Funnels, revenue goals, SSO, sites API | Web Vitals (cloud) | Premium plugins | Nothing in repository |
| Licence | MIT | AGPL-3.0 CE | AGPL-3.0 | GPL-3.0 | AGPL-3.0 |
| Since | 2020 | 2018 | 2025 | 2011 | 2024 |

- **Just want to know your traffic, with the least to run?** Umami.
- **Want one clean page and a paid cloud as an option?** Plausible.
- **Need the depth your marketing team is used to?** Matomo.
- **Want funnels, retention and session replay?** Rybbit, or OpenPanel if you are also replacing Mixpanel.

## Not listed and why

- **Hosted-only analytics services** are out of scope: every pick here can run on your own server.
- **Plausible's premium features** stay in a directory with no rights granted and are available only on its cloud; the AGPL Community Edition is what is listed.

For more tools you can run yourself, see [Business](/categories/business/). Permissively licensed apps are under [MIT apps](/licenses/mit/).
