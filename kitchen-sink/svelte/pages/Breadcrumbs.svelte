<script>
  import {
    Block,
    BlockHeader,
    BlockTitle,
    Breadcrumbs,
    BreadcrumbsCollapsed,
    BreadcrumbsItem,
    BreadcrumbsSeparator,
    Link,
    List,
    ListItem,
    Navbar,
    NavbarBackLink,
    Page,
    Popover,
  } from 'konsta/svelte';

  let popoverOpened = false;

  const isPreview = document.location.href.includes('examplePreview');
</script>

<Page>
  <Navbar title="Breadcrumbs">
    <svelte:fragment slot="left">
      {#if !isPreview}
        <NavbarBackLink on:click={() => history.back()} />
      {/if}
    </svelte:fragment>
  </Navbar>

  <Block strong inset>
    <p>
      Breadcrumbs allow users to keep track and maintain awareness of their
      locations within the app or website. They should be used for large sites
      and apps with hierarchically arranged pages.
    </p>
  </Block>

  <BlockTitle>Basic</BlockTitle>
  <Block strongIos outlineIos>
    <Breadcrumbs>
      <BreadcrumbsItem>
        <Link>Home</Link>
      </BreadcrumbsItem>
      <BreadcrumbsSeparator />
      <BreadcrumbsItem>
        <Link>Catalog</Link>
      </BreadcrumbsItem>
      <BreadcrumbsSeparator />
      <BreadcrumbsItem active>Phones</BreadcrumbsItem>
    </Breadcrumbs>
  </Block>

  <BlockTitle>Scrollable</BlockTitle>
  <BlockHeader
    >Breadcrumbs will be scrollable if they don't fit the screen</BlockHeader
  >
  <Block strongIos outlineIos>
    <Breadcrumbs>
      <BreadcrumbsItem>
        <Link>Home</Link>
      </BreadcrumbsItem>
      <BreadcrumbsSeparator />
      <BreadcrumbsItem>
        <Link>Catalog</Link>
      </BreadcrumbsItem>
      <BreadcrumbsSeparator />
      <BreadcrumbsItem>
        <Link>Phones</Link>
      </BreadcrumbsItem>
      <BreadcrumbsSeparator />
      <BreadcrumbsItem>
        <Link>Apple</Link>
      </BreadcrumbsItem>
      <BreadcrumbsSeparator />
      <BreadcrumbsItem active>iPhone 12</BreadcrumbsItem>
    </Breadcrumbs>
  </Block>

  <BlockTitle>Collapsed</BlockTitle>
  <Block strongIos outlineIos>
    <Breadcrumbs>
      <BreadcrumbsItem>
        <Link>Home</Link>
      </BreadcrumbsItem>
      <BreadcrumbsSeparator />
      <BreadcrumbsCollapsed
        class="breadcrumbs-popover-link"
        on:click={() => (popoverOpened = true)}
      />
      <BreadcrumbsSeparator />
      <BreadcrumbsItem active>iPhone 12</BreadcrumbsItem>
    </Breadcrumbs>
    <Popover
      target=".breadcrumbs-popover-link"
      style="width: 120px"
      on:backdropClick={() => (popoverOpened = false)}
      opened={popoverOpened}
    >
      <List nested>
        <ListItem
          link
          title="Catalog"
          on:click={() => (popoverOpened = false)}
        />
        <ListItem
          link
          title="Phones"
          on:click={() => (popoverOpened = false)}
        />
        <ListItem link title="Apple" on:click={() => (popoverOpened = false)} />
      </List>
    </Popover>
  </Block>
</Page>
