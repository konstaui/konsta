<script>
  import {
    Block,
    Button,
    Link,
    Navbar,
    NavbarBackLink,
    Page,
    Toolbar,
  } from 'konsta/svelte';

  const isPreview = document.location.href.includes('examplePreview');
  let isTop = false;
</script>

<Page>
  <Navbar title="Toolbar">
    <svelte:fragment slot="left">
      {#if !isPreview}
        <NavbarBackLink on:click={() => history.back()} />
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
        on:click={() => {
          isTop = !isTop;
        }}
      >
        Toggle Toolbar Position
      </Button>
    </p>
  </Block>
</Page>
