import type { Translations } from ".";

export const en: Translations = {
  meta: {
    home: {
      title: "Moureau Development",
      description: "a fast-moving, modern tech & venture studio.",
    },
    about: {
      title: "About — Moureau Development",
      description:
        "Moureau Development is a vertically integrated venture studio bridging Latin America and Europe.",
    },
    blog: {
      title: "Blog — Moureau Development",
      description:
        "Thoughts on technology, architecture, and building from the ground up.",
    },
  },
  nav: {
    about: "about",
    blog: "blog",
    contact: "contact",
  },
  home: {
    subtitle: "a fast-moving, modern tech & venture studio.",
    toolings: {
      label: "toolings",
      title: "The Proprietary Stack",
      newstack: {
        tag: "Web Framework",
        description:
          "A full-stack framework where server and client code live in the same component class, with no API layer to define or maintain separately. Proxy-based reactivity drives re-renders automatically, static async methods become RPC endpoints at build time, and the bind={} prop wires form inputs to component state at compile time. It supports SSR, SPA, and SSG from the same codebase, with service workers, PWA manifests, and asset fingerprinting handled out of the box. Every product in the studio runs on it, including this website. A direct re-reading of Nullstack rebuilt with only ESBuild and Hono.",
      },
      basebox: {
        tag: "Infrastructure",
        description:
          "The internal BaaS that powers everything the studio ships. Every product built on it gets multi-tenant organization management, OAuth and session-based authentication, subscription and payment processing, file storage with CDN delivery, and a set of injectable UI components out of the box. Contabilly, Entregou.ai, Broto and its generated apps all run on it as tenants, sharing the same auth, the same payment rails, and the same storage layer without any of that being re-implemented per project.",
      },
      murow: {
        tag: "Multiplayer Engine",
        description:
          "An open-source TypeScript game engine that takes multiplayer seriously from the ground up. The renderer runs on WebGPU and covers both 2D and 3D, with glTF loading, skeletal animation with crossfading, and GPU compute for zero-copy physics. Networking is transport-agnostic and built around binary snapshot delta encoding, client-side prediction, and a type-safe RPC and intent system. It also has an ECS with Structure of Arrays storage and bitmask queries, NavMesh pathfinding with dynamic obstacles, and a deterministic fixed-rate game loop. Every hot path is zero-allocation by design, keeping frame times consistent at any player count.",
      },
    },
    products: {
      label: "products",
      title: "Ventures",
      broto: {
        tag: "AI",
        description:
          "Submit an idea and get a live SaaS with authentication, payments, admin panel, custom back-end, landing page and a production-ready app in under 15 minutes. AI will handle everything up to deployment. And keep 100% of all revenue your app makes.",
      },
      entregou: {
        tag: "Logistics",
        description:
          "Create an online shop with no setup, no contract, and no implementation fee. Quick, collaborative, multi-store, with roles, coupons, and payments built in. Presented at WebSummit Rio 2025, where it drew attention from local media and VC investors.",
      },
      contabilly: {
        tag: "Finance",
        description:
          "Digital accounting platform for developers working abroad and in Brazil. A dedicated team manages your invoices, payment guides, and tax compliance, with the platform automating what usually is manual back-and-forth with an accountant.",
      },
    },
  },
  about: {
    intro: {
      text1:
        "Moureau Development is a vertically integrated venture studio that operates as a high-performance bridge between ",
      highlight1: "Latin America and Europe",
      text2: ". By maintaining a presence in both ",
      highlight2: "Brazil and Spain",
      text3:
        ', the studio leverages an international perspective to build "metal-up" technology that bypasses the inefficiencies of the modern web.',
      p2: "The studio's competitive edge lies in its proprietary, zero-dependency ecosystem, which allows for total architectural sovereignty.",
    },
    stack: {
      title: "The Proprietary Stack",
      basebox: {
        tag: "Infrastructure Layer",
        description:
          'The studio\'s unified backbone. It provides the essential "plumbing" for every project—including authentication, multi-tenant organization management, payment integration, and static asset hosting—ensuring that every product starts on a production-ready foundation.',
      },
      newstack: {
        tag: "Web Framework",
        description:
          "An isomorphic, zero-dependency framework designed to eliminate the overhead of traditional virtual DOMs. By using proxy-based reactivity, it achieves 100ms build times and supports SPA, SSG, and SSR, prioritizing extreme speed and developer control.",
      },
      murow: {
        tag: "Multiplayer Engine",
        description:
          "A server-authoritative engine built for real-time synchronization. It uses ECS and WebGPU to handle high-concurrency multiplayer environments, treating performance as a core feature rather than an afterthought.",
      },
      broto: {
        tag: "The Generator",
        description:
          "A SaaS deployment engine that utilizes Basebox and Newstack to transform an idea into a deployed application in under 15 minutes.",
      },
    },
    identity: {
      title: "Strategic Identity",
      subtitle: "Brazil–Spain Corridor · Curitiba × Madrid",
      techPurism: {
        label: "Technical Purism",
        description:
          'Rejecting "web bloat" in favor of custom-built tools in Zig, Go, and TypeScript.',
      },
      commercialization: {
        label: "Rapid Commercialization",
        description:
          "Using the internal stack (Newstack + Basebox) to drastically reduce time-to-market for new ventures.",
      },
      consultancy: {
        label: "Specialized Consultancy",
        description:
          "Offering high-level architectural services to clients who require multiplayer expertise or low-level performance optimization.",
      },
    },
    vision: {
      title: "The Vision",
      text1:
        "Moureau Development isn't just a software house; it is a ",
      highlight: "technology factory",
      text2:
        ". By owning everything from the infrastructure (Basebox) to the framework (Newstack) and a full game engine (Murow), the studio ensures that every product is leaner, faster, and more scalable than anything built on standard third-party abstractions.",
    },
  },
  blog: {
    intro:
      "Notes on building from the ground up — architecture decisions, lessons from the stack, and the thinking behind owning every layer.",
    backToBlog: "← blog",
    notFound: "Post not found.",
  },
};
