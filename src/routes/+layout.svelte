<script>
	import '../app.css';
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
</script>

<header class="sticky z-10 top-2 md:top-4 m-2 md:m-4 md:grid md:grid-cols-3 items-start">
	<div></div>
	<div class="glass p-4">
		<h1 class="text-3xl md:text-4xl font-medium text-center">Guillaume Berdeaux</h1>
	</div>

	<div class="glass p-4 justify-self-end">
		<ThemeSwitcher />
	</div>
</header>

<main class="flex-1 p-2 md:p-4 flex flex-col gap-2">
	<div class="glass flex-1"></div>
	<slot />
</main>

<footer class="p-2 md:p-4">
	<div class="glass p-2 md:p-4">Footer</div>
</footer>
