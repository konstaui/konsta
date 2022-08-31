<script>
  import {
    Page,
    Navbar,
    NavbarBackLink,
    Badge,
    Icon,
    Link,
    List,
    ListItem,
    Tabbar,
    TabbarLink,
  } from 'konsta/svelte';
  import {
    PersonCircleFill,
    EnvelopeFill,
    Calendar,
    CloudUploadFill,
  } from 'framework7-icons/svelte';
  import MdPerson from '../components/MdPerson.svelte';
  import MdEmail from '../components/MdEmail.svelte';
  import MdToday from '../components/MdToday.svelte';
  import MdFileUpload from '../components/MdFileUpload.svelte';
  import DemoIcon from '../components/DemoIcon.svelte';

  const isPreview = document.location.href.includes('examplePreview');
</script>

<Page>
  <Navbar title="Badge">
    <svelte:fragment slot="left">
      {#if !isPreview}
        <NavbarBackLink onClick={() => history.back()} />
      {/if}
    </svelte:fragment>

    <Link navbar iconOnly slot="right">
      <Icon badge="5" badgeColors={{ bg: 'bg-red-500' }}>
        <PersonCircleFill slot="ios" class="w-7 h-7" />
        <MdPerson slot="material" class="w-6 h-6" />
      </Icon>
    </Link>
  </Navbar>

  <Tabbar labels icons class="left-0 bottom-0 fixed">
    <TabbarLink active label="Inbox">
      <Icon slot="icon" badge="5" badgeColors={{ bg: 'bg-green-500' }}>
        <EnvelopeFill slot="ios" class="w-7 h-7" />
        <MdEmail slot="material" class="w-6 h-6" />
      </Icon>
    </TabbarLink>
    <TabbarLink label="Calendar">
      <Icon slot="icon" badge="7" badgeColors={{ bg: 'bg-red-500' }}>
        <Calendar slot="ios" class="w-7 h-7" />
        <MdToday slot="material" class="w-6 h-6" />
      </Icon>
    </TabbarLink>
    <TabbarLink label="Upload">
      <Icon slot="icon" badge="1" badgeColors={{ bg: 'bg-red-500' }}>
        <CloudUploadFill slot="ios" class="w-7 h-7" />
        <MdFileUpload slot="material" class="w-6 h-6" />
      </Icon>
    </TabbarLink>
  </Tabbar>
  <List strong inset>
    <ListItem title="Foo Bar">
      <DemoIcon slot="media" />
      <Badge slot="after" colors={{ bg: 'bg-gray-500' }}>0</Badge>
    </ListItem>

    <ListItem title="Ivan Petrov">
      <DemoIcon slot="media" />
      <Badge slot="after">CEO</Badge>
    </ListItem>

    <ListItem title="John Doe">
      <DemoIcon slot="media" />
      <Badge slot="after" colors={{ bg: 'bg-green-500' }}>5</Badge>
    </ListItem>

    <ListItem title="Jane Doe">
      <DemoIcon slot="media" />
      <Badge slot="after" colors={{ bg: 'bg-yellow-500' }}>NEW</Badge>
    </ListItem>
  </List>
</Page>
