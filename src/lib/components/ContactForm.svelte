<script lang="ts">
  import { onMount } from 'svelte';

  let ready = $state(false);
  let submitted = $state(false);

  // Keep the demo disabled until its submit handler can prevent navigation.
  onMount(() => {
    ready = true;
  });

  // Demo only: never transmit the entered data.
  function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    submitted = true;
  }
</script>

<form onsubmit={handleSubmit} class="rounded-3xl border border-ink/15 bg-white/60 p-6 sm:p-9">
  <div class="grid gap-6">
    <label class="text-sm font-medium">
      Navn <span aria-hidden="true">*</span>
      <input class="field" name="name" autocomplete="off" required maxlength="100" />
    </label>
    <label class="text-sm font-medium">
      E-post <span aria-hidden="true">*</span>
      <input class="field" name="email" type="email" autocomplete="off" required maxlength="254" />
    </label>
    <label class="text-sm font-medium">
      Bedrift
      <input class="field" name="company" autocomplete="off" maxlength="150" />
    </label>
    <label class="text-sm font-medium">
      Hva trenger du hjelp med?
      <select class="field" name="service">
        <option>Jeg ønsker en uforpliktende prat</option>
        <option>Regnskap</option>
        <option>Lønn og personal</option>
        <option>Økonomisk rådgivning</option>
      </select>
    </label>
    <label class="text-sm font-medium">
      Melding <span aria-hidden="true">*</span>
      <textarea class="field min-h-32" name="message" required maxlength="3000"></textarea>
    </label>
    <p class="text-xs text-muted">* Obligatoriske felt. Kun fiktive opplysninger i denne demoen.</p>
    <button
      class="button w-full disabled:cursor-not-allowed disabled:opacity-50"
      type="submit"
      disabled={!ready}
    >
      Prøv demoskjemaet <span aria-hidden="true">↗</span>
    </button>
    <div role="status" aria-live="polite">
      {#if submitted}
        <p class="rounded-xl bg-lime p-4 text-sm">
          Demo fullført. Ingenting er sendt eller lagret.
        </p>
      {/if}
    </div>
  </div>
</form>
