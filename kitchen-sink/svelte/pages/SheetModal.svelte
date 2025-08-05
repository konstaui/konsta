<script>
  import {
    Page,
    Navbar,
    NavbarBackLink,
    Sheet,
    Block,
    Button,
    Toolbar,
    Link,
  } from 'konsta/svelte';

  const isPreview = document.location.href.includes('examplePreview');
  let sheetOpened = $state(false);
</script>

<Page>
  <Navbar title="Sheet Modal">
    {#snippet left()}
      {#if !isPreview}
        <NavbarBackLink onclick={() => history.back()} />
      {/if}
    {/snippet}
  </Navbar>

  <Block strongIos outlineIos class="space-y-4">
    <p>
      Sheet Modals slide up from the bottom of the screen to reveal more
      content. Such modals allow to create custom overlays with custom content.
    </p>
    <p>
      <Button onclick={() => (sheetOpened = true)}>Open Sheet</Button>
    </p>
  </Block>

  <Sheet
    class="pb-safe"
    opened={sheetOpened}
    onBackdropClick={() => (sheetOpened = false)}
  >
    <Toolbar top>
      <div class="left"></div>
      <div class="right">
        <Link toolbar onClick={() => (sheetOpened = false)}>Done</Link>
      </div>
    </Toolbar>
    <Block>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum ad
        excepturi nesciunt nobis aliquam. Quibusdam ducimus neque
        necessitatibus, molestias cupiditate velit nihil alias incidunt,
        excepturi voluptatem dolore itaque sapiente dolores!
      </p>
      <div class="mt-4">
        <Button onclick={() => (sheetOpened = false)}>Action</Button>
      </div>
    </Block>
  </Sheet>
</Page>
