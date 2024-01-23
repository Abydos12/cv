<script>
  import pythonLogo from "$lib/icons/python-logo.svg";
  import typescriptLogo from "$lib/icons/typescript-logo.svg";
  import IconTag from "$lib/components/IconTag.svelte";
</script>

<div class="h-full flex flex-col gap-4 lg:gap-6">
  <div class="glass">
    <div
      class="backdrop-brightness-100 dark:backdrop-brightness-150 p-4 lg:p-8 flex justify-between items-center"
    >
      <div class="font-mono">
        <div class="text-xl lg:text-3xl font-bold">
          Full Stack Engineer (Apprenticeship)
        </div>
        <div class="lg:text-2xl font-semibold italic">Société Générale</div>
      </div>
      <div
        class="text-sm lg:text-lg text-zinc-700 dark:text-zinc-400 font-semibold"
      >
        <div>September 2019</div>
        <div>September 2022</div>
      </div>
    </div>
    <div class=" p-4 lg:p-8">
      <ul class="list-square list-inside text-lg">
        <li>Tools design and development for trading floor operators.</li>
        <li>
          Development methodology: Extreme programming (<abbr
            title="Extreme programming">XP</abbr
          >)
        </li>
        <li>Web application developed on an REST Architecture</li>
        <li>
          Back-end: Python REST API using FastAPI / Flask with SQLAlchemy
          (PostgreSQL)
        </li>
        <li>Front-end: Pure Javascript, SPA using React, Jinja templates</li>
        <li>Automation scripts that interact with different applications</li>
        <li>CD / CI with Github, Jenkins and Kubernetes</li>
      </ul>
      <IconTag label="Python" logo={pythonLogo} />
      <IconTag label="Typescript" logo={typescriptLogo} />
    </div>
  </div>
</div>
