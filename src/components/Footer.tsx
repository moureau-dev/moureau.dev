export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer class="border-t border-[#262626] mt-auto">
      <div class="container mx-auto px-4 min-h-14 flex items-center justify-between gap-4">
        <span class="font-mono text-xs text-fg-muted">
          © {year}{" "}
          <a href="/" class="hover:text-[#f9f9f9] transition-colors duration-200">
            Moureau Development
          </a>
        </span>

        <div class="flex items-center gap-4">
          <a
            href="/about"
            class="font-mono text-xs text-fg-muted hover:text-[#f9f9f9] transition-colors duration-200"
          >
            about
          </a>
          <a
            href="/blog"
            class="font-mono text-xs text-fg-muted hover:text-[#f9f9f9] transition-colors duration-200"
          >
            blog
          </a>
          <a
            href="mailto:hello@moureau.dev"
            class="font-mono text-xs text-fg-muted hover:text-[#f9f9f9] transition-colors duration-200"
          >
            contact
          </a>
        </div>
      </div>
    </footer>
  );
}
