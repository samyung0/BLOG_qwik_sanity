import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const pathname = useLocation().url.pathname;
  return (
    <nav class="lg:fixed absolute m-[3.57vw] top-0 right-0">
  <div class="flex lg:flex-col md:flex-row lg:gap-0 gap-8 p-4 items-start">
    <Link
      prefetch
      class={'text-black relative tracking-wider [transition:all_0.5s_linear] py-4' +
        (pathname === '/'
          ? ' text-opacity-100 font-[500] before:bg-black before:w-full before:h-[2px] before:absolute before:bottom-1 before:left-0 cursor-context-menu'
          : ' text-opacity-30 hover:text-opacity-70')}
      href="/"
    >
      Blog
    </Link>
    <Link
      class={'text-black relative tracking-wider [transition:all_0.5s_linear] py-4' +
        (pathname.startsWith('/about')
          ? ' text-opacity-100 font-[500] before:bg-black before:w-full before:h-[2px] before:absolute before:bottom-1 before:left-0'
          : ' text-opacity-30 hover:text-opacity-70')}
      href="/about"
    >
      About
    </Link>
  </div>
</nav>
  )
})