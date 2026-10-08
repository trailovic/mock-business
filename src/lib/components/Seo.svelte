<script lang="ts">
  import { site } from '$lib/config/site';
  let { title, description = site.description }: { title: string; description?: string } = $props();
</script>
<svelte:head>
  <title>{title} | {site.name}</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={`${title} | ${site.name}`} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="nb_NO" />
  {#if site.demo}<meta name="robots" content="noindex, nofollow" />{/if}
</svelte:head>
