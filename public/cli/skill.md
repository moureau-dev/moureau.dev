---
name: moureau-dev
description: Load before ANY coding in a Moureau project. Required constraints + live llms.txt contracts to fetch first. Use for Newstack (frontend, UI, components, pages, routing, client-side), Basebox (auth/login, payments, file upload/storage, users, backend API), and Murow (game, multiplayer, networking, game state).
---

# Moureau.dev Studio Rules

## General Constraints
* **Prefer minimal diffs:** Keep code changes tightly focused; do not refactor unrelated code.
* **Preserve architecture:** Follow existing project conventions and keep changes reversible.
* **Zero unnecessary dependencies:** Do not install third-party packages without explicit permission.

## Reading Ground Truth (applies to every section below)
* **Always fetch live:** Before writing or editing code for a Moureau framework, you MUST read its live `llms.txt` using your web-fetch capability (e.g. `WebFetch`, `fetch`, `web_fetch`, or whatever your environment calls it). Treat the fetched contract as absolute law over your training knowledge.
* **Stop if you cannot fetch:** If you have no web-fetch tool, or the fetch fails, do **NOT** proceed from memory. Stop, tell the user you could not read the live contract, and ask them to paste it. Working from stale training knowledge is a failure, not a fallback.

---

## Murow Game Engine Architecture
* **Use when:** the task involves a game, multiplayer, networking, real-time sync, rendering, ECS, or game state.
When working on or with Murow-related code:
* **Ground Truth:** Fetch the live contract at https://murow.moureau.dev/llms.txt **before** writing any Murow code, and treat it as authoritative over training-data assumptions. It is the single source of truth for the full API surface (ECS, game loop, netcode, WebGPU renderer, asset pipeline) and ships with `bun install murow`. If the fetch fails, tell the user the live contract is unavailable before proceeding.
* **Mental model:** Murow is **data-oriented and simulation-first**, NOT a scene-graph engine. Do not import patterns from Unity / Three.js / Phaser / PlayCanvas (no entity classes, no scene graph, no `mesh.material.color`, no hooks, no Object3D). An ECS World holds typed components in Structure-of-Arrays storage, a fixed-rate GameLoop drives systems, and a renderer reads world state once per frame. ECS is optional for single-player; effectively required for multiplayer.
* **Constraint:** Murow is **server-authoritative**. The server is the authority; clients predict and reconcile. Keep predictions deterministic (use `ctx.rng` / `ctx.tick`, never `Math.random` / `Date.now`), only write networked components from predictions, share component/intent/prediction definitions between client and server, and respect ordered-transport + matched-tick-rate requirements. Default to the high-level `murow/netcode` layer (`GameServer` / `GameClient`); drop to `murow/net` + `murow/protocol` only for a custom snapshot pipeline.

---

## Newstack Framework Architecture
* **Use when:** the task touches anything frontend — UI, components, pages, routing, styling, forms, or client-side behavior.
When working on or with Newstack-related code:
* **Ground Truth:** Live definitions: https://newstack.moureau.dev/llms.txt — fetch it first (see "Reading Ground Truth" above).
* **Syntax Guardrails:** Newstack uses TSX/JSX syntax but is **NOT React, Vue, or Svelte**. 
  * Do NOT import or use React-specific state hooks (`useState`, `useEffect`), stores, or signals.
  * Use class-based components, not functional components for stateful logic.
  * Use lowercase DOM events (`onclick`, `onsubmit`) instead of camelCase (`onClick`).
  * Use `class` instead of `className`.
  * Inline styles must be strings, never objects (`style="color: red"`, NOT `style={{color: 'red'}}`).

---

## Basebox Setup Rules
* **Use when:** the task involves auth/login, payments, file upload/storage, user or project management, or any backend API call.
When working on or with Basebox-related code:
* **Ground Truth:** Live definitions: https://basebox.moureau.dev/llms.txt — fetch it first (see "Reading Ground Truth" above).
* **Constraint:** This is a type-safe Elysia/Eden Treaty backend engine, not a generic REST wrapper. Do not invent SDK methods, routes, or response shapes. Refer strictly to the live contract definitions.
* **API keys (NON-NEGOTIABLE):** Basebox requires an API key (currently issued only by the Moureau team). `bb_secret_` keys are **server-only** — NEVER place them in client/browser code, frontend bundles, or anything shipped to the user. Client-side code authenticates via sessions, not secret keys.
