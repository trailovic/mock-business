<script lang="ts">
  import { processSteps } from '$lib/data/process';
</script>

<section class="wrap py-20">
  <p class="eyebrow mb-5">Slik kommer vi i gang</p>
  <h2 class="heading mb-12">En enkel start.</h2>
  <div class="grid gap-9 md:grid-cols-3">
    {#each processSteps as step, i}
      <div class="border-t border-ink/25 pt-5">
        <span class="eyebrow text-muted">0{i + 1}</span>
        <h3 class="mb-3 mt-6 text-xl font-medium">{step.title}</h3>
        <p class="leading-relaxed text-muted">{step.text}</p>
      </div>
    {/each}
  </div>
</section>
