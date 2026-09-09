/* ---------- External ---------- */
import Newstack, { type NewstackClientContext } from "@moureau/newstack";
import { getT, getPrefix } from "./i18n/detect";
import { Linkedin } from "./components/icons/Linkedin";
import { Email } from "./components/icons/Email";
import type { Translations } from "./i18n";

/* ---------- Types ---------- */
interface TeamMember {
  name: string;
  role: string;
  img: string;
  linkedin: string;
  email: string;
}

export class Broto extends Newstack {
  /* ---------- Lifecycle ---------- */
  prepare({ page, router }: NewstackClientContext) {
    const t = getT(router.path);
    page.title = t.meta.broto.title;
    page.description = t.meta.broto.description;
  }

  /* ---------- Render Methods ---------- */
  renderTeam(t: Translations) {
    const team: TeamMember[] = [
      {
        name: "Luiz Moureau",
        role: "Co-founder & CTO",
        img: "/static/images/profiles/luiz.avif",
        linkedin: "https://linkedin.com/in/luizfelipesmoureau",
        email: "luiz@moureau.dev",
      },
      {
        name: "Eli Moureau",
        role: "Co-founder & CEO",
        img: "/static/images/profiles/eli.avif",
        linkedin: "https://linkedin.com/in/elielmoureau",
        email: "eli@moureau.dev",
      },
    ];

    return (
      <section class="pt-2 md:pt-6 pb-10 md:pb-16">
        <h2 class="font-mono text-xs uppercase tracking-widest text-[#fc51a6] mb-6">
          {t.broto.team.label}
        </h2>
        <div class="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          {team.map((member) => (
            <div class="shrink-0 w-48 border border-[#262626] rounded-xl p-4 flex flex-col items-center gap-2.5 hover:border-[#fc51a6]/30 transition-colors duration-300">
              <img
                src={member.img}
                alt={member.name}
                class="size-20 lg:size-32 rounded-xl object-cover shrink-0 bg-[#262626]"
              />
              <div class="flex flex-col items-center gap-1 text-center">
                <p class="font-mono text-sm font-medium text-[#f9f9f9] truncate w-full">
                  {member.name}
                </p>
                <p class="font-mono text-xs text-[#fc51a6]/70">{member.role}</p>
              </div>
              <div class="flex items-center gap-2.5">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-[#adadad] hover:text-[#fc51a6] transition-colors duration-200"
                >
                  <Linkedin />
                </a>
                <a
                  href={`mailto:${member.email}`}
                  class="text-[#adadad] hover:text-[#fc51a6] transition-colors duration-200"
                >
                  <Email />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  renderInfo(t: Translations) {
    return (
      <section class="py-10 md:py-16 border-t border-white/6">
        <h2 class="font-mono text-xs uppercase tracking-widest text-[#fc51a6] mb-6">
          {t.broto.info.label}
        </h2>
        <div class="max-w-2xl flex flex-col gap-6">
          <p class="text-[#adadad] text-sm md:text-base leading-relaxed">
            {t.broto.info.description}
          </p>
          <p class="text-[#adadad] text-sm md:text-base leading-relaxed">
            {t.broto.info.p2}
          </p>
          <p class="text-[#adadad] text-sm md:text-base leading-relaxed">
            {t.broto.info.p3}
          </p>
        </div>
      </section>
    );
  }

  renderCTA(t: Translations) {
    return (
      <section class="border-t border-white/6 pt-8 pb-16">
        <div class="flex flex-col items-start gap-6">
          <h2 class="font-mono text-xl md:text-2xl font-medium">
            {t.broto.cta.title}
          </h2>
          <p class="text-[#adadad] text-sm md:text-base leading-relaxed max-w-lg">
            {t.broto.cta.description}
          </p>
          <a
            href="https://trybroto.moureau.dev"
            target="_blank"
            rel="noopener noreferrer"
            class="group inline-flex items-center justify-center gap-3 font-mono text-lg font-bold bg-[#f9f9f9] text-[#101010] pl-9 pr-7 py-4 rounded-full cursor-pointer transition-all duration-300 hover:shadow-[0_0_50px_rgba(252,81,166,0.4)]"
          >
            <span>{t.broto.cta.button}</span>
            <span class="transition-transform duration-300 group-hover:translate-x-1.5">
              →
            </span>
          </a>
        </div>
      </section>
    );
  }

  render(context: NewstackClientContext) {
    const t = getT(context.router.path);

    return (
      <div class="container mx-auto md:mt-8 px-4">
        {/* Hero */}
        <section class="pt-12 md:pt-16 pb-4">
          <p class="font-mono text-xs text-[#fc51a6] uppercase tracking-widest mb-4">
            {t.broto.tag}
          </p>
          <h1 class="font-mono text-3xl md:text-5xl lg:text-6xl font-medium mb-4">
            {t.broto.name}
          </h1>
          <p class="text-[#adadad] text-base md:text-lg leading-relaxed max-w-xl">
            {t.broto.subtitle}
          </p>
          <p class="text-[#adadad] text-base md:text-lg leading-relaxed max-w-xl mt-4">
            {t.broto.subtitle2}
          </p>
        </section>

        {this.renderTeam(t)}
        {this.renderInfo(t)}
        {this.renderCTA(t)}

        {/* Contact */}
        <section class="border-t border-white/6 py-12">
          <h2 class="font-mono text-xs uppercase tracking-widest text-[#fc51a6] mb-4">
            {t.broto.contact.label}
          </h2>
          <p class="text-[#adadad] text-sm md:text-base leading-relaxed max-w-lg mb-8">
            {t.broto.contact.description}
          </p>
          <a
            href={`${getPrefix(context.router.path)}/meet`}
            class="group inline-flex items-center justify-center gap-3 font-mono text-lg font-bold border border-[#fc51a6]/40 text-[#fc51a6] pl-9 pr-7 py-4 rounded-full cursor-pointer hover:bg-[#fc51a6]/10 hover:border-[#fc51a6] transition-all duration-300"
          >
            <span>{t.broto.contact.button}</span>
            <span class="transition-transform duration-300 group-hover:translate-x-1.5">
              →
            </span>
          </a>
        </section>
      </div>
    );
  }
}
