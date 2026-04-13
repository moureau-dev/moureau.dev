---
title: A Sovereign Stack: The Metal-Up Manifesto
date: 2026-04-13
excerpt: Why Moureau Development builds its own stack instead of relying on standard abstractions.
---

Most modern web stacks trade performance and control for convenience. 

> But well... At **Moureau Development**, we don't.

As a **Venture Studio** designed for technical sovereignty, we build our own infrastructure and run everything on it. Not for novelty, but to remove external constraints and move faster when it matters.

## The Stack

We operate on a set of internal tools designed to work together:

* **Newstack**: A reactive framework for SPA, SSG, and SSR. It uses a dependency-free core and Hono for SSR routing and edge delivery. The goal is simple: fast builds and minimal runtime overhead.
* **Basebox**: Our deployment layer and complete BaaS. It standardizes how projects are shipped and scaled.
* **Murow**: A multiplayer engine with a server-authoritative ECS and a WebGPU renderer.
* **Broto**: An internal toolchain and product that takes a SaaS from zero to production in **minutes**.

## Why Build Everything?

The usual argument is that building your own tools wastes time. That's true if the tools aren't central to what you do.

For us, they are.

Owning the stack means:
- Fixing problems immediately instead of waiting on dependencies
- Understanding performance at every layer
- Keeping systems aligned instead of adapting to external decisions

We use our own tools every day. If something breaks or slows us down, we fix it at the source.

## What This Blog Is

This is where we document the work:

- Implementation details (WebGPU, multiplayer systems)
- Benchmarks against existing tools
- Notes on running a studio built on custom infrastructure

Simply what works and what doesn't.

---

**The infrastructure is in place. Now we use it.**