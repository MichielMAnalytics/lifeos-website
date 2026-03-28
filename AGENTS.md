<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- azin:start -->
## Azin

This project uses Azin as its cloud platform. The Azin CLI is called Zin (`zin`). The CLI is self-contained — no web console needed.

**To deploy from scratch, use the `/zin-setup` skill.** It guides the full flow: signup → connect GitHub → create project → analyze repo → create services → configure → deploy. For subsequent deploys use `/zin-deploy`. For diagnostics use `/zin-status` and `/zin-fix`.

### Quick reference

**Account:** `zin signup` (new account) · `zin login --browser` (returning user) · `zin apikey create <name> --deploy` (API key with deploy permission) · `zin whoami` (check current user)

**Connectors:** `zin connector github` (required for repo-based deploys) · `zin connector gcp` (only needed on paid plans — Hobby plan uses shared infrastructure) · `zin connector list`

**Project flow:** `zin project create --name "My App"` → `zin init -p <slug>` (link repo) → `zin service create app --repo <id>` → `zin endpoint add <svc> --protocol http --port <port>` → `zin deploy -e production`

### Platform model

Azin organizes work as **projects > environments > services**. All service changes are **staged** (preview) until you run `zin deploy`.

**Service types:** App (container), Database (managed Postgres/MySQL), Cache (Redis/Valkey), Volume, StorageBucket, ScheduledTask, BackgroundJob.

**How variables reach a running container** (App, ScheduledTask, BackgroundJob only):
- **Service env vars** (`zin service set env <name> --var K=V`) — static key-value pairs stored on the service, injected at deploy time.
- **Secret bindings** (`zin service bind-secret <name> --secret <id> --env <VAR>`) — references to secrets in GCP Secret Manager, injected at runtime.
- **Connections** (`zin connect add --from <svc> --to <target> --env <VAR> --output <field>`) — auto-resolved values from other services (database URL, cache host, app private URL).

**What does NOT inject into containers:**
- `zin env set/list` manages **environment-scope** variables for .env file workflows (`zin env pull/push`). These are not injected into service containers.

**Staged vs deployed:** `zin service get` shows the **projected** state (deployed + pending changes merged). Check the `_state` field in `--json` output to distinguish pending from deployed. `zin changes list` shows what will change on the next deploy. `zin service status` shows live runtime state (pod health, restarts).

Run `zin --help` and `zin <command> --help` to discover all available commands and options.
<!-- azin:end -->
