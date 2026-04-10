/* ---------- External ---------- */
import Newstack from "@moureau/newstack";

/* ---------- Pages ---------- */
import { Home } from "./Home";
import { About } from "./About";

/* ---------- Styles ---------- */
import "./styles.css";

export class Application extends Newstack {
  render() {
    return (
      <div>
        <Home route="/" />
        <About route="/about" />
      </div>
    );
  }
}
