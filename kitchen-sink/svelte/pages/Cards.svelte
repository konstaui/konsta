<script>
  import {
    Page,
    Navbar,
    NavbarBackLink,
    Card,
    BlockTitle,
    List,
    ListItem,
    Link,
    Button,
  } from 'konsta/svelte';

  const isPreview = document.location.href.includes('examplePreview');
</script>

<Page>
  <Navbar title="Cards">
    {#snippet left()}
      {#if !isPreview}
        <NavbarBackLink onclick={() => history.back()} />
      {/if}
    {/snippet}
  </Navbar>

  <BlockTitle>Simple Cards</BlockTitle>
  <Card>
    This is a simple card with plain text, but cards can also contain their own
    header, footer, list view, image, or any other element.
  </Card>
  <Card>
    {#snippet header()}
      Card header
    {/snippet}
    {#snippet footer()}
      Card footer
    {/snippet}
    Card with header and footer. Card headers are used to display card titles and
    footers for additional information or just for custom actions.
  </Card>
  <Card>
    Another card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Suspendisse feugiat sem est, non tincidunt ligula volutpat sit amet. Mauris
    aliquet magna justo.
  </Card>

  <BlockTitle>Outline Cards</BlockTitle>
  <Card outline>
    This is a simple card with plain text, but cards can also contain their own
    header, footer, list view, image, or any other element.
  </Card>
  <Card outline>
    {#snippet header()}
      Card header
    {/snippet}
    {#snippet footer()}
      Card footer
    {/snippet}
    Card with header and footer. Card headers are used to display card titles and
    footers for additional information or just for custom actions.
  </Card>
  <Card outline>
    Another card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Suspendisse feugiat sem est, non tincidunt ligula volutpat sit amet. Mauris
    aliquet magna justo.{' '}
  </Card>

  <BlockTitle>Outline With Dividers</BlockTitle>
  <Card outline headerDivider footerDivider>
    {#snippet header()}
      Card header
    {/snippet}
    {#snippet footer()}
      Card footer
    {/snippet}
    Card with header and footer. Card headers are used to display card titles and
    footers for additional information or just for custom actions.
  </Card>

  <BlockTitle>Raised Cards</BlockTitle>
  <Card raised>
    This is a simple card with plain text, but cards can also contain their own
    header, footer, list view, image, or any other element.
  </Card>
  <Card raised>
    {#snippet header()}
      Card header
    {/snippet}
    {#snippet footer()}
      Card footer
    {/snippet}
    Card with header and footer. Card headers are used to display card titles and
    footers for additional information or just for custom actions.
  </Card>
  <Card raised>
    Another card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Suspendisse feugiat sem est, non tincidunt ligula volutpat sit amet. Mauris
    aliquet magna justo.{' '}
  </Card>

  <BlockTitle>Card With List View</BlockTitle>
  <Card>
    <List nested class="-m-4">
      <ListItem href title="Link 1" />
      <ListItem href title="Link 2" />
      <ListItem href title="Link 3" />
      <ListItem href title="Link 4" />
      <ListItem href title="Link 5" />
    </List>
  </Card>

  <BlockTitle>Styled Cards</BlockTitle>
  <div class="lg:grid lg:grid-cols-2">
    <Card outline>
      <div
        class="ios:-mx-4 ios:-mt-4 h-48 p-4 flex items-end text-white ios:font-bold bg-cover bg-center material:rounded-xl mb-4 material:text-[22px]"
        style="background-image: url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg)"
      >
        Journey To Mountains
      </div>
      <div class="text-gray-500 mb-3">Posted on January 21, 2021</div>
      <p>
        Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies
        efficitur vitae non felis. Phasellus quis nibh hendrerit...
      </p>
      {#snippet footer()}
        <div class="flex justify-between material:hidden">
          <Link>Like</Link>
          <Link>Read more</Link>
        </div>
        <div
          class="flex justify-start ios:hidden space-x-2 rtl:space-x-reverse"
        >
          <Button rounded inline>Like</Button>
          <Button rounded inline outline>Read more</Button>
        </div>
      {/snippet}
    </Card>
    <Card>
      {#snippet header()}
        <div
          class="ios:-mx-4 ios:-mt-4 h-48 p-4 flex items-end text-white ios:font-bold bg-cover bg-center material:rounded-xl mb-4 material:text-[22px]"
          style="background-image: url(https://cdn.framework7.io/placeholder/people-1000x600-6.jpg)"
        >
          Lorem Ipsum
        </div>
      {/snippet}
      <div class="text-gray-500 mb-3">Posted on January 21, 2021</div>
      <p>
        Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies
        efficitur vitae non felis. Phasellus quis nibh hendrerit...
      </p>
      {#snippet footer()}
        <div class="flex justify-between material:hidden">
          <Link>Like</Link>
          <Link>Read more</Link>
        </div>
        <div
          class="flex justify-start ios:hidden space-x-2 rtl:space-x-reverse"
        >
          <Button rounded inline>Like</Button>
          <Button rounded inline outline>Read more</Button>
        </div>
      {/snippet}
    </Card>
  </div>
</Page>
