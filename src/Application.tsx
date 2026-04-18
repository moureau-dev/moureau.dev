/* ---------- External ---------- */
import Newstack, { NewstackClientContext } from "@moureau/newstack";

/* ---------- Components ---------- */
import { Layout } from "./components/Layout";

/* ---------- Pages ---------- */
import { Home } from "./Home";
import { About } from "./About";
import { Blog } from "./Blog";
import { BlogPost } from "./BlogPost";

/* ---------- Styles ---------- */
import "./styles.css";

export class Application extends Newstack {
  prepare({ page, project }: NewstackClientContext) {
    page.image = "/static/images/image.png";

    project.domain = "moureau.dev";
    project.favicon = "/static/images/favicon.ico";
    project.name = "Moureau Development";
    project.shortName = "Moureau";
    project.backgroundColor = "#131112";
    project.icons = {
      "72": "/static/images/icon-72x72.png",
      "96": "/static/images/icon-96x96.png",
      "128": "/static/images/icon-128x128.png",
      "144": "/static/images/icon-144x144.png",
      "152": "/static/images/icon-152x152.png",
      "192": "/static/images/icon-192x192.png",
      "384": "/static/images/icon-384x384.png",
      "512": "/static/images/icon-512x512.png",
    }
    project.color = "#fc51a6";
  }

  render() {
    return (
      <Layout>
        {/* English */}
        <Home route="/" />
        <About route="/about" />
        <Blog route="/blog" />
        <BlogPost route="/blog/:slug" />

        {/* Spanish */}
        <Home route="/es-ES/" />
        <About route="/es-ES/about" />
        <Blog route="/es-ES/blog" />
        <BlogPost route="/es-ES/blog/:slug" />
      </Layout>
    );
  }
}
