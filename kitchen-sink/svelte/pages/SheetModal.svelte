<script>
  import CloseIcon from '../components/CloseIcon.svelte';
  import {
    Page,
    Navbar,
    NavbarBackLink,
    Sheet,
    Block,
    Button,
    Toolbar,
    ToolbarPane,
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

  <Block strong inset class="space-y-4">
    <p>
      Sheet Modals slide up from the bottom of the screen to reveal more
      content. Such modals allow to create custom overlays with custom content.
    </p>
    <p>
      <Button rounded onclick={() => (sheetOpened = true)}>Open Sheet</Button>
    </p>
  </Block>

  <Sheet
    class="pb-safe"
    opened={sheetOpened}
    onBackdropClick={() => (sheetOpened = false)}
  >
    <Toolbar top class="justify-end ios:pt-4">
      <div class="ios:hidden"></div>
      <ToolbarPane>
        <Link iconOnly onClick={() => (sheetOpened = false)}><CloseIcon /></Link
        >
      </ToolbarPane>
    </Toolbar>
    <Block>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum ad
        excepturi nesciunt nobis aliquam. Quibusdam ducimus neque
        necessitatibus, molestias cupiditate velit nihil alias incidunt,
        excepturi voluptatem dolore itaque sapiente dolores!
      </p>
      <div class="mt-4">
        <Button large rounded onclick={() => (sheetOpened = false)}
          >Action</Button
        >
      </div>
    </Block>
  </Sheet>
</Page>
