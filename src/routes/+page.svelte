<script>
  import { DocumentDownload, Launch } from "carbon-icons-svelte";

  const cv_links = [
    { lang: "English", url: "/guillaume-berdeaux.cv.en.pdf" },
    { lang: "French", url: "/guillaume-berdeaux.cv.fr.pdf" },
  ];
</script>

<div class="h-full flex flex-col items-center justify-center gap-4">
  <div class="glass p-4 lg:p-8 w-full lg:w-5/6 flex flex-col gap-4 lg:gap-8">
    <div>
      <div class="text-3xl lg:text-6xl">Guillaume Berdeaux</div>
      <div class="text-lg lg:text-3xl font-mono">Software Engineer</div>
    </div>

    <p class="text-lg lg:text-4xl font-mono">
      I'm a passionate Software Engineer and computer technologies enthusiast. I
      love to try and experiment new technologies. Constantly seeking new ways
      to build and improve software.
    </p>
    <ul class="list-square list-inside text-lg font-mono">
      I built this website for two main reasons:
      <li>
        Learn Svelte, Tailwindcss and show some of my skills about web
        development, self-hosting and deployment
      </li>
      <li>Have a online Resume</li>
    </ul>
    <a
      href="/skills#resume-app"
      class="underline hover:decoration-red-600 dark:hover:decoration-green-600 font-mono"
    >
      Curious about how I built and deployed this app, this way...
    </a>
  </div>

  <div class="flex flex-col gap-2 max-md:w-5/6">
    <small>Want my Resume in PDF ? this way...</small>
    <div class="flex max-md:flex-col gap-2">
      {#each cv_links as link}
        <div
          class="glass text-center divide-y divide-zinc-500/40 dark:divide-white/20"
        >
          <div class="p-2">{link.lang}</div>
          <div
            class="divide-x divide-zinc-500/40 dark:divide-white/20 grid grid-cols-2"
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
