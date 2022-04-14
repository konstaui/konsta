<script>
  import {
    Page,
    Navbar,
    NavbarBackLink,
    Block,
    Segmented,
    SegmentedButton,
  } from 'konsta/svelte';

  const isPreview = document.location.href.includes('examplePreview');
</script>

<Page>
  <Navbar title="Subnavbar">
    <svelte:fragment slot="left">
      {#if !isPreview}
        <NavbarBackLink onClick={() => history.back()} />
      {/if}
    </svelte:fragment>
    <Segmented
      slot="subnavbar"
      strong
      activeButtonIndex={0}
      childButtonsLength={3}
    >
      <SegmentedButton small strong active>Button</SegmentedButton>
      <SegmentedButton small strong>Button</SegmentedButton>
      <SegmentedButton small strong>Button</SegmentedButton>
    </Segmented>
  </Navbar>
  <div class="relative">
    <Block strong>
      <p>
        Subnavbar is useful when you need to put any additional elements into
        Navbar, like Tab Links or Search Bar. It also remains visible when
        Navbar hidden.
      </p>
    </Block>
  </div>
</Page>
