import React, { useState } from 'react';
import {
  Page,
  Navbar,
  NavbarBackLink,
  Dialog,
  DialogButton,
  Block,
  Button,
} from 'konsta/react';

export default function DialogPage() {
  const isPreview = document.location.href.includes('examplePreview');
  const [opened, setOpened] = useState(true);
  return (
    <Page>
      <Navbar
        title="Dialog"
        left={!isPreview && <NavbarBackLink onClick={() => history.back()} />}
      />

      <Block strong inset className="space-y-4">
        <p>
          A dialog is a type of modal window that appears in front of app
          content to provide critical information, or prompt for a decision to
          be made.
        </p>
        <p>
          <Button rounded onClick={() => setOpened(true)}>
            Open Dialog
          </Button>
        </p>
      </Block>
      <Dialog
        opened={opened}
        onBackdropClick={() => setOpened(false)}
        title="This is Title"
        content="A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made."
        buttons={
          <>
            <DialogButton disabled onClick={() => setOpened(false)}>
              Action 2
            </DialogButton>
            <DialogButton strong onClick={() => setOpened(false)}>
              Action 1
            </DialogButton>
          </>
        }
      >
        {/* Hello */}
      </Dialog>
    </Page>
  );
}
DialogPage.displayName = 'DialogPage';
