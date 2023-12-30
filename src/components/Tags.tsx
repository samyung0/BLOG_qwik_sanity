import { component$ } from "@builder.io/qwik";
import { Image } from '@unpic/qwik';
import { posts, tags } from "../../util/sanity";
import LabelSVG from "../media/pricetag-outline.svg"
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  const tagsNotEmpty: Record<string, (typeof tags)['0']> = {}
for (const post of posts) {
  for (const tag of post.tags) {
    if(!Object.prototype.hasOwnProperty.call(tagsNotEmpty, tag)){
      tagsNotEmpty[tag] = tags.find((tag2) => tag2.slug === tag)!
    }
  }
}
  return (
    <section
  class="md:py-[6vw] flex md:flex-row flex-col items-start xl:max-w-[1100px] xl:mx-auto lg:mx-[5vw] md:mx-[6vw] py-12 md:p-0"
>
  {
    Object.keys(tagsNotEmpty).length > 0 && (
      <>
        <h2 class="font-mosk text-primary-gray font-bold md:text-xl text-lg md:-mt-[2px] md:mb-0 mb-1 tracking-wide mr-12 leading-8">
          Tags{' '}
          <Image width={24} height={24} src={LabelSVG} layout="fixed" alt="" class="md:h-6 md:w-6 w-5 h-5 inline-block md:mr-4 mr-2" />:
        </h2>
        <ul class="flex max-w-[800px] flex-wrap">
          {Object.values(tagsNotEmpty).map((tag) => (
            <li key={tag.slug} class="text-primary-gray font-bold tracking-wide mr-4 leading-8 md:text-lg text-base">
              <Link prefetch href={`/tag/${tag.slug}`}>{tag.name}</Link>
            </li>
          ))}
        </ul>
      </>
    )
  }
</section>
  )
})