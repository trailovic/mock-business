<script lang="ts">
  import Seo from '$lib/components/Seo.svelte';
  import ContactForm from '$lib/components/ContactForm.svelte';
</script>

<Seo title="Kontakt" />
<section class="wrap grid gap-12 py-16 lg:grid-cols-2 lg:gap-20 sm:py-24">
  <div>
    <p class="eyebrow mb-6">La oss bli kjent</p>
    <h1 class="heading">
      Hva kan vi
      <br />
      hjelpe deg med?
    </h1>
    <p class="mt-7 max-w-md text-lg leading-relaxed text-muted">
      Fortell litt om bedriften din og hva du ønsker hjelp med. En god samtale er et fint sted å
      starte.
    </p>
    <figure class="mt-8">
      <img
        src="/images/stock-contact-1120.webp"
        srcset="/images/stock-contact-640.webp 640w, /images/stock-contact-1120.webp 1120w"
        sizes="(min-width: 1280px) 556px, (min-width: 1024px) 45vw, calc(100vw - 48px)"
        width="1120"
        height="805"
        alt="En åpen notatbok, penn og kaffekopp ved siden av en datamaskin."
        loading="lazy"
        decoding="async"
        class="aspect-[16/9] w-full rounded-3xl object-cover"
      />
    </figure>
    <div class="mt-8 rounded-2xl bg-lime p-6">
      <h2 class="font-semibold">Dette er et demoskjema</h2>
      <p class="mt-3 text-sm leading-relaxed">
        Ingen opplysninger sendes eller lagres. Bruk fiktive opplysninger for å prøve skjemaet. Ekte
        kontaktinformasjon og skjematjeneste legges til ved kundetilpasning.
      </p>
    </div>
  </div>
  <ContactForm />
</section>
