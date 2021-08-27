import React, { useState } from 'react';
import { Block, MenuList, MenuListItem } from 'tailwind-mobile/react';
import DemoIcon from '../components/DemoIcon';
import Page from '../components/Page';

export default function MenuListPage() {
  const [selected, setSelected] = useState('home');
  const [selectedMedia, setSelectedMedia] = useState('home');

  return (
    <Page title="Menu List">
      <Block strong>
        <p>
          Menu list unlike usual links list is designed to indicate currently
          active screen (or section) of your app. Think about it like a Tabbar
          but in a form of a list.
        </p>
      </Block>
      <MenuList>
        <MenuListItem
          title="Home"
          active={selected === 'home'}
          onClick={() => setSelected('home')}
          media={<DemoIcon />}
        />
        <MenuListItem
          title="Profile"
          active={selected === 'profile'}
          onClick={() => setSelected('profile')}
          media={<DemoIcon />}
        />
        <MenuListItem
          title="Settings"
          active={selected === 'settings'}
          onClick={() => setSelected('settings')}
          media={<DemoIcon />}
        />
      </MenuList>

      <MenuList>
        <MenuListItem
          title="Home"
          subtitle="Home subtitle"
          active={selectedMedia === 'home'}
          onClick={() => setSelectedMedia('home')}
          media={<DemoIcon />}
        />
        <MenuListItem
          title="Profile"
          subtitle="Profile subtitle"
          active={selectedMedia === 'profile'}
          onClick={() => setSelectedMedia('profile')}
          media={<DemoIcon />}
        />
        <MenuListItem
          title="Settings"
          subtitle="Settings subtitle"
          active={selectedMedia === 'settings'}
          onClick={() => setSelectedMedia('settings')}
          media={<DemoIcon />}
        />
      </MenuList>
    </Page>
  );
}
MenuListPage.displayName = 'MenuListPage';
