/* ---------- External ---------- */
import Newstack from "@moureau/newstack";

/* ---------- Pages ---------- */
import { Layout } from "./components/Layout";
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
        <Home route="/" />
        <About route="/about" />
        <Blog route="/blog" />
        <BlogPost route="/blog/:slug" />
      </Layout>
    );
  }
}
