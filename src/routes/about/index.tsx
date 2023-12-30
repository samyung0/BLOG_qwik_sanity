import { component$ } from "@builder.io/qwik";
import Layout from "~/components/Layout";
import { authors } from "../../../util/sanity";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";

export const head: DocumentHead = {
  title: "About me",
  meta: [
    {
      name: "description",
      content: "About Page",
    },
    {
      property: "og:title",
      content: "About me",
    },
    {
      property: "og:description",
      content: "About Page",
    },
  ],
  links: [
    {
      rel: "canonical",
      href: "https://blog-qwik.partialty.com/about/",
    },
  ],
};

export default component$(() => {
  const author = authors.find((author) => author.slug === "sam-yung");
  return (
    <Layout noPaddingTop>
      {author && (
        <div class="flex min-h-[100vh] flex-col items-center justify-center px-[8vw] lg:px-[10vw]">
          {author.bioImage.asset.url && (
            <div>
              <Image
                background={author.bioImage.asset.metadata.lqip}
                class="h-[100px] w-[100px] rounded-full object-contain md:h-[140px] md:w-[140px] xl:h-[200px] xl:w-[200px]"
                src={author.bioImage.asset.url}
                alt={author.bioImage.alt}
                width={author.bioImage.asset.metadata.dimensions.width}
                height={author.bioImage.asset.metadata.dimensions.height}
              />
            </div>
          )}
          <h1 class="pb-3 pt-8 font-gilroy text-[2em] font-bold text-primary-gray md:pb-6 md:pt-12">
            {author.name}
          </h1>
          <p class="text-center text-sm leading-6 tracking-normal text-primary-gray sm:mx-6 sm:text-base md:mx-[10vw] md:leading-7 md:tracking-wide md:text-black xl:mx-0 xl:text-left">
            {author.bio}
          </p>
        </div>
      )}
    </Layout>
  );
});
