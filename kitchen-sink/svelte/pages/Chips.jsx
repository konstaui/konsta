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
      <Block strong>
        <Chip className="m-0.5">Example Chip</Chip>
        <Chip className="m-0.5">Another Chip</Chip>
        <Chip className="m-0.5">One More Chip</Chip>
        <Chip className="m-0.5">Fourth Chip</Chip>
        <Chip className="m-0.5">Last One</Chip>
      </Block>

      <BlockTitle>Outline Chips</BlockTitle>
      <Block strong>
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
      <Block strong>
        <Chip
          className="m-0.5"
          media={
            <img
              alt="avatar"
              className="h-7 rounded-full"
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
              className="h-7 rounded-full"
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
              className="h-7 rounded-full"
              src="https://cdn.framework7.io/placeholder/people-100x100-7.jpg"
            />
          }
        >
          Adam Smith
        </Chip>
      </Block>

      <BlockTitle>Deletable Chips / Tags</BlockTitle>
      <Block strong>
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
              className="h-7 rounded-full"
              src="https://cdn.framework7.io/placeholder/people-100x100-7.jpg"
            />
          }
        >
          Adam Smith
        </Chip>
      </Block>
      <BlockTitle className=" bg-b bg-b">Color Chips</BlockTitle>
      <Block strong>
        <Chip
          className="m-0.5"
          colors={{ bg: 'bg-red-500', text: 'text-white' }}
        >
          Red Chip
        </Chip>
        <Chip
          className="m-0.5"
          colors={{ bg: 'bg-green-500', text: 'text-white' }}
        >
          Green Chip
        </Chip>
        <Chip
          className="m-0.5"
          colors={{ bg: 'bg-blue-500', text: 'text-white' }}
        >
          Blue Chip
        </Chip>
        <Chip
          className="m-0.5"
          colors={{ bg: 'bg-yellow-500', text: 'text-white' }}
        >
          Yellow Chip
        </Chip>
        <Chip
          className="m-0.5"
          colors={{ bg: 'bg-pink-500', text: 'text-white' }}
        >
          Pink Chip
        </Chip>
        <Chip
          className="m-0.5"
          outline
          colors={{ border: 'border-red-500', text: 'text-red-500' }}
        >
          Red Chip
        </Chip>
        <Chip
          className="m-0.5"
          outline
          colors={{ border: 'border-green-500', text: 'text-green-500' }}
        >
          Green Chip
        </Chip>
        <Chip
          className="m-0.5"
          outline
          colors={{ border: 'border-blue-500', text: 'text-blue-500' }}
        >
          Blue Chip
        </Chip>
        <Chip
          className="m-0.5"
          outline
          colors={{ border: 'border-yellow-500', text: 'text-yellow-500' }}
        >
          Yellow Chip
        </Chip>
        <Chip
          className="m-0.5"
          outline
          colors={{ border: 'border-pink-500', text: 'text-pink-500' }}
        >
          Pink Chip
        </Chip>
      </Block>
    </Page>
  );
}
ChipsPage.displayName = 'ChipsPage';
