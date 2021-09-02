import React from 'react';
import {
  Page,
  Navbar,
  NavbarBackLink,
  Block,
  BlockFooter,
  BlockHeader,
  BlockTitle,
} from 'tailwind-mobile/react';

export default function ContentBlockPage() {
  const isPreview = document.location.href.includes('examplePreview');
  return (
    <Page>
      <Navbar
        title="Content Block"
        left={!isPreview && <NavbarBackLink onClick={() => history.back()} />}
      />

      <Block>
        <p>
          Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
          Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
          mollis, vulputate turpis vel, sagittis felis.
        </p>
      </Block>
      <BlockTitle>Block Title</BlockTitle>
      <Block strong>
        <p>
          Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
          Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
          mollis, vulputate turpis vel, sagittis felis.
        </p>
      </Block>
      <BlockTitle>With Header & Footer</BlockTitle>
      <BlockHeader>Header</BlockHeader>
      <Block strong>
        <p>
          Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
          Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
          mollis, vulputate turpis vel, sagittis felis.
        </p>
      </Block>
      <BlockFooter>Footer</BlockFooter>
      <BlockTitle className="text-2xl">Medium Title</BlockTitle>
      <Block strong>
        <p>
          Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
          Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
          mollis, vulputate turpis vel, sagittis felis.
        </p>
      </Block>
      <BlockTitle className="text-3xl">Large Title</BlockTitle>
      <Block strong>
        <p>
          Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
          Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
          mollis, vulputate turpis vel, sagittis felis.
        </p>
      </Block>

      <BlockTitle>Inset Block</BlockTitle>
      <Block strong inset>
        <p>
          Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
          Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
          mollis, vulputate turpis vel, sagittis felis.
        </p>
      </Block>
    </Page>
  );
}
ContentBlockPage.displayName = 'ContentBlockPage';
