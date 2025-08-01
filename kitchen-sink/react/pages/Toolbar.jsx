import React, { useState } from 'react';
import {
  Page,
  Navbar,
  NavbarBackLink,
  Toolbar,
  Link,
  Block,
  Button,
  ToolbarPane,
} from 'konsta/react';

export default function ToolbarPage() {
  const isPreview = document.location.href.includes('examplePreview');
  const [isTop, setIsTop] = useState(false);
  return (
    <Page>
      <Navbar
        title="Toolbar"
        left={!isPreview && <NavbarBackLink onClick={() => history.back()} />}
      />
      <Toolbar
        top={isTop}
        className={`left-0 ${
          isTop
            ? 'ios:top-11-safe ios:mt-1 material:top-14-safe sticky'
            : 'bottom-0 fixed'
        } w-full`}
      >
        <ToolbarPane>
          <Link>Link 1</Link>
          <Link>Link 2</Link>
        </ToolbarPane>
        <ToolbarPane>
          <Link>Link 3</Link>
        </ToolbarPane>
      </Toolbar>

      <Block strong inset className="space-y-4">
        <p>
          Toolbar supports both top and bottom positions. Click the following
          button to change its position.
        </p>
        <p>
          <Button
            rounded
            onClick={() => {
              setIsTop(!isTop);
            }}
          >
            Toggle Toolbar Position
          </Button>
        </p>
      </Block>
    </Page>
  );
}
ToolbarPage.displayName = 'ToolbarPage';
