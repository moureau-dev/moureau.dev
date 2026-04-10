/* ---------- External ---------- */
import Newstack, { NewstackServerContext, type NewstackClientContext } from "@moureau/newstack";
import { Intro } from "./components/Intro";

/* ---------- Types ---------- */
interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

export class Blog extends Newstack {
  /* ---------- Proxies ---------- */
  posts: PostMeta[] = [];

  /* ---------- Server Functions ---------- */
  static async GetPosts({ deps }) {
    return deps.getPosts()
  }

  /* ---------- Lifecycle ---------- */
  async prepare({ page, environment, deps }: NewstackClientContext & NewstackServerContext) {
    page.title = "Blog — Moureau Development";
    page.description =
      "Thoughts on technology, architecture, and building from the ground up.";

    if (environment === "server") {
      this.posts = await deps.getPosts();
    } else {
      const res = await fetch("/posts/index.json", { cache: 'force-cache' });
      this.posts = await res.json();
    }
  }

  renderIntro() {
    return (
      <Intro title="Blog">
        <section class="mb-16">
          <p class="text-lg text-fg-muted leading-relaxed max-w-2xl">
            Notes on building from the ground up — architecture decisions,
            lessons from the stack, and the thinking behind{" "}
            <span class="text-[#f9f9f9] font-medium">
              owning every layer
            </span>
            .
          </p>
        </section>
      </Intro>
    );
  }

  /* ---------- Render Methods ---------- */
  render() {
    return (
      <div class="container mx-auto md:mt-14 px-4">
        {this.renderIntro()}

        <ul class="flex flex-col gap-4 list-none m-0 p-0 pb-24 max-w-2xl">
          {this.posts.map((post) => (
            <li>
              <a
                href={`/blog/${post.slug}`}
                class="group block border border-[#262626] rounded-lg p-6 hover:border-[#fc51a6]/30 transition-colors duration-200"
              >
                <span class="font-mono text-xs text-[#fc51a6] mb-2 block">
                  {post.date}
                </span>
                <h2 class="font-mono font-bold text-lg mb-2 group-hover:text-[#fc51a6] transition-colors duration-200">
                  {post.title}
                </h2>
                <p class="text-fg-muted text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
