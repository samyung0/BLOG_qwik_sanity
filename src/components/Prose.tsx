import { Slot, component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div
      class="textBlock:sm:leading-[20px] textBlock:leading-[16px] prose prose-zinc mx-auto
  max-w-full text-sm leading-7 tracking-wide prose-figcaption:text-center
  prose-code:text-xs
  prose-code:!leading-[unset] prose-code:tracking-tight
  prose-code:before:content-[] prose-code:after:content-[] prose-pre:m-0 prose-pre:px-0 lines:px-[1em]
  markedlines:inline-block markedlines:w-full markedlines:bg-zinc-500/[0.5] hasfilename:mt-0 hasfilename:rounded-tl-none hasfilename:rounded-tr-none
  oversizedWrapper:relative oversizedWrapper:before:absolute oversizedWrapper:before:left-[calc(50%-8px)]
  oversizedWrapper:before:top-[calc(100%+2px)]
  oversizedWrapper:before:block oversizedWrapper:before:h-4
  oversizedWrapper:before:w-4 oversizedWrapper:before:bg-transparent
  oversizedWrapper:before:content-[url('/chevron-down-outline.svg')] hiddenpre:h-[70px]
  hiddenpre:overflow-hidden inlineCode:bg-primary-gray/[.15] inlineCode:p-[2px] inlineCode:font-firaCode inlineCode:font-normal inlineCode:tracking-tight prose-code:sm:text-sm prose-code:sm:tracking-wide oversizedWrapper:before:sm:hidden md:text-base
  md:leading-7 lg:max-w-[800px] xl:max-w-[1000px]"
    >
      <Slot />
    </div>
  );
});
