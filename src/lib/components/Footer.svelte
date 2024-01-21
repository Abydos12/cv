<script>
  import sveltekitLogo from "$lib/icons/sveltekit-logo.svg";
  import TailwindcssLogo from "$lib/components/logos/TailwindcssLogo.svelte";
</script>

<footer class="flex justify-center">
  <div
    class="glass p-2 md:p-4 font-mono text-center flex gap-x-2 flex-col items-center md:flex-row md:justify-center"
  >
    <p>Built by Guillaume Berdeaux</p>
    <p>
      <a href="https://kit.svelte.dev/">
        <img
          src={sveltekitLogo}
          alt="SvelteKit logo"
          class="h-5 inline-block"
        />
      </a>
      +
      <a href="https://tailwindcss.com/">
        <TailwindcssLogo class="h-4 inline-block" />
      </a>
    </p>
  </div>
</footer>
