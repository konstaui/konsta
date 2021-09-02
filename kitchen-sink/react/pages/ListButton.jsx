import React from 'react';
import {
  Page,
  Navbar,
  NavbarBackLink,
  List,
  ListButton,
} from 'tailwind-mobile/react';

export default function ListButtonPage() {
  const isPreview = document.location.href.includes('examplePreview');
  return (
    <Page>
      <Navbar
        title="List Button"
        left={!isPreview && <NavbarBackLink onClick={() => history.back()} />}
      />

      <List>
        <ListButton>Button 1</ListButton>
        <ListButton>Button 2</ListButton>
        <ListButton>Button 3</ListButton>
      </List>

      <List inset>
        <ListButton>Button 1</ListButton>
        <ListButton>Button 2</ListButton>
        <ListButton>Button 3</ListButton>
      </List>
      <List inset>
        <ListButton
          colors={{
            text: 'text-red-500',
            activeBg: 'active:bg-red-500',
            touchRipple: 'touch-ripple-red-500',
          }}
        >
          Red Button
        </ListButton>
      </List>
    </Page>
  );
}
ListButtonPage.displayName = 'ListButtonPage';
