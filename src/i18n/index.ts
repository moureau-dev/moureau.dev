export type Lang = "en" | "es-ES";

export const SUPPORTED_LANGS = ["es-ES"] as const satisfies readonly Lang[];

interface Product {
  tag: string;
  description: string;
}

interface Pillar {
  label: string;
  description: string;
}

interface Topic {
  title: string;
  tag: string;
  description: string;
}

export interface Translations {
  meta: {
    home: { title: string; description: string };
    about: { title: string; description: string };
    blog: { title: string; description: string };
    meet: { title: string; description: string };
    broto: { title: string; description: string };
  };
  nav: {
    about: string;
    blog: string;
    contact: string;
  };
  broto: {
    tag: string;
    name: string;
    subtitle: string;
    subtitle2: string;
    team: {
      label: string;
    };
    info: {
      label: string;
      description: string;
      p2: string;
      p3: string;
    };
    cta: {
      title: string;
      description: string;
      button: string;
    };
    contact: {
      label: string;
      description: string;
      button: string;
    };
  };
}
