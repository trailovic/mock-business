<script lang="ts">
  import ServiceCards from '$lib/components/ServiceCards.svelte';
</script>

<section class="wrap py-20">
  <div class="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
    <div>
      <p class="eyebrow mb-5">Dette kan vi hjelpe med</p>
      <h2 class="heading">
        God økonomi begynner
        <br />
        med god oversikt.
      </h2>
    </div>
    <a href="/tjenester/" class="text-sm font-semibold underline underline-offset-8">
      Alle tjenester ↗
    </a>
  </div>
  <ServiceCards />
</section>
