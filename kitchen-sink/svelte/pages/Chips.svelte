<script>
  import {
    Page,
    Navbar,
    NavbarBackLink,
    Chip,
    Block,
    BlockTitle,
  } from 'konsta/svelte';

  const isPreview = document.location.href.includes('examplePreview');
</script>

<Page>
  <Navbar title="Chips">
    {#snippet left()}
      {#if !isPreview}
        <NavbarBackLink onclick={() => history.back()} />
      {/if}
    {/snippet}
  </Navbar>

  <BlockTitle>Chips With Text</BlockTitle>
  <Block strong inset>
    <Chip class="m-0.5">Example Chip</Chip>
    <Chip class="m-0.5">Another Chip</Chip>
    <Chip class="m-0.5">One More Chip</Chip>
    <Chip class="m-0.5">Fourth Chip</Chip>
    <Chip class="m-0.5">Last One</Chip>
  </Block>

  <BlockTitle>Outline Chips</BlockTitle>
  <Block strong inset>
    <Chip outline class="m-0.5">Example Chip</Chip>
    <Chip outline class="m-0.5">Another Chip</Chip>
    <Chip outline class="m-0.5">One More Chip</Chip>
    <Chip outline class="m-0.5">Fourth Chip</Chip>
    <Chip outline class="m-0.5">Last One</Chip>
  </Block>

  <BlockTitle>Contact Chips</BlockTitle>
  <Block strong inset>
    <Chip class="m-0.5">
      {#snippet media()}
        <img
          alt="avatar"
          class="ios:h-7 material:h-6 rounded-full"
          src="https://cdn.framework7.io/placeholder/people-100x100-9.jpg"
        />
      {/snippet}
      Jane Doe
    </Chip>
    <Chip class="m-0.5">
      {#snippet media()}
        <img
          alt="avatar"
          class="ios:h-7 material:h-6 rounded-full"
          src="https://cdn.framework7.io/placeholder/people-100x100-3.jpg"
        />
      {/snippet}
      John Doe
    </Chip>
    <Chip class="m-0.5">
      {#snippet media()}
        <img
          alt="avatar"
          class="ios:h-7 material:h-6 rounded-full"
          src="https://cdn.framework7.io/placeholder/people-100x100-7.jpg"
        />
      {/snippet}
      Adam Smith
    </Chip>
  </Block>

  <BlockTitle>Deletable Chips / Tags</BlockTitle>
  <Block strong inset>
    <Chip
      class="m-0.5"
      deleteButton
      onDelete={() => console.log('Delete Chip')}
    >
      Example Chip
    </Chip>
    <Chip
      class="m-0.5"
      deleteButton
      onDelete={() => console.log('Delete Chip')}
    >
      {#snippet media()}
        <img
          alt="avatar"
          class="ios:h-7 material:h-6 rounded-full"
          src="https://cdn.framework7.io/placeholder/people-100x100-7.jpg"
        />
      {/snippet}
      Adam Smith
    </Chip>
  </Block>
  <BlockTitle class=" bg-b bg-b">Color Chips</BlockTitle>
  <Block strong inset>
    <Chip
      class="m-0.5"
      colors={{ fillBg: 'bg-red-500', fillText: 'text-white' }}
    >
      Red Chip
    </Chip>
    <Chip
      class="m-0.5"
      colors={{ fillBg: 'bg-green-500', fillText: 'text-white' }}
    >
      Green Chip
    </Chip>
    <Chip
      class="m-0.5"
      colors={{ fillBg: 'bg-blue-500', fillText: 'text-white' }}
    >
      Blue Chip
    </Chip>
    <Chip
      class="m-0.5"
      colors={{ fillBg: 'bg-yellow-500', fillText: 'text-white' }}
    >
      Yellow Chip
    </Chip>
    <Chip
      class="m-0.5"
      colors={{ fillBg: 'bg-pink-500', fillText: 'text-white' }}
    >
      Pink Chip
    </Chip>
    <Chip
      class="m-0.5"
      outline
      colors={{ outlineBorder: 'border-red-500', outlineText: 'text-red-500' }}
    >
      Red Chip
    </Chip>
    <Chip
      class="m-0.5"
      outline
      colors={{
        outlineBorder: 'border-green-500',
        outlineText: 'text-green-500',
      }}
    >
      Green Chip
    </Chip>
    <Chip
      class="m-0.5"
      outline
      colors={{
        outlineBorder: 'border-blue-500',
        outlineText: 'text-blue-500',
      }}
    >
      Blue Chip
    </Chip>
    <Chip
      class="m-0.5"
      outline
      colors={{
        outlineBorder: 'border-yellow-500',
        outlineText: 'text-yellow-500',
      }}
    >
      Yellow Chip
    </Chip>
    <Chip
      class="m-0.5"
      outline
      colors={{
        outlineBorder: 'border-pink-500',
        outlineText: 'text-pink-500',
      }}
    >
      Pink Chip
    </Chip>
  </Block>
</Page>
