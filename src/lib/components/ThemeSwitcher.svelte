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

<div class="sm:text-xl text-sm rounded flex gap-1">
	{#each modes as { name, symbol }}
		<button
			class="p-2 box-border border rounded {$mode === name ? 'glass' : 'border-transparent hover:bg-zinc-400/40'}"
			on:click={() => applyMode(name)}
		>
			{symbol}
		</button>
	{/each}
</div>
