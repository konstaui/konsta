<script>
  import {
    Page,
    Navbar,
    NavbarBackLink,
    BlockTitle,
    BlockHeader,
    Block,
    Breadcrumbs,
    BreadcrumbsItem,
    BreadcrumbsSeparator,
    BreadcrumbsCollapsed,
    Popover,
    List,
    ListItem,
    Link,
  } from 'konsta/svelte';

  let popoverOpened = false;

  const isPreview = document.location.href.includes('examplePreview');
</script>

<Page>
  <Navbar title="Breadcrumbs">
    <svelte:fragment slot="left">
      {#if !isPreview}
        <NavbarBackLink onClick={() => history.back()} />
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
        onClick={() => (popoverOpened = true)}
      />
      <BreadcrumbsSeparator />
      <BreadcrumbsItem active>iPhone 12</BreadcrumbsItem>
    </Breadcrumbs>
    <Popover
      target=".breadcrumbs-popover-link"
      style="width: 120px"
      onBackdropClick={() => (popoverOpened = false)}
      opened={popoverOpened}
    >
      <List nested>
        <ListItem
          link
          title="Catalog"
          onClick={() => (popoverOpened = false)}
        />
        <ListItem link title="Phones" onClick={() => (popoverOpened = false)} />
        <ListItem link title="Apple" onClick={() => (popoverOpened = false)} />
      </List>
    </Popover>
  </Block>
</Page>
