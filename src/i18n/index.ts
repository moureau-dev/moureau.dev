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

export interface Translations {
  meta: {
    home: { title: string; description: string };
    about: { title: string; description: string };
    blog: { title: string; description: string };
  };
  nav: {
    about: string;
    blog: string;
    contact: string;
  };
  home: {
    subtitle: string;
    toolings: {
      label: string;
      title: string;
      newstack: Product;
      basebox: Product;
      murow: Product;
    };
    products: {
      label: string;
      title: string;
      broto: Product;
      entregou: Product;
      contabilly: Product;
    };
  };
  about: {
    intro: {
      text1: string;
      highlight1: string;
      text2: string;
      highlight2: string;
      text3: string;
      p2: string;
    };
    stack: {
      title: string;
      basebox: Product;
      newstack: Product;
      murow: Product;
      broto: Product;
    };
    identity: {
      title: string;
      subtitle: string;
      techPurism: Pillar;
      commercialization: Pillar;
      consultancy: Pillar;
    };
    vision: {
      title: string;
      text1: string;
      highlight: string;
      text2: string;
    };
  };
  blog: {
    intro: string;
    backToBlog: string;
    notFound: string;
  };
}
