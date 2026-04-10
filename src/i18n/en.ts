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
