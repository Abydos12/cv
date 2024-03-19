<script lang="ts">
  import sveltekitLogo from "$lib/icons/sveltekit-logo.svg";
  import TailwindcssLogo from "$lib/components/logos/TailwindcssLogo.svelte";
</script>

<footer class="flex justify-center">
  <div
    class="glass flex flex-col items-center gap-x-2 p-2 text-center font-mono md:flex-row md:justify-center md:p-4"
  >
    <p>Built by Guillaume Berdeaux</p>
    <p>
      <a href="https://kit.svelte.dev/">
        <img
          alt="SvelteKit logo"
          class="inline-block h-5"
          src={sveltekitLogo}
        />
      </a>
      +
      <a href="https://tailwindcss.com/">
        <TailwindcssLogo class="inline-block h-4" />
      </a>
    </p>
  </div>
</footer>
