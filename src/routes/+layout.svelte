<script lang="ts">
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  let { children } = $props();
</script>
<a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-lime focus:p-4">Hopp til innhold</a>
<Header /><main id="main" tabindex="-1">{@render children()}</main><Footer />
