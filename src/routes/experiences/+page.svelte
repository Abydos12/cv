<script>
  const experiences = [
    {
      title: "Full Stack Engineer (VIE)",
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
        "Authentication and authorizations with OIDC (OpenID Connect)",
        "CD / CI with Github, Jenkins and Kubernetes",
      ],
    },
    {
      title: "Full Stack Developer (Internship)",
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

<div class="h-full flex flex-col gap-4 lg:gap-8 lg:w-5/6 2xl:w-4/6 m-auto">
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
        <ul class="list-square list-inside lg:text-lg">
          {#each e.missions as m}
            <li>{m}</li>
          {/each}
        </ul>
      </div>
    </div>
  {/each}
</div>
