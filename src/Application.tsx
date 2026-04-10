/* ---------- External ---------- */
import Newstack from "@moureau/newstack";

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
