/* ---------- External ---------- */
import Newstack, { NewstackServerContext, type NewstackClientContext } from "@moureau/newstack";
import { marked } from "marked";
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

  /* ---------- Server Functions ---------- */
  static async GetPost({ slug, deps }) {
    return deps.getPost({ slug })
  }

  /* ---------- Lifecycle ---------- */
  async prepare({ page, params, deps, environment, fingerprint }: NewstackClientContext & NewstackServerContext) {
    const { slug } = params;
    this.notFound = false;

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
    page.description = data.excerpt ?? "";
  }

  /* ---------- Render Methods ---------- */
  renderNotFound() {
    return (
      <div class="container mx-auto mt-14 px-4 pt-24 pb-24 text-center">
        <p class="font-mono text-fg-muted mb-4">Post not found.</p>
        <a
          href="/blog"
          class="font-mono text-sm text-[#fc51a6] hover:underline"
        >
          ← back to blog
        </a>
      </div>
    );
  }

  render() {
    if (this.notFound) return this.renderNotFound();

    return (
      <div class="container mx-auto md:mt-10 px-4">
        <div class="md:pt-8 pb-8 motion-safe:animate-fade-in motion-safe:animate-fill-both">
          <a
            href="/blog"
            class="font-mono text-xs text-fg-muted hover:text-[#fc51a6] transition-colors duration-200 mb-8 inline-block"
          >
            ← blog
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
