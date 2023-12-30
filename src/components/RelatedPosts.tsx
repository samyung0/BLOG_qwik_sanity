import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import PostPreview from "~/components/PostPreview";
import type { Post } from "../../types/sanity";
import { posts } from "../../util/sanity";
import RelatedPostSVG from "../media/document-outline.svg";
import RelatedPostsSVG from "../media/documents-outline.svg";

export default component$(({ post }: { post?: Post["relatedPosts"] }) => {
  const relatedPosts =
    post && posts.filter((relatedPost) => post.find((slug) => slug === relatedPost.slug));
  return relatedPosts ? (
    <section class="flex flex-col items-stretch pb-12 md:mx-[6vw] md:p-0 md:pb-[6vw] lg:mx-[5vw] xl:mx-auto xl:max-w-[1100px]">
      <h2 class="pb-6 font-mosk text-lg font-bold leading-8 tracking-wide text-primary-gray md:text-xl">
        <span class="pr-1">Related Post{relatedPosts.length > 0 ? "s" : ""}</span>
        {relatedPosts.length > 0 ? (
          <Image
            layout="fixed"
            src={RelatedPostsSVG}
            alt=""
            class="mr-2 inline-block h-5 w-5 md:mr-4 md:h-6 md:w-6"
          />
        ) : (
          <Image
            layout="fixed"
            src={RelatedPostSVG}
            alt=""
            class="mr-2 inline-block h-5 w-5 md:mr-4 md:h-6 md:w-6"
          />
        )}
        :
      </h2>
      <div>
        <PostPreview relatedPosts={relatedPosts.map((post: any) => post.slug)} />
      </div>
    </section>
  ) : (
    <></>
  );
});
