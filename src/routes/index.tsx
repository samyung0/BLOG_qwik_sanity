import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Layout from "~/components/Layout";
import PostPreview from "~/components/PostPreview";
import Tags from "~/components/Tags";

export const head: DocumentHead = {
  title: "Blog Posts",
  meta: [
    {
      name: "description",
      content: "Main page for my blog posts.",
    },
    {
      property: "og:title",
      content: "Blog Posts",
    },
    {
      property: "og:description",
      content: "Main page for my blog posts.",
    },
  ],
  links: [
    {
      rel: "canonical",
      href: "https://blog.partialty.com",
    },
  ],
};

export default component$(() => {
  return (
    <Layout>
      <h1 class="pb-4 font-mosk text-[4em] font-bold tracking-wider text-primary-gray md:text-[6em]">
        Blog.
      </h1>
      <p class="max-w-5xl text-sm leading-6 tracking-normal text-primary-gray sm:text-base md:leading-7 md:tracking-wide md:text-black">
        Here are all my blog posts about my journey into web development. I write about all kinds of
        framework and libraries I have tried and give an honest opinion about them from the
        perspective of a novice developer, in simple terms.
      </p>
      <div class="pt-12 md:mx-[6vw] md:p-0 md:pt-[6vw] lg:mx-[5vw] xl:mx-auto xl:max-w-[1200px]">
        <PostPreview />
      </div>
      <Tags />
    </Layout>
  );
});
