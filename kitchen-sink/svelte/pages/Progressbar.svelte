<script>
  import {
    Page,
    Navbar,
    NavbarBackLink,
    Block,
    BlockTitle,
    Progressbar,
    Segmented,
    SegmentedButton,
  } from 'konsta/svelte';

  const isPreview = document.location.href.includes('examplePreview');
  let progress = 0.1;
</script>

<Page>
  <Navbar title="Progressbar">
    <svelte:fragment slot="left">
      {#if !isPreview}
        <NavbarBackLink onClick={() => history.back()} />
      {/if}
    </svelte:fragment>
  </Navbar>

  <BlockTitle>Determinate Progress Bar</BlockTitle>
  <Block strong>
    <div class="my-4">
      <Progressbar {progress} />
    </div>
    <Segmented raised>
      <SegmentedButton
        active={progress === 0.1}
        onClick={() => (progress = 0.1)}
      >
        10%
      </SegmentedButton>
      <SegmentedButton
        active={progress === 0.3}
        onClick={() => (progress = 0.3)}
      >
        30%
      </SegmentedButton>
      <SegmentedButton
        active={progress === 0.5}
        onClick={() => (progress = 0.5)}
      >
        50%
      </SegmentedButton>
      <SegmentedButton
        active={progress === 1.0}
        onClick={() => (progress = 1.0)}
      >
        100%
      </SegmentedButton>
    </Segmented>
  </Block>

  <BlockTitle>Colors</BlockTitle>
  <Block strong class="space-y-4">
    <Progressbar colors={{ bg: 'bg-red-500' }} progress={0.25} />
    <Progressbar colors={{ bg: 'bg-green-500' }} progress={0.5} />
    <Progressbar colors={{ bg: 'bg-blue-500' }} progress={0.75} />
    <Progressbar colors={{ bg: 'bg-yellow-500' }} progress={1} />
  </Block>
</Page>
