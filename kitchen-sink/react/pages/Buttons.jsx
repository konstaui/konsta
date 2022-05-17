import React from 'react';
import {
  Page,
  Navbar,
  NavbarBackLink,
  Button,
  Block,
  BlockTitle,
} from 'konsta/react';

export default function ButtonsPage() {
  const isPreview = document.location.href.includes('examplePreview');
  return (
    <Page>
      <Navbar
        title="Buttons"
        left={!isPreview && <NavbarBackLink onClick={() => history.back()} />}
      />

      <BlockTitle>Default Buttons</BlockTitle>
      <Block strong className="space-y-2">
        <div className="grid grid-cols-3 gap-x-4">
          <Button>Button</Button>
          <Button
            colors={{
              text: 'text-red-500',
              border: 'border-red-500',
              bg: 'bg-red-500',
              activeBg: 'active:bg-red-500',
              activeBgDark: 'active:bg-red-600',
            }}
          >
            Button
          </Button>
          <Button>Button</Button>
        </div>
        <div className="grid grid-cols-3 gap-x-4">
          <Button outline>Outline</Button>
          <Button
            colors={{
              text: 'text-red-500',
              border: 'border-red-500',
              bg: 'bg-red-500',
              activeBg: 'active:bg-red-500',
              activeBgDark: 'active:bg-red-600',
              touchRipple: 'touch-ripple-red-500',
            }}
            outline
          >
            Outline
          </Button>
          <Button outline>Outline</Button>
        </div>
        <div className="grid grid-cols-3 gap-x-4">
          <Button clear>Clear</Button>
          <Button
            colors={{
              text: 'text-red-500',
              border: 'border-red-500',
              bg: 'bg-red-500',
              activeBg: 'active:bg-red-500',
              activeBgDark: 'active:bg-red-600',
              touchRipple: 'touch-ripple-red-500',
            }}
            clear
          >
            Clear
          </Button>
          <Button clear>Clear</Button>
        </div>
      </Block>

      <BlockTitle>Rounded Buttons</BlockTitle>
      <Block strong className="space-y-2">
        <div className="grid grid-cols-3 gap-x-4">
          <Button rounded>Button</Button>
          <Button rounded>Button</Button>
          <Button rounded>Button</Button>
        </div>
        <div className="grid grid-cols-3 gap-x-4">
          <Button rounded outline>
            Outline
          </Button>
          <Button rounded outline>
            Outline
          </Button>
          <Button rounded outline>
            Outline
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-x-4">
          <Button rounded clear>
            Clear
          </Button>
          <Button rounded clear>
            Clear
          </Button>
          <Button rounded clear>
            Clear
          </Button>
        </div>
      </Block>

      <BlockTitle>Large Buttons</BlockTitle>
      <Block strong className="space-y-2">
        <div className="grid grid-cols-3 gap-x-4">
          <Button large>Button</Button>
          <Button large>Button</Button>
          <Button large rounded>
            Button
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-x-4">
          <Button large outline>
            Outline
          </Button>
          <Button large outline>
            Outline
          </Button>
          <Button large rounded outline>
            Outline
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-x-4">
          <Button large clear>
            Clear
          </Button>
          <Button large clear>
            Clear
          </Button>
          <Button large rounded clear>
            Clear
          </Button>
        </div>
      </Block>

      <BlockTitle>Small Buttons</BlockTitle>
      <Block strong className="space-y-2">
        <div className="grid grid-cols-3 gap-x-4">
          <Button small>Button</Button>
          <Button small>Button</Button>
          <Button small rounded>
            Button
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-x-4">
          <Button small outline>
            Outline
          </Button>
          <Button small outline>
            Outline
          </Button>
          <Button small rounded outline>
            Outline
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-x-4">
          <Button small clear>
            Clear
          </Button>
          <Button small clear>
            Clear
          </Button>
          <Button small rounded clear>
            Clear
          </Button>
        </div>
      </Block>

      <BlockTitle>Raised Buttons</BlockTitle>
      <Block strong className="space-y-2">
        <div className="grid grid-cols-3 gap-x-4">
          <Button raised>Button</Button>
          <Button raised>Button</Button>
          <Button raised rounded>
            Button
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-x-4">
          <Button raised outline>
            Outline
          </Button>
          <Button raised outline>
            Outline
          </Button>
          <Button raised rounded outline>
            Outline
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-x-4">
          <Button raised clear>
            Clear
          </Button>
          <Button raised clear>
            Clear
          </Button>
          <Button raised rounded clear>
            Clear
          </Button>
        </div>
      </Block>

      <BlockTitle>Disabled Buttons</BlockTitle>
      <Block strong className="space-y-2">
        <div className="grid grid-cols-3 gap-x-4">
          <Button disabled>Button</Button>
          <Button disabled outline>
            Outline
          </Button>
          <Button disabled clear>
            Clear
          </Button>
        </div>
      </Block>
    </Page>
  );
}
ButtonsPage.displayName = 'ButtonsPage';
