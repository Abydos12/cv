<script lang="ts">
  import { DocumentDownload, Launch } from "carbon-icons-svelte";
  import cvEnglish from "$lib/assets/guillaume.berdeaux.cv.en.pdf";
  import cvFrench from "$lib/assets/guillaume.berdeaux.cv.fr.pdf";

  const cv_links = [
    { lang: "English", url: cvEnglish },
    { lang: "French", url: cvFrench },
  ];
</script>

<div class="flex h-full flex-col items-center justify-center gap-4">
  <div class="glass flex w-full flex-col gap-4 p-4 lg:w-5/6 lg:gap-8 lg:p-8">
    <div>
      <div class="text-3xl lg:text-6xl">Guillaume Berdeaux</div>
      <div class="font-mono text-lg lg:text-3xl">Software Engineer</div>
    </div>

    <p class="font-mono text-lg lg:text-4xl">
      I'm a passionate Software Engineer and computer technologies enthusiast. I
      love to try and experiment new technologies. Constantly seeking new ways
      to build and improve software.
    </p>
    <ul class="list-inside list-square font-mono text-lg">
      I built this website for two main reasons:
      <li>
        Learn Svelte, Tailwindcss and show some of my skills about web
        development, self-hosting and deployment
      </li>
      <li>Have a online Resume</li>
    </ul>
    <a
      class="font-mono underline hover:decoration-red-600 dark:hover:decoration-green-600"
      href="/skills#resume-app"
    >
      Curious about how I built and deployed this app, this way...
    </a>
  </div>

  <div class="flex flex-col gap-2 max-md:w-5/6">
    <small>Want my Resume in PDF ? this way...</small>
    <div class="flex gap-2 max-md:flex-col">
      {#each cv_links as link}
        <div
          class="glass divide-y divide-zinc-500/40 text-center dark:divide-white/20"
        >
          <div class="p-2">{link.lang}</div>
          <div
            class="grid grid-cols-2 divide-x divide-zinc-500/40 dark:divide-white/20"
          >
            <a
              href={link.url}
              target="_blank"
              rel="noopener"
              class="p-2 hover:text-red-600 dark:hover:text-green-500"
            >
              <Launch class="inline-block" />
              Open
            </a>
            <a
              href={link.url}
              download
              class="p-2 hover:text-red-600 dark:hover:text-green-500"
            >
              <DocumentDownload class="inline-block" />
              Download
            </a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
