<script>
  import { Navbar, NavbarBackLink, Page as PageComponent } from 'konsta/svelte';

  export let title;
  export let backLink = true;

  const goBack = () => {
    history.back();
  };
  const isPreview = document.location.href.includes('examplePreview');
</script>

<PageComponent>
  {#if title}
    <Navbar {title}>
      {#if backLink && !isPreview}
        <NavbarBackLink slot="left" on:click={goBack} />
      {/if}
      <slot name="right" slot="right" />
    </Navbar>
  {/if}
  <slot />
</PageComponent>
