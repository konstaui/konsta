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
    {#snippet left()}
      {#if !isPreview}
        <NavbarBackLink onclick={() => history.back()} />
      {/if}
    {/snippet}
    {#snippet subnavbar()}
      <Segmented strong activeButtonIndex={0} childButtonsLength={3}>
        <SegmentedButton small strong active>Button</SegmentedButton>
        <SegmentedButton small strong>Button</SegmentedButton>
        <SegmentedButton small strong>Button</SegmentedButton>
      </Segmented>
    {/snippet}
  </Navbar>
  <div class="relative">
    <Block strongIos outlineIos>
      <p>
        Subnavbar is useful when you need to put any additional elements into
        Navbar, like Tab Links or Search Bar. It also remains visible when
        Navbar hidden.
      </p>
    </Block>
  </div>
</Page>
