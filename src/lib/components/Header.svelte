<script>
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
  class="glass p-4 flex justify-between lg:grid lg:grid-flow-col lg:auto-cols-max gap-2 items-center sticky top-0 z-10"
>
  <a href="/" class="hover:underline">
    <div class="text-lg lg:text-2xl">Guillaume Berdeaux</div>
    <div class="font-mono text-xs lg:text-md xl:text-lg">Software Engineer</div>
  </a>

  <div
    class="hidden lg:grid lg:grid-cols-5 text-center xl:text-lg divide-x divide-black dark:divide-zinc-200"
  >
    {#each links as link}
      <a
        href={link.url}
        class="px-2 xl:px-4 hover:underline {$page.url.pathname === link.url
          ? 'text-red-600 dark:text-green-500'
          : ''}"
      >
        {link.label}
      </a>
    {/each}
  </div>

  <button on:click={toggleIsMenuOpen} class="lg:hidden">
    <Menu class="w-8 h-8" />
  </button>

  <div class="justify-self-end max-lg:hidden">
    <ThemeSwitcher />
  </div>
</header>

{#if isMenuOpen}
  <div
    class:hidden={!isMenuOpen}
    class="fixed top-0 right-0 left-0 bottom-0 z-10 p-8 dark:backdrop-brightness-50 backdrop-blur-3xl overflow-auto"
  >
    <div class="glass flex flex-col h-full rounded-lg shadow-lg p-6 overflow-y-auto">
      <button class="absolute top-6 right-6" on:click={toggleIsMenuOpen}>
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
      <div class="w-full mt-2">
        <ThemeSwitcher />
      </div>
    </div>
  </div>
{/if}
