import React from 'react';
import {
  Page,
  Navbar,
  NavbarBackLink,
  Chip,
  Block,
  BlockTitle,
} from 'konsta/react';

export default function ChipsPage() {
  const isPreview = document.location.href.includes('examplePreview');
  return (
    <Page>
      <Navbar
        title="Chips"
        left={!isPreview && <NavbarBackLink onClick={() => history.back()} />}
      />

      <BlockTitle>Chips With Text</BlockTitle>
      <Block strong inset>
        <Chip className="m-0.5">Example Chip</Chip>
        <Chip className="m-0.5">Another Chip</Chip>
        <Chip className="m-0.5">One More Chip</Chip>
        <Chip className="m-0.5">Fourth Chip</Chip>
        <Chip className="m-0.5">Last One</Chip>
      </Block>

      <BlockTitle>Outline Chips</BlockTitle>
      <Block strong inset>
        <Chip outline className="m-0.5">
          Example Chip
        </Chip>
        <Chip outline className="m-0.5">
          Another Chip
        </Chip>
        <Chip outline className="m-0.5">
          One More Chip
        </Chip>
        <Chip outline className="m-0.5">
          Fourth Chip
        </Chip>
        <Chip outline className="m-0.5">
          Last One
        </Chip>
      </Block>

      <BlockTitle>Contact Chips</BlockTitle>
      <Block strong inset>
        <Chip
          className="m-0.5"
          media={
            <img
              alt="avatar"
              className="ios:h-7 material:h-6 rounded-full"
              src="https://cdn.framework7.io/placeholder/people-100x100-9.jpg"
            />
          }
        >
          Jane Doe
        </Chip>
        <Chip
          className="m-0.5"
          media={
            <img
              alt="avatar"
              className="ios:h-7 material:h-6 rounded-full"
              src="https://cdn.framework7.io/placeholder/people-100x100-3.jpg"
            />
          }
        >
          John Doe
        </Chip>
        <Chip
          className="m-0.5"
          media={
            <img
              alt="avatar"
              className="ios:h-7 material:h-6 rounded-full"
              src="https://cdn.framework7.io/placeholder/people-100x100-7.jpg"
            />
          }
        >
          Adam Smith
        </Chip>
      </Block>

      <BlockTitle>Deletable Chips / Tags</BlockTitle>
      <Block strong inset>
        <Chip
          className="m-0.5"
          deleteButton
          onDelete={() => console.log('Delete Chip')}
        >
          Example Chip
        </Chip>
        <Chip
          className="m-0.5"
          deleteButton
          onDelete={() => console.log('Delete Chip')}
          media={
            <img
              alt="avatar"
              className="ios:h-7 material:h-6 rounded-full"
              src="https://cdn.framework7.io/placeholder/people-100x100-7.jpg"
            />
          }
        >
          Adam Smith
        </Chip>
      </Block>
      <BlockTitle>Color Chips</BlockTitle>
      <Block strong inset>
        <Chip
          className="m-0.5"
          colors={{ fillBg: 'bg-red-500', fillText: 'text-white' }}
        >
          Red Chip
        </Chip>
        <Chip
          className="m-0.5"
          colors={{ fillBg: 'bg-green-500', fillText: 'text-white' }}
        >
          Green Chip
        </Chip>
        <Chip
          className="m-0.5"
          colors={{ fillBg: 'bg-blue-500', fillText: 'text-white' }}
        >
          Blue Chip
        </Chip>
        <Chip
          className="m-0.5"
          colors={{ fillBg: 'bg-yellow-500', fillText: 'text-white' }}
        >
          Yellow Chip
        </Chip>
        <Chip
          className="m-0.5"
          colors={{ fillBg: 'bg-pink-500', fillText: 'text-white' }}
        >
          Pink Chip
        </Chip>
        <Chip
          className="m-0.5"
          outline
          colors={{
            outlineBorder: 'border-red-500',
            outlineText: 'text-red-500',
          }}
        >
          Red Chip
        </Chip>
        <Chip
          className="m-0.5"
          outline
          colors={{
            outlineBorder: 'border-green-500',
            outlineText: 'text-green-500',
          }}
        >
          Green Chip
        </Chip>
        <Chip
          className="m-0.5"
          outline
          colors={{
            outlineBorder: 'border-blue-500',
            outlineText: 'text-blue-500',
          }}
        >
          Blue Chip
        </Chip>
        <Chip
          className="m-0.5"
          outline
          colors={{
            outlineBorder: 'border-yellow-500',
            outlineText: 'text-yellow-500',
          }}
        >
          Yellow Chip
        </Chip>
        <Chip
          className="m-0.5"
          outline
          colors={{
            outlineBorder: 'border-pink-500',
            outlineText: 'text-pink-500',
          }}
        >
          Pink Chip
        </Chip>
      </Block>
    </Page>
  );
}
ChipsPage.displayName = 'ChipsPage';
