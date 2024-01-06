<script>
	import Education from '$lib/components/CorporateExperiences.svelte';
	import IconTag from '$lib/components/IconTag.svelte';
	import linkedinLogo from '$lib/img/linkedin-logo.svg'

	const links = [
		{ url: 'experiences', label: 'Experiences' },
		{ url: 'education', label: 'Education' },
		{ url: 'about', label: 'About' }
	];
</script>

<!--<div class="glass p-2">-->
<!--	<Education />-->
<!--</div>-->

{#each Array(0) as i}
	<section class="glass p-2">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec lacinia ante, vitae
		pharetra ipsum. Mauris volutpat, mauris non venenatis egestas, quam tortor volutpat tellus, ut
		finibus mi mauris sed sapien. Nunc dapibus vitae massa et euismod. Aliquam massa eros, vulputate
		quis tristique et, suscipit sit amet felis. Ut ut libero eget tellus imperdiet finibus.
		Pellentesque tristique non sem sed ultricies. Proin eget sodales est. Quisque fringilla vitae
		turpis lobortis consectetur. Sed lacus nibh, tristique non viverra vitae, mollis sed neque.
		Phasellus non erat sed sem suscipit tempus. Cras quis tincidunt nisi. In neque enim, elementum
		vel mi ac, convallis lacinia dui. Donec blandit congue diam id finibus. Duis varius, ipsum id
		ullamcorper consequat, diam tellus dignissim augue, vitae ullamcorper elit ligula vel augue.
	</section>
{/each}

<div class="h-full flex flex-col gap-4 justify-center w-5/6 m-auto text-center">
	{#each links as link}
		<a href={link.url} class="glass p-2 hover:bg-zinc-400/40 text-2xl font-bold">
		
	<span
		class="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-rose-600  dark:from-green-600 dark:to-teal-600 transition-colors duration-300"
	>
		{link.label}
	</span>


		</a>
	{/each}
</div>
