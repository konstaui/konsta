import React, { useState } from 'react';
import {
  Page,
  Navbar,
  NavbarBackLink,
  Button,
  Block,
  BlockTitle,
  Actions,
  ActionsGroup,
  ActionsLabel,
  ActionsButton,
} from 'konsta/react';

export default function ActionSheetPage() {
  const isPreview = document.location.href.includes('examplePreview');

  const [actionsOneOpened, setActionsOneOpened] = useState(false);
  const [actionsTwoOpened, setActionsTwoOpened] = useState(false);
  return (
    <Page>
      <Navbar
        title="Action Sheet"
        left={!isPreview && <NavbarBackLink onClick={() => history.back()} />}
      />
      <Block strong inset className="space-y-4">
        <p>
          Action Sheet is a slide-up pane for presenting the user with a set of
          alternatives for how to proceed with a given task.
        </p>
      </Block>
      <BlockTitle>Open Action Sheet</BlockTitle>
      <Block strong inset className="flex space-x-4">
        <Button onClick={() => setActionsOneOpened(true)}>One group</Button>
        <Button onClick={() => setActionsTwoOpened(true)}>Two groups</Button>
      </Block>

      <Actions
        opened={actionsOneOpened}
        onBackdropClick={() => setActionsOneOpened(false)}
      >
        <ActionsGroup>
          <ActionsLabel>Do something</ActionsLabel>
          <ActionsButton onClick={() => setActionsOneOpened(false)} bold>
            Button 1
          </ActionsButton>
          <ActionsButton onClick={() => setActionsOneOpened(false)}>
            Button 2
          </ActionsButton>
          <ActionsButton onClick={() => setActionsOneOpened(false)}>
            Cancel
          </ActionsButton>
        </ActionsGroup>
      </Actions>

      <Actions
        opened={actionsTwoOpened}
        onBackdropClick={() => setActionsTwoOpened(false)}
      >
        <ActionsGroup>
          <ActionsLabel>Do something</ActionsLabel>
          <ActionsButton onClick={() => setActionsTwoOpened(false)} bold>
            Button 1
          </ActionsButton>
          <ActionsButton onClick={() => setActionsTwoOpened(false)}>
            Button 2
          </ActionsButton>
        </ActionsGroup>
        <ActionsGroup>
          <ActionsButton onClick={() => setActionsTwoOpened(false)}>
            Cancel
          </ActionsButton>
        </ActionsGroup>
      </Actions>
    </Page>
  );
}
ActionSheetPage.displayName = 'ActionSheetPage';
