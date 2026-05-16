import Newstack, { type NewstackClientContext } from "@moureau/newstack";
import { getT, getPrefix } from "./i18n/detect";

export class NotFound extends Newstack {
  prepare({ page }: NewstackClientContext) {
    page.title = "404 — Moureau Development";
  }

  render({ router }: NewstackClientContext) {
    const p = getPrefix(router.path);
    const homeHref = p ? `${p}/` : "/";

    return (
      <section class="container mx-auto px-4 flex-1 flex flex-col items-center justify-center text-center min-h-[60vh] relative">
        <div class="max-w-md">
          <h1 class="font-mono text-8xl font-bold text-[#fc51a6] mb-4">
            404
          </h1>
          <p class="font-mono text-lg text-[#f9f9f9] mb-8">
            Page not found.
          </p>
          <a
            href={homeHref}
            class="inline-block font-mono text-sm text-[#101010] bg-[#f9f9f9] px-6 py-3 rounded hover:bg-[#fc51a6] hover:text-[#f9f9f9] transition-colors duration-200"
          >
            ← Home
          </a>
        </div>

        <footer class="absolute bottom-4">
          <a
            href="https://newstack.moureau.dev/llms.txt"
            class="font-mono text-xs text-fg-muted hover:text-[#f9f9f9] transition-colors duration-200"
          >
            llms.txt
          </a>
        </footer>
      </section>
    );
  }
}
