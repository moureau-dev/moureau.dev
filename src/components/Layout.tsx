/* ---------- External ---------- */
import { type NewstackNode } from "@moureau/newstack";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout({ children }: { children?: NewstackNode }) {
  return (
    <main class="bg-[#101010] text-[#f9f9f9] min-h-screen flex flex-col">
      <div
        class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full pointer-events-none z-0 blur-3xl"
        style="background: radial-gradient(circle, #fc51a6 0%, transparent 70%); animation: pulse-opacity 6s linear infinite alternate;"
      />

      <Navbar />

      {children}

      <Footer />
    </main>
  );
}
