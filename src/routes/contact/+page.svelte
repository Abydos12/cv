<script lang="ts">
  import { Email } from "carbon-icons-svelte";
  import linkedinLogo from "$lib/icons/linkedin-logo.svg";
</script>

<div
  class="mx-auto flex h-full flex-col justify-center gap-4 text-center lg:w-3/6 lg:text-3xl xl:w-3/12"
>
  <a
    class="glass flex items-center justify-center gap-2 p-4 font-mono hover:underline"
    href="mailto:contact@gbdx.fr"
  >
    <Email class="inline-block h-6 w-6 lg:h-8 lg:w-8" />
    <span>contact@gbdx.fr</span>
  </a>
  <a
    class="glass flex items-center justify-center gap-2 p-4 font-mono hover:underline"
    href="https://www.linkedin.com/in/guillaume-bdx"
    target="_blank"
  >
    <img
      alt="Linkedin logo"
      class="inline-block h-6 w-6 lg:h-8 lg:w-8"
      src={linkedinLogo}
    />
    <span>Linkedin</span>
  </a>
</div>
