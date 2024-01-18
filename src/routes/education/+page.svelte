<script>
	const educations = [
		{
			period: 'September 2019 - September 2022',
			school: 'EFREI Paris',
			description:
				'The Engineering degree (CTI accredited) is a master level degree. This Computer Engineering degree is software oriented but also covers subjects such as cloud computing, machine learning, networks, systems administration',
			details: '3 years apprenticeship',
			diploma: {
				title: 'Computer Engineering (major Software)',
				url: 'https://www.cti-commission.fr/'
			},
			tags: 'Engineering Degree – Computer Science – Software Engineering - Computer Engineering'
		},
		{
			period: 'September 2017 - August 2019',
			school: 'IUT de Vélizy Université de Versailles-St-Quentin-en-Yvelines',
			description:
				'The DUT (Diplôme Universitaire de technologie - Technological University Degree) is a two years university degree leading to the technician title. It encompasses all areas of computer science such as programming, networks, operating systems, databases.',
			details: '2 years training with a 3-month internship',
			diploma: {
				title: 'DUT informatique (Technological University Degree - computer science)',
				url: 'https://www.cti-commission.fr/'
			},
			tags: 'Technological University Degree – Computer Science'
		}
	];
</script>

<div class="h-full flex flex-col gap-4 lg:gap-8 lg:w-5/6 m-auto">
	{#each educations as e}
		<div class="glass p-4 lg:p-8 flex flex-col gap-4 lg:gap-8">
			<div class="text-xl lg:text-4xl">{e.period}</div>
			<hr class="border-zinc-800 dark:border-zinc-200">
			<div class="text-lg lg:text-3xl font-mono"><u>{e.school}</u></div>
			<p class="font-semibold lg:text-xl">{e.diploma.title}</p>
			<p class="lg:text-lg"><i>{e.details}</i></p>
			<p class="lg:text-lg">{e.description}</p>
			<p class="text-sm">{e.tags}</p>
		</div>
	{/each}
</div>
