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

  <BlockTitle>Basic</BlockTitle>
  <Block strong>
    <Breadcrumbs>
      <BreadcrumbsItem>
        <Link colors={{ text: 'text-inherit' }}>Home</Link>
      </BreadcrumbsItem>
      <BreadcrumbsSeparator />
      <BreadcrumbsItem>
        <Link colors={{ text: 'text-inherit' }}>Catalog</Link>
      </BreadcrumbsItem>
      <BreadcrumbsSeparator />
      <BreadcrumbsItem active>Phones</BreadcrumbsItem>
    </Breadcrumbs>
  </Block>

  <BlockTitle>Scrollable</BlockTitle>
  <BlockHeader
    >Breadcrumbs will be scrollable if they don't fit the screen</BlockHeader
  >
  <Block strong>
    <Breadcrumbs>
      <BreadcrumbsItem>
        <Link colors={{ text: 'text-inherit' }}>Home</Link>
      </BreadcrumbsItem>
      <BreadcrumbsSeparator />
      <BreadcrumbsItem>
        <Link colors={{ text: 'text-inherit' }}>Catalog</Link>
      </BreadcrumbsItem>
      <BreadcrumbsSeparator />
      <BreadcrumbsItem>
        <Link colors={{ text: 'text-inherit' }}>Phones</Link>
      </BreadcrumbsItem>
      <BreadcrumbsSeparator />
      <BreadcrumbsItem>
        <Link colors={{ text: 'text-inherit' }}>Apple</Link>
      </BreadcrumbsItem>
      <BreadcrumbsSeparator />
      <BreadcrumbsItem active>iPhone 12</BreadcrumbsItem>
    </Breadcrumbs>
  </Block>

  <BlockTitle>Collapsed</BlockTitle>
  <Block strong>
    <Breadcrumbs>
      <BreadcrumbsItem>
        <Link colors={{ text: 'text-inherit' }}>Home</Link>
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
      <List nested hairlines={false} colors={{ bg: 'bg-transparent' }}>
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
