<script lang="ts">
  import { theme, themes, applyTheme } from "$lib/tools/app-theme";
</script>

<div class="grid grid-cols-3 gap-1 font-mono">
  {#each themes as { name, icon, label }}
    <button
      class="box-border flex items-center justify-center gap-2 rounded border p-1 md:p-2 {$theme ===
      name
        ? 'glass bg-zinc-300/20 text-red-600 dark:text-green-500'
        : 'border-transparent hover:bg-zinc-400/40'}"
      on:click={() => applyTheme(name)}
    >
      <svelte:component
        this={icon}
        class="inline-block h-6 w-6 flex-shrink-0"
      />
      <span class="max-md:text-sm">
        {label}
      </span>
    </button>
  {/each}
</div>
