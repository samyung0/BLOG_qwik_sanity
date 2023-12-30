import { component$ } from "@builder.io/qwik";
import { useLocation, type DocumentHead, type StaticGenerateHandler } from "@builder.io/qwik-city";
import Layout from "~/components/Layout";
import Prose from "~/components/Prose";
import RelatedPosts from "~/components/RelatedPosts";
import Tags from "~/components/Tags";
import ReactPortableText from "~/integrations/react/ReactPortableText";
import { getPosts } from "../../../../util/sanity";
import { usePosts } from "~/routes/layout";

export const onStaticGenerate: StaticGenerateHandler = async () => {
  const posts = await getPosts();
  return {
    params: posts.map((post) => {
      return { post: post.slug };
    }),
  };
};

export const head: DocumentHead = ({ params, resolveValue }) => {
  const posts = resolveValue(usePosts);
  const post = posts.find((post) => post.slug === params.post)!;
  return {
    title: post.name,
    meta: [
      {
        name: "description",
        content: post.description,
      },
      {
        property: "og:title",
        content: post.name,
      },
      {
        property: "og:description",
        content: post.description,
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://blog-qwik.partialty.com/post/" + post.slug,
      },
    ],
  };
};

export default component$(() => {
  const routeParam = useLocation().params;
  const posts = usePosts().value;
  const post = posts.find((post) => post.slug === routeParam.post)!;
  return (
    <Layout>
      <h1 class="pb-4 font-mosk text-[2em] font-bold tracking-wider text-primary-gray lg:text-[3em] 2xl:text-[4em]">
        {post.name}
      </h1>
      <div class="pt-12 leading-6 md:mx-[6vw] md:p-0 md:pt-[6vw] md:leading-8 md:tracking-wide lg:mx-[5vw] xl:mx-auto xl:max-w-[1200px]">
        <Prose>
          <p class="leading-6 tracking-wide text-primary-gray md:text-right md:leading-7 ">
            {new Date(post._createdAt).toDateString().slice(4)}
          </p>
          <ReactPortableText post={post} />
          <p class="text-xs italic tracking-wide text-primary-gray/[0.5] sm:pt-2">
            Last updated: {new Date(post._updatedAt).toDateString().slice(4)}
          </p>
        </Prose>
      </div>
      <Tags />
      <RelatedPosts post={post.relatedPosts} />
    </Layout>
  );
});
