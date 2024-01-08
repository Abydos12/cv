<script>
	import Education from '$lib/components/CorporateExperiences.svelte';
	import IconTag from '$lib/components/IconTag.svelte';
	import linkedinLogo from '$lib/icons/linkedin-logo.svg'

	const links = [
		{ url: 'experiences', label: 'Experiences' },
		{ url: 'education', label: 'Education' },
		{ url: 'about', label: 'About' }
	];
</script>

<!--<div class="glass p-2">-->
<!--	<Education />-->
<!--</div>-->

<div class="h-full flex items-center justify-center">
	<div class="glass bg-zinc-700/30 p-8 h-5/6 w-5/6 flex flex-col">
		<div class="text-6xl">Guillaume Berdeaux</div>
		<div class="text-3xl font-mono">Software Engineer</div>
		<p class="flex-1">text</p>
		<a href="/guillaume-berdeaux.cv.pdf" class="self-end border border-white/20 p-4 rounded hover:border-green-500 hover:text-green-500">Download my CV (pdf)</a>
	</div>
</div>



<!--<div class="h-full flex flex-col gap-4 justify-center w-5/6 m-auto text-center">-->
<!--	{#each links as link}-->
<!--		<a href={link.url} class="glass p-2 hover:bg-zinc-400/40 text-2xl font-bold">-->
<!--		-->
<!--	<span-->
<!--		class="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-rose-600  dark:from-green-600 dark:to-teal-600 transition-colors"-->
<!--	>-->
<!--		{link.label}-->
<!--	</span>-->
<!--		</a>-->
<!--	{/each}-->
<!--</div>-->
