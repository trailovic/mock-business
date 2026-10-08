<script lang="ts">
  import { companyValues } from '$lib/data/values';
  import Seo from '$lib/components/Seo.svelte';
  import Cta from '$lib/components/Cta.svelte';
</script>

<Seo title="Om oss" />
<section class="wrap py-16 sm:py-24">
  <p class="eyebrow mb-6">Mennesker bak tallene</p>
  <h1 class="heading max-w-3xl">
    Regnskap handler
    <br />
    også om tillit.
  </h1>
  <div class="mt-12 grid gap-10 lg:grid-cols-2">
    <figure class="overflow-hidden rounded-3xl bg-[#e8ebdf]">
      <img
        src="/images/studio-1120.webp"
        srcset="/images/studio-640.webp 640w, /images/studio-1120.webp 1120w"
        sizes="(min-width: 1280px) 556px, (min-width: 1024px) 45vw, calc(100vw - 48px)"
        width="1120"
        height="747"
        alt="Et solfylt møterom med eikebord, grønne stoler og planter. KI-generert illustrasjonsfoto."
        class="aspect-[4/3] w-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <figcaption class="p-7 sm:p-9">
        <p class="text-2xl font-medium leading-tight tracking-tight">
          Tydelige svar. Gode samtaler.
          <br />
          Felles retning.
        </p>
        <p class="mt-4 text-sm text-muted">Slik ønsker vi å jobbe sammen.</p>
      </figcaption>
    </figure>
    <div class="space-y-6 text-lg leading-relaxed text-muted">
      <p>
        Klar Regnskap er et fiktivt regnskapsbyrå, laget for å vise hvordan en ryddig og personlig
        bedriftsnettside kan se ut.
      </p>
      <p>
        Her er det plass til din historie: hvem dere er, hva dere står for, og hvordan dere hjelper
        kundene deres. Et sted å bli kjent med menneskene bak tjenestene.
      </p>
      <p>
        Designet setter tydelig kommunikasjon i sentrum og kan tilpasses både små fagmiljøer og
        større virksomheter.
      </p>
    </div>
  </div>
</section>
<section class="wrap pb-20">
  <div class="grid gap-8 md:grid-cols-3">
    {#each companyValues as value}
      <div class="border-t border-ink/20 pt-6">
        <h2 class="mb-4 text-2xl font-medium">{value.title}</h2>
        <p class="leading-relaxed text-muted">{value.text}</p>
      </div>
    {/each}
  </div>
</section>
<Cta />
