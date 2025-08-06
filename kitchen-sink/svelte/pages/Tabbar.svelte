<script>
  import {
    Page,
    Navbar,
    NavbarBackLink,
    Tabbar,
    TabbarLink,
    Block,
    Icon,
    List,
    ListItem,
    Toggle,
    ToolbarPane,
  } from 'konsta/svelte';
  import {
    EnvelopeFill,
    Calendar,
    CloudUploadFill,
  } from 'framework7-icons/svelte';
  import MdEmail from '../components/MdEmail.svelte';
  import MdToday from '../components/MdToday.svelte';
  import MdFileUpload from '../components/MdFileUpload.svelte';

  const isPreview = document.location.href.includes('examplePreview');
  let activeTab = $state('tab-1');
  let isTabbarLabels = $state(true);
  let isTabbarIcons = $state(true);
</script>

<Page>
  <Navbar title="Tabbar">
    {#snippet left()}
      {#if !isPreview}
        <NavbarBackLink onclick={() => history.back()} />
      {/if}
    {/snippet}
  </Navbar>

  <Tabbar
    labels={isTabbarLabels}
    icons={isTabbarIcons}
    class="left-0 bottom-0 fixed"
  >
    <ToolbarPane>
      {#if isTabbarIcons}
        <TabbarLink
          active={activeTab === 'tab-1'}
          onclick={() => (activeTab = 'tab-1')}
          label={isTabbarLabels ? 'Tab 1' : undefined}
        >
          {#snippet icon()}
            <Icon>
              {#snippet ios()}
                <EnvelopeFill class="w-7 h-7" />
              {/snippet}
              {#snippet material()}
                <MdEmail class="w-6 h-6" />
              {/snippet}
            </Icon>
          {/snippet}
        </TabbarLink>
        <TabbarLink
          active={activeTab === 'tab-2'}
          onclick={() => (activeTab = 'tab-2')}
          label={isTabbarLabels ? 'Tab 2' : undefined}
        >
          {#snippet icon()}
            <Icon>
              {#snippet ios()}
                <Calendar class="w-7 h-7" />
              {/snippet}
              {#snippet material()}
                <MdToday class="w-6 h-6" />
              {/snippet}
            </Icon>
          {/snippet}
        </TabbarLink>
        <TabbarLink
          active={activeTab === 'tab-3'}
          onclick={() => (activeTab = 'tab-3')}
          label={isTabbarLabels ? 'Tab 3' : undefined}
        >
          {#snippet icon()}
            <Icon>
              {#snippet ios()}
                <CloudUploadFill class="w-7 h-7" />
              {/snippet}
              {#snippet material()}
                <MdFileUpload class="w-6 h-6" />
              {/snippet}
            </Icon>
          {/snippet}
        </TabbarLink>
      {:else}
        <TabbarLink
          active={activeTab === 'tab-1'}
          onclick={() => (activeTab = 'tab-1')}
          label={isTabbarLabels ? 'Tab 1' : undefined}
        />
        <TabbarLink
          active={activeTab === 'tab-2'}
          onclick={() => (activeTab = 'tab-2')}
          label={isTabbarLabels ? 'Tab 2' : undefined}
        />
        <TabbarLink
          active={activeTab === 'tab-3'}
          onclick={() => (activeTab = 'tab-3')}
          label={isTabbarLabels ? 'Tab 3' : undefined}
        />
      {/if}
    </ToolbarPane>
  </Tabbar>

  <List strong inset>
    <ListItem title="Tabbar Labels">
      {#snippet after()}
        <Toggle
          checked={isTabbarLabels}
          onChange={() => (isTabbarLabels = !isTabbarLabels)}
        />
      {/snippet}
    </ListItem>
    <ListItem title="Tabbar Icons">
      {#snippet after()}
        <Toggle
          checked={isTabbarIcons}
          onChange={() => (isTabbarIcons = !isTabbarIcons)}
        />
      {/snippet}
    </ListItem>
  </List>

  {#if activeTab === 'tab-1'}
    <Block strong inset class="space-y-4">
      <p>
        <b>Tab 1</b>
      </p>
      <p>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          accusantium necessitatibus, nihil quas praesentium at quibusdam
          cupiditate possimus et repudiandae dolorum delectus quo, similique
          voluptatem magni explicabo adipisci magnam ratione!
        </span>
        <span>
          Quod praesentium consequatur autem veritatis, magni alias consectetur
          ut quo, voluptatum earum in repellat! Id, autem! Minus suscipit, ad
          possimus non voluptatem aliquam praesentium earum corrupti optio velit
          tenetur numquam?
        </span>
        <span>
          Illo id ipsa natus quidem dignissimos odio dolore veniam, accusamus
          vel assumenda nulla aliquam amet distinctio! Debitis deserunt, et, cum
          voluptate similique culpa assumenda inventore, facilis eveniet iure
          optio velit.
        </span>
        <span>
          Maiores minus laborum placeat harum impedit, saepe veniam iusto
          voluptates delectus omnis consectetur tenetur ex ipsa error debitis
          aspernatur amet et alias! Sit odit cum voluptas quae? Est, omnis eos?
        </span>
      </p>
    </Block>
  {/if}
  {#if activeTab === 'tab-2'}
    <Block strong inset class="space-y-4">
      <p>
        <b>Tab 2</b>
      </p>
      <p>
        <span>
          Dicta beatae repudiandae ab pariatur mollitia praesentium fuga ipsum
          adipisci, quia nam expedita, est dolore eveniet, dolorum obcaecati?
          Veniam repellendus mollitia sapiente minus saepe voluptatibus
          necessitatibus laboriosam incidunt nihil autem.
        </span>
        <span>
          Officia pariatur qui, deleniti eum, et minus nisi aliquam nobis hic
          provident quisquam quidem voluptatem eveniet ducimus. Commodi ea
          dolorem, impedit eaque dolor, sint blanditiis magni accusantium natus
          reprehenderit minima?
        </span>
        <span>
          Dicta reiciendis ut vitae laborum aut repellendus quasi beatae nulla
          sapiente et. Quod distinctio velit, modi ipsam exercitationem iste
          quia eaque blanditiis neque rerum optio, nulla tenetur pariatur ex
          officiis.
        </span>
        <span>
          Consectetur accusamus delectus sit voluptatem at esse! Aperiam unde
          maxime est nemo dicta minus autem esse nobis quibusdam iusto,
          reprehenderit harum, perferendis quae. Ipsum sit fugit similique
          recusandae quas inventore?
        </span>
      </p>
    </Block>
  {/if}
  {#if activeTab === 'tab-3'}
    <Block strong inset class="space-y-4">
      <p>
        <b>Tab 3</b>
      </p>
      <p>
        <span>
          Vero esse ab natus neque commodi aut quidem nobis. Unde, quam
          asperiores. A labore quod commodi autem explicabo distinctio saepe ex
          amet iste recusandae porro consectetur, sed dolorum sapiente
          voluptatibus?
        </span>
        <span>
          Commodi ipsum, voluptatem obcaecati voluptatibus illum hic aliquam
          veritatis modi natus unde, assumenda expedita, esse eum fugit? Saepe
          aliquam ipsam illum nihil facilis, laborum quia, eius ea dolores
          molestias dicta.
        </span>
        <span>
          Consequatur quam laudantium, magnam facere ducimus tempora temporibus
          omnis cupiditate obcaecati tempore? Odit qui a, voluptas eveniet
          similique, doloribus eum dolorum ad, enim ea itaque voluptates porro
          minima. Omnis, magnam.
        </span>
        <span>
          Debitis, delectus! Eligendi excepturi rem veritatis, ad exercitationem
          tempore eveniet voluptates aut labore harum dolorem nemo repellendus
          accusantium quibusdam neque? Itaque iusto quisquam reprehenderit
          aperiam maiores dicta iure necessitatibus est.
        </span>
      </p>
    </Block>
  {/if}
</Page>
