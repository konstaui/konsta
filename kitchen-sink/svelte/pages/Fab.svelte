<script>
  import {
    Page,
    Navbar,
    NavbarBackLink,
    Block,
    Fab,
    useTheme,
  } from 'konsta/svelte';
  import { Plus } from 'framework7-icons/svelte';
  import MdAdd from '../components/MdAdd.svelte';

  const isPreview = document.location.href.includes('examplePreview');

  $: theme = useTheme((newValue) => (theme = newValue));

  $: PlusIcon = theme === 'ios' ? Plus : MdAdd;
</script>

<Page>
  <Navbar title="FAB">
    <svelte:fragment slot="left">
      {#if !isPreview}
        <NavbarBackLink onClick={() => history.back()} />
      {/if}
    </svelte:fragment>
  </Navbar>

  <!-- Right Top -->
  <Fab
    class="fixed right-4-safe ios:top-15-safe material:top-18-safe z-20 k-color-brand-red"
  >
    <svelte:component this={PlusIcon} slot="icon" />
  </Fab>

  <!-- Right Bottom -->
  <Fab class="fixed right-4-safe bottom-4-safe z-20">
    <svelte:component this={PlusIcon} slot="icon" />
  </Fab>

  <!-- Left Bottom -->
  <Fab class="fixed left-4-safe bottom-4-safe z-20 k-color-brand-green">
    <svelte:component this={PlusIcon} slot="icon" />
  </Fab>

  <!-- Left Top -->
  <Fab
    class="fixed left-4-safe ios:top-15-safe material:top-18-safe z-20 k-color-brand-yellow"
  >
    <svelte:component this={PlusIcon} slot="icon" />
  </Fab>

  <!-- Center Center -->
  <Fab
    class="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
  >
    <svelte:component this={PlusIcon} slot="icon" />
  </Fab>

  <!-- Center Bottom -->
  <Fab
    class="fixed left-1/2 bottom-4-safe transform -translate-x-1/2 z-20"
    text="Create"
    t
    extPosition="after"
    ><svelte:component this={PlusIcon} slot="icon" />
  </Fab>

  <Block class="space-y-4">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, quo rem
      beatae, delectus eligendi est saepe molestias perferendis suscipit,
      commodi labore ipsa non quasi eum magnam neque ducimus! Quasi, numquam.
    </p>
    <p>
      Maiores culpa, itaque! Eaque natus ab cum ipsam numquam blanditiis a,
      quia, molestiae aut laudantium recusandae ipsa. Ad iste ex asperiores
      ipsa, mollitia perferendis consectetur quam eaque, voluptate laboriosam
      unde.
    </p>
    <p>
      Sed odit quis aperiam temporibus vitae necessitatibus, laboriosam,
      exercitationem dolores odio sapiente provident. Accusantium id, itaque
      aliquam libero ipsum eos fugiat distinctio laboriosam exercitationem sequi
      facere quas quidem magnam reprehenderit.
    </p>
    <p>
      Pariatur corporis illo, amet doloremque. Ab veritatis sunt nisi
      consectetur error modi, nam illo et nostrum quia aliquam ipsam vitae
      facere voluptates atque similique odit mollitia, rerum placeat nobis est.
    </p>
    <p>
      Et impedit soluta minus a autem adipisci cupiditate eius dignissimos nihil
      officia dolore voluptatibus aperiam reprehenderit esse facilis labore qui,
      officiis consectetur. Ipsa obcaecati aspernatur odio assumenda veniam,
      ipsum alias.
    </p>
  </Block>
  <Block class="space-y-4">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa ipsa
      debitis sed nihil eaque dolore cum iste quibusdam, accusamus doloribus,
      tempora quia quos voluptatibus corporis officia at quas dolorem earum!
    </p>
    <p>
      Quod soluta eos inventore magnam suscipit enim at hic in maiores
      temporibus pariatur tempora minima blanditiis vero autem est perspiciatis
      totam dolorum, itaque repellat? Nobis necessitatibus aut odit aliquam
      adipisci.
    </p>
    <p>
      Tenetur delectus perspiciatis ex numquam, unde corrupti velit! Quam
      aperiam, animi fuga veritatis consectetur, voluptatibus atque consequuntur
      dignissimos itaque, sint impedit cum cumque at. Adipisci sint, iusto
      blanditiis ullam? Vel?
    </p>
    <p>
      Dignissimos velit officia quibusdam! Eveniet beatae, aut, omnis temporibus
      consequatur expedita eaque aliquid quos accusamus fugiat id iusto autem
      obcaecati repellat fugit cupiditate suscipit natus quas doloribus?
      Temporibus necessitatibus, libero.
    </p>
    <p>
      Architecto quisquam ipsa fugit facere, repudiandae asperiores vitae
      obcaecati possimus, labore excepturi reprehenderit consectetur
      perferendis, ullam quidem hic, repellat fugiat eaque fuga. Consectetur in
      eveniet, deleniti recusandae omnis eum quas?
    </p>
    <p>
      Quos nulla consequatur quo, officia quaerat. Nulla voluptatum, assumenda
      quibusdam, placeat cum aut illo deleniti dolores commodi odio ipsam,
      recusandae est pariatur veniam repudiandae blanditiis. Voluptas unde
      deleniti quisquam, nobis?
    </p>
    <p>
      Atque qui quaerat quasi officia molestiae, molestias totam incidunt
      reprehenderit laboriosam facilis veritatis, non iusto! Dolore ipsam
      obcaecati voluptates minima maxime minus qui mollitia facere. Nostrum esse
      recusandae voluptatibus eligendi.
    </p>
  </Block>
</Page>
