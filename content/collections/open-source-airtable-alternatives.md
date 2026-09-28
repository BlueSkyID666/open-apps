## What Airtable does, and what an alternative has to match

Airtable is a hosted spreadsheet-database: tables with typed fields and links between them, several views of the same data, forms that feed records, automations, and interfaces or apps on top. An open-source alternative has to match the everyday loop — structure data, view it several ways, collect it through forms, automate around it and reach it through an API — while keeping the data on your own servers. How much of Airtable's AI and app-building side you get for free differs sharply between the projects below.

## How to choose

| | [Baserow](/apps/baserow/) | [Teable](/apps/teable/) | [Grist](/apps/grist/) |
|---|---|---|---|
| Model | No-code database and apps | Spreadsheet-style database | Relational spreadsheet |
| Storage | PostgreSQL | PostgreSQL | SQLite file per document |
| Formulas | Spreadsheet formulas | Spreadsheet formulas | Python and Excel-style |
| Apps on top | Application builder | Paid AI App Builder | Linked widgets and dashboards |
| Licence | MIT core, premium and enterprise directories | AGPL-3.0 core, paid features in the image | Apache-2.0 core, proprietary extras |

- **Replacing Airtable for a whole team?** Baserow.
- **Want to query the same tables with SQL, at scale?** Teable.
- **Coming from spreadsheets and want formulas you can trust?** Grist.

## Not listed and why

- **NocoDB** describes itself as a free and self-hostable Airtable alternative, but its code is under the Sustainable Use License, which is source-available, not open source.
- **APITable**, now AITable, is AGPL-3.0 but its public repository receives changes in occasional batches — a gap from January to late July 2026 — so it is left out until development there is steady.
- **NocoBase** is a no-code platform whose licence adds restrictions, including on offering it as a hosted service, on top of Apache-2.0, so it is not open source.

For forms that feed these databases, see [open-source Typeform alternatives](/collections/open-source-typeform-alternatives/). For internal tools on top of your data, see [open-source Retool alternatives](/collections/open-source-retool-alternatives/).
