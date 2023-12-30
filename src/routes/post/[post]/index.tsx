import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { useLocation, type DocumentHead, type StaticGenerateHandler } from "@builder.io/qwik-city";
import Layout from "~/components/Layout";
import Prose from "~/components/Prose";
import RelatedPosts from "~/components/RelatedPosts";
import Tags from "~/components/Tags";
import ReactPortableText from "~/integrations/react/ReactPortableText";
import { posts } from "../../../../util/sanity";

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return {
    params: posts.map((post) => {
      return { post: post.slug };
    }),
  };
};

export const head: DocumentHead = ({ params }) => {
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
        href: "https://blog.partialty.com/post/" + post.slug,
      },
    ],
  };
};

export default component$(() => {
  const routeParam = useLocation().params;
  const post = posts.find((post) => post.slug === routeParam.post)!;
  useVisibleTask$(() => {
    if (window.innerWidth < 640) {
      const wrappers = document.getElementsByClassName('wrapper')
      const toggle = (el: HTMLElement) => {
        el.classList.toggle('oversizedCollapse')
        el.firstElementChild?.classList.toggle('hiddenPre')
      }
      for (let i = 0; i < wrappers.length; i++) {
        if ((wrappers[i] as HTMLElement).offsetHeight > 100) {
          wrappers[i].classList.add('oversizedWrapper')
          wrappers[i].firstElementChild?.classList.toggle('hiddenPre')
          wrappers[i].addEventListener(
            'click',
            function () {
              toggle(wrappers[i] as HTMLElement)
            },
            {passive: true},
          )
        }
      }
    }
  })
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