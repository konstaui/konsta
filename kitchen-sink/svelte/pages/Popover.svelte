<script>
  import {
    Page,
    Navbar,
    NavbarBackLink,
    Popover,
    Block,
    Link,
    Button,
    List,
    ListItem,
  } from 'konsta/svelte';

  const isPreview = document.location.href.includes('examplePreview');
  let popoverOpened = false;
  let popoverTargetEl = null;

  const openPopover = (targetEl) => {
    popoverTargetEl = targetEl;
    popoverOpened = true;
  };
</script>

<Page>
  <Navbar title="Popover">
    <svelte:fragment slot="left">
      {#if !isPreview}
        <NavbarBackLink onClick={() => history.back()} />
      {/if}
    </svelte:fragment>
    <Link
      slot="right"
      class="popover-navbar-link"
      navbar
      onClick={() => openPopover('.popover-navbar-link')}
    >
      Popover
    </Link>
  </Navbar>
  <Block class="space-y-4">
    <p>
      <Button
        class="popover-button"
        onClick={() => openPopover('.popover-button')}
      >
        Open popover on me
      </Button>
    </p>
    <p>
      Mauris fermentum neque et luctus venenatis. Vivamus a sem rhoncus, ornare
      tellus eu, euismod mauris. In porta turpis at semper convallis. Duis
      adipiscing leo eu nulla lacinia, quis rhoncus metus condimentum. Etiam nec
      malesuada nibh. Maecenas quis lacinia nisl, vel posuere dolor. Vestibulum
      condimentum, nisl ac vulputate egestas, neque enim dignissim elit, rhoncus
      volutpat magna enim a est. Aenean sit amet ligula neque. Cras suscipit
      rutrum enim. Nam a odio facilisis, elementum tellus non,{' '}
      <Link
        class="popover-link-1"
        onClick={() => openPopover('.popover-link-1')}
      >
        popover
      </Link>{' '}
      tortor. Pellentesque felis eros, dictum vitae lacinia quis, lobortis vitae
      ipsum. Cras vehicula bibendum lorem quis imperdiet.
    </p>
    <p>
      In hac habitasse platea dictumst. Etiam varius, ante vel ornare facilisis,
      velit massa rutrum dolor, ac porta magna magna lacinia nunc. Curabitur{' '}
      <Link
        class="popover-link-2"
        onClick={() => openPopover('.popover-link-2')}
      >
        popover!
      </Link>{' '}
      cursus laoreet. Aenean vel tempus augue. Pellentesque in imperdiet nibh. Mauris
      rhoncus nulla id sem suscipit volutpat. Pellentesque ac arcu in nisi viverra
      pulvinar. Nullam nulla orci, bibendum sed ligula non, ullamcorper iaculis mi.
      In hac habitasse platea dictumst. Praesent varius at nisl eu luctus. Cras aliquet
      porta est. Quisque elementum quis dui et consectetur. Cum sociis natoque penatibus
      et magnis dis parturient montes, nascetur ridiculus mus. Sed sed laoreet purus.
      Pellentesque eget ante ante.
    </p>
    <p>
      Duis et ultricies nibh. Sed facilisis turpis urna, ac imperdiet erat
      venenatis eu. Proin sit amet faucibus tortor, et varius sem. Etiam vitae
      lacinia neque. Aliquam nisi purus, interdum in arcu sed, ultrices rutrum
      arcu. Nulla mi turpis, consectetur vel enim quis, facilisis viverra dui.
      Aliquam quis convallis tortor, quis semper ligula. Morbi ullamcorper{' '}
      <Link
        class="popover-link-3"
        onClick={() => openPopover('.popover-link-3')}
      >
        one more popover
      </Link>{' '}
      massa at accumsan. Etiam purus odio, posuere in ligula vitae, viverra ultricies
      justo. Vestibulum nec interdum nisi. Aenean ac consectetur velit, non malesuada
      magna. Sed pharetra vehicula augue, vel venenatis lectus gravida eget. Curabitur
      lacus tellus, venenatis eu arcu in, interdum auctor nunc. Nunc non metus neque.
      Suspendisse viverra lectus sed risus aliquet, vel accumsan dolor feugiat.
    </p>
  </Block>

  <Popover
    opened={popoverOpened}
    target={popoverTargetEl}
    onBackdropClick={() => (popoverOpened = false)}
  >
    <List nested>
      <ListItem title="Item 1" link onClick={() => (popoverOpened = false)} />
      <ListItem
        title="List Item 2"
        link
        onClick={() => (popoverOpened = false)}
      />
      <ListItem title="Item 3" link onClick={() => (popoverOpened = false)} />
      <ListItem
        title="List Item 4"
        link
        onClick={() => (popoverOpened = false)}
      />
      <ListItem title="Item 5" link onClick={() => (popoverOpened = false)} />
    </List>
  </Popover>
</Page>
