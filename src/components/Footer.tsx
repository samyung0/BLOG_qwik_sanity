import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import MailOutline from "../media/mail-outline.svg";
import LinkedIn from "../media/logo-linkedin.svg";

export default component$(() => {
  const date = new Date().toDateString().slice(4);
  return (
    <footer class="py-[max(10vw,150px)] bg-primary-gray text-background-gray flex flex-col justify-center items-center">
  <div class="pb-6">
    <ul class="flex gap-4">
      <li>
        <a href="mailto:yungchinpang999@gmail.com">
          <Image layout="fixed" class={"w-6 h-6 invert"} src={MailOutline} alt="email" />
        </a>
      </li>
      <li>
        <a target="_blank" href="https://www.linkedin.com/in/sam-yung-14ba7b1a4/">
          <Image layout="fixed" class={"w-6 h-6 invert"} src={LinkedIn} alt="linkedin" />
        </a>
      </li>
    </ul>
  </div>
  <div class=" tracking-wide leading-8">{date}</div>
</footer>
  )
})