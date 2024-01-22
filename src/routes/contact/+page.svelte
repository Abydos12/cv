<script>
  import { Email } from "carbon-icons-svelte";
  import linkedinLogo from "$lib/icons/linkedin-logo.svg";
</script>

<div
  class="h-full flex flex-col justify-center text-center gap-4 lg:text-2xl lg:w-2/6 xl:w-2/12 mx-auto"
>
  <a
    class="glass p-4 font-mono text-lg hover:underline flex items-center justify-center gap-2"
    href="mailto:contact@gbdx.fr"
  >
    <Email class="w-6 h-6 inline-block" />
    <span>contact@gbdx.fr</span>
  </a>
  <a
    class="glass p-4 font-mono text-lg hover:underline flex items-center justify-center gap-2"
    href="https://www.linkedin.com/in/guillaume-bdx"
    target="_blank"
  >
    <img alt="Linkedin logo" class="h-6 inline-block" src={linkedinLogo} />
    <span>Linkedin</span>
  </a>
</div>
