---
name: Angular publishing
description: Angular static artifacts need a non-interactive CLI build and a flat browser output directory.
---

For Angular static publishing, use the official Angular CLI build path with analytics disabled, and configure the application builder to place browser files directly in the configured public directory. This avoids Vite adapter compiler failures, interactive analytics prompts, and nested browser output that static hosting will not serve.

For Angular CLI's Vite-backed development server, configure Replit hostnames through the `serve.options.allowedHosts` array in angular.json. A legacy vite.config.ts may exist but is not used by `ng serve`.

**Why:** The publishing environment performs a clean non-interactive install and serves the artifact public directory as-is.

**How to apply:** Validate with a clean pnpm install and the exact artifact build command before asking the user to publish.