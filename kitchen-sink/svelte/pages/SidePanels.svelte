<script>
  import {
    Page,
    Navbar,
    NavbarBackLink,
    Panel,
    Block,
    Link,
    Button,
  } from 'konsta/svelte';

  const isPreview = document.location.href.includes('examplePreview');
  let leftPanelOpened = false;
  let rightPanelOpened = false;
</script>

<Page>
  <Navbar title="Panel / Side Panel">
    <svelte:fragment slot="left">
      {#if !isPreview}
        <NavbarBackLink onClick={() => history.back()} />
      {/if}
    </svelte:fragment>
  </Navbar>

  <Block strong class="space-y-4">
    <p>
      Konsta UI comes with 2 panels (on left and on right), both are optional.
      You can put absolutely anything inside: data lists, forms, custom content,
      etc.
    </p>
  </Block>
  <Block strong class="flex space-x-4">
    <Button onClick={() => (leftPanelOpened = true)}>Left Panel</Button>
    <Button onClick={() => (rightPanelOpened = true)}>Right Panel</Button>
  </Block>

  <Panel
    side="left"
    opened={leftPanelOpened}
    onBackdropClick={() => (leftPanelOpened = false)}
  >
    <Page>
      <Navbar title="Left Panel">
        <Link slot="right" navbar onClick={() => (leftPanelOpened = false)}>
          Close
        </Link>
      </Navbar>
      <Block class="space-y-4">
        <p>Here comes left panel.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          faucibus mauris leo, eu bibendum neque congue non. Ut leo mauris,
          eleifend eu commodo a, egestas ac urna. Maecenas in lacus faucibus,
          viverra ipsum pulvinar, molestie arcu. Etiam lacinia venenatis
          dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu et
          eros. Nulla eu enim quis quam elementum vulputate. Mauris ornare
          consequat nunc viverra pellentesque. Aenean semper eu massa sit amet
          aliquam. Integer et neque sed libero mollis elementum at vitae ligula.
          Vestibulum pharetra sed libero sed porttitor. Suspendisse a faucibus
          lectus.
        </p>
      </Block>
    </Page>
  </Panel>

  <Panel
    side="right"
    opened={rightPanelOpened}
    onBackdropClick={() => (rightPanelOpened = false)}
  >
    <Page>
      <Navbar title="Right Panel">
        <Link slot="right" navbar onClick={() => (rightPanelOpened = false)}>
          Close
        </Link>
      </Navbar>
      <Block class="space-y-4">
        <p>Here comes right panel.</p>
        <p>
          Duis ut mauris sollicitudin, venenatis nisi sed, luctus ligula.
          Phasellus blandit nisl ut lorem semper pharetra. Nullam tortor nibh,
          suscipit in consequat vel, feugiat sed quam. Nam risus libero, auctor
          vel tristique ac, malesuada ut ante. Sed molestie, est in eleifend
          sagittis, leo tortor ullamcorper erat, at vulputate eros sapien nec
          libero. Mauris dapibus laoreet nibh quis bibendum. Fusce dolor sem,
          suscipit in iaculis id, pharetra at urna. Pellentesque tempor congue
          massa quis faucibus. Vestibulum nunc eros, convallis blandit dui sit
          amet, gravida adipiscing libero.
        </p>
      </Block>
    </Page>
  </Panel>
</Page>
