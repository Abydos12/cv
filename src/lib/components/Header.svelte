<script>
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
	import linkedinLogo from '$lib/icons/linkedin-logo.svg';
</script>

<header class="sticky z-10 top-0 flex justify-between md:grid md:grid-cols-3 gap-2 items-start">
	<div>
		<a
			href="www.linkedin.com/in/guillaume-bdx"
			class="glass p-2 hover:bg-blue-500/40 font-bold flex items-center gap-2"
		>
			<img src={linkedinLogo} alt="Linkedin logo" class="inline-block h-5" />
			Linkedin
		</a>
		<a
			href="mailto:contact@gbdx.fr"
			class="glass p-2 hover:bg-blue-500/40 font-bold flex items-center gap-2"
		>
			<img src={linkedinLogo} alt="Linkedin logo" class="inline-block h-5" />
			Linkedin
		</a>
	</div>

	<div class="glass p-2 md:p-4 text-center col-start-2">
		<h1 class="text-lg md:text-xl lg:text-2xl xl:text-4xl font-medium mb-2">Guillaume Berdeaux</h1>
		<h2 class="text-sm md:text-md lg:text-lg xl:text-xl font-mono">Software Engineer</h2>
	</div>

	<div class="glass p-1 md:p-2 lg:p-4 justify-self-end">
		<ThemeSwitcher />
	</div>
</header>
