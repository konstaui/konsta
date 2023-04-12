import React, { useState } from 'react';
import {
  Page,
  Navbar,
  NavbarBackLink,
  Panel,
  BlockTitle,
  Block,
  Link,
  Button,
} from 'konsta/react';

export default function SidePanelsPage() {
  const isPreview = document.location.href.includes('examplePreview');
  const [leftPanelOpened, setLeftPanelOpened] = useState(false);
  const [rightPanelOpened, setRightPanelOpened] = useState(false);

  const [leftFloatingPanelOpened, setLeftFloatingPanelOpened] = useState(false);
  const [rightFloatingPanelOpened, setRightFloatingPanelOpened] =
    useState(false);
  return (
    <Page>
      <Navbar
        title="Panel / Side Panel"
        left={!isPreview && <NavbarBackLink onClick={() => history.back()} />}
      />

      <Block strongIos outlineIos className="space-y-4">
        <p>
          Konsta UI comes with 2 panels (on left and on right), both are
          optional. You can put absolutely anything inside: data lists, forms,
          custom content, etc.
        </p>
      </Block>
      <Block
        strongIos
        outlineIos
        className="flex space-x-4 rtl:space-x-reverse"
      >
        <Button rounded onClick={() => setLeftPanelOpened(true)}>
          Left Panel
        </Button>
        <Button rounded onClick={() => setRightPanelOpened(true)}>
          Right Panel
        </Button>
      </Block>
      <BlockTitle>Floating Panels</BlockTitle>
      <Block
        strongIos
        outlineIos
        className="flex space-x-4 rtl:space-x-reverse"
      >
        <Button rounded onClick={() => setLeftFloatingPanelOpened(true)}>
          Left Panel
        </Button>
        <Button rounded onClick={() => setRightFloatingPanelOpened(true)}>
          Right Panel
        </Button>
      </Block>

      <Panel
        side="left"
        opened={leftPanelOpened}
        onBackdropClick={() => setLeftPanelOpened(false)}
      >
        <Page>
          <Navbar
            title="Left Panel"
            right={
              <Link navbar onClick={() => setLeftPanelOpened(false)}>
                Close
              </Link>
            }
          />
          <Block className="space-y-4">
            <p>Here comes left panel.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse faucibus mauris leo, eu bibendum neque congue non. Ut
              leo mauris, eleifend eu commodo a, egestas ac urna. Maecenas in
              lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam
              lacinia venenatis dignissim. Suspendisse non nisl semper tellus
              malesuada suscipit eu et eros. Nulla eu enim quis quam elementum
              vulputate. Mauris ornare consequat nunc viverra pellentesque.
              Aenean semper eu massa sit amet aliquam. Integer et neque sed
              libero mollis elementum at vitae ligula. Vestibulum pharetra sed
              libero sed porttitor. Suspendisse a faucibus lectus.
            </p>
          </Block>
        </Page>
      </Panel>

      <Panel
        side="right"
        opened={rightPanelOpened}
        onBackdropClick={() => setRightPanelOpened(false)}
      >
        <Page>
          <Navbar
            title="Right Panel"
            right={
              <Link navbar onClick={() => setRightPanelOpened(false)}>
                Close
              </Link>
            }
          />
          <Block className="space-y-4">
            <p>Here comes right panel.</p>
            <p>
              Duis ut mauris sollicitudin, venenatis nisi sed, luctus ligula.
              Phasellus blandit nisl ut lorem semper pharetra. Nullam tortor
              nibh, suscipit in consequat vel, feugiat sed quam. Nam risus
              libero, auctor vel tristique ac, malesuada ut ante. Sed molestie,
              est in eleifend sagittis, leo tortor ullamcorper erat, at
              vulputate eros sapien nec libero. Mauris dapibus laoreet nibh quis
              bibendum. Fusce dolor sem, suscipit in iaculis id, pharetra at
              urna. Pellentesque tempor congue massa quis faucibus. Vestibulum
              nunc eros, convallis blandit dui sit amet, gravida adipiscing
              libero.
            </p>
          </Block>
        </Page>
      </Panel>

      <Panel
        side="left"
        floating
        opened={leftFloatingPanelOpened}
        onBackdropClick={() => setLeftFloatingPanelOpened(false)}
      >
        <Page className="no-safe-areas-top no-safe-areas-bottom">
          <Navbar
            title="Left Panel"
            right={
              <Link navbar onClick={() => setLeftFloatingPanelOpened(false)}>
                Close
              </Link>
            }
          />
          <Block className="space-y-4">
            <p>Here comes left panel.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse faucibus mauris leo, eu bibendum neque congue non. Ut
              leo mauris, eleifend eu commodo a, egestas ac urna. Maecenas in
              lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam
              lacinia venenatis dignissim. Suspendisse non nisl semper tellus
              malesuada suscipit eu et eros. Nulla eu enim quis quam elementum
              vulputate. Mauris ornare consequat nunc viverra pellentesque.
              Aenean semper eu massa sit amet aliquam. Integer et neque sed
              libero mollis elementum at vitae ligula. Vestibulum pharetra sed
              libero sed porttitor. Suspendisse a faucibus lectus.
            </p>
          </Block>
        </Page>
      </Panel>

      <Panel
        side="right"
        floating
        opened={rightFloatingPanelOpened}
        onBackdropClick={() => setRightFloatingPanelOpened(false)}
      >
        <Page className="no-safe-areas-top no-safe-areas-bottom">
          <Navbar
            title="Right Panel"
            right={
              <Link navbar onClick={() => setRightFloatingPanelOpened(false)}>
                Close
              </Link>
            }
          />
          <Block className="space-y-4">
            <p>Here comes right panel.</p>
            <p>
              Duis ut mauris sollicitudin, venenatis nisi sed, luctus ligula.
              Phasellus blandit nisl ut lorem semper pharetra. Nullam tortor
              nibh, suscipit in consequat vel, feugiat sed quam. Nam risus
              libero, auctor vel tristique ac, malesuada ut ante. Sed molestie,
              est in eleifend sagittis, leo tortor ullamcorper erat, at
              vulputate eros sapien nec libero. Mauris dapibus laoreet nibh quis
              bibendum. Fusce dolor sem, suscipit in iaculis id, pharetra at
              urna. Pellentesque tempor congue massa quis faucibus. Vestibulum
              nunc eros, convallis blandit dui sit amet, gravida adipiscing
              libero.
            </p>
          </Block>
        </Page>
      </Panel>
    </Page>
  );
}
SidePanelsPage.displayName = 'SidePanelsPage';
SidePanelsPage.title = 'Panel / Side Panels';
