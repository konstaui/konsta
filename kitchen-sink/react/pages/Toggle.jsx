import React, { useState } from 'react';
import {
  Page,
  Navbar,
  NavbarBackLink,
  List,
  ListItem,
  Toggle,
} from 'tailwind-mobile/react';

export default function TogglePage() {
  const isPreview = document.location.href.includes('examplePreview');
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(true);
  const [checked4, setChecked4] = useState(true);
  return (
    <Page>
      <Navbar
        title="Toggle"
        left={!isPreview && <NavbarBackLink onClick={() => history.back()} />}
      />

      <List>
        <ListItem
          title="Item 1"
          after={
            <Toggle
              className="-my-1"
              checked={checked1}
              onChange={() => setChecked1(!checked1)}
            />
          }
        />
        <ListItem
          title="Item 2"
          after={
            <Toggle
              className="-my-1"
              colors={{ bg: 'bg-red-500' }}
              checked={checked2}
              onChange={() => setChecked2(!checked2)}
            />
          }
        />
        <ListItem
          title="Item 3"
          after={
            <Toggle
              className="-my-1"
              colors={{ bg: 'bg-green-500' }}
              checked={checked3}
              onChange={() => setChecked3(!checked3)}
            />
          }
        />
        <ListItem
          title="Item 4"
          after={
            <Toggle
              className="-my-1"
              colors={{ bg: 'bg-yellow-500' }}
              checked={checked4}
              onChange={() => setChecked4(!checked4)}
            />
          }
        />
      </List>
    </Page>
  );
}
TogglePage.displayName = 'TogglePage';
