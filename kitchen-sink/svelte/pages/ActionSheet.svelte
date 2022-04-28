<script>
  import {
    Page,
    Navbar,
    NavbarBackLink,
    BlockTitle,
    Block,
    Button,
    Actions,
    ActionsButton,
    ActionsLabel,
    ActionsGroup,
  } from 'konsta/svelte';

  const isPreview = document.location.href.includes('examplePreview');

  let actionsOneOpened = false;
  let actionsTwoOpened = false;
</script>

<Page>
  <Navbar title="Action Sheet">
    <svelte:fragment slot="left">
      {#if !isPreview}
        <NavbarBackLink onClick={() => history.back()} />
      {/if}
    </svelte:fragment>
  </Navbar>

  <Block strong class="space-y-4">
    <p>
      Action Sheet is a slide-up pane for presenting the user with a set of
      alternatives for how to proceed with a given task.
    </p>
  </Block>
  <BlockTitle>Open Action Sheet</BlockTitle>
  <Block strong class="flex space-x-4">
    <Button onClick={() => (actionsOneOpened = true)}>One group</Button>
    <Button onClick={() => (actionsTwoOpened = true)}>Two groups</Button>
  </Block>

  <Actions
    opened={actionsOneOpened}
    onBackdropClick={() => (actionsOneOpened = false)}
  >
    <ActionsGroup>
      <ActionsLabel>Do something</ActionsLabel>
      <ActionsButton onClick={() => (actionsOneOpened = false)} bold>
        Button 1
      </ActionsButton>
      <ActionsButton onClick={() => (actionsOneOpened = false)}>
        Button 2
      </ActionsButton>
      <ActionsButton
        onClick={() => (actionsOneOpened = false)}
        colors={{ text: 'text-red-500' }}
      >
        Cancel
      </ActionsButton>
    </ActionsGroup>
  </Actions>

  <Actions
    opened={actionsTwoOpened}
    onBackdropClick={() => (actionsTwoOpened = false)}
  >
    <ActionsGroup>
      <ActionsLabel>Do something</ActionsLabel>
      <ActionsButton onClick={() => (actionsTwoOpened = false)} bold>
        Button 1
      </ActionsButton>
      <ActionsButton onClick={() => (actionsTwoOpened = false)}>
        Button 2
      </ActionsButton>
    </ActionsGroup>
    <ActionsGroup>
      <ActionsButton
        onClick={() => (actionsTwoOpened = false)}
        colors={{ text: 'text-red-500' }}
      >
        Cancel
      </ActionsButton>
    </ActionsGroup>
  </Actions>
</Page>
