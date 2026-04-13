/* ---------- External ---------- */
import Newstack, { NewstackServerContext, type NewstackClientContext } from "@moureau/newstack";
import { marked } from "marked";
import { getT, getPrefix, getLang } from "./i18n/detect";
import "./prose.css";

/* ---------- Helpers ---------- */
function parseFrontmatter(raw: string): {
  data: Record<string, string>;
  body: string;
} {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };

  const data: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const colon = line.indexOf(":");
    if (colon === -1) continue;
    data[line.slice(0, colon).trim()] = line.slice(colon + 1).trim();
  }

  return { data, body: match[2] };
}

export class BlogPost extends Newstack {
  /* ---------- Proxies ---------- */
  title = "";
  date = "";
  content = "";
  notFound = false;
  prefix = "";

  /* ---------- Server Functions ---------- */
  static async GetPost({ slug, deps }) {
    return deps.getPost({ slug })
  }

  /* ---------- Lifecycle ---------- */
  async prepare({ page, params, router, deps, environment, fingerprint }: NewstackClientContext & NewstackServerContext) {
    const { slug } = params;
    this.notFound = false;
    this.prefix = getPrefix(router.path);

    let raw: string;
    try {
      if (environment === 'server') {
        raw = await deps.getPost({ slug })
      } else {
        const res = await fetch(`/posts/${slug}.md?${fingerprint}`, { cache: 'force-cache' });
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

    const { data, body } = parseFrontmatter(raw);
    this.title = String(data.title ?? slug);
    this.date = data.date ?? "";
    this.content = await marked(body);
    page.title = `${this.title} — Moureau Development`;
    if (data.excerpt) page.description = data.excerpt;
    if (data.image) page.image = data.image;
  }

  /* ---------- Render Methods ---------- */
  renderNotFound() {
    const t = getT(`${this.prefix}/`);

    return (
      <div class="container mx-auto mt-14 px-4 pt-24 pb-24 text-center">
        <p class="font-mono text-fg-muted mb-4">{t.blog.notFound}</p>
        <a
          href={`${this.prefix}/blog`}
          class="font-mono text-sm text-[#fc51a6] hover:underline"
        >
          {t.blog.backToBlog}
        </a>
      </div>
    );
  }

  render() {
    if (this.notFound) return this.renderNotFound();

    return (
      <div class="container mx-auto md:mt-8 px-4">
        <div class="md:pt-8 motion-safe:animate-fade-in motion-safe:animate-fill-both">
          <a
            href={`${this.prefix}/blog`}
            class="font-mono text-xs text-fg-muted hover:text-[#fc51a6] transition-colors duration-200 mb-8 inline-block"
          >
            {getT(`${this.prefix}/`).blog.backToBlog}
          </a>
          <h1 class="font-mono text-3xl sm:text-4xl font-bold mb-3">
            {this.title}
          </h1>
          {this.date && (
            <span class="font-mono text-xs text-[#fc51a6]">{this.date}</span>
          )}
          <div class="w-12 h-0.5 bg-[#fc51a6] mt-6 mb-10" />
        </div>

        <article class="prose pb-24" html={this.content} />
      </div>
    );
  }
}
