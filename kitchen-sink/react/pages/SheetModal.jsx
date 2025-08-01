import React, { useState } from 'react';
import {
  Page,
  Navbar,
  NavbarBackLink,
  Sheet,
  Block,
  Button,
  Toolbar,
  ToolbarPane,
  Link,
} from 'konsta/react';
import CloseIcon from '../components/CloseIcon';

export default function SheetModalPage() {
  const isPreview = document.location.href.includes('examplePreview');
  const [sheetOpened, setSheetOpened] = useState(false);
  return (
    <Page>
      <Navbar
        title="Sheet Modal"
        left={!isPreview && <NavbarBackLink onClick={() => history.back()} />}
      />

      <Block strong inset className="space-y-4">
        <p>
          Sheet Modals slide up from the bottom of the screen to reveal more
          content. Such modals allow to create custom overlays with custom
          content.
        </p>
        <p>
          <Button rounded onClick={() => setSheetOpened(true)}>
            Open Sheet
          </Button>
        </p>
      </Block>

      <Sheet
        className="pb-safe"
        opened={sheetOpened}
        onBackdropClick={() => setSheetOpened(false)}
      >
        <Toolbar top className="justify-end ios:pt-4">
          <div className="ios:hidden" />
          <ToolbarPane>
            <Link iconOnly onClick={() => setSheetOpened(false)}>
              <CloseIcon />
            </Link>
          </ToolbarPane>
        </Toolbar>
        <Block className="ios:mt-4">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum ad
            excepturi nesciunt nobis aliquam. Quibusdam ducimus neque
            necessitatibus, molestias cupiditate velit nihil alias incidunt,
            excepturi voluptatem dolore itaque sapiente dolores!
          </p>
          <div className="mt-8">
            <Button large rounded onClick={() => setSheetOpened(false)}>
              Action
            </Button>
          </div>
        </Block>
      </Sheet>
    </Page>
  );
}
SheetModalPage.displayName = 'SheetModalPage';
