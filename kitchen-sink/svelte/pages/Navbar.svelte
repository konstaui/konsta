<script>
  import { Page, Navbar, NavbarBackLink, Link, Block } from 'konsta/svelte';
  const isPreview = document.location.href.includes('examplePreview');
</script>

<Page>
  <Navbar title="Navbar" subtitle="Subtitle" class="top-0 sticky">
    <svelte:fragment slot="left">
      {#if !isPreview}
        <NavbarBackLink onClick={() => history.back()} />
      {/if}
    </svelte:fragment>
    <Link slot="right" navbar>Right</Link>
  </Navbar>
  <div class="relative">
    <Block strong>
      <p>
        Navbar is a fixed area at the top of a screen that contains Page title
        and navigation elements.
      </p>
    </Block>
  </div>
</Page>
