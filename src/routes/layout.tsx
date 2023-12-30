import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { getPosts, getAuthors, getTags } from "../../util/sanity";

export const usePosts = routeLoader$(async () => {
  return getPosts();
})

export const useAuthors = routeLoader$(async () => {
  return getAuthors();
})

export const useTags = routeLoader$(async () => {
  return getTags();
})

export default component$(() => {
  return (
      <main>
        <Slot />
      </main>
  );
});
