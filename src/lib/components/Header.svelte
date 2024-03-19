<script lang="ts">
  import ThemeSwitcher from "$lib/components/ThemeSwitcher.svelte";
  import Menu from "carbon-icons-svelte/lib/Menu.svelte";
  import { page } from "$app/stores";
  import { CloseLarge } from "carbon-icons-svelte";

  const links = [
    { url: "/", label: "Home" },
    { url: "/experiences", label: "Experiences" },
    { url: "/education", label: "Education" },
    { url: "/skills", label: "Skills" },
    { url: "/contact", label: "Contact" },
  ];

  let isMenuOpen = false;

  function toggleIsMenuOpen() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<header
  class="glass sticky top-0 z-10 flex items-center justify-between gap-2 p-4 lg:grid lg:auto-cols-max lg:grid-flow-col"
>
  <a href="/" class="hover:underline">
    <div class="text-lg lg:text-2xl">Guillaume Berdeaux</div>
    <div class="lg:text-md font-mono text-xs xl:text-lg">Software Engineer</div>
  </a>

  <div
    class="hidden divide-x divide-black text-center font-mono dark:divide-zinc-200 lg:grid lg:grid-cols-5 xl:text-lg"
  >
    {#each links as link}
      <a
        href={link.url}
        class="px-2 hover:underline xl:px-4 {$page.url.pathname === link.url
          ? 'text-red-600 dark:text-green-500'
          : ''}"
      >
        {link.label}
      </a>
    {/each}
  </div>

  <button on:click={toggleIsMenuOpen} class="lg:hidden">
    <Menu class="h-8 w-8" />
  </button>

  <div class="justify-self-end max-lg:hidden">
    <ThemeSwitcher />
  </div>
</header>

{#if isMenuOpen}
  <div
    class:hidden={!isMenuOpen}
    class="fixed bottom-0 left-0 right-0 top-0 z-10 overflow-auto p-8 font-mono backdrop-blur-3xl dark:backdrop-brightness-50"
  >
    <div
      class="glass flex h-full flex-col overflow-y-auto rounded-lg p-6 shadow-lg"
    >
      <button class="absolute right-6 top-6" on:click={toggleIsMenuOpen}>
        <CloseLarge class="h-6 w-6" />
      </button>
      <ul class=" flex-1 space-y-6">
        {#each links as link}
          <li>
            <a
              href={link.url}
              on:click={toggleIsMenuOpen}
              class="hover:underline {$page.url.pathname === link.url
                ? 'text-red-600 dark:text-green-500'
                : ''}"
            >
              {link.label}
            </a>
          </li>
        {/each}
      </ul>
      <div class="mt-2 w-full">
        <ThemeSwitcher />
      </div>
    </div>
  </div>
{/if}
