/* ---------- External ---------- */
import { type NewstackNode } from "@moureau/newstack";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout({ children }: { children?: NewstackNode }) {
  return (
    <main class="bg-[#101010] text-[#f9f9f9] min-h-screen flex flex-col">
      <Navbar />

      {children}

      <Footer />
    </main>
  );
}
