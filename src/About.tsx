/* ---------- External ---------- */
import Newstack, { type NewstackClientContext } from "@moureau/newstack";
import { Navbar } from "./components/Navbar";

export class About extends Newstack {
  /* ---------- Lifecycle ---------- */
  prepare({ page }: NewstackClientContext) {
    page.title = "About — Moureau Development";
    page.description =
      "Moureau Development is a vertically integrated venture studio bridging Latin America and Europe.";
  }

  /* ---------- Render Methods ---------- */
  renderIntro() {
    return (
      <section class="mb-16">
        <p class="text-lg text-fg-muted leading-relaxed max-w-2xl">
          Moureau Development is a vertically integrated venture studio that
          operates as a high-performance bridge between{" "}
          <span class="text-[#f9f9f9] font-medium">
            Latin America and Europe
          </span>
          . By maintaining a presence in both{" "}
          <span class="text-[#f9f9f9] font-medium">Brazil and Spain</span>, the
          studio leverages an international perspective to build "metal-up"
          technology that bypasses the inefficiencies of the modern web.
        </p>
        <p class="mt-4 text-lg text-fg-muted leading-relaxed max-w-2xl">
          The studio's competitive edge lies in its proprietary, zero-dependency
          ecosystem, which allows for total architectural sovereignty.
        </p>
      </section>
    );
  }

  renderStack() {
    const products = [
      {
        name: "Basebox",
        tag: "Infrastructure Layer",
        description:
          'The studio\'s unified backbone. It provides the essential "plumbing" for every project—including authentication, multi-tenant organization management, payment integration, and static asset hosting—ensuring that every product starts on a production-ready foundation.',
      },
      {
        name: "Newstack",
        tag: "Web Framework",
        description:
          "An isomorphic, zero-dependency framework designed to eliminate the overhead of traditional virtual DOMs. By using proxy-based reactivity, it achieves 100ms build times and supports SPA, SSG, and SSR, prioritizing extreme speed and developer control.",
      },
      {
        name: "Murow",
        tag: "Multiplayer Engine",
        description:
          "A server-authoritative engine built for real-time synchronization. It uses ECS and WebGPU to handle high-concurrency multiplayer environments, treating performance as a core feature rather than an afterthought.",
      },
      {
        name: "Broto",
        tag: "The Generator",
        description:
          "A SaaS deployment engine that utilizes Basebox and Newstack to transform an idea into a deployed application in under 15 minutes.",
      },
    ];

    return (
      <section class="mb-16">
        <h2 class="font-mono text-xs uppercase tracking-widest text-[#fc51a6] mb-6">
          The Proprietary Stack
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {products.map((p) => (
            <div class="border border-[#262626] rounded-lg p-5 flex flex-col gap-2 hover:border-[#fc51a6]/30 transition-colors duration-200">
              <div class="flex items-baseline gap-2 flex-wrap">
                <span class="font-mono font-bold text-[#f9f9f9]">{p.name}</span>
                <span class="text-xs text-[#fc51a6] font-mono">{p.tag}</span>
              </div>
              <p class="text-sm text-fg-muted leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  renderIdentity() {
    const pillars = [
      {
        label: "Technical Purism",
        description:
          'Rejecting "web bloat" in favor of custom-built tools in Zig, Go, and TypeScript.',
      },
      {
        label: "Rapid Commercialization",
        description:
          "Using the internal stack (Newstack + Basebox) to drastically reduce time-to-market for new ventures.",
      },
      {
        label: "Specialized Consultancy",
        description:
          "Offering high-level architectural services to clients who require multiplayer expertise or low-level performance optimization.",
      },
    ];

    return (
      <section class="mb-16">
        <h2 class="font-mono text-xs uppercase tracking-widest text-[#fc51a6] mb-2">
          Strategic Identity
        </h2>
        <p class="text-fg-muted text-sm font-mono mb-6">
          Brazil–Spain Corridor · Curitiba × Madrid
        </p>
        <ul class="flex flex-col gap-4 list-none m-0 p-0">
          {pillars.map((p) => (
            <li class="flex gap-3 items-start">
              <div class="mt-[0.4rem] shrink-0 w-1.5 h-1.5 rounded-full bg-[#fc51a6]" />
              <div>
                <span class="font-mono font-bold text-[#f9f9f9] text-sm">
                  {p.label}:{" "}
                </span>
                <span class="text-fg-muted text-sm">{p.description}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  renderVision() {
    return (
      <section class="border-t border-[#262626] pt-10 pb-24">
        <h2 class="font-mono text-xs uppercase tracking-widest text-[#fc51a6] mb-4">
          The Vision
        </h2>
        <p class="text-fg-muted leading-relaxed max-w-2xl">
          Moureau Development isn't just a software house; it is a{" "}
          <span class="text-[#f9f9f9] font-medium">technology factory</span>.
          By owning everything from the infrastructure (Basebox) to the
          framework (Newstack) and the full game engine (Murow), the studio
          ensures that every product is leaner, faster, and more scalable than
          anything built on standard third-party abstractions.
        </p>
      </section>
    );
  }

  render() {
    return (
      <main class="bg-[#101010] text-[#f9f9f9] min-h-screen flex flex-col">
        <Navbar />

        <div class="container mx-auto mt-14 px-4">
          <div class="pt-16 pb-8 motion-safe:animate-fade-in motion-safe:animate-fill-both">
            <h1 class="font-mono text-4xl sm:text-5xl font-bold mb-4">
              About
            </h1>
            <div class="w-12 h-0.5 bg-[#fc51a6] mb-10" />
          </div>

          {this.renderIntro()}
          {this.renderStack()}
          {this.renderIdentity()}
          {this.renderVision()}
        </div>
      </main>
    );
  }
}
