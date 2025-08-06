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
    ToolbarPane,
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
    {#snippet left()}
      {#if !isPreview}
        <NavbarBackLink onclick={() => history.back()} />
      {/if}
    {/snippet}
    {#snippet right()}
      <Link navbar iconOnly>
        <Icon badge="5" badgeColors={{ bg: 'bg-red-500' }}>
          {#snippet ios()}
            <PersonCircleFill class="w-7 h-7" />
          {/snippet}
          {#snippet material()}
            <MdPerson class="w-6 h-6" />
          {/snippet}
        </Icon>
      </Link>
    {/snippet}
  </Navbar>

  <Tabbar labels icons class="left-0 bottom-0 fixed">
    <ToolbarPane>
      <TabbarLink active label="Inbox">
        {#snippet icon()}
          <Icon badge="5" badgeColors={{ bg: 'bg-green-500' }}>
            {#snippet ios()}
              <EnvelopeFill class="w-7 h-7" />
            {/snippet}
            {#snippet material()}
              <MdEmail class="w-6 h-6" />
            {/snippet}
          </Icon>
        {/snippet}
      </TabbarLink>
      <TabbarLink label="Calendar">
        {#snippet icon()}
          <Icon badge="7" badgeColors={{ bg: 'bg-red-500' }}>
            {#snippet ios()}
              <Calendar class="w-7 h-7" />
            {/snippet}
            {#snippet material()}
              <MdToday class="w-6 h-6" />
            {/snippet}
          </Icon>
        {/snippet}
      </TabbarLink>
      <TabbarLink label="Upload">
        {#snippet icon()}
          <Icon badge="1" badgeColors={{ bg: 'bg-red-500' }}>
            {#snippet ios()}
              <CloudUploadFill class="w-7 h-7" />
            {/snippet}
            {#snippet material()}
              <MdFileUpload class="w-6 h-6" />
            {/snippet}
          </Icon>
        {/snippet}
      </TabbarLink>
    </ToolbarPane>
  </Tabbar>
  <List strong inset>
    <ListItem title="Foo Bar">
      {#snippet media()}
        <DemoIcon />
      {/snippet}
      {#snippet after()}
        <Badge colors={{ bg: 'bg-gray-500' }}>0</Badge>
      {/snippet}
    </ListItem>

    <ListItem title="Ivan Petrov">
      {#snippet media()}
        <DemoIcon />
      {/snippet}
      {#snippet after()}
        <Badge>CEO</Badge>
      {/snippet}
    </ListItem>

    <ListItem title="John Doe">
      {#snippet media()}
        <DemoIcon />
      {/snippet}
      {#snippet after()}
        <Badge colors={{ bg: 'bg-green-500' }}>5</Badge>
      {/snippet}
    </ListItem>

    <ListItem title="Jane Doe">
      {#snippet media()}
        <DemoIcon />
      {/snippet}
      {#snippet after()}
        <Badge colors={{ bg: 'bg-yellow-500' }}>NEW</Badge>
      {/snippet}
    </ListItem>
  </List>
</Page>
