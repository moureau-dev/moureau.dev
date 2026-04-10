/* ---------- External ---------- */
import Newstack, { type NewstackClientContext } from "@moureau/newstack";
import { Intro } from "./components/Intro";
import { getT } from "./i18n/detect";
import type { Translations } from "./i18n";

export class About extends Newstack {
  /* ---------- Lifecycle ---------- */
  prepare({ page, router }: NewstackClientContext) {
    const t = getT(router.path);
    page.title = t.meta.about.title;
    page.description = t.meta.about.description;
  }

  /* ---------- Render Methods ---------- */
  renderIntro({ router }: Partial<NewstackClientContext>) {
    const t = getT(router.path);
    const { intro } = t.about;

    return (
      <Intro title={t.nav.about}>
        <section class="mb-16">
          <p class="text-lg text-fg-muted leading-relaxed max-w-2xl">
            {intro.text1}
            <span class="text-[#f9f9f9] font-medium">{intro.highlight1}</span>
            {intro.text2}
            <span class="text-[#f9f9f9] font-medium">{intro.highlight2}</span>
            {intro.text3}
          </p>
          <p class="mt-4 text-lg text-fg-muted leading-relaxed max-w-2xl">
            {intro.p2}
          </p>
        </section>
      </Intro>
    );
  }

  renderStack({ router }: Partial<NewstackClientContext>) {
    const t = getT(router.path);
    const { stack } = t.about;
    const products = [
      { name: "Basebox", ...stack.basebox },
      { name: "Newstack", ...stack.newstack },
      { name: "Murow", ...stack.murow },
      { name: "Broto", ...stack.broto },
    ];

    return (
      <section class="mb-16">
        <h2 class="font-mono text-xs uppercase tracking-widest text-[#fc51a6] mb-6">
          {stack.title}
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

  renderIdentity({ router }: Partial<NewstackClientContext>) {
    const t = getT(router.path);
    const { identity } = t.about;
    const pillars = [
      identity.techPurism,
      identity.commercialization,
      identity.consultancy,
    ];

    return (
      <section class="mb-16">
        <h2 class="font-mono text-xs uppercase tracking-widest text-[#fc51a6] mb-2">
          {identity.title}
        </h2>
        <p class="text-fg-muted text-sm font-mono mb-6">
          {identity.subtitle}
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

  renderVision({ router }: Partial<NewstackClientContext>) {
    const t = getT(router.path);
    const { vision } = t.about;

    return (
      <section class="border-t border-[#262626] pt-10 pb-24">
        <h2 class="font-mono text-xs uppercase tracking-widest text-[#fc51a6] mb-4">
          {vision.title}
        </h2>
        <p class="text-fg-muted leading-relaxed max-w-2xl">
          {vision.text1}
          <span class="text-[#f9f9f9] font-medium">{vision.highlight}</span>
          {vision.text2}
        </p>
      </section>
    );
  }

  render() {
    return (
      <div class="container mx-auto md:mt-8 px-4">
        {this.renderIntro({})}
        {this.renderStack({})}
        {this.renderIdentity({})}
        {this.renderVision({})}
      </div>
    );
  }
}
