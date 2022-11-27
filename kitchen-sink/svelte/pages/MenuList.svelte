<script>
  import {
    Block,
    MenuList,
    MenuListItem,
    Navbar,
    NavbarBackLink,
    Page,
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
        <NavbarBackLink on:click={() => history.back()} />
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
      on:click={() => (selected = 'home')}
    >
      <DemoIcon slot="media" />
    </MenuListItem>
    <MenuListItem
      title="Profile"
      active={selected === 'profile'}
      on:click={() => (selected = 'profile')}
    >
      <DemoIcon slot="media" />
    </MenuListItem>
    <MenuListItem
      title="Settings"
      active={selected === 'settings'}
      on:click={() => (selected = 'settings')}
    >
      <DemoIcon slot="media" />
    </MenuListItem>
  </MenuList>

  <MenuList>
    <MenuListItem
      title="Home"
      subtitle="Home subtitle"
      active={selectedMedia === 'home'}
      on:click={() => (selectedMedia = 'home')}
    >
      <DemoIcon slot="media" />
    </MenuListItem>
    <MenuListItem
      title="Profile"
      subtitle="Profile subtitle"
      active={selectedMedia === 'profile'}
      on:click={() => (selectedMedia = 'profile')}
    >
      <DemoIcon slot="media" />
    </MenuListItem>
    <MenuListItem
      title="Settings"
      subtitle="Settings subtitle"
      active={selectedMedia === 'settings'}
      on:click={() => (selectedMedia = 'settings')}
    >
      <DemoIcon slot="media" />
    </MenuListItem>
  </MenuList>
</Page>
