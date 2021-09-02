import React from 'react';
import { List, ListButton } from 'tailwind-mobile/react';
import Page from '../components/Page';

export default function ListButtonPage() {
  return (
    <Page title="List Button">
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
