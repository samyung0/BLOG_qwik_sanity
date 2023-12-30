import { component$ } from "@builder.io/qwik";
import sanityImage from "../../util/sanityImage";
import { posts } from "../../util/sanity";
import type { Post } from "../../types/sanity";
import { Image } from "@unpic/qwik";

export default component$(({tag, relatedPosts}: {
  tag?: string;
  relatedPosts?: Post["relatedPosts"];
}) => {
  return (
    <article>
  
    <ul class="grid xl:grid-cols-3 xl:gap-x-24 lg:gap-y-[6vw] lg:gap-x-24 sm:grid-cols-2 gap-12 grid-cols-1">
      {posts &&
        posts
          .filter((post) => !tag || post.tags.find((tag2) => tag2 === tag))
          .filter((post) => !relatedPosts || relatedPosts.includes(post.slug))
          .map((post) => (
            <li key={post.slug}>
              <div class="text-center">
                {post.thumbnail.asset.url && (
                  <a class="inline-block" href={`/post/${post.slug}`}>
                    <Image
                      // background={post.thumbnail.asset.metadata.lqip}
                      class="h-[200px] w-full object-contain object-bottom"
                      src={sanityImage(post.thumbnail.asset.url)}
                      alt={post.thumbnail.alt || ""}
                      width={post.thumbnail.asset.metadata.dimensions.width}
                      height={post.thumbnail.asset.metadata.dimensions.height}
                    />
                  </a>
                )}
              </div>
              <div>
                <div class="md:mt-2 bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_50%,rgba(125,125,125,.255)_50%,rgba(255,255,255,0)_calc(50%+3px),rgba(255,255,255,0)_100%)]">
                  <span class="text-primary-gray tracking-wide md:text-xs text-[0.5rem] leading-4 font-bold bg-background-gray md:pr-4 pr-2">
                    {new Date(post._createdAt).toDateString().slice(4)}
                  </span>
                </div>
                <h3>
                  <a
                  
                    class="pt-2 block font-bold tracking-wide md:text-lg text-base text-primary-gray"
                    href={`/post/${post.slug}`}
                  >
                    {post.name}
                  </a>
                </h3>
                <div class="pt-1 flex items-center space-x-2">
                  <span class="text-primary-gray md:text-sm sm:text-xs text-[10px]">
                    {post.readTime && Number(post.readTime) > 0 ? post.readTime : "1"} min read
                  </span>
                </div>
                
              </div>
            </li>
          ))}
    </ul>
</article>
  )
})