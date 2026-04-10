/* ---------- External ---------- */
import Newstack, { type NewstackClientContext } from "@moureau/newstack";
import { getT, getPrefix } from "../i18n/detect";

export class Footer extends Newstack {
  render({ router }: NewstackClientContext) {
    const t = getT(router.path);
    const p = getPrefix(router.path);
    const year = new Date().getFullYear();

    return (
      <footer class="border-t border-[#262626] mt-auto">
        <div class="container mx-auto px-4 min-h-14 flex items-center justify-between gap-4">
          <span class="font-mono text-xs text-fg-muted">
            © {year}{" "}
            <a
              href={p ? `${p}/` : "/"}
              class="hover:text-[#f9f9f9] transition-colors duration-200"
            >
              Moureau Development
            </a>
          </span>

          <div class="flex items-center gap-4">
            <a
              href={`${p}/about`}
              class="font-mono text-xs text-fg-muted hover:text-[#f9f9f9] transition-colors duration-200"
            >
              {t.nav.about}
            </a>
            <a
              href={`${p}/blog`}
              class="font-mono text-xs text-fg-muted hover:text-[#f9f9f9] transition-colors duration-200"
            >
              {t.nav.blog}
            </a>
            <a
              href="mailto:hello@moureau.dev"
              class="font-mono text-xs text-fg-muted hover:text-[#f9f9f9] transition-colors duration-200"
            >
              {t.nav.contact}
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
