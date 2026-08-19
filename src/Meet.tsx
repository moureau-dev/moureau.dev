/* ---------- External ---------- */
import Newstack, { type NewstackClientContext } from "@moureau/newstack";
import { Intro } from "./components/Intro";
import { getT, getLang } from "./i18n/detect";
import type { Lang } from "./i18n";
import { Linkedin } from "./components/icons/Linkedin";
import { Email } from "./components/icons/Email";
import { Github } from "./components/icons/Github";

export class Meet extends Newstack {
  lang: Lang = "en";
  loading = false;

  /* ---------- Lifecycle ---------- */
  prepare({ page, router }: NewstackClientContext) {
    const t = getT(router.path);
    this.lang = getLang(router.path);
    page.title = t.meta.meet.title;
    page.description = t.meta.meet.description;
  }

  /* ---------- Server Functions ---------- */
  static async GetCalendarLink({ settings }: Partial<NewstackClientContext>) {
    return settings?.calendarLink as string ?? "";
  }

  /* ---------- Render Methods ---------- */
  renderIntro() {
    const t = getT(`/${this.lang}`);

    return (
      <Intro title={t.meet.title}>
        <section class="mb-8 flex flex-col">
          <p class="order-1 text-lg text-fg-muted leading-relaxed max-w-2xl">
            {t.meet.intro}
          </p>

          {this.renderTopics()}

          <button
            type="button"
            data-cta
            disabled={this.loading}
            class={`group relative order-3 sm:order-2 mt-10 inline-flex items-center justify-center gap-3 font-mono text-lg font-bold bg-[#f9f9f9] text-[#101010] pl-9 pr-7 py-4 rounded-full cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-[0_0_50px_rgba(252,81,166,0.4)] w-full sm:w-fit ${
              this.loading ? "opacity-70 pointer-events-none" : ""
            }`}
            onclick={this.goToCalendarLink}
          >
            <span class="cta-spotlight" aria-hidden="true" />
            <span class="relative">{t.meet.button}</span>
            {this.loading ? (
              <span
                aria-hidden="true"
                class="relative w-4 h-4 rounded-full border-2 border-[#101010] border-t-transparent animate-spin"
              />
            ) : (
              <span
                aria-hidden="true"
                class="relative transition-transform duration-300 group-hover:translate-x-1.5"
              >
                →
              </span>
            )}
          </button>
        </section>
      </Intro>
    );
  }

  renderTopics() {
    const t = getT(`/${this.lang}`);
    const topics = [
      t.meet.topics.architecture,
      t.meet.topics.ventures,
      t.meet.topics.multiplayer,
    ];

    return (
      <section class="order-2 sm:order-3 mt-8 -ml-4 sm:ml-0 w-screen sm:w-fit sm:mt-16 flex flex-col gap-4">
        <h2 class="ml-4 sm:ml-0 font-mono text-xs uppercase tracking-widest text-[#fc51a6]">
          {t.meet.topics.label}
        </h2>
        <div class="px-4 sm:px-0 flex gap-4 overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <div class="shrink-0 w-72 max-w-82 sm:shrink border border-[#262626] rounded-lg p-5 flex flex-col gap-2 hover:border-[#fc51a6]/30 transition-colors duration-200">
              <div class="flex flex-col sm:flex-row sm:items-baseline sm:gap-2 gap-1">
                <span class="font-mono font-bold text-[#f9f9f9]">
                  {topic.title}
                </span>
                <span class="text-xs text-[#fc51a6] font-mono">{topic.tag}</span>
              </div>
              <p class="text-sm text-fg-muted leading-relaxed">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  renderContact() {
    const t = getT(`/${this.lang}`);

    return (
      <section class="border-t border-[#262626] pt-10 pb-12 md:pb-24">
        <h2 class="font-mono text-xs uppercase tracking-widest text-[#fc51a6] mb-6">
          {t.meet.contact.label}
        </h2>
        <a
          href="mailto:hello@moureau.dev"
          class="block font-mono text-lg text-[#f9f9f9] hover:text-[#fc51a6] transition-colors duration-200 mb-8"
        >
          hello@moureau.dev
        </a>
        <div class="flex items-center gap-4">
          <a
            href="https://linkedin.com/in/luizfelipesmoureau"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/moureau-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
          <a href="mailto:hello@moureau.dev">
            <Email />
          </a>
        </div>
      </section>
    );
  }

  async goToCalendarLink({ settings }: Partial<NewstackClientContext>) {
    if (this.loading) return;
    this.loading = true;

    const link = settings?.calendarLink as string | undefined;
    try {
      if (link) {
        window.location.href = link;
      } else {
        window.location.href = "mailto:hello@moureau.dev";
      }
    } finally {
      setTimeout(() => {
        this.loading = false;
      }, 1500);
    }
  }

  render(context: NewstackClientContext) {
    return (
      <div class="container mx-auto md:mt-8 px-4">
        {this.renderIntro()}
        {this.renderContact()}
      </div>
    );
  }
}
