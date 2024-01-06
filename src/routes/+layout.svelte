<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="flex flex-col h-dvh gap-4 lg:gap-6 p-4 lg:p-6 overflow-y-auto">
	<Header />

	<main class="flex-1">
		<slot />
	</main>

	<Footer />
</div>
