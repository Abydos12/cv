<script>
	import { writable } from 'svelte/store';

	const modes = [
		{ name: 'light', symbol: '🌕' },
		{ name: 'dark', symbol: '🌑' },
		{ name: 'system', symbol: ' 🌓' }
	];

	const mode = writable(getDefaultMode());

	function getDefaultMode() {
		if (!('theme' in localStorage)) {
			return 'system';
		} else {
			return localStorage.theme;
		}
	}

	function applyMode(m) {
		mode.set(m);
		if (m === 'system') {
			localStorage.removeItem('theme');
		} else {
			localStorage.setItem('theme', m);
		}
	}

	$: {
		if (
			$mode === 'dark' ||
			($mode === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
</script>

<div class="text-xl rounded flex gap-1">
	{#each modes as { name, symbol }}
		<button
			class="p-2 box-border {$mode === name
				? 'bg-violet-500/25 border-violet-500 dark:bg-green-500/25 dark:border-green-500 border-b-4 rounded-t'
				: 'hover:border-violet-500 dark:hover:border-green-500 hover:border-b-4 border-b-4 border-transparent'}"
			on:click={() => applyMode(name)}
		>
			{symbol}
		</button>
	{/each}
</div>
