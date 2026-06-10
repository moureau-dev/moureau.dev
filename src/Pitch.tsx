/* ---------- External ---------- */
import Newstack, { NewstackServerContext, type NewstackClientContext } from "@moureau/newstack";
import { marked } from "marked";
import { getT, getPrefix } from "./i18n/detect";
import { pitches } from "./pitches.config";
import "./prose.css";

export class Pitch extends Newstack {
  /* ---------- Proxies ---------- */
  title = "";
  content = "";
  notFound = false;
  prefix = "";

  /* ---------- Server Functions ---------- */
  static async GetPitch({ product, deps }) {
    return deps.getPitch({ product })
  }

  /* ---------- Lifecycle ---------- */
  async prepare({ page, params, router, deps, environment, fingerprint }: NewstackClientContext & NewstackServerContext) {
    const { product } = params;
    this.notFound = false;
    this.prefix = getPrefix(router.path);

    let raw: string;
    try {
      if (environment === 'server') {
        raw = await deps.getPitch({ product })
      } else {
        const res = await fetch(`/pitches/${product}.md?${fingerprint}`, { cache: 'force-cache' });
        if (!res.ok) {
          this.notFound = true;
          return;
        }
        raw = await res.text();
      }
    } catch {
      this.notFound = true;
      return;
    }

    // Find pitch config
    const pitchConfig = pitches.find(p => p.id === product);

    if (pitchConfig) {
      this.title = pitchConfig.name;
      page.title = pitchConfig.title;
      page.description = pitchConfig.description;
    } else {
      this.title = product.charAt(0).toUpperCase() + product.slice(1);
      page.title = `${this.title} — Moureau Development`;
    }

    this.content = await marked(raw);
  }

  /* ---------- Render Methods ---------- */
  renderNotFound() {
    const t = getT(`${this.prefix}/`);

    return (
      <div class="container mx-auto mt-14 px-4 pt-24 pb-24 text-center">
        <p class="font-mono text-fg-muted mb-4">Pitch not found</p>
        <a
          href={`${this.prefix}/`}
          class="font-mono text-sm text-[#fc51a6] hover:underline"
        >
          Back to home
        </a>
      </div>
    );
  }

  render({ params }: NewstackClientContext) {
    if (this.notFound) return this.renderNotFound();

    return (
      <>
        <head>
          <link rel="canonical" href={`${this.prefix}/pitches/${params.product}`} />
        </head>
        <div class="container mx-auto md:mt-8 px-4 pt-8 md:pt-16">
          <article class="prose prose-wide pb-24" html={this.content} />
        </div>
      </>
    );
  }
}
