<script>
  import {
    Page,
    Navbar,
    NavbarBackLink,
    Segmented,
    SegmentedButton,
    Block,
    BlockTitle,
  } from 'konsta/svelte';

  const isPreview = document.location.href.includes('examplePreview');
  let activeSegmented = 1;
</script>

<Page>
  <Navbar title="Segmented Control">
    <svelte:fragment slot="left">
      {#if !isPreview}
        <NavbarBackLink onClick={() => history.back()} />
      {/if}
    </svelte:fragment>
  </Navbar>

  <BlockTitle>Default Segmented</BlockTitle>
  <Block strongIos outlineIos class="space-y-4">
    <Segmented>
      <SegmentedButton
        active={activeSegmented === 1}
        onClick={() => (activeSegmented = 1)}
      >
        Button
      </SegmentedButton>
      <SegmentedButton
        active={activeSegmented === 2}
        onClick={() => (activeSegmented = 2)}
      >
        Button
      </SegmentedButton>
      <SegmentedButton
        active={activeSegmented === 3}
        onClick={() => (activeSegmented = 3)}
      >
        Button
      </SegmentedButton>
    </Segmented>

    <Segmented rounded>
      <SegmentedButton
        active={activeSegmented === 1}
        onClick={() => (activeSegmented = 1)}
      >
        Button
      </SegmentedButton>
      <SegmentedButton
        active={activeSegmented === 2}
        onClick={() => (activeSegmented = 2)}
      >
        Button
      </SegmentedButton>
      <SegmentedButton
        active={activeSegmented === 3}
        onClick={() => (activeSegmented = 3)}
      >
        Button
      </SegmentedButton>
    </Segmented>
  </Block>

  <BlockTitle>Raised Segmented</BlockTitle>
  <Block strongIos outlineIos class="space-y-4">
    <Segmented raised>
      <SegmentedButton
        active={activeSegmented === 1}
        onClick={() => (activeSegmented = 1)}
      >
        Button
      </SegmentedButton>
      <SegmentedButton
        active={activeSegmented === 2}
        onClick={() => (activeSegmented = 2)}
      >
        Button
      </SegmentedButton>
      <SegmentedButton
        active={activeSegmented === 3}
        onClick={() => (activeSegmented = 3)}
      >
        Button
      </SegmentedButton>
    </Segmented>
    <Segmented raised rounded>
      <SegmentedButton
        active={activeSegmented === 1}
        onClick={() => (activeSegmented = 1)}
      >
        Button
      </SegmentedButton>
      <SegmentedButton
        active={activeSegmented === 2}
        onClick={() => (activeSegmented = 2)}
      >
        Button
      </SegmentedButton>
      <SegmentedButton
        active={activeSegmented === 3}
        onClick={() => (activeSegmented = 3)}
      >
        Button
      </SegmentedButton>
    </Segmented>
  </Block>

  <BlockTitle>Outline</BlockTitle>
  <Block strongIos outlineIos class="space-y-4">
    <Segmented outline>
      <SegmentedButton
        active={activeSegmented === 1}
        onClick={() => (activeSegmented = 1)}
      >
        Button
      </SegmentedButton>
      <SegmentedButton
        active={activeSegmented === 2}
        onClick={() => (activeSegmented = 2)}
      >
        Button
      </SegmentedButton>
      <SegmentedButton
        active={activeSegmented === 3}
        onClick={() => (activeSegmented = 3)}
      >
        Button
      </SegmentedButton>
    </Segmented>
    <Segmented rounded outline>
      <SegmentedButton
        active={activeSegmented === 1}
        onClick={() => (activeSegmented = 1)}
      >
        Button
      </SegmentedButton>
      <SegmentedButton
        active={activeSegmented === 2}
        onClick={() => (activeSegmented = 2)}
      >
        Button
      </SegmentedButton>
      <SegmentedButton
        active={activeSegmented === 3}
        onClick={() => (activeSegmented = 3)}
      >
        Button
      </SegmentedButton>
    </Segmented>
  </Block>

  <BlockTitle>Strong Segmented</BlockTitle>
  <Block strongIos outlineIos class="space-y-4">
    <Segmented
      strong
      activeButtonIndex={activeSegmented - 1}
      childButtonsLength={3}
    >
      <SegmentedButton
        strong
        active={activeSegmented === 1}
        onClick={() => (activeSegmented = 1)}
      >
        Button
      </SegmentedButton>
      <SegmentedButton
        strong
        active={activeSegmented === 2}
        onClick={() => (activeSegmented = 2)}
      >
        Button
      </SegmentedButton>
      <SegmentedButton
        strong
        active={activeSegmented === 3}
        onClick={() => (activeSegmented = 3)}
      >
        Button
      </SegmentedButton>
    </Segmented>

    <Segmented
      strong
      rounded
      activeButtonIndex={activeSegmented - 1}
      childButtonsLength={3}
    >
      <SegmentedButton
        strong
        rounded
        active={activeSegmented === 1}
        onClick={() => (activeSegmented = 1)}
      >
        Button
      </SegmentedButton>
      <SegmentedButton
        strong
        rounded
        active={activeSegmented === 2}
        onClick={() => (activeSegmented = 2)}
      >
        Button
      </SegmentedButton>
      <SegmentedButton
        strong
        rounded
        active={activeSegmented === 3}
        onClick={() => (activeSegmented = 3)}
      >
        Button
      </SegmentedButton>
    </Segmented>
  </Block>
</Page>
