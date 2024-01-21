<script>
  const educations = [
    {
      period: {
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
      period: {
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

<div class="h-full flex flex-col gap-4 lg:gap-8 lg:w-5/6 2xl:w-4/6 m-auto">
  {#each educations as e}
    <section class="glass">
      <div
        class="backdrop-brightness-100 dark:backdrop-brightness-150 p-4 lg:p-8 flex justify-between items-center"
      >
        <div class="text-xl lg:text-4xl font-bold font-mono">{e.school}</div>
        <div
          class="text-sm lg:text-lg text-zinc-700 dark:text-zinc-400 font-semibold"
        >
          <div>{e.period.start}</div>
          <div>{e.period.end}</div>
        </div>
      </div>
      <div class="p-8 flex flex-col gap-4 lg:gap-8">
        <p class="font-semibold lg:text-xl">{e.diploma.title}</p>
        <p class="lg:text-lg"><i>{e.details}</i></p>
        <p class="lg:text-lg">{e.description}</p>
        <p class="text-sm">{e.tags}</p>
      </div>
    </section>
  {/each}
</div>
