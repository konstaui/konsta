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
    {#snippet left()}
      {#if !isPreview}
        <NavbarBackLink onclick={() => history.back()} />
      {/if}
    {/snippet}
  </Navbar>

  <Block strong inset class="space-y-4">
    <p>
      Action Sheet is a slide-up pane for presenting the user with a set of
      alternatives for how to proceed with a given task.
    </p>
  </Block>
  <BlockTitle>Open Action Sheet</BlockTitle>
  <Block strong inset class="flex space-x-4 rtl:space-x-reverse">
    <Button rounded onclick={() => (actionsOneOpened = true)}>One group</Button>
    <Button rounded onclick={() => (actionsTwoOpened = true)}>Two groups</Button
    >
  </Block>

  <Actions
    opened={actionsOneOpened}
    onBackdropClick={() => (actionsOneOpened = false)}
  >
    <ActionsGroup>
      <ActionsLabel>Do something</ActionsLabel>
      <ActionsButton onclick={() => (actionsOneOpened = false)} bold>
        Button 1
      </ActionsButton>
      <ActionsButton onclick={() => (actionsOneOpened = false)}>
        Button 2
      </ActionsButton>
      <ActionsButton onclick={() => (actionsOneOpened = false)}>
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
      <ActionsButton onclick={() => (actionsTwoOpened = false)} bold>
        Button 1
      </ActionsButton>
      <ActionsButton onclick={() => (actionsTwoOpened = false)}>
        Button 2
      </ActionsButton>
    </ActionsGroup>
    <ActionsGroup>
      <ActionsButton onclick={() => (actionsTwoOpened = false)}>
        Cancel
      </ActionsButton>
    </ActionsGroup>
  </Actions>
</Page>
