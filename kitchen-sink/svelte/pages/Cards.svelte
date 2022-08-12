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
    <svelte:fragment slot="left">
      {#if !isPreview}
        <NavbarBackLink onClick={() => history.back()} />
      {/if}
    </svelte:fragment>
  </Navbar>

  <BlockTitle withBlock={false}>Simple Cards</BlockTitle>
  <Card>
    This is a simple card with plain text, but cards can also contain their own
    header, footer, list view, image, or any other element.
  </Card>
  <Card header="Card header" footer="Card footer">
    Card with header and footer. Card headers are used to display card titles
    and footers for additional information or just for custom actions.
  </Card>
  <Card>
    Another card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Suspendisse feugiat sem est, non tincidunt ligula volutpat sit amet. Mauris
    aliquet magna justo.
  </Card>

  <BlockTitle withBlock={false}>Outline Cards</BlockTitle>
  <Card outline>
    This is a simple card with plain text, but cards can also contain their own
    header, footer, list view, image, or any other element.
  </Card>
  <Card outline header="Card header" footer="Card footer">
    Card with header and footer. Card headers are used to display card titles
    and footers for additional information or just for custom actions.
  </Card>
  <Card outline>
    Another card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Suspendisse feugiat sem est, non tincidunt ligula volutpat sit amet. Mauris
    aliquet magna justo.{' '}
  </Card>

  <BlockTitle withBlock={false}>Outline With Dividers</BlockTitle>
  <Card
    outline
    header="Card header"
    footer="Card footer"
    headerDivider
    footerDivider
  >
    Card with header and footer. Card headers are used to display card titles
    and footers for additional information or just for custom actions.
  </Card>

  <BlockTitle withBlock={false}>Raised Cards</BlockTitle>
  <Card raised>
    This is a simple card with plain text, but cards can also contain their own
    header, footer, list view, image, or any other element.
  </Card>
  <Card raised header="Card header" footer="Card footer">
    Card with header and footer. Card headers are used to display card titles
    and footers for additional information or just for custom actions.
  </Card>
  <Card raised>
    Another card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Suspendisse feugiat sem est, non tincidunt ligula volutpat sit amet. Mauris
    aliquet magna justo.{' '}
  </Card>

  <BlockTitle withBlock={false}>Card With List View</BlockTitle>
  <Card>
    <List nested class="-m-4">
      <ListItem href title="Link 1" />
      <ListItem href title="Link 2" />
      <ListItem href title="Link 3" />
      <ListItem href title="Link 4" />
      <ListItem href title="Link 5" />
    </List>
  </Card>

  <BlockTitle withBlock={false}>Styled Cards</BlockTitle>
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
      <svelte:fragment slot="footer">
        <div class="flex justify-between material:hidden">
          <Link>Like</Link>
          <Link>Read more</Link>
        </div>
        <div class="flex justify-start ios:hidden space-x-2">
          <Button rounded inline>Like</Button>
          <Button rounded inline outline>Read more</Button>
        </div>
      </svelte:fragment>
    </Card>
    <Card>
      <div
        slot="header"
        class="ios:-mx-4 ios:-mt-4 h-48 p-4 flex items-end text-white ios:font-bold bg-cover bg-center material:rounded-xl mb-4 material:text-[22px]"
        style="background-image: url(https://cdn.framework7.io/placeholder/people-1000x600-6.jpg)"
      >
        Lorem Ipsum
      </div>
      <div class="text-gray-500 mb-3">Posted on January 21, 2021</div>
      <p>
        Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies
        efficitur vitae non felis. Phasellus quis nibh hendrerit...
      </p>
      <svelte:fragment slot="footer">
        <div class="flex justify-between material:hidden">
          <Link>Like</Link>
          <Link>Read more</Link>
        </div>
        <div class="flex justify-start ios:hidden space-x-2">
          <Button rounded inline>Like</Button>
          <Button rounded inline outline>Read more</Button>
        </div>
      </svelte:fragment>
    </Card>
  </div>
</Page>
