<script>
  import {
    Page,
    Navbar,
    NavbarBackLink,
    Block,
    MenuList,
    MenuListItem,
  } from 'konsta/svelte';
  import DemoIcon from '../components/DemoIcon.svelte';

  const isPreview = document.location.href.includes('examplePreview');
  let selected = 'home';
  let selectedMedia = 'home';
</script>

<Page>
  <Navbar title="Menu List">
    <svelte:fragment slot="left">
      {#if !isPreview}
        <NavbarBackLink onClick={() => history.back()} />
      {/if}
    </svelte:fragment>
  </Navbar>

  <Block strong>
    <p>
      Menu list unlike usual links list is designed to indicate currently active
      screen (or section) of your app. Think about it like a Tabbar but in a
      form of a list.
    </p>
  </Block>
  <MenuList>
    <MenuListItem
      title="Home"
      active={selected === 'home'}
      onClick={() => (selected = 'home')}
    >
      <DemoIcon slot="media" />
    </MenuListItem>
    <MenuListItem
      title="Profile"
      active={selected === 'profile'}
      onClick={() => (selected = 'profile')}
    >
      <DemoIcon slot="media" />
    </MenuListItem>
    <MenuListItem
      title="Settings"
      active={selected === 'settings'}
      onClick={() => (selected = 'settings')}
    >
      <DemoIcon slot="media" />
    </MenuListItem>
  </MenuList>

  <MenuList>
    <MenuListItem
      title="Home"
      subtitle="Home subtitle"
      active={selectedMedia === 'home'}
      onClick={() => (selectedMedia = 'home')}
    >
      <DemoIcon slot="media" />
    </MenuListItem>
    <MenuListItem
      title="Profile"
      subtitle="Profile subtitle"
      active={selectedMedia === 'profile'}
      onClick={() => (selectedMedia = 'profile')}
    >
      <DemoIcon slot="media" />
    </MenuListItem>
    <MenuListItem
      title="Settings"
      subtitle="Settings subtitle"
      active={selectedMedia === 'settings'}
      onClick={() => (selectedMedia = 'settings')}
    >
      <DemoIcon slot="media" />
    </MenuListItem>
  </MenuList>
</Page>
