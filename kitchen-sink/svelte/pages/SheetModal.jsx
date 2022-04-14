import React, { useState } from 'react';
import {
  Page,
  Navbar,
  NavbarBackLink,
  Sheet,
  Block,
  Button,
  Toolbar,
  Link,
} from 'konsta/react';

export default function SheetModalPage() {
  const isPreview = document.location.href.includes('examplePreview');
  const [sheetOpened, setSheetOpened] = useState(false);
  return (
    <Page>
      <Navbar
        title="Sheet Modal"
        left={!isPreview && <NavbarBackLink onClick={() => history.back()} />}
      />

      <Block strong className="space-y-4">
        <p>
          Sheet Modals slide up from the bottom of the screen to reveal more
          content. Such modals allow to create custom overlays with custom
          content.
        </p>
        <p>
          <Button onClick={() => setSheetOpened(true)}>Open Sheet</Button>
        </p>
      </Block>

      <Sheet
        className="pb-safe"
        opened={sheetOpened}
        onBackdropClick={() => setSheetOpened(false)}
      >
        <Toolbar top>
          <div className="left" />
          <div className="right">
            <Link toolbar onClick={() => setSheetOpened(false)}>
              Done
            </Link>
          </div>
        </Toolbar>
        <Block>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum ad
            excepturi nesciunt nobis aliquam. Quibusdam ducimus neque
            necessitatibus, molestias cupiditate velit nihil alias incidunt,
            excepturi voluptatem dolore itaque sapiente dolores!
          </p>
          <div className="mt-4">
            <Button onClick={() => setSheetOpened(false)}>Action</Button>
          </div>
        </Block>
      </Sheet>
    </Page>
  );
}
SheetModalPage.displayName = 'SheetModalPage';
