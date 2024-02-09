<script>
  import { mode, modes, applyMode } from "$lib/tools/darkMode.js";
</script>

<div class="grid grid-cols-3 gap-1 font-mono">
  {#each modes as { name, icon, label }}
    <button
      class="p-1 md:p-2 box-border border rounded flex items-center justify-center gap-2 {$mode ===
      name
        ? 'glass text-red-600 dark:text-green-500 bg-zinc-300/20'
        : 'border-transparent hover:bg-zinc-400/40'}"
      on:click={() => applyMode(name)}
    >
      <svelte:component this={icon} class="h-6 w-6 inline-block flex-shrink-0" />
      <span class="max-md:text-sm">
        {label}
      </span>
    </button>
  {/each}
</div>
