<script>
  export let logo;
  export let label = "";
</script>

<div
  class="bg-zinc-400/20 border-black/20 border backdrop-blur-sm shadow-md backdrop-saturate-200 rounded inline-block p-1 leading-none"
>
  <span class="flex items-center gap-1">
    <img src={logo} alt="{label} logo" class="h-5 inline-block" />
    <code>{label}</code>
  </span>
</div>
