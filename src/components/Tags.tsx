import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import { usePosts, useTags } from "~/routes/layout";
import LabelSVG from "../media/pricetag-outline.svg";

export default component$(() => {
  const posts = usePosts().value;
  const tags = useTags().value;
  const tagsNotEmpty: Record<string, (typeof tags)["0"]> = {};
  for (const post of posts) {
    for (const tag of post.tags) {
      if (!Object.prototype.hasOwnProperty.call(tagsNotEmpty, tag)) {
        tagsNotEmpty[tag] = tags.find((tag2) => tag2.slug === tag)!;
      }
    }
  }
  return (
    <section class="flex flex-col items-start py-12 md:mx-[6vw] md:flex-row md:p-0 md:py-[6vw] lg:mx-[5vw] xl:mx-auto xl:max-w-[1100px]">
      {Object.keys(tagsNotEmpty).length > 0 && (
        <>
          <h2 class="mb-1 mr-12 font-mosk text-lg font-bold leading-8 tracking-wide text-primary-gray md:-mt-[2px] md:mb-0 md:text-xl">
            Tags{" "}
            <Image
              width={24}
              height={24}
              src={LabelSVG}
              layout="fixed"
              alt=""
              class="mr-2 inline-block h-5 w-5 md:mr-4 md:h-6 md:w-6"
            />
            :
          </h2>
          <ul class="flex max-w-[800px] flex-wrap">
            {Object.values(tagsNotEmpty).map((tag) => (
              <li
                key={tag.slug}
                class="mr-4 text-base font-bold leading-8 tracking-wide text-primary-gray md:text-lg"
              >
                <a href={`/tag/${tag.slug}`}>{tag.name}</a>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
});
