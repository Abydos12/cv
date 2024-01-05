<script>
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
</script>

<header class="sticky z-10 top-0 flex sm:grid sm:grid-cols-3 gap-2 items-start">
	<div class="glass p-4 text-center">
		<h1 class="text-3xl md:text-4xl font-medium mb-2 col-start-1">Guillaume Berdeaux</h1>
		<h2 class="text-lg md:text-xl font-mono">Software Engineer</h2>
	</div>

	<div class="glass p-2 md:p-4 justify-self-end">
		<ThemeSwitcher />
	</div>
</header>
