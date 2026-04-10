/* ---------- External ---------- */
import Newstack, { type NewstackClientContext } from "@moureau/newstack";
import { getT, getPrefix } from "../i18n/detect";
import type { Translations } from "../i18n";

export class Navbar extends Newstack {
  /* ---------- Proxies ---------- */
  open = false;

  /* ---------- Render Methods ---------- */
  renderLinks(
    { router, mobile }: Partial<NewstackClientContext<{ mobile: boolean }>>,
  ) {
    const t = getT(router.path);
    const prefix = getPrefix(router.path);

    const base = mobile
      ? "font-mono text-base py-3 border-b border-[#262626] hover:text-[#fc51a6] transition-colors duration-200"
      : "font-mono px-4 text-sm hover:underline";

    return (
      <div class="flex flex-col sm:contents">
        <a href={`${prefix}/about`} class={base}>
          {t.nav.about}
        </a>
        <a href={`${prefix}/blog`} class={base}>
          {t.nav.blog}
        </a>
        <a
          href="mailto:hello@moureau.dev"
          class={
            mobile
              ? `${base} border-none`
              : "font-mono text-sm cursor-pointer hover:underline px-4"
          }
        >
          {t.nav.contact}
        </a>
      </div>
    );
  }

  render({ router }: NewstackClientContext) {
    const p = getPrefix(router.path);

    return (
      <header class="border-[#262626] sticky top-0 z-50 border-b">
        <div class="absolute inset-0 bg-[#101010]/80 backdrop-blur-md" />

        <nav
          aria-label="Main"
          class="relative container min-h-14 flex items-center gap-2 z-1 mx-auto w-full px-4"
        >
          {/* Logo */}
          <a href={p ? `${p}/` : "/"} class="mr-auto">
            <b class="font-mono">
              <span>
                .<span class="text-[#fc51a6]">/</span>
              </span>
              MDEV
            </b>
          </a>

          {/* Desktop links */}
          <div class="hidden sm:flex shrink-0 items-center">
            {this.renderLinks({})}
          </div>

          {/* Burger button */}
          <button
            type="button"
            class="sm:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 shrink-0"
            aria-label="Toggle menu"
            aria-expanded={this.open ? "true" : "false"}
            onclick={() => (this.open = !this.open)}
          >
            <span
              class={`block w-5 h-px bg-[#f9f9f9] transition-all duration-200 origin-center ${this.open ? "rotate-45 translate-y-1.75" : ""}`}
            />
            <span
              class={`block w-5 h-px bg-[#f9f9f9] transition-all duration-200 ${this.open ? "opacity-0" : ""}`}
            />
            <span
              class={`block w-5 h-px bg-[#f9f9f9] transition-all duration-200 origin-center ${this.open ? "-rotate-45 -translate-y-1.75" : ""}`}
            />
          </button>
        </nav>

        {/* Mobile drawer */}
        {this.open && (
          <div class="sm:hidden relative z-40 border-t border-[#262626] bg-[#101010] px-4 flex flex-col py-2">
            {this.renderLinks({ mobile: true })}
          </div>
        )}
      </header>
    );
  }
}
