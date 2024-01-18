<script>
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
	import Menu from 'carbon-icons-svelte/lib/Menu.svelte';
	import { page } from '$app/stores';
	import { CloseLarge } from 'carbon-icons-svelte';

	const links = [
		{ url: '/', label: 'Home' },
		{ url: '/experiences', label: 'Experiences' },
		{ url: '/education', label: 'Education' },
		{ url: '/about', label: 'About' }
	];

	let isMenuOpen = false;

	function toggleIsMenuOpen() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<!--<header class="sticky z-10 top-0 flex justify-between md:grid md:grid-cols-3 gap-2 items-start">-->
<!--	<div>-->
<!--		<a-->
<!--			href="www.linkedin.com/in/guillaume-bdx"-->
<!--			class="glass p-2 hover:bg-blue-500/40 font-bold flex items-center gap-2"-->
<!--		>-->
<!--			<img src={linkedinLogo} alt="Linkedin logo" class="inline-block h-5" />-->
<!--			Linkedin-->
<!--		</a>-->
<!--		<a-->
<!--			href="mailto:contact@gbdx.fr"-->
<!--			class="glass p-2 hover:bg-blue-500/40 font-bold flex items-center gap-2"-->
<!--		>-->
<!--			<span class="text-xl">📧</span>-->
<!--			contact@gbdx.fr-->
<!--		</a>-->
<!--	</div>-->

<!--	<div class="glass p-2 md:p-4 text-center col-start-2">-->
<!--		<h1 class="text-lg md:text-xl lg:text-2xl xl:text-4xl font-medium mb-2">Guillaume Berdeaux</h1>-->
<!--		<h2 class="text-sm md:text-md lg:text-lg xl:text-xl font-mono">Software Engineer</h2>-->
<!--	</div>-->

<!--	<div class="glass p-1 md:p-2 lg:p-4 justify-self-end">-->
<!--		<ThemeSwitcher />-->
<!--	</div>-->
<!--</header>-->

<header
	class="glass p-4 flex justify-between lg:grid lg:grid-flow-col lg:auto-cols-max gap-2 items-center sticky top-0 z-10"
>
	<div class="">
		<div class="text-lg lg:text-2xl">Guillaume Berdeaux</div>
		<div class="font-mono text-xs lg:text-md">Software Engineer</div>
	</div>

	<div
		class="hidden lg:grid lg:grid-cols-4 text-center text-lg divide-x divide-black dark:divide-zinc-200"
	>
		{#each links as link}
			<a
				href={link.url}
				class="px-4 hover:underline {$page.url.pathname === link.url ? 'text-red-600 dark:text-green-500' : ''}"
			>
				{link.label}
			</a>
		{/each}
	</div>

	<button on:click={toggleIsMenuOpen} class="lg:hidden">
		<Menu class="w-8 h-8" />
	</button>

	<div class="justify-self-end max-lg:hidden">
		<ThemeSwitcher />
	</div>
</header>

{#if isMenuOpen}
	<div
		class:hidden={!isMenuOpen}
		class="fixed top-0 right-0 left-0 bottom-0 z-10 p-8 dark:backdrop-brightness-50 backdrop-blur-3xl"
	>
		<div class=" flex flex-col h-full rounded-lg shadow-lg p-6 glass">
			<button class="absolute top-6 right-6" on:click={toggleIsMenuOpen}>
				<CloseLarge class="h-6 w-6" />
			</button>
			<ul class=" flex-1 space-y-6">
				{#each links as link}
					<li>
						<a
							href={link.url}
							on:click={toggleIsMenuOpen}
							class="hover:underline {$page.url.pathname === link.url
								? 'text-red-600 dark:text-green-500'
								: ''}"
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
			<ThemeSwitcher />
		</div>
	</div>
{/if}
