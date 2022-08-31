import React, { useState } from 'react';
import {
  Page,
  Navbar,
  NavbarBackLink,
  Toolbar,
  Link,
  Block,
  Button,
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
            ? 'ios:top-11-safe material:top-14-safe sticky'
            : 'bottom-0 fixed'
        } w-full`}
      >
        <Link toolbar>Link 1</Link>
        <Link toolbar>Link 2</Link>
        <Link toolbar>Link 3</Link>
      </Toolbar>

      <Block strongIos outlineIos className="space-y-4">
        <p>
          Toolbar supports both top and bottom positions. Click the following
          button to change its position.
        </p>
        <p>
          <Button
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
