/* ---------- External ---------- */
import Newstack, { type NewstackClientContext } from "@moureau/newstack";
import { getT } from "./i18n/detect";
import type { Translations } from "./i18n";
import { Linkedin } from "./components/icons/Linkedin";
import { Email } from "./components/icons/Email";
import { Github } from "./components/icons/Github";

/**
 * @description
 * This is the Home page of the Newstack example application.
 * It demonstrates a simple interactive component with a counter.
 */
export class Home extends Newstack {
  /* ---------- Proxies ---------- */
  count = 0;

  /* ---------- Lifecycle ---------- */
  prepare({ page, router }: NewstackClientContext) {
    const t = getT(router.path);
    page.title = t.meta.home.title;
    page.description = t.meta.home.description;
  }

  renderToolings(t: Translations) {
    const tools = [
      {
        id: "newstack",
        name: "newstack",
        num: "01",
        github: "moureau-dev/newstack",
        ...t.home.toolings.newstack,
      },
      {
        id: "basebox",
        name: "basebox",
        num: "02",
        github: null,
        ...t.home.toolings.basebox,
      },
      {
        id: "murow",
        name: "murow",
        num: "03",
        github: "moureau-dev/murow",
        ...t.home.toolings.murow,
      },
    ];

    return (
      <section class="py-16 md:py-24 border-t border-white/6">
        <header class="mb-10 md:mb-14">
          <p class="font-mono text-xs text-[#fc51a6] uppercase tracking-widest mb-3">
            {t.home.toolings.label}
          </p>
          <h2 class="font-mono text-2xl md:text-3xl lg:text-4xl font-medium">
            {t.home.toolings.title}
          </h2>
        </header>

        <div class="flex flex-col">
          {tools.map((tool) => (
            <div
              id={tool.id}
              class="group border-b border-white/6 py-8 md:py-12 flex flex-col md:flex-row md:items-start gap-5 md:gap-16 hover:bg-[#fc51a6]/1.5 -mx-4 md:-mx-8 px-4 md:px-8 transition-colors duration-500"
            >
              <div class="md:w-52 shrink-0">
                <div class="flex items-center gap-2 mb-2">
                  <span class="font-mono text-xs text-white/20">{tool.num}</span>
                  <p class="font-mono text-xs text-[#fc51a6]/60 uppercase tracking-widest">
                    {tool.tag}
                  </p>
                </div>
                <h3 class="font-mono text-2xl md:text-3xl font-medium group-hover:text-[#fc51a6] transition-colors duration-300 mb-3">
                  {tool.name}
                </h3>
                {tool.github && (
                  <a
                    href={`https://github.com/${tool.github}`}
                    target="_blank"
                    class="inline-flex items-center gap-1 font-mono text-xs text-white/25 hover:text-[#fc51a6] transition-colors duration-200"
                  >
                    ↗ github
                  </a>
                )}
              </div>

              <p class="text-[#adadad] text-sm md:text-base leading-relaxed md:pt-1 flex-1 max-w-xl">
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  renderProducts(t: Translations) {
    const products = [
      {
        id: "broto",
        name: "broto",
        live: true,
        github: null,
        ...t.home.products.broto,
      },
      {
        id: "entregou.ai",
        name: "entregou.ai",
        live: true,
        github: null,
        ...t.home.products.entregou,
      },
      {
        id: "contabilly",
        name: "contabilly",
        live: true,
        github: null,
        ...t.home.products.contabilly,
      },
    ];

    return (
      <section class="py-16 md:py-24 border-t border-white/6">
        <header class="mb-10 md:mb-14">
          <p class="font-mono text-xs text-[#fc51a6] uppercase tracking-widest mb-3">
            {t.home.products.label}
          </p>
          <h2 class="font-mono text-2xl md:text-3xl lg:text-4xl font-medium">
            {t.home.products.title}
          </h2>
        </header>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {products.map((p) => (
            <div
              id={p.id}
              class="group relative border border-white/[0.07] rounded-2xl p-6 md:p-8 hover:border-[#fc51a6]/35 transition-all duration-500 hover:bg-[#fc51a6]/2.5 flex flex-col"
            >
              <div class="flex items-center justify-between mb-5">
                <p class="font-mono text-xs text-[#fc51a6]/60 uppercase tracking-widest">
                  {p.tag}
                </p>

                {p.id === "broto" ? (
                  <span class="font-mono text-[10px] px-2.5 py-1 rounded-full border border-amber-500/30 text-amber-400 bg-amber-500/10">
                    demo
                  </span>
                ) : p.live ? (
                  <span class="font-mono text-[10px] px-2.5 py-1 rounded-full border border-emerald-500/30 text-emerald-400 bg-emerald-500/10">
                    live
                  </span>
                ) : (
                  <span class="font-mono text-[10px] px-2.5 py-1 rounded-full border border-white/10 text-white/25 bg-white/4">
                    soon
                  </span>
                )}
              </div>

              <h3 class="font-mono text-xl md:text-2xl font-medium mb-4 group-hover:text-[#fc51a6] transition-colors duration-300">
                {p.name}
              </h3>
              <p class="text-[#adadad] text-sm md:text-base leading-relaxed flex-1">
                {p.description}
              </p>

              {p.github && (
                <a
                  href={`https://github.com/${p.github}`}
                  target="_blank"
                  class="inline-flex items-center gap-1 font-mono text-xs text-white/25 hover:text-[#fc51a6] transition-colors duration-200 mt-5"
                >
                  ↗ github
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    );
  }

  renderProductList() {
    const products = [
      "broto",
      "basebox",
      "murow",
      "newstack",
      "entregou.ai",
      "contabilly",
      "murow vault",
    ];

    return (
      <nav class="pt-2 pb-16 md:pt-4 md:pb-36 text-center motion-safe:animate-fade-in motion-safe:animate-fill-both max-w-lg mx-auto">
        <ul class="flex flex-wrap items-center justify-center gap-x-3 md:gap-x-6 gap-y-3 list-none m-0 p-0">
          {products.map((p) => (
            <li>
              <a
                href={`#${p.replace(/\s/g, "-")}`}
                class="group/link gap-x-1 items-center inline-flex underline-offset-[0.2rem] underline decoration-1 font-mono"
              >
                <div class="bg-[#fc51a6] w-1 h-1 rounded-full bg-accent group-hover:bg-fg transition-colors duration-200" />{" "}
                {p}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  renderHero({ router }: Partial<NewstackClientContext>) {
    const t = getT(router.path);

    return (
      <div class="flex flex-col items-center">
        <div class="font-mono text-5xl lg:text-7xl uppercase relative mb-4">
          <div class="font-medium">
            <span class="font-light text-[90%] align-top">
              .<span class="text-[#fc51a6]">/</span>
            </span>
            Moureau
          </div>

          <sub class="absolute text-sm lg:text-lg font-bold text-center -bottom-4 right-0 text-[#fc51a6]">
            Development
          </sub>
        </div>

        <p class="text-fg-muted md:text-lg sm:text-xl max-w-sm md:max-w-xl mb-4 lg:mb-8 motion-safe:animate-slide-up motion-safe:animate-fill-both delay-100">
          {t.home.subtitle}
        </p>

        <div class="flex items-center gap-3 mb-12 lg:mb-14">
          <a
            href="https://linkedin.com/in/luizfelipesmoureau"
            target="_blank"
          >
            <Linkedin />
          </a>

          <a
            href="https://github.com/moureau-dev"
            target="_blank"
          >
            <Github />
          </a>

          <a href="mailto:hello@moureau.dev">
            <Email />
          </a>
        </div>
      </div>
    );
  }

  render({ router }: NewstackClientContext) {
    const t = getT(router.path);
    return (
      <section class="relative container flex flex-col overflow-hidden mx-auto mt-14 px-4 md:px-8">
        <div class="flex-1 flex flex-col items-center justify-center text-center pt-20 pb-4 md:pb-8 lg:pb-12">
          {this.renderHero({})}
        </div>

        {this.renderProductList()}

        {this.renderToolings(t)}

        {this.renderProducts(t)}
      </section>
    );
  }
}
