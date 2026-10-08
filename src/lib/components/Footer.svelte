<script lang="ts">
  import { navigation, site } from '$lib/config/site';
</script>

<footer class="border-t border-ink/15 py-12">
  <div class="wrap grid gap-9 sm:grid-cols-2 lg:grid-cols-3">
    <div>
      <a class="text-3xl font-bold tracking-tight" href="/">{site.name}</a>
      <p class="mt-3 text-sm text-muted">{site.tagline}</p>
    </div>
    <nav aria-label="Bunnmeny" class="flex flex-wrap items-start gap-5 text-sm">
      {#each navigation as item}
        <a class="hover:underline" href={item.href}>{item.label}</a>
      {/each}
    </nav>
    <div class="text-sm text-muted">
      <p>{site.location}</p>
      <p class="mt-3">Demonstrasjonsnettside · Fiktiv virksomhet</p>
      <p class="mt-2">Ingen henvendelser eller personopplysninger sendes.</p>
      <p class="mt-2">Stockfoto og KI-genererte illustrasjoner.</p>
    </div>
  </div>
</footer>
