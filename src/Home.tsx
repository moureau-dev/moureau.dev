/* ---------- External ---------- */
import Newstack, { type NewstackClientContext } from "@moureau/newstack";

/**
 * @description
 * This is the Home page of the Newstack example application.
 * It demonstrates a simple interactive component with a counter.
 */
export class Home extends Newstack {
  /* ---------- Proxies ---------- */
  count = 0;

  /* ---------- Lifecycle ---------- */
  prepare({ page }: NewstackClientContext) {
    page.title = "Moureau Development";
    page.description = "Welcome to Newstack";
  }

  renderProductList() {
    const products = [
      "broto",
      "basebox",
      "murow",
      "newstack",
      "entregou.ai",
      "contabilly",
      "murow vault",
    ];

    return (
      <nav class="pt-2 pb-16 md:pt-4 md:pb-36 text-center motion-safe:animate-fade-in motion-safe:animate-fill-both max-w-lg mx-auto">
        <ul class="flex flex-wrap items-center justify-center gap-x-3 md:gap-x-6 gap-y-3 list-none m-0 p-0">
          {products.map((p) => (
            <li>
              <a
                href={`#${p.replace(/\s/g, "-")}`}
                class="group/link gap-x-1 items-center inline-flex underline-offset-[0.2rem] underline decoration-1 font-mono"
              >
                <div class="bg-[#fc51a6] w-1 h-1 rounded-full bg-accent group-hover:bg-fg transition-colors duration-200" />{" "}
                {p}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  renderHero() {
    return (
      <div class="flex flex-col items-center">
        <div class="font-mono text-5xl lg:text-7xl uppercase relative mb-4">
          <div class="font-medium">
            <span class="font-light text-[90%] align-top">
              .<span class="text-[#fc51a6]">/</span>
            </span>
            Moureau
          </div>

          <sub class="absolute text-sm lg:text-lg font-bold text-center -bottom-4 right-0 text-[#fc51a6]">
            Development
          </sub>
        </div>

        <p class="text-fg-muted md:text-lg sm:text-xl max-w-sm md:max-w-xl mb-4 lg:mb-8 motion-safe:animate-slide-up motion-safe:animate-fill-both delay-100">
          a fast-moving, modern tech & venture studio.
        </p>

        <div class="flex items-center gap-3 mb-12 lg:mb-14">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 448 512"
            height="1.25em"
            width="1.25em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Linkedin</title>
            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
          </svg>

          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 496 512"
            height="1.25em"
            width="1.25em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Github</title>
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
          </svg>

          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="1.25em"
            width="1.25em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Email</title>
            <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z" />
          </svg>
        </div>
      </div>
    );
  }

  render() {
    return (
      <section class="relative container flex flex-col overflow-hidden mx-auto mt-14">
        <div class="flex-1 flex flex-col items-center justify-center text-center pt-20 pb-4 md:pb-8 lg:pb-12">
          {this.renderHero()}
        </div>

        {this.renderProductList()}
      </section>
    );
  }
}
