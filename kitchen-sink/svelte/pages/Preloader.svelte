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
    <svelte:fragment slot="left">
      {#if !isPreview}
        <NavbarBackLink onClick={() => history.back()} />
      {/if}
    </svelte:fragment>
  </Navbar>

  <BlockTitle>Default</BlockTitle>
  <Block strong insetMaterial outlineIos class="text-center">
    <Preloader />
  </Block>

  <BlockTitle>Colors</BlockTitle>
  <Block strong insetMaterial outlineIos class="grid grid-cols-4">
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
  <Block strong insetMaterial outlineIos class="grid grid-cols-4 items-center">
    <div class="text-center">
      <Preloader size="w-4 h-4" />
    </div>
    <div class="text-center">
      <Preloader size="w-8 h-8" />
    </div>
    <div class="text-center">
      <Preloader size="w-12 h-12" />
    </div>
    <div class="text-center">
      <Preloader size="w-16 h-16" />
    </div>
  </Block>
</Page>
