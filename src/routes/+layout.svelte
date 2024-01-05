<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="flex flex-col h-dvh gap-2 md:gap-4 p-2 md:p-4 overflow-y-auto">
	<Header />

	<main class="flex-1 flex flex-col gap-2">
		<slot />
	</main>

	<Footer />
</div>
