## What Firebase does, and what an alternative has to match

Firebase is Google's hosted backend for web and mobile apps: authentication, document databases, file storage, cloud functions, hosting, messaging and realtime sync, reached through client SDKs. An open-source alternative has to give an app the same building blocks — sign-in, data, files and live updates — from a server you run. None of the three below copies Firebase one-to-one; they differ most in the database underneath and in how much you have to operate.

## How to choose

| | [Supabase](/apps/supabase/) | [Appwrite](/apps/appwrite/) | [PocketBase](/apps/pocketbase/) |
|---|---|---|---|
| Database | PostgreSQL | Appwrite databases, managed PostgreSQL or MySQL | SQLite |
| Services | Auth, REST and GraphQL APIs, realtime, functions, storage, vectors | Auth, databases, storage, functions, sites, messaging, realtime | Auth, database, files, realtime |
| Self-host | Docker Compose; fewer features than hosted | One Docker install command | One executable |
| Licence | Apache-2.0 | BSD-3-Clause | MIT |
| Since | 2019 | 2019 | 2022 |

- **Want relational data and SQL?** Supabase.
- **Want the most services, including hosting and messaging?** Appwrite.
- **Small app, one server, minimal operations?** PocketBase.

## Not listed and why

- **Client SDKs and libraries** that talk to Firebase-style backends are not applications and are left out.
- **Hosted-only backend services** are out of scope: every pick here can run on your own server.

For identity on its own — single sign-on across many apps — see [Keycloak](/apps/keycloak/). More tools for builders are under [Developer tools](/categories/developer-tools/).
