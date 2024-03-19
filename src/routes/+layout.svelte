<script lang="ts">
  import "../app.pcss";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<div class="flex h-dvh flex-col gap-4 overflow-y-auto p-4 lg:gap-6 lg:p-6">
  <Header />

  <main class="flex-1">
    <slot />
  </main>

  <Footer />
</div>
