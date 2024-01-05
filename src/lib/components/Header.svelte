<script>
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
</script>

<header class="sticky z-10 top-0 flex justify-between sm:grid sm:grid-cols-3 gap-2 items-start">
	<div class="glass p-4 text-center col-start-2">
		<h1 class="text-lg sm:text-xl md:text-4xl font-medium mb-2">Guillaume Berdeaux</h1>
		<h2 class="text-sm sm:text-lg md:text-xl font-mono">Software Engineer</h2>
	</div>

	<div class="glass p-2 md:p-4 justify-self-end">
		<ThemeSwitcher />
	</div>
</header>
