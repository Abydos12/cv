<script>
  import Education from "$lib/components/CorporateExperiences.svelte";
  import IconTag from "$lib/components/IconTag.svelte";
  import linkedinLogo from "$lib/icons/linkedin-logo.svg";
  import { DocumentDownload, Download, Launch } from "carbon-icons-svelte";

  const cv_links = [
    { lang: "English", url: "/guillaume-berdeaux.cv.en.pdf" },
    { lang: "French", url: "/guillaume-berdeaux.cv.fr.pdf" },
  ];
</script>

<div class="h-full flex items-center justify-center">
  <div class="glass p-4 lg:p-8 h-full w-full lg:h-5/6 lg:w-5/6 flex flex-col">
    <div class="text-3xl lg:text-6xl">Guillaume Berdeaux</div>
    <div class="text-lg lg:text-3xl font-mono">Software Engineer</div>
    <p class="flex-1 mt-4 text-lg">I'm a passionate Software Engineer, TODO</p>
    <div class="flex flex-col items-end gap-2">
      <small>Want my CV in PDF ? this way...</small>
      {#each cv_links as link}
        <div class="flex">
          <div
            class="glass bg-zinc-300/20 divide-x divide-zinc-500/40 dark:divide-white/20 p-2"
          >
            <span class="p-2">{link.lang}</span>
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
