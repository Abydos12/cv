<script lang="ts">
  const experiences = [
    {
      title: "Full Stack Software Engineer",
      company: "Société Générale",
      location: "Manhattan, NY, United States",
      dates: { start: "November 2022", end: "April 2024" },
      missions: [
        "Design and develop an application to help the management of several processes",
        "Web application developed on an REST Architecture",
        "Front-end: Angular",
        "Back-end: SpringBoot (Java) with PostgreSQL",
        "Authentication and authorizations with OIDC (OpenID Connect)",
        "Tools script with python",
      ],
    },
    {
      title: "Full Stack Software Developer (Apprenticeship)",
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
        "Authentication and authorizations with OIDC (OpenID Connect)",
        "CD / CI with Github, Jenkins and Kubernetes",
      ],
    },
    {
      title: "Full Stack Software Developer (Internship)",
      company: "Société Générale",
      location: "Paris, France",
      dates: { start: "April 2019", end: "June 2019" },
      missions: [
        "Design and develop an application to improve the management of technical data previously stored on hundreds of Excel files",
        "Web application developed on an REST Architecture",
        "Front-end: Angular",
        "Back-end: ExpressJS",
      ],
    },
  ];
</script>

<div class="m-auto flex h-full flex-col gap-4 lg:w-5/6 lg:gap-8 2xl:w-4/6">
  {#each experiences as e}
    <div class="glass font-mono">
      <div
        class="flex items-center justify-between p-4 backdrop-brightness-100 dark:backdrop-brightness-150 lg:p-8"
      >
        <div>
          <div class="text-xl font-bold lg:text-3xl">
            {e.title}
          </div>
          <div class="font-semibold italic lg:text-2xl">{e.company}</div>
          <div class="font-semibold italic lg:text-2xl">{e.location}</div>
        </div>
        <div
          class="text-sm font-semibold text-zinc-700 dark:text-zinc-400 lg:text-lg"
        >
          <div>{e.dates.start}</div>
          <div>{e.dates.end}</div>
        </div>
      </div>
      <div class=" p-4 lg:p-8">
        <ul class="list-inside list-square lg:text-lg">
          {#each e.missions as m}
            <li>{m}</li>
          {/each}
        </ul>
      </div>
    </div>
  {/each}
</div>
