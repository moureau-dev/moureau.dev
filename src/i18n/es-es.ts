import type { Translations } from ".";

export const esEs: Translations = {
  meta: {
    home: {
      title: "Moureau Development",
      description: "un estudio de tecnología y ventures ágil y moderno.",
    },
    about: {
      title: "Sobre — Moureau Development",
      description:
        "Moureau Development es un estudio de ventures verticalmente integrado que conecta América Latina y Europa.",
    },
    blog: {
      title: "Blog — Moureau Development",
      description:
        "Notas sobre tecnología, arquitectura y construcción desde cero.",
    },
  },
  nav: {
    about: "sobre",
    blog: "blog",
    contact: "contacto",
  },
  home: {
    subtitle: "un estudio de tecnología y ventures ágil y moderno.",
    toolings: {
      label: "herramientas",
      title: "El Stack Propietario",
      newstack: {
        tag: "Framework Web",
        description:
          "Un framework full-stack donde el código del servidor y del cliente viven en la misma clase de componente, sin capa de API que definir o mantener por separado. La reactividad basada en proxies actualiza la UI automáticamente, los métodos estáticos asíncronos se convierten en endpoints RPC en tiempo de compilación, y la prop bind={} conecta los inputs al estado en ese mismo paso. Soporta SSR, SPA y SSG desde el mismo código, con service workers, manifiestos PWA y fingerprinting de assets incluidos. Cada producto del estudio corre sobre él, incluido este sitio. Una re-lectura directa de Nullstack, reconstruida solo con ESBuild y Hono.",
      },
      basebox: {
        tag: "Infraestructura",
        description:
          "El BaaS interno que impulsa todo lo que lanza el estudio. Cada producto sobre él obtiene gestión multi-tenant, autenticación OAuth y por sesión, procesamiento de suscripciones y pagos, almacenamiento con CDN y componentes UI inyectables desde el primer día. Contabilly, Entregou.ai, Broto y las apps que genera corren como tenants compartiendo la misma capa de auth, los mismos rieles de pago y el mismo almacenamiento, sin reimplementar nada por proyecto.",
      },
      murow: {
        tag: "Motor Multijugador",
        description:
          "Un motor de juego TypeScript open-source que toma el multijugador en serio desde cero. El renderer corre sobre WebGPU y cubre 2D y 3D, con carga de glTF, animación esquelética con crossfading y cómputo GPU para física sin copia en memoria. El networking es agnóstico al transporte y se basa en codificación delta binaria de snapshots, predicción del lado del cliente y un sistema RPC e intent con tipos seguros. Incluye también un ECS con almacenamiento SoA y consultas bitmask, pathfinding NavMesh con obstáculos dinámicos y un game loop determinista de tasa fija. Cada hot path es zero-allocation por diseño, manteniendo los tiempos de frame consistentes con cualquier cantidad de jugadores.",
      },
    },
    products: {
      label: "productos",
      title: "Ventures",
      broto: {
        tag: "IA",
        description:
          "Envía una idea y obtén un SaaS en vivo con autenticación, pagos, panel de administración, back-end personalizado, landing page y una app lista para producción en menos de 15 minutos. La IA se encarga de todo hasta el deployment. Y conservas el 100% de todos los ingresos que genera tu app.",
      },
      entregou: {
        tag: "Logística",
        description:
          "Crea una tienda online sin configuración, sin contrato y sin tarifa de implementación. Rápida, colaborativa, multi-tienda, con roles, cupones y pagos integrados. Presentada en WebSummit Rio 2025, donde atrajo la atención de medios locales e inversores de capital de riesgo.",
      },
      contabilly: {
        tag: "Finanzas",
        description:
          "Plataforma de contabilidad digital para desarrolladores que trabajan en el exterior y en Brasil. Un equipo dedicado gestiona tus facturas, guías de pago y cumplimiento fiscal, con la plataforma automatizando lo que normalmente implica ir y venir manualmente con un contador.",
      },
    },
  },
  about: {
    intro: {
      text1:
        "Moureau Development es un estudio de ventures verticalmente integrado que opera como un puente de alto rendimiento entre ",
      highlight1: "América Latina y Europa",
      text2: ". Con presencia tanto en ",
      highlight2: "Brasil como en España",
      text3:
        ', el estudio aprovecha una perspectiva internacional para construir tecnología desde la base que evita las ineficiencias de la web moderna.',
      p2: "La ventaja competitiva del estudio reside en su ecosistema propietario y sin dependencias externas, que permite una soberanía arquitectónica total.",
    },
    stack: {
      title: "El Stack Propietario",
      basebox: {
        tag: "Capa de Infraestructura",
        description:
          'La columna vertebral unificada del estudio. Proporciona la "fontanería" esencial para cada proyecto—incluyendo autenticación, gestión de organizaciones multi-tenant, integración de pagos y alojamiento de activos estáticos—garantizando que cada producto comience sobre una base lista para producción.',
      },
      newstack: {
        tag: "Framework Web",
        description:
          "Un framework isomórfico sin dependencias diseñado para eliminar la sobrecarga de los DOM virtuales tradicionales. Mediante reactividad basada en proxies, logra tiempos de compilación de 100ms y soporta SPA, SSG y SSR, priorizando la velocidad extrema y el control del desarrollador.",
      },
      murow: {
        tag: "Motor Multijugador",
        description:
          "Un motor con autoridad en el servidor diseñado para sincronización en tiempo real. Utiliza ECS y WebGPU para gestionar entornos multijugador de alta concurrencia, tratando el rendimiento como una característica central y no como una ocurrencia tardía.",
      },
      broto: {
        tag: "El Generador",
        description:
          "Un motor de despliegue SaaS que utiliza Basebox y Newstack para transformar una idea en una aplicación desplegada en menos de 15 minutos.",
      },
    },
    identity: {
      title: "Identidad Estratégica",
      subtitle: "Corredor Brasil–España · Curitiba × Madrid",
      techPurism: {
        label: "Purismo Técnico",
        description:
          'Rechazando el "exceso web" en favor de herramientas construidas a medida en Zig, Go y TypeScript.',
      },
      commercialization: {
        label: "Comercialización Rápida",
        description:
          "Usando el stack interno (Newstack + Basebox) para reducir drásticamente el tiempo de salida al mercado de nuevas iniciativas.",
      },
      consultancy: {
        label: "Consultoría Especializada",
        description:
          "Ofreciendo servicios arquitectónicos de alto nivel a clientes que requieren experiencia en multijugador u optimización de bajo nivel.",
      },
    },
    vision: {
      title: "La Visión",
      text1: "Moureau Development no es solo una software house; es una ",
      highlight: "fábrica de tecnología",
      text2:
        ". Al poseer todo, desde la infraestructura (Basebox) hasta el framework (Newstack) y un motor de juego completo (Murow), el estudio garantiza que cada producto sea más ágil, rápido y escalable que cualquier cosa construida sobre abstracciones de terceros estándar.",
    },
  },
  blog: {
    intro:
      "Notas sobre construcción desde cero — decisiones de arquitectura, lecciones de la stack y el razonamiento detrás de poseer cada capa.",
    backToBlog: "← blog",
    notFound: "Artículo no encontrado.",
  },
};
