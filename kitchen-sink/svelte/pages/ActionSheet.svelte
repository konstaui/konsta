<script>
  import {
    Actions,
    ActionsButton,
    ActionsGroup,
    ActionsLabel,
    Block,
    BlockTitle,
    Button,
    Navbar,
    NavbarBackLink,
    Page,
  } from 'konsta/svelte';

  const isPreview = document.location.href.includes('examplePreview');

  let actionsOneOpened = false;
  let actionsTwoOpened = false;
</script>

<Page>
  <Navbar title="Action Sheet">
    <svelte:fragment slot="left">
      {#if !isPreview}
        <NavbarBackLink on:click={() => history.back()} />
      {/if}
    </svelte:fragment>
  </Navbar>

  <Block strong inset class="space-y-4">
    <p>
      Action Sheet is a slide-up pane for presenting the user with a set of
      alternatives for how to proceed with a given task.
    </p>
  </Block>
  <BlockTitle>Open Action Sheet</BlockTitle>
  <Block strong inset class="flex space-x-4">
    <Button on:click={() => (actionsOneOpened = true)}>One group</Button>
    <Button on:click={() => (actionsTwoOpened = true)}>Two groups</Button>
  </Block>

  <Actions
    opened={actionsOneOpened}
    on:backdropClick={() => (actionsOneOpened = false)}
  >
    <ActionsGroup>
      <ActionsLabel>Do something</ActionsLabel>
      <ActionsButton on:click={() => (actionsOneOpened = false)} bold>
        Button 1
      </ActionsButton>
      <ActionsButton on:click={() => (actionsOneOpened = false)}>
        Button 2
      </ActionsButton>
      <ActionsButton on:click={() => (actionsOneOpened = false)}>
        Cancel
      </ActionsButton>
    </ActionsGroup>
  </Actions>

  <Actions
    opened={actionsTwoOpened}
    on:backdropClick={() => (actionsTwoOpened = false)}
  >
    <ActionsGroup>
      <ActionsLabel>Do something</ActionsLabel>
      <ActionsButton on:click={() => (actionsTwoOpened = false)} bold>
        Button 1
      </ActionsButton>
      <ActionsButton on:click={() => (actionsTwoOpened = false)}>
        Button 2
      </ActionsButton>
    </ActionsGroup>
    <ActionsGroup>
      <ActionsButton on:click={() => (actionsTwoOpened = false)}>
        Cancel
      </ActionsButton>
    </ActionsGroup>
  </Actions>
</Page>
