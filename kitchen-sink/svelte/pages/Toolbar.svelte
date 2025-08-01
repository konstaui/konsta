<script>
  import {
    Page,
    Navbar,
    NavbarBackLink,
    Toolbar,
    Link,
    Block,
    Button,
  } from 'konsta/svelte';

  const isPreview = document.location.href.includes('examplePreview');
  let isTop = false;
</script>

<Page>
  <Navbar title="Toolbar">
    <svelte:fragment slot="left">
      {#if !isPreview}
        <NavbarBackLink onClick={() => history.back()} />
      {/if}
    </svelte:fragment>
  </Navbar>

  <Toolbar
    top={isTop}
    class={`left-0 ${
      isTop ? 'ios:top-safe-15 material:top-safe-14 sticky' : 'bottom-0 fixed'
    } w-full`}
  >
    <Link>Link 1</Link>
    <Link>Link 2</Link>
    <Link>Link 3</Link>
  </Toolbar>

  <Block strongIos outlineIos class="space-y-4">
    <p>
      Toolbar supports both top and bottom positions. Click the following button
      to change its position.
    </p>
    <p>
      <Button
        onClick={() => {
          isTop = !isTop;
        }}
      >
        Toggle Toolbar Position
      </Button>
    </p>
  </Block>
</Page>
