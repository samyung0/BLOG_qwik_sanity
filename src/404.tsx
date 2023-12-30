import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Layout from "~/components/Layout";

export const head: DocumentHead = {
  title: "404 Not Found",
  meta: [
    {
      name: "description",
      content: "Nah I don't have this page.",
    },
    {
      property: "og:title",
      content: "404 Not Found",
    },
    {
      property: "og:description",
      content: "Nah I don't have this page.",
    },
  ],
};

export default component$(() => {
  return (
    <Layout>
      <h1 class="text-center font-mosk text-[4em] font-bold tracking-wider text-primary-gray md:text-[6em]">
        404
      </h1>
      <p class="mx-auto block max-w-5xl text-center text-sm leading-6 tracking-wide sm:text-base md:leading-7">
        The page you are looking for does not exist.
      </p>
    </Layout>
  );
});
