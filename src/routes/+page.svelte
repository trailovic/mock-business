<script lang="ts">
  import Seo from '$lib/components/Seo.svelte';
  import HomeHero from '$lib/components/home/HomeHero.svelte';
  import HomeServices from '$lib/components/home/HomeServices.svelte';
  import HomePartner from '$lib/components/home/HomePartner.svelte';
  import HomeProcess from '$lib/components/home/HomeProcess.svelte';
  import Cta from '$lib/components/Cta.svelte';
</script>

<Seo title="Mer oversikt. Mer handlingsrom." />
<HomeHero />
<div class="border-y border-ink/15">
  <div class="wrap grid gap-5 py-6 text-sm sm:grid-cols-3">
    <p>
      01 <span class="ml-4">En fast samtalepartner</span>
    </p>
    <p>
      02 <span class="ml-4">Oversikt i hverdagen</span>
    </p>
    <p>
      03 <span class="ml-4">Plass til å vokse</span>
    </p>
  </div>
</div>
<HomeServices />
<HomePartner />
<HomeProcess />
<Cta />
