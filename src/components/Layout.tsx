import { Slot, component$ } from "@builder.io/qwik";
import Footer from "~/components/Footer";
import Nav from "~/components/Nav";

export default component$(({ noPaddingTop }: { noPaddingTop?: boolean }) => {
  return (
    <>
      <Nav />
      {noPaddingTop ? (
        <Slot />
      ) : (
        <div class="min-h-[100vh] px-6 pt-[40vh] md:px-12 lg:px-[10vw]">
          <Slot />
        </div>
      )}
      <Footer />
    </>
  );
});
