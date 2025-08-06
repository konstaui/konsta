<script>
  import {
    Page,
    Navbar,
    NavbarBackLink,
    Block,
    BlockTitle,
    Preloader,
  } from 'konsta/svelte';

  const isPreview = document.location.href.includes('examplePreview');
</script>

<Page>
  <Navbar title="Preloader">
    {#snippet left()}
      {#if !isPreview}
        <NavbarBackLink onclick={() => history.back()} />
      {/if}
    {/snippet}
  </Navbar>

  <BlockTitle>Default</BlockTitle>
  <Block strong inset class="text-center">
    <Preloader />
  </Block>

  <BlockTitle>Colors</BlockTitle>
  <Block strong inset class="grid grid-cols-4">
    <div class="text-center">
      <Preloader class="k-color-brand-red" />
    </div>
    <div class="text-center">
      <Preloader class="k-color-brand-green" />
    </div>
    <div class="text-center">
      <Preloader class="k-color-brand-purple" />
    </div>
    <div class="text-center">
      <Preloader class="k-color-brand-yellow" />
    </div>
  </Block>

  <BlockTitle>Sizes</BlockTitle>
  <Block strong inset class="grid grid-cols-4 items-center">
    <div class="text-center">
      <Preloader class="w-4 h-4" />
    </div>
    <div class="text-center">
      <Preloader class="w-8 h-8" />
    </div>
    <div class="text-center">
      <Preloader class="w-12 h-12" />
    </div>
    <div class="text-center">
      <Preloader class="w-16 h-16" />
    </div>
  </Block>
</Page>
