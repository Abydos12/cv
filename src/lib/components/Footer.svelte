<script>
	import SvelteKitLogo from '$lib/components/SvelteKitLogo.svelte';
	import TailwindcssLogo from '$lib/components/TailwindcssLogo.svelte';
</script>

<footer class="glass p-2 md:p-4 font-mono align-middle text-center">
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
