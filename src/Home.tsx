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
    return (
      <section class="relative container flex flex-col overflow-hidden mx-auto mt-14">
        <div class="flex-1 flex flex-col items-center justify-center text-center pt-20 pb-4 md:pb-8 lg:pb-12">
          {this.renderHero({})}
        </div>

        {this.renderProductList()}
      </section>
    );
  }
}
