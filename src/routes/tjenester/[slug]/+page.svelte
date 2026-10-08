<script lang="ts">
  import Seo from '$lib/components/Seo.svelte';
  import Cta from '$lib/components/Cta.svelte';
  import type { PageData } from './$types';
  let { data }: { data: PageData } = $props();
</script>

<Seo title={data.service.title} description={data.service.summary} />
<section class="wrap py-16 sm:py-24">
  <a href="/tjenester/" class="text-sm underline underline-offset-4">← Alle tjenester</a>
  <p class="eyebrow mb-6 mt-12">Tjeneste {data.service.number}</p>
  <h1 class="heading">{data.service.title}</h1>
  <p class="mt-8 max-w-2xl text-xl leading-relaxed text-muted">{data.service.description}</p>
  <div class="mt-16 grid gap-10 border-t border-ink/20 pt-10 md:grid-cols-2">
    <div>
      <h2 class="text-2xl font-medium">Dette kan vi hjelpe deg med</h2>
      <ul class="mt-6 space-y-4">
        {#each data.service.items as item}
          <li class="flex gap-3">
            <span aria-hidden="true">✓</span>
            {item}
          </li>
        {/each}
      </ul>
    </div>
    <div class="rounded-2xl bg-lime p-8">
      <h2 class="text-2xl font-medium">Passer dette for deg?</h2>
      <p class="mt-5 leading-relaxed">{data.service.audience}</p>
      <p class="mt-5 text-sm">Omfang og pris avtales etter en gjennomgang av behovene dine.</p>
    </div>
  </div>
</section>
<Cta />
