<script>
  import pythonLogo from "$lib/icons/python-logo.svg";
  import typescriptLogo from "$lib/icons/typescript-logo.svg";
  import IconTag from "$lib/components/IconTag.svelte";

  const experiences = [
    {
      title: "Full Stack Engineer (Apprenticeship)",
      company: "Société Générale",
      location: "Paris, France",
      dates: { start: "September 2019", end: "September 2022" },
      missions: [
        "Tools design and development for trading floor operators.",
        "Development methodology: XP (Extreme Programming)",
        "Web application developed on an REST Architecture",
        "Back-end: Python REST API using FastAPI / Flask with SQLAlchemy (PostgreSQL)",
        "Front-end: Pure Javascript, SPA using React, Jinja templates",
        "Automation scripts that interact with different applications",
        "CD / CI with Github, Jenkins and Kubernetes",
      ],
    },
  ];
</script>

<div class="h-full flex flex-col gap-4 lg:gap-6">
  {#each experiences as e}
    <div class="glass">
      <div
        class="backdrop-brightness-100 dark:backdrop-brightness-150 p-4 lg:p-8 flex justify-between items-center"
      >
        <div class="font-mono">
          <div class="text-xl lg:text-3xl font-bold">
            {e.title}
          </div>
          <div class="lg:text-2xl font-semibold italic">{e.company}</div>
          <div class="lg:text-2xl font-semibold italic">{e.location}</div>
        </div>
        <div
          class="text-sm lg:text-lg text-zinc-700 dark:text-zinc-400 font-semibold"
        >
          <div>{e.dates.start}</div>
          <div>{e.dates.end}</div>
        </div>
      </div>
      <div class=" p-4 lg:p-8">
        <ul class="list-square list-inside text-lg">
          {#each e.missions as m}
            <li>{m}</li>
          {/each}
        </ul>
        <IconTag label="Python" logo={pythonLogo} />
        <IconTag label="Typescript" logo={typescriptLogo} />
      </div>
    </div>
  {/each}
</div>
