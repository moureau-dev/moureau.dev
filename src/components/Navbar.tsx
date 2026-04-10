export function Navbar() {
  return (
    <header class="border-[#262626] sticky top-0 z-50 border-b">
      <div class="absolute inset-0 bg-bg/80 backdrop-blur-md" />

      <nav
        aria-label="Main"
        class="relative container min-h-14 flex items-center gap-2 z-1 justify-end mx-auto w-full"
      >
        <span class="hidden sm:block w-1" />
        <a href="/">
          <b class="font-mono">
            <span>
              .<span class="text-[#fc51a6]">/</span>
            </span>
            MDEV
          </b>
        </a>

        <div class="flex-1 flex items-center md:gap-6 sm:flex justify-end" />

        <div class="hidden sm:flex shrink-0 items-center gap-2">
          <div class="relative flex min-w-28 items-center justify-end">
            <a href="/about" class="font-mono px-4 text-sm hover:underline">
              about
            </a>

            <a href="/blog" class="font-mono px-4 text-sm hover:underline">
              blog
            </a>

            <button
              class="group gap-x-1 items-center justify-center font-mono border border-border rounded-md transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:border-transparent inline-flex text-sm px-4 py-2 bg-transparent text-fg hover:enabled:bg-fg/10 focus-visible:enabled:bg-fg/10 aria-pressed:bg-fg/10 aria-pressed:border-fg/20 aria-pressed:hover:enabled:bg-fg/20 aria-pressed:hover:enabled:text-fg/50 border-none"
              type="button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <span class="font-mono text-sm cursor-pointer hover:underline">
                contact
              </span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
