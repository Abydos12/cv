<script>
	import SvelteKitLogo from '$lib/components/logos/SvelteKitLogo.svelte';
	import TailwindcssLogo from '$lib/components/logos/TailwindcssLogo.svelte';
</script>

<footer class="glass p-2 md:p-4 font-mono text-center flex gap-x-2 flex-col items-center md:flex-row md:justify-center">
	<p>Built by Guillaume Berdeaux</p>
	<p>
		<a href="https://kit.svelte.dev/">
			<SvelteKitLogo class="h-5 inline-block" />
		</a>
		+
		<a href="https://tailwindcss.com/">
			<span class="sr-only">Tailwind CSS home page</span>
			<TailwindcssLogo class="h-4 inline-block" />
		</a>
	</p>
</footer>
