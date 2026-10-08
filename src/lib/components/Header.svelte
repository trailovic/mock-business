<script lang="ts">
  import { page } from '$app/state';
  import { afterNavigate } from '$app/navigation';
  import { navigation, site } from '$lib/config/site';
  let open = $state(false);
  afterNavigate(() => { open = false; });
  function active(href: string) { return href === '/' ? page.url.pathname === '/' : page.url.pathname.startsWith(href); }
</script>
<svelte:window onkeydown={(event) => { if (event.key === 'Escape') open = false; }} />
<header class="relative z-20 border-b border-ink/10 bg-paper">
  <div class="wrap flex min-h-24 items-center justify-between gap-6">
    <a href="/" aria-label={`${site.name} – hjem`} class="flex items-baseline gap-2"><span class="text-4xl font-bold tracking-[-0.07em]">{site.shortName}<span class="text-[#718341]">.</span></span><span class="text-xs tracking-wide">regnskap</span></a>
    <nav aria-label="Hovedmeny" class="hidden items-center gap-9 lg:flex">
      {#each navigation as item}<a href={item.href} aria-current={active(item.href) ? 'page' : undefined} class={`text-sm transition-colors hover:underline underline-offset-8 ${active(item.href) ? 'font-bold' : ''}`}>{item.label}</a>{/each}
    </nav>
    <a href="/kontakt/" class="button hidden lg:inline-flex">La oss ta en prat <span aria-hidden="true">↗</span></a>
    <button type="button" class="rounded-full border border-ink/30 px-5 py-3 text-sm lg:hidden" aria-controls="mobile-menu" aria-expanded={open} onclick={() => open = !open}>{open ? 'Lukk ✕' : 'Meny ☰'}</button>
  </div>
  {#if open}<nav id="mobile-menu" aria-label="Mobilmeny" class="wrap flex flex-col gap-1 border-t border-ink/10 pb-6 pt-3 lg:hidden">{#each navigation as item}<a href={item.href} aria-current={active(item.href) ? 'page' : undefined} class="rounded-lg px-2 py-4 hover:bg-lime">{item.label}</a>{/each}</nav>{/if}
</header>
