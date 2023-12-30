import { component$ } from "@builder.io/qwik";
import { useLocation, type DocumentHead, type StaticGenerateHandler } from "@builder.io/qwik-city";
import Layout from "~/components/Layout";
import PostPreview from "~/components/PostPreview";
import Tags from "~/components/Tags";
import { getTags } from "../../../../util/sanity";
import { useTags } from "~/routes/layout";

export const onStaticGenerate: StaticGenerateHandler = async () => {
  const tags = await getTags();
  return {
    params: tags.map((tag) => {
      return { tag: tag.slug };
    }),
  };
};

export const head: DocumentHead = ({ params, resolveValue }) => {
  const tags = resolveValue(useTags);
  const tagName = tags.find((tag2) => tag2.slug === params.tag)!;
  return {
    title: tagName.name,
    meta: [
      {
        name: "description",
        content: `List of posts with tag ${tagName.name}.`,
      },
      {
        property: "og:title",
        content: tagName.name,
      },
      {
        property: "og:description",
        content: `List of posts with tag ${tagName.name}.`,
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://blog-qwik.partialty.com/tag/" + tagName.slug,
      },
    ],
  };
};

export default component$(() => {
  const tags = useTags().value;
  const tag = useLocation().params.tag;
  const tagName = tags.find((tag2) => tag2.slug === tag)!;
  return (
    <Layout>
      <h1 class="pb-4 font-mosk text-[2em]  font-bold tracking-wider text-primary-gray lg:text-[3em] 2xl:text-[4em]">
        Tag: {tagName.name}
      </h1>
      <PostPreview tag={tag} />
      <Tags />
    </Layout>
  );
});
