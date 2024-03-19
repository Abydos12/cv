<script lang="ts">
  const educations = [
    {
      dates: {
        start: "September 2019",
        end: "September 2022",
      },
      school: "EFREI Paris",
      description:
        "The Engineering degree (CTI accredited) is a master's degree. This Computer Engineering degree is software oriented, but also covers subjects such as cloud computing, machine learning, networks, systems administration",
      details: "apprenticeship - 3 year",
      diploma: {
        title: "Computer Engineering (major Software)",
        url: "https://www.cti-commission.fr/",
      },
      tags: "Engineering Degree – Computer Science – Software Engineering - Computer Engineering",
    },
    {
      dates: {
        start: "September 2017",
        end: "September 2019",
      },
      school: "IUT de Vélizy",
      description:
        "The DUT (Diplôme Universitaire de technologie - Technological University Degree) is a two year university degree leading to the technician title. It encompasses all areas of computer science such as programming, networks, operating systems, databases.",
      details: "2 years training with a 3-month internship",
      diploma: {
        title:
          "DUT informatique (Technological University Degree - computer science)",
        url: "https://www.cti-commission.fr/",
      },
      tags: "Technological University Degree – Computer Science",
    },
  ];
</script>

<div class="m-auto flex h-full flex-col gap-4 lg:w-5/6 lg:gap-8 2xl:w-4/6">
  {#each educations as e}
    <section class="glass font-mono">
      <div
        class="flex items-center justify-between p-4 backdrop-brightness-100 dark:backdrop-brightness-150 lg:p-8"
      >
        <div class="font-mono text-xl font-bold lg:text-4xl">{e.school}</div>
        <div
          class="text-sm font-semibold text-zinc-700 dark:text-zinc-400 lg:text-lg"
        >
          <div>{e.dates.start}</div>
          <div>{e.dates.end}</div>
        </div>
      </div>
      <div class="flex flex-col gap-4 p-8 lg:gap-8">
        <p class="font-semibold lg:text-xl">{e.diploma.title}</p>
        <p class="lg:text-lg"><i>{e.details}</i></p>
        <p class="lg:text-lg">{e.description}</p>
        <p class="text-sm">{e.tags}</p>
      </div>
    </section>
  {/each}
</div>
