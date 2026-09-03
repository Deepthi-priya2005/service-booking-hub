---
name: Workspace package names
description: The pnpm workspace filters and managed artifact workflows depend on the @workspace package namespace.
---

Keep every artifact package name under the `@workspace/` namespace, even when the artifact itself uses a non-React framework. A package name outside that namespace can make the configured `pnpm --filter @workspace/<slug>` workflow report that no projects matched.

**Why:** Managed workflows target the workspace package name rather than the directory name alone.

**How to apply:** When adapting an artifact scaffold, preserve or restore the `@workspace/<slug>` package name before restarting its workflow.