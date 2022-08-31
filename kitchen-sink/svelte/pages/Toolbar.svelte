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
      isTop ? 'ios:top-11-safe material:top-14-safe sticky' : 'bottom-0 fixed'
    } w-full`}
  >
    <Link toolbar>Link 1</Link>
    <Link toolbar>Link 2</Link>
    <Link toolbar>Link 3</Link>
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
