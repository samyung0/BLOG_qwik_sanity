import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const pathname = useLocation().url.pathname;
  return (
    <nav class="absolute right-0 top-0 m-[3.57vw] lg:fixed">
      <div class="flex items-start gap-8 p-4 md:flex-row lg:flex-col lg:gap-0">
        <a
          class={
            "relative py-4 tracking-wider text-black [transition:all_0.5s_linear]" +
            (pathname === "/"
              ? " cursor-context-menu font-[500] text-opacity-100 before:absolute before:bottom-1 before:left-0 before:h-[2px] before:w-full before:bg-black"
              : " text-opacity-30 hover:text-opacity-70")
          }
          href="/"
        >
          Blog
        </a>
        <a
          class={
            "relative py-4 tracking-wider text-black [transition:all_0.5s_linear]" +
            (pathname.startsWith("/about")
              ? " font-[500] text-opacity-100 before:absolute before:bottom-1 before:left-0 before:h-[2px] before:w-full before:bg-black"
              : " text-opacity-30 hover:text-opacity-70")
          }
          href="/about"
        >
          About
        </a>
      </div>
    </nav>
  );
});
