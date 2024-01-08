<script>
	import {mode, modes, applyMode} from '$lib/tools/darkMode.js'

	export let displayLabel = false;
</script>

<div class="sm:text-xl text-sm rounded flex gap-1">
	{#each modes as { name, symbol }}
		<button
			class="p-2 box-border border rounded {$mode === name
				? 'glass'
				: 'border-transparent hover:bg-zinc-400/40'}"
			on:click={() => applyMode(name)}
		>
			{symbol}
			{#if displayLabel}
				{name}
			{/if}
		</button>
	{/each}
</div>
