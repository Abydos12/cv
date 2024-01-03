<script>
	import '../app.css';
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
</script>

<header class="flex p-2 items-center justify-between md:justify-around  bg-zinc-400/25 border-zinc-500/25 border-b backdrop-blur-sm sticky top-0">
	<h1 class="text-4xl">Big title</h1>
	<ThemeSwitcher />
</header>

<main class="flex-1">
	<slot />
</main>


<footer>Footer</footer>


